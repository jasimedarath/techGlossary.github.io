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

// src/app/components/angular/learn-ngrx/learn-ngrx.component.ts
var import_prismjs = __toESM(require_prism());
function LearnNgrxComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "h3");
    \u0275\u0275text(2, "What is NgRx?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " NgRx provides state management for Angular applications based on the Redux pattern. It uses RxJS observables to handle async data and provides a single source of truth for application state. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Core Concepts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "Store:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Single immutable state tree");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "Actions:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Events that describe state changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "Reducers:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Pure functions that update state");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "Selectors:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Query state slices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li")(25, "strong");
    \u0275\u0275text(26, "Effects:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Handle side effects (HTTP, etc.)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "h4");
    \u0275\u0275text(29, "Why Use NgRx?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ul")(31, "li");
    \u0275\u0275text(32, "\u{1F4E6} ");
    \u0275\u0275elementStart(33, "strong");
    \u0275\u0275text(34, "Single Source of Truth:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " All state in one place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "li");
    \u0275\u0275text(37, "\u{1F504} ");
    \u0275\u0275elementStart(38, "strong");
    \u0275\u0275text(39, "Predictable:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " State changes via pure functions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "li");
    \u0275\u0275text(42, "\u{1F41B} ");
    \u0275\u0275elementStart(43, "strong");
    \u0275\u0275text(44, "Debuggable:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, " Redux DevTools integration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "li");
    \u0275\u0275text(47, "\u23F1\uFE0F ");
    \u0275\u0275elementStart(48, "strong");
    \u0275\u0275text(49, "Time Travel:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, " Debug by replaying actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "li");
    \u0275\u0275text(52, "\u{1F9EA} ");
    \u0275\u0275elementStart(53, "strong");
    \u0275\u0275text(54, "Testable:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, " Pure functions easy to test");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "li");
    \u0275\u0275text(57, "\u{1F680} ");
    \u0275\u0275elementStart(58, "strong");
    \u0275\u0275text(59, "Performance:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, " OnPush change detection");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "pre")(62, "code", 13);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 14)(65, "h4");
    \u0275\u0275text(66, "\u{1F4A1} When to Use NgRx");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "ul")(68, "li");
    \u0275\u0275text(69, "Complex state management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "li");
    \u0275\u0275text(71, "State shared across many components");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "li");
    \u0275\u0275text(73, "Need for time-travel debugging");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "li");
    \u0275\u0275text(75, "Large teams needing structure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "li");
    \u0275\u0275text(77, "State persistence requirements");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(78, "div", 15)(79, "h4");
    \u0275\u0275text(80, "\u26A0\uFE0F When NOT to Use NgRx");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "ul")(82, "li");
    \u0275\u0275text(83, "Small applications with simple state");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "li");
    \u0275\u0275text(85, "Prototypes and POCs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "li");
    \u0275\u0275text(87, "When team unfamiliar with Redux patterns");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "li");
    \u0275\u0275text(89, "Local component state (use signals or ComponentStore)");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(63);
    \u0275\u0275textInterpolate(ctx_r0.introduction);
  }
}
function LearnNgrxComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "h3");
    \u0275\u0275text(2, "Store and State Management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " The Store holds the entire application state in a single immutable object tree. It's the single source of truth for your application data. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "pre")(6, "code", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 16)(9, "h4");
    \u0275\u0275text(10, "\u{1F3D7}\uFE0F State Architecture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "pre")(12, "code");
    \u0275\u0275text(13, "AppState\n  \u251C\u2500\u2500 users: UserState\n  \u2502   \u251C\u2500\u2500 entities: {}\n  \u2502   \u251C\u2500\u2500 ids: []\n  \u2502   \u251C\u2500\u2500 selectedId: null\n  \u2502   \u2514\u2500\u2500 loading: false\n  \u251C\u2500\u2500 products: ProductState\n  \u2514\u2500\u2500 auth: AuthState");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 17)(15, "h4");
    \u0275\u0275text(16, "\u{1F4A1} State Design Tips");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ul")(18, "li");
    \u0275\u0275text(19, "Keep state flat and normalized");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li");
    \u0275\u0275text(21, "Use Entity Adapter for collections");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "li");
    \u0275\u0275text(23, "Separate data from UI state");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li");
    \u0275\u0275text(25, "Store IDs, not references");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "li");
    \u0275\u0275text(27, "Use TypeScript interfaces");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.storeAndState);
  }
}
function LearnNgrxComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "h3");
    \u0275\u0275text(2, "Actions - Events that Describe Changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Actions are plain objects that represent events in your application. They're the only way to trigger state changes. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "pre")(6, "code", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 18)(9, "h4");
    \u0275\u0275text(10, "\u{1F4DD} Action Naming Convention");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "table")(12, "tr")(13, "th");
    \u0275\u0275text(14, "Pattern");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Example");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "tr")(20, "td");
    \u0275\u0275text(21, "[Source] Event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275text(23, "[Login Page] Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25, "User initiated");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "tr")(27, "td");
    \u0275\u0275text(28, "[API] Success");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30, "[Auth API] Login Success");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td");
    \u0275\u0275text(32, "API success");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "tr")(34, "td");
    \u0275\u0275text(35, "[API] Failure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "td");
    \u0275\u0275text(37, "[Auth API] Login Failure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "td");
    \u0275\u0275text(39, "API error");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.actions);
  }
}
function LearnNgrxComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "h3");
    \u0275\u0275text(2, "Reducers - Pure Functions that Update State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Reducers are pure functions that take current state and an action, and return new state. They must be synchronous and side-effect free. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "pre")(6, "code", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 19)(9, "h4");
    \u0275\u0275text(10, "\u{1F4CF} Reducer Rules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ul")(12, "li");
    \u0275\u0275text(13, "\u2705 Must be pure functions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "li");
    \u0275\u0275text(15, "\u2705 Always return new state (immutability)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li");
    \u0275\u0275text(17, "\u2705 No side effects (HTTP, localStorage, etc.)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "li");
    \u0275\u0275text(19, "\u2705 Handle all relevant actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li");
    \u0275\u0275text(21, "\u274C Never mutate state directly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "li");
    \u0275\u0275text(23, "\u274C No async operations");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.reducers);
  }
}
function LearnNgrxComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "h3");
    \u0275\u0275text(2, "Selectors - Query State Efficiently");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Selectors are pure functions for querying state. They're memoized for performance and composable for complex queries. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "pre")(6, "code", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 20)(9, "h4");
    \u0275\u0275text(10, "\u{1F3AF} Selector Benefits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ul")(12, "li");
    \u0275\u0275text(13, "\u{1F680} ");
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15, "Memoization:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Only recompute when inputs change");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "li");
    \u0275\u0275text(18, "\u{1F527} ");
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20, "Composition:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " Build complex from simple");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "li");
    \u0275\u0275text(23, "\u{1F9EA} ");
    \u0275\u0275elementStart(24, "strong");
    \u0275\u0275text(25, "Testable:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " Pure functions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "li");
    \u0275\u0275text(28, "\u{1F4DD} ");
    \u0275\u0275elementStart(29, "strong");
    \u0275\u0275text(30, "Type-safe:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Full TypeScript support");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "li");
    \u0275\u0275text(33, "\u{1F3A8} ");
    \u0275\u0275elementStart(34, "strong");
    \u0275\u0275text(35, "Reusable:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " Share across components");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.selectors);
  }
}
function LearnNgrxComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "h3");
    \u0275\u0275text(2, "Effects - Handle Side Effects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Effects handle async operations and side effects. They listen for actions, perform side effects (HTTP, localStorage), and dispatch new actions. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "pre")(6, "code", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 21)(9, "h4");
    \u0275\u0275text(10, "\u{1F527} Effect Operators Guide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "table")(12, "tr")(13, "th");
    \u0275\u0275text(14, "Operator");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Behavior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Use Case");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "tr")(20, "td");
    \u0275\u0275text(21, "switchMap");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275text(23, "Cancel previous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25, "Search, autocomplete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "tr")(27, "td");
    \u0275\u0275text(28, "mergeMap");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30, "Run in parallel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td");
    \u0275\u0275text(32, "Bulk operations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "tr")(34, "td");
    \u0275\u0275text(35, "concatMap");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "td");
    \u0275\u0275text(37, "Sequential");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "td");
    \u0275\u0275text(39, "Order matters");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "tr")(41, "td");
    \u0275\u0275text(42, "exhaustMap");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "td");
    \u0275\u0275text(44, "Ignore new");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "td");
    \u0275\u0275text(46, "Prevent duplicates");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.effects);
  }
}
function LearnNgrxComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "h3");
    \u0275\u0275text(2, "Entity Adapter - Manage Collections");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Entity Adapter provides pre-built functions for managing normalized collections. It handles common CRUD operations and provides memoized selectors. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "pre")(6, "code", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 22)(9, "h4");
    \u0275\u0275text(10, "\u{1F6E0}\uFE0F Entity Adapter Methods");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ul")(12, "li")(13, "strong");
    \u0275\u0275text(14, "Add:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " addOne, addMany, addAll");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "Set:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " setOne, setMany, setAll");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "Update:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " updateOne, updateMany");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li")(25, "strong");
    \u0275\u0275text(26, "Remove:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " removeOne, removeMany, removeAll");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "li")(29, "strong");
    \u0275\u0275text(30, "Upsert:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " upsertOne, upsertMany");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.entityAdapter);
  }
}
function LearnNgrxComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "h3");
    \u0275\u0275text(2, "Component Store - Local State Management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Component Store manages component-level state with less boilerplate. Perfect for local UI state that doesn't need to be global. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "pre")(6, "code", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 23)(9, "h4");
    \u0275\u0275text(10, "\u2696\uFE0F Global Store vs Component Store");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "table")(12, "tr")(13, "th");
    \u0275\u0275text(14, "Feature");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Global Store");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Component Store");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "tr")(20, "td");
    \u0275\u0275text(21, "Scope");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275text(23, "Application-wide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25, "Component-level");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "tr")(27, "td");
    \u0275\u0275text(28, "Boilerplate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30, "High");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td");
    \u0275\u0275text(32, "Low");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "tr")(34, "td");
    \u0275\u0275text(35, "Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "td");
    \u0275\u0275text(37, "Required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "td");
    \u0275\u0275text(39, "Optional");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "tr")(41, "td");
    \u0275\u0275text(42, "DevTools");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "td");
    \u0275\u0275text(44, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "td");
    \u0275\u0275text(46, "No");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "tr")(48, "td");
    \u0275\u0275text(49, "Use Case");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "td");
    \u0275\u0275text(51, "Shared state");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "td");
    \u0275\u0275text(53, "Local state");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.componentStore);
  }
}
function LearnNgrxComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "h3");
    \u0275\u0275text(2, "Signal Store - Modern State Management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Signal Store (NgRx 17+) combines signals with state management for a simpler, more reactive API with less boilerplate. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "pre")(6, "code", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 24)(9, "h4");
    \u0275\u0275text(10, "\u{1F504} NgRx Evolution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ul")(12, "li")(13, "strong");
    \u0275\u0275text(14, "Traditional:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Actions \u2192 Reducers \u2192 Selectors \u2192 Effects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "Component Store:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Updaters \u2192 Selectors \u2192 Effects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "Signal Store:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " State \u2192 Computed \u2192 Methods (simplest!)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 17)(25, "h4");
    \u0275\u0275text(26, "\u{1F4A1} When to Use Signal Store");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "ul")(28, "li");
    \u0275\u0275text(29, "New Angular 16+ projects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "li");
    \u0275\u0275text(31, "Want simpler API than traditional store");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "li");
    \u0275\u0275text(33, "Embracing signals for reactivity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "li");
    \u0275\u0275text(35, "Component or feature state");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.signalStore);
  }
}
function LearnNgrxComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "h3");
    \u0275\u0275text(2, "NgRx Best Practices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "pre")(4, "code", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 25)(7, "div", 26)(8, "h4");
    \u0275\u0275text(9, "\u2705 DO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ul")(11, "li");
    \u0275\u0275text(12, "Use OnPush change detection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "li");
    \u0275\u0275text(14, "Normalize state shape");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li");
    \u0275\u0275text(16, "Keep reducers pure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "li");
    \u0275\u0275text(18, "Handle all errors in effects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "li");
    \u0275\u0275text(20, "Use Entity Adapter for collections");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "li");
    \u0275\u0275text(22, "Write comprehensive tests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "li");
    \u0275\u0275text(24, "Use Redux DevTools");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 27)(26, "h4");
    \u0275\u0275text(27, "\u274C DON'T");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ul")(29, "li");
    \u0275\u0275text(30, "Mutate state directly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "li");
    \u0275\u0275text(32, "Put logic in actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "li");
    \u0275\u0275text(34, "Dispatch in reducers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "li");
    \u0275\u0275text(36, "Use store for all state");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "li");
    \u0275\u0275text(38, "Forget error handling");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "li");
    \u0275\u0275text(40, "Nest state deeply");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "li");
    \u0275\u0275text(42, "Skip testing");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.bestPractices);
  }
}
var LearnNgrxComponent = class _LearnNgrxComponent {
  constructor() {
    this.introduction = `// NgRx - Reactive State Management for Angular
// Built on Redux pattern with RxJS integration

// Core Principles:
// 1. Single Source of Truth - One immutable state tree
// 2. State is Read-Only - Changes only through actions
// 3. Changes via Pure Functions - Reducers are predictable
// 4. Observable State - Subscribe to state changes

// Installation
npm install @ngrx/store @ngrx/effects @ngrx/entity @ngrx/store-devtools

// Basic Flow:
Component \u2192 dispatches \u2192 Action \u2192 processed by \u2192 Reducer \u2192 updates \u2192 Store
                           \u2193
                        Effect (side effects)
                           \u2193
                     dispatches new Action`;
    this.storeAndState = `// Store and State Setup
import { createReducer, createAction, on } from '@ngrx/store';
import { provideStore, Store } from '@ngrx/store';

// 1. Define State Interface
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserState {
  users: User[];
  selectedUser: User | null;
  loading: boolean;
  error: string | null;
}

export const initialState: UserState = {
  users: [],
  selectedUser: null,
  loading: false,
  error: null
};

// 2. App State (combine all feature states)
export interface AppState {
  users: UserState;
  // other features...
}

// 3. Bootstrap Store
// main.ts
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({
      users: usersReducer
    })
  ]
});

// 4. Inject Store in Component
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user-list',
  template: \`
    <div *ngFor="let user of users$ | async">
      {{ user.name }}
    </div>
  \`
})
export class UserListComponent {
  users$ = this.store.select(selectAllUsers);
  
  constructor(private store: Store<AppState>) {}
  
  loadUsers() {
    this.store.dispatch(loadUsers());
  }
}`;
    this.actions = `// Actions - Events that Describe State Changes
import { createAction, props } from '@ngrx/store';

// 1. Simple Actions (no payload)
export const loadUsers = createAction('[User List] Load Users');
export const clearUsers = createAction('[User List] Clear Users');

// 2. Actions with Payload
export const loadUsersSuccess = createAction(
  '[User API] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[User API] Load Users Failure',
  props<{ error: string }>()
);

export const selectUser = createAction(
  '[User List] Select User',
  props<{ userId: number }>()
);

export const updateUser = createAction(
  '[User Edit] Update User',
  props<{ user: User }>()
);

export const deleteUser = createAction(
  '[User List] Delete User',
  props<{ userId: number }>()
);

// 3. Action Naming Convention
// [Source] Event Description
// Source: Where action is dispatched from
// Event: What happened

// Examples:
// [Login Page] Login
// [Auth API] Login Success
// [Auth API] Login Failure
// [Product List] Load Products
// [Product API] Load Products Success

// 4. Dispatching Actions
export class UserComponent {
  constructor(private store: Store) {}
  
  onLoadUsers() {
    this.store.dispatch(loadUsers());
  }
  
  onSelectUser(userId: number) {
    this.store.dispatch(selectUser({ userId }));
  }
  
  onDeleteUser(userId: number) {
    this.store.dispatch(deleteUser({ userId }));
  }
}`;
    this.reducers = `// Reducers - Pure Functions that Update State
import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export const usersReducer = createReducer(
  initialState,
  
  // Load Users
  on(UserActions.loadUsers, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  
  on(UserActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
    error: null
  })),
  
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  
  // Select User
  on(UserActions.selectUser, (state, { userId }) => ({
    ...state,
    selectedUser: state.users.find(u => u.id === userId) || null
  })),
  
  // Update User
  on(UserActions.updateUser, (state, { user }) => ({
    ...state,
    users: state.users.map(u => u.id === user.id ? user : u),
    selectedUser: state.selectedUser?.id === user.id ? user : state.selectedUser
  })),
  
  // Delete User
  on(UserActions.deleteUser, (state, { userId }) => ({
    ...state,
    users: state.users.filter(u => u.id !== userId),
    selectedUser: state.selectedUser?.id === userId ? null : state.selectedUser
  })),
  
  // Clear Users
  on(UserActions.clearUsers, () => initialState)
);

// Reducer Rules:
// \u2705 Pure functions - no side effects
// \u2705 Immutable updates - always return new state
// \u2705 Don't mutate state directly
// \u2705 Handle all relevant actions

// \u274C Bad: Mutating state
on(UserActions.addUser, (state, { user }) => {
  state.users.push(user); // Mutation!
  return state;
});

// \u2705 Good: Creating new state
on(UserActions.addUser, (state, { user }) => ({
  ...state,
  users: [...state.users, user] // New array
}));`;
    this.selectors = `// Selectors - Query State Slices
import { createSelector, createFeatureSelector } from '@ngrx/store';

// 1. Feature Selector (top-level state slice)
export const selectUserState = createFeatureSelector<UserState>('users');

// 2. Basic Selectors
export const selectAllUsers = createSelector(
  selectUserState,
  (state) => state.users
);

export const selectSelectedUser = createSelector(
  selectUserState,
  (state) => state.selectedUser
);

export const selectUsersLoading = createSelector(
  selectUserState,
  (state) => state.loading
);

export const selectUsersError = createSelector(
  selectUserState,
  (state) => state.error
);

// 3. Composed Selectors (memoized)
export const selectUserById = (userId: number) => createSelector(
  selectAllUsers,
  (users) => users.find(u => u.id === userId)
);

export const selectActiveUsers = createSelector(
  selectAllUsers,
  (users) => users.filter(u => u.active)
);

export const selectUserCount = createSelector(
  selectAllUsers,
  (users) => users.length
);

// 4. Multi-State Selectors
export const selectUsersWithPosts = createSelector(
  selectAllUsers,
  selectAllPosts, // from another feature
  (users, posts) => users.map(user => ({
    ...user,
    posts: posts.filter(p => p.userId === user.id)
  }))
);

// 5. Props Selectors
export const selectUsersByRole = createSelector(
  selectAllUsers,
  (users: User[], props: { role: string }) => 
    users.filter(u => u.role === props.role)
);

// Usage in Component
@Component({
  template: \`
    <div *ngFor="let user of users$ | async">{{ user.name }}</div>
    <div>{{ selectedUser$ | async | json }}</div>
    <div *ngIf="loading$ | async">Loading...</div>
    <div *ngIf="error$ | async as error">{{ error }}</div>
  \`
})
export class UserListComponent {
  users$ = this.store.select(selectAllUsers);
  selectedUser$ = this.store.select(selectSelectedUser);
  loading$ = this.store.select(selectUsersLoading);
  error$ = this.store.select(selectUsersError);
  admins$ = this.store.select(selectUsersByRole, { role: 'admin' });
  
  constructor(private store: Store) {}
}

// Selector Benefits:
// \u2705 Memoization - Only recompute when inputs change
// \u2705 Composition - Build complex selectors from simple ones
// \u2705 Testable - Pure functions
// \u2705 Type-safe - TypeScript support`;
    this.effects = `// Effects - Handle Side Effects
import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private userService = inject(UserService);
  private router = inject(Router);
  
  // 1. Load Users Effect
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers), // Listen for this action
      switchMap(() =>
        this.userService.getUsers().pipe( // HTTP call
          map(users => UserActions.loadUsersSuccess({ users })),
          catchError(error => 
            of(UserActions.loadUsersFailure({ error: error.message }))
          )
        )
      )
    )
  );
  
  // 2. Save User Effect
  saveUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateUser),
      switchMap(({ user }) =>
        this.userService.updateUser(user).pipe(
          map(updatedUser => UserActions.updateUserSuccess({ user: updatedUser })),
          catchError(error => of(UserActions.updateUserFailure({ error })))
        )
      )
    )
  );
  
  // 3. Delete User Effect
  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.deleteUser),
      switchMap(({ userId }) =>
        this.userService.deleteUser(userId).pipe(
          map(() => UserActions.deleteUserSuccess({ userId })),
          catchError(error => of(UserActions.deleteUserFailure({ error })))
        )
      )
    )
  );
  
  // 4. Non-dispatching Effect (side effects only)
  logUserActions$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          UserActions.loadUsersSuccess,
          UserActions.updateUserSuccess,
          UserActions.deleteUserSuccess
        ),
        tap(action => console.log('User action:', action))
      ),
    { dispatch: false } // Don't dispatch new action
  );
  
  // 5. Navigation Effect
  redirectAfterDelete$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.deleteUserSuccess),
        tap(() => this.router.navigate(['/users']))
      ),
    { dispatch: false }
  );
  
  // 6. Notification Effect
  showNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.updateUserSuccess),
        tap(() => this.notificationService.show('User updated successfully'))
      ),
    { dispatch: false }
  );
}

// Register Effects
// main.ts
import { provideEffects } from '@ngrx/effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ users: usersReducer }),
    provideEffects([UserEffects])
  ]
});

// Effect Patterns:
// \u2705 Use switchMap for cancellable requests (search, autocomplete)
// \u2705 Use mergeMap for parallel requests (bulk operations)
// \u2705 Use concatMap for sequential requests (order matters)
// \u2705 Use exhaustMap for blocking requests (prevent duplicates)
// \u2705 Always handle errors with catchError
// \u2705 Return actions, not data`;
    this.entityAdapter = `// Entity Adapter - Manage Collections
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

// 1. Define Entity State
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserState extends EntityState<User> {
  selectedUserId: number | null;
  loading: boolean;
  error: string | null;
}

// 2. Create Entity Adapter
export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: (user: User) => user.id, // Default: entity.id
  sortComparer: (a, b) => a.name.localeCompare(b.name) // Optional sorting
});

// 3. Initial State
export const initialState: UserState = userAdapter.getInitialState({
  selectedUserId: null,
  loading: false,
  error: null
});

// 4. Reducer with Entity Adapter
export const usersReducer = createReducer(
  initialState,
  
  on(UserActions.loadUsersSuccess, (state, { users }) =>
    userAdapter.setAll(users, { ...state, loading: false })
  ),
  
  on(UserActions.addUser, (state, { user }) =>
    userAdapter.addOne(user, state)
  ),
  
  on(UserActions.updateUser, (state, { user }) =>
    userAdapter.updateOne(
      { id: user.id, changes: user },
      state
    )
  ),
  
  on(UserActions.deleteUser, (state, { userId }) =>
    userAdapter.removeOne(userId, state)
  ),
  
  on(UserActions.addUsers, (state, { users }) =>
    userAdapter.addMany(users, state)
  ),
  
  on(UserActions.clearUsers, (state) =>
    userAdapter.removeAll(state)
  )
);

// 5. Entity Selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = userAdapter.getSelectors();

export const selectUserState = createFeatureSelector<UserState>('users');

export const selectAllUsers = createSelector(
  selectUserState,
  selectAll
);

export const selectUserEntities = createSelector(
  selectUserState,
  selectEntities
);

export const selectUserIds = createSelector(
  selectUserState,
  selectIds
);

export const selectUserTotal = createSelector(
  selectUserState,
  selectTotal
);

export const selectSelectedUser = createSelector(
  selectUserState,
  selectUserEntities,
  (state, entities) => 
    state.selectedUserId ? entities[state.selectedUserId] : null
);

// Entity Adapter Methods:
// addOne, addMany, addAll
// setOne, setMany, setAll
// removeOne, removeMany, removeAll
// updateOne, updateMany
// upsertOne, upsertMany
// map

// Benefits:
// \u2705 Normalized state (entities by ID)
// \u2705 Built-in CRUD operations
// \u2705 Performance optimizations
// \u2705 Consistent patterns`;
    this.componentStore = `// Component Store - Local State Management
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { tap, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

// 1. Define State Interface
interface TodoState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
  loading: boolean;
}

// 2. Create Component Store
@Injectable()
export class TodoStore extends ComponentStore<TodoState> {
  
  constructor(private todoService: TodoService) {
    // Initialize state
    super({
      todos: [],
      filter: 'all',
      loading: false
    });
  }
  
  // 3. Selectors
  readonly todos$ = this.select(state => state.todos);
  readonly filter$ = this.select(state => state.filter);
  readonly loading$ = this.select(state => state.loading);
  
  readonly filteredTodos$ = this.select(
    this.todos$,
    this.filter$,
    (todos, filter) => {
      switch (filter) {
        case 'active': return todos.filter(t => !t.completed);
        case 'completed': return todos.filter(t => t.completed);
        default: return todos;
      }
    }
  );
  
  // 4. Updaters (synchronous state updates)
  readonly addTodo = this.updater((state, todo: Todo) => ({
    ...state,
    todos: [...state.todos, todo]
  }));
  
  readonly removeTodo = this.updater((state, id: number) => ({
    ...state,
    todos: state.todos.filter(t => t.id !== id)
  }));
  
  readonly toggleTodo = this.updater((state, id: number) => ({
    ...state,
    todos: state.todos.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    )
  }));
  
  readonly setFilter = this.updater((state, filter: TodoState['filter']) => ({
    ...state,
    filter
  }));
  
  // 5. Effects (asynchronous operations)
  readonly loadTodos = this.effect<void>(trigger$ =>
    trigger$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap(() =>
        this.todoService.getTodos().pipe(
          tap(todos => this.patchState({ todos, loading: false })),
          catchError(() => {
            this.patchState({ loading: false });
            return of([]);
          })
        )
      )
    )
  );
  
  readonly saveTodo = this.effect<Todo>(todo$ =>
    todo$.pipe(
      switchMap(todo =>
        this.todoService.saveTodo(todo).pipe(
          tap(savedTodo => this.addTodo(savedTodo))
        )
      )
    )
  );
}

// 6. Use in Component
@Component({
  selector: 'app-todo-list',
  providers: [TodoStore], // Provide at component level
  template: \`
    <div *ngFor="let todo of todos$ | async">
      <input type="checkbox" 
             [checked]="todo.completed"
             (change)="store.toggleTodo(todo.id)">
      {{ todo.title }}
      <button (click)="store.removeTodo(todo.id)">Delete</button>
    </div>
    <button (click)="store.setFilter('all')">All</button>
    <button (click)="store.setFilter('active')">Active</button>
    <button (click)="store.setFilter('completed')">Completed</button>
  \`
})
export class TodoListComponent implements OnInit {
  todos$ = this.store.filteredTodos$;
  
  constructor(readonly store: TodoStore) {}
  
  ngOnInit() {
    this.store.loadTodos();
  }
}

// Component Store Benefits:
// \u2705 Component-scoped state
// \u2705 Automatic cleanup on component destroy
// \u2705 Less boilerplate than global store
// \u2705 Perfect for local UI state
// \u2705 Can be combined with global store

// When to Use:
// - Component-specific state
// - Form state
// - UI state (modals, accordions)
// - Local data caching`;
    this.signalStore = `// Signal Store - Modern State Management (NgRx 17+)
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { computed } from '@angular/core';

// 1. Create Signal Store
export const TodoStore = signalStore(
  { providedIn: 'root' },
  
  // State
  withState({
    todos: [] as Todo[],
    filter: 'all' as 'all' | 'active' | 'completed',
    loading: false
  }),
  
  // Computed (derived state)
  withComputed((store) => ({
    filteredTodos: computed(() => {
      const todos = store.todos();
      const filter = store.filter();
      
      switch (filter) {
        case 'active': return todos.filter(t => !t.completed);
        case 'completed': return todos.filter(t => t.completed);
        default: return todos;
      }
    }),
    
    activeCount: computed(() =>
      store.todos().filter(t => !t.completed).length
    ),
    
    completedCount: computed(() =>
      store.todos().filter(t => t.completed).length
    )
  })),
  
  // Methods
  withMethods((store, todoService = inject(TodoService)) => ({
    async loadTodos() {
      patchState(store, { loading: true });
      try {
        const todos = await todoService.getTodos();
        patchState(store, { todos, loading: false });
      } catch (error) {
        patchState(store, { loading: false });
      }
    },
    
    addTodo(todo: Todo) {
      patchState(store, {
        todos: [...store.todos(), todo]
      });
    },
    
    removeTodo(id: number) {
      patchState(store, {
        todos: store.todos().filter(t => t.id !== id)
      });
    },
    
    toggleTodo(id: number) {
      patchState(store, {
        todos: store.todos().map(t =>
          t.id === id ? { ...t, completed: !t.completed } : t
        )
      });
    },
    
    setFilter(filter: 'all' | 'active' | 'completed') {
      patchState(store, { filter });
    }
  }))
);

// 2. Use in Component
@Component({
  selector: 'app-todo-list',
  template: \`
    <div *ngFor="let todo of store.filteredTodos()">
      <input type="checkbox" 
             [checked]="todo.completed"
             (change)="store.toggleTodo(todo.id)">
      {{ todo.title }}
    </div>
    <p>Active: {{ store.activeCount() }}</p>
    <p>Completed: {{ store.completedCount() }}</p>
  \`
})
export class TodoListComponent {
  readonly store = inject(TodoStore);
  
  ngOnInit() {
    this.store.loadTodos();
  }
}

// Signal Store Benefits:
// \u2705 Simple API - Less boilerplate
// \u2705 Type-safe - Full TypeScript support
// \u2705 Reactive - Built on signals
// \u2705 Composable - Mix and match features
// \u2705 Performance - Fine-grained reactivity
// \u2705 DevTools - Works with Redux DevTools

// Comparison:
// Traditional Store: Actions \u2192 Reducers \u2192 Selectors \u2192 Effects
// Signal Store: State \u2192 Computed \u2192 Methods (simpler!)`;
    this.bestPractices = `// NgRx Best Practices

// 1. Folder Structure
src/app/state/
  \u251C\u2500\u2500 users/
  \u2502   \u251C\u2500\u2500 users.actions.ts
  \u2502   \u251C\u2500\u2500 users.reducer.ts
  \u2502   \u251C\u2500\u2500 users.selectors.ts
  \u2502   \u251C\u2500\u2500 users.effects.ts
  \u2502   \u2514\u2500\u2500 index.ts (barrel export)
  \u251C\u2500\u2500 products/
  \u2514\u2500\u2500 app.state.ts

// 2. Action Naming
// \u2705 Good: [Source] Event
export const loadUsers = createAction('[User List] Load Users');
export const loadUsersSuccess = createAction('[User API] Load Users Success');

// \u274C Bad: Generic names
export const load = createAction('load');
export const success = createAction('success');

// 3. State Shape
// \u2705 Good: Normalized and flat
interface UsersState {
  ids: number[];
  entities: { [id: number]: User };
  selectedId: number | null;
}

// \u274C Bad: Nested and denormalized
interface UsersState {
  users: {
    user: User;
    posts: Post[];
    comments: Comment[];
  }[];
}

// 4. Selectors
// \u2705 Good: Memoized selectors
export const selectUserById = (id: number) => createSelector(
  selectAllUsers,
  (users) => users.find(u => u.id === id)
);

// \u274C Bad: Inline logic in components
this.user = this.users.find(u => u.id === this.userId);

// 5. Effects
// \u2705 Good: Handle all cases
loadUsers$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadUsers),
    switchMap(() =>
      this.service.getUsers().pipe(
        map(users => loadUsersSuccess({ users })),
        catchError(error => of(loadUsersFailure({ error })))
      )
    )
  )
);

// \u274C Bad: No error handling
loadUsers$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadUsers),
    switchMap(() => this.service.getUsers()),
    map(users => loadUsersSuccess({ users }))
  )
);

// 6. Component Design
// \u2705 Good: Smart/Container components
@Component({
  selector: 'app-user-list-container',
  template: \`
    <app-user-list
      [users]="users$ | async"
      [loading]="loading$ | async"
      (loadUsers)="onLoadUsers()"
      (selectUser)="onSelectUser($event)">
    </app-user-list>
  \`
})
export class UserListContainerComponent {
  users$ = this.store.select(selectAllUsers);
  loading$ = this.store.select(selectUsersLoading);
  
  onLoadUsers() {
    this.store.dispatch(loadUsers());
  }
  
  onSelectUser(userId: number) {
    this.store.dispatch(selectUser({ userId }));
  }
}

// \u2705 Good: Presentational/Dumb component
@Component({
  selector: 'app-user-list',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  @Input() users: User[];
  @Input() loading: boolean;
  @Output() loadUsers = new EventEmitter<void>();
  @Output() selectUser = new EventEmitter<number>();
}

// 7. Testing
// \u2705 Good: Test each piece independently
describe('usersReducer', () => {
  it('should add user', () => {
    const user = { id: 1, name: 'Test' };
    const action = addUser({ user });
    const state = usersReducer(initialState, action);
    
    expect(state.users).toContain(user);
  });
});

// 8. Performance
// \u2705 Use Entity Adapter for collections
// \u2705 Use OnPush change detection
// \u2705 Memoize selectors
// \u2705 Avoid selecting entire state
// \u2705 Use trackBy with *ngFor

// 9. Don'ts
// \u274C Don't mutate state
// \u274C Don't put logic in actions
// \u274C Don't dispatch actions in reducers
// \u274C Don't subscribe to store in services
// \u274C Don't use store for all state (local state is OK)

// 10. Do's
// \u2705 Keep reducers pure
// \u2705 Handle errors in effects
// \u2705 Use strong typing
// \u2705 Test thoroughly
// \u2705 Use Redux DevTools`;
  }
  ngAfterViewChecked() {
    import_prismjs.default.highlightAll();
  }
  static {
    this.\u0275fac = function LearnNgrxComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LearnNgrxComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LearnNgrxComponent, selectors: [["app-learn-ngrx"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 0, consts: [[1, "header"], ["label", "Introduction"], ["matTabContent", ""], ["label", "Store & State"], ["label", "Actions"], ["label", "Reducers"], ["label", "Selectors"], ["label", "Effects"], ["label", "Entity Adapter"], ["label", "Component Store"], ["label", "Signal Store"], ["label", "Best Practices"], [1, "tab-content"], [1, "language-typescript"], [1, "info-box"], [1, "warning-box"], [1, "architecture-diagram"], [1, "tip-box"], [1, "naming-convention"], [1, "rules-box"], [1, "benefits-box"], [1, "operator-guide"], [1, "methods-box"], [1, "comparison-box"], [1, "evolution-box"], [1, "best-practices-grid"], [1, "do-box"], [1, "dont-box"]], template: function LearnNgrxComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1, "NgRx - State Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "label");
        \u0275\u0275text(3, "NgRx is a reactive state management library for Angular, inspired by Redux. It provides a predictable state container with RxJS integration.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "mat-tab-group")(5, "mat-tab", 1);
        \u0275\u0275template(6, LearnNgrxComponent_ng_template_6_Template, 90, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-tab", 3);
        \u0275\u0275template(8, LearnNgrxComponent_ng_template_8_Template, 28, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "mat-tab", 4);
        \u0275\u0275template(10, LearnNgrxComponent_ng_template_10_Template, 40, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-tab", 5);
        \u0275\u0275template(12, LearnNgrxComponent_ng_template_12_Template, 24, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-tab", 6);
        \u0275\u0275template(14, LearnNgrxComponent_ng_template_14_Template, 37, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-tab", 7);
        \u0275\u0275template(16, LearnNgrxComponent_ng_template_16_Template, 47, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "mat-tab", 8);
        \u0275\u0275template(18, LearnNgrxComponent_ng_template_18_Template, 32, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "mat-tab", 9);
        \u0275\u0275template(20, LearnNgrxComponent_ng_template_20_Template, 54, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "mat-tab", 10);
        \u0275\u0275template(22, LearnNgrxComponent_ng_template_22_Template, 36, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "mat-tab", 11);
        \u0275\u0275template(24, LearnNgrxComponent_ng_template_24_Template, 43, 1, "ng-template", 2);
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [MatTabsModule, MatTabContent, MatTab, MatTabGroup], styles: ['\n\n.header[_ngcontent-%COMP%] {\n  color: #dd0031;\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.tab-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #dd0031;\n  margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n.tab-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #444;\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n}\n.tab-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.tab-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  line-height: 1.8;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\n.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 15px;\n  border-radius: 5px;\n  overflow-x: auto;\n  margin: 1rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 1rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 12px;\n  text-align: left;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  font-weight: 600;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fafafa;\n}\n.info-box[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.info-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1976d2;\n}\n.tip-box[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  border-left: 4px solid #4caf50;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.tip-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #2e7d32;\n}\n.warning-box[_ngcontent-%COMP%] {\n  background-color: #fff3e0;\n  border-left: 4px solid #ff9800;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.warning-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #f57c00;\n}\n.architecture-diagram[_ngcontent-%COMP%] {\n  background-color: #f3e5f5;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.architecture-diagram[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #7b1fa2;\n  margin-top: 0;\n}\n.architecture-diagram[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid #e0e0e0;\n}\n.naming-convention[_ngcontent-%COMP%] {\n  background-color: #e0f2f1;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.naming-convention[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #00796b;\n  margin-top: 0;\n}\n.rules-box[_ngcontent-%COMP%] {\n  background-color: #e8eaf6;\n  border-left: 4px solid #3f51b5;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.rules-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #303f9f;\n}\n.benefits-box[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  border-left: 4px solid #4caf50;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.benefits-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #2e7d32;\n}\n.operator-guide[_ngcontent-%COMP%] {\n  background-color: #f3e5f5;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.operator-guide[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #7b1fa2;\n  margin-top: 0;\n}\n.methods-box[_ngcontent-%COMP%] {\n  background-color: #e0f2f1;\n  border-left: 4px solid #009688;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.methods-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #00796b;\n}\n.comparison-box[_ngcontent-%COMP%] {\n  background-color: #fff9c4;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.comparison-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #f57f17;\n  margin-top: 0;\n}\n.evolution-box[_ngcontent-%COMP%] {\n  background-color: #e1bee7;\n  border-left: 4px solid #9c27b0;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.evolution-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #6a1b9a;\n}\n.best-practices-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin: 20px 0;\n}\n.best-practices-grid[_ngcontent-%COMP%]   .do-box[_ngcontent-%COMP%], \n.best-practices-grid[_ngcontent-%COMP%]   .dont-box[_ngcontent-%COMP%] {\n  padding: 15px;\n  border-radius: 4px;\n}\n.best-practices-grid[_ngcontent-%COMP%]   .do-box[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  border-left: 4px solid #4caf50;\n}\n.best-practices-grid[_ngcontent-%COMP%]   .do-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  margin-top: 0;\n}\n.best-practices-grid[_ngcontent-%COMP%]   .dont-box[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  border-left: 4px solid #f44336;\n}\n.best-practices-grid[_ngcontent-%COMP%]   .dont-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #c62828;\n  margin-top: 0;\n}\n/*# sourceMappingURL=learn-ngrx.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LearnNgrxComponent, { className: "LearnNgrxComponent", filePath: "src\\app\\components\\angular\\learn-ngrx\\learn-ngrx.component.ts", lineNumber: 13 });
})();
export {
  LearnNgrxComponent
};
//# sourceMappingURL=chunk-3X2HKXRJ.js.map
