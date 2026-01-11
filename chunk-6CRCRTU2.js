import"./chunk-WCULWZKC.js";import{a as M}from"./chunk-VDRUEQXK.js";import{a as g,b as y,c as E,d as b}from"./chunk-GNZ74KMC.js";import"./chunk-XAZLOLJU.js";import"./chunk-SZTU5CXE.js";import{Ia as a,Ya as c,da as v,e as I,hb as t,ib as e,jb as h,mb as s,qb as u,rb as S,sb as x,ub as i,vb as o,zb as f}from"./chunk-KMNIY7WT.js";var C=I(M());var _=["codeElement"];function j(n,m){if(n&1&&(t(0,"pre")(1,"code",6,0),i(3),e()()),n&2){let r=s();a(3),o(r.code)}}function w(n,m){if(n&1&&(t(0,"div")(1,"h3")(2,"b"),i(3,"providedIn: 'root'"),e()(),t(4,"ul")(5,"li"),i(6,"This registers the service with the root injector, making it a singleton and available application-wide."),e()(),t(7,"pre")(8,"code",6,0),i(10),e()()(),t(11,"div")(12,"h3")(13,"b"),i(14,"NgModule Providers"),e()(),t(15,"ul")(16,"li"),i(17,"Register the service in the providers array of an Angular module."),e()(),t(18,"pre")(19,"code",6,0),i(21),e()()(),t(22,"div")(23,"h3")(24,"b"),i(25,"Component Providers"),e()(),t(26,"ul")(27,"li"),i(28,"Register the service in the providers array of a component, creating a new instance for each component."),e()(),t(29,"pre")(30,"code",6,0),i(32),e()()()),n&2){let r=s();a(10),o(r.root),a(11),o(r.module),a(11),o(r.component)}}function D(n,m){if(n&1&&(t(0,"div")(1,"h3")(2,"b"),i(3,"Dependency Injection"),e()(),t(4,"ul")(5,"li"),i(6,"Constructor Injection: Inject services into components, directives, or other services via the constructor."),e()(),t(7,"pre")(8,"code",6,0),i(10),e()()(),t(11,"div")(12,"h3")(13,"b"),i(14,"NgModule Providers"),e()(),t(15,"ul")(16,"li"),i(17,"Injector Hierarchy: Angular's DI system is hierarchical, meaning child injectors inherit providers from parent injectors. This allows different instances of services to be created at different levels of the application."),e()(),t(18,"pre")(19,"code",6,0),i(21),e()()(),t(22,"div")(23,"h3")(24,"b"),i(25,"Service Scope"),e()(),t(26,"ul")(27,"li"),i(28,"Singleton Services: Provided at the root level or a module level, ensuring a single instance throughout the application."),e(),t(29,"li"),i(30,"Scoped Services: Provided at the component level, creating a new instance for each component and its child components."),e()()()),n&2){let r=s();a(10),o(r.injection),a(11),o(r.hierarchicalInjection)}}var k=(()=>{class n{constructor(){this.code=`
  import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root'
  })
  export class DataService {
    private data: any[] = [];

    constructor() { }

    getData(): any[] {
      return this.data;
    }

    addData(item: any): void {
      this.data.push(item);
    }

    clearData(): void {
      this.data = [];
    }
  }
  `,this.root=`
  @Injectable({
  providedIn: 'root'
  })
  export class MyService { }
  `,this.module=`@NgModule({
  providers: [MyService]
  })
  export class MyModule { }
  `,this.component=`
  @Component({
  providers: [MyService]
  })
  export class MyComponent { }
  `,this.injection=`export class MyComponent {
    constructor(private myService: MyService) {}

    ngOnInit() {
      console.log(this.myService.getData());
    }
  }
  `,this.hierarchicalInjection=` @Component({
    providers: [MyService]
  })
  export class ParentComponent {
    constructor(private myService: MyService) { }
  }

  @Component({
    selector: 'app-child',
    template: '<p>Child Component</p>'
  })
  export class ChildComponent {
    constructor(private myService: MyService) { }
  }
  `}ngAfterViewChecked(){C.highlightAll()}static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=v({type:n,selectors:[["app-learn-services"]],viewQuery:function(l,d){if(l&1&&u(_,5),l&2){let p;S(p=x())&&(d.codeElement=p.first)}},standalone:!0,features:[f],decls:18,vars:0,consts:[["codeElement",""],[1,"header"],["label","Syntax Reference"],["matTabContent",""],["label","Providing Services"],["label","Other Details"],[1,"language-typescript"]],template:function(l,d){l&1&&(t(0,"h2",1),i(1,"Services"),e(),t(2,"label")(3,"b"),i(4,"Definition"),e(),i(5,": A service is a class with a narrow, well-defined purpose. It provides functionality that can be used across multiple components and modules."),e(),h(6,"br"),t(7,"label")(8,"b"),i(9,"Usage"),e(),i(10,": Services are typically used for tasks such as fetching data from a server, logging, validating user input, and any other non-UI related tasks."),e(),t(11,"mat-tab-group")(12,"mat-tab",2),c(13,j,4,1,"ng-template",3),e(),t(14,"mat-tab",4),c(15,w,33,3,"ng-template",3),e(),t(16,"mat-tab",5),c(17,D,31,2,"ng-template",3),e()())},dependencies:[b,g,y,E]})}}return n})();export{k as LearnServicesComponent};
