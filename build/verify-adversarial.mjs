import { JSDOM, VirtualConsole } from 'jsdom';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const htmlPath = join(ROOT, 'index.html');
const htmlContent = readFileSync(htmlPath, 'utf8');

let hasRuntimeError = false;
let runtimeErrors = [];

const virtualConsole = new VirtualConsole();
virtualConsole.on("jsdomError", (err) => {
  console.error("JSDOM Error:", err);
  hasRuntimeError = true;
  runtimeErrors.push(err);
});
virtualConsole.on("error", (err) => {
  console.error("JSDOM Error:", err);
  hasRuntimeError = true;
  runtimeErrors.push(err);
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
      }
    };
  }
});

const { window } = dom;
const { document } = window;

function checkRuntimeError() {
  if (hasRuntimeError) {
    throw new Error(`Runtime error detected in JSDOM: ${runtimeErrors.map(e => e.message || e).join(', ')}`);
  }
}

async function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Start tests once DOM loaded
window.addEventListener('load', async () => {
  try {
    console.log("Adversarial test harness loaded index.html successfully.");

    // Redirect to classroom route
    window.location.hash = '#/classroom';
    await wait(200);
    checkRuntimeError();

    // 1. Verify 4 verticals (Air, Hotel, Cruise, Common) and 2 levels (Basic, Advanced)
    console.log("Verifying verticals and levels...");
    const vertTabs = document.querySelectorAll('#classVerticalTabs button');
    const expectedVerticals = ['air', 'hotel', 'cruise', 'common'];
    if (vertTabs.length !== 4) {
      throw new Error(`Expected 4 vertical tabs, but found ${vertTabs.length}`);
    }
    expectedVerticals.forEach(v => {
      const exists = Array.from(vertTabs).some(btn => btn.dataset.vertical === v);
      if (!exists) {
        throw new Error(`Vertical tab for '${v}' not found`);
      }
    });

    const levelBtns = document.querySelectorAll('#classLevelToggles button');
    if (levelBtns.length !== 2) {
      throw new Error(`Expected 2 level buttons, but found ${levelBtns.length}`);
    }
    const expectedLevels = ['basic', 'advanced'];
    expectedLevels.forEach(lvl => {
      const exists = Array.from(levelBtns).some(btn => btn.dataset.level === lvl);
      if (!exists) {
        throw new Error(`Level button for '${lvl}' not found`);
      }
    });
    console.log("[PASS] Verticals and Levels verification.");

    // 2. Verify each level has at least 4 interactive steps in CLASSES metadata
    console.log("Verifying step counts in CLASSES...");
    if (!window.CLASSES) {
      throw new Error("window.CLASSES is not defined on the window object");
    }
    window.CLASSES.forEach(cls => {
      if (!cls.steps || cls.steps.length < 4) {
        throw new Error(`Class ${cls.id} has only ${cls.steps ? cls.steps.length : 0} steps, expected at least 4`);
      }
      cls.steps.forEach((step, idx) => {
        if (!step.narration || !step.narration.ko || !step.narration.en) {
          throw new Error(`Class ${cls.id} step ${idx} is missing bilingual narration`);
        }
        if (step.quiz) {
          if (!step.quiz.question || !step.quiz.question.ko || !step.quiz.question.en) {
            throw new Error(`Class ${cls.id} step ${idx} is missing bilingual quiz question`);
          }
          if (!step.quiz.options || step.quiz.options.length === 0) {
            throw new Error(`Class ${cls.id} step ${idx} has no quiz options`);
          }
          step.quiz.options.forEach((opt, optIdx) => {
            if (!opt.ko || !opt.en) {
              throw new Error(`Class ${cls.id} step ${idx} option ${optIdx} is missing translation`);
            }
          });
          if (step.quiz.correctIndex === undefined || step.quiz.correctIndex < 0 || step.quiz.correctIndex >= step.quiz.options.length) {
            throw new Error(`Class ${cls.id} step ${idx} has invalid correctIndex: ${step.quiz.correctIndex}`);
          }
        }
      });
    });
    console.log("[PASS] CLASSES structure and step counts verification.");

    // 3. Validate that the UI is SVG-based and contains appropriate elements
    console.log("Verifying SVG UI elements...");
    const svg = document.getElementById('classroomSvg');
    if (!svg) {
      throw new Error("SVG container '#classroomSvg' not found");
    }
    const nodesGroup = document.getElementById('svgNodes');
    const connectionsGroup = document.getElementById('svgConnections');
    const particlesGroup = document.getElementById('svgFlowParticles');
    if (!nodesGroup || !connectionsGroup || !particlesGroup) {
      throw new Error("SVG child groups ('svgNodes', 'svgConnections', 'svgFlowParticles') not found");
    }

    // Trigger UI updates and make sure elements are generated inside SVG
    const nodes = document.querySelectorAll('#classroomSvg .node-group');
    if (nodes.length === 0) {
      throw new Error("No SVG node groups rendered initially");
    }
    console.log(`[PASS] SVG elements verification. Found ${nodes.length} nodes rendered in SVG initially.`);

    // 4. Validate gated quiz navigation
    console.log("Verifying gated quiz navigation...");
    // Let's use hotel basic first step
    const hotelTab = Array.from(vertTabs).find(b => b.dataset.vertical === 'hotel');
    hotelTab.click();
    await wait(50);
    checkRuntimeError();

    const activeClass = window.CLASSES.find(c => c.vertical === 'hotel' && c.level === 'basic');
    const firstStep = activeClass.steps[0];
    if (!firstStep.quiz) {
      throw new Error("Hotel basic first step doesn't have a quiz!");
    }

    const btnNext = document.getElementById('classBtnNext');
    const quizBox = document.getElementById('classroomQuiz');
    if (quizBox.style.display === 'none') {
      throw new Error("Quiz box should be visible on first step of Hotel Basic");
    }
    if (!btnNext.disabled) {
      throw new Error("Next button must be disabled initially on quiz steps");
    }

    // Try clicking incorrect option
    const incorrectIndex = (firstStep.quiz.correctIndex + 1) % firstStep.quiz.options.length;
    const optionBtns = document.querySelectorAll('#quizOptions button');
    console.log(`Clicking incorrect option at index ${incorrectIndex}...`);
    optionBtns[incorrectIndex].click();
    await wait(50);
    checkRuntimeError();

    if (!btnNext.disabled) {
      throw new Error("Next button must remain disabled when incorrect answer is chosen");
    }
    const feedback = document.getElementById('quizFeedback');
    if (feedback.style.display === 'none') {
      throw new Error("Feedback should be visible after choosing an answer");
    }
    const koIncorrectText = "오답입니다. 다시 한 번 생각해보세요.";
    if (feedback.textContent !== koIncorrectText) {
      throw new Error(`Expected incorrect feedback: "${koIncorrectText}", got: "${feedback.textContent}"`);
    }

    // Click correct option
    console.log(`Clicking correct option at index ${firstStep.quiz.correctIndex}...`);
    optionBtns[firstStep.quiz.correctIndex].click();
    await wait(50);
    checkRuntimeError();

    if (btnNext.disabled) {
      throw new Error("Next button must be enabled when correct answer is chosen");
    }
    if (feedback.style.display === 'none') {
      throw new Error("Feedback should be visible after choosing correct answer");
    }
    if (!feedback.innerHTML.includes("정답입니다!")) {
      throw new Error(`Expected correct feedback to contain "정답입니다!", got: "${feedback.innerHTML}"`);
    }
    console.log("[PASS] Gated quiz navigation works as expected.");

    // 5. Verify bilingual language toggling translates properly
    console.log("Verifying bilingual language translation...");
    const langBtn = document.getElementById('langBtn');
    if (!langBtn) {
      throw new Error("Language button '#langBtn' not found");
    }

    // Check KO initial values
    if (document.documentElement.lang !== 'ko') {
      throw new Error(`Expected initial language to be 'ko', got '${document.documentElement.lang}'`);
    }
    const airTab = Array.from(vertTabs).find(b => b.dataset.vertical === 'air');
    if (!airTab.textContent.includes('항공')) {
      throw new Error(`Expected KO vertical tab title '항공', got: '${airTab.textContent}'`);
    }

    // Click langBtn -> switch to EN
    langBtn.click();
    await wait(100);
    checkRuntimeError();

    if (document.documentElement.lang !== 'en') {
      throw new Error(`Expected language to switch to 'en', got '${document.documentElement.lang}'`);
    }
    // Vertical tabs update
    const enVertTabs = document.querySelectorAll('#classVerticalTabs button');
    const enAirTab = Array.from(enVertTabs).find(b => b.dataset.vertical === 'air');
    if (enAirTab.textContent.trim() !== 'Air') {
      throw new Error(`Expected EN vertical tab title 'Air', got: '${enAirTab.textContent}'`);
    }

    // Narration should update to English
    // Wait, since clicking langBtn re-routed, it reset back to Air Basic Step 1.
    // Let's verify Air Basic Step 1 English content.
    const narrationBox = document.getElementById('classNarration');
    const expectedEnNarration = window.CLASSES.find(c => c.vertical === 'air' && c.level === 'basic').steps[0].narration.en;
    if (narrationBox.textContent !== expectedEnNarration) {
      throw new Error(`Expected EN narration: "${expectedEnNarration}", got: "${narrationBox.textContent}"`);
    }

    // Quiz options should update to English
    const enOptionBtns = document.querySelectorAll('#quizOptions button');
    const expectedEnOptions = window.CLASSES.find(c => c.vertical === 'air' && c.level === 'basic').steps[0].quiz.options;
    expectedEnOptions.forEach((opt, idx) => {
      if (enOptionBtns[idx].textContent.trim() !== opt.en) {
        throw new Error(`Expected EN option ${idx}: "${opt.en}", got: "${enOptionBtns[idx].textContent}"`);
      }
    });

    // Toggle back to KO
    langBtn.click();
    await wait(100);
    checkRuntimeError();

    if (document.documentElement.lang !== 'ko') {
      throw new Error("Failed to toggle language back to 'ko'");
    }
    console.log("[PASS] Bilingual language toggling translates tabs, descriptions, quiz questions, and options successfully.");

    // 6. Adversarial verification: switching tabs mid-step, switching levels, changing languages, clicking disabled buttons
    console.log("Conducting adversarial verification...");

    // Test: switch tab mid-step (e.g. from step 3 to another vertical)
    console.log("Adversarial Test: Switch vertical tab mid-step");
    // Switch to hotel basic (currently at step 0)
    const hotelTab2 = Array.from(vertTabs).find(b => b.dataset.vertical === 'hotel');
    hotelTab2.click();
    await wait(50);
    checkRuntimeError();

    // Advance hotel basic to step 1 (requires answering first quiz correctly)
    const activeClassHotel = window.CLASSES.find(c => c.vertical === 'hotel' && c.level === 'basic');
    const hotelOptBtns = document.querySelectorAll('#quizOptions button');
    hotelOptBtns[activeClassHotel.steps[0].quiz.correctIndex].click();
    await wait(50);
    
    const nextBtn = document.getElementById('classBtnNext');
    nextBtn.click(); // go to step 2 (index 1)
    await wait(50);
    checkRuntimeError();

    const stepCountText = document.getElementById('classStepCount').textContent;
    if (!stepCountText.includes('2')) {
      throw new Error(`Expected to be on step 2, but step count text is: "${stepCountText}"`);
    }

    // Now switch vertical tab to Cruise mid-flow
    const cruiseTab = Array.from(vertTabs).find(b => b.dataset.vertical === 'cruise');
    cruiseTab.click();
    await wait(50);
    checkRuntimeError();

    // Check that we safely transition to Cruise Basic Step 1
    const newTitle = document.getElementById('classTitle').textContent;
    const expectedCruiseTitle = window.CLASSES.find(c => c.vertical === 'cruise' && c.level === 'basic').title.ko;
    if (newTitle !== expectedCruiseTitle) {
      throw new Error(`Expected classroom title to switch to "${expectedCruiseTitle}", got "${newTitle}"`);
    }
    const newStepCount = document.getElementById('classStepCount').textContent;
    if (!newStepCount.includes('1')) {
      throw new Error(`Expected step to reset to 1 after vertical tab switch, got "${newStepCount}"`);
    }
    console.log("  - Tab switch mid-step: PASSED (no crash, correctly resets to Step 1 of new vertical)");

    // Test: switch level mid-step
    console.log("Adversarial Test: Switch level mid-step");
    // Go to Cruise Basic step 2 (requires answering quiz 1)
    const cruiseClassBasic = window.CLASSES.find(c => c.vertical === 'cruise' && c.level === 'basic');
    const cruiseOptBtns = document.querySelectorAll('#quizOptions button');
    cruiseOptBtns[cruiseClassBasic.steps[0].quiz.correctIndex].click();
    await wait(50);
    nextBtn.click(); // go to step 2
    await wait(50);
    checkRuntimeError();

    // Switch level to Advanced
    const advLvlBtn = Array.from(levelBtns).find(b => b.dataset.level === 'advanced');
    advLvlBtn.click();
    await wait(50);
    checkRuntimeError();

    // Check that we safely transition to Cruise Advanced Step 1
    const advTitle = document.getElementById('classTitle').textContent;
    const expectedCruiseAdvTitle = window.CLASSES.find(c => c.vertical === 'cruise' && c.level === 'advanced').title.ko;
    if (advTitle !== expectedCruiseAdvTitle) {
      throw new Error(`Expected classroom title to switch to "${expectedCruiseAdvTitle}", got "${advTitle}"`);
    }
    const advStepCount = document.getElementById('classStepCount').textContent;
    if (!advStepCount.includes('1')) {
      throw new Error(`Expected step to reset to 1 after level switch, got "${advStepCount}"`);
    }
    console.log("  - Level switch mid-step: PASSED (no crash, correctly resets to Step 1 of new level)");

    // Test: change language mid-quiz / mid-step
    console.log("Adversarial Test: Change language mid-quiz");
    // Currently on Cruise Advanced Step 1 (has a quiz)
    const cruiseClassAdv = window.CLASSES.find(c => c.vertical === 'cruise' && c.level === 'advanced');
    // Answer incorrect first
    const advOptBtns = document.querySelectorAll('#quizOptions button');
    const wrongIdx = (cruiseClassAdv.steps[0].quiz.correctIndex + 1) % cruiseClassAdv.steps[0].quiz.options.length;
    advOptBtns[wrongIdx].click();
    await wait(50);
    checkRuntimeError();

    // Switch language to EN
    langBtn.click();
    await wait(100);
    checkRuntimeError();

    // It resets to default Air Basic Step 1. Ensure no crash and translates cleanly.
    if (document.documentElement.lang !== 'en') {
      throw new Error("Language did not change to 'en'");
    }
    const mainTitle = document.getElementById('classTitle').textContent;
    const expectedAirBasicTitle = window.CLASSES.find(c => c.vertical === 'air' && c.level === 'basic').title.en;
    if (mainTitle !== expectedAirBasicTitle) {
      throw new Error(`Expected classroom title to switch to "${expectedAirBasicTitle}" on reset, got "${mainTitle}"`);
    }
    console.log("  - Language change mid-quiz: PASSED (no crash, resets cleanly to Air Basic Step 1 in EN)");

    // Switch to Hotel Advanced EN
    const enVertTabs2 = document.querySelectorAll('#classVerticalTabs button');
    const hotelTab3 = Array.from(enVertTabs2).find(b => b.dataset.vertical === 'hotel');
    hotelTab3.click();
    const enLevelBtns = document.querySelectorAll('#classLevelToggles button');
    const advLvlBtn2 = Array.from(enLevelBtns).find(b => b.dataset.level === 'advanced');
    advLvlBtn2.click();
    await wait(50);
    checkRuntimeError();

    // Test: unexpected click orders
    console.log("Adversarial Test: click back button programmatically when disabled");
    const backBtn = document.getElementById('classBtnBack');
    if (!backBtn.disabled) {
      throw new Error("Back button should be disabled on step 1");
    }
    // Programmatically click anyway
    backBtn.click();
    await wait(50);
    checkRuntimeError();
    if (document.getElementById('classStepCount').textContent.trim() === '') {
      throw new Error("Page state got corrupted after clicking disabled Back button");
    }

    console.log("Adversarial Test: click next button programmatically when disabled");
    const nextBtn2 = document.getElementById('classBtnNext');
    if (!nextBtn2.disabled) {
      throw new Error("Next button should be disabled on first step of Hotel Advanced");
    }
    nextBtn2.click();
    await wait(50);
    checkRuntimeError();
    const stepCountTextAfterClick = document.getElementById('classStepCount').textContent;
    if (!stepCountTextAfterClick.includes('1')) {
      throw new Error(`Expected step to remain 1 after disabled Next click, but got: "${stepCountTextAfterClick}"`);
    }

    console.log("Adversarial Test: click correct answer, then click incorrect answer, then click next");
    // Hotel Advanced Step 1 correct answer
    const hotelAdvClass = window.CLASSES.find(c => c.vertical === 'hotel' && c.level === 'advanced');
    const hotelAdvOpts = document.querySelectorAll('#quizOptions button');
    const correctIdx = hotelAdvClass.steps[0].quiz.correctIndex;
    const wrongIdx2 = (correctIdx + 1) % hotelAdvClass.steps[0].quiz.options.length;

    // Click correct -> next unlocks
    hotelAdvOpts[correctIdx].click();
    await wait(50);
    if (nextBtn2.disabled) throw new Error("Next button should have unlocked after correct click");

    // Click incorrect -> next locks again
    hotelAdvOpts[wrongIdx2].click();
    await wait(50);
    if (!nextBtn2.disabled) throw new Error("Next button should have locked again after incorrect click");

    // Try clicking next -> should not change step
    nextBtn2.click();
    await wait(50);
    checkRuntimeError();
    if (!document.getElementById('classStepCount').textContent.includes('1')) {
      throw new Error("Next button clicked when it should be locked!");
    }

    // Click correct again -> unlock and advance
    hotelAdvOpts[correctIdx].click();
    await wait(50);
    nextBtn2.click();
    await wait(50);
    checkRuntimeError();
    if (!document.getElementById('classStepCount').textContent.includes('2')) {
      throw new Error("Failed to advance to step 2 after resolving quiz");
    }

    console.log("  - Unexpected click orders: PASSED");

    console.log("All adversarial verification scenarios successfully verified without runtime errors.");
    process.exit(0);
  } catch (err) {
    console.error("Adversarial verification failed!");
    console.error(err);
    process.exit(1);
  }
});
