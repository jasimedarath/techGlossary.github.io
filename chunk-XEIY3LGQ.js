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
  ɵɵtextInterpolate
} from "./chunk-N7AAI6XN.js";

// src/app/components/angular/learn-signals/learn-signals.component.ts
var Prism = __toESM(require_prism());
function LearnSignalsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h3");
    \u0275\u0275text(2, "What are Signals?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Signals are a reactive primitive introduced in Angular 16 that notify interested consumers when their value changes. They provide a new way to manage state and reactivity in Angular applications with better performance and developer experience. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Key Concepts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "Writable Signal:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Created with ");
    \u0275\u0275elementStart(12, "code");
    \u0275\u0275text(13, "signal()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, ", can be read and updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li")(16, "strong");
    \u0275\u0275text(17, "Computed Signal:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Derived from other signals, automatically updates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "li")(20, "strong");
    \u0275\u0275text(21, "Effect:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Side effects that run when signals change");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "li")(24, "strong");
    \u0275\u0275text(25, "Fine-grained Reactivity:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " Only affected components update");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "h4");
    \u0275\u0275text(28, "Why Use Signals?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "ul")(30, "li");
    \u0275\u0275text(31, "\u{1F680} ");
    \u0275\u0275elementStart(32, "strong");
    \u0275\u0275text(33, "Better Performance:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " Fine-grained reactivity, no zone.js overhead");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "li");
    \u0275\u0275text(36, "\u{1F3AF} ");
    \u0275\u0275elementStart(37, "strong");
    \u0275\u0275text(38, "Simpler Code:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, " Less boilerplate than RxJS for simple state");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "li");
    \u0275\u0275text(41, "\u{1F50D} ");
    \u0275\u0275elementStart(42, "strong");
    \u0275\u0275text(43, "Better Debugging:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " Clear dependency graph");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "li");
    \u0275\u0275text(46, "\u26A1 ");
    \u0275\u0275elementStart(47, "strong");
    \u0275\u0275text(48, "Automatic Updates:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49, " Computed values update automatically");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "li");
    \u0275\u0275text(51, "\u{1F3C3} ");
    \u0275\u0275elementStart(52, "strong");
    \u0275\u0275text(53, "Zoneless Future:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(54, " Enables running without zone.js");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "pre")(56, "code", 10);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 11)(59, "h4");
    \u0275\u0275text(60, "\u{1F4A1} Signal Reading Syntax");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "p");
    \u0275\u0275text(62, " Signals use a function call syntax to read values: ");
    \u0275\u0275elementStart(63, "code");
    \u0275\u0275text(64, "count()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(65, ". This allows Angular to track dependencies automatically and is necessary for the reactive system to work. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(57);
    \u0275\u0275textInterpolate(ctx_r0.basicSignals);
  }
}
function LearnSignalsComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h3");
    \u0275\u0275text(2, "Computed Signals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Computed signals derive their value from other signals. They automatically track dependencies and only recompute when dependent signals change, making them highly efficient. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Characteristics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "Readonly:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Cannot be directly set, only computed from dependencies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "Lazy:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Only computes when read and dependencies have changed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "Memoized:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Caches result until dependencies change");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "Automatic Dependencies:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Tracks all signals read during computation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "h4");
    \u0275\u0275text(25, "When to Use Computed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ul")(27, "li");
    \u0275\u0275text(28, "Deriving data from other signals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "li");
    \u0275\u0275text(30, "Filtering or transforming signal data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "li");
    \u0275\u0275text(32, "Creating complex calculations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "li");
    \u0275\u0275text(34, "Building dependent state chains");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "pre")(36, "code", 10);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 12)(39, "h4");
    \u0275\u0275text(40, "\u{1F3AF} Best Practices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "ul")(42, "li");
    \u0275\u0275text(43, "Keep computed functions pure (no side effects)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "li");
    \u0275\u0275text(45, "Computed signals should be cheap to calculate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "li");
    \u0275\u0275text(47, "Use computed for derived state, effect for side effects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "li");
    \u0275\u0275text(49, "Avoid circular dependencies between computed signals");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(37);
    \u0275\u0275textInterpolate(ctx_r0.computedSignals);
  }
}
function LearnSignalsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h3");
    \u0275\u0275text(2, "Effects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Effects are operations that run when signals they depend on change. Unlike computed signals, effects are designed for side effects like logging, API calls, or DOM manipulation. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Effect Characteristics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li");
    \u0275\u0275text(9, "Run automatically when dependent signals change");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275text(11, "Should be used for side effects only");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li");
    \u0275\u0275text(13, "Support cleanup functions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "li");
    \u0275\u0275text(15, "Run at least once on creation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "h4");
    \u0275\u0275text(17, "Common Use Cases");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ul")(19, "li");
    \u0275\u0275text(20, "Logging or analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "li");
    \u0275\u0275text(22, "Synchronizing with localStorage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "li");
    \u0275\u0275text(24, "Triggering API calls");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "li");
    \u0275\u0275text(26, "DOM manipulation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "li");
    \u0275\u0275text(28, "WebSocket connections");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "pre")(30, "code", 10);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 13)(33, "h4");
    \u0275\u0275text(34, "\u26A0\uFE0F Important Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "ul")(36, "li");
    \u0275\u0275text(37, "Effects run in an async task by default");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "li");
    \u0275\u0275text(39, "Don't update signals within effects (can cause infinite loops)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "li");
    \u0275\u0275text(41, "Use ");
    \u0275\u0275elementStart(42, "code");
    \u0275\u0275text(43, "allowSignalWrites");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " option if absolutely necessary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "li");
    \u0275\u0275text(46, "Effects should not return values - use computed instead");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "li");
    \u0275\u0275text(48, "Always provide cleanup for subscriptions or timers");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(31);
    \u0275\u0275textInterpolate(ctx_r0.effectSignals);
  }
}
function LearnSignalsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h3");
    \u0275\u0275text(2, "Signal-based Inputs (Angular 17.1+)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Signal inputs provide a reactive way to handle component inputs, replacing the traditional ");
    \u0275\u0275elementStart(5, "code");
    \u0275\u0275text(6, "@Input()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " decorator with a more powerful and type-safe API. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h4");
    \u0275\u0275text(9, "Advantages Over ");
    \u0275\u0275elementStart(10, "code");
    \u0275\u0275text(11, "@Input()");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "ul")(13, "li");
    \u0275\u0275text(14, "Better type safety and inference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li");
    \u0275\u0275text(16, "Can be used in computed and effect");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "li");
    \u0275\u0275text(18, "Required inputs are type-checked at compile time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "li");
    \u0275\u0275text(20, "Transform functions are type-safe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "li");
    \u0275\u0275text(22, "No OnChanges lifecycle hook needed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "h4");
    \u0275\u0275text(24, "Input Types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "ul")(26, "li")(27, "code");
    \u0275\u0275text(28, "input()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " - Optional input with default");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "li")(31, "code");
    \u0275\u0275text(32, "input.required()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, " - Required input");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "li")(35, "code");
    \u0275\u0275text(36, "model()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, " - Two-way binding signal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "li")(39, "code");
    \u0275\u0275text(40, "linkedSignal()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, " - Writable signal linked to input");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "pre")(43, "code", 10);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 14)(46, "h4");
    \u0275\u0275text(47, "\u{1F4E6} Migration Path");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "pre")(49, "code");
    \u0275\u0275text(50, "// Before (traditional)\n@Input() name: string;\n@Input() required email!: string;\n@Output() nameChange = new EventEmitter<string>();\n\n// After (signals)\nname = input<string>('');\nemail = input.required<string>();\nname = model<string>('');");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(44);
    \u0275\u0275textInterpolate(ctx_r0.signalInputs);
  }
}
function LearnSignalsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h3");
    \u0275\u0275text(2, "Linked Signals (Angular 18+)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Linked signals create a writable signal that tracks an input signal but can also be modified independently. They reset to the source value when the source changes. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Use Cases");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li");
    \u0275\u0275text(9, "Form fields that need local edits and reset functionality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275text(11, "Filters that can be temporarily overridden");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li");
    \u0275\u0275text(13, "Draft state that syncs with saved data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "li");
    \u0275\u0275text(15, "Optimistic UI updates with rollback");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "pre")(17, "code", 10);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 15)(20, "h4");
    \u0275\u0275text(21, "\u{1F3A8} Common Pattern: Editable with Reset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "pre")(23, "code");
    \u0275\u0275text(24, "// Perfect for forms where you want to:\n// 1. Show initial value from parent\n// 2. Allow local edits\n// 3. Reset back to original\n\neditableValue = linkedSignal(() => this.originalValue());\nhasChanges = computed(() => \n  this.editableValue() !== this.originalValue()\n);");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275textInterpolate(ctx_r0.linkedSignal);
  }
}
function LearnSignalsComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h3");
    \u0275\u0275text(2, "Interoperability with RxJS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Angular provides utilities to convert between signals and observables, allowing you to leverage both paradigms in your application. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Conversion Functions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "code");
    \u0275\u0275text(10, "toSignal()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " - Converts Observable to Signal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "code");
    \u0275\u0275text(14, "toObservable()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " - Converts Signal to Observable");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "h4");
    \u0275\u0275text(17, "When to Use Each");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "table")(19, "tr")(20, "th");
    \u0275\u0275text(21, "Use Signals For");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Use RxJS For");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "tr")(25, "td");
    \u0275\u0275text(26, "Component state");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28, "HTTP requests");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "tr")(30, "td");
    \u0275\u0275text(31, "Simple transformations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td");
    \u0275\u0275text(33, "Complex async operations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "tr")(35, "td");
    \u0275\u0275text(36, "Derived values");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "td");
    \u0275\u0275text(38, "Debouncing, throttling");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "tr")(40, "td");
    \u0275\u0275text(41, "UI state");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "td");
    \u0275\u0275text(43, "WebSocket streams");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "pre")(45, "code", 10);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 12)(48, "h4");
    \u0275\u0275text(49, "\u{1F4A1} Best Practices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "ul")(51, "li");
    \u0275\u0275text(52, "Use signals for synchronous state management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "li");
    \u0275\u0275text(54, "Use RxJS for complex async operations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "li");
    \u0275\u0275text(56, "Convert at the boundaries (service \u2192 signal)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "li");
    \u0275\u0275text(58, "Prefer signals for component-local state");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "li");
    \u0275\u0275text(60, "toSignal requires initialValue or can return undefined");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(46);
    \u0275\u0275textInterpolate(ctx_r0.signalsRxjs);
  }
}
function LearnSignalsComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h3");
    \u0275\u0275text(2, "Advanced Signal Patterns");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " These patterns demonstrate how to build sophisticated state management solutions using signals. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "pre")(6, "code", 10);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 16)(9, "h4");
    \u0275\u0275text(10, "\u2705 Signal Best Practices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ul")(12, "li")(13, "strong");
    \u0275\u0275text(14, "Immutability:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Always update signals immutably");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "Privacy:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Expose readonly signals, keep writable private");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "Granularity:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Break state into smaller signals for better performance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li")(25, "strong");
    \u0275\u0275text(26, "Computation:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Use computed for derived state, not manual updates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "li")(29, "strong");
    \u0275\u0275text(30, "Effects:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Keep effects focused and provide cleanup");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "li")(33, "strong");
    \u0275\u0275text(34, "Testing:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Signals are easy to test - just set values and read results");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 17)(37, "h4");
    \u0275\u0275text(38, "\u{1F680} Performance Tips");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "ul")(40, "li");
    \u0275\u0275text(41, "Signals enable OnPush-like performance everywhere");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "li");
    \u0275\u0275text(43, "Computed signals only recalculate when dependencies change");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "li");
    \u0275\u0275text(45, "No need for ChangeDetectorRef or manual detection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "li");
    \u0275\u0275text(47, "Works towards zoneless Angular applications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "li");
    \u0275\u0275text(49, "Fine-grained updates mean less work for Angular");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.advancedPatterns);
  }
}
var LearnSignalsComponent = class _LearnSignalsComponent {
  constructor() {
    this.basicSignals = `import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: \`
    <div>
      <p>Count: {{ count() }}</p>
      <button (click)="increment()">Increment</button>
    </div>
  \`
})
export class CounterComponent {
  // Creating a signal with initial value
  count = signal(0);
  
  // Reading a signal value (must use () to read)
  increment() {
    this.count.update(value => value + 1);
  }
  
  // Setting a new value directly
  reset() {
    this.count.set(0);
  }
}`;
    this.computedSignals = `import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  template: \`
    <div>
      <p>Items: {{ items().length }}</p>
      <p>Total: \${{ total() }}</p>
      <p>Tax: \${{ tax() }}</p>
      <p>Final Price: \${{ finalPrice() }}</p>
    </div>
  \`
})
export class ShoppingCartComponent {
  items = signal<CartItem[]>([
    { id: 1, name: 'Product A', price: 10, quantity: 2 },
    { id: 2, name: 'Product B', price: 15, quantity: 1 }
  ]);
  
  taxRate = signal(0.08); // 8% tax
  
  // Computed signal - automatically updates when dependencies change
  total = computed(() => {
    return this.items().reduce((sum, item) => 
      sum + (item.price * item.quantity), 0
    );
  });
  
  // Computed signals can depend on other computed signals
  tax = computed(() => this.total() * this.taxRate());
  
  finalPrice = computed(() => this.total() + this.tax());
  
  addItem(item: CartItem) {
    this.items.update(items => [...items, item]);
    // total, tax, and finalPrice automatically recalculate!
  }
}`;
    this.effectSignals = `import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  template: '...'
})
export class UserProfileComponent {
  userId = signal<string | null>(null);
  userData = signal<User | null>(null);
  
  constructor() {
    // Effect runs when userId changes
    effect(() => {
      const id = this.userId();
      if (id) {
        console.log('Loading user data for:', id);
        this.loadUserData(id);
      }
    });
    
    // Effect with cleanup
    effect((onCleanup) => {
      const theme = this.theme();
      document.body.className = theme;
      
      // Cleanup function runs before next effect or on destroy
      onCleanup(() => {
        document.body.className = '';
      });
    });
  }
  
  async loadUserData(id: string) {
    const data = await fetch(\`/api/users/\${id}\`).then(r => r.json());
    this.userData.set(data);
  }
}

// Using effect for synchronization
@Component({...})
export class LocalStorageSync {
  settings = signal({ theme: 'light', lang: 'en' });
  
  constructor() {
    // Sync to localStorage whenever settings change
    effect(() => {
      const settings = this.settings();
      localStorage.setItem('settings', JSON.stringify(settings));
    });
  }
}`;
    this.signalInputs = `import { Component, input, model } from '@angular/core';

// Signal-based inputs (Angular 17.1+)
@Component({
  selector: 'app-user-card',
  template: \`
    <div class="card">
      <h3>{{ name() }}</h3>
      <p>{{ email() }}</p>
      @if (showDetails()) {
        <div>{{ details() }}</div>
      }
    </div>
  \`
})
export class UserCardComponent {
  // Required input
  name = input.required<string>();
  
  // Optional input with default value
  email = input<string>('no-email@example.com');
  
  // Optional input (can be undefined)
  details = input<string>();
  
  // With transform function
  showDetails = input<boolean, string>(false, {
    transform: (value: string) => value === 'true'
  });
  
  // Alias
  userId = input<number>('', { alias: 'id' });
}

// Two-way binding with model()
@Component({
  selector: 'app-search-box',
  template: \`
    <input 
      [value]="searchTerm()" 
      (input)="searchTerm.set($event.target.value)"
    />
  \`
})
export class SearchBoxComponent {
  // Two-way bindable signal
  searchTerm = model<string>('');
  
  // With default value
  selectedItems = model<string[]>([]);
}

// Usage in parent
@Component({
  template: \`
    <app-search-box [(searchTerm)]="query" />
  \`
})
export class ParentComponent {
  query = signal('');
}`;
    this.linkedSignal = `import { Component, signal, computed, linkedSignal } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  template: '...'
})
export class ProductFilterComponent {
  category = input<string>('all');
  
  // linkedSignal creates a writable signal that updates when input changes
  // but can also be modified locally
  selectedCategory = linkedSignal(() => this.category());
  
  // Use case: reset to input value but allow local modifications
  constructor() {
    // selectedCategory starts with category value
    // Can be updated independently: this.selectedCategory.set('electronics')
    // Resets when category input changes
  }
}

// Real-world example: Form with reset capability
@Component({
  selector: 'app-editable-profile',
  template: \`
    <div>
      <input [value]="editableName()" 
             (input)="editableName.set($event.target.value)" />
      <button (click)="reset()">Reset</button>
    </div>
  \`
})
export class EditableProfileComponent {
  originalName = input.required<string>();
  
  // Linked signal allows editing while keeping track of original
  editableName = linkedSignal(() => this.originalName());
  
  hasChanges = computed(() => 
    this.editableName() !== this.originalName()
  );
  
  reset() {
    this.editableName.set(this.originalName());
  }
}`;
    this.signalsRxjs = `import { Component, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  template: \`
    <input (input)="searchTerm.set($event.target.value)" />
    
    @if (loading()) {
      <div>Loading...</div>
    }
    
    @for (result of results(); track result.id) {
      <div>{{ result.name }}</div>
    }
  \`
})
export class SearchComponent {
  private http = inject(HttpClient);
  
  // Signal for input
  searchTerm = signal('');
  
  // Convert signal to observable for RxJS operators
  private searchTerm$ = toObservable(this.searchTerm);
  
  // Process with RxJS and convert back to signal
  results = toSignal(
    this.searchTerm$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.http.get<Result[]>(\`/api/search?q=\${term}\`))
    ),
    { initialValue: [] }
  );
  
  loading = signal(false);
}

// Converting observables to signals
@Component({...})
export class UserComponent {
  private route = inject(ActivatedRoute);
  
  // Convert route params to signal
  userId = toSignal(
    this.route.params.pipe(map(p => p['id'])),
    { initialValue: null }
  );
  
  // Use in computed
  userUrl = computed(() => 
    this.userId() ? \`/api/users/\${this.userId()}\` : null
  );
}`;
    this.advancedPatterns = `// Pattern 1: Signal-based store
import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TodoStore {
  // Private state
  private _todos = signal<Todo[]>([]);
  private _loading = signal(false);
  
  // Public readonly signals
  readonly todos = this._todos.asReadonly();
  readonly loading = this._loading.asReadonly();
  
  // Computed selectors
  readonly completedTodos = computed(() =>
    this._todos().filter(t => t.completed)
  );
  
  readonly activeTodos = computed(() =>
    this._todos().filter(t => !t.completed)
  );
  
  readonly stats = computed(() => ({
    total: this._todos().length,
    completed: this.completedTodos().length,
    active: this.activeTodos().length
  }));
  
  // Actions
  addTodo(title: string) {
    const todo: Todo = {
      id: Date.now(),
      title,
      completed: false
    };
    this._todos.update(todos => [...todos, todo]);
  }
  
  toggleTodo(id: number) {
    this._todos.update(todos =>
      todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    );
  }
  
  deleteTodo(id: number) {
    this._todos.update(todos => todos.filter(t => t.id !== id));
  }
}

// Pattern 2: Computed async values
@Component({...})
export class AsyncComponent {
  userId = signal<string>('123');
  
  // Trigger fetch when userId changes
  private userDataTrigger = toObservable(this.userId);
  
  userData = toSignal(
    this.userDataTrigger.pipe(
      switchMap(id => this.http.get<User>(\`/api/users/\${id}\`))
    ),
    { initialValue: null }
  );
  
  // Derived data
  userName = computed(() => this.userData()?.name ?? 'Loading...');
}

// Pattern 3: Deep signal updates
@Component({...})
export class DeepUpdateComponent {
  user = signal({
    profile: {
      name: 'John',
      settings: {
        theme: 'dark',
        notifications: true
      }
    }
  });
  
  // Update nested property immutably
  updateTheme(newTheme: string) {
    this.user.update(user => ({
      ...user,
      profile: {
        ...user.profile,
        settings: {
          ...user.profile.settings,
          theme: newTheme
        }
      }
    }));
  }
}`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function LearnSignalsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LearnSignalsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LearnSignalsComponent, selectors: [["app-learn-signals"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 0, consts: [[1, "header"], ["label", "Basic Signals"], ["matTabContent", ""], ["label", "Computed Signals"], ["label", "Effects"], ["label", "Signal Inputs"], ["label", "Linked Signals"], ["label", "Signals & RxJS"], ["label", "Advanced Patterns"], [1, "tab-content"], [1, "language-typescript"], [1, "info-box"], [1, "tip-box"], [1, "warning-box"], [1, "migration-tip"], [1, "pattern-box"], [1, "best-practices"], [1, "performance-tip"]], template: function LearnSignalsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1, "Signals");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "label");
        \u0275\u0275text(3, "Signals are Angular's reactive primitives for managing state changes and dependencies, providing fine-grained reactivity and better performance.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "mat-tab-group")(5, "mat-tab", 1);
        \u0275\u0275template(6, LearnSignalsComponent_ng_template_6_Template, 66, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-tab", 3);
        \u0275\u0275template(8, LearnSignalsComponent_ng_template_8_Template, 50, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "mat-tab", 4);
        \u0275\u0275template(10, LearnSignalsComponent_ng_template_10_Template, 49, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-tab", 5);
        \u0275\u0275template(12, LearnSignalsComponent_ng_template_12_Template, 51, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-tab", 6);
        \u0275\u0275template(14, LearnSignalsComponent_ng_template_14_Template, 25, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-tab", 7);
        \u0275\u0275template(16, LearnSignalsComponent_ng_template_16_Template, 61, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "mat-tab", 8);
        \u0275\u0275template(18, LearnSignalsComponent_ng_template_18_Template, 50, 1, "ng-template", 2);
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [MatTabsModule, MatTabContent, MatTab, MatTabGroup], styles: ['\n\n.header[_ngcontent-%COMP%] {\n  color: #dd0031;\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.tab-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #dd0031;\n  margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n.tab-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #444;\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n}\n.tab-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  line-height: 1.8;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\n.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 15px;\n  border-radius: 5px;\n  overflow-x: auto;\n  margin: 1rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 1rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 12px;\n  text-align: left;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  font-weight: 600;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fafafa;\n}\n.info-box[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.info-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1976d2;\n}\n.tip-box[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  border-left: 4px solid #4caf50;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.tip-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #2e7d32;\n}\n.warning-box[_ngcontent-%COMP%] {\n  background-color: #fff3e0;\n  border-left: 4px solid #ff9800;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.warning-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #f57c00;\n}\n.migration-tip[_ngcontent-%COMP%] {\n  background-color: #e0f2f1;\n  border-left: 4px solid #009688;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.migration-tip[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #00796b;\n}\n.pattern-box[_ngcontent-%COMP%] {\n  background-color: #f3e5f5;\n  border-left: 4px solid #9c27b0;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.pattern-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #7b1fa2;\n}\n.best-practices[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  border-left: 4px solid #4caf50;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.best-practices[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #2e7d32;\n}\n.best-practices[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.performance-tip[_ngcontent-%COMP%] {\n  background-color: #fff3e0;\n  border-left: 4px solid #ff9800;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.performance-tip[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #f57c00;\n}\n/*# sourceMappingURL=learn-signals.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LearnSignalsComponent, { className: "LearnSignalsComponent", filePath: "src\\app\\components\\angular\\learn-signals\\learn-signals.component.ts", lineNumber: 13 });
})();
export {
  LearnSignalsComponent
};
//# sourceMappingURL=chunk-XEIY3LGQ.js.map
