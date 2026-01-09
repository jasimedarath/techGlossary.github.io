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

// src/app/components/angular/learn-guards/learn-guards.component.ts
var Prism = __toESM(require_prism());
var _c0 = ["codeElement"];
function LearnGuardsComponent_ng_template_13_Template(rf, ctx) {
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
function LearnGuardsComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3")(2, "b");
    \u0275\u0275text(3, "CanActivate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ul")(5, "li");
    \u0275\u0275text(6, "Purpose: Determines if a route can be activated.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "li");
    \u0275\u0275text(8, "Usage: Often used for authentication checks.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "pre")(10, "code", 5, 0);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div")(14, "h3")(15, "b");
    \u0275\u0275text(16, "CanActivateChild");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "ul")(18, "li");
    \u0275\u0275text(19, "Purpose: Determines if the children of a route can be activated.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li");
    \u0275\u0275text(21, "Usage: Often used to apply guard logic to child routes.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "pre")(23, "code", 5, 0);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div")(27, "h3")(28, "b");
    \u0275\u0275text(29, "CanDeactivate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "ul")(31, "li");
    \u0275\u0275text(32, "Purpose: Determines if a route can be deactivated.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "li");
    \u0275\u0275text(34, "Usage: Used to prevent navigation away from the current route, such as when there are unsaved changes.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "pre")(36, "code", 5, 0);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div")(40, "h3")(41, "b");
    \u0275\u0275text(42, "Resolve");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "ul")(44, "li");
    \u0275\u0275text(45, "Purpose: Pre-fetches data before activating a route.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "li");
    \u0275\u0275text(47, "Usage: Used to ensure that necessary data is loaded before the route is activated.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "pre")(49, "code", 5, 0);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div")(53, "h3")(54, "b");
    \u0275\u0275text(55, "CanLoad");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "ul")(57, "li");
    \u0275\u0275text(58, "Purpose: Determines if a module can be loaded asynchronously.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "li");
    \u0275\u0275text(60, "Usage: Used to control access to lazy-loaded modules.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "pre")(62, "code", 5, 0);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div")(66, "h3")(67, "b");
    \u0275\u0275text(68, "Registering Guards with Routes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "ul")(70, "li");
    \u0275\u0275text(71, "Guards are specified in the route configuration object using their respective properties (canActivate, canActivateChild, canDeactivate, resolve, canLoad).");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "pre")(73, "code", 5, 0);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r0.activate);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r0.activateChild);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r0.deactivate);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r0.resolve);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r0.load);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.registerGuard);
  }
}
var LearnGuardsComponent = class _LearnGuardsComponent {
  constructor() {
    this.code = `
  import { Injectable } from '@angular/core';
  import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
  import { Observable } from 'rxjs';
  import { AuthService } from './auth.service';

  @Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
      if (this.authService.isLoggedIn()) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
  }

  `;
    this.activate = `
  import { Injectable } from '@angular/core';
  import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
  import { AuthService } from './auth.service';

  @Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): boolean {
      if (this.authService.isLoggedIn()) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
  }
  `;
    this.activateChild = `
    import { Injectable } from '@angular/core';
    import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
    import { AuthService } from './auth.service';

    @Injectable({
      providedIn: 'root'
    })
    export class AuthGuard implements CanActivateChild {
      constructor(private authService: AuthService, private router: Router) {}

      canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): boolean {
        if (this.authService.isLoggedIn()) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }
    }
  `;
    this.deactivate = `
  import { Injectable } from '@angular/core';
  import { CanDeactivate } from '@angular/router';
  import { Observable } from 'rxjs';

  export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
  }

  @Injectable({
    providedIn: 'root'
  })
  export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(
      component: CanComponentDeactivate
    ): Observable<boolean> | Promise<boolean> | boolean {
      return component.canDeactivate ? component.canDeactivate() : true;
    }
  }
  `;
    this.resolve = `
  import { Injectable } from '@angular/core';
  import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
  import { Observable } from 'rxjs';
  import { DataService } from './data.service';

  @Injectable({
    providedIn: 'root'
  })
  export class DataResolver implements Resolve<any> {
    constructor(private dataService: DataService) {}

    resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<any> {
      return this.dataService.getData();
    }
  }
  `;
    this.load = `
  import { Injectable } from '@angular/core';
  import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
  import { AuthService } from './auth.service';
  import { Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class CanLoadGuard implements CanLoad {
    constructor(private authService: AuthService, private router: Router) {}

    canLoad(
      route: Route,
      segments: UrlSegment[]
    ): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.isLoggedIn()) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
  }
  `;
    this.registerGuard = `
    const routes: Routes = [
    {
      path: 'admin',
      component: AdminComponent,
      canActivate: [AuthGuard],
      canActivateChild: [AuthGuard],
      canDeactivate: [CanDeactivateGuard],
      resolve: { data: DataResolver },
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      canLoad: [CanLoadGuard]
    }
  ];
  `;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function LearnGuardsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LearnGuardsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LearnGuardsComponent, selectors: [["app-learn-guards"]], viewQuery: function LearnGuardsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.codeElement = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 0, consts: [["codeElement", ""], [1, "header"], ["label", "Syntax Reference"], ["matTabContent", ""], ["label", "Types"], [1, "language-typescript"]], template: function LearnGuardsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 1);
        \u0275\u0275text(1, "Guards");
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
        \u0275\u0275template(13, LearnGuardsComponent_ng_template_13_Template, 4, 1, "ng-template", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "mat-tab", 4);
        \u0275\u0275template(15, LearnGuardsComponent_ng_template_15_Template, 76, 6, "ng-template", 3);
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [MatTabsModule, MatTabContent, MatTab, MatTabGroup] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LearnGuardsComponent, { className: "LearnGuardsComponent", filePath: "src\\app\\components\\angular\\learn-guards\\learn-guards.component.ts", lineNumber: 13 });
})();
export {
  LearnGuardsComponent
};
//# sourceMappingURL=chunk-D5UHYYVZ.js.map
