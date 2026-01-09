import"./chunk-WCULWZKC.js";import{a as E}from"./chunk-FSUYFWSG.js";import{a as f,b as C,c as y,d as S}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as r,Xa as s,da as v,e as D,gb as e,hb as t,lb as c,pb as h,qb as u,rb as g,tb as i,ub as a,yb as x}from"./chunk-WGQ2ELTG.js";var b=D(E());var _=["codeElement"];function M(n,m){if(n&1&&(e(0,"pre")(1,"code",6,0),i(3),t()()),n&2){let o=c();r(3),a(o.code)}}function w(n,m){if(n&1&&(e(0,"div")(1,"h3")(2,"b"),i(3,"Component Directives"),t()(),e(4,"ul")(5,"li"),i(6,"Purpose: These are the most common type of directives. A component is essentially a directive with a template."),t()(),e(7,"pre")(8,"code",6,0),i(10),t()()(),e(11,"div")(12,"h3")(13,"b"),i(14,"Structural Directives"),t()(),e(15,"ul")(16,"li"),i(17,"Purpose: These directives change the DOM layout by adding or removing DOM elements. They modify the structure of the DOM."),t()(),e(18,"pre")(19,"code",6,0),i(21),t()()(),e(22,"div")(23,"h3")(24,"b"),i(25,"Attribute Directives"),t()(),e(26,"ul")(27,"li"),i(28,"Purpose: These directives change the appearance or behavior of an element, component, or another directive."),t()()(),e(29,"pre")(30,"code",6,0),i(32),t()(),e(33,"div")(34,"h3")(35,"b"),i(36,"Custom Directives"),t()(),e(37,"ul")(38,"pre")(39,"code",6,0),i(41),t()()()()),n&2){let o=c();r(10),a(o.componentDir),r(11),a(o.structuralDir),r(11),a(o.attributeDir),r(9),a(o.code)}}function L(n,m){if(n&1&&(e(0,"div")(1,"h3")(2,"b"),i(3,"Component Directives"),t()(),e(4,"ul")(5,"li"),i(6,"@HostBinding: Binds a property of the host element to a directive property."),t(),e(7,"li"),i(8,"@HostListener: Listens to events on the host element and calls a directive method."),t(),e(9,"pre")(10,"code",6,0),i(12),t()()()()),n&2){let o=c();r(12),a(o.miscCode)}}var R=(()=>{class n{constructor(){this.code=`
    import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

    @Directive({
      selector: '[appHoverHighlight]'
    })
    export class HoverHighlightDirective {

      constructor(private el: ElementRef, private renderer: Renderer2) { }

      @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
      }

      @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
      }

      private highlight(color: string | null) {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
      }
    }
  `,this.componentDir=`
    @Component({
    selector: 'app-my-component',
    templateUrl: './my-component.component.html',
    styleUrls: ['./my-component.component.scss']
    })
    
    export class MyComponent {
      // Component logic here
    }
  `,this.structuralDir=`
  //ngIf: Conditionally includes a template based on a boolean value.

         <div *ngIf="condition">Content to display if condition is true</div>

  // ngFor: Repeats a template for each item in a collection.

        <div *ngFor="let item of items">{{ item }}</div>

  //ngSwitch: Switches among multiple possible templates based on a value.

        <div [ngSwitch]="value">
          <div *ngSwitchCase="'case1'">Case 1 content</div>
          <div *ngSwitchCase="'case2'">Case 2 content</div>
          <div *ngSwitchDefault>Default content</div>
        </div>
`,this.attributeDir=`
  //ngClass: Adds or removes CSS classes based on an expression.

        <div [ngClass]="{'active': isActive}">Toggle active class</div>


  //ngStyle: Applies inline styles to an element based on an expression.

        <div [ngStyle]="{'color': color}">Styled text</div>
  `,this.miscCode=`
    @Directive({
      selector: '[appHighlight]'
    })

    export class HighlightDirective {
      @HostBinding('style.backgroundColor') backgroundColor: string;

      @HostListener('mouseenter') onMouseEnter() {
        this.backgroundColor = 'yellow';
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.backgroundColor = 'transparent';
    }
  }
`}ngAfterViewChecked(){b.highlightAll()}static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=v({type:n,selectors:[["app-learn-directive"]],viewQuery:function(l,d){if(l&1&&h(_,5),l&2){let p;u(p=g())&&(d.codeElement=p.first)}},standalone:!0,features:[x],decls:11,vars:0,consts:[["codeElement",""],[1,"header"],["label","Syntax Reference"],["matTabContent",""],["label","Types"],["label","Miscelleneous"],[1,"language-typescript"]],template:function(l,d){l&1&&(e(0,"h2",1),i(1,"Directives"),t(),e(2,"label"),i(3,"Directives are special classes that allow you to add behavior to elements in your Angular applications."),t(),e(4,"mat-tab-group")(5,"mat-tab",2),s(6,M,4,1,"ng-template",3),t(),e(7,"mat-tab",4),s(8,w,42,4,"ng-template",3),t(),e(9,"mat-tab",5),s(10,L,13,1,"ng-template",3),t()())},dependencies:[S,f,C,y]})}}return n})();export{R as LearnDirectiveComponent};
