import "./chunk-EJKSKVQ6.js";
import {
  require_prism
} from "./chunk-VYZLFJ7Z.js";
import {
  MatTab,
  MatTabContent,
  MatTabGroup,
  MatTabsModule
} from "./chunk-3BBRWWQW.js";
import "./chunk-PEESLLPT.js";
import "./chunk-AEAJYSPS.js";
import {
  __toESM,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-N7AAI6XN.js";

// src/app/components/angular/learn-changedetection/learn-changedetection.component.ts
var import_prismjs = __toESM(require_prism());
function LearnChangedetectionComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h3");
    \u0275\u0275text(2, "How Zone.js Works");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Zone.js is a library that patches asynchronous APIs (setTimeout, addEventListener, Promise, etc.) to intercept async operations and notify Angular when they complete. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "What is Zone.js?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li");
    \u0275\u0275text(9, "Execution context that persists across async operations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275text(11, "Monkey-patches browser APIs at startup");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li");
    \u0275\u0275text(13, "Tracks when async operations start and finish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "li");
    \u0275\u0275text(15, "Triggers Angular's change detection automatically");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "h4");
    \u0275\u0275text(17, "Async Operations that Trigger Detection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ul")(19, "li");
    \u0275\u0275text(20, "\u{1F5B1}\uFE0F ");
    \u0275\u0275elementStart(21, "strong");
    \u0275\u0275text(22, "DOM Events:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " click, input, keydown, etc.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li");
    \u0275\u0275text(25, "\u23F1\uFE0F ");
    \u0275\u0275elementStart(26, "strong");
    \u0275\u0275text(27, "Timers:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " setTimeout, setInterval");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "li");
    \u0275\u0275text(30, "\u{1F310} ");
    \u0275\u0275elementStart(31, "strong");
    \u0275\u0275text(32, "HTTP Requests:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, " HttpClient calls");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "li");
    \u0275\u0275text(35, "\u{1F504} ");
    \u0275\u0275elementStart(36, "strong");
    \u0275\u0275text(37, "Promises:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " Promise.then(), async/await");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "li");
    \u0275\u0275text(40, "\u{1F4E1} ");
    \u0275\u0275elementStart(41, "strong");
    \u0275\u0275text(42, "Observables:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, " When used with async pipe");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "pre")(45, "code", 10);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 11)(48, "h4");
    \u0275\u0275text(49, "\u{1F4A1} How It Works");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "p");
    \u0275\u0275text(51, ' When you click a button, Zone.js wraps your click handler. After your code runs, Zone.js tells Angular "something might have changed", and Angular checks the component tree. ');
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 12)(53, "h4");
    \u0275\u0275text(54, "\u26A0\uFE0F Performance Impact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "p");
    \u0275\u0275text(56, " Zone.js checks the ENTIRE component tree on every async operation, which can be inefficient for large applications. This is why OnPush strategy exists. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(46);
    \u0275\u0275textInterpolate(ctx_r0.zoneJS);
  }
}
function LearnChangedetectionComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h3");
    \u0275\u0275text(2, "Default Change Detection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " The default strategy checks every component in the tree whenever any async event occurs. While simple, it can become slow as applications grow. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "How Default Works");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ol")(8, "li");
    \u0275\u0275text(9, "Async operation completes (click, HTTP, timer)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275text(11, "Zone.js notifies Angular");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li");
    \u0275\u0275text(13, "Angular checks EVERY component from root to leaves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "li");
    \u0275\u0275text(15, "Each component's template is evaluated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li");
    \u0275\u0275text(17, "DOM is updated if changes detected");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "h4");
    \u0275\u0275text(19, "Characteristics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ul")(21, "li");
    \u0275\u0275text(22, "\u2705 ");
    \u0275\u0275elementStart(23, "strong");
    \u0275\u0275text(24, "Simple:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " No special handling needed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "li");
    \u0275\u0275text(27, "\u2705 ");
    \u0275\u0275elementStart(28, "strong");
    \u0275\u0275text(29, "Always works:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " Catches all changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "li");
    \u0275\u0275text(32, "\u274C ");
    \u0275\u0275elementStart(33, "strong");
    \u0275\u0275text(34, "Inefficient:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Checks unchanged components");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "li");
    \u0275\u0275text(37, "\u274C ");
    \u0275\u0275elementStart(38, "strong");
    \u0275\u0275text(39, "Slow for large apps:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " Scales poorly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "pre")(42, "code", 10);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 13)(45, "h4");
    \u0275\u0275text(46, "\u{1F4CA} Performance Implications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p");
    \u0275\u0275text(48, " In a component tree with 100 components, clicking a button triggers 100 change detection checks - even if only 1 component changed! ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 14)(50, "h4");
    \u0275\u0275text(51, "\u{1F4A1} When to Use");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "ul")(53, "li");
    \u0275\u0275text(54, "Small applications (< 50 components)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "li");
    \u0275\u0275text(56, "Prototypes and demos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "li");
    \u0275\u0275text(58, "When you mutate objects directly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "li");
    \u0275\u0275text(60, "When simplicity is more important than performance");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(43);
    \u0275\u0275textInterpolate(ctx_r0.defaultStrategy);
  }
}
function LearnChangedetectionComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h3");
    \u0275\u0275text(2, "OnPush Change Detection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " OnPush strategy makes change detection opt-in rather than automatic. Components are only checked when specific conditions are met. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "When OnPush Components Are Checked");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ol")(8, "li");
    \u0275\u0275text(9, "\u{1F517} ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11, "Input reference changes:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " New object/array passed to @Input()");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "li");
    \u0275\u0275text(14, "\u{1F5B1}\uFE0F ");
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16, "Event from component:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " (click), (input), etc. fired from this component");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "li");
    \u0275\u0275text(19, "\u{1F4E1} ");
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21, "Async pipe:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Observable/Promise emits new value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "li");
    \u0275\u0275text(24, "\u{1F528} ");
    \u0275\u0275elementStart(25, "strong");
    \u0275\u0275text(26, "Manual trigger:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " markForCheck() or detectChanges()");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "pre")(29, "code", 10);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 15)(32, "h4");
    \u0275\u0275text(33, "Default vs OnPush");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "table")(35, "tr")(36, "th");
    \u0275\u0275text(37, "Aspect");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39, "Default");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th");
    \u0275\u0275text(41, "OnPush");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "tr")(43, "td");
    \u0275\u0275text(44, "Trigger");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "td");
    \u0275\u0275text(46, "Any async operation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "td");
    \u0275\u0275text(48, "Input/Event/Async pipe/Manual");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "tr")(50, "td");
    \u0275\u0275text(51, "Checks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "td");
    \u0275\u0275text(53, "Always");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "td");
    \u0275\u0275text(55, "Conditional");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "tr")(57, "td");
    \u0275\u0275text(58, "Performance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "td");
    \u0275\u0275text(60, "Lower");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "td");
    \u0275\u0275text(62, "Higher");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "tr")(64, "td");
    \u0275\u0275text(65, "Complexity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "td");
    \u0275\u0275text(67, "Simple");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "td");
    \u0275\u0275text(69, "Requires immutability");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(70, "div", 12)(71, "h4");
    \u0275\u0275text(72, "\u26A0\uFE0F Important: Immutability Required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "p");
    \u0275\u0275text(74, " OnPush checks references, not values. You MUST create new objects/arrays when updating state, or changes won't be detected. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "pre")(76, "code");
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(78, "div", 14)(79, "h4");
    \u0275\u0275text(80, "\u{1F4A1} Best Practices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "ul")(82, "li");
    \u0275\u0275text(83, "Use OnPush for all presentational components");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "li");
    \u0275\u0275text(85, "Keep smart components with default strategy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "li");
    \u0275\u0275text(87, "Always create new references when updating");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "li");
    \u0275\u0275text(89, "Use immutability libraries (Immer, Immutable.js)");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(30);
    \u0275\u0275textInterpolate(ctx_r0.onPushStrategy);
    \u0275\u0275advance(47);
    \u0275\u0275textInterpolate2("// \u274C Won't work with OnPush\nthis.user.name = 'New Name';\n\n// \u2705 Works with OnPush\nthis.user = ", "{", "...this.user, name: 'New Name'", "}", ";");
  }
}
function LearnChangedetectionComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h3");
    \u0275\u0275text(2, "Manual Change Detection Control");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " ChangeDetectorRef gives you fine-grained control over when and how change detection runs for a component. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "ChangeDetectorRef Methods");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "detectChanges():");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Run change detection immediately for this component and children");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "markForCheck():");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Mark component and ancestors to be checked in next cycle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "detach():");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Remove component from change detection tree");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "reattach():");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Add component back to change detection tree");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li")(25, "strong");
    \u0275\u0275text(26, "checkNoChanges():");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Verify no changes occurred (dev mode only)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "pre")(29, "code", 10);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 16)(32, "h4");
    \u0275\u0275text(33, "detectChanges() vs markForCheck()");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "table")(35, "tr")(36, "th");
    \u0275\u0275text(37, "Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39, "When It Runs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th");
    \u0275\u0275text(41, "What It Checks");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "tr")(43, "td")(44, "code");
    \u0275\u0275text(45, "detectChanges()");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "td");
    \u0275\u0275text(47, "Immediately");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "td");
    \u0275\u0275text(49, "Component + children");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "tr")(51, "td")(52, "code");
    \u0275\u0275text(53, "markForCheck()");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "td");
    \u0275\u0275text(55, "Next cycle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "td");
    \u0275\u0275text(57, "Component + ancestors");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(58, "div", 17)(59, "h4");
    \u0275\u0275text(60, "\u{1F3AF} Common Use Cases");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "ul")(62, "li")(63, "strong");
    \u0275\u0275text(64, "Third-party libraries:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(65, " Trigger detection after library updates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "li")(67, "strong");
    \u0275\u0275text(68, "Performance optimization:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(69, " Detach heavy components");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "li")(71, "strong");
    \u0275\u0275text(72, "Outside Zone:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(73, " Manually trigger after runOutsideAngular");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "li")(75, "strong");
    \u0275\u0275text(76, "OnPush + observables:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(77, " markForCheck in manual subscriptions");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(30);
    \u0275\u0275textInterpolate(ctx_r0.changeDetectorRef);
  }
}
function LearnChangedetectionComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h3");
    \u0275\u0275text(2, "Zoneless Change Detection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Angular 18+ introduces experimental zoneless mode, removing Zone.js dependency for better performance and smaller bundles. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Why Zoneless?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li");
    \u0275\u0275text(9, "\u{1F680} ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11, "Better performance:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " No Zone.js overhead");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "li");
    \u0275\u0275text(14, "\u{1F4E6} ");
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16, "Smaller bundles:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " ~40KB less");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "li");
    \u0275\u0275text(19, "\u{1F3AF} ");
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21, "More predictable:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Explicit change triggers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "li");
    \u0275\u0275text(24, "\u{1F52E} ");
    \u0275\u0275elementStart(25, "strong");
    \u0275\u0275text(26, "Future-ready:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Aligns with modern reactive patterns");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "li");
    \u0275\u0275text(29, "\u{1F9E9} ");
    \u0275\u0275elementStart(30, "strong");
    \u0275\u0275text(31, "Better composition:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " Works well with micro-frontends");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "h4");
    \u0275\u0275text(34, "How It Works");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p");
    \u0275\u0275text(36, " Instead of automatically detecting changes, zoneless Angular relies on: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "ul")(38, "li");
    \u0275\u0275text(39, "\u2728 ");
    \u0275\u0275elementStart(40, "strong");
    \u0275\u0275text(41, "Signals:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, " Reactive primitives that track dependencies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "li");
    \u0275\u0275text(44, "\u{1F4E1} ");
    \u0275\u0275elementStart(45, "strong");
    \u0275\u0275text(46, "RxJS interop:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, " toSignal() converts observables");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "li");
    \u0275\u0275text(49, "\u{1F5B1}\uFE0F ");
    \u0275\u0275elementStart(50, "strong");
    \u0275\u0275text(51, "Event handlers:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, " Still trigger detection automatically");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "li");
    \u0275\u0275text(54, "\u{1F528} ");
    \u0275\u0275elementStart(55, "strong");
    \u0275\u0275text(56, "Manual triggers:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57, " When needed for edge cases");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "pre")(59, "code", 10);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 18)(62, "h4");
    \u0275\u0275text(63, "\u{1F4CB} Migration Path");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "ol")(65, "li");
    \u0275\u0275text(66, "Adopt signals for local state");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "li");
    \u0275\u0275text(68, "Use toSignal() for observables");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "li");
    \u0275\u0275text(70, "Test with provideExperimentalZonelessChangeDetection()");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "li");
    \u0275\u0275text(72, "Identify and fix Zone-dependent code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "li");
    \u0275\u0275text(74, "Remove Zone.js from polyfills.ts");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(75, "div", 19)(76, "h4");
    \u0275\u0275text(77, "\u{1F4CA} Current Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "p")(79, "strong");
    \u0275\u0275text(80, "Experimental in Angular 18");
    \u0275\u0275elementEnd();
    \u0275\u0275text(81, " - Not recommended for production yet. Expected to stabilize in Angular 19/20. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(60);
    \u0275\u0275textInterpolate(ctx_r0.zonelessAngular);
  }
}
function LearnChangedetectionComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h3");
    \u0275\u0275text(2, "Performance Optimization Techniques");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Optimize change detection to keep your application fast and responsive. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "pre")(6, "code", 10);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 20)(9, "h4");
    \u0275\u0275text(10, "\u2705 Performance Checklist");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ul")(12, "li");
    \u0275\u0275text(13, "\u2713 Use OnPush for presentational components");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "li");
    \u0275\u0275text(15, "\u2713 Add trackBy to all *ngFor directives");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li");
    \u0275\u0275text(17, "\u2713 Use async pipe instead of manual subscriptions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "li");
    \u0275\u0275text(19, "\u2713 Avoid function calls in templates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li");
    \u0275\u0275text(21, "\u2713 Use pure pipes when possible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "li");
    \u0275\u0275text(23, "\u2713 Detach components that update infrequently");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li");
    \u0275\u0275text(25, "\u2713 Run expensive operations outside Angular zone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "li");
    \u0275\u0275text(27, "\u2713 Make data structures immutable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "li");
    \u0275\u0275text(29, "\u2713 Use signals for reactive state (Angular 16+)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "li");
    \u0275\u0275text(31, "\u2713 Profile with Chrome DevTools");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 21)(33, "h4");
    \u0275\u0275text(34, "\u{1F4CA} Profiling Change Detection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "pre")(36, "code");
    \u0275\u0275text(37, "// Enable profiling in dev mode\nng.profiler.timeChangeDetection()\n\n// Results show:\n// - Total time for change detection cycle\n// - Time per component\n// - Number of checks performed");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.performanceOptimization);
  }
}
function LearnChangedetectionComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h3");
    \u0275\u0275text(2, "Change Detection Best Practices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "pre")(4, "code", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 22)(7, "div", 23)(8, "h4");
    \u0275\u0275text(9, "\u2705 DO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ul")(11, "li");
    \u0275\u0275text(12, "Use OnPush for presentational components");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "li");
    \u0275\u0275text(14, "Create new object references with OnPush");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li");
    \u0275\u0275text(16, "Use async pipe for observables");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "li");
    \u0275\u0275text(18, "Use signals for reactive state");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "li");
    \u0275\u0275text(20, "Add trackBy to *ngFor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "li");
    \u0275\u0275text(22, "Profile your application");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "li");
    \u0275\u0275text(24, "Understand when detection runs");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 24)(26, "h4");
    \u0275\u0275text(27, "\u274C DON'T");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ul")(29, "li");
    \u0275\u0275text(30, "Mutate objects with OnPush");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "li");
    \u0275\u0275text(32, "Call functions in templates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "li");
    \u0275\u0275text(34, "Manually subscribe if async pipe works");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "li");
    \u0275\u0275text(36, "Use timers unnecessarily");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "li");
    \u0275\u0275text(38, "Forget to unsubscribe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "li");
    \u0275\u0275text(40, "Ignore performance warnings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "li");
    \u0275\u0275text(42, "Over-optimize prematurely");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 25)(44, "h4");
    \u0275\u0275text(45, "\u{1F333} Which Strategy to Use?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "pre")(47, "code");
    \u0275\u0275text(48, "Start with OnPush\n    \u2193\nDo you mutate data directly? \n    \u251C\u2500 Yes \u2192 Use Default (or refactor to immutable)\n    \u2514\u2500 No \u2192 Keep OnPush\n         \u2193\n    Still having issues?\n         \u251C\u2500 Yes \u2192 Add markForCheck() where needed\n         \u2514\u2500 No \u2192 Perfect! \u{1F389}");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.bestPractices);
  }
}
var LearnChangedetectionComponent = class _LearnChangedetectionComponent {
  constructor() {
    this.zoneJS = `// How Zone.js Works
// Zone.js patches async APIs to track changes

// Async operations that trigger change detection:
- DOM events (click, input, etc.)
- setTimeout/setInterval
- HTTP requests (HttpClient)
- Promises
- Observables (with async pipe)

// Zone.js creates a "zone" context
class ApplicationRef {
  tick() {
    this.zones.forEach(zone => {
      zone.checkAndUpdateView(); // Check entire component tree
    });
  }
}

// Browser event example
button.addEventListener('click', () => {
  // Zone.js wraps this callback
  Zone.current.run(() => {
    // Your code runs here
    this.count++;
    
    // After callback completes, Zone.js triggers change detection
    applicationRef.tick();
  });
});`;
    this.defaultStrategy = `// Default Change Detection Strategy
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: \`
    <div>
      <h3>Users (Default Strategy)</h3>
      <div *ngFor="let user of users">
        {{ user.name }} - {{ user.email }}
      </div>
      <button (click)="addUser()">Add User</button>
    </div>
  \`
})
export class UserListComponent {
  users = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' }
  ];

  addUser() {
    // This triggers change detection for ENTIRE component tree
    this.users.push({
      id: this.users.length + 1,
      name: 'New User',
      email: 'new@example.com'
    });
  }
}

// With default strategy:
// 1. Any async operation triggers change detection
// 2. Angular checks EVERY component in the tree
// 3. Even if nothing changed, all components are checked
// 4. Can be inefficient for large applications`;
    this.onPushStrategy = `// OnPush Change Detection Strategy
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  template: \`
    <div class="card">
      <h4>{{ user.name }}</h4>
      <p>{{ user.email }}</p>
      <p>Checked at: {{ checkTime }}</p>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush // \u{1F448} OnPush strategy
})
export class UserCardComponent {
  @Input() user!: { id: number; name: string; email: string };
  
  get checkTime() {
    // Log when change detection runs
    console.log('UserCardComponent checked');
    return new Date().toLocaleTimeString();
  }
}

// OnPush only checks when:
// 1. Input reference changes
// 2. Event originates from component
// 3. Async pipe receives new value
// 4. Manual trigger with ChangeDetectorRef

// Parent component
@Component({
  selector: 'app-user-list',
  template: \`
    <app-user-card *ngFor="let user of users" [user]="user">
    </app-user-card>
    <button (click)="updateUser()">Update User</button>
  \`
})
export class UserListComponent {
  users = [
    { id: 1, name: 'John', email: 'john@example.com' }
  ];

  updateUser() {
    // \u274C This WON'T trigger change detection (mutating object)
    this.users[0].name = 'Updated John';
    
    // \u2705 This WILL trigger change detection (new reference)
    this.users = [
      { ...this.users[0], name: 'Updated John' }
    ];
  }
}`;
    this.changeDetectorRef = `// Manual Change Detection Control
import { 
  Component, 
  ChangeDetectorRef,
  ChangeDetectionStrategy 
} from '@angular/core';

@Component({
  selector: 'app-manual-detection',
  template: \`
    <div>
      <h3>Counter: {{ counter }}</h3>
      <p>Last Update: {{ lastUpdate }}</p>
      <button (click)="incrementOutsideZone()">Increment Outside Zone</button>
      <button (click)="forceCheck()">Force Check</button>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManualDetectionComponent {
  counter = 0;
  lastUpdate = new Date();

  constructor(
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  incrementOutsideZone() {
    // Run outside Angular's zone (no automatic detection)
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.counter++;
        this.lastUpdate = new Date();
        
        // Manually trigger change detection
        this.cdr.detectChanges(); // Only this component
        // OR
        this.cdr.markForCheck(); // Mark for next cycle
      }, 1000);
    });
  }

  forceCheck() {
    this.counter++;
    // Manually mark component as dirty
    this.cdr.markForCheck();
  }
  
  ngOnDestroy() {
    // Detach from change detection (for performance)
    this.cdr.detach();
  }
}

// ChangeDetectorRef Methods:
// - detectChanges(): Run change detection immediately for this component and children
// - markForCheck(): Mark component and ancestors to be checked in next cycle
// - detach(): Remove component from change detection tree
// - reattach(): Add component back to change detection tree
// - checkNoChanges(): Verify no changes (dev mode only)`;
    this.zonelessAngular = `// Zoneless Angular (Experimental - Angular 18+)
// Remove Zone.js dependency for better performance

// 1. Bootstrap without Zone.js
// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideExperimentalZonelessChangeDetection() // \u{1F448} Enable zoneless mode
  ]
});

// 2. Use Signals for reactive state
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: \`
    <div>
      <h3>Count: {{ count() }}</h3>
      <h3>Double: {{ doubleCount() }}</h3>
      <button (click)="increment()">Increment</button>
    </div>
  \`
})
export class CounterComponent {
  // Signals automatically trigger updates
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);
  
  increment() {
    this.count.update(c => c + 1); // Automatically updates view
  }
}

// 3. Async operations with RxJS
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-data',
  template: \`<div>{{ data()?.title }}</div>\`
})
export class DataComponent {
  private dataService = inject(DataService);
  
  // Convert observable to signal (auto-updates)
  data = toSignal(this.dataService.getData());
}

// Benefits of Zoneless:
// \u2705 Better performance (no Zone.js overhead)
// \u2705 Smaller bundle size (no Zone.js library)
// \u2705 More predictable change detection
// \u2705 Better for micro-frontends
// \u2705 Aligns with modern reactive patterns (signals)`;
    this.performanceOptimization = `// Change Detection Performance Optimization

// 1. Use OnPush wherever possible
@Component({
  selector: 'app-product',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`<div>{{ product.name }}</div>\`
})
export class ProductComponent {
  @Input() product!: Product;
}

// 2. Use trackBy for *ngFor
@Component({
  template: \`
    <div *ngFor="let item of items; trackBy: trackByFn">
      {{ item.name }}
    </div>
  \`
})
export class ListComponent {
  items: Item[] = [];
  
  // Prevent re-rendering unchanged items
  trackByFn(index: number, item: Item) {
    return item.id; // Use unique identifier
  }
}

// 3. Detach components from change detection
export class HeavyComponent implements OnInit, OnDestroy {
  constructor(private cdr: ChangeDetectorRef) {}
  
  ngOnInit() {
    // Detach from automatic change detection
    this.cdr.detach();
    
    // Manually update when needed
    this.updateData().subscribe(data => {
      this.data = data;
      this.cdr.detectChanges(); // Manual trigger
    });
  }
}

// 4. Run outside Angular zone for performance-intensive operations
export class ChartComponent {
  constructor(private ngZone: NgZone) {}
  
  renderChart(data: number[]) {
    // Run expensive operations outside Angular
    this.ngZone.runOutsideAngular(() => {
      // Heavy calculations or third-party library
      const chart = new Chart(data);
      chart.render();
      
      // Re-enter zone when done
      this.ngZone.run(() => {
        this.chartReady = true;
      });
    });
  }
}

// 5. Use pure pipes
@Pipe({
  name: 'customFilter',
  pure: true // Only recalculate when inputs change
})
export class CustomFilterPipe implements PipeTransform {
  transform(items: any[], filter: string): any[] {
    return items.filter(item => item.name.includes(filter));
  }
}

// 6. Avoid function calls in templates
// \u274C Bad: Function called on every change detection
<div>{{ calculateTotal() }}</div>

// \u2705 Good: Use computed signal or cached property
<div>{{ total() }}</div> // Signal

// 7. Use async pipe for observables
// \u274C Bad: Manual subscription
export class BadComponent {
  data: Data;
  
  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
    });
  }
}

// \u2705 Good: Async pipe handles everything
export class GoodComponent {
  data$ = this.dataService.getData();
}
template: \`<div>{{ data$ | async }}</div>\``;
    this.bestPractices = `// Change Detection Best Practices

// \u2705 DO: Use OnPush for presentational components
@Component({
  selector: 'app-display',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`<div>{{ data.title }}</div>\`
})
export class DisplayComponent {
  @Input() data!: Data;
}

// \u2705 DO: Make data immutable with OnPush
updateUser() {
  // Create new reference
  this.user = { ...this.user, name: 'New Name' };
  
  // For arrays
  this.items = [...this.items, newItem];
  
  // For nested updates
  this.config = {
    ...this.config,
    settings: { ...this.config.settings, theme: 'dark' }
  };
}

// \u2705 DO: Use signals for reactive state (Angular 16+)
export class ModernComponent {
  count = signal(0);
  doubled = computed(() => this.count() * 2);
  
  increment() {
    this.count.update(n => n + 1);
  }
}

// \u2705 DO: Use async pipe
export class DataComponent {
  users$ = this.http.get<User[]>('/api/users');
}
template: \`
  <div *ngFor="let user of users$ | async">
    {{ user.name }}
  </div>
\`

// \u274C DON'T: Mutate objects with OnPush
this.user.name = 'Changed'; // Won't trigger detection

// \u274C DON'T: Call functions in templates
<div>{{ expensiveCalculation() }}</div> // Called every check!

// \u274C DON'T: Use setTimeout/setInterval unnecessarily
setTimeout(() => {
  this.data = newData; // Triggers change detection
}, 1000);

// \u2705 DO: Run outside zone when appropriate
this.ngZone.runOutsideAngular(() => {
  setInterval(() => {
    // Update non-Angular UI
  }, 100);
});

// \u2705 DO: Use trackBy with *ngFor
<div *ngFor="let item of items; trackBy: trackById">

trackById(index: number, item: any) {
  return item.id;
}

// \u2705 DO: Profile change detection
import { enableDebugTools } from '@angular/platform-browser';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(moduleRef => {
    const appRef = moduleRef.injector.get(ApplicationRef);
    const componentRef = appRef.components[0];
    enableDebugTools(componentRef);
  });

// In console:
// ng.profiler.timeChangeDetection()`;
  }
  ngAfterViewChecked() {
    import_prismjs.default.highlightAll();
  }
  static {
    this.\u0275fac = function LearnChangedetectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LearnChangedetectionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LearnChangedetectionComponent, selectors: [["app-learn-changedetection"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 0, consts: [[1, "header"], ["label", "Zone.js"], ["matTabContent", ""], ["label", "Default Strategy"], ["label", "OnPush Strategy"], ["label", "ChangeDetectorRef"], ["label", "Zoneless Angular"], ["label", "Performance"], ["label", "Best Practices"], [1, "tab-content"], [1, "language-typescript"], [1, "info-box"], [1, "warning-box"], [1, "performance-box"], [1, "tip-box"], [1, "comparison"], [1, "method-comparison"], [1, "use-cases-box"], [1, "migration-guide"], [1, "status-box"], [1, "optimization-checklist"], [1, "profiling-box"], [1, "dos-donts"], [1, "dos"], [1, "donts"], [1, "decision-tree"]], template: function LearnChangedetectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1, "Change Detection");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "label");
        \u0275\u0275text(3, "Change detection is Angular's mechanism for keeping the UI in sync with application state. Understanding it is crucial for building performant applications.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "mat-tab-group")(5, "mat-tab", 1);
        \u0275\u0275template(6, LearnChangedetectionComponent_ng_template_6_Template, 57, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-tab", 3);
        \u0275\u0275template(8, LearnChangedetectionComponent_ng_template_8_Template, 61, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "mat-tab", 4);
        \u0275\u0275template(10, LearnChangedetectionComponent_ng_template_10_Template, 90, 3, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-tab", 5);
        \u0275\u0275template(12, LearnChangedetectionComponent_ng_template_12_Template, 78, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-tab", 6);
        \u0275\u0275template(14, LearnChangedetectionComponent_ng_template_14_Template, 82, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-tab", 7);
        \u0275\u0275template(16, LearnChangedetectionComponent_ng_template_16_Template, 38, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "mat-tab", 8);
        \u0275\u0275template(18, LearnChangedetectionComponent_ng_template_18_Template, 49, 1, "ng-template", 2);
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [MatTabsModule, MatTabContent, MatTab, MatTabGroup], styles: ['\n\n.header[_ngcontent-%COMP%] {\n  color: #dd0031;\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.tab-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #dd0031;\n  margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n.tab-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #444;\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n}\n.tab-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.tab-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  line-height: 1.8;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\n.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 15px;\n  border-radius: 5px;\n  overflow-x: auto;\n  margin: 1rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 1rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 12px;\n  text-align: left;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  font-weight: 600;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fafafa;\n}\n.info-box[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.info-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1976d2;\n}\n.tip-box[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  border-left: 4px solid #4caf50;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.tip-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #2e7d32;\n}\n.warning-box[_ngcontent-%COMP%] {\n  background-color: #fff3e0;\n  border-left: 4px solid #ff9800;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.warning-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #f57c00;\n}\n.performance-box[_ngcontent-%COMP%] {\n  background-color: #f3e5f5;\n  border-left: 4px solid #9c27b0;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.performance-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #7b1fa2;\n}\n.comparison[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 2px solid #e0e0e0;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.method-comparison[_ngcontent-%COMP%] {\n  background-color: #e0f2f1;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.method-comparison[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #00796b;\n  margin-top: 0;\n}\n.use-cases-box[_ngcontent-%COMP%] {\n  background-color: #e8eaf6;\n  border-left: 4px solid #3f51b5;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.use-cases-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #303f9f;\n}\n.migration-guide[_ngcontent-%COMP%] {\n  background-color: #e0f2f1;\n  border-left: 4px solid #009688;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.migration-guide[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #00796b;\n}\n.migration-guide[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  line-height: 2;\n}\n.status-box[_ngcontent-%COMP%] {\n  background-color: #fff9c4;\n  border-left: 4px solid #fbc02d;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.status-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #f57f17;\n}\n.optimization-checklist[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  border-left: 4px solid #4caf50;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.optimization-checklist[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #2e7d32;\n}\n.optimization-checklist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 4px 0;\n}\n.profiling-box[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.profiling-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1976d2;\n}\n.dos-donts[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin: 20px 0;\n}\n.dos-donts[_ngcontent-%COMP%]   .dos[_ngcontent-%COMP%], \n.dos-donts[_ngcontent-%COMP%]   .donts[_ngcontent-%COMP%] {\n  padding: 15px;\n  border-radius: 4px;\n}\n.dos-donts[_ngcontent-%COMP%]   .dos[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  border-left: 4px solid #4caf50;\n}\n.dos-donts[_ngcontent-%COMP%]   .dos[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  margin-top: 0;\n}\n.dos-donts[_ngcontent-%COMP%]   .donts[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  border-left: 4px solid #f44336;\n}\n.dos-donts[_ngcontent-%COMP%]   .donts[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #c62828;\n  margin-top: 0;\n}\n.decision-tree[_ngcontent-%COMP%] {\n  background-color: #f3e5f5;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.decision-tree[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #7b1fa2;\n  margin-top: 0;\n}\n.decision-tree[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid #e0e0e0;\n}\n/*# sourceMappingURL=learn-changedetection.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LearnChangedetectionComponent, { className: "LearnChangedetectionComponent", filePath: "src\\app\\components\\angular\\learn-changedetection\\learn-changedetection.component.ts", lineNumber: 13 });
})();
export {
  LearnChangedetectionComponent
};
//# sourceMappingURL=chunk-55DR3GTH.js.map
