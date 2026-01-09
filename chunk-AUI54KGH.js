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

// src/app/components/angular/learn-interceptors/learn-interceptors.component.ts
var Prism = __toESM(require_prism());
var _c0 = ["codeElement"];
function LearnInterceptorsComponent_ng_template_13_Template(rf, ctx) {
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
function LearnInterceptorsComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3")(2, "b");
    \u0275\u0275text(3, "Common Use Cases for Interceptors");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ul")(5, "li");
    \u0275\u0275text(6, "Adding Authorization Headers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "pre")(8, "code", 6, 0);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "ul")(12, "li");
    \u0275\u0275text(13, "Error Handling");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "pre")(15, "code", 6, 0);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "ul")(19, "li");
    \u0275\u0275text(20, "Logging");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "pre")(22, "code", 6, 0);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "ul")(26, "li");
    \u0275\u0275text(27, "Caching");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "pre")(29, "code", 6, 0);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.auth);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.error);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.log);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.cache);
  }
}
function LearnInterceptorsComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3")(2, "b");
    \u0275\u0275text(3, "Registering an Interceptor");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ul")(5, "li");
    \u0275\u0275text(6, " Interceptors are provided in the providers array of your Angular module using the HTTP_INTERCEPTORS token. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "pre")(8, "code", 6, 0);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div")(12, "h3")(13, "b");
    \u0275\u0275text(14, "Interceptor Order");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "ul")(16, "li");
    \u0275\u0275text(17, " The order in which interceptors are executed is determined by their order in the providers array. Interceptors are executed in the order they are provided, and the response is processed in the reverse order. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "pre")(19, "code", 6, 0);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.registering);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.order);
  }
}
var LearnInterceptorsComponent = class _LearnInterceptorsComponent {
  constructor() {
    this.code = `
  import { Injectable } from '@angular/core';
  import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { tap } from 'rxjs/operators';

  @Injectable()
  export class LoggingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log('Request made to:', req.url);
      
      return next.handle(req).pipe(
        tap(
          event => {
            console.log('Response received:', event);
          },
          error => {
            console.error('Request error:', error);
          }
        )
      );
    }
  }

  `;
    this.registering = `
  import { NgModule } from '@angular/core';
  import { HTTP_INTERCEPTORS } from '@angular/common/http';
  import { MyInterceptor } from './my-interceptor';

  @NgModule({
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: MyInterceptor,
        multi: true // Allows multiple interceptors
      }
    ]
  })
  export class AppModule { }
  `;
    this.auth = `
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', \`Bearer \${this.authService.getToken()}\`)
      });
      return next.handle(authReq);
    }
    `;
    this.error = `
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle the error
        return throwError(error);
      })
    );
  }
  `;
    this.log = `
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request:', req);
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          console.log('Response:', event);
        }
      })
    );
  }
  `;
    this.cache = `
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cachedResponse = this.cacheService.get(req.url);
    if (cachedResponse) {
      return of(cachedResponse);
    }
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.cacheService.put(req.url, event);
        }
      })
    );
  }
  `;
    this.order = `
    providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FirstInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecondInterceptor,
      multi: true
    }
  ]
  `;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function LearnInterceptorsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LearnInterceptorsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LearnInterceptorsComponent, selectors: [["app-learn-interceptors"]], viewQuery: function LearnInterceptorsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.codeElement = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 0, consts: [["codeElement", ""], [1, "header"], ["label", "Syntax Reference"], ["matTabContent", ""], ["label", "Use Cases"], ["label", "Others"], [1, "language-typescript"]], template: function LearnInterceptorsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 1);
        \u0275\u0275text(1, "Interceptors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "label")(3, "b");
        \u0275\u0275text(4, "Definition");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, ": An interceptor is a service that implements the HttpInterceptor interface and allows you to intercept HTTP requests and responses.");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "br");
        \u0275\u0275elementStart(7, "label")(8, "b");
        \u0275\u0275text(9, "Usage");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, ": Interceptors are part of Angular's HttpClient module and are used to globally intercept HTTP communication.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-tab-group")(12, "mat-tab", 2);
        \u0275\u0275template(13, LearnInterceptorsComponent_ng_template_13_Template, 4, 1, "ng-template", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "mat-tab", 4);
        \u0275\u0275template(15, LearnInterceptorsComponent_ng_template_15_Template, 32, 4, "ng-template", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "mat-tab", 5);
        \u0275\u0275template(17, LearnInterceptorsComponent_ng_template_17_Template, 22, 2, "ng-template", 3);
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [MatTabsModule, MatTabContent, MatTab, MatTabGroup] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LearnInterceptorsComponent, { className: "LearnInterceptorsComponent", filePath: "src\\app\\components\\angular\\learn-interceptors\\learn-interceptors.component.ts", lineNumber: 13 });
})();
export {
  LearnInterceptorsComponent
};
//# sourceMappingURL=chunk-AUI54KGH.js.map
