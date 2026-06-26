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

console.log('Starting Travel Wiki UI verification suite...\n');

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

// 3. Test the Distribution Flow page (classroom overhaul)
await runAsyncTest('Distribution Flow: stages, term chips & vertical switching', async () => {
  // Trigger hash change to #/classroom (now the distribution-flow page)
  window.location.hash = '#/classroom';
  await new Promise(resolve => setTimeout(resolve, 200));

  // FLOWS data must be exposed and cover the 5 product verticals
  if (!window.FLOWS) throw new Error('window.FLOWS is not defined.');
  for (const v of ['air', 'lodging', 'ground', 'cruise', 'tours']) {
    if (!window.FLOWS[v]) throw new Error(`FLOWS is missing vertical "${v}".`);
  }

  // Every term id referenced in any flow / foundation must resolve to a real entry
  const ids = new Set((window.GLOSSARY_DATA.entries || []).map(e => e.id));
  Object.entries(window.FLOWS).forEach(([v, f]) => {
    Object.entries(f.stages).forEach(([stage, data]) => {
      (data.terms || []).forEach(id => {
        if (!ids.has(id)) throw new Error(`FLOWS.${v}.${stage} references unknown term id "${id}".`);
      });
    });
    // post-sale loop term ids must resolve too
    (f.postSale?.terms || []).forEach(id => {
      if (!ids.has(id)) throw new Error(`FLOWS.${v}.postSale references unknown term id "${id}".`);
    });
  });

  // full-screen mode engaged (sidebar hidden, viewport-filling)
  if (!document.body.classList.contains('flow-full')) {
    throw new Error('Expected body.flow-full to be set on the distribution-flow page.');
  }

  // 5 vertical tabs (air, lodging, ground, cruise, tours)
  const vtabs = document.querySelectorAll('#flowVerts .flow-vtab');
  if (vtabs.length !== 5) throw new Error(`Expected 5 vertical tabs, found: ${vtabs.length}`);

  // 7 lifecycle stages on the default (air) board (supply→…→fulfill→settle)
  const stages = document.querySelectorAll('#flowBoard .flow-stage');
  if (stages.length !== 7) throw new Error(`Expected 7 flow stages, found: ${stages.length}`);

  // post-sale loop band rendered with term chips
  const psChips = document.querySelectorAll('#flowPostsale .flow-term');
  if (psChips.length < 3) throw new Error(`Expected a post-sale band with term chips, found: ${psChips.length}`);

  // intro narration present
  const intro = document.getElementById('flowIntro');
  if (!intro || !intro.textContent.trim()) throw new Error('Flow intro narration is empty.');

  // term chips are clickable links into the glossary
  const firstChip = document.querySelector('#flowBoard .flow-term');
  if (!firstChip) throw new Error('No term chips rendered on the flow board.');
  if (!firstChip.getAttribute('href').startsWith('#/term/')) {
    throw new Error('Flow term chip does not link to a #/term/ route.');
  }

  // cross-industry foundation band present with category cards
  const fcats = document.querySelectorAll('.flow-foundation .flow-fcat');
  if (fcats.length !== 7) throw new Error(`Expected 7 foundation categories, found: ${fcats.length}`);

  // switching vertical re-renders the board (cruise has a 3-actor-free supply etc.)
  const cruiseTab = Array.from(vtabs).find(b => b.dataset.vertical === 'cruise');
  if (!cruiseTab) throw new Error('Cruise vertical tab not found.');
  const airIntro = intro.textContent;
  cruiseTab.click();
  await new Promise(resolve => setTimeout(resolve, 50));
  if (document.getElementById('flowIntro').textContent === airIntro) {
    throw new Error('Switching to the cruise vertical did not update the intro/board.');
  }
  if (document.querySelectorAll('#flowBoard .flow-stage').length !== 7) {
    throw new Error('Cruise board did not render 7 stages.');
  }
});

// 3b. Test the Tech & APIs reference page
await runAsyncTest('Tech Reference: architecture overviews, API cards & external links', async () => {
  window.location.hash = '#/tech';
  await new Promise(resolve => setTimeout(resolve, 200));

  // nav exposes the route
  if (!document.querySelector('a[href="#/tech"]')) {
    throw new Error('Tech & APIs nav link not found.');
  }

  // architecture overviews (3) with pipeline chips linking into the glossary
  const arch = document.querySelectorAll('.tech-arch-card');
  if (arch.length !== 3) throw new Error(`Expected 3 architecture overview cards, found: ${arch.length}`);
  const pipeLink = document.querySelector('.tech-pipe a[href^="#/term/"]');
  if (!pipeLink) throw new Error('Architecture pipeline chips do not link into the glossary.');

  // standards/API reference groups and cards
  const groups = document.querySelectorAll('.tech-grid');
  if (groups.length < 5) throw new Error(`Expected >=5 reference groups, found: ${groups.length}`);
  const cards = document.querySelectorAll('.tech-card');
  if (cards.length < 15) throw new Error(`Expected >=15 reference cards, found: ${cards.length}`);

  // every external link must open in a new tab with rel=noopener and a real https URL
  const extLinks = [...document.querySelectorAll('.tech-link')];
  if (extLinks.length < 20) throw new Error(`Expected >=20 external reference links, found: ${extLinks.length}`);
  for (const a of extLinks) {
    const href = a.getAttribute('href') || '';
    if (!href.startsWith('https://')) throw new Error(`Tech link is not an https URL: ${href}`);
    if (a.getAttribute('target') !== '_blank') throw new Error(`Tech link missing target=_blank: ${href}`);
    if (!(a.getAttribute('rel') || '').includes('noopener')) throw new Error(`Tech link missing rel=noopener: ${href}`);
  }

  // glossary deep-links resolve to real entries
  const ids = new Set((window.GLOSSARY_DATA.entries || []).map(e => e.id));
  for (const a of document.querySelectorAll('.tech-card-term, .tech-pipe a')) {
    const id = decodeURIComponent((a.getAttribute('href') || '').replace('#/term/', ''));
    if (id && !ids.has(id)) throw new Error(`Tech page references unknown term id "${id}".`);
  }

  // clicking a glossary term opens the inline drawer overlay (does NOT navigate away)
  const drawer = document.getElementById('drawer');
  if (drawer.classList.contains('open')) drawer.classList.remove('open');
  const termLink = document.querySelector('.tech-page .tech-card-term, .tech-page .tech-pipe a');
  if (!termLink) throw new Error('No in-page glossary term link found on the tech page.');
  termLink.click();
  await new Promise(resolve => setTimeout(resolve, 50));
  if (!drawer.classList.contains('open')) {
    throw new Error('Clicking a tech-page term did not open the drawer overlay.');
  }
  if (!window.location.hash.startsWith('#/tech')) {
    throw new Error('Tech-page term click navigated away instead of opening an overlay.');
  }
  // the drawer X button closes the overlay and stays on #/tech
  document.getElementById('drawerClose').click();
  await new Promise(resolve => setTimeout(resolve, 50));
  if (drawer.classList.contains('open')) {
    throw new Error('Drawer X did not close the overlay on the tech page.');
  }
  if (!window.location.hash.startsWith('#/tech')) {
    throw new Error('Drawer X navigated away from #/tech instead of just closing.');
  }
});

// 3c. Test the Concept Map page (top-down layered atlas)
await runAsyncTest('Concept Map: layers, focus selection & relationship buckets', async () => {
  window.location.hash = '#/map';
  await new Promise(resolve => setTimeout(resolve, 200));

  // nav exposes the route
  if (!document.querySelector('a[href="#/map"]')) {
    throw new Error('Concept map nav link not found.');
  }

  const wrap = document.querySelector('.map-wrap');
  if (!wrap) throw new Error('Concept map wrapper (.map-wrap) not found in the DOM.');

  // exactly six business-flow layers
  const layers = document.querySelectorAll('.map-layer');
  if (layers.length !== 6) {
    throw new Error(`Expected 6 concept map layers, found: ${layers.length}`);
  }

  // initialized with a selected (focused) term
  const sel = document.querySelector('.map-term.on');
  if (!sel) throw new Error('Concept map did not initialize with a selected term.');

  // detail panel reflects the selected term
  const info = document.querySelector('#mapInfo');
  if (!info) throw new Error('#mapInfo detail panel not found.');
  const h2 = info.querySelector('h2');
  const selName = ((sel.querySelector('.mt-name') || {}).textContent || '').trim();
  if (!h2 || h2.textContent.trim() !== selName) {
    throw new Error(`Detail heading "${h2 && h2.textContent}" does not match selected term "${selName}".`);
  }

  // three relationship buckets (upstream / downstream / related) + a term deep-link
  if (info.querySelectorAll('.map-relbox').length !== 3) {
    throw new Error(`Expected 3 relationship buckets, found: ${info.querySelectorAll('.map-relbox').length}`);
  }
  if (!info.querySelector('a.rel-link[href^="#/term/"]')) {
    throw new Error('Concept map detail is missing the term deep-link.');
  }

  // clicking a different term updates the detail panel and active state
  const other = [...document.querySelectorAll('.map-term')].find(b => !b.classList.contains('on'));
  if (other) {
    const otherName = ((other.querySelector('.mt-name') || {}).textContent || '').trim();
    other.click();
    await new Promise(resolve => setTimeout(resolve, 30));
    const h2b = document.querySelector('#mapInfo h2');
    if (!h2b || h2b.textContent.trim() !== otherName) {
      throw new Error('Clicking a concept-map term did not update the detail panel.');
    }
    if (!other.classList.contains('on')) {
      throw new Error('Clicked concept-map term was not marked active.');
    }
  }
});

// 4. Test Knowledge Graph initialized state & progressive node-focus exposure
// 4. Test Static Routing: term, category, and search pages
await runAsyncTest('Static Routing: Term, Category, and Search Result Pages', async () => {
  const glossaryData = window.GLOSSARY_DATA;
  if (!glossaryData) throw new Error('window.GLOSSARY_DATA is not exposed.');

  // Verify term page renders statically
  const firstEntry = glossaryData.entries[0];
  if (!firstEntry) throw new Error('No entries in GLOSSARY_DATA.');
  window.location.hash = `#/term/${firstEntry.id}`;
  await new Promise(resolve => setTimeout(resolve, 80));
  const mainEl = document.getElementById('main');
  if (!mainEl || !mainEl.innerHTML.includes(firstEntry.term)) {
    throw new Error(`Expected term page to render term "${firstEntry.term}" in #main.`);
  }

  // Verify category page renders statically
  const firstCat = glossaryData.categories[0];
  if (!firstCat) throw new Error('No categories in GLOSSARY_DATA.');
  window.location.hash = `#/category/${firstCat.id}`;
  await new Promise(resolve => setTimeout(resolve, 80));
  if (!mainEl.innerHTML.includes(firstCat.title) && !mainEl.innerHTML.includes(firstCat.short || firstCat.id)) {
    throw new Error(`Expected category page to include category title in #main.`);
  }

  // Verify search results render statically
  window.location.hash = '#/q/PNR';
  await new Promise(resolve => setTimeout(resolve, 80));
  if (!mainEl.innerHTML.toLowerCase().includes('pnr')) {
    throw new Error('Expected search results page to include "PNR" in #main.');
  }

  // Verify #/graph redirects to mindmap (does not crash)
  window.location.hash = '#/graph';
  await new Promise(resolve => setTimeout(resolve, 80));
  // Should not throw or leave stale content — just verify #main is visible
  const mainDisplay = window.getComputedStyle ? window.getComputedStyle(mainEl).display : mainEl.style.display;
  if (mainDisplay === 'none') {
    throw new Error('Expected #main to remain visible after #/graph redirect.');
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

// 6. Test Routing search query renders a static list
await runAsyncTest('Search Route renders static results in #main', async () => {
  window.location.hash = '#/q/air';
  await new Promise(resolve => setTimeout(resolve, 80));
  const mainEl = document.getElementById('main');
  if (!mainEl || !mainEl.innerHTML) {
    throw new Error('Expected #main to have content after #/q/air navigation.');
  }
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

  // Verify Click Node Interaction (Toggles collapse) and DOM cleanup
  const testCatId = 'c:air-ops';
  if (!window.mmExpandedNodeIds.has(testCatId)) {
    window.mmClickNode(testCatId);
    if (!window.mmExpandedNodeIds.has(testCatId)) {
      throw new Error('Expected category node ID to be in expanded state after click.');
    }
  }

  // Count rendered nodes after expansion
  const nodesAfterExpand = svg.querySelectorAll('g.mmn').length;
  if (nodesAfterExpand === 0) throw new Error('Expected mindmap nodes to be rendered after expansion.');

  // Now collapse and verify nodes are removed from the DOM
  window.mmClickNode(testCatId);
  if (window.mmExpandedNodeIds.has(testCatId)) {
    throw new Error('Expected category node to be collapsed after second click.');
  }
  const nodesAfterCollapse = svg.querySelectorAll('g.mmn').length;
  if (nodesAfterCollapse >= nodesAfterExpand) {
    throw new Error(`Expected fewer DOM nodes after collapse (was ${nodesAfterExpand}, got ${nodesAfterCollapse}).`);
  }

  // Re-expand for subsequent tests
  window.mmClickNode(testCatId);

  // Verify Path-Expanding Search
  // Term "PNR" should be inside category air-ops. Let's call search.
  window.mmSearchAndFocus('PNR');
  // Check if ancestor air-ops and its parents are expanded
  if (!window.mmExpandedNodeIds.has(testCatId)) {
    throw new Error('Expected parent category "c:air-ops" to be auto-expanded during search.');
  }

  // Verify orthogonal link routing is correctly computed in horizontal layout
  const linkPaths = Array.from(svg.querySelectorAll('.mmsvg-link-path'));
  if (linkPaths.length === 0) {
    throw new Error('Expected mindmap link paths to be rendered.');
  }
  for (const path of linkPaths) {
    const dAttr = path.getAttribute('d');
    if (!dAttr) {
      throw new Error('Link path is missing "d" attribute.');
    }
    if (!dAttr.includes('H') || !dAttr.includes('V') || dAttr.includes('C')) {
      throw new Error(`Expected orthogonal link path in horizontal mode, but got: "${dAttr}"`);
    }
  }

  // Verify layout toggle to radial changes paths to curved
  btnToggle.click(); // switch to radial
  if (window.d3 && window.d3.timerFlush) {
    window.d3.timerFlush();
  }
  const radialLinkPaths = Array.from(svg.querySelectorAll('.mmsvg-link-path'));
  for (const path of radialLinkPaths) {
    const dAttr = path.getAttribute('d');
    if (!dAttr.includes('C') || dAttr.includes('H') || dAttr.includes('V')) {
      throw new Error(`Expected curved link path in radial mode, but got: "${dAttr}"`);
    }
  }
  btnToggle.click(); // switch back to horizontal
  if (window.d3 && window.d3.timerFlush) {
    window.d3.timerFlush();
  }

  // Verify that the mindmap depth controls exist and correctly toggle node expansion levels
  const mmCollapseAllBtn = document.getElementById('mmCollapseAll');
  const mmShowCategoriesBtn = document.getElementById('mmShowCategories');
  const mmExpandAllBtn = document.getElementById('mmExpandAll');

  if (!mmCollapseAllBtn || !mmShowCategoriesBtn || !mmExpandAllBtn) {
    throw new Error('Expected mindmap depth control buttons to exist in DOM.');
  }

  // Click Collapse All
  mmCollapseAllBtn.click();
  if (window.mmExpandedNodeIds.size !== 0) {
    throw new Error(`Expected mmExpandedNodeIds to be empty after Collapse All, but got size: ${window.mmExpandedNodeIds.size}`);
  }

  // Click Show Categories
  mmShowCategoriesBtn.click();
  for (const id of window.mmExpandedNodeIds) {
    if (id.startsWith('c:')) {
      throw new Error(`Expected category ID ${id} to not be in mmExpandedNodeIds after Show Categories.`);
    }
  }

  // Click Expand All
  mmExpandAllBtn.click();
  if (!window.mmExpandedNodeIds.has(testCatId)) {
    throw new Error('Expected category node ID to be expanded after Expand All.');
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

// 8. Test Drawer Redesign (R1, R2, R3, R4)
await runAsyncTest('Drawer Redesign Behavior', async () => {
  // Navigate to #/classroom
  window.location.hash = '#/classroom';
  await new Promise(resolve => setTimeout(resolve, 200));

  const drawer = document.getElementById('drawer');
  // Initially drawer is closed
  drawer.classList.remove('open');

  // Find a term chip link on the classroom page
  const termChipLink = document.querySelector('#flowBoard .flow-term');
  if (!termChipLink) {
    throw new Error('Could not find a term chip on the classroom page for the test.');
  }

  // Click the term chip
  const initialHash = window.location.hash; // should be '#/classroom'
  termChipLink.click();
  await new Promise(resolve => setTimeout(resolve, 100));

  // Assert: Clicking a term chip on the #classroom page does not change the URL hash or navigate away from #classroom
  if (window.location.hash !== initialHash) {
    throw new Error(`Expected hash to remain "${initialHash}" after clicking term chip, but it changed to "${window.location.hash}"`);
  }

  // Assert: Clicking a term chip on the #classroom page opens #drawer and populates it with the clicked term's data
  if (!drawer.classList.contains('open')) {
    throw new Error("Expected drawer to have the 'open' class after clicking a term chip on the #classroom page.");
  }
  
  const drawerTitle = document.getElementById('drawerTitle');
  if (!drawerTitle || !drawerTitle.textContent.trim()) {
    throw new Error("Expected drawer title to be populated with term data.");
  }

  // Assert: Closing the drawer on #classroom via the close button closes it and keeps the hash at #classroom
  const closeBtn = document.getElementById('drawerClose');
  if (!closeBtn) {
    throw new Error("Could not find the drawer close button (#drawerClose).");
  }
  closeBtn.click();
  await new Promise(resolve => setTimeout(resolve, 100));

  if (drawer.classList.contains('open')) {
    throw new Error("Expected drawer to close (remove 'open' class) after clicking the close button on #classroom.");
  }
  if (window.location.hash !== initialHash) {
    throw new Error(`Expected hash to remain "${initialHash}" after closing the drawer, but got "${window.location.hash}"`);
  }

  // Assert: Changing window.location.hash to a different page route closes the drawer (i.e. removes the 'open' class from #drawer)
  // Let's first open the drawer again
  termChipLink.click();
  await new Promise(resolve => setTimeout(resolve, 100));
  if (!drawer.classList.contains('open')) {
    throw new Error("Expected drawer to open after clicking term chip again.");
  }

  // Now change hash to a different page route, e.g. #/mindmap
  window.location.hash = '#/mindmap';
  await new Promise(resolve => setTimeout(resolve, 200));

  if (drawer.classList.contains('open')) {
    throw new Error("Expected drawer to close (remove 'open' class) when navigating to a different page route.");
  }
});

console.log('All verification assertions passed successfully.');
process.exit(0);
