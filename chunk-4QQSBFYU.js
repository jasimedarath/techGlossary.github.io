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

// src/app/components/angular/learn-unittesting/learn-unittesting.component.ts
var Prism = __toESM(require_prism());
function LearnUnittestingComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3");
    \u0275\u0275text(2, "Angular Testing Fundamentals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Angular uses TestBed to create and configure testing modules. TestBed is the primary API for writing unit tests in Angular applications, providing utilities to configure and initialize the environment for unit testing. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Core Testing Concepts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "TestBed:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Main Angular testing utility for configuring and creating test modules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "ComponentFixture:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Wrapper for component instance and its template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "DebugElement:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Abstraction for testing across different platforms");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "detectChanges():");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Trigger Angular's change detection manually");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "h4");
    \u0275\u0275text(25, "Testing Framework Stack");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ul")(27, "li");
    \u0275\u0275text(28, "\u{1F9EA} ");
    \u0275\u0275elementStart(29, "strong");
    \u0275\u0275text(30, "Jasmine:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " BDD testing framework with describe/it syntax");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "li");
    \u0275\u0275text(33, "\u{1F680} ");
    \u0275\u0275elementStart(34, "strong");
    \u0275\u0275text(35, "Karma:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " Test runner that executes tests in browsers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "li");
    \u0275\u0275text(38, "\u{1F4CA} ");
    \u0275\u0275elementStart(39, "strong");
    \u0275\u0275text(40, "Coverage:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, " Istanbul for code coverage reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "li");
    \u0275\u0275text(43, "\u{1F3AF} ");
    \u0275\u0275elementStart(44, "strong");
    \u0275\u0275text(45, "Assertions:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, " expect() with matchers like toBe(), toEqual()");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "pre")(48, "code", 11);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 12)(51, "h4");
    \u0275\u0275text(52, "\u{1F4A1} TestBed Configuration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "p");
    \u0275\u0275text(54, " Always call ");
    \u0275\u0275elementStart(55, "code");
    \u0275\u0275text(56, "TestBed.configureTestingModule()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57, " in ");
    \u0275\u0275elementStart(58, "code");
    \u0275\u0275text(59, "beforeEach()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, " to ensure each test runs in a clean environment. Use ");
    \u0275\u0275elementStart(61, "code");
    \u0275\u0275text(62, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, " for component compilation with external templates. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 13)(65, "h4");
    \u0275\u0275text(66, "\u{1F3AF} Quick Tips");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "ul")(68, "li");
    \u0275\u0275text(69, "Use ");
    \u0275\u0275elementStart(70, "code");
    \u0275\u0275text(71, "fixture.detectChanges()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(72, " to trigger change detection and update the view");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "li");
    \u0275\u0275text(74, "Import standalone components directly in the imports array");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "li");
    \u0275\u0275text(76, "Access the component instance via ");
    \u0275\u0275elementStart(77, "code");
    \u0275\u0275text(78, "fixture.componentInstance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "li");
    \u0275\u0275text(80, "Use ");
    \u0275\u0275elementStart(81, "code");
    \u0275\u0275text(82, "fixture.nativeElement");
    \u0275\u0275elementEnd();
    \u0275\u0275text(83, " for DOM queries");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(49);
    \u0275\u0275textInterpolate(ctx_r0.testBedBasics);
  }
}
function LearnUnittestingComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3");
    \u0275\u0275text(2, "Testing Angular Components");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Component testing verifies that components behave correctly in isolation, including their templates, bindings, event handlers, and interactions with child components. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "What to Test in Components");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "Property Bindings:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Verify data is correctly displayed in templates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "Event Handlers:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Test user interactions and event emissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "@Input/@Output:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Validate @Input properties and @Output events");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "Lifecycle Hooks:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Ensure ngOnInit, ngOnChanges work correctly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li")(25, "strong");
    \u0275\u0275text(26, "Conditional Rendering:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Test *ngIf, *ngFor directives");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "li")(29, "strong");
    \u0275\u0275text(30, "CSS Classes:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Verify dynamic class bindings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "h4");
    \u0275\u0275text(33, "ComponentFixture API");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "ul")(35, "li")(36, "code");
    \u0275\u0275text(37, "componentInstance:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " Access the component class instance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "li")(40, "code");
    \u0275\u0275text(41, "nativeElement:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, " Get the native DOM element");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "li")(44, "code");
    \u0275\u0275text(45, "debugElement:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, " Platform-independent element abstraction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "li")(48, "code");
    \u0275\u0275text(49, "detectChanges():");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, " Manually trigger change detection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "li")(52, "code");
    \u0275\u0275text(53, "whenStable():");
    \u0275\u0275elementEnd();
    \u0275\u0275text(54, " Wait for async operations to complete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "pre")(56, "code", 11);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 12)(59, "h4");
    \u0275\u0275text(60, "\u{1F4A1} Change Detection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "p");
    \u0275\u0275text(62, " Always call ");
    \u0275\u0275elementStart(63, "code");
    \u0275\u0275text(64, "fixture.detectChanges()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(65, " after modifying component properties to update the view. Angular doesn't automatically run change detection in tests unless configured with automatic detection. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 13)(67, "h4");
    \u0275\u0275text(68, "\u{1F3AF} Testing Best Practices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "ul")(70, "li");
    \u0275\u0275text(71, "Test user-facing behavior, not implementation details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "li");
    \u0275\u0275text(73, "Use ");
    \u0275\u0275elementStart(74, "code");
    \u0275\u0275text(75, "By.css()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(76, " for more reliable DOM queries");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "li");
    \u0275\u0275text(78, "Test error states and edge cases");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "li");
    \u0275\u0275text(80, "Verify accessibility attributes and ARIA labels");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(57);
    \u0275\u0275textInterpolate(ctx_r0.componentTesting);
  }
}
function LearnUnittestingComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3");
    \u0275\u0275text(2, "Testing Angular Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Service testing focuses on business logic, data manipulation, and API communication. Services are typically easier to test than components since they don't involve the DOM. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Testing Services with HTTP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "HttpClientTestingModule:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Mock HTTP requests without real API calls");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "HttpTestingController:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Control and verify HTTP requests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "expectOne():");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Assert a single matching request was made");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "flush():");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Simulate server response with mock data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li")(25, "strong");
    \u0275\u0275text(26, "verify():");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Ensure no outstanding HTTP requests remain");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "h4");
    \u0275\u0275text(29, "Common Service Testing Patterns");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ul")(31, "li");
    \u0275\u0275text(32, "\u2705 Test successful API calls with expected data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "li");
    \u0275\u0275text(34, "\u274C Test error handling and HTTP error responses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "li");
    \u0275\u0275text(36, "\u{1F504} Test retry logic and timeout behavior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "li");
    \u0275\u0275text(38, "\u{1F4BE} Test caching mechanisms and data persistence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "li");
    \u0275\u0275text(40, "\u{1F510} Test authentication token handling");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "pre")(42, "code", 11);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 12)(45, "h4");
    \u0275\u0275text(46, "\u{1F4A1} HTTP Testing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p");
    \u0275\u0275text(48, " Always call ");
    \u0275\u0275elementStart(49, "code");
    \u0275\u0275text(50, "httpMock.verify()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, " in ");
    \u0275\u0275elementStart(52, "code");
    \u0275\u0275text(53, "afterEach()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(54, " to ensure all expected HTTP requests were made and no unexpected requests occurred during the test. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 14)(56, "h4");
    \u0275\u0275text(57, "\u26A0\uFE0F Common Pitfalls");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "ul")(59, "li");
    \u0275\u0275text(60, "Forgetting to call ");
    \u0275\u0275elementStart(61, "code");
    \u0275\u0275text(62, "req.flush()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, " - tests will hang");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "li");
    \u0275\u0275text(65, "Not verifying HTTP method (GET, POST, etc.)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "li");
    \u0275\u0275text(67, "Forgetting to test error scenarios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "li");
    \u0275\u0275text(69, "Not cleaning up with ");
    \u0275\u0275elementStart(70, "code");
    \u0275\u0275text(71, "httpMock.verify()");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(43);
    \u0275\u0275textInterpolate(ctx_r0.serviceTesting);
  }
}
function LearnUnittestingComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3");
    \u0275\u0275text(2, "Testing Asynchronous Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Angular provides utilities for testing asynchronous operations like Promises, Observables, setTimeout, and setInterval in a controlled, synchronous manner. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Async Testing Utilities");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "fakeAsync:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Run test in fake async zone, control time with tick()");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "tick(ms):");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Simulate passage of time in milliseconds");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "flush():");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Flush all pending timers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "waitForAsync:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Wait for all async operations to complete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li")(25, "strong");
    \u0275\u0275text(26, "whenStable():");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Promise that resolves when async tasks finish");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "h4");
    \u0275\u0275text(29, "When to Use Each Utility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ul")(31, "li")(32, "strong");
    \u0275\u0275text(33, "fakeAsync/tick:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " Testing setTimeout, setInterval, debounce");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "li")(36, "strong");
    \u0275\u0275text(37, "waitForAsync:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " Testing Promises and async/await");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "li")(40, "strong");
    \u0275\u0275text(41, "done callback:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, " Testing observables and complex async flows");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "li")(44, "strong");
    \u0275\u0275text(45, "jasmine.clock():");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, " Alternative for timer control");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "pre")(48, "code", 11);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 12)(51, "h4");
    \u0275\u0275text(52, "\u{1F4A1} FakeAsync Zone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "p")(54, "code");
    \u0275\u0275text(55, "fakeAsync");
    \u0275\u0275elementEnd();
    \u0275\u0275text(56, " creates a special zone where time is under your control. Use ");
    \u0275\u0275elementStart(57, "code");
    \u0275\u0275text(58, "tick()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(59, " to advance time precisely, making tests deterministic and fast. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 14)(61, "h4");
    \u0275\u0275text(62, "\u26A0\uFE0F FakeAsync Limitations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "ul")(64, "li");
    \u0275\u0275text(65, "Cannot use real HTTP requests (XHR/fetch)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "li");
    \u0275\u0275text(67, "Cannot test actual browser APIs like WebSocket");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "li");
    \u0275\u0275text(69, "Must flush all timers before test ends");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "li");
    \u0275\u0275text(71, "Nested fakeAsync zones are not supported");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(49);
    \u0275\u0275textInterpolate(ctx_r0.asyncTesting);
  }
}
function LearnUnittestingComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3");
    \u0275\u0275text(2, "Testing Angular Signals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Angular Signals introduced in v16 provide fine-grained reactivity. Testing signals is straightforward since they are synchronous and their values can be read directly using the call syntax. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Signal Testing Fundamentals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "Reading Signals:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Call the signal as a function: ");
    \u0275\u0275elementStart(12, "code");
    \u0275\u0275text(13, "count()");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "li")(15, "strong");
    \u0275\u0275text(16, "Writing Signals:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Use ");
    \u0275\u0275elementStart(18, "code");
    \u0275\u0275text(19, "set()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " or ");
    \u0275\u0275elementStart(21, "code");
    \u0275\u0275text(22, "update()");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "li")(24, "strong");
    \u0275\u0275text(25, "Computed Signals:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " Automatically update when dependencies change");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "li")(28, "strong");
    \u0275\u0275text(29, "Effects:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " Run side effects when signals change (async)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "h4");
    \u0275\u0275text(32, "Testing Patterns");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "ul")(34, "li");
    \u0275\u0275text(35, "\u2705 Test signal value updates with set() and update()");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "li");
    \u0275\u0275text(37, "\u{1F504} Test computed signal recalculation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "li");
    \u0275\u0275text(39, "\u{1F441}\uFE0F Test signal changes reflected in template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "li");
    \u0275\u0275text(41, "\u26A1 Test effects execution and cleanup");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "li");
    \u0275\u0275text(43, "\u{1F517} Test signal dependency chains");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "pre")(45, "code", 11);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 12)(48, "h4");
    \u0275\u0275text(49, "\u{1F4A1} Signals are Synchronous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "p");
    \u0275\u0275text(51, " Unlike RxJS observables, signal updates are synchronous. Changes are immediately reflected when you read the signal. Only effects run asynchronously in microtasks. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 13)(53, "h4");
    \u0275\u0275text(54, "\u{1F3AF} Testing Tips");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "ul")(56, "li");
    \u0275\u0275text(57, "No need for async utilities when testing basic signal updates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "li");
    \u0275\u0275text(59, "Use ");
    \u0275\u0275elementStart(60, "code");
    \u0275\u0275text(61, "TestBed.runInInjectionContext()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(62, " for testing effects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "li");
    \u0275\u0275text(64, "Computed signals update immediately when dependencies change");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "li");
    \u0275\u0275text(66, "Test signal updates trigger change detection in components");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(46);
    \u0275\u0275textInterpolate(ctx_r0.signalTesting);
  }
}
function LearnUnittestingComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3");
    \u0275\u0275text(2, "Mocking and Spying");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Mocking dependencies isolates the unit under test by replacing real dependencies with controlled test doubles. This ensures tests are fast, reliable, and independent of external systems. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Mocking Strategies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "Spy Objects:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Use ");
    \u0275\u0275elementStart(12, "code");
    \u0275\u0275text(13, "jasmine.createSpyObj()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " for full mock objects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li")(16, "strong");
    \u0275\u0275text(17, "Spy On Methods:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Use ");
    \u0275\u0275elementStart(19, "code");
    \u0275\u0275text(20, "spyOn()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " to mock specific methods");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "li")(23, "strong");
    \u0275\u0275text(24, "Mock Classes:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " Create custom mock classes with test data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "li")(27, "strong");
    \u0275\u0275text(28, "Stub Values:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " Provide simple objects with useValue");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "h4");
    \u0275\u0275text(31, "Jasmine Spy Methods");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "ul")(33, "li")(34, "code");
    \u0275\u0275text(35, "and.returnValue(value):");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " Return a specific value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "li")(38, "code");
    \u0275\u0275text(39, "and.callThrough():");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " Call the actual implementation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "li")(42, "code");
    \u0275\u0275text(43, "and.callFake(fn):");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " Call a fake implementation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "li")(46, "code");
    \u0275\u0275text(47, "and.throwError(error):");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, " Throw an error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "li")(50, "code");
    \u0275\u0275text(51, "and.stub():");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, " Do nothing (default)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "h4");
    \u0275\u0275text(54, "Spy Assertions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "ul")(56, "li")(57, "code");
    \u0275\u0275text(58, "toHaveBeenCalled():");
    \u0275\u0275elementEnd();
    \u0275\u0275text(59, " Verify method was called");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "li")(61, "code");
    \u0275\u0275text(62, "toHaveBeenCalledWith(args):");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, " Verify with specific arguments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "li")(65, "code");
    \u0275\u0275text(66, "toHaveBeenCalledTimes(n):");
    \u0275\u0275elementEnd();
    \u0275\u0275text(67, " Verify call count");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "li")(69, "code");
    \u0275\u0275text(70, "calls.count():");
    \u0275\u0275elementEnd();
    \u0275\u0275text(71, " Get number of calls");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "li")(73, "code");
    \u0275\u0275text(74, "calls.argsFor(index):");
    \u0275\u0275elementEnd();
    \u0275\u0275text(75, " Get arguments for specific call");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "pre")(77, "code", 11);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 12)(80, "h4");
    \u0275\u0275text(81, "\u{1F4A1} Spy Objects vs Mock Classes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "p");
    \u0275\u0275text(83, " Use ");
    \u0275\u0275elementStart(84, "code");
    \u0275\u0275text(85, "jasmine.createSpyObj()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(86, " for simple mocks. Create custom mock classes when you need more complex behavior, shared test data, or reusable mocks across tests. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 13)(88, "h4");
    \u0275\u0275text(89, "\u{1F3AF} Best Practices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "ul")(91, "li");
    \u0275\u0275text(92, "Mock all external dependencies (services, HTTP, storage)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "li");
    \u0275\u0275text(94, "Use descriptive spy names matching the real service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "li");
    \u0275\u0275text(96, "Configure default return values in beforeEach");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "li");
    \u0275\u0275text(98, "Test both success and error scenarios");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(78);
    \u0275\u0275textInterpolate(ctx_r0.mockingDependencies);
  }
}
function LearnUnittestingComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3");
    \u0275\u0275text(2, "Code Coverage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Code coverage measures which parts of your code are executed during tests. Angular CLI integrates Istanbul coverage tool to generate detailed coverage reports and enforce coverage thresholds. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Coverage Metrics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "Statements:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Percentage of executable statements covered");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "Branches:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Percentage of if/else branches covered");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "Functions:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Percentage of functions called");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "Lines:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Percentage of code lines executed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "h4");
    \u0275\u0275text(25, "Running Coverage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ul")(27, "li")(28, "code");
    \u0275\u0275text(29, "ng test --code-coverage");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " - Run tests with coverage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "li")(32, "code");
    \u0275\u0275text(33, "ng test --no-watch --code-coverage");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " - Single run with coverage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "li");
    \u0275\u0275text(36, "Coverage reports generated in ");
    \u0275\u0275elementStart(37, "code");
    \u0275\u0275text(38, "coverage/");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, " directory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "li");
    \u0275\u0275text(41, "Open ");
    \u0275\u0275elementStart(42, "code");
    \u0275\u0275text(43, "coverage/index.html");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " for detailed HTML report");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "h4");
    \u0275\u0275text(46, "Coverage Best Practices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "ul")(48, "li");
    \u0275\u0275text(49, "\u{1F3AF} Aim for 80%+ coverage for critical business logic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "li");
    \u0275\u0275text(51, "\u{1F6AB} Exclude generated code and test files from coverage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "li");
    \u0275\u0275text(53, "\u26A0\uFE0F 100% coverage doesn't guarantee bug-free code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "li");
    \u0275\u0275text(55, "\u{1F50D} Focus on meaningful tests, not just coverage numbers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "li");
    \u0275\u0275text(57, "\u{1F4CA} Use coverage to identify untested code paths");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "pre")(59, "code", 11);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 12)(62, "h4");
    \u0275\u0275text(63, "\u{1F4A1} Coverage Thresholds");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "p");
    \u0275\u0275text(65, " Set minimum coverage thresholds in karma.conf.js to fail builds if coverage drops below acceptable levels. This ensures code quality standards are maintained as the codebase grows. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 14)(67, "h4");
    \u0275\u0275text(68, "\u26A0\uFE0F Coverage Limitations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "ul")(70, "li");
    \u0275\u0275text(71, "High coverage doesn't mean good test quality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "li");
    \u0275\u0275text(73, "Can't measure if tests check the right things");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "li");
    \u0275\u0275text(75, "Doesn't test integration between components");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "li");
    \u0275\u0275text(77, "May encourage testing implementation over behavior");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(78, "div", 13)(79, "h4");
    \u0275\u0275text(80, "\u{1F3AF} Improving Coverage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "ul")(82, "li");
    \u0275\u0275text(83, "Identify red/uncovered lines in HTML report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "li");
    \u0275\u0275text(85, "Add tests for error handling and edge cases");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "li");
    \u0275\u0275text(87, "Test all conditional branches (if/else)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "li");
    \u0275\u0275text(89, "Don't ignore coverage, but don't obsess over 100%");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(60);
    \u0275\u0275textInterpolate(ctx_r0.testCoverage);
  }
}
function LearnUnittestingComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3");
    \u0275\u0275text(2, "Testing Best Practices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Following established testing best practices ensures your test suite is maintainable, reliable, and provides value to the development process. Good tests are fast, independent, and focused. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Golden Rules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "AAA Pattern:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Arrange (setup) \u2192 Act (execute) \u2192 Assert (verify)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "Test One Thing:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Each test should verify a single behavior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "Descriptive Names:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Test names should explain what is being tested");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "Independent Tests:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Tests should not depend on each other");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li")(25, "strong");
    \u0275\u0275text(26, "Fast Execution:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Keep tests fast by avoiding real HTTP/DB calls");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "h4");
    \u0275\u0275text(29, "What Makes Good Tests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ul")(31, "li");
    \u0275\u0275text(32, "\u{1F3AF} ");
    \u0275\u0275elementStart(33, "strong");
    \u0275\u0275text(34, "Focused:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Test one behavior per test");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "li");
    \u0275\u0275text(37, "\u{1F504} ");
    \u0275\u0275elementStart(38, "strong");
    \u0275\u0275text(39, "Repeatable:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " Same results every time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "li");
    \u0275\u0275text(42, "\u26A1 ");
    \u0275\u0275elementStart(43, "strong");
    \u0275\u0275text(44, "Fast:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, " Run quickly to enable frequent testing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "li");
    \u0275\u0275text(47, "\u{1F512} ");
    \u0275\u0275elementStart(48, "strong");
    \u0275\u0275text(49, "Independent:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, " Can run in any order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "li");
    \u0275\u0275text(52, "\u{1F4D6} ");
    \u0275\u0275elementStart(53, "strong");
    \u0275\u0275text(54, "Readable:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, " Clear and easy to understand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "li");
    \u0275\u0275text(57, "\u{1F6E1}\uFE0F ");
    \u0275\u0275elementStart(58, "strong");
    \u0275\u0275text(59, "Reliable:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, " No flaky or random failures");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "h4");
    \u0275\u0275text(62, "Common Anti-Patterns to Avoid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "ul")(64, "li");
    \u0275\u0275text(65, "\u274C Testing implementation details instead of behavior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "li");
    \u0275\u0275text(67, "\u274C Tests that depend on other tests' state");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "li");
    \u0275\u0275text(69, "\u274C Overly complex test logic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "li");
    \u0275\u0275text(71, "\u274C Insufficient test coverage of edge cases");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "li");
    \u0275\u0275text(73, "\u274C Using real external dependencies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "li");
    \u0275\u0275text(75, "\u274C Vague or generic test names");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "pre")(77, "code", 11);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 15)(80, "h4");
    \u0275\u0275text(81, "\u2705 Testing Checklist");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "ul")(83, "li")(84, "strong");
    \u0275\u0275text(85, "Happy Path:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(86, " Test expected, successful scenarios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "li")(88, "strong");
    \u0275\u0275text(89, "Error Cases:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(90, " Test error handling and validation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "li")(92, "strong");
    \u0275\u0275text(93, "Edge Cases:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(94, " Test boundary conditions (empty, null, max)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "li")(96, "strong");
    \u0275\u0275text(97, "User Interactions:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(98, " Test clicks, inputs, navigation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "li")(100, "strong");
    \u0275\u0275text(101, "State Changes:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(102, " Test component state transitions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "li")(104, "strong");
    \u0275\u0275text(105, "Side Effects:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(106, " Test API calls, events, storage");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(107, "div", 13)(108, "h4");
    \u0275\u0275text(109, "\u{1F3AF} Test Organization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "ul")(111, "li");
    \u0275\u0275text(112, "Group related tests with nested ");
    \u0275\u0275elementStart(113, "code");
    \u0275\u0275text(114, "describe()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(115, " blocks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "li");
    \u0275\u0275text(117, "Use ");
    \u0275\u0275elementStart(118, "code");
    \u0275\u0275text(119, "beforeEach()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(120, " for common setup");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "li");
    \u0275\u0275text(122, "Keep test files next to source files (*.spec.ts)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "li");
    \u0275\u0275text(124, "Use helper functions for repeated test setup");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "li");
    \u0275\u0275text(126, "Write tests as you write code (TDD)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(127, "div", 14)(128, "h4");
    \u0275\u0275text(129, "\u26A0\uFE0F When Not to Test");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "ul")(131, "li");
    \u0275\u0275text(132, "Third-party libraries (assume they're tested)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "li");
    \u0275\u0275text(134, "Generated code or boilerplate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "li");
    \u0275\u0275text(136, "Trivial getters/setters without logic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "li");
    \u0275\u0275text(138, "Framework internals (trust Angular)");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(78);
    \u0275\u0275textInterpolate(ctx_r0.bestPractices);
  }
}
var LearnUnittestingComponent = class _LearnUnittestingComponent {
  constructor() {
    this.testBedBasics = `import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  // Setup before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent] // For standalone components
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Trigger change detection
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent)
      .toContain('Welcome my-app');
  });
});`;
    this.componentTesting = `import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfileComponent } from './user-profile.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should display user name', () => {
    component.user = { name: 'John Doe', email: 'john@example.com' };
    fixture.detectChanges(); // Update view
    
    const nameElement = compiled.querySelector('.user-name');
    expect(nameElement?.textContent).toBe('John Doe');
  });

  it('should call onSave when button clicked', () => {
    spyOn(component, 'onSave');
    
    const button = compiled.querySelector('button.save-btn') as HTMLButtonElement;
    button.click();
    
    expect(component.onSave).toHaveBeenCalled();
  });

  it('should emit event on delete', () => {
    let emittedValue: any;
    component.userDeleted.subscribe((value: any) => emittedValue = value);
    
    component.deleteUser();
    
    expect(emittedValue).toBe(component.user.id);
  });

  it('should have correct CSS class when active', () => {
    component.isActive = true;
    fixture.detectChanges();
    
    const element: DebugElement = fixture.debugElement.query(By.css('.profile'));
    expect(element.nativeElement.classList.contains('active')).toBeTruthy();
  });
});`;
    this.serviceTesting = `import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verify no outstanding HTTP requests
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch users', () => {
    const mockUsers = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' }
    ];

    service.getUsers().subscribe(users => {
      expect(users.length).toBe(2);
      expect(users).toEqual(mockUsers);
    });

    const req = httpMock.expectOne('api/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers); // Respond with mock data
  });

  it('should handle errors', () => {
    service.getUsers().subscribe({
      next: () => fail('should have failed'),
      error: (error) => {
        expect(error.status).toBe(404);
      }
    });

    const req = httpMock.expectOne('api/users');
    req.flush('Not found', { status: 404, statusText: 'Not Found' });
  });

  it('should cache results', () => {
    service.getUsersCached().subscribe();
    service.getUsersCached().subscribe();
    
    // Should only make one HTTP request due to caching
    const requests = httpMock.match('api/users');
    expect(requests.length).toBe(1);
  });
});`;
    this.asyncTesting = `import { ComponentFixture, TestBed, fakeAsync, tick, flush, waitForAsync } from '@angular/core/testing';
import { DataComponent } from './data.component';

describe('Async Testing', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
  });

  // Testing Promises with waitForAsync
  it('should load data with async/await', waitForAsync(() => {
    component.loadData();
    
    fixture.whenStable().then(() => {
      expect(component.data).toBeTruthy();
      expect(component.loading).toBeFalsy();
    });
  }));

  // Testing with fakeAsync and tick
  it('should debounce search', fakeAsync(() => {
    spyOn(component, 'performSearch');
    
    component.search('test');
    tick(250); // Wait 250ms
    expect(component.performSearch).not.toHaveBeenCalled();
    
    tick(250); // Wait another 250ms (total 500ms)
    expect(component.performSearch).toHaveBeenCalledWith('test');
  }));

  // Testing setTimeout
  it('should show message after delay', fakeAsync(() => {
    component.showDelayedMessage();
    expect(component.message).toBe('');
    
    tick(2000); // Advance time by 2 seconds
    expect(component.message).toBe('Hello after 2 seconds!');
  }));

  // Testing setInterval
  it('should update counter every second', fakeAsync(() => {
    component.startCounter();
    expect(component.counter).toBe(0);
    
    tick(1000);
    expect(component.counter).toBe(1);
    
    tick(3000);
    expect(component.counter).toBe(4);
    
    component.stopCounter();
    flush(); // Clear any pending timers
  }));

  // Testing Observables
  it('should handle observable data', fakeAsync(() => {
    let result: any;
    component.getData$().subscribe(data => result = data);
    
    tick(1000);
    expect(result).toEqual({ id: 1, name: 'Test' });
  }));

  // Testing async pipe
  it('should display async data in template', fakeAsync(() => {
    fixture.detectChanges();
    tick(1000);
    fixture.detectChanges();
    
    const element = fixture.nativeElement.querySelector('.async-data');
    expect(element.textContent).toContain('Loaded Data');
  }));
});`;
    this.signalTesting = `import { TestBed } from '@angular/core/testing';
import { signal, computed, effect } from '@angular/core';
import { CounterComponent } from './counter.component';

describe('Testing with Signals', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should update signal value', () => {
    expect(component.count()).toBe(0);
    
    component.increment();
    expect(component.count()).toBe(1);
    
    component.count.set(10);
    expect(component.count()).toBe(10);
  });

  it('should test computed signals', () => {
    component.firstName.set('John');
    component.lastName.set('Doe');
    
    // Computed signal automatically updates
    expect(component.fullName()).toBe('John Doe');
    
    component.firstName.set('Jane');
    expect(component.fullName()).toBe('Jane Doe');
  });

  it('should test effects', (done) => {
    let effectRan = false;
    
    TestBed.runInInjectionContext(() => {
      const count = signal(0);
      
      effect(() => {
        const value = count();
        if (value === 5) {
          effectRan = true;
        }
      });
      
      count.set(5);
      
      // Effects run asynchronously
      setTimeout(() => {
        expect(effectRan).toBeTruthy();
        done();
      }, 0);
    });
  });

  it('should test signal updates in template', () => {
    const compiled = fixture.nativeElement;
    
    expect(compiled.querySelector('.count')?.textContent).toBe('0');
    
    component.count.set(42);
    fixture.detectChanges();
    
    expect(compiled.querySelector('.count')?.textContent).toBe('42');
  });

  it('should test signal array mutations', () => {
    component.items.set([1, 2, 3]);
    expect(component.items()).toEqual([1, 2, 3]);
    
    component.items.update(items => [...items, 4]);
    expect(component.items()).toEqual([1, 2, 3, 4]);
    
    expect(component.itemCount()).toBe(4); // Computed signal
  });

  it('should test conditional computed signals', () => {
    component.isEnabled.set(false);
    expect(component.displayValue()).toBe('Disabled');
    
    component.isEnabled.set(true);
    component.value.set(100);
    expect(component.displayValue()).toBe('Value: 100');
  });
});`;
    this.mockingDependencies = `import { TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { LoggerService } from './logger.service';
import { of, throwError } from 'rxjs';

describe('Mocking Dependencies', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let mockUserService: jasmine.SpyObj<UserService>;
  let mockLogger: jasmine.SpyObj<LoggerService>;

  beforeEach(async () => {
    // Create spy objects
    mockUserService = jasmine.createSpyObj('UserService', 
      ['getUsers', 'deleteUser', 'updateUser']
    );
    mockLogger = jasmine.createSpyObj('LoggerService', ['log', 'error']);

    // Configure default return values
    mockUserService.getUsers.and.returnValue(of([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' }
    ]));

    await TestBed.configureTestingModule({
      imports: [UserComponent],
      providers: [
        { provide: UserService, useValue: mockUserService },
        { provide: LoggerService, useValue: mockLogger }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
  });

  it('should load users on init', () => {
    fixture.detectChanges(); // Triggers ngOnInit
    
    expect(mockUserService.getUsers).toHaveBeenCalled();
    expect(component.users.length).toBe(2);
  });

  it('should handle service errors', () => {
    mockUserService.getUsers.and.returnValue(
      throwError(() => new Error('API Error'))
    );
    
    fixture.detectChanges();
    
    expect(component.error).toBeTruthy();
    expect(mockLogger.error).toHaveBeenCalledWith(
      jasmine.stringContaining('API Error')
    );
  });

  it('should delete user and refresh list', () => {
    mockUserService.deleteUser.and.returnValue(of(void 0));
    fixture.detectChanges();
    
    component.deleteUser(1);
    
    expect(mockUserService.deleteUser).toHaveBeenCalledWith(1);
    expect(mockUserService.getUsers).toHaveBeenCalledTimes(2); // Init + refresh
  });

  it('should track spy calls and arguments', () => {
    fixture.detectChanges();
    
    component.updateUser(1, { name: 'Updated Name' });
    
    expect(mockUserService.updateUser).toHaveBeenCalledWith(
      1,
      jasmine.objectContaining({ name: 'Updated Name' })
    );
    expect(mockUserService.updateUser).toHaveBeenCalledTimes(1);
  });
});

// Custom Mock Class Approach
class MockUserService {
  getUsers() {
    return of([{ id: 1, name: 'Mock User' }]);
  }
  
  deleteUser(id: number) {
    return of(void 0);
  }
}`;
    this.testCoverage = `// karma.conf.js - Coverage Configuration
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-coverage')
    ],
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' },
        { type: 'lcovonly' }
      ],
      check: {
        global: {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80
        }
      }
    },
    browsers: ['Chrome'],
    singleRun: true
  });
};

// Running tests with coverage
// ng test --code-coverage
// ng test --no-watch --code-coverage

// Example test coverage report output:
/*
=============================== Coverage summary ===============================
Statements   : 85.5% ( 342/400 )
Branches     : 78.3% ( 94/120 )
Functions    : 82.1% ( 78/95 )
Lines        : 85.9% ( 318/370 )
================================================================================
*/

// angular.json - Coverage configuration
{
  "test": {
    "builder": "@angular-devkit/build-angular:karma",
    "options": {
      "codeCoverage": true,
      "codeCoverageExclude": [
        "src/**/*.spec.ts",
        "src/test.ts",
        "src/environments/**"
      ]
    }
  }
}

// Ignoring code from coverage
export class MyService {
  // istanbul ignore next
  debugMethod() {
    console.log('Debug info');
  }
  
  /* istanbul ignore if */
  if (environment.production) {
    // Production only code
  }
}

// Coverage thresholds in package.json
{
  "scripts": {
    "test:coverage": "ng test --no-watch --code-coverage",
    "test:coverage:check": "ng test --no-watch --code-coverage --watch=false"
  }
}`;
    this.bestPractices = `// ===== UNIT TESTING BEST PRACTICES =====

// 1. AAA Pattern: Arrange, Act, Assert
it('should calculate total price', () => {
  // Arrange - Setup
  const cart = new ShoppingCart();
  cart.addItem({ name: 'Item 1', price: 10 });
  cart.addItem({ name: 'Item 2', price: 20 });
  
  // Act - Execute
  const total = cart.getTotal();
  
  // Assert - Verify
  expect(total).toBe(30);
});

// 2. Test One Thing at a Time
// \u274C Bad - Testing multiple things
it('should process user correctly', () => {
  expect(component.isValid()).toBeTruthy();
  expect(component.hasErrors()).toBeFalsy();
  expect(component.user.name).toBe('John');
  expect(component.user.email).toBe('john@example.com');
});

// \u2705 Good - Separate focused tests
it('should validate user input', () => {
  expect(component.isValid()).toBeTruthy();
});

it('should set user details correctly', () => {
  expect(component.user.name).toBe('John');
  expect(component.user.email).toBe('john@example.com');
});

// 3. Use Descriptive Test Names
// \u274C Bad
it('test 1', () => {});
it('works', () => {});

// \u2705 Good
it('should display error message when form is invalid', () => {});
it('should emit save event when save button is clicked', () => {});
it('should filter users by active status', () => {});

// 4. Don't Test Implementation Details
// \u274C Bad - Testing private methods
it('should call private method', () => {
  spyOn(component as any, 'privateMethod');
  component.publicMethod();
  expect((component as any).privateMethod).toHaveBeenCalled();
});

// \u2705 Good - Test public behavior
it('should update display when value changes', () => {
  component.updateValue(42);
  expect(component.displayValue).toBe('Value: 42');
});

// 5. Keep Tests Independent
// \u274C Bad - Tests depend on each other
describe('UserService', () => {
  let userId: number;
  
  it('should create user', () => {
    userId = service.createUser({ name: 'John' });
    expect(userId).toBeTruthy();
  });
  
  it('should get user', () => {
    const user = service.getUser(userId); // Depends on previous test!
    expect(user.name).toBe('John');
  });
});

// \u2705 Good - Independent tests
describe('UserService', () => {
  let testUserId: number;
  
  beforeEach(() => {
    testUserId = service.createUser({ name: 'Test User' });
  });
  
  it('should get user by id', () => {
    const user = service.getUser(testUserId);
    expect(user).toBeTruthy();
  });
});

// 6. Use beforeEach for Common Setup
beforeEach(() => {
  component.user = { id: 1, name: 'Test' };
  component.isLoading = false;
  fixture.detectChanges();
});

// 7. Clean Up After Tests
afterEach(() => {
  fixture.destroy();
  // Clear subscriptions, timers, etc.
});

// 8. Test Edge Cases and Error Conditions
it('should handle empty array', () => {
  component.items = [];
  expect(component.getTotal()).toBe(0);
});

it('should handle null values', () => {
  component.user = null;
  expect(() => component.getDisplayName()).not.toThrow();
});

it('should handle network errors gracefully', () => {
  mockService.getData.and.returnValue(throwError(() => new Error('Network error')));
  component.loadData();
  expect(component.errorMessage).toBeTruthy();
});

// 9. Avoid Logic in Tests
// \u274C Bad
it('should calculate correctly', () => {
  const result = component.calculate(5, 3);
  const expected = 5 + 3; // Don't recalculate in test!
  expect(result).toBe(expected);
});

// \u2705 Good
it('should add two numbers', () => {
  expect(component.calculate(5, 3)).toBe(8);
});

// 10. Use Test Utilities and Helpers
function createMockUser(overrides = {}): User {
  return {
    id: 1,
    name: 'Test User',
    email: 'test@example.com',
    ...overrides
  };
}

it('should display user name', () => {
  const user = createMockUser({ name: 'John' });
  component.user = user;
  expect(component.displayName).toBe('John');
});`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function LearnUnittestingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LearnUnittestingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LearnUnittestingComponent, selectors: [["app-learn-unittesting"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 0, consts: [[1, "header"], ["label", "TestBed Basics"], ["matTabContent", ""], ["label", "Component Testing"], ["label", "Service Testing"], ["label", "Async Testing"], ["label", "Testing Signals"], ["label", "Mocking Dependencies"], ["label", "Test Coverage"], ["label", "Best Practices"], [1, "tab-content"], [1, "language-typescript"], [1, "info-box"], [1, "tip-box"], [1, "warning-box"], [1, "best-practices"]], template: function LearnUnittestingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1, "Unit Testing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "label");
        \u0275\u0275text(3, "Unit Testing in Angular ensures code quality and reliability through comprehensive test coverage using Jasmine and Karma frameworks.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "mat-tab-group")(5, "mat-tab", 1);
        \u0275\u0275template(6, LearnUnittestingComponent_ng_template_6_Template, 84, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-tab", 3);
        \u0275\u0275template(8, LearnUnittestingComponent_ng_template_8_Template, 81, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "mat-tab", 4);
        \u0275\u0275template(10, LearnUnittestingComponent_ng_template_10_Template, 72, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-tab", 5);
        \u0275\u0275template(12, LearnUnittestingComponent_ng_template_12_Template, 72, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-tab", 6);
        \u0275\u0275template(14, LearnUnittestingComponent_ng_template_14_Template, 67, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-tab", 7);
        \u0275\u0275template(16, LearnUnittestingComponent_ng_template_16_Template, 99, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "mat-tab", 8);
        \u0275\u0275template(18, LearnUnittestingComponent_ng_template_18_Template, 90, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "mat-tab", 9);
        \u0275\u0275template(20, LearnUnittestingComponent_ng_template_20_Template, 139, 1, "ng-template", 2);
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [MatTabsModule, MatTabContent, MatTab, MatTabGroup], styles: ['\n\n.header[_ngcontent-%COMP%] {\n  color: #dd0031;\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.tab-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #dd0031;\n  margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n.tab-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #444;\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n}\n.tab-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  line-height: 1.8;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\n.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 15px;\n  border-radius: 5px;\n  overflow-x: auto;\n  margin: 1rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 1rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 12px;\n  text-align: left;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  font-weight: 600;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fafafa;\n}\n.info-box[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.info-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1976d2;\n}\n.tip-box[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  border-left: 4px solid #4caf50;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.tip-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #2e7d32;\n}\n.warning-box[_ngcontent-%COMP%] {\n  background-color: #fff3e0;\n  border-left: 4px solid #ff9800;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.warning-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #f57c00;\n}\n.best-practices[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  border-left: 4px solid #4caf50;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.best-practices[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #2e7d32;\n}\n.best-practices[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n/*# sourceMappingURL=learn-unittesting.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LearnUnittestingComponent, { className: "LearnUnittestingComponent", filePath: "src\\app\\components\\angular\\learn-unittesting\\learn-unittesting.component.ts", lineNumber: 13 });
})();
export {
  LearnUnittestingComponent
};
//# sourceMappingURL=chunk-4QQSBFYU.js.map
