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

// src/app/components/angular/learn-directive/learn-directive.component.ts
var Prism = __toESM(require_prism());
var _c0 = ["codeElement"];
function LearnDirectiveComponent_ng_template_6_Template(rf, ctx) {
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
function LearnDirectiveComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3")(2, "b");
    \u0275\u0275text(3, "Component Directives");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ul")(5, "li");
    \u0275\u0275text(6, "Purpose: These are the most common type of directives. A component is essentially a directive with a template.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "pre")(8, "code", 6, 0);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div")(12, "h3")(13, "b");
    \u0275\u0275text(14, "Structural Directives");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "ul")(16, "li");
    \u0275\u0275text(17, "Purpose: These directives change the DOM layout by adding or removing DOM elements. They modify the structure of the DOM.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "pre")(19, "code", 6, 0);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div")(23, "h3")(24, "b");
    \u0275\u0275text(25, "Attribute Directives");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "ul")(27, "li");
    \u0275\u0275text(28, "Purpose: These directives change the appearance or behavior of an element, component, or another directive.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "pre")(30, "code", 6, 0);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div")(34, "h3")(35, "b");
    \u0275\u0275text(36, "Custom Directives");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "ul")(38, "pre")(39, "code", 6, 0);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.componentDir);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.structuralDir);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.attributeDir);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.code);
  }
}
function LearnDirectiveComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3")(2, "b");
    \u0275\u0275text(3, "Component Directives");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ul")(5, "li");
    \u0275\u0275text(6, "@HostBinding: Binds a property of the host element to a directive property.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "li");
    \u0275\u0275text(8, "@HostListener: Listens to events on the host element and calls a directive method.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "pre")(10, "code", 6, 0);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r0.miscCode);
  }
}
var LearnDirectiveComponent = class _LearnDirectiveComponent {
  constructor() {
    this.code = `
    import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

    @Directive({
      selector: '[appHoverHighlight]'
    })
    export class HoverHighlightDirective {

      constructor(private el: ElementRef, private renderer: Renderer2) { }

      @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
      }

      @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
      }

      private highlight(color: string | null) {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
      }
    }
  `;
    this.componentDir = `
    @Component({
    selector: 'app-my-component',
    templateUrl: './my-component.component.html',
    styleUrls: ['./my-component.component.scss']
    })
    
    export class MyComponent {
      // Component logic here
    }
  `;
    this.structuralDir = `
  //ngIf: Conditionally includes a template based on a boolean value.

         <div *ngIf="condition">Content to display if condition is true</div>

  // ngFor: Repeats a template for each item in a collection.

        <div *ngFor="let item of items">{{ item }}</div>

  //ngSwitch: Switches among multiple possible templates based on a value.

        <div [ngSwitch]="value">
          <div *ngSwitchCase="'case1'">Case 1 content</div>
          <div *ngSwitchCase="'case2'">Case 2 content</div>
          <div *ngSwitchDefault>Default content</div>
        </div>
`;
    this.attributeDir = `
  //ngClass: Adds or removes CSS classes based on an expression.

        <div [ngClass]="{'active': isActive}">Toggle active class</div>


  //ngStyle: Applies inline styles to an element based on an expression.

        <div [ngStyle]="{'color': color}">Styled text</div>
  `;
    this.miscCode = `
    @Directive({
      selector: '[appHighlight]'
    })

    export class HighlightDirective {
      @HostBinding('style.backgroundColor') backgroundColor: string;

      @HostListener('mouseenter') onMouseEnter() {
        this.backgroundColor = 'yellow';
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.backgroundColor = 'transparent';
    }
  }
`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function LearnDirectiveComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LearnDirectiveComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LearnDirectiveComponent, selectors: [["app-learn-directive"]], viewQuery: function LearnDirectiveComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.codeElement = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 0, consts: [["codeElement", ""], [1, "header"], ["label", "Syntax Reference"], ["matTabContent", ""], ["label", "Types"], ["label", "Miscelleneous"], [1, "language-typescript"]], template: function LearnDirectiveComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 1);
        \u0275\u0275text(1, "Directives");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "label");
        \u0275\u0275text(3, "Directives are special classes that allow you to add behavior to elements in your Angular applications.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "mat-tab-group")(5, "mat-tab", 2);
        \u0275\u0275template(6, LearnDirectiveComponent_ng_template_6_Template, 4, 1, "ng-template", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-tab", 4);
        \u0275\u0275template(8, LearnDirectiveComponent_ng_template_8_Template, 42, 4, "ng-template", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "mat-tab", 5);
        \u0275\u0275template(10, LearnDirectiveComponent_ng_template_10_Template, 13, 1, "ng-template", 3);
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [MatTabsModule, MatTabContent, MatTab, MatTabGroup] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LearnDirectiveComponent, { className: "LearnDirectiveComponent", filePath: "src\\app\\components\\angular\\learn-directive\\learn-directive.component.ts", lineNumber: 13 });
})();
export {
  LearnDirectiveComponent
};
//# sourceMappingURL=chunk-5KFPBAVQ.js.map
