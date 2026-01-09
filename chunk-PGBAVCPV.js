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

// src/app/components/angular/learn-rxjs/learn-rxjs.component.ts
var Prism = __toESM(require_prism());
function LearnRxjsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3");
    \u0275\u0275text(2, "What is RxJS?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " RxJS (Reactive Extensions for JavaScript) is a library for composing asynchronous and event-based programs using observable sequences. It provides powerful operators to transform, combine, and manage data streams. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Core Concepts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "Observable:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Represents a stream of values over time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "Observer:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Consumes values from an observable (next, error, complete)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "Subscription:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Represents execution of an observable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "Operators:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Pure functions to transform observables");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li")(25, "strong");
    \u0275\u0275text(26, "Subject:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Both observable and observer (multicast)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "h4");
    \u0275\u0275text(29, "Why RxJS?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ul")(31, "li");
    \u0275\u0275text(32, "\u{1F504} ");
    \u0275\u0275elementStart(33, "strong");
    \u0275\u0275text(34, "Unified API:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Handle events, promises, and async data consistently");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "li");
    \u0275\u0275text(37, "\u{1F3AF} ");
    \u0275\u0275elementStart(38, "strong");
    \u0275\u0275text(39, "Composable:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " Chain operators to build complex logic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "li");
    \u0275\u0275text(42, "\u{1F680} ");
    \u0275\u0275elementStart(43, "strong");
    \u0275\u0275text(44, "Powerful:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, " 100+ operators for any scenario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "li");
    \u0275\u0275text(47, "\u26A1 ");
    \u0275\u0275elementStart(48, "strong");
    \u0275\u0275text(49, "Cancellable:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, " Unsubscribe to stop execution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "li");
    \u0275\u0275text(52, "\u{1F527} ");
    \u0275\u0275elementStart(53, "strong");
    \u0275\u0275text(54, "Error Handling:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, " Built-in error handling and retry logic");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "pre")(57, "code", 11);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 12)(60, "h4");
    \u0275\u0275text(61, "\u{1F4A1} Observable vs Promise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "ul")(63, "li")(64, "strong");
    \u0275\u0275text(65, "Observables:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(66, " Lazy (don't execute until subscribed), can emit multiple values, cancellable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "li")(68, "strong");
    \u0275\u0275text(69, "Promises:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(70, " Eager (execute immediately), emit single value, not cancellable");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(58);
    \u0275\u0275textInterpolate(ctx_r0.basicObservables);
  }
}
function LearnRxjsComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3");
    \u0275\u0275text(2, "Essential RxJS Operators");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Operators are functions that transform observables. They're the building blocks for creating complex data transformations and async logic. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Transformation Operators");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "code");
    \u0275\u0275text(10, "map");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " - Transform each value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "code");
    \u0275\u0275text(14, "scan");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " - Accumulate values (like reduce)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "code");
    \u0275\u0275text(18, "pluck");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " - Extract property from objects");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "h4");
    \u0275\u0275text(21, "Filtering Operators");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ul")(23, "li")(24, "code");
    \u0275\u0275text(25, "filter");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " - Filter values by predicate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "li")(28, "code");
    \u0275\u0275text(29, "take");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " - Take first N values");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "li")(32, "code");
    \u0275\u0275text(33, "takeUntil");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " - Take until another observable emits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "li")(36, "code");
    \u0275\u0275text(37, "skip");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " - Skip first N values");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "li")(40, "code");
    \u0275\u0275text(41, "distinctUntilChanged");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, " - Emit only when value changes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "h4");
    \u0275\u0275text(44, "Timing Operators");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "ul")(46, "li")(47, "code");
    \u0275\u0275text(48, "debounceTime");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49, " - Wait for pause in emissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "li")(51, "code");
    \u0275\u0275text(52, "throttleTime");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, " - Emit at most once per time period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "li")(55, "code");
    \u0275\u0275text(56, "delay");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57, " - Delay emissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "li")(59, "code");
    \u0275\u0275text(60, "timeout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(61, " - Error if no emission within time");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "pre")(63, "code", 11);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 13)(66, "h4");
    \u0275\u0275text(67, "\u{1F3AF} When to Use Which");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "ul")(69, "li")(70, "strong");
    \u0275\u0275text(71, "debounceTime:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(72, " Search as user types (wait for pause)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "li")(74, "strong");
    \u0275\u0275text(75, "throttleTime:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(76, " Scroll events (limit frequency)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "li")(78, "strong");
    \u0275\u0275text(79, "distinctUntilChanged:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(80, " Prevent duplicate API calls");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "li")(82, "strong");
    \u0275\u0275text(83, "take:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(84, " Get first N results then complete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(64);
    \u0275\u0275textInterpolate(ctx_r0.commonOperators);
  }
}
function LearnRxjsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3");
    \u0275\u0275text(2, "Combining Multiple Observables");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " These operators allow you to work with multiple observables simultaneously, combining their emissions in different ways. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Join Operators");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "combineLatest:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Emits when ANY source emits (latest from all)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "merge:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Combines emissions from all sources");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "forkJoin:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Waits for all to complete (like Promise.all)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "zip:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Combines emissions by index");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li")(25, "strong");
    \u0275\u0275text(26, "concat:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Sequential execution");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "pre")(29, "code", 11);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 14)(32, "h4");
    \u0275\u0275text(33, "Operator Comparison");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "table")(35, "tr")(36, "th");
    \u0275\u0275text(37, "Operator");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39, "Behavior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th");
    \u0275\u0275text(41, "Use Case");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "tr")(43, "td")(44, "code");
    \u0275\u0275text(45, "combineLatest");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "td");
    \u0275\u0275text(47, "Latest from each when any emits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "td");
    \u0275\u0275text(49, "Form validation, multiple filters");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "tr")(51, "td")(52, "code");
    \u0275\u0275text(53, "merge");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "td");
    \u0275\u0275text(55, "All emissions as they occur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "td");
    \u0275\u0275text(57, "Multiple event sources");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "tr")(59, "td")(60, "code");
    \u0275\u0275text(61, "forkJoin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "td");
    \u0275\u0275text(63, "Wait for all to complete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "td");
    \u0275\u0275text(65, "Loading multiple resources");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "tr")(67, "td")(68, "code");
    \u0275\u0275text(69, "zip");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "td");
    \u0275\u0275text(71, "Pair by index");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "td");
    \u0275\u0275text(73, "Parallel processing");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(30);
    \u0275\u0275textInterpolate(ctx_r0.combinationOperators);
  }
}
function LearnRxjsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3");
    \u0275\u0275text(2, "Flattening Operators");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, ' Higher-order operators handle observables that emit other observables. They "flatten" nested observables into a single stream. ');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "The Four Flattening Operators");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "switchMap:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Cancel previous, switch to new (most common)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "mergeMap:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Run all in parallel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "concatMap:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Run sequentially, preserve order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "exhaustMap:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Ignore new until current completes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "pre")(25, "code", 11);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 15)(28, "h4");
    \u0275\u0275text(29, "\u{1F4CB} Which Operator to Use?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "table")(31, "tr")(32, "th");
    \u0275\u0275text(33, "Scenario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th");
    \u0275\u0275text(35, "Operator");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th");
    \u0275\u0275text(37, "Why");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "tr")(39, "td");
    \u0275\u0275text(40, "Search/Autocomplete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "td")(42, "code");
    \u0275\u0275text(43, "switchMap");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "td");
    \u0275\u0275text(45, "Cancel old searches");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "tr")(47, "td");
    \u0275\u0275text(48, "Save button click");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "td")(50, "code");
    \u0275\u0275text(51, "exhaustMap");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "td");
    \u0275\u0275text(53, "Prevent duplicate saves");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "tr")(55, "td");
    \u0275\u0275text(56, "Load multiple items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "td")(58, "code");
    \u0275\u0275text(59, "mergeMap");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "td");
    \u0275\u0275text(61, "Parallel requests OK");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "tr")(63, "td");
    \u0275\u0275text(64, "Sequential operations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "td")(66, "code");
    \u0275\u0275text(67, "concatMap");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "td");
    \u0275\u0275text(69, "Order matters");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(26);
    \u0275\u0275textInterpolate(ctx_r0.higherOrderOperators);
  }
}
function LearnRxjsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3");
    \u0275\u0275text(2, "Handling Errors in RxJS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Proper error handling is crucial for building robust applications. RxJS provides several operators for managing errors gracefully. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Error Handling Strategies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "catchError:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Catch errors and return fallback");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "retry:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Retry failed operations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "retryWhen:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Custom retry logic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "throwError:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Create error observable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li")(25, "strong");
    \u0275\u0275text(26, "onErrorResumeNext:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Continue with next observable");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "pre")(29, "code", 11);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 16)(32, "h4");
    \u0275\u0275text(33, "\u26A0\uFE0F Important Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "ul")(35, "li");
    \u0275\u0275text(36, "Errors terminate the observable unless caught");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "li");
    \u0275\u0275text(38, "Always use catchError to prevent stream termination");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "li");
    \u0275\u0275text(40, "Place catchError strategically (inner vs outer)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "li");
    \u0275\u0275text(42, "Consider user experience when retrying");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(30);
    \u0275\u0275textInterpolate(ctx_r0.errorHandling);
  }
}
function LearnRxjsComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3");
    \u0275\u0275text(2, "Subjects - Multicasting Observables");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Subjects are special types of observables that can multicast to multiple observers. They act as both observable and observer. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Types of Subjects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "Subject:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " No initial value, new subscribers don't get past values");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "BehaviorSubject:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Has current value, new subscribers get latest value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "ReplaySubject:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Replays N last values to new subscribers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "AsyncSubject:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Only emits last value when completed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "pre")(25, "code", 11);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 17)(28, "h4");
    \u0275\u0275text(29, "\u{1F3AF} When to Use Each Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ul")(31, "li")(32, "strong");
    \u0275\u0275text(33, "Subject:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " Event bus, notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "li")(36, "strong");
    \u0275\u0275text(37, "BehaviorSubject:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " Current user, app state");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "li")(40, "strong");
    \u0275\u0275text(41, "ReplaySubject:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, " Chat messages, activity log");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "li")(44, "strong");
    \u0275\u0275text(45, "AsyncSubject:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, " API calls that emit once");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(26);
    \u0275\u0275textInterpolate(ctx_r0.subjects);
  }
}
function LearnRxjsComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3");
    \u0275\u0275text(2, "RxJS in Angular Applications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Angular uses RxJS extensively for HTTP, forms, routing, and more. Understanding RxJS patterns is essential for Angular development. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Common Angular + RxJS Patterns");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li");
    \u0275\u0275text(9, "HttpClient returns observables");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275text(11, "Reactive forms use observables for value changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li");
    \u0275\u0275text(13, "Router events are observables");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "li");
    \u0275\u0275text(15, "async pipe auto-subscribes and unsubscribes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "pre")(17, "code", 11);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 18)(20, "h4");
    \u0275\u0275text(21, "\u{1F4E6} RxJS + Signals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p");
    \u0275\u0275text(23, "Angular 16+ provides utilities to bridge RxJS and Signals:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ul")(25, "li")(26, "code");
    \u0275\u0275text(27, "toSignal(observable$)");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " - Convert observable to signal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "li")(30, "code");
    \u0275\u0275text(31, "toObservable(signal)");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " - Convert signal to observable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "li");
    \u0275\u0275text(34, "Use signals for synchronous state");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "li");
    \u0275\u0275text(36, "Use RxJS for complex async operations");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275textInterpolate(ctx_r0.angularIntegration);
  }
}
function LearnRxjsComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3");
    \u0275\u0275text(2, "RxJS Best Practices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Follow these practices to write clean, efficient, and maintainable RxJS code. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "pre")(6, "code", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 19)(9, "h4");
    \u0275\u0275text(10, "\u2705 Essential Best Practices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ul")(12, "li")(13, "strong");
    \u0275\u0275text(14, "Always unsubscribe:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Prevent memory leaks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "Use async pipe:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Automatic subscription management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "Avoid nested subscriptions:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Use operators instead");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li")(25, "strong");
    \u0275\u0275text(26, "Handle errors:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Don't let errors crash streams");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "li")(29, "strong");
    \u0275\u0275text(30, "Use shareReplay:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Avoid duplicate requests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "li")(33, "strong");
    \u0275\u0275text(34, "Name observables with $:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " users$, data$ convention");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "li")(37, "strong");
    \u0275\u0275text(38, "Keep operators pure:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, " No side effects in operators");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "li")(41, "strong");
    \u0275\u0275text(42, "Use takeUntil pattern:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, " For component cleanup");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 20)(45, "h4");
    \u0275\u0275text(46, "\u{1F680} Performance Tips");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "ul")(48, "li");
    \u0275\u0275text(49, "Use ");
    \u0275\u0275elementStart(50, "code");
    \u0275\u0275text(51, "shareReplay");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, " for expensive operations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "li");
    \u0275\u0275text(54, "Debounce user input to reduce API calls");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "li");
    \u0275\u0275text(56, "Use ");
    \u0275\u0275elementStart(57, "code");
    \u0275\u0275text(58, "distinctUntilChanged");
    \u0275\u0275elementEnd();
    \u0275\u0275text(59, " to prevent redundant work");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "li");
    \u0275\u0275text(61, "Lazy subscribe - don't subscribe in constructors");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "li");
    \u0275\u0275text(63, "Consider using signals for synchronous state");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.bestPractices);
  }
}
var LearnRxjsComponent = class _LearnRxjsComponent {
  constructor() {
    this.basicObservables = `import { Observable, of, from, interval } from 'rxjs';

// Creating Observables
// 1. of() - Emits values in sequence
const numbers$ = of(1, 2, 3, 4, 5);
numbers$.subscribe(val => console.log(val)); // 1, 2, 3, 4, 5

// 2. from() - Converts array/promise to observable
const array$ = from([10, 20, 30]);
const promise$ = from(fetch('/api/data'));

// 3. interval() - Emits numbers at intervals
const timer$ = interval(1000); // Emits 0, 1, 2... every second

// 4. Creating custom observable
const custom$ = new Observable(subscriber => {
  subscriber.next('Hello');
  subscriber.next('World');
  subscriber.complete();
});

// Subscribing to observables
const subscription = custom$.subscribe({
  next: (value) => console.log('Received:', value),
  error: (err) => console.error('Error:', err),
  complete: () => console.log('Completed!')
});

// Don't forget to unsubscribe!
subscription.unsubscribe();`;
    this.commonOperators = `import { of, interval } from 'rxjs';
import { map, filter, tap, take, debounceTime, distinctUntilChanged } from 'rxjs/operators';

// map - Transform values
of(1, 2, 3, 4, 5)
  .pipe(
    map(x => x * 10)
  )
  .subscribe(val => console.log(val)); // 10, 20, 30, 40, 50

// filter - Filter values
of(1, 2, 3, 4, 5)
  .pipe(
    filter(x => x % 2 === 0)
  )
  .subscribe(val => console.log(val)); // 2, 4

// tap - Side effects (debugging)
of(1, 2, 3)
  .pipe(
    tap(x => console.log('Before:', x)),
    map(x => x * 2),
    tap(x => console.log('After:', x))
  )
  .subscribe();

// take - Take first N emissions
interval(1000)
  .pipe(
    take(5)
  )
  .subscribe(val => console.log(val)); // 0, 1, 2, 3, 4 then completes

// debounceTime - Wait for pause in emissions
searchInput$
  .pipe(
    debounceTime(300) // Wait 300ms after last keystroke
  )
  .subscribe(term => console.log('Search:', term));

// distinctUntilChanged - Only emit when value changes
of(1, 1, 2, 2, 3, 1)
  .pipe(
    distinctUntilChanged()
  )
  .subscribe(val => console.log(val)); // 1, 2, 3, 1`;
    this.combinationOperators = `import { of, combineLatest, merge, forkJoin, zip } from 'rxjs';
import { switchMap, mergeMap, concatMap, exhaustMap } from 'rxjs/operators';

// combineLatest - Emit when ANY observable emits (latest from each)
const age$ = of(25, 26, 27);
const name$ = of('Alice', 'Bob');

combineLatest([age$, name$])
  .subscribe(([age, name]) => {
    console.log(\`\${name} is \${age} years old\`);
  });

// merge - Combine multiple observables into one
const clicks$ = fromEvent(button, 'click');
const timer$ = interval(1000);

merge(clicks$, timer$)
  .subscribe(val => console.log('Event:', val));

// forkJoin - Wait for all to complete (like Promise.all)
forkJoin({
  users: http.get('/api/users'),
  posts: http.get('/api/posts'),
  comments: http.get('/api/comments')
}).subscribe(({ users, posts, comments }) => {
  console.log('All loaded!', users, posts, comments);
});

// zip - Combine emissions by index
const nums$ = of(1, 2, 3);
const letters$ = of('A', 'B', 'C');

zip(nums$, letters$)
  .subscribe(([num, letter]) => {
    console.log(\`\${num}\${letter}\`); // 1A, 2B, 3C
  });`;
    this.higherOrderOperators = `import { fromEvent, interval, of } from 'rxjs';
import { switchMap, mergeMap, concatMap, exhaustMap } from 'rxjs/operators';

// switchMap - Cancel previous, switch to new observable
// Use: Search, live updates
searchInput$.pipe(
  debounceTime(300),
  switchMap(term => http.get(\`/api/search?q=\${term}\`))
).subscribe(results => console.log(results));

// mergeMap - Run in parallel, emit all results
// Use: Independent operations that can run simultaneously
of(1, 2, 3).pipe(
  mergeMap(id => http.get(\`/api/user/\${id}\`))
).subscribe(user => console.log(user));

// concatMap - Run in sequence, preserve order
// Use: Operations that must complete in order
of(1, 2, 3).pipe(
  concatMap(id => http.post(\`/api/user/\${id}\`, data))
).subscribe(response => console.log(response));

// exhaustMap - Ignore new emissions until current completes
// Use: Preventing duplicate operations (form submissions)
submitButton$.pipe(
  exhaustMap(() => http.post('/api/save', formData))
).subscribe(response => console.log('Saved:', response));

// Real-world example: Autocomplete search
searchInput$.pipe(
  debounceTime(300),           // Wait for user to stop typing
  distinctUntilChanged(),      // Only if value changed
  filter(term => term.length > 2), // Min 3 characters
  switchMap(term =>            // Cancel previous searches
    http.get(\`/api/search?q=\${term}\`).pipe(
      catchError(() => of([])) // Handle errors gracefully
    )
  )
).subscribe(results => displayResults(results));`;
    this.errorHandling = `import { of, throwError, EMPTY } from 'rxjs';
import { catchError, retry, retryWhen, delay, tap } from 'rxjs/operators';

// catchError - Handle errors and provide fallback
http.get('/api/data').pipe(
  catchError(error => {
    console.error('Error occurred:', error);
    return of([]); // Return empty array as fallback
  })
).subscribe(data => console.log(data));

// retry - Retry failed operation N times
http.get('/api/data').pipe(
  retry(3), // Retry up to 3 times
  catchError(error => {
    console.error('Failed after 3 retries');
    return throwError(() => error);
  })
).subscribe();

// retryWhen - Custom retry logic with delay
http.get('/api/data').pipe(
  retryWhen(errors =>
    errors.pipe(
      delay(1000),  // Wait 1 second between retries
      take(3),      // Max 3 retries
      tap(() => console.log('Retrying...'))
    )
  )
).subscribe();

// Advanced error handling
http.get<User[]>('/api/users').pipe(
  timeout(5000),           // Fail if takes > 5 seconds
  retry({
    count: 2,
    delay: 1000
  }),
  catchError(error => {
    if (error.status === 404) {
      return of([]); // Return empty for not found
    }
    // Log error and return cached data
    logError(error);
    return of(getCachedData());
  })
).subscribe(users => displayUsers(users));`;
    this.subjects = `import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

// Subject - Multicast observable, no initial value
const subject = new Subject<number>();

subject.subscribe(val => console.log('A:', val));
subject.subscribe(val => console.log('B:', val));

subject.next(1); // Both A and B receive 1
subject.next(2); // Both A and B receive 2

// BehaviorSubject - Has current value, emits last value to new subscribers
const currentUser = new BehaviorSubject<User | null>(null);

currentUser.subscribe(user => console.log('Current user:', user));
currentUser.next({ id: 1, name: 'Alice' });

// New subscriber gets current value immediately
currentUser.subscribe(user => console.log('New subscriber:', user));

// ReplaySubject - Replays N last values to new subscribers
const messages = new ReplaySubject<string>(3); // Keep last 3

messages.next('Message 1');
messages.next('Message 2');
messages.next('Message 3');
messages.next('Message 4');

// New subscriber gets last 3 messages
messages.subscribe(msg => console.log(msg)); // 2, 3, 4

// AsyncSubject - Only emits last value when completed
const result = new AsyncSubject<number>();

result.subscribe(val => console.log(val));
result.next(1);
result.next(2);
result.next(3);
result.complete(); // Now emits 3 to all subscribers

// Real-world: Event Bus Service
@Injectable({ providedIn: 'root' })
export class EventBusService {
  private eventSubject = new Subject<AppEvent>();
  public events$ = this.eventSubject.asObservable();
  
  emit(event: AppEvent) {
    this.eventSubject.next(event);
  }
}`;
    this.angularIntegration = `import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-search',
  template: \`
    <input [formControl]="searchControl" placeholder="Search users..." />
    
    @if (loading()) {
      <div>Loading...</div>
    }
    
    @for (user of users(); track user.id) {
      <div>{{ user.name }}</div>
    }
  \`
})
export class UserSearchComponent implements OnInit, OnDestroy {
  private http = inject(HttpClient);
  private destroy$ = new Subject<void>();
  
  searchControl = new FormControl('');
  users = signal<User[]>([]);
  loading = signal(false);
  
  ngOnInit() {
    // Listen to form control changes
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.loading.set(true)),
      switchMap(term => 
        this.http.get<User[]>(\`/api/users?q=\${term}\`)
      ),
      takeUntil(this.destroy$) // Auto-unsubscribe on destroy
    ).subscribe({
      next: users => {
        this.users.set(users);
        this.loading.set(false);
      },
      error: err => {
        console.error(err);
        this.loading.set(false);
      }
    });
  }
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

// Using async pipe (auto unsubscribes)
@Component({
  selector: 'app-users-list',
  template: \`
    @if (users$ | async; as users) {
      @for (user of users; track user.id) {
        <div>{{ user.name }}</div>
      }
    }
  \`
})
export class UsersListComponent {
  users$ = inject(HttpClient).get<User[]>('/api/users');
}`;
    this.bestPractices = `// 1. ALWAYS UNSUBSCRIBE
// Method 1: takeUntil pattern
private destroy$ = new Subject<void>();

ngOnInit() {
  this.dataService.data$.pipe(
    takeUntil(this.destroy$)
  ).subscribe(data => this.handleData(data));
}

ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}

// Method 2: Subscription management
private subscription = new Subscription();

ngOnInit() {
  this.subscription.add(
    observable1$.subscribe(data => {})
  );
  this.subscription.add(
    observable2$.subscribe(data => {})
  );
}

ngOnDestroy() {
  this.subscription.unsubscribe();
}

// Method 3: async pipe (automatic unsubscribe)
@Component({
  template: \`{{ data$ | async }}\`
})
export class MyComponent {
  data$ = this.http.get('/api/data');
}

// 2. USE PROPER OPERATORS
// \u274C BAD - Nested subscriptions (callback hell)
this.userService.getUser(id).subscribe(user => {
  this.postService.getPosts(user.id).subscribe(posts => {
    this.commentService.getComments(posts[0].id).subscribe(comments => {
      // Nested mess...
    });
  });
});

// \u2705 GOOD - Use switchMap
this.userService.getUser(id).pipe(
  switchMap(user => this.postService.getPosts(user.id)),
  switchMap(posts => this.commentService.getComments(posts[0].id))
).subscribe(comments => {
  // Clean and readable
});

// 3. HANDLE ERRORS
// \u274C BAD - No error handling
http.get('/api/data').subscribe(data => console.log(data));

// \u2705 GOOD - Handle errors
http.get('/api/data').pipe(
  catchError(error => {
    console.error('API Error:', error);
    return of(defaultValue);
  })
).subscribe(data => console.log(data));

// 4. USE SHAREPLAY FOR EXPENSIVE OPERATIONS
// \u274C BAD - Multiple subscriptions = multiple requests
const data$ = http.get('/api/expensive');
data$.subscribe(d => console.log('A:', d)); // Request 1
data$.subscribe(d => console.log('B:', d)); // Request 2

// \u2705 GOOD - Share single request
const data$ = http.get('/api/expensive').pipe(
  shareReplay({ bufferSize: 1, refCount: true })
);
data$.subscribe(d => console.log('A:', d)); // Request 1
data$.subscribe(d => console.log('B:', d)); // Uses cached result

// 5. COMBINE WITH SIGNALS
@Component({...})
export class ModernComponent {
  private http = inject(HttpClient);
  
  // Convert Observable to Signal
  users = toSignal(
    this.http.get<User[]>('/api/users'),
    { initialValue: [] }
  );
  
  // Convert Signal to Observable
  private searchTerm = signal('');
  private searchTerm$ = toObservable(this.searchTerm);
  
  results = toSignal(
    this.searchTerm$.pipe(
      debounceTime(300),
      switchMap(term => this.http.get(\`/search?q=\${term}\`))
    ),
    { initialValue: [] }
  );
}`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function LearnRxjsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LearnRxjsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LearnRxjsComponent, selectors: [["app-learn-rxjs"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 0, consts: [[1, "header"], ["label", "Observables Basics"], ["matTabContent", ""], ["label", "Common Operators"], ["label", "Combination Operators"], ["label", "Higher-Order Operators"], ["label", "Error Handling"], ["label", "Subjects"], ["label", "Angular Integration"], ["label", "Best Practices"], [1, "tab-content"], [1, "language-typescript"], [1, "info-box"], [1, "tip-box"], [1, "comparison-table"], [1, "decision-guide"], [1, "warning-box"], [1, "use-cases"], [1, "migration-tip"], [1, "best-practices-list"], [1, "performance-tips"]], template: function LearnRxjsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1, "RxJS - Reactive Extensions for JavaScript");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "label");
        \u0275\u0275text(3, "RxJS is a library for reactive programming using observables. It's essential for handling asynchronous operations, events, and data streams in Angular applications.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "mat-tab-group")(5, "mat-tab", 1);
        \u0275\u0275template(6, LearnRxjsComponent_ng_template_6_Template, 71, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-tab", 3);
        \u0275\u0275template(8, LearnRxjsComponent_ng_template_8_Template, 85, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "mat-tab", 4);
        \u0275\u0275template(10, LearnRxjsComponent_ng_template_10_Template, 74, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-tab", 5);
        \u0275\u0275template(12, LearnRxjsComponent_ng_template_12_Template, 70, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-tab", 6);
        \u0275\u0275template(14, LearnRxjsComponent_ng_template_14_Template, 43, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-tab", 7);
        \u0275\u0275template(16, LearnRxjsComponent_ng_template_16_Template, 47, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "mat-tab", 8);
        \u0275\u0275template(18, LearnRxjsComponent_ng_template_18_Template, 37, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "mat-tab", 9);
        \u0275\u0275template(20, LearnRxjsComponent_ng_template_20_Template, 64, 1, "ng-template", 2);
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [MatTabsModule, MatTabContent, MatTab, MatTabGroup], styles: ['\n\n.header[_ngcontent-%COMP%] {\n  color: #dd0031;\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.tab-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #dd0031;\n  margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n.tab-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #444;\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n}\n.tab-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  line-height: 1.8;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\n.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 15px;\n  border-radius: 5px;\n  overflow-x: auto;\n  margin: 1rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 1rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 12px;\n  text-align: left;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  font-weight: 600;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fafafa;\n}\n.info-box[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.info-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1976d2;\n}\n.tip-box[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  border-left: 4px solid #4caf50;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.tip-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #2e7d32;\n}\n.warning-box[_ngcontent-%COMP%] {\n  background-color: #fff3e0;\n  border-left: 4px solid #ff9800;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.warning-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #f57c00;\n}\n.decision-guide[_ngcontent-%COMP%], \n.comparison-table[_ngcontent-%COMP%] {\n  background-color: #f3e5f5;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.decision-guide[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.comparison-table[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #7b1fa2;\n}\n.use-cases[_ngcontent-%COMP%] {\n  background-color: #e0f2f1;\n  border-left: 4px solid #009688;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.use-cases[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #00796b;\n}\n.migration-tip[_ngcontent-%COMP%] {\n  background-color: #e0f2f1;\n  border-left: 4px solid #009688;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.migration-tip[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #00796b;\n}\n.best-practices-list[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  border-left: 4px solid #4caf50;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.best-practices-list[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #2e7d32;\n}\n.best-practices-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.performance-tips[_ngcontent-%COMP%] {\n  background-color: #f3e5f5;\n  border-left: 4px solid #9c27b0;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.performance-tips[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #7b1fa2;\n}\n/*# sourceMappingURL=learn-rxjs.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LearnRxjsComponent, { className: "LearnRxjsComponent", filePath: "src\\app\\components\\angular\\learn-rxjs\\learn-rxjs.component.ts", lineNumber: 13 });
})();
export {
  LearnRxjsComponent
};
//# sourceMappingURL=chunk-PGBAVCPV.js.map
