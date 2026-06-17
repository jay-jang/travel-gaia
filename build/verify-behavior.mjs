import { JSDOM, VirtualConsole } from 'jsdom';
import { readFileSync, unlinkSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const htmlPath = join(ROOT, 'index.html');
const htmlContent = readFileSync(htmlPath, 'utf8');

const virtualConsole = new VirtualConsole();
virtualConsole.on("jsdomError", (err) => {
  console.error("JSDOM Error:", err);
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
              x: 0, y: 0, width: 800, height: 600
            }
          };
        },
        configurable: true
      });

      Object.defineProperty(window.SVGSVGElement.prototype, 'width', {
        get() {
          return { baseVal: { value: 800, valueInSpecifiedUnits: 800, valueAsString: "800" } };
        },
        configurable: true
      });

      Object.defineProperty(window.SVGSVGElement.prototype, 'height', {
        get() {
          return { baseVal: { value: 600, valueInSpecifiedUnits: 600, valueAsString: "600" } };
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
          alphaTarget: function() { return simulation; }
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
      }
    };
  }
});

const { window } = dom;
const { document } = window;

// Wait a bit for initialization
await new Promise(resolve => setTimeout(resolve, 100));

// Navigate to graph route
window.location.hash = '#/graph';
await new Promise(resolve => setTimeout(resolve, 100));

console.log("Checking Initial State...");
const visibleNodes = window.kgVisibleNodeIds;
if (!visibleNodes) {
  throw new Error("window.kgVisibleNodeIds is undefined!");
}

if (visibleNodes.size !== 16) {
  throw new Error(`Expected exactly 16 initial category nodes, but got ${visibleNodes.size}`);
}

for (const id of visibleNodes) {
  if (!id.startsWith('cat-')) {
    throw new Error(`Expected initial visible node to be category node (start with cat-), got: ${id}`);
  }
}
console.log("[PASS] Initial state check: exactly 16 category nodes visible.");

// Load glossary data
const glossary = window.GLOSSARY_DATA;
const entries = glossary.entries;
const categories = glossary.categories;

// Build maps for parents and children
const byId = new Map(entries.map(e => [e.id, e]));
const isChildSet = new Set();
const parentsOfChild = new Map();
const hasChildrenSet = new Set();

entries.forEach(e => {
  if (e.relationships) {
    e.relationships.forEach(r => {
      if (r.targetId && byId.has(r.targetId)) {
        const target = byId.get(r.targetId);
        if (target.category === e.category) {
          if (r.type === 'parent' || r.type === 'broader') {
            isChildSet.add(e.id);
            if (!parentsOfChild.has(e.id)) parentsOfChild.set(e.id, new Set());
            parentsOfChild.get(e.id).add(target.id);
            hasChildrenSet.add(target.id);
          } else if (r.type === 'child' || r.type === 'narrower') {
            isChildSet.add(target.id);
            if (!parentsOfChild.has(target.id)) parentsOfChild.set(target.id, new Set());
            parentsOfChild.get(target.id).add(e.id);
            hasChildrenSet.add(e.id);
          }
        }
      }
    });
  }
});

const getParentTerms = (catId) => {
  return entries.filter(e => e.category === catId && !isChildSet.has(e.id));
};

const getChildTerms = (catId) => {
  return entries.filter(e => e.category === catId && isChildSet.has(e.id));
};

// Loop through each category and test full drill-down behavioral expansion and collapse
for (const cat of categories) {
  const catNodeId = 'cat-' + cat.id;
  console.log(`\nTesting Category: ${cat.id} (${cat.title})`);

  // Step 1: Expand category node
  console.log(`  - Expanding category node: ${catNodeId}`);
  window.kgClickNode(catNodeId);
  
  const currentVisibleAfterCatExpand = window.kgVisibleNodeIds;
  const expectedParentTerms = getParentTerms(cat.id);
  const expectedParentTermIds = new Set(expectedParentTerms.map(e => e.id));

  // Check that all parent terms in this category are now visible
  expectedParentTermIds.forEach(id => {
    if (!currentVisibleAfterCatExpand.has(id)) {
      throw new Error(`Expected parent term node '${id}' to be visible after expanding category '${cat.id}'`);
    }
  });

  // Check that no child terms in this category are visible yet (unless they are parent terms, which they shouldn't be by definition)
  const childTerms = getChildTerms(cat.id);
  childTerms.forEach(e => {
    if (currentVisibleAfterCatExpand.has(e.id)) {
      throw new Error(`Expected child term node '${e.id}' to be HIDDEN after expanding category '${cat.id}' (parent terms not yet expanded)`);
    }
  });

  console.log(`  [PASS] All ${expectedParentTermIds.size} parent terms visible. Child terms correctly hidden.`);

  // Step 2: Expand each parent term and verify its children appear
  for (const parentTerm of expectedParentTerms) {
    const hasChildren = hasChildrenSet.has(parentTerm.id);
    if (!hasChildren) continue;

    console.log(`    - Expanding parent term with children: ${parentTerm.id}`);
    window.kgClickNode(parentTerm.id);

    const currentVisibleAfterParentExpand = window.kgVisibleNodeIds;
    // Find expected child terms of this specific parent
    const expectedChildIds = childTerms
      .filter(c => {
        const parents = parentsOfChild.get(c.id);
        return parents && parents.has(parentTerm.id);
      })
      .map(c => c.id);

    expectedChildIds.forEach(cId => {
      if (!currentVisibleAfterParentExpand.has(cId)) {
        throw new Error(`Expected child term node '${cId}' to be visible after expanding parent term '${parentTerm.id}'`);
      }
    });

    console.log(`    [PASS] All child terms (${expectedChildIds.join(', ')}) are visible.`);

    // Collapse parent term
    console.log(`    - Collapsing parent term: ${parentTerm.id}`);
    window.kgClickNode(parentTerm.id);

    const currentVisibleAfterParentCollapse = window.kgVisibleNodeIds;
    expectedChildIds.forEach(cId => {
      if (currentVisibleAfterParentCollapse.has(cId)) {
        // Wait, a child could have multiple parent terms. If another parent term is NOT expanded, it should not be visible.
        // But in this loop, we only expand one parent term at a time. So it should not be visible.
        throw new Error(`Expected child term node '${cId}' to be hidden after collapsing parent term '${parentTerm.id}'`);
      }
    });
    console.log(`    [PASS] Child terms correctly hidden again.`);
  }

  // Step 3: Collapse category and verify everything in the category goes away
  console.log(`  - Collapsing category node: ${catNodeId}`);
  window.kgClickNode(catNodeId);

  const currentVisibleAfterCatCollapse = window.kgVisibleNodeIds;
  if (currentVisibleAfterCatCollapse.size !== 16) {
    throw new Error(`Expected visible node size to return to 16 after collapsing category '${cat.id}', but got ${currentVisibleAfterCatCollapse.size}`);
  }

  // Ensure no term from this category is visible
  entries.filter(e => e.category === cat.id).forEach(e => {
    if (currentVisibleAfterCatCollapse.has(e.id)) {
      throw new Error(`Expected term '${e.id}' to be hidden after category collapse.`);
    }
  });

  console.log(`  [PASS] Category successfully collapsed. All terms in category are recursively hidden. Total visible nodes: 16.`);
}

console.log("\nAll behavioral verification tests passed successfully!");
process.exit(0);
