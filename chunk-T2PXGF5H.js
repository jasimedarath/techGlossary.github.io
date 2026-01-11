import"./chunk-WCULWZKC.js";import{a as I}from"./chunk-VDRUEQXK.js";import{a as f,b as g,c as x,d as C}from"./chunk-GNZ74KMC.js";import"./chunk-XAZLOLJU.js";import"./chunk-SZTU5CXE.js";import{Ia as n,Ya as s,da as d,e as E,hb as t,ib as e,jb as p,mb as c,qb as v,rb as h,sb as S,ub as a,vb as o,zb as b}from"./chunk-KMNIY7WT.js";var A=E(I());var D=["codeElement"];function y(i,R){if(i&1&&(t(0,"pre")(1,"code",5,0),a(3),e()()),i&2){let r=c();n(3),o(r.code)}}function G(i,R){if(i&1&&(t(0,"div")(1,"h3")(2,"b"),a(3,"CanActivate"),e()(),t(4,"ul")(5,"li"),a(6,"Purpose: Determines if a route can be activated."),e(),t(7,"li"),a(8,"Usage: Often used for authentication checks."),e()(),t(9,"pre")(10,"code",5,0),a(12),e()()(),t(13,"div")(14,"h3")(15,"b"),a(16,"CanActivateChild"),e()(),t(17,"ul")(18,"li"),a(19,"Purpose: Determines if the children of a route can be activated."),e(),t(20,"li"),a(21,"Usage: Often used to apply guard logic to child routes."),e()(),t(22,"pre")(23,"code",5,0),a(25),e()()(),t(26,"div")(27,"h3")(28,"b"),a(29,"CanDeactivate"),e()(),t(30,"ul")(31,"li"),a(32,"Purpose: Determines if a route can be deactivated."),e(),t(33,"li"),a(34,"Usage: Used to prevent navigation away from the current route, such as when there are unsaved changes."),e()(),t(35,"pre")(36,"code",5,0),a(38),e()()(),t(39,"div")(40,"h3")(41,"b"),a(42,"Resolve"),e()(),t(43,"ul")(44,"li"),a(45,"Purpose: Pre-fetches data before activating a route."),e(),t(46,"li"),a(47,"Usage: Used to ensure that necessary data is loaded before the route is activated."),e()(),t(48,"pre")(49,"code",5,0),a(51),e()()(),t(52,"div")(53,"h3")(54,"b"),a(55,"CanLoad"),e()(),t(56,"ul")(57,"li"),a(58,"Purpose: Determines if a module can be loaded asynchronously."),e(),t(59,"li"),a(60,"Usage: Used to control access to lazy-loaded modules."),e()(),t(61,"pre")(62,"code",5,0),a(64),e()()(),t(65,"div")(66,"h3")(67,"b"),a(68,"Registering Guards with Routes"),e()(),t(69,"ul")(70,"li"),a(71,"Guards are specified in the route configuration object using their respective properties (canActivate, canActivateChild, canDeactivate, resolve, canLoad)."),e()(),t(72,"pre")(73,"code",5,0),a(75),e()()()),i&2){let r=c();n(12),o(r.activate),n(13),o(r.activateChild),n(13),o(r.deactivate),n(13),o(r.resolve),n(13),o(r.load),n(11),o(r.registerGuard)}}var U=(()=>{class i{constructor(){this.code=`
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

  `,this.activate=`
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
  `,this.activateChild=`
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
  `,this.deactivate=`
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
  `,this.resolve=`
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
  `,this.load=`
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
  `,this.registerGuard=`
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
  `}ngAfterViewChecked(){A.highlightAll()}static{this.\u0275fac=function(l){return new(l||i)}}static{this.\u0275cmp=d({type:i,selectors:[["app-learn-guards"]],viewQuery:function(l,m){if(l&1&&v(D,5),l&2){let u;h(u=S())&&(m.codeElement=u.first)}},standalone:!0,features:[b],decls:16,vars:0,consts:[["codeElement",""],[1,"header"],["label","Syntax Reference"],["matTabContent",""],["label","Types"],[1,"language-typescript"]],template:function(l,m){l&1&&(t(0,"h2",1),a(1,"Guards"),e(),t(2,"label")(3,"b"),a(4,"Definition"),e(),a(5,": A service is a class with a narrow, well-defined purpose. It provides functionality that can be used across multiple components and modules."),e(),p(6,"br"),t(7,"label")(8,"b"),a(9,"Usage"),e(),a(10,": Services are typically used for tasks such as fetching data from a server, logging, validating user input, and any other non-UI related tasks."),e(),t(11,"mat-tab-group")(12,"mat-tab",2),s(13,y,4,1,"ng-template",3),e(),t(14,"mat-tab",4),s(15,G,76,6,"ng-template",3),e()())},dependencies:[C,f,g,x]})}}return i})();export{U as LearnGuardsComponent};
