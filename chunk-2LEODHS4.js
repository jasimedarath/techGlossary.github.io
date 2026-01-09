import "./chunk-EJKSKVQ6.js";
import {
  require_prism
} from "./chunk-VYZLFJ7Z.js";
import {
  __toESM,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-N7AAI6XN.js";

// src/app/components/angular/learn-lifecyclehooks/learn-lifecyclehooks.component.ts
var Prism = __toESM(require_prism());
var _c0 = ["codeElement"];
var LearnLifecyclehooksComponent = class _LearnLifecyclehooksComponent {
  constructor() {
    this.code = `
  import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, SimpleChanges } from '@angular/core';
  
  @Component({
    selector: 'app-compA',
    standalone: true,
    imports: [],
    templateUrl: './component-name.component.html',
    styleUrls: ['./component-name.component.scss'],
  })
  export class ComponentNameComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    @Input() inputProperty: any;
  
    constructor() {
      // Constructor is called first, before any other lifecycle hook
    }
  
    ngOnInit() {
      // ngOnInit is called once after the first ngOnChanges
      // Purpose: Initialize the component after Angular first displays the data-bound properties
    }
  
    ngOnChanges(changes: SimpleChanges) {
      // ngOnChanges is called when any data-bound input property changes
      // Purpose: Respond to changes in input properties
    }
  
    ngDoCheck() {
      // ngDoCheck is called during every change detection run
      // Purpose: Detect and act upon changes that Angular doesn't automatically detect
    }
  
    ngAfterContentInit() {
      // ngAfterContentInit is called once after the first ngDoCheck
      // Purpose: Respond after Angular projects external content into the component's view
    }
  
    ngAfterContentChecked() {
      // ngAfterContentChecked is called after ngAfterContentInit and every subsequent ngDoCheck
      // Purpose: Respond after Angular checks the content projected into the component
    }
  
    ngAfterViewInit() {
      // ngAfterViewInit is called once after the first ngAfterContentChecked
      // Purpose: Respond after Angular initializes the component's views and child views
    }
  
    ngAfterViewChecked() {
      // ngAfterViewChecked is called after ngAfterViewInit and every subsequent ngAfterContentChecked
      // Purpose: Respond after Angular checks the component's views and child views
    }
  
    ngOnDestroy() {
      // ngOnDestroy is called just before Angular destroys the component
      // Purpose: Cleanup before Angular destroys the component
    }
  }
  `.trim();
  }
  ngOnInit() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function LearnLifecyclehooksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LearnLifecyclehooksComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LearnLifecyclehooksComponent, selectors: [["app-learn-lifecyclehooks"]], viewQuery: function LearnLifecyclehooksComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.codeElement = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 1, consts: [["codeElement", ""], [1, "header"], [1, "language-typescript"]], template: function LearnLifecyclehooksComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 1);
        \u0275\u0275text(1, "Life Cycle Hooks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "h5");
        \u0275\u0275text(3, "Syntax Reference");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "pre")(5, "code", 2, 0);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.code);
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LearnLifecyclehooksComponent, { className: "LearnLifecyclehooksComponent", filePath: "src\\app\\components\\angular\\learn-lifecyclehooks\\learn-lifecyclehooks.component.ts", lineNumber: 12 });
})();
export {
  LearnLifecyclehooksComponent
};
//# sourceMappingURL=chunk-2LEODHS4.js.map
