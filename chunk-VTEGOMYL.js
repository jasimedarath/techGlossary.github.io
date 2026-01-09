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

// src/app/components/angular/learn-dependency-injection/learn-dependency-injection.component.ts
var Prism = __toESM(require_prism());
function LearnDependencyInjectionComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h3");
    \u0275\u0275text(2, "Modern Dependency Injection with inject()");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Angular 14+ introduced the ");
    \u0275\u0275elementStart(5, "code");
    \u0275\u0275text(6, "inject()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " function, providing a more flexible and functional approach to dependency injection compared to constructor injection. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h4");
    \u0275\u0275text(9, "Why Use inject()?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ul")(11, "li")(12, "strong");
    \u0275\u0275text(13, "Less boilerplate:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " No need for constructor parameters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li")(16, "strong");
    \u0275\u0275text(17, "Functional composition:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Can be used in factory functions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "li")(20, "strong");
    \u0275\u0275text(21, "Better tree-shaking:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Unused dependencies are eliminated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "li")(24, "strong");
    \u0275\u0275text(25, "More flexible:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " Can be used in field initializers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "li")(28, "strong");
    \u0275\u0275text(29, "Easier testing:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " Simpler to mock and override");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "h4");
    \u0275\u0275text(32, "Comparison: Constructor vs inject()");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "pre")(34, "code", 10);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 11)(37, "h4");
    \u0275\u0275text(38, "\u{1F4A1} When to Use inject()");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p");
    \u0275\u0275text(40, "The ");
    \u0275\u0275elementStart(41, "code");
    \u0275\u0275text(42, "inject()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, " function can only be called during:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "ul")(45, "li");
    \u0275\u0275text(46, "Class field initialization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "li");
    \u0275\u0275text(48, "Constructor execution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "li");
    \u0275\u0275text(50, "Factory functions called by the injector");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "li");
    \u0275\u0275text(52, "Within an injection context");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(35);
    \u0275\u0275textInterpolate(ctx_r0.basicDI);
  }
}
function LearnDependencyInjectionComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h3");
    \u0275\u0275text(2, "Using inject() in Functions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " One of the most powerful features of ");
    \u0275\u0275elementStart(5, "code");
    \u0275\u0275text(6, "inject()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " is the ability to use it in standalone functions, enabling better code reuse and composition. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h4");
    \u0275\u0275text(9, "Benefits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ul")(11, "li");
    \u0275\u0275text(12, "Create reusable factory functions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "li");
    \u0275\u0275text(14, "Better separation of concerns");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li");
    \u0275\u0275text(16, "Easier to compose functionality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "li");
    \u0275\u0275text(18, "Improved testability");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "pre")(20, "code", 10);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 12)(23, "h4");
    \u0275\u0275text(24, "\u{1F3AF} Best Practices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "ul")(26, "li");
    \u0275\u0275text(27, "Use inject() for new code and components");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "li");
    \u0275\u0275text(29, "Create factory functions for complex initialization logic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "li");
    \u0275\u0275text(31, "Combine with signals for reactive patterns");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "li");
    \u0275\u0275text(33, "Keep factory functions pure and focused");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx_r0.injectInFunctions);
  }
}
function LearnDependencyInjectionComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h3");
    \u0275\u0275text(2, "Optional Dependencies and Injection Flags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Angular provides several flags to control how dependencies are resolved. These flags give you fine-grained control over the injection process. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Available Flags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "optional:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Returns null if dependency is not available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "self:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Only look in the current injector");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "skipSelf:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Skip the current injector and look in parent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "host:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Stop searching at the host component");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "pre")(25, "code", 10);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 13)(28, "h4");
    \u0275\u0275text(29, "\u26A0\uFE0F Common Pitfalls");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ul")(31, "li");
    \u0275\u0275text(32, "Don't overuse optional dependencies - they can hide configuration issues");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "li");
    \u0275\u0275text(34, "Be careful with skipSelf - ensure parent actually provides the service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "li");
    \u0275\u0275text(36, "Self flag is rarely needed - use it only for specific scoping scenarios");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(26);
    \u0275\u0275textInterpolate(ctx_r0.optionalDI);
  }
}
function LearnDependencyInjectionComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h3");
    \u0275\u0275text(2, "Understanding Provider Scopes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Angular's DI system is hierarchical. Understanding where to provide services is crucial for managing state and performance. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Scope Levels");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 14)(8, "div", 15)(9, "h5");
    \u0275\u0275text(10, "Root (providedIn: 'root')");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12, "Application-wide singleton, available everywhere, tree-shakeable");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 15)(14, "h5");
    \u0275\u0275text(15, "Module (providedIn: SomeModule)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17, "Scoped to a feature module, loaded lazily with the module");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 15)(19, "h5");
    \u0275\u0275text(20, "Component (providers: [...])");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p");
    \u0275\u0275text(22, "New instance for each component and its children");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 15)(24, "h5");
    \u0275\u0275text(25, "Platform");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p");
    \u0275\u0275text(27, "Shared across multiple Angular applications on the same page");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "pre")(29, "code", 10);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 16)(32, "h4");
    \u0275\u0275text(33, "\u{1F4CB} When to Use Each Scope");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "table")(35, "tr")(36, "th");
    \u0275\u0275text(37, "Scope");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39, "Use When");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th");
    \u0275\u0275text(41, "Examples");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "tr")(43, "td");
    \u0275\u0275text(44, "Root");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "td");
    \u0275\u0275text(46, "Shared across entire app");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "td");
    \u0275\u0275text(48, "AuthService, GlobalStateService");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "tr")(50, "td");
    \u0275\u0275text(51, "Module");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "td");
    \u0275\u0275text(53, "Feature-specific, lazy loaded");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "td");
    \u0275\u0275text(55, "AdminService, ShoppingCartService");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "tr")(57, "td");
    \u0275\u0275text(58, "Component");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "td");
    \u0275\u0275text(60, "Isolated state per component");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "td");
    \u0275\u0275text(62, "FormStateService, LocalFilterService");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(30);
    \u0275\u0275textInterpolate(ctx_r0.providerScopes);
  }
}
function LearnDependencyInjectionComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h3");
    \u0275\u0275text(2, "Custom Injection Tokens");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Injection tokens allow you to provide and inject values that aren't classes, such as configuration objects, strings, or functions. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Why Use Injection Tokens?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li");
    \u0275\u0275text(9, "Provide configuration objects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275text(11, "Type-safe non-class dependencies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li");
    \u0275\u0275text(13, "Avoid naming collisions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "li");
    \u0275\u0275text(15, "Create flexible APIs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "pre")(17, "code", 10);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "h3");
    \u0275\u0275text(20, "Factory Providers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p");
    \u0275\u0275text(22, " Factory providers allow you to create dependencies dynamically based on other dependencies or runtime conditions. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "pre")(24, "code", 10);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275textInterpolate(ctx_r0.injectionTokens);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.factoryProviders);
  }
}
function LearnDependencyInjectionComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h3");
    \u0275\u0275text(2, "Understanding Hierarchical Dependency Injection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Angular's DI system is hierarchical, meaning injectors form a tree structure that mirrors your component tree. This enables powerful scoping strategies. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Injector Hierarchy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 17)(8, "div", 18);
    \u0275\u0275text(9, "Platform Injector (shared across apps)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 19);
    \u0275\u0275text(11, "\u2193");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 18);
    \u0275\u0275text(13, "Root Injector (application singleton)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 19);
    \u0275\u0275text(15, "\u2193");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 18);
    \u0275\u0275text(17, "Module Injector (lazy loaded modules)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 19);
    \u0275\u0275text(19, "\u2193");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 18);
    \u0275\u0275text(21, "Component Injector (component instance)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 19);
    \u0275\u0275text(23, "\u2193");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 18);
    \u0275\u0275text(25, "Element Injector (directives)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "pre")(27, "code", 10);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 20)(30, "h4");
    \u0275\u0275text(31, "\u{1F3AF} Common Use Cases");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "ul")(33, "li")(34, "strong");
    \u0275\u0275text(35, "Form State:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " Provide FormService at component level for isolated form state");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "li")(38, "strong");
    \u0275\u0275text(39, "Filter State:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " Provide FilterService per list component");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "li")(42, "strong");
    \u0275\u0275text(43, "Theme Context:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " Provide theme at module level for feature-specific theming");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "li")(46, "strong");
    \u0275\u0275text(47, "Multi-tenancy:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, " Provide tenant config at component subtree level");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(28);
    \u0275\u0275textInterpolate(ctx_r0.hierarchicalDI);
  }
}
function LearnDependencyInjectionComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h3");
    \u0275\u0275text(2, "Complete Real-World Example");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " This example demonstrates a modern Angular feature store using inject(), signals, and proper dependency injection patterns. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "pre")(6, "code", 10);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 21)(9, "h4");
    \u0275\u0275text(10, "\u2705 Key Takeaways");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ul")(12, "li");
    \u0275\u0275text(13, "Use ");
    \u0275\u0275elementStart(14, "code");
    \u0275\u0275text(15, "inject()");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " for cleaner code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "li");
    \u0275\u0275text(18, "Provide stores at component level for isolated state");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "li");
    \u0275\u0275text(20, "Combine with signals for reactive patterns");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "li");
    \u0275\u0275text(22, "Use injection tokens for configuration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "li");
    \u0275\u0275text(24, "Keep services focused and single-purpose");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "li");
    \u0275\u0275text(26, "Leverage computed signals for derived state");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.realWorldExample);
  }
}
var LearnDependencyInjectionComponent = class _LearnDependencyInjectionComponent {
  constructor() {
    this.basicDI = `// Old constructor injection
@Component({
  selector: 'app-user-profile',
  template: '<div>{{ user.name }}</div>'
})
export class UserProfileComponent {
  constructor(
    private userService: UserService,
    private http: HttpClient,
    private router: Router
  ) {}
}

// New inject() function
import { inject } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  template: '<div>{{ user.name }}</div>'
})
export class UserProfileComponent {
  private userService = inject(UserService);
  private http = inject(HttpClient);
  private router = inject(Router);
  
  // Can be used anywhere in the class during construction
  private logger = inject(LoggerService);
}`;
    this.injectInFunctions = `// Using inject() in functions
export function createUserStore() {
  const http = inject(HttpClient);
  const authService = inject(AuthService);
  
  return {
    loadUsers: () => http.get('/api/users'),
    currentUser: authService.currentUser
  };
}

// Using in class initializers
@Component({...})
export class DashboardComponent {
  // Can use inject in field initializers
  private store = createUserStore();
  
  // Computed values using injected services
  private authService = inject(AuthService);
  isAdmin = computed(() => 
    this.authService.currentUser()?.role === 'admin'
  );
}

// Factory functions with inject
export function createLogger(prefix: string) {
  const console = inject(ConsoleService);
  
  return {
    log: (message: string) => console.log(\`[\${prefix}] \${message}\`),
    error: (message: string) => console.error(\`[\${prefix}] \${message}\`)
  };
}`;
    this.optionalDI = `// Optional dependencies
import { inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({...})
export class MyComponent {
  // Optional injection - returns null if not available
  private analytics = inject(AnalyticsService, { optional: true });
  
  // With default value
  private config = inject(ConfigService, { optional: true }) ?? defaultConfig;
  
  trackEvent(event: string) {
    // Safe to call if available
    this.analytics?.track(event);
  }
}

// Self and SkipSelf
@Component({
  providers: [LocalService]
})
export class ParentComponent {
  // Gets the instance from this component's injector
  private local = inject(LocalService, { self: true });
  
  // Skips this component, looks in parent injectors
  private parent = inject(GlobalService, { skipSelf: true });
}`;
    this.providerScopes = `// Root-level providers (application-wide singleton)
@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  private state = signal({ count: 0 });
  
  increment() {
    this.state.update(s => ({ count: s.count + 1 }));
  }
}

// Component-level providers (new instance per component)
@Component({
  selector: 'app-user-form',
  providers: [FormStateService],
  template: '...'
})
export class UserFormComponent {
  private formState = inject(FormStateService);
}

// Lazy loaded module providers
@Injectable({
  providedIn: AdminModule
})
export class AdminService {
  // Only loaded when AdminModule is loaded
}

// Platform providers (shared across multiple apps)
platformBrowserDynamic([
  { provide: LOCALE_ID, useValue: 'en-US' }
]).bootstrapApplication(AppComponent);`;
    this.injectionTokens = `// Creating custom injection tokens
import { InjectionToken } from '@angular/core';

// Simple value token
export const API_URL = new InjectionToken<string>('API_URL');

// Complex type token
export interface AppConfig {
  apiUrl: string;
  timeout: number;
  retries: number;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

// Providing tokens
export const appConfig: ApplicationConfig = {
  providers: [
    { provide: API_URL, useValue: 'https://api.example.com' },
    {
      provide: APP_CONFIG,
      useValue: {
        apiUrl: 'https://api.example.com',
        timeout: 30000,
        retries: 3
      }
    }
  ]
};

// Using tokens with inject()
@Component({...})
export class ApiComponent {
  private apiUrl = inject(API_URL);
  private config = inject(APP_CONFIG);
  
  fetchData() {
    return fetch(this.apiUrl);
  }
}`;
    this.factoryProviders = `// Factory providers with dependencies
export function createHttpClient(config: AppConfig, logger: Logger) {
  return new HttpClient(config.apiUrl, {
    timeout: config.timeout,
    logger: logger
  });
}

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: HTTP_CLIENT,
      useFactory: createHttpClient,
      deps: [APP_CONFIG, Logger]
    }
  ]
};

// Factory with inject() - cleaner approach
export function httpClientFactory() {
  const config = inject(APP_CONFIG);
  const logger = inject(Logger);
  
  return new HttpClient(config.apiUrl, {
    timeout: config.timeout,
    logger: logger
  });
}

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: HTTP_CLIENT,
      useFactory: httpClientFactory
    }
  ]
};`;
    this.hierarchicalDI = `// Hierarchical Dependency Injection
// App-level service
@Injectable({ providedIn: 'root' })
export class GlobalUserService {
  private users = signal<User[]>([]);
}

// Feature module service
@Injectable({ providedIn: ShoppingModule })
export class ShoppingCartService {
  private cart = signal<CartItem[]>([]);
}

// Component-level service
@Component({
  selector: 'app-product-list',
  providers: [FilterService], // New instance for each component
  template: '...'
})
export class ProductListComponent {
  private filterService = inject(FilterService);
  private globalUsers = inject(GlobalUserService); // Shared instance
}

// Understanding the lookup
/*
Component
  \u2193 (not found)
Parent Component
  \u2193 (not found)
Feature Module
  \u2193 (not found)
Root Injector
  \u2193 (not found)
Platform Injector
  \u2193 (not found)
Null Injector (throws error)
*/`;
    this.realWorldExample = `// Real-world example: Feature store with DI
import { inject, Injectable, signal, computed } from '@angular/core';

// API Configuration
export const API_CONFIG = new InjectionToken<{
  baseUrl: string;
  timeout: number;
}>('api.config');

// Feature Store using inject()
@Injectable()
export class TodoStore {
  private http = inject(HttpClient);
  private config = inject(API_CONFIG);
  
  // State
  private todos = signal<Todo[]>([]);
  private loading = signal(false);
  private error = signal<string | null>(null);
  
  // Selectors
  readonly allTodos = this.todos.asReadonly();
  readonly isLoading = this.loading.asReadonly();
  readonly completedTodos = computed(() =>
    this.todos().filter(t => t.completed)
  );
  readonly pendingTodos = computed(() =>
    this.todos().filter(t => !t.completed)
  );
  
  // Actions
  async loadTodos() {
    this.loading.set(true);
    this.error.set(null);
    
    try {
      const url = \`\${this.config.baseUrl}/todos\`;
      const todos = await firstValueFrom(
        this.http.get<Todo[]>(url)
      );
      this.todos.set(todos);
    } catch (err) {
      this.error.set('Failed to load todos');
    } finally {
      this.loading.set(false);
    }
  }
  
  addTodo(title: string) {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false
    };
    this.todos.update(todos => [...todos, newTodo]);
  }
}

// Component using the store
@Component({
  selector: 'app-todo-list',
  providers: [TodoStore], // Scoped to component
  template: \`
    <div>
      @if (store.isLoading()) {
        <spinner />
      } @else {
        @for (todo of store.allTodos(); track todo.id) {
          <todo-item [todo]="todo" />
        }
      }
      
      <div class="stats">
        Completed: {{ store.completedTodos().length }}
        Pending: {{ store.pendingTodos().length }}
      </div>
    </div>
  \`
})
export class TodoListComponent implements OnInit {
  protected store = inject(TodoStore);
  
  ngOnInit() {
    this.store.loadTodos();
  }
}`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function LearnDependencyInjectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LearnDependencyInjectionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LearnDependencyInjectionComponent, selectors: [["app-learn-dependency-injection"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 0, consts: [[1, "header"], ["label", "inject() Function"], ["matTabContent", ""], ["label", "Functional Injection"], ["label", "Optional & Flags"], ["label", "Provider Scopes"], ["label", "Injection Tokens"], ["label", "Hierarchical DI"], ["label", "Real-World Example"], [1, "tab-content"], [1, "language-typescript"], [1, "info-box"], [1, "tip-box"], [1, "warning-box"], [1, "scope-levels"], [1, "scope-item"], [1, "decision-guide"], [1, "hierarchy-diagram"], [1, "level"], [1, "arrow"], [1, "use-cases"], [1, "best-practices"]], template: function LearnDependencyInjectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1, "Dependency Injection");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "label");
        \u0275\u0275text(3, "Dependency Injection is Angular's powerful system for managing dependencies and creating maintainable, testable applications.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "mat-tab-group")(5, "mat-tab", 1);
        \u0275\u0275template(6, LearnDependencyInjectionComponent_ng_template_6_Template, 53, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-tab", 3);
        \u0275\u0275template(8, LearnDependencyInjectionComponent_ng_template_8_Template, 34, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "mat-tab", 4);
        \u0275\u0275template(10, LearnDependencyInjectionComponent_ng_template_10_Template, 37, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-tab", 5);
        \u0275\u0275template(12, LearnDependencyInjectionComponent_ng_template_12_Template, 63, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-tab", 6);
        \u0275\u0275template(14, LearnDependencyInjectionComponent_ng_template_14_Template, 26, 2, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-tab", 7);
        \u0275\u0275template(16, LearnDependencyInjectionComponent_ng_template_16_Template, 49, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "mat-tab", 8);
        \u0275\u0275template(18, LearnDependencyInjectionComponent_ng_template_18_Template, 27, 1, "ng-template", 2);
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [MatTabsModule, MatTabContent, MatTab, MatTabGroup], styles: ['\n\n.header[_ngcontent-%COMP%] {\n  color: #dd0031;\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.tab-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #dd0031;\n  margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n.tab-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.tab-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #444;\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n}\n.tab-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  line-height: 1.8;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\n.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 15px;\n  border-radius: 5px;\n  overflow-x: auto;\n  margin: 1rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 1rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 12px;\n  text-align: left;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  font-weight: 600;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fafafa;\n}\n.info-box[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.info-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1976d2;\n}\n.tip-box[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  border-left: 4px solid #4caf50;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.tip-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #2e7d32;\n}\n.warning-box[_ngcontent-%COMP%] {\n  background-color: #fff3e0;\n  border-left: 4px solid #ff9800;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.warning-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #f57c00;\n}\n.decision-guide[_ngcontent-%COMP%] {\n  background-color: #f3e5f5;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.decision-guide[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #7b1fa2;\n}\n.scope-levels[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n.scope-levels[_ngcontent-%COMP%]   .scope-item[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  border-left: 3px solid #dd0031;\n  padding: 15px;\n  margin-bottom: 10px;\n  border-radius: 4px;\n}\n.scope-levels[_ngcontent-%COMP%]   .scope-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #dd0031;\n}\n.scope-levels[_ngcontent-%COMP%]   .scope-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  color: #666;\n}\n.hierarchy-diagram[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n  padding: 20px;\n  border-radius: 8px;\n  margin: 20px 0;\n  text-align: center;\n}\n.hierarchy-diagram[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 2px solid #dd0031;\n  padding: 12px 20px;\n  border-radius: 6px;\n  margin: 5px auto;\n  max-width: 400px;\n  font-weight: 500;\n}\n.hierarchy-diagram[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  color: #dd0031;\n  font-size: 1.5rem;\n  margin: 5px 0;\n}\n.use-cases[_ngcontent-%COMP%], \n.best-practices[_ngcontent-%COMP%] {\n  background-color: #e0f2f1;\n  border-left: 4px solid #009688;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.use-cases[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.best-practices[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #00796b;\n}\n.use-cases[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.best-practices[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.use-cases[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.best-practices[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #00796b;\n}\n/*# sourceMappingURL=learn-dependency-injection.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LearnDependencyInjectionComponent, { className: "LearnDependencyInjectionComponent", filePath: "src\\app\\components\\angular\\learn-dependency-injection\\learn-dependency-injection.component.ts", lineNumber: 13 });
})();
export {
  LearnDependencyInjectionComponent
};
//# sourceMappingURL=chunk-VTEGOMYL.js.map
