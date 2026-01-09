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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-N7AAI6XN.js";

// src/app/components/angular/learn-module/learn-module.component.ts
var Prism = __toESM(require_prism());
var _c0 = ["codeElement"];
function LearnModuleComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre")(1, "code", 8, 0);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.code);
  }
}
function LearnModuleComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre")(1, "code", 8, 0);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "h3")(6, "b");
    \u0275\u0275text(7, "declarations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ul")(9, "li");
    \u0275\u0275text(10, "This array is used to declare components, directives, and pipes that belong to the module.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "li");
    \u0275\u0275text(12, "Angular needs to know about these declarations so it can recognize and use them in templates.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div")(14, "h3")(15, "b");
    \u0275\u0275text(16, "imports");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "ul")(18, "li");
    \u0275\u0275text(19, "This array is used to import other modules that export components, directives, and pipes needed by the components in this module.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li");
    \u0275\u0275text(21, "By importing a module, all the declared components, directives, and pipes of the imported module become available to this module.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div")(23, "h3")(24, "b");
    \u0275\u0275text(25, "providers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "ul")(27, "li");
    \u0275\u0275text(28, "This array is used to define the services that the injector will provide.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "li");
    \u0275\u0275text(30, "These services can be injected into components, directives, and other services within the module.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div")(32, "h3")(33, "b");
    \u0275\u0275text(34, "bootstrap");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "ul")(36, "li");
    \u0275\u0275text(37, "This array is used to specify the root component that Angular should bootstrap when the application is started.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "li");
    \u0275\u0275text(39, "Typically, this is only used in the root module (e.g., AppModule).");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div")(41, "h3")(42, "b");
    \u0275\u0275text(43, "exports");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "ul")(45, "li");
    \u0275\u0275text(46, "Specifies a set of components, directives, and pipes that can be used in the templates of other modules.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div")(48, "h3")(49, "b");
    \u0275\u0275text(50, "entryComponents");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "ul")(52, "li");
    \u0275\u0275text(53, "Specifies a set of components that are compiled when the module is defined, rather than when they are referenced in a template.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "li");
    \u0275\u0275text(55, "Commonly used for dynamically loading components.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div")(57, "h3")(58, "b");
    \u0275\u0275text(59, "schemas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "ul")(61, "li");
    \u0275\u0275text(62, "Specifies a set of schemas that declare elements to be recognized by the Angular compiler.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "div")(64, "h3")(65, "b");
    \u0275\u0275text(66, "id");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "ul")(68, "li");
    \u0275\u0275text(69, "Provides a unique identifier for the module, useful for debugging or analytics.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.codeExtras);
  }
}
function LearnModuleComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3")(2, "b");
    \u0275\u0275text(3, "Root Module");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ul")(5, "li");
    \u0275\u0275text(6, "The main module that bootstraps the angular application.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div")(8, "h3")(9, "b");
    \u0275\u0275text(10, "Feature Modules");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "ul")(12, "li");
    \u0275\u0275text(13, "Organize an application into foused areas of functionality.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div")(15, "h3")(16, "b");
    \u0275\u0275text(17, "Shared Modules");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "ul")(19, "li");
    \u0275\u0275text(20, "Contain common directives,pipes and components needed across multiple modules.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div")(22, "h3")(23, "b");
    \u0275\u0275text(24, "Service Modules");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "ul")(26, "li");
    \u0275\u0275text(27, "Contain and provide services that are used across multiple application.");
    \u0275\u0275elementEnd()()();
  }
}
function LearnModuleComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3")(2, "b");
    \u0275\u0275text(3, "Avoid Circular Dependencies");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ul")(5, "li");
    \u0275\u0275text(6, "Ensure modules don't depend on each other in a circular manner.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div")(8, "h3")(9, "b");
    \u0275\u0275text(10, "Lazy Loading");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "ul")(12, "li");
    \u0275\u0275text(13, "Load feature modules asynchronously to improve performance");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div")(15, "h3")(16, "b");
    \u0275\u0275text(17, "Shared Modules");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "ul")(19, "li");
    \u0275\u0275text(20, "Use shared modules for common components,directives and pipes.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div")(22, "h3")(23, "b");
    \u0275\u0275text(24, "Feature Modules");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "ul")(26, "li");
    \u0275\u0275text(27, "Organize features and functionality into separate modules to improve maintainability.");
    \u0275\u0275elementEnd()()();
  }
}
function LearnModuleComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3")(2, "b");
    \u0275\u0275text(3, "ProvidedIn vs providers array for declaring services");
    \u0275\u0275elementEnd()()();
  }
}
var LearnModuleComponent = class _LearnModuleComponent {
  constructor() {
    this.code = `
  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { AppComponent } from './app.component';
  import { OtherComponent } from './other.component';

  @NgModule({
    declarations: [
      AppComponent,
      OtherComponent
    ],
    imports: [
      BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  `;
    this.codeExtras = `import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent } from './my-component.component';
import { MyDynamicComponent } from './my-dynamic-component.component';
import { MyDirective } from './my-directive.directive';

@NgModule({
  declarations: [MyComponent, MyDynamicComponent, MyDirective],
  imports: [CommonModule],
  exports: [MyComponent, MyDirective],
  entryComponents: [MyDynamicComponent],
  schemas: [NO_ERRORS_SCHEMA],
  id: 'MyUniqueModuleId'
})
export class MyModule { }
`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function LearnModuleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LearnModuleComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LearnModuleComponent, selectors: [["app-learn-module"]], viewQuery: function LearnModuleComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.codeElement = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 0, consts: [["codeElement", ""], [1, "header"], ["label", "Syntax Reference"], ["matTabContent", ""], ["label", "Extras"], ["label", "Types"], ["label", "Best Practices"], ["label", "Miscellaneous"], [1, "language-typescript"]], template: function LearnModuleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 1);
        \u0275\u0275text(1, "Modules");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "label");
        \u0275\u0275text(3, "A module in Angular is a container that groups related components, directives, pipes, and services to organize the application.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "mat-tab-group")(5, "mat-tab", 2);
        \u0275\u0275template(6, LearnModuleComponent_ng_template_6_Template, 4, 1, "ng-template", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-tab", 4);
        \u0275\u0275template(8, LearnModuleComponent_ng_template_8_Template, 70, 1, "ng-template", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "mat-tab", 5);
        \u0275\u0275template(10, LearnModuleComponent_ng_template_10_Template, 28, 0, "ng-template", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-tab", 6);
        \u0275\u0275template(12, LearnModuleComponent_ng_template_12_Template, 28, 0, "ng-template", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-tab", 7);
        \u0275\u0275template(14, LearnModuleComponent_ng_template_14_Template, 4, 0, "ng-template", 3);
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [MatTabsModule, MatTabContent, MatTab, MatTabGroup] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LearnModuleComponent, { className: "LearnModuleComponent", filePath: "src\\app\\components\\angular\\learn-module\\learn-module.component.ts", lineNumber: 13 });
})();
export {
  LearnModuleComponent
};
//# sourceMappingURL=chunk-WLH6IUVN.js.map
