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

// src/app/components/angular/learn-routing/learn-routing.component.ts
var import_prismjs = __toESM(require_prism());
var _c0 = ["codeElement"];
function LearnRoutingComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre")(1, "code", 5, 0);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.code);
  }
}
function LearnRoutingComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3")(2, "b");
    \u0275\u0275text(3, "Accessing Params from routing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ul")(5, "li");
    \u0275\u0275text(6, "Inject ActivatedRoute in the constructor.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "pre")(8, "code", 5, 0);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "li");
    \u0275\u0275text(12, "Alternative: Subscribe to Param Changes (if route can change without recreating component)");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Use this if you stay on the same component but navigate between different IDs (e.g., from /product/1 to /product/2). ");
    \u0275\u0275elementStart(14, "pre")(15, "code", 5, 0);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.param1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.param2);
  }
}
var LearnRoutingComponent = class _LearnRoutingComponent {
  constructor() {
    this.code = `
      import { NgModule } from '@angular/core';
      import { RouterModule, Routes } from '@angular/router';

      import { HomeComponent } from './home/home.component';
      import { AboutComponent } from './about/about.component';
      import { NotFoundComponent } from './not-found/not-found.component';
      import { UserComponent } from './user/user.component';
      import { UserDetailsComponent } from './user/user-details/user-details.component';
      import { UserSettingsComponent } from './user/user-settings/user-settings.component';
      import { ProductComponent } from './product/product.component';
      import { ProductDetailsComponent } from './product/product-details/product-details.component';

      const routes: Routes = [
        // Default route - when path is empty
        { path: '', component: HomeComponent },

        // Redirect example
        { path: 'home', redirectTo: '', pathMatch: 'full' },

        // Static route
        { path: 'about', component: AboutComponent },

        // Route with parameter
        { path: 'product/:id', component: ProductDetailsComponent },

        // Route with child routes
        {
          path: 'user',
          component: UserComponent,
          children: [
            { path: '', component: UserDetailsComponent }, // default child route
            { path: 'details', component: UserDetailsComponent },
            { path: 'settings', component: UserSettingsComponent },
          ]
        },

        // Wildcard route - for 404 page
        { path: '**', component: NotFoundComponent }
      ];

      @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
      })
      export class AppRoutingModule {}
  `;
    this.param1 = `
        import { Component, OnInit } from '@angular/core';
        import { ActivatedRoute } from '@angular/router';

        @Component({
          selector: 'app-product-details',
          templateUrl: './product-details.component.html',
        })

        export class ProductDetailsComponent implements OnInit {

          productId!: string;

          constructor(private route: ActivatedRoute) {}

          ngOnInit(): void {
            this.productId = this.route.snapshot.paramMap.get('id')!;
          }
        }
  `;
    this.param2 = `
      ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
          this.productId = params.get('id')!;
        });
      }
  `;
  }
  ngAfterViewChecked() {
    import_prismjs.default.highlightAll();
  }
  static {
    this.\u0275fac = function LearnRoutingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LearnRoutingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LearnRoutingComponent, selectors: [["app-learn-routing"]], viewQuery: function LearnRoutingComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.codeElement = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 0, consts: [["codeElement", ""], [1, "header"], ["label", "Syntax Reference"], ["matTabContent", ""], ["label", "Miscelleneous"], [1, "language-typescript"]], template: function LearnRoutingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 1);
        \u0275\u0275text(1, "Routing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "label")(3, "b");
        \u0275\u0275text(4, "Routing:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Routing in Angular enables navigation between different views or components based on the URL.");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "br");
        \u0275\u0275elementStart(7, "label")(8, "b");
        \u0275\u0275text(9, "Router Module:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " The RouterModule is an Angular module that provides the necessary services and directives for configuring and handling application routing.");
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "br");
        \u0275\u0275elementStart(12, "label")(13, "b");
        \u0275\u0275text(14, "Route:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " A route is a configuration object that maps a URL path to a specific component.");
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "br");
        \u0275\u0275elementStart(17, "label")(18, "b");
        \u0275\u0275text(19, "Router Outlet:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, " The <router-outlet> is a directive that acts as a placeholder where the matched component is displayed.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "mat-tab-group")(22, "mat-tab", 2);
        \u0275\u0275template(23, LearnRoutingComponent_ng_template_23_Template, 4, 1, "ng-template", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "mat-tab", 4);
        \u0275\u0275template(25, LearnRoutingComponent_ng_template_25_Template, 18, 2, "ng-template", 3);
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [MatTabsModule, MatTabContent, MatTab, MatTabGroup] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LearnRoutingComponent, { className: "LearnRoutingComponent", filePath: "src\\app\\components\\angular\\learn-routing\\learn-routing.component.ts", lineNumber: 17 });
})();
export {
  LearnRoutingComponent
};
//# sourceMappingURL=chunk-SF2FIQHI.js.map
