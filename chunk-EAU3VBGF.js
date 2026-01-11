import"./chunk-WCULWZKC.js";import{a as R}from"./chunk-VDRUEQXK.js";import{a as f,b as H,c as b,d as I}from"./chunk-GNZ74KMC.js";import"./chunk-XAZLOLJU.js";import"./chunk-SZTU5CXE.js";import{Ia as o,Ya as p,da as u,e as S,hb as t,ib as e,jb as h,mb as s,qb as x,rb as v,sb as g,ub as r,vb as a,zb as E}from"./chunk-KMNIY7WT.js";var T=S(R());var y=["codeElement"];function q(n,c){if(n&1&&(t(0,"pre")(1,"code",6,0),r(3),e()()),n&2){let i=s();o(3),a(i.code)}}function C(n,c){if(n&1&&(t(0,"div")(1,"h3")(2,"b"),r(3,"Common Use Cases for Interceptors"),e()(),t(4,"ul")(5,"li"),r(6,"Adding Authorization Headers"),e()(),t(7,"pre")(8,"code",6,0),r(10),e()(),t(11,"ul")(12,"li"),r(13,"Error Handling"),e()(),t(14,"pre")(15,"code",6,0),r(17),e()(),t(18,"ul")(19,"li"),r(20,"Logging"),e()(),t(21,"pre")(22,"code",6,0),r(24),e()(),t(25,"ul")(26,"li"),r(27,"Caching"),e()(),t(28,"pre")(29,"code",6,0),r(31),e()()()),n&2){let i=s();o(10),a(i.auth),o(7),a(i.error),o(7),a(i.log),o(7),a(i.cache)}}function _(n,c){if(n&1&&(t(0,"div")(1,"h3")(2,"b"),r(3,"Registering an Interceptor"),e()(),t(4,"ul")(5,"li"),r(6," Interceptors are provided in the providers array of your Angular module using the HTTP_INTERCEPTORS token. "),e()(),t(7,"pre")(8,"code",6,0),r(10),e()()(),t(11,"div")(12,"h3")(13,"b"),r(14,"Interceptor Order"),e()(),t(15,"ul")(16,"li"),r(17," The order in which interceptors are executed is determined by their order in the providers array. Interceptors are executed in the order they are provided, and the response is processed in the reverse order. "),e()(),t(18,"pre")(19,"code",6,0),r(21),e()()()),n&2){let i=s();o(10),a(i.registering),o(11),a(i.order)}}var w=(()=>{class n{constructor(){this.code=`
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

  `,this.registering=`
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
  `,this.auth=`
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', \`Bearer \${this.authService.getToken()}\`)
      });
      return next.handle(authReq);
    }
    `,this.error=`
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle the error
        return throwError(error);
      })
    );
  }
  `,this.log=`
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
  `,this.cache=`
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
  `,this.order=`
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
  `}ngAfterViewChecked(){T.highlightAll()}static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=u({type:n,selectors:[["app-learn-interceptors"]],viewQuery:function(l,m){if(l&1&&x(y,5),l&2){let d;v(d=g())&&(m.codeElement=d.first)}},standalone:!0,features:[E],decls:18,vars:0,consts:[["codeElement",""],[1,"header"],["label","Syntax Reference"],["matTabContent",""],["label","Use Cases"],["label","Others"],[1,"language-typescript"]],template:function(l,m){l&1&&(t(0,"h2",1),r(1,"Interceptors"),e(),t(2,"label")(3,"b"),r(4,"Definition"),e(),r(5,": An interceptor is a service that implements the HttpInterceptor interface and allows you to intercept HTTP requests and responses."),e(),h(6,"br"),t(7,"label")(8,"b"),r(9,"Usage"),e(),r(10,": Interceptors are part of Angular's HttpClient module and are used to globally intercept HTTP communication."),e(),t(11,"mat-tab-group")(12,"mat-tab",2),p(13,q,4,1,"ng-template",3),e(),t(14,"mat-tab",4),p(15,C,32,4,"ng-template",3),e(),t(16,"mat-tab",5),p(17,_,22,2,"ng-template",3),e()())},dependencies:[I,f,H,b]})}}return n})();export{w as LearnInterceptorsComponent};
