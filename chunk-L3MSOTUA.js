import"./chunk-WCULWZKC.js";import{a as C}from"./chunk-VDRUEQXK.js";import{a as E,b as v,c as y,d as b}from"./chunk-GNZ74KMC.js";import"./chunk-XAZLOLJU.js";import"./chunk-SZTU5CXE.js";import{Ia as r,Ya as a,da as u,e as g,hb as e,ib as t,mb as d,qb as h,rb as x,sb as f,ub as n,vb as s,zb as S}from"./chunk-KMNIY7WT.js";var M=g(C());var _=["codeElement"];function T(i,m){if(i&1&&(e(0,"pre")(1,"code",8,0),n(3),t()()),i&2){let o=d();r(3),s(o.code)}}function A(i,m){if(i&1&&(e(0,"pre")(1,"code",8,0),n(3),t()(),e(4,"div")(5,"h3")(6,"b"),n(7,"declarations"),t()(),e(8,"ul")(9,"li"),n(10,"This array is used to declare components, directives, and pipes that belong to the module."),t(),e(11,"li"),n(12,"Angular needs to know about these declarations so it can recognize and use them in templates."),t()()(),e(13,"div")(14,"h3")(15,"b"),n(16,"imports"),t()(),e(17,"ul")(18,"li"),n(19,"This array is used to import other modules that export components, directives, and pipes needed by the components in this module."),t(),e(20,"li"),n(21,"By importing a module, all the declared components, directives, and pipes of the imported module become available to this module."),t()()(),e(22,"div")(23,"h3")(24,"b"),n(25,"providers"),t()(),e(26,"ul")(27,"li"),n(28,"This array is used to define the services that the injector will provide."),t(),e(29,"li"),n(30,"These services can be injected into components, directives, and other services within the module."),t()()(),e(31,"div")(32,"h3")(33,"b"),n(34,"bootstrap"),t()(),e(35,"ul")(36,"li"),n(37,"This array is used to specify the root component that Angular should bootstrap when the application is started."),t(),e(38,"li"),n(39,"Typically, this is only used in the root module (e.g., AppModule)."),t()()(),e(40,"div")(41,"h3")(42,"b"),n(43,"exports"),t()(),e(44,"ul")(45,"li"),n(46,"Specifies a set of components, directives, and pipes that can be used in the templates of other modules."),t()()(),e(47,"div")(48,"h3")(49,"b"),n(50,"entryComponents"),t()(),e(51,"ul")(52,"li"),n(53,"Specifies a set of components that are compiled when the module is defined, rather than when they are referenced in a template."),t(),e(54,"li"),n(55,"Commonly used for dynamically loading components."),t()()(),e(56,"div")(57,"h3")(58,"b"),n(59,"schemas"),t()(),e(60,"ul")(61,"li"),n(62,"Specifies a set of schemas that declare elements to be recognized by the Angular compiler."),t()()(),e(63,"div")(64,"h3")(65,"b"),n(66,"id"),t()(),e(67,"ul")(68,"li"),n(69,"Provides a unique identifier for the module, useful for debugging or analytics."),t()()()),i&2){let o=d();r(3),s(o.codeExtras)}}function w(i,m){i&1&&(e(0,"div")(1,"h3")(2,"b"),n(3,"Root Module"),t()(),e(4,"ul")(5,"li"),n(6,"The main module that bootstraps the angular application."),t()()(),e(7,"div")(8,"h3")(9,"b"),n(10,"Feature Modules"),t()(),e(11,"ul")(12,"li"),n(13,"Organize an application into foused areas of functionality."),t()()(),e(14,"div")(15,"h3")(16,"b"),n(17,"Shared Modules"),t()(),e(18,"ul")(19,"li"),n(20,"Contain common directives,pipes and components needed across multiple modules."),t()()(),e(21,"div")(22,"h3")(23,"b"),n(24,"Service Modules"),t()(),e(25,"ul")(26,"li"),n(27,"Contain and provide services that are used across multiple application."),t()()())}function L(i,m){i&1&&(e(0,"div")(1,"h3")(2,"b"),n(3,"Avoid Circular Dependencies"),t()(),e(4,"ul")(5,"li"),n(6,"Ensure modules don't depend on each other in a circular manner."),t()()(),e(7,"div")(8,"h3")(9,"b"),n(10,"Lazy Loading"),t()(),e(11,"ul")(12,"li"),n(13,"Load feature modules asynchronously to improve performance"),t()()(),e(14,"div")(15,"h3")(16,"b"),n(17,"Shared Modules"),t()(),e(18,"ul")(19,"li"),n(20,"Use shared modules for common components,directives and pipes."),t()()(),e(21,"div")(22,"h3")(23,"b"),n(24,"Feature Modules"),t()(),e(25,"ul")(26,"li"),n(27,"Organize features and functionality into separate modules to improve maintainability."),t()()())}function D(i,m){i&1&&(e(0,"div")(1,"h3")(2,"b"),n(3,"ProvidedIn vs providers array for declaring services"),t()()())}var P=(()=>{class i{constructor(){this.code=`
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
  `,this.codeExtras=`import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
`}ngAfterViewChecked(){M.highlightAll()}static{this.\u0275fac=function(l){return new(l||i)}}static{this.\u0275cmp=u({type:i,selectors:[["app-learn-module"]],viewQuery:function(l,p){if(l&1&&h(_,5),l&2){let c;x(c=f())&&(p.codeElement=c.first)}},standalone:!0,features:[S],decls:15,vars:0,consts:[["codeElement",""],[1,"header"],["label","Syntax Reference"],["matTabContent",""],["label","Extras"],["label","Types"],["label","Best Practices"],["label","Miscellaneous"],[1,"language-typescript"]],template:function(l,p){l&1&&(e(0,"h2",1),n(1,"Modules"),t(),e(2,"label"),n(3,"A module in Angular is a container that groups related components, directives, pipes, and services to organize the application."),t(),e(4,"mat-tab-group")(5,"mat-tab",2),a(6,T,4,1,"ng-template",3),t(),e(7,"mat-tab",4),a(8,A,70,1,"ng-template",3),t(),e(9,"mat-tab",5),a(10,w,28,0,"ng-template",3),t(),e(11,"mat-tab",6),a(12,L,28,0,"ng-template",3),t(),e(13,"mat-tab",7),a(14,D,4,0,"ng-template",3),t()())},dependencies:[b,E,v,y]})}}return i})();export{P as LearnModuleComponent};
