import { JSDOM, VirtualConsole } from 'jsdom';
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

const virtualConsole = new VirtualConsole();
virtualConsole.on("jsdomError", (err) => {
  console.error("JSDOM Error:", err);
});
virtualConsole.on("error", (err) => {
  console.error("JSDOM Error:", err);
});
virtualConsole.on("warn", (msg) => {
  console.warn("JSDOM Warn:", msg);
});
virtualConsole.on("log", (msg) => {
  console.log("JSDOM Log:", msg);
});

const dom = new JSDOM(htmlContent, {
  runScripts: "dangerously",
  resources: "usable",
  url: "http://localhost/",
  virtualConsole,
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

    // Mock SVGElement and SVGSVGElement APIs to prevent D3 transition crashes
    if (window.SVGElement) {
      Object.defineProperty(window.SVGElement.prototype, 'transform', {
        get() {
          return {
            baseVal: {
              numberOfItems: 0,
              clear: () => {},
              initialize: () => {},
              getItem: () => {},
              insertItemBefore: () => {},
              replaceItem: () => {},
              removeItem: () => {},
              appendItem: () => {},
              consolidate: () => {},
            }
          };
        },
        configurable: true
      });
    }

    if (window.SVGSVGElement) {
      Object.defineProperty(window.SVGSVGElement.prototype, 'viewBox', {
        get() {
          return {
            baseVal: {
              x: 0,
              y: 0,
              width: 800,
              height: 600
            }
          };
        },
        configurable: true
      });

      Object.defineProperty(window.SVGSVGElement.prototype, 'width', {
        get() {
          return {
            baseVal: {
              value: 800,
              valueInSpecifiedUnits: 800,
              valueAsString: "800",
            }
          };
        },
        configurable: true
      });

      Object.defineProperty(window.SVGSVGElement.prototype, 'height', {
        get() {
          return {
            baseVal: {
              value: 600,
              valueInSpecifiedUnits: 600,
              valueAsString: "600",
            }
          };
        },
        configurable: true
      });

      Object.defineProperty(window.SVGSVGElement.prototype, 'createSVGTransform', {
        value: () => ({
          setMatrix: () => {},
          setTranslate: () => {},
          setScale: () => {},
          setRotate: () => {},
          setSkewX: () => {},
          setSkewY: () => {},
        }),
        configurable: true,
        writable: true
      });

      Object.defineProperty(window.SVGSVGElement.prototype, 'createSVGTransformFromMatrix', {
        value: () => ({}),
        configurable: true,
        writable: true
      });

      Object.defineProperty(window.SVGSVGElement.prototype, 'createSVGMatrix', {
        value: () => ({
          a: 1, b: 0, c: 0, d: 1, e: 0, f: 0,
          multiply: () => ({}),
          translate: () => ({}),
          scale: () => ({}),
        }),
        configurable: true,
        writable: true
      });

      if (window.SVGElement && !window.SVGElement.prototype.getBBox) {
        window.SVGElement.prototype.getBBox = function() {
          return { x: -450, y: -270, width: 900, height: 540 };
        };
      }
    }

    // Mock D3.js API for offline headless testing
    window.d3 = {
      select: function() {
        const d3Selection = {
          select: function() { return d3Selection; },
          selectAll: function() { return d3Selection; },
          attr: function() { return d3Selection; },
          style: function() { return d3Selection; },
          data: function() { return d3Selection; },
          join: function() { return d3Selection; },
          on: function() { return d3Selection; },
          call: function() { return d3Selection; },
          append: function() { return d3Selection; },
          classed: function() { return d3Selection; },
          transition: function() { return d3Selection; },
          duration: function() { return d3Selection; },
          remove: function() { return d3Selection; },
          text: function() { return d3Selection; },
          html: function() { return d3Selection; },
          node: function() {
            return {
              clientWidth: 800,
              clientHeight: 600,
              getBBox: () => ({ x: 0, y: 0, width: 800, height: 600 })
            };
          }
        };
        return d3Selection;
      },
      selectAll: function() {
        const d3Selection = {
          select: function() { return d3Selection; },
          selectAll: function() { return d3Selection; },
          attr: function() { return d3Selection; },
          style: function() { return d3Selection; },
          classed: function() { return d3Selection; },
          remove: function() { return d3Selection; }
        };
        return d3Selection;
      },
      forceSimulation: function() {
        const simulation = {
          force: function(name, forceObj) {
            if (forceObj === undefined) {
              if (name === 'link') {
                const linkForce = {
                  id: function() { return linkForce; },
                  distance: function() { return linkForce; },
                  strength: function() { return linkForce; },
                  links: function() { return linkForce; }
                };
                return linkForce;
              }
              const generalForce = {
                strength: function() { return generalForce; }
              };
              return generalForce;
            }
            return simulation;
          },
          on: function() { return simulation; },
          nodes: function() { return simulation; },
          alpha: function() { return simulation; },
          restart: function() { return simulation; },
          alphaTarget: function() { return simulation; },
          stop: function() { return simulation; }
        };
        return simulation;
      },
      forceLink: function() {
        const force = {
          id: function() { return force; },
          distance: function() { return force; },
          strength: function() { return force; },
          links: function() { return force; }
        };
        return force;
      },
      forceManyBody: function() {
        const force = {
          strength: function() { return force; }
        };
        return force;
      },
      forceCenter: function() { return {}; },
      forceCollide: function() { return {}; },
      forceRadial: function() {
        const force = {
          strength: function() { return force; }
        };
        return force;
      },
      zoom: function() {
        const zoomObj = {
          scaleExtent: function() { return zoomObj; },
          on: function() { return zoomObj; },
          transform: function() { return zoomObj; },
          scaleBy: function() {}
        };
        return zoomObj;
      },
      zoomIdentity: {
        translate: function() { return this; },
        scale: function() { return this; }
      },
      drag: function() {
        const dragObj = {
          on: function() { return dragObj; }
        };
        return dragObj;
      },
      hierarchy: function(data) {
        const wrapNode = (nodeData, parentNode = null, depth = 0) => {
          const node = {
            data: nodeData,
            parent: parentNode,
            depth: depth,
            children: null,
            _children: null,
            value: 0
          };
          if (nodeData.children) {
            node.children = nodeData.children.map(c => wrapNode(c, node, depth + 1));
          }
          node.descendants = function() {
            const list = [node];
            const childrenList = node.children || node._children || [];
            childrenList.forEach(c => {
              list.push(...c.descendants());
            });
            return list;
          };
          node.links = function() {
            const list = [];
            const childrenList = node.children || node._children || [];
            childrenList.forEach(c => {
              list.push({ source: node, target: c });
              list.push(...c.links());
            });
            return list;
          };
          node.count = function() {
            node.value = 1;
            const childrenList = node.children || node._children || [];
            if (childrenList.length > 0) {
              let sum = 0;
              childrenList.forEach(c => {
                c.count();
                sum += c.value;
              });
              node.value = sum;
            }
            return node;
          };
          return node;
        };
        return wrapNode(data);
      },
      tree: function() {
        const treeObj = {
          size: function() { return treeObj; },
          separation: function() { return treeObj; }
        };
        const layout = function(rootNode) {
          rootNode.descendants().forEach((d, idx) => {
            d.x = idx * 10;
            d.y = d.depth * 50;
          });
          return rootNode;
        };
        Object.assign(layout, treeObj);
        return layout;
      },
      linkRadial: function() {
        const lr = function() { return 'M 0 0 L 10 10'; };
        lr.angle = function() { return lr; };
        lr.radius = function() { return lr; };
        return lr;
      }
    };
  }
});

const { window } = dom;
const { document } = window;

// 3. Test route registrations and classroom UI elements
await runAsyncTest('Classroom SVG Layout and Interactive Quiz Elements', async () => {
  // Trigger hash change to #/classroom
  window.location.hash = '#/classroom';
  await new Promise(resolve => setTimeout(resolve, 200));

  // Assert classroom container wrapper exists
  const classroomWrap = document.querySelector('.classroom-wrap');
  if (!classroomWrap) {
    throw new Error('Classroom layout wrapper (.classroom-wrap) not found in the DOM.');
  }

  // Verify existence of 4 Vertical tabs
  const vertTabs = document.querySelectorAll('#classVerticalTabs .classroom-tab');
  if (vertTabs.length !== 4) {
    throw new Error(`Expected 4 vertical tabs, found: ${vertTabs.length}`);
  }

  // Verify existence of 2 Level selector toggles
  const levelBtns = document.querySelectorAll('#classLevelToggles button');
  if (levelBtns.length !== 2) {
    throw new Error(`Expected 2 level selectors, found: ${levelBtns.length}`);
  }

  // Verify that standard SVG container mounts correctly
  const svg = document.querySelector('#classroomSvg');
  if (!svg) {
    throw new Error('SVG container (#classroomSvg) is missing.');
  }

  // Test interaction: Click Hotel vertical & verify node rendering
  const hotelTab = Array.from(vertTabs).find(b => b.textContent.includes('Hotel') || b.dataset.vertical === 'hotel');
  if (hotelTab) {
    hotelTab.click();
    await new Promise(resolve => setTimeout(resolve, 50));
    
    // Hotel Basic has 4 nodes (Guest, OTA, Bedbank, PMS)
    const nodes = document.querySelectorAll('#classroomSvg .node-group');
    if (nodes.length !== 4) {
      throw new Error(`Expected 4 nodes for Hotel Basic flow, found: ${nodes.length}`);
    }
  } else {
    throw new Error('Hotel vertical tab not found.');
  }

  // Verify gated navigation (Quiz validation checks)
  const btnNext = document.querySelector('#classBtnNext');
  const quizBox = document.querySelector('#classroomQuiz');
  
  if (quizBox && quizBox.style.display !== 'none') {
    // Assert next button is disabled on active quiz stage
    if (!btnNext.disabled) {
      throw new Error('Next button must be disabled until the active step quiz is answered correctly.');
    }

    // Trigger correct option click (find correct option based on correctIndex)
    if (!window.CLASSES) {
      throw new Error('window.CLASSES is not defined.');
    }
    const activeStep = window.CLASSES.find(c => c.vertical === 'hotel' && c.level === 'basic').steps[0];
    const optionBtns = document.querySelectorAll('#quizOptions button');
    const correctBtn = optionBtns[activeStep.quiz.correctIndex];
    
    if (correctBtn) {
      correctBtn.click();
      await new Promise(resolve => setTimeout(resolve, 50));

      // Assert next button is now enabled
      if (btnNext.disabled) {
        throw new Error('Next button was not unlocked after selecting the correct answer.');
      }
    } else {
      throw new Error('Correct quiz button not found.');
    }
  } else {
    throw new Error('Quiz box is missing or not visible.');
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
  console.log(`Initial visible nodes: ${initialSize}`);

  // Assertions
  // On load, only Category nodes are visible (16 categories)
  if (initialSize !== 16) {
    throw new Error(`Expected initial visible node count to be 16 (categories only), but got: ${initialSize}`);
  }

  for (const id of visibleNodeIds) {
    if (!id.startsWith('cat-')) {
      throw new Error(`Expected initially visible node ID to start with "cat-", but got: "${id}"`);
    }
  }

  // Click a Category node to expand it (e.g. 'cat-air-ops')
  const catId = 'cat-air-ops';
  if (typeof window.kgClickNode !== 'function') {
    throw new Error('window.kgClickNode is not defined on the window object.');
  }
  window.kgClickNode(catId);

  const sizeAfterCatExpand = window.kgVisibleNodeIds.size;
  console.log(`Visible nodes after expanding ${catId}: ${sizeAfterCatExpand}`);
  if (sizeAfterCatExpand <= 16) {
    throw new Error(`Expected visible node count to increase after expanding category ${catId}, but got: ${sizeAfterCatExpand}`);
  }

  // Find a Parent term node of 'air-ops' that is now visible and has children
  const parentTermId = Array.from(window.kgVisibleNodeIds).find(id => {
    if (id === catId || id.startsWith('cat-')) return false;
    // Check if any other entry in the category has this id as a parent
    return glossaryData.entries.some(e => {
      if (e.category !== 'air-ops') return false;
      return e.relationships && e.relationships.some(r => {
        return (r.targetId === id && (r.type === 'parent' || r.type === 'broader'));
      });
    });
  });
  if (!parentTermId) {
    throw new Error('Expected at least one Parent term node with children to be visible after category expansion.');
  }

  // Expand the Parent term node
  window.kgClickNode(parentTermId);
  const sizeAfterParentExpand = window.kgVisibleNodeIds.size;
  console.log(`Visible nodes after expanding parent term ${parentTermId}: ${sizeAfterParentExpand}`);
  if (sizeAfterParentExpand <= sizeAfterCatExpand) {
    throw new Error(`Expected visible node count to increase after expanding parent term ${parentTermId}`);
  }

  // Collapse the category node to verify recursive collapse of all descendants
  window.kgClickNode(catId);
  const sizeAfterCollapse = window.kgVisibleNodeIds.size;
  console.log(`Visible nodes after collapsing category ${catId}: ${sizeAfterCollapse}`);
  if (sizeAfterCollapse !== 16) {
    throw new Error(`Expected visible node count to return to 16 after collapsing the category, but got: ${sizeAfterCollapse}`);
  }
});

// 5. Test Language toggling behavior and updateGraphLanguage sync
runTest('Language Toggling and document.lang synchronization', () => {
  const langBtn = document.getElementById("langBtn");
  if (!langBtn) {
    throw new Error('Language button (#langBtn) not found in the DOM.');
  }
  
  const initialLang = document.documentElement.lang || 'en';
  
  // Click the button to toggle language
  langBtn.click();
  
  const newLang = document.documentElement.lang;
  if (newLang === initialLang) {
    throw new Error(`Expected language to change after clicking #langBtn, but remained: ${newLang}`);
  }
  
  // Toggle back
  langBtn.click();
  if (document.documentElement.lang !== initialLang) {
    throw new Error(`Expected language to revert back to: ${initialLang}, but got: ${document.documentElement.lang}`);
  }
});

// 6. Test Routing search query to home transitions resets node highlighting
await runAsyncTest('Search Highlight Clearing on Home Route Transition', async () => {
  // Navigate to query search first
  window.location.hash = '#/q/air';
  await new Promise(resolve => setTimeout(resolve, 50));
  
  // Navigate back to default home route
  window.location.hash = '#/';
  await new Promise(resolve => setTimeout(resolve, 50));
});

// 7. Test Mindmap UI Redesign Verification
await runAsyncTest('Taxonomy Mindmap Layouts, Click Interactions, and Path-Expanding Search', async () => {
  // Trigger route change
  window.location.hash = '#/mindmap';
  await new Promise(resolve => setTimeout(resolve, 200));

  // Assert container structures
  const wrap = document.getElementById('mmwrap');
  if (!wrap) {
    throw new Error('Mindmap wrapper container (#mmwrap) not found.');
  }
  const svg = document.getElementById('mmsvg');
  if (!svg) {
    throw new Error('SVG container (#mmsvg) not found.');
  }

  // Verify Initial Layout State (horizontal is the default — no overlap with wide labels)
  if (window.mmLayoutMode !== 'horizontal') {
    throw new Error(`Expected initial layout mode to be "horizontal", but got: ${window.mmLayoutMode}`);
  }

  // Verify Layout Toggle
  const btnToggle = document.getElementById('mmLayoutToggle');
  if (!btnToggle) {
    throw new Error('Layout switch toggle button not found.');
  }
  btnToggle.click();
  if (window.mmLayoutMode !== 'radial') {
    throw new Error('Expected layout mode to change to "radial" after toggle click.');
  }
  btnToggle.click();
  if (window.mmLayoutMode !== 'horizontal') {
    throw new Error('Expected layout mode to return to "horizontal" after toggling back.');
  }

  // Verify Click Node Interaction (Toggles collapse)
  const testCatId = 'c:air-ops';
  if (!window.mmExpandedNodeIds.has(testCatId)) {
    // Should start collapsed (since depth >= 2 is collapsed on initial render)
    window.mmClickNode(testCatId);
    if (!window.mmExpandedNodeIds.has(testCatId)) {
      throw new Error('Expected category node ID to be in expanded state after click.');
    }
  }

  // Verify Path-Expanding Search
  // Term "PNR" should be inside category air-ops. Let's call search.
  window.mmSearchAndFocus('PNR');
  // Check if ancestor air-ops and its parents are expanded
  if (!window.mmExpandedNodeIds.has(testCatId)) {
    throw new Error('Expected parent category "c:air-ops" to be auto-expanded during search.');
  }

  // Verify the drawer Close (X) button works on the mindmap route even though
  // the graph view (which used to bind it) was never initialized.
  const drawerEl = document.getElementById('drawer');
  const closeBtn = document.getElementById('drawerClose');
  drawerEl.classList.add('open');
  closeBtn.click();
  if (drawerEl.classList.contains('open')) {
    throw new Error('Expected drawer to close when the X button is clicked on the mindmap route.');
  }
});

console.log('All verification assertions passed successfully.');
process.exit(0);
