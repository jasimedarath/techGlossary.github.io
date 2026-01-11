import"./chunk-WCULWZKC.js";import{a as C}from"./chunk-VDRUEQXK.js";import{a as P,b as y,c as v,d as E}from"./chunk-GNZ74KMC.js";import"./chunk-XAZLOLJU.js";import"./chunk-SZTU5CXE.js";import{Ia as l,Ya as o,da as d,e as T,hb as t,ib as e,jb as f,mb as m,qb as h,rb as x,sb as g,ub as n,vb as p,zb as b}from"./chunk-KMNIY7WT.js";var S=T(C());var _=["codeElement"];function M(i,s){if(i&1&&(t(0,"pre")(1,"code",6,0),n(3),e()()),i&2){let a=m();l(3),p(a.code)}}function w(i,s){if(i&1&&(t(0,"div")(1,"h3")(2,"b"),n(3,"Built-In"),e()(),t(4,"ul")(5,"li"),n(6," Angular provides several built-in pipes for common data transformations. "),e()(),t(7,"pre")(8,"code",6,0),n(10),e()()(),t(11,"div")(12,"h3")(13,"b"),n(14,"Custom"),e()(),t(15,"ul")(16,"li"),n(17," Purpose: These directives change the DOM layout by adding or removing DOM elements. They modify the structure of the DOM. "),e()(),t(18,"pre")(19,"code",6,0),n(21),e()()()),i&2){let a=m();l(10),p(a.builtinPipes),l(11),p(a.customPipes)}}function D(i,s){if(i&1&&(t(0,"div")(1,"h3")(2,"b"),n(3,"Pure Pipes (default)"),e()(),t(4,"ul")(5,"li"),n(6," Only execute when the inputs change. Angular checks these pipes for changes only when it detects changes in their input values. "),e()()(),t(7,"div")(8,"h3")(9,"b"),n(10,"Impure Pipes"),e()(),t(11,"ul")(12,"li"),n(13," Execute on every change detection cycle, regardless of whether the inputs have changed. This can lead to performance issues if not used carefully. "),e()(),t(14,"pre")(15,"code",6,0),n(17),e()()()),i&2){let a=m();l(17),p(a.impurePipe)}}var Q=(()=>{class i{constructor(){this.code=`
  import { Pipe, PipeTransform } from '@angular/core';

  @Pipe({
    name: 'capitalize'
  })
  export class CapitalizePipe implements PipeTransform {

    transform(value: string): string {
      if (!value) return value;
      return value.replace(/\bw/g, first => first.toLocaleUpperCase());
    }
  }

  `,this.builtinPipes=`
  <p>{{ today | date:'fullDate' }}</p>

  <p>{{ 'hello' | uppercase }}</p>

  <p>{{ amount | currency:'USD' }}</p>

  <p>{{ 3.14159 | number:'1.2-2' }}</p>

  <p>{{ 0.25 | percent }}</p>

  <p>{{ object | json }}</p>

  <p>{{ items | slice:1:3 }}</p>

  <p>{{ observableValue | async }}</p>

  `,this.customPipes=`

  // Definition

  import { Pipe, PipeTransform } from '@angular/core';

  @Pipe({ name: 'exponentialStrength' })
  export class ExponentialStrengthPipe implements PipeTransform {
    transform(value: number, exponent: number): number {
      return Math.pow(value, exponent);
    }
  }

  //Register

  @NgModule({
  declarations: [ExponentialStrengthPipe],
    ...
  })
  export class AppModule { }

  //Usage

  <p>{{ 2 | exponentialStrength:3 }}</p> <!-- Outputs: 8 -->

  `,this.impurePipe=`
  @Pipe({ name: 'impurePipe', pure: false })
  export class ImpurePipe implements PipeTransform {
    transform(value: any): any {
      // Transform logic
    }
  }
  `}ngAfterViewChecked(){S.highlightAll()}static{this.\u0275fac=function(r){return new(r||i)}}static{this.\u0275cmp=d({type:i,selectors:[["app-learn-pipe"]],viewQuery:function(r,u){if(r&1&&h(_,5),r&2){let c;x(c=g())&&(u.codeElement=c.first)}},standalone:!0,features:[b],decls:18,vars:0,consts:[["codeElement",""],[1,"header"],["label","Syntax Reference"],["matTabContent",""],["label","Types"],["label","Pipe Lifecycles"],[1,"language-typescript"]],template:function(r,u){r&1&&(t(0,"h2",1),n(1,"Pipes"),e(),t(2,"label")(3,"b"),n(4,"Definition"),e(),n(5,": A pipe is a function that takes in a value, transforms it, and outputs the transformed value. They are used in Angular templates to format data displayed to the user."),e(),f(6,"br"),t(7,"label")(8,"b"),n(9,"Usage"),e(),n(10,": Pipes are used by applying the pipe symbol (|) followed by the pipe name in Angular templates."),e(),t(11,"mat-tab-group")(12,"mat-tab",2),o(13,M,4,1,"ng-template",3),e(),t(14,"mat-tab",4),o(15,w,22,2,"ng-template",3),e(),t(16,"mat-tab",5),o(17,D,18,1,"ng-template",3),e()())},dependencies:[E,P,y,v]})}}return i})();export{Q as LearnPipeComponent};
