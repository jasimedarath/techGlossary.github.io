import"./chunk-WCULWZKC.js";import{a as S}from"./chunk-VDRUEQXK.js";import{a as p,b as g,c as x,d as h}from"./chunk-GNZ74KMC.js";import"./chunk-XAZLOLJU.js";import"./chunk-SZTU5CXE.js";import{Ia as r,Ya as a,da as d,e as f,hb as n,ib as t,mb as l,ub as e,vb as s,zb as u}from"./chunk-KMNIY7WT.js";var E=f(S());function v(i,m){if(i&1&&(n(0,"div",10)(1,"h3"),e(2,"Angular Testing Fundamentals"),t(),n(3,"p"),e(4," Angular uses TestBed to create and configure testing modules. TestBed is the primary API for writing unit tests in Angular applications, providing utilities to configure and initialize the environment for unit testing. "),t(),n(5,"h4"),e(6,"Core Testing Concepts"),t(),n(7,"ul")(8,"li")(9,"strong"),e(10,"TestBed:"),t(),e(11," Main Angular testing utility for configuring and creating test modules"),t(),n(12,"li")(13,"strong"),e(14,"ComponentFixture:"),t(),e(15," Wrapper for component instance and its template"),t(),n(16,"li")(17,"strong"),e(18,"DebugElement:"),t(),e(19," Abstraction for testing across different platforms"),t(),n(20,"li")(21,"strong"),e(22,"detectChanges():"),t(),e(23," Trigger Angular's change detection manually"),t()(),n(24,"h4"),e(25,"Testing Framework Stack"),t(),n(26,"ul")(27,"li"),e(28,"\u{1F9EA} "),n(29,"strong"),e(30,"Jasmine:"),t(),e(31," BDD testing framework with describe/it syntax"),t(),n(32,"li"),e(33,"\u{1F680} "),n(34,"strong"),e(35,"Karma:"),t(),e(36," Test runner that executes tests in browsers"),t(),n(37,"li"),e(38,"\u{1F4CA} "),n(39,"strong"),e(40,"Coverage:"),t(),e(41," Istanbul for code coverage reports"),t(),n(42,"li"),e(43,"\u{1F3AF} "),n(44,"strong"),e(45,"Assertions:"),t(),e(46," expect() with matchers like toBe(), toEqual()"),t()(),n(47,"pre")(48,"code",11),e(49),t()(),n(50,"div",12)(51,"h4"),e(52,"\u{1F4A1} TestBed Configuration"),t(),n(53,"p"),e(54," Always call "),n(55,"code"),e(56,"TestBed.configureTestingModule()"),t(),e(57," in "),n(58,"code"),e(59,"beforeEach()"),t(),e(60," to ensure each test runs in a clean environment. Use "),n(61,"code"),e(62,"async"),t(),e(63," for component compilation with external templates. "),t()(),n(64,"div",13)(65,"h4"),e(66,"\u{1F3AF} Quick Tips"),t(),n(67,"ul")(68,"li"),e(69,"Use "),n(70,"code"),e(71,"fixture.detectChanges()"),t(),e(72," to trigger change detection and update the view"),t(),n(73,"li"),e(74,"Import standalone components directly in the imports array"),t(),n(75,"li"),e(76,"Access the component instance via "),n(77,"code"),e(78,"fixture.componentInstance"),t()(),n(79,"li"),e(80,"Use "),n(81,"code"),e(82,"fixture.nativeElement"),t(),e(83," for DOM queries"),t()()()()),i&2){let o=l();r(49),s(o.testBedBasics)}}function C(i,m){if(i&1&&(n(0,"div",10)(1,"h3"),e(2,"Testing Angular Components"),t(),n(3,"p"),e(4," Component testing verifies that components behave correctly in isolation, including their templates, bindings, event handlers, and interactions with child components. "),t(),n(5,"h4"),e(6,"What to Test in Components"),t(),n(7,"ul")(8,"li")(9,"strong"),e(10,"Property Bindings:"),t(),e(11," Verify data is correctly displayed in templates"),t(),n(12,"li")(13,"strong"),e(14,"Event Handlers:"),t(),e(15," Test user interactions and event emissions"),t(),n(16,"li")(17,"strong"),e(18,"@Input/@Output:"),t(),e(19," Validate @Input properties and @Output events"),t(),n(20,"li")(21,"strong"),e(22,"Lifecycle Hooks:"),t(),e(23," Ensure ngOnInit, ngOnChanges work correctly"),t(),n(24,"li")(25,"strong"),e(26,"Conditional Rendering:"),t(),e(27," Test *ngIf, *ngFor directives"),t(),n(28,"li")(29,"strong"),e(30,"CSS Classes:"),t(),e(31," Verify dynamic class bindings"),t()(),n(32,"h4"),e(33,"ComponentFixture API"),t(),n(34,"ul")(35,"li")(36,"code"),e(37,"componentInstance:"),t(),e(38," Access the component class instance"),t(),n(39,"li")(40,"code"),e(41,"nativeElement:"),t(),e(42," Get the native DOM element"),t(),n(43,"li")(44,"code"),e(45,"debugElement:"),t(),e(46," Platform-independent element abstraction"),t(),n(47,"li")(48,"code"),e(49,"detectChanges():"),t(),e(50," Manually trigger change detection"),t(),n(51,"li")(52,"code"),e(53,"whenStable():"),t(),e(54," Wait for async operations to complete"),t()(),n(55,"pre")(56,"code",11),e(57),t()(),n(58,"div",12)(59,"h4"),e(60,"\u{1F4A1} Change Detection"),t(),n(61,"p"),e(62," Always call "),n(63,"code"),e(64,"fixture.detectChanges()"),t(),e(65," after modifying component properties to update the view. Angular doesn't automatically run change detection in tests unless configured with automatic detection. "),t()(),n(66,"div",13)(67,"h4"),e(68,"\u{1F3AF} Testing Best Practices"),t(),n(69,"ul")(70,"li"),e(71,"Test user-facing behavior, not implementation details"),t(),n(72,"li"),e(73,"Use "),n(74,"code"),e(75,"By.css()"),t(),e(76," for more reliable DOM queries"),t(),n(77,"li"),e(78,"Test error states and edge cases"),t(),n(79,"li"),e(80,"Verify accessibility attributes and ARIA labels"),t()()()()),i&2){let o=l();r(57),s(o.componentTesting)}}function b(i,m){if(i&1&&(n(0,"div",10)(1,"h3"),e(2,"Testing Angular Services"),t(),n(3,"p"),e(4," Service testing focuses on business logic, data manipulation, and API communication. Services are typically easier to test than components since they don't involve the DOM. "),t(),n(5,"h4"),e(6,"Testing Services with HTTP"),t(),n(7,"ul")(8,"li")(9,"strong"),e(10,"HttpClientTestingModule:"),t(),e(11," Mock HTTP requests without real API calls"),t(),n(12,"li")(13,"strong"),e(14,"HttpTestingController:"),t(),e(15," Control and verify HTTP requests"),t(),n(16,"li")(17,"strong"),e(18,"expectOne():"),t(),e(19," Assert a single matching request was made"),t(),n(20,"li")(21,"strong"),e(22,"flush():"),t(),e(23," Simulate server response with mock data"),t(),n(24,"li")(25,"strong"),e(26,"verify():"),t(),e(27," Ensure no outstanding HTTP requests remain"),t()(),n(28,"h4"),e(29,"Common Service Testing Patterns"),t(),n(30,"ul")(31,"li"),e(32,"\u2705 Test successful API calls with expected data"),t(),n(33,"li"),e(34,"\u274C Test error handling and HTTP error responses"),t(),n(35,"li"),e(36,"\u{1F504} Test retry logic and timeout behavior"),t(),n(37,"li"),e(38,"\u{1F4BE} Test caching mechanisms and data persistence"),t(),n(39,"li"),e(40,"\u{1F510} Test authentication token handling"),t()(),n(41,"pre")(42,"code",11),e(43),t()(),n(44,"div",12)(45,"h4"),e(46,"\u{1F4A1} HTTP Testing"),t(),n(47,"p"),e(48," Always call "),n(49,"code"),e(50,"httpMock.verify()"),t(),e(51," in "),n(52,"code"),e(53,"afterEach()"),t(),e(54," to ensure all expected HTTP requests were made and no unexpected requests occurred during the test. "),t()(),n(55,"div",14)(56,"h4"),e(57,"\u26A0\uFE0F Common Pitfalls"),t(),n(58,"ul")(59,"li"),e(60,"Forgetting to call "),n(61,"code"),e(62,"req.flush()"),t(),e(63," - tests will hang"),t(),n(64,"li"),e(65,"Not verifying HTTP method (GET, POST, etc.)"),t(),n(66,"li"),e(67,"Forgetting to test error scenarios"),t(),n(68,"li"),e(69,"Not cleaning up with "),n(70,"code"),e(71,"httpMock.verify()"),t()()()()()),i&2){let o=l();r(43),s(o.serviceTesting)}}function T(i,m){if(i&1&&(n(0,"div",10)(1,"h3"),e(2,"Testing Asynchronous Code"),t(),n(3,"p"),e(4," Angular provides utilities for testing asynchronous operations like Promises, Observables, setTimeout, and setInterval in a controlled, synchronous manner. "),t(),n(5,"h4"),e(6,"Async Testing Utilities"),t(),n(7,"ul")(8,"li")(9,"strong"),e(10,"fakeAsync:"),t(),e(11," Run test in fake async zone, control time with tick()"),t(),n(12,"li")(13,"strong"),e(14,"tick(ms):"),t(),e(15," Simulate passage of time in milliseconds"),t(),n(16,"li")(17,"strong"),e(18,"flush():"),t(),e(19," Flush all pending timers"),t(),n(20,"li")(21,"strong"),e(22,"waitForAsync:"),t(),e(23," Wait for all async operations to complete"),t(),n(24,"li")(25,"strong"),e(26,"whenStable():"),t(),e(27," Promise that resolves when async tasks finish"),t()(),n(28,"h4"),e(29,"When to Use Each Utility"),t(),n(30,"ul")(31,"li")(32,"strong"),e(33,"fakeAsync/tick:"),t(),e(34," Testing setTimeout, setInterval, debounce"),t(),n(35,"li")(36,"strong"),e(37,"waitForAsync:"),t(),e(38," Testing Promises and async/await"),t(),n(39,"li")(40,"strong"),e(41,"done callback:"),t(),e(42," Testing observables and complex async flows"),t(),n(43,"li")(44,"strong"),e(45,"jasmine.clock():"),t(),e(46," Alternative for timer control"),t()(),n(47,"pre")(48,"code",11),e(49),t()(),n(50,"div",12)(51,"h4"),e(52,"\u{1F4A1} FakeAsync Zone"),t(),n(53,"p")(54,"code"),e(55,"fakeAsync"),t(),e(56," creates a special zone where time is under your control. Use "),n(57,"code"),e(58,"tick()"),t(),e(59," to advance time precisely, making tests deterministic and fast. "),t()(),n(60,"div",14)(61,"h4"),e(62,"\u26A0\uFE0F FakeAsync Limitations"),t(),n(63,"ul")(64,"li"),e(65,"Cannot use real HTTP requests (XHR/fetch)"),t(),n(66,"li"),e(67,"Cannot test actual browser APIs like WebSocket"),t(),n(68,"li"),e(69,"Must flush all timers before test ends"),t(),n(70,"li"),e(71,"Nested fakeAsync zones are not supported"),t()()()()),i&2){let o=l();r(49),s(o.asyncTesting)}}function y(i,m){if(i&1&&(n(0,"div",10)(1,"h3"),e(2,"Testing Angular Signals"),t(),n(3,"p"),e(4," Angular Signals introduced in v16 provide fine-grained reactivity. Testing signals is straightforward since they are synchronous and their values can be read directly using the call syntax. "),t(),n(5,"h4"),e(6,"Signal Testing Fundamentals"),t(),n(7,"ul")(8,"li")(9,"strong"),e(10,"Reading Signals:"),t(),e(11," Call the signal as a function: "),n(12,"code"),e(13,"count()"),t()(),n(14,"li")(15,"strong"),e(16,"Writing Signals:"),t(),e(17," Use "),n(18,"code"),e(19,"set()"),t(),e(20," or "),n(21,"code"),e(22,"update()"),t()(),n(23,"li")(24,"strong"),e(25,"Computed Signals:"),t(),e(26," Automatically update when dependencies change"),t(),n(27,"li")(28,"strong"),e(29,"Effects:"),t(),e(30," Run side effects when signals change (async)"),t()(),n(31,"h4"),e(32,"Testing Patterns"),t(),n(33,"ul")(34,"li"),e(35,"\u2705 Test signal value updates with set() and update()"),t(),n(36,"li"),e(37,"\u{1F504} Test computed signal recalculation"),t(),n(38,"li"),e(39,"\u{1F441}\uFE0F Test signal changes reflected in template"),t(),n(40,"li"),e(41,"\u26A1 Test effects execution and cleanup"),t(),n(42,"li"),e(43,"\u{1F517} Test signal dependency chains"),t()(),n(44,"pre")(45,"code",11),e(46),t()(),n(47,"div",12)(48,"h4"),e(49,"\u{1F4A1} Signals are Synchronous"),t(),n(50,"p"),e(51," Unlike RxJS observables, signal updates are synchronous. Changes are immediately reflected when you read the signal. Only effects run asynchronously in microtasks. "),t()(),n(52,"div",13)(53,"h4"),e(54,"\u{1F3AF} Testing Tips"),t(),n(55,"ul")(56,"li"),e(57,"No need for async utilities when testing basic signal updates"),t(),n(58,"li"),e(59,"Use "),n(60,"code"),e(61,"TestBed.runInInjectionContext()"),t(),e(62," for testing effects"),t(),n(63,"li"),e(64,"Computed signals update immediately when dependencies change"),t(),n(65,"li"),e(66,"Test signal updates trigger change detection in components"),t()()()()),i&2){let o=l();r(46),s(o.signalTesting)}}function D(i,m){if(i&1&&(n(0,"div",10)(1,"h3"),e(2,"Mocking and Spying"),t(),n(3,"p"),e(4," Mocking dependencies isolates the unit under test by replacing real dependencies with controlled test doubles. This ensures tests are fast, reliable, and independent of external systems. "),t(),n(5,"h4"),e(6,"Mocking Strategies"),t(),n(7,"ul")(8,"li")(9,"strong"),e(10,"Spy Objects:"),t(),e(11," Use "),n(12,"code"),e(13,"jasmine.createSpyObj()"),t(),e(14," for full mock objects"),t(),n(15,"li")(16,"strong"),e(17,"Spy On Methods:"),t(),e(18," Use "),n(19,"code"),e(20,"spyOn()"),t(),e(21," to mock specific methods"),t(),n(22,"li")(23,"strong"),e(24,"Mock Classes:"),t(),e(25," Create custom mock classes with test data"),t(),n(26,"li")(27,"strong"),e(28,"Stub Values:"),t(),e(29," Provide simple objects with useValue"),t()(),n(30,"h4"),e(31,"Jasmine Spy Methods"),t(),n(32,"ul")(33,"li")(34,"code"),e(35,"and.returnValue(value):"),t(),e(36," Return a specific value"),t(),n(37,"li")(38,"code"),e(39,"and.callThrough():"),t(),e(40," Call the actual implementation"),t(),n(41,"li")(42,"code"),e(43,"and.callFake(fn):"),t(),e(44," Call a fake implementation"),t(),n(45,"li")(46,"code"),e(47,"and.throwError(error):"),t(),e(48," Throw an error"),t(),n(49,"li")(50,"code"),e(51,"and.stub():"),t(),e(52," Do nothing (default)"),t()(),n(53,"h4"),e(54,"Spy Assertions"),t(),n(55,"ul")(56,"li")(57,"code"),e(58,"toHaveBeenCalled():"),t(),e(59," Verify method was called"),t(),n(60,"li")(61,"code"),e(62,"toHaveBeenCalledWith(args):"),t(),e(63," Verify with specific arguments"),t(),n(64,"li")(65,"code"),e(66,"toHaveBeenCalledTimes(n):"),t(),e(67," Verify call count"),t(),n(68,"li")(69,"code"),e(70,"calls.count():"),t(),e(71," Get number of calls"),t(),n(72,"li")(73,"code"),e(74,"calls.argsFor(index):"),t(),e(75," Get arguments for specific call"),t()(),n(76,"pre")(77,"code",11),e(78),t()(),n(79,"div",12)(80,"h4"),e(81,"\u{1F4A1} Spy Objects vs Mock Classes"),t(),n(82,"p"),e(83," Use "),n(84,"code"),e(85,"jasmine.createSpyObj()"),t(),e(86," for simple mocks. Create custom mock classes when you need more complex behavior, shared test data, or reusable mocks across tests. "),t()(),n(87,"div",13)(88,"h4"),e(89,"\u{1F3AF} Best Practices"),t(),n(90,"ul")(91,"li"),e(92,"Mock all external dependencies (services, HTTP, storage)"),t(),n(93,"li"),e(94,"Use descriptive spy names matching the real service"),t(),n(95,"li"),e(96,"Configure default return values in beforeEach"),t(),n(97,"li"),e(98,"Test both success and error scenarios"),t()()()()),i&2){let o=l();r(78),s(o.mockingDependencies)}}function k(i,m){if(i&1&&(n(0,"div",10)(1,"h3"),e(2,"Code Coverage"),t(),n(3,"p"),e(4," Code coverage measures which parts of your code are executed during tests. Angular CLI integrates Istanbul coverage tool to generate detailed coverage reports and enforce coverage thresholds. "),t(),n(5,"h4"),e(6,"Coverage Metrics"),t(),n(7,"ul")(8,"li")(9,"strong"),e(10,"Statements:"),t(),e(11," Percentage of executable statements covered"),t(),n(12,"li")(13,"strong"),e(14,"Branches:"),t(),e(15," Percentage of if/else branches covered"),t(),n(16,"li")(17,"strong"),e(18,"Functions:"),t(),e(19," Percentage of functions called"),t(),n(20,"li")(21,"strong"),e(22,"Lines:"),t(),e(23," Percentage of code lines executed"),t()(),n(24,"h4"),e(25,"Running Coverage"),t(),n(26,"ul")(27,"li")(28,"code"),e(29,"ng test --code-coverage"),t(),e(30," - Run tests with coverage"),t(),n(31,"li")(32,"code"),e(33,"ng test --no-watch --code-coverage"),t(),e(34," - Single run with coverage"),t(),n(35,"li"),e(36,"Coverage reports generated in "),n(37,"code"),e(38,"coverage/"),t(),e(39," directory"),t(),n(40,"li"),e(41,"Open "),n(42,"code"),e(43,"coverage/index.html"),t(),e(44," for detailed HTML report"),t()(),n(45,"h4"),e(46,"Coverage Best Practices"),t(),n(47,"ul")(48,"li"),e(49,"\u{1F3AF} Aim for 80%+ coverage for critical business logic"),t(),n(50,"li"),e(51,"\u{1F6AB} Exclude generated code and test files from coverage"),t(),n(52,"li"),e(53,"\u26A0\uFE0F 100% coverage doesn't guarantee bug-free code"),t(),n(54,"li"),e(55,"\u{1F50D} Focus on meaningful tests, not just coverage numbers"),t(),n(56,"li"),e(57,"\u{1F4CA} Use coverage to identify untested code paths"),t()(),n(58,"pre")(59,"code",11),e(60),t()(),n(61,"div",12)(62,"h4"),e(63,"\u{1F4A1} Coverage Thresholds"),t(),n(64,"p"),e(65," Set minimum coverage thresholds in karma.conf.js to fail builds if coverage drops below acceptable levels. This ensures code quality standards are maintained as the codebase grows. "),t()(),n(66,"div",14)(67,"h4"),e(68,"\u26A0\uFE0F Coverage Limitations"),t(),n(69,"ul")(70,"li"),e(71,"High coverage doesn't mean good test quality"),t(),n(72,"li"),e(73,"Can't measure if tests check the right things"),t(),n(74,"li"),e(75,"Doesn't test integration between components"),t(),n(76,"li"),e(77,"May encourage testing implementation over behavior"),t()()(),n(78,"div",13)(79,"h4"),e(80,"\u{1F3AF} Improving Coverage"),t(),n(81,"ul")(82,"li"),e(83,"Identify red/uncovered lines in HTML report"),t(),n(84,"li"),e(85,"Add tests for error handling and edge cases"),t(),n(86,"li"),e(87,"Test all conditional branches (if/else)"),t(),n(88,"li"),e(89,"Don't ignore coverage, but don't obsess over 100%"),t()()()()),i&2){let o=l();r(60),s(o.testCoverage)}}function A(i,m){if(i&1&&(n(0,"div",10)(1,"h3"),e(2,"Testing Best Practices"),t(),n(3,"p"),e(4," Following established testing best practices ensures your test suite is maintainable, reliable, and provides value to the development process. Good tests are fast, independent, and focused. "),t(),n(5,"h4"),e(6,"Golden Rules"),t(),n(7,"ul")(8,"li")(9,"strong"),e(10,"AAA Pattern:"),t(),e(11," Arrange (setup) \u2192 Act (execute) \u2192 Assert (verify)"),t(),n(12,"li")(13,"strong"),e(14,"Test One Thing:"),t(),e(15," Each test should verify a single behavior"),t(),n(16,"li")(17,"strong"),e(18,"Descriptive Names:"),t(),e(19," Test names should explain what is being tested"),t(),n(20,"li")(21,"strong"),e(22,"Independent Tests:"),t(),e(23," Tests should not depend on each other"),t(),n(24,"li")(25,"strong"),e(26,"Fast Execution:"),t(),e(27," Keep tests fast by avoiding real HTTP/DB calls"),t()(),n(28,"h4"),e(29,"What Makes Good Tests"),t(),n(30,"ul")(31,"li"),e(32,"\u{1F3AF} "),n(33,"strong"),e(34,"Focused:"),t(),e(35," Test one behavior per test"),t(),n(36,"li"),e(37,"\u{1F504} "),n(38,"strong"),e(39,"Repeatable:"),t(),e(40," Same results every time"),t(),n(41,"li"),e(42,"\u26A1 "),n(43,"strong"),e(44,"Fast:"),t(),e(45," Run quickly to enable frequent testing"),t(),n(46,"li"),e(47,"\u{1F512} "),n(48,"strong"),e(49,"Independent:"),t(),e(50," Can run in any order"),t(),n(51,"li"),e(52,"\u{1F4D6} "),n(53,"strong"),e(54,"Readable:"),t(),e(55," Clear and easy to understand"),t(),n(56,"li"),e(57,"\u{1F6E1}\uFE0F "),n(58,"strong"),e(59,"Reliable:"),t(),e(60," No flaky or random failures"),t()(),n(61,"h4"),e(62,"Common Anti-Patterns to Avoid"),t(),n(63,"ul")(64,"li"),e(65,"\u274C Testing implementation details instead of behavior"),t(),n(66,"li"),e(67,"\u274C Tests that depend on other tests' state"),t(),n(68,"li"),e(69,"\u274C Overly complex test logic"),t(),n(70,"li"),e(71,"\u274C Insufficient test coverage of edge cases"),t(),n(72,"li"),e(73,"\u274C Using real external dependencies"),t(),n(74,"li"),e(75,"\u274C Vague or generic test names"),t()(),n(76,"pre")(77,"code",11),e(78),t()(),n(79,"div",15)(80,"h4"),e(81,"\u2705 Testing Checklist"),t(),n(82,"ul")(83,"li")(84,"strong"),e(85,"Happy Path:"),t(),e(86," Test expected, successful scenarios"),t(),n(87,"li")(88,"strong"),e(89,"Error Cases:"),t(),e(90," Test error handling and validation"),t(),n(91,"li")(92,"strong"),e(93,"Edge Cases:"),t(),e(94," Test boundary conditions (empty, null, max)"),t(),n(95,"li")(96,"strong"),e(97,"User Interactions:"),t(),e(98," Test clicks, inputs, navigation"),t(),n(99,"li")(100,"strong"),e(101,"State Changes:"),t(),e(102," Test component state transitions"),t(),n(103,"li")(104,"strong"),e(105,"Side Effects:"),t(),e(106," Test API calls, events, storage"),t()()(),n(107,"div",13)(108,"h4"),e(109,"\u{1F3AF} Test Organization"),t(),n(110,"ul")(111,"li"),e(112,"Group related tests with nested "),n(113,"code"),e(114,"describe()"),t(),e(115," blocks"),t(),n(116,"li"),e(117,"Use "),n(118,"code"),e(119,"beforeEach()"),t(),e(120," for common setup"),t(),n(121,"li"),e(122,"Keep test files next to source files (*.spec.ts)"),t(),n(123,"li"),e(124,"Use helper functions for repeated test setup"),t(),n(125,"li"),e(126,"Write tests as you write code (TDD)"),t()()(),n(127,"div",14)(128,"h4"),e(129,"\u26A0\uFE0F When Not to Test"),t(),n(130,"ul")(131,"li"),e(132,"Third-party libraries (assume they're tested)"),t(),n(133,"li"),e(134,"Generated code or boilerplate"),t(),n(135,"li"),e(136,"Trivial getters/setters without logic"),t(),n(137,"li"),e(138,"Framework internals (trust Angular)"),t()()()()),i&2){let o=l();r(78),s(o.bestPractices)}}var _=(()=>{class i{constructor(){this.testBedBasics=`import { TestBed } from '@angular/core/testing';
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
});`,this.componentTesting=`import { ComponentFixture, TestBed } from '@angular/core/testing';
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
});`,this.serviceTesting=`import { TestBed } from '@angular/core/testing';
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
});`,this.asyncTesting=`import { ComponentFixture, TestBed, fakeAsync, tick, flush, waitForAsync } from '@angular/core/testing';
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
});`,this.signalTesting=`import { TestBed } from '@angular/core/testing';
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
});`,this.mockingDependencies=`import { TestBed } from '@angular/core/testing';
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
}`,this.testCoverage=`// karma.conf.js - Coverage Configuration
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
}`,this.bestPractices=`// ===== UNIT TESTING BEST PRACTICES =====

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
});`}ngAfterViewChecked(){E.highlightAll()}static{this.\u0275fac=function(c){return new(c||i)}}static{this.\u0275cmp=d({type:i,selectors:[["app-learn-unittesting"]],standalone:!0,features:[u],decls:21,vars:0,consts:[[1,"header"],["label","TestBed Basics"],["matTabContent",""],["label","Component Testing"],["label","Service Testing"],["label","Async Testing"],["label","Testing Signals"],["label","Mocking Dependencies"],["label","Test Coverage"],["label","Best Practices"],[1,"tab-content"],[1,"language-typescript"],[1,"info-box"],[1,"tip-box"],[1,"warning-box"],[1,"best-practices"]],template:function(c,B){c&1&&(n(0,"h2",0),e(1,"Unit Testing"),t(),n(2,"label"),e(3,"Unit Testing in Angular ensures code quality and reliability through comprehensive test coverage using Jasmine and Karma frameworks."),t(),n(4,"mat-tab-group")(5,"mat-tab",1),a(6,v,84,1,"ng-template",2),t(),n(7,"mat-tab",3),a(8,C,81,1,"ng-template",2),t(),n(9,"mat-tab",4),a(10,b,72,1,"ng-template",2),t(),n(11,"mat-tab",5),a(12,T,72,1,"ng-template",2),t(),n(13,"mat-tab",6),a(14,y,67,1,"ng-template",2),t(),n(15,"mat-tab",7),a(16,D,99,1,"ng-template",2),t(),n(17,"mat-tab",8),a(18,k,90,1,"ng-template",2),t(),n(19,"mat-tab",9),a(20,A,139,1,"ng-template",2),t()())},dependencies:[h,p,g,x],styles:[".header[_ngcontent-%COMP%]{color:#dd0031;font-size:2rem;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]{padding:20px}.tab-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#dd0031;margin-top:1.5rem;margin-bottom:.5rem}.tab-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#444;margin-top:1rem;margin-bottom:.5rem}.tab-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.6;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{line-height:1.8;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background-color:#f4f4f4;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background-color:#f5f5f5;padding:15px;border-radius:5px;overflow-x:auto;margin:1rem 0}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin:1rem 0}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #ddd;padding:12px;text-align:left}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#f5f5f5;font-weight:600}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#fafafa}.info-box[_ngcontent-%COMP%]{background-color:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:20px 0;border-radius:4px}.info-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.tip-box[_ngcontent-%COMP%]{background-color:#e8f5e9;border-left:4px solid #4caf50;padding:15px;margin:20px 0;border-radius:4px}.tip-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#2e7d32}.warning-box[_ngcontent-%COMP%]{background-color:#fff3e0;border-left:4px solid #ff9800;padding:15px;margin:20px 0;border-radius:4px}.warning-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#f57c00}.best-practices[_ngcontent-%COMP%]{background-color:#e8f5e9;border-left:4px solid #4caf50;padding:15px;margin:20px 0;border-radius:4px}.best-practices[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#2e7d32}.best-practices[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#2e7d32}"]})}}return i})();export{_ as LearnUnittestingComponent};
