import{a as y}from"./chunk-FSUYFWSG.js";import{a as x,b as C,c as R,d as v}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as a,Xa as l,da as d,e as S,gb as o,hb as e,ib as m,lb as u,pb as h,qb as f,rb as g,tb as t,ub as p,yb as b}from"./chunk-WGQ2ELTG.js";var E=S(y());var w=["codeElement"];function A(n,M){if(n&1&&(o(0,"pre")(1,"code",5,0),t(3),e()()),n&2){let i=u();a(3),p(i.code)}}function _(n,M){if(n&1&&(o(0,"div")(1,"h3")(2,"b"),t(3,"Accessing Params from routing"),e()(),o(4,"ul")(5,"li"),t(6,"Inject ActivatedRoute in the constructor."),e(),o(7,"pre")(8,"code",5,0),t(10),e()(),o(11,"li"),t(12,"Alternative: Subscribe to Param Changes (if route can change without recreating component)"),e(),t(13," Use this if you stay on the same component but navigate between different IDs (e.g., from /product/1 to /product/2). "),o(14,"pre")(15,"code",5,0),t(17),e()()()()),n&2){let i=u();a(10),p(i.param1),a(7),p(i.param2)}}var D=(()=>{class n{constructor(){this.code=`
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
  `,this.param1=`
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
  `,this.param2=`
      ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
          this.productId = params.get('id')!;
        });
      }
  `}ngAfterViewChecked(){E.default.highlightAll()}static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275cmp=d({type:n,selectors:[["app-learn-routing"]],viewQuery:function(r,s){if(r&1&&h(w,5),r&2){let c;f(c=g())&&(s.codeElement=c.first)}},standalone:!0,features:[b],decls:26,vars:0,consts:[["codeElement",""],[1,"header"],["label","Syntax Reference"],["matTabContent",""],["label","Miscelleneous"],[1,"language-typescript"]],template:function(r,s){r&1&&(o(0,"h2",1),t(1,"Routing"),e(),o(2,"label")(3,"b"),t(4,"Routing:"),e(),t(5," Routing in Angular enables navigation between different views or components based on the URL."),e(),m(6,"br"),o(7,"label")(8,"b"),t(9,"Router Module:"),e(),t(10," The RouterModule is an Angular module that provides the necessary services and directives for configuring and handling application routing."),e(),m(11,"br"),o(12,"label")(13,"b"),t(14,"Route:"),e(),t(15," A route is a configuration object that maps a URL path to a specific component."),e(),m(16,"br"),o(17,"label")(18,"b"),t(19,"Router Outlet:"),e(),t(20," The <router-outlet> is a directive that acts as a placeholder where the matched component is displayed."),e(),o(21,"mat-tab-group")(22,"mat-tab",2),l(23,A,4,1,"ng-template",3),e(),o(24,"mat-tab",4),l(25,_,18,2,"ng-template",3),e()())},dependencies:[v,x,C,R]})}}return n})();export{D as LearnRoutingComponent};
