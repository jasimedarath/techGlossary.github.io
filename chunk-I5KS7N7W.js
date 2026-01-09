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

// src/app/components/angular/learn-pipe/learn-pipe.component.ts
var Prism = __toESM(require_prism());
var _c0 = ["codeElement"];
function LearnPipeComponent_ng_template_13_Template(rf, ctx) {
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
function LearnPipeComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3")(2, "b");
    \u0275\u0275text(3, "Built-In");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ul")(5, "li");
    \u0275\u0275text(6, " Angular provides several built-in pipes for common data transformations. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "pre")(8, "code", 6, 0);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div")(12, "h3")(13, "b");
    \u0275\u0275text(14, "Custom");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "ul")(16, "li");
    \u0275\u0275text(17, " Purpose: These directives change the DOM layout by adding or removing DOM elements. They modify the structure of the DOM. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "pre")(19, "code", 6, 0);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.builtinPipes);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.customPipes);
  }
}
function LearnPipeComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3")(2, "b");
    \u0275\u0275text(3, "Pure Pipes (default)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ul")(5, "li");
    \u0275\u0275text(6, " Only execute when the inputs change. Angular checks these pipes for changes only when it detects changes in their input values. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div")(8, "h3")(9, "b");
    \u0275\u0275text(10, "Impure Pipes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "ul")(12, "li");
    \u0275\u0275text(13, " Execute on every change detection cycle, regardless of whether the inputs have changed. This can lead to performance issues if not used carefully. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "pre")(15, "code", 6, 0);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate(ctx_r0.impurePipe);
  }
}
var LearnPipeComponent = class _LearnPipeComponent {
  constructor() {
    this.code = `
  import { Pipe, PipeTransform } from '@angular/core';

  @Pipe({
    name: 'capitalize'
  })
  export class CapitalizePipe implements PipeTransform {

    transform(value: string): string {
      if (!value) return value;
      return value.replace(/\bw/g, first => first.toLocaleUpperCase());
    }
  }

  `;
    this.builtinPipes = `
  <p>{{ today | date:'fullDate' }}</p>

  <p>{{ 'hello' | uppercase }}</p>

  <p>{{ amount | currency:'USD' }}</p>

  <p>{{ 3.14159 | number:'1.2-2' }}</p>

  <p>{{ 0.25 | percent }}</p>

  <p>{{ object | json }}</p>

  <p>{{ items | slice:1:3 }}</p>

  <p>{{ observableValue | async }}</p>

  `;
    this.customPipes = `

  // Definition

  import { Pipe, PipeTransform } from '@angular/core';

  @Pipe({ name: 'exponentialStrength' })
  export class ExponentialStrengthPipe implements PipeTransform {
    transform(value: number, exponent: number): number {
      return Math.pow(value, exponent);
    }
  }

  //Register

  @NgModule({
  declarations: [ExponentialStrengthPipe],
    ...
  })
  export class AppModule { }

  //Usage

  <p>{{ 2 | exponentialStrength:3 }}</p> <!-- Outputs: 8 -->

  `;
    this.impurePipe = `
  @Pipe({ name: 'impurePipe', pure: false })
  export class ImpurePipe implements PipeTransform {
    transform(value: any): any {
      // Transform logic
    }
  }
  `;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function LearnPipeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LearnPipeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LearnPipeComponent, selectors: [["app-learn-pipe"]], viewQuery: function LearnPipeComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.codeElement = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 0, consts: [["codeElement", ""], [1, "header"], ["label", "Syntax Reference"], ["matTabContent", ""], ["label", "Types"], ["label", "Pipe Lifecycles"], [1, "language-typescript"]], template: function LearnPipeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 1);
        \u0275\u0275text(1, "Pipes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "label")(3, "b");
        \u0275\u0275text(4, "Definition");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, ": A pipe is a function that takes in a value, transforms it, and outputs the transformed value. They are used in Angular templates to format data displayed to the user.");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "br");
        \u0275\u0275elementStart(7, "label")(8, "b");
        \u0275\u0275text(9, "Usage");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, ": Pipes are used by applying the pipe symbol (|) followed by the pipe name in Angular templates.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-tab-group")(12, "mat-tab", 2);
        \u0275\u0275template(13, LearnPipeComponent_ng_template_13_Template, 4, 1, "ng-template", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "mat-tab", 4);
        \u0275\u0275template(15, LearnPipeComponent_ng_template_15_Template, 22, 2, "ng-template", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "mat-tab", 5);
        \u0275\u0275template(17, LearnPipeComponent_ng_template_17_Template, 18, 1, "ng-template", 3);
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [MatTabsModule, MatTabContent, MatTab, MatTabGroup] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LearnPipeComponent, { className: "LearnPipeComponent", filePath: "src\\app\\components\\angular\\learn-pipe\\learn-pipe.component.ts", lineNumber: 13 });
})();
export {
  LearnPipeComponent
};
//# sourceMappingURL=chunk-I5KS7N7W.js.map
