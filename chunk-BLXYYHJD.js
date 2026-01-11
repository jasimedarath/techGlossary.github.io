import"./chunk-WCULWZKC.js";import{a as C}from"./chunk-VDRUEQXK.js";import{Ia as l,da as c,e as g,hb as n,ib as o,qb as p,rb as d,sb as h,ub as r,vb as f,zb as m}from"./chunk-KMNIY7WT.js";var u=g(C());var y=["codeElement"],w=(()=>{class t{constructor(){this.code=`
  import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, SimpleChanges } from '@angular/core';
  
  @Component({
    selector: 'app-compA',
    standalone: true,
    imports: [],
    templateUrl: './component-name.component.html',
    styleUrls: ['./component-name.component.scss'],
  })
  export class ComponentNameComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    @Input() inputProperty: any;
  
    constructor() {
      // Constructor is called first, before any other lifecycle hook
    }
  
    ngOnInit() {
      // ngOnInit is called once after the first ngOnChanges
      // Purpose: Initialize the component after Angular first displays the data-bound properties
    }
  
    ngOnChanges(changes: SimpleChanges) {
      // ngOnChanges is called when any data-bound input property changes
      // Purpose: Respond to changes in input properties
    }
  
    ngDoCheck() {
      // ngDoCheck is called during every change detection run
      // Purpose: Detect and act upon changes that Angular doesn't automatically detect
    }
  
    ngAfterContentInit() {
      // ngAfterContentInit is called once after the first ngDoCheck
      // Purpose: Respond after Angular projects external content into the component's view
    }
  
    ngAfterContentChecked() {
      // ngAfterContentChecked is called after ngAfterContentInit and every subsequent ngDoCheck
      // Purpose: Respond after Angular checks the content projected into the component
    }
  
    ngAfterViewInit() {
      // ngAfterViewInit is called once after the first ngAfterContentChecked
      // Purpose: Respond after Angular initializes the component's views and child views
    }
  
    ngAfterViewChecked() {
      // ngAfterViewChecked is called after ngAfterViewInit and every subsequent ngAfterContentChecked
      // Purpose: Respond after Angular checks the component's views and child views
    }
  
    ngOnDestroy() {
      // ngOnDestroy is called just before Angular destroys the component
      // Purpose: Cleanup before Angular destroys the component
    }
  }
  `.trim()}ngOnInit(){u.highlightAll()}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=c({type:t,selectors:[["app-learn-lifecyclehooks"]],viewQuery:function(e,i){if(e&1&&p(y,5),e&2){let a;d(a=h())&&(i.codeElement=a.first)}},standalone:!0,features:[m],decls:8,vars:1,consts:[["codeElement",""],[1,"header"],[1,"language-typescript"]],template:function(e,i){e&1&&(n(0,"h2",1),r(1,"Life Cycle Hooks"),o(),n(2,"h5"),r(3,"Syntax Reference"),o(),n(4,"pre")(5,"code",2,0),r(7),o()()),e&2&&(l(7),f(i.code))}})}}return t})();export{w as LearnLifecyclehooksComponent};
