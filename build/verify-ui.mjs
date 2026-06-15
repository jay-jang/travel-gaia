import { JSDOM } from 'jsdom';
import { readFileSync } from 'fs';
import { execSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

function runTest(name, fn) {
  try {
    fn();
    console.log(`[PASS] ${name}`);
  } catch (err) {
    console.error(`[FAIL] ${name}`);
    console.error(err);
    process.exit(1);
  }
}

async function runAsyncTest(name, fn) {
  try {
    await fn();
    console.log(`[PASS] ${name}`);
  } catch (err) {
    console.error(`[FAIL] ${name}`);
    console.error(err);
    process.exit(1);
  }
}

console.log('Starting Travel Gaia UI verification suite...\n');

// 1. Run build script and verify zero unresolved cross-references
runTest('Build Script Output and Unresolved Cross-references', () => {
  const output = execSync('node build/build.mjs', { cwd: ROOT, encoding: 'utf8' });
  console.log(output);
  if (!output.includes('unresolved cross-refs: 0')) {
    throw new Error('Verification failed: build output does not report 0 unresolved cross-references');
  }
});

// 2. Load compiled index.html
const htmlPath = join(ROOT, 'index.html');
const htmlContent = readFileSync(htmlPath, 'utf8');

const dom = new JSDOM(htmlContent, {
  runScripts: "dangerously",
  resources: "usable",
  url: "http://localhost/",
  beforeParse(window) {
    // Mock devicePixelRatio safely
    Object.defineProperty(window, 'devicePixelRatio', {
      value: 1,
      configurable: true,
      writable: true
    });

    // Mock performance.now safely if not already present
    if (!window.performance) {
      Object.defineProperty(window, 'performance', {
        value: { now: () => Date.now() },
        configurable: true,
        writable: true
      });
    }

    // Mock matchMedia safely
    Object.defineProperty(window, 'matchMedia', {
      value: function() {
        return {
          matches: false,
          addListener: function() {},
          removeListener: function() {}
        };
      },
      configurable: true,
      writable: true
    });

    // Mock HTMLCanvasElement.prototype.getContext safely
    Object.defineProperty(window.HTMLCanvasElement.prototype, 'getContext', {
      value: function(type) {
        if (type === '2d') {
          return {
            setTransform: () => {},
            clearRect: () => {},
            beginPath: () => {},
            arc: () => {},
            strokeStyle: '',
            lineWidth: 1,
            setLineDash: () => {},
            stroke: () => {},
            globalAlpha: 1,
            fillStyle: '',
            fill: () => {},
            measureText: () => ({ width: 100 }),
            fillRect: () => {},
            fillText: () => {},
            moveTo: () => {},
            lineTo: () => {},
            save: () => {},
            restore: () => {},
          };
        }
        return null;
      },
      configurable: true,
      writable: true
    });

    // Mock requestAnimationFrame & cancelAnimationFrame safely
    Object.defineProperty(window, 'requestAnimationFrame', {
      value: (callback) => setTimeout(callback, 0),
      configurable: true,
      writable: true
    });
    Object.defineProperty(window, 'cancelAnimationFrame', {
      value: (id) => clearTimeout(id),
      configurable: true,
      writable: true
    });

    // Mock layout clientWidth & clientHeight safely
    Object.defineProperty(window.HTMLDivElement.prototype, 'clientWidth', {
      get() { return 800; },
      configurable: true
    });
    Object.defineProperty(window.HTMLDivElement.prototype, 'clientHeight', {
      get() { return 600; },
      configurable: true
    });
  }
});

const { window } = dom;
const { document } = window;

// 3. Test route registrations and classroom UI elements
await runAsyncTest('Classroom Route Registry and UI Elements', async () => {
  // Trigger hash change to #/classroom
  window.location.hash = '#/classroom';
  await new Promise(resolve => setTimeout(resolve, 50));

  // Assert classroom container wrapper exists
  const classroomWrap = document.querySelector('.classroom-wrap');
  if (!classroomWrap) {
    throw new Error('Classroom layout wrapper (.classroom-wrap) not found in the DOM.');
  }

  // Assert classroom title exists
  const title = document.querySelector('#classTitle');
  if (!title) {
    throw new Error('Classroom title element (#classTitle) not found.');
  }
  if (!title.textContent.includes('Class 101')) {
    throw new Error(`Expected classroom title to contain "Class 101", but got: "${title.textContent}"`);
  }

  // Assert step count exists
  const stepCount = document.querySelector('#classStepCount');
  if (!stepCount) {
    throw new Error('Classroom step count element (#classStepCount) not found.');
  }
  if (!stepCount.textContent) {
    throw new Error('Classroom step count text is empty.');
  }

  // Assert tabs exist
  const tabs = document.querySelectorAll('.classroom-tab');
  if (tabs.length === 0) {
    throw new Error('Classroom selection tabs (.classroom-tab) not found.');
  }
  if (tabs.length < 2) {
    throw new Error(`Expected at least 2 classroom tabs, found: ${tabs.length}`);
  }

  // Assert navigation buttons exist
  const btnBack = document.querySelector('#classBtnBack');
  const btnNext = document.querySelector('#classBtnNext');
  if (!btnBack || !btnNext) {
    throw new Error('Classroom navigation buttons (#classBtnBack or #classBtnNext) not found.');
  }
});

// 4. Test Knowledge Graph initialized state & progressive node-focus exposure
await runAsyncTest('Knowledge Graph Initialization and Progressive Node Constraints', async () => {
  // Trigger hash change to #/graph
  window.location.hash = '#/graph';
  await new Promise(resolve => setTimeout(resolve, 50));

  // Check exposed state variables
  const glossaryData = window.GLOSSARY_DATA;
  if (!glossaryData) {
    throw new Error('window.GLOSSARY_DATA is not exposed on the window object.');
  }
  if (!glossaryData.entries || !Array.isArray(glossaryData.entries)) {
    throw new Error('window.GLOSSARY_DATA does not contain a valid entries array.');
  }

  const visibleNodeIds = window.kgVisibleNodeIds;
  if (!visibleNodeIds) {
    throw new Error('window.kgVisibleNodeIds is not exposed on the window object.');
  }

  const initialSize = visibleNodeIds.size;
  const totalEntries = glossaryData.entries.length;

  console.log(`Initial visible nodes: ${initialSize}`);
  console.log(`Total entries: ${totalEntries}`);

  // Assertions
  if (initialSize >= totalEntries) {
    throw new Error(`Expected initial visible nodes (${initialSize}) to be less than total entries (${totalEntries})`);
  }

  if (initialSize !== 1) {
    throw new Error(`Expected initial visible node count to be exactly 1, but got: ${initialSize}`);
  }
});

console.log('All verification assertions passed successfully.');
process.exit(0);
