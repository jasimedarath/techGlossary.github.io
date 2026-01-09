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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-N7AAI6XN.js";

// src/app/components/angular/learn-services/learn-services.component.ts
var Prism = __toESM(require_prism());
var _c0 = ["codeElement"];
function LearnServicesComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre")(1, "code", 6, 0);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.code);
  }
}
function LearnServicesComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3")(2, "b");
    \u0275\u0275text(3, "providedIn: 'root'");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ul")(5, "li");
    \u0275\u0275text(6, "This registers the service with the root injector, making it a singleton and available application-wide.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "pre")(8, "code", 6, 0);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div")(12, "h3")(13, "b");
    \u0275\u0275text(14, "NgModule Providers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "ul")(16, "li");
    \u0275\u0275text(17, "Register the service in the providers array of an Angular module.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "pre")(19, "code", 6, 0);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div")(23, "h3")(24, "b");
    \u0275\u0275text(25, "Component Providers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "ul")(27, "li");
    \u0275\u0275text(28, "Register the service in the providers array of a component, creating a new instance for each component.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "pre")(30, "code", 6, 0);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.root);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.module);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.component);
  }
}
function LearnServicesComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3")(2, "b");
    \u0275\u0275text(3, "Dependency Injection");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ul")(5, "li");
    \u0275\u0275text(6, "Constructor Injection: Inject services into components, directives, or other services via the constructor.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "pre")(8, "code", 6, 0);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div")(12, "h3")(13, "b");
    \u0275\u0275text(14, "NgModule Providers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "ul")(16, "li");
    \u0275\u0275text(17, "Injector Hierarchy: Angular's DI system is hierarchical, meaning child injectors inherit providers from parent injectors. This allows different instances of services to be created at different levels of the application.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "pre")(19, "code", 6, 0);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div")(23, "h3")(24, "b");
    \u0275\u0275text(25, "Service Scope");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "ul")(27, "li");
    \u0275\u0275text(28, "Singleton Services: Provided at the root level or a module level, ensuring a single instance throughout the application.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "li");
    \u0275\u0275text(30, "Scoped Services: Provided at the component level, creating a new instance for each component and its child components.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.injection);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.hierarchicalInjection);
  }
}
var LearnServicesComponent = class _LearnServicesComponent {
  constructor() {
    this.code = `
  import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root'
  })
  export class DataService {
    private data: any[] = [];

    constructor() { }

    getData(): any[] {
      return this.data;
    }

    addData(item: any): void {
      this.data.push(item);
    }

    clearData(): void {
      this.data = [];
    }
  }
  `;
    this.root = `
  @Injectable({
  providedIn: 'root'
  })
  export class MyService { }
  `;
    this.module = `@NgModule({
  providers: [MyService]
  })
  export class MyModule { }
  `;
    this.component = `
  @Component({
  providers: [MyService]
  })
  export class MyComponent { }
  `;
    this.injection = `export class MyComponent {
    constructor(private myService: MyService) {}

    ngOnInit() {
      console.log(this.myService.getData());
    }
  }
  `;
    this.hierarchicalInjection = ` @Component({
    providers: [MyService]
  })
  export class ParentComponent {
    constructor(private myService: MyService) { }
  }

  @Component({
    selector: 'app-child',
    template: '<p>Child Component</p>'
  })
  export class ChildComponent {
    constructor(private myService: MyService) { }
  }
  `;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function LearnServicesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LearnServicesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LearnServicesComponent, selectors: [["app-learn-services"]], viewQuery: function LearnServicesComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.codeElement = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 0, consts: [["codeElement", ""], [1, "header"], ["label", "Syntax Reference"], ["matTabContent", ""], ["label", "Providing Services"], ["label", "Other Details"], [1, "language-typescript"]], template: function LearnServicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 1);
        \u0275\u0275text(1, "Services");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "label")(3, "b");
        \u0275\u0275text(4, "Definition");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, ": A service is a class with a narrow, well-defined purpose. It provides functionality that can be used across multiple components and modules.");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "br");
        \u0275\u0275elementStart(7, "label")(8, "b");
        \u0275\u0275text(9, "Usage");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, ": Services are typically used for tasks such as fetching data from a server, logging, validating user input, and any other non-UI related tasks.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-tab-group")(12, "mat-tab", 2);
        \u0275\u0275template(13, LearnServicesComponent_ng_template_13_Template, 4, 1, "ng-template", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "mat-tab", 4);
        \u0275\u0275template(15, LearnServicesComponent_ng_template_15_Template, 33, 3, "ng-template", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "mat-tab", 5);
        \u0275\u0275template(17, LearnServicesComponent_ng_template_17_Template, 31, 2, "ng-template", 3);
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [MatTabsModule, MatTabContent, MatTab, MatTabGroup] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LearnServicesComponent, { className: "LearnServicesComponent", filePath: "src\\app\\components\\angular\\learn-services\\learn-services.component.ts", lineNumber: 13 });
})();
export {
  LearnServicesComponent
};
//# sourceMappingURL=chunk-EEFCEWPD.js.map
