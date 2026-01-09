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

// src/app/components/angular/learn-component/learn-component.component.ts
var Prism = __toESM(require_prism());
var _c0 = ["codeElement"];
function LearnComponentComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre")(1, "code", 7, 0);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.code);
  }
}
function LearnComponentComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre")(1, "code", 7, 0);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "h3")(6, "b");
    \u0275\u0275text(7, "providers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ul")(9, "li");
    \u0275\u0275text(10, " Specifies an array of providers that are available to the component and its children. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div")(12, "h3")(13, "b");
    \u0275\u0275text(14, "animations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "ul")(16, "li");
    \u0275\u0275text(17, "Defines the animations that can be used within the component.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div")(19, "h3")(20, "b");
    \u0275\u0275text(21, "changeDetection");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "ul")(23, "li");
    \u0275\u0275text(24, " Defines the change detection strategy for the component. Values can be ChangeDetectionStrategy.Default or ChangeDetectionStrategy.OnPush. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div")(26, "h3")(27, "b");
    \u0275\u0275text(28, "encapsulation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "ul")(30, "li");
    \u0275\u0275text(31, " Defines the style encapsulation strategy for the component. Values can be ViewEncapsulation.Emulated, ViewEncapsulation.None, or ViewEncapsulation.ShadowDom. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div")(33, "h3")(34, "b");
    \u0275\u0275text(35, "host");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "ul")(37, "li");
    \u0275\u0275text(38, " Defines the host element bindings for the component. Allows you to set properties, attributes, and listeners on the host element. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div")(40, "h3")(41, "b");
    \u0275\u0275text(42, "interpolation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "ul")(44, "li");
    \u0275\u0275text(45, " Configures the interpolation delimiters used in the component's template. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div")(47, "h3")(48, "b");
    \u0275\u0275text(49, "moduleId");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "ul")(51, "li");
    \u0275\u0275text(52, " Used to set the module ID for the component. Useful for module-relative URLs. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "div")(54, "h3")(55, "b");
    \u0275\u0275text(56, "entryComponents");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "ul")(58, "li");
    \u0275\u0275text(59, " Specifies a list of components that should be compiled when the module is defined. This is used for dynamically loaded components. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div")(61, "h3")(62, "b");
    \u0275\u0275text(63, "viewProviders");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "ul")(65, "li");
    \u0275\u0275text(66, " Similar to providers, but the services provided here are available only to the component view and its children, not to the content children. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "div")(68, "h3")(69, "b");
    \u0275\u0275text(70, "exportAs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "ul")(72, "li");
    \u0275\u0275text(73, " Defines an alias to use for the component when exporting it in templates. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(74, "div")(75, "h3")(76, "b");
    \u0275\u0275text(77, "template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "ul")(79, "li");
    \u0275\u0275text(80, " Allows you to define the template inline instead of using a separate HTML file. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.codeExtras);
  }
}
function LearnComponentComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3")(2, "b");
    \u0275\u0275text(3, "Input and Output Properties");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ul")(5, "li");
    \u0275\u0275text(6, " @Input(): Used to pass data from a parent component to a child component. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "li");
    \u0275\u0275text(8, " @Output(): Used to emit events from a child component to notify the parent component about changes. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "pre")(10, "code", 7, 0);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div")(14, "h3")(15, "b");
    \u0275\u0275text(16, "ViewChild and ContentChild");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "ul")(18, "li");
    \u0275\u0275text(19, " @ViewChild(): Used to access a child component, directive, or DOM element from the parent component's template. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "pre")(21, "code", 7, 0);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "li");
    \u0275\u0275text(25, " @ContentChild(): Decorator used to access a projected content within a component. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "pre")(27, "code", 7, 0);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "div")(31, "h3")(32, "b");
    \u0275\u0275text(33, "Service-Based Communication");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "ul")(35, "li");
    \u0275\u0275text(36, " Shared Service: Using a service to share data and communicate between components that do not have a parent-child relationship. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "pre")(38, "code", 7, 0);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "div")(42, "h3")(43, "b");
    \u0275\u0275text(44, "Event Emitter Service");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "ul")(46, "li");
    \u0275\u0275text(47, " Event Emitter Service: Using an Angular service with an EventEmitter to emit and listen to events between components. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "pre")(49, "code", 7, 0);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "div")(53, "h3")(54, "b");
    \u0275\u0275text(55, "Reactive Forms");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "ul")(57, "li");
    \u0275\u0275text(58, " Reactive Forms: Using reactive forms to handle form inputs and synchronize data between form controls and the component class. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "pre")(60, "code", 7, 0);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(63, "div")(64, "h3")(65, "b");
    \u0275\u0275text(66, "Template Reference Variables");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "ul")(68, "li");
    \u0275\u0275text(69, " Template Reference Variables: Using template reference variables to interact with child components and DOM elements directly in the template. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "pre")(71, "code", 7, 0);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r0.inputOutput);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.viewChild);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.viewContentChild);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.serviceBased);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.eventEmitter);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.reactiveForms);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.templateRef);
  }
}
function LearnComponentComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3")(2, "b");
    \u0275\u0275text(3, "Interpolation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ul")(5, "li");
    \u0275\u0275text(6, " Displaying component properties in the template using curly braces . ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div")(8, "h3")(9, "b");
    \u0275\u0275text(10, "Property Binding");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "ul")(12, "li");
    \u0275\u0275text(13, ' Binding DOM properties to component properties using [property]="value". ');
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div")(15, "h3")(16, "b");
    \u0275\u0275text(17, "Event Binding");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "ul")(19, "li");
    \u0275\u0275text(20, ' Listening to events and calling component methods using (event)="handler". ');
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div")(22, "h3")(23, "b");
    \u0275\u0275text(24, "Two-way Binding");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "ul")(26, "li");
    \u0275\u0275text(27, " Using [(ngModel)] to bind input fields to component properties. ");
    \u0275\u0275elementEnd()()();
  }
}
var LearnComponentComponent = class _LearnComponentComponent {
  constructor() {
    this.code = `
  import { Component} from '@angular/core';

  @Component({
    selector: 'app-compA',
    standalone: true,
    imports: [],
    templateUrl: './comonent-name.component.html',
    styleUrls: ['./comonent-name.component.scss'],
  })
    
  export class ComponentNameComponent {
  
  }`;
    this.inputOutput = `// Child component
  @Component({
    selector: 'child-component',
    template: '<button (click)="notifyParent()">Click me</button>'
  })
  export class ChildComponent {
    @Input() data: string;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    notifyParent() {
      this.notify.emit('Child component clicked');
    }
  }

  // Parent component
  @Component({
    selector: 'parent-component',
    template: '<child-component [data]="parentData" (notify)="handleNotify($event)"></child-component>'
  })
  export class ParentComponent {
    parentData = 'Hello from parent';

    handleNotify(event: string) {
      console.log(event);
    }
  }
  `;
    this.viewChild = `// Child component
  @Component({
    selector: 'child-component',
    template: '<p>Child Component</p>'
  })
  export class ChildComponent {
    childData = 'Data from child';
  }

  // Parent component
  @Component({
    selector: 'parent-component',
    template: '<child-component></child-component>'
  })
  export class ParentComponent implements AfterViewInit {
    @ViewChild(ChildComponent) childComponent: ChildComponent;

    ngAfterViewInit() {
      console.log(this.childComponent.childData);
    }
  }
  `;
    this.viewContentChild = `// Parent component
    <my-card>
      <p #projectedParagraph>This is content projected into the card.</p>
    </my-card>


  // Child component
  import { Component, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

  @Component({
    selector: 'my-card',
    template: \`
      <div class="card">
        <ng-content></ng-content>
      </div>
    \`
  })
  export class MyCardComponent implements AfterContentInit {
    @ContentChild('projectedParagraph') paragraph!: ElementRef;

    ngAfterContentInit() {
      console.log('Projected Content:', this.paragraph.nativeElement.textContent);
    }
  }

  `;
    this.serviceBased = `@Injectable({
    providedIn: 'root'
  })
  export class SharedService {
    private data = new BehaviorSubject<string>('Initial data');
    data$ = this.data.asObservable();

    updateData(newData: string) {
      this.data.next(newData);
    }
  }

  // Component A
  @Component({
    selector: 'component-a',
    template: '<button (click)="updateData()">Update Data</button>'
  })
  export class ComponentA {
    constructor(private sharedService: SharedService) {}

    updateData() {
      this.sharedService.updateData('Updated data from Component A');
    }
  }

  // Component B
  @Component({
    selector: 'component-b',
    template: '<p>{{ data }}</p>'
  })
  export class ComponentB implements OnInit {
    data: string;

    constructor(private sharedService: SharedService) {}

    ngOnInit() {
      this.sharedService.data$.subscribe(data => this.data = data);
    }
  }
  `;
    this.eventEmitter = `@Injectable({
    providedIn: 'root'
  })
  export class EventEmitterService {
    event = new EventEmitter<string>();

    emitEvent(message: string) {
      this.event.emit(message);
    }
  }

  // Component A
  @Component({
    selector: 'component-a',
    template: '<button (click)="emitEvent()">Emit Event</button>'
  })
  export class ComponentA {
    constructor(private eventEmitterService: EventEmitterService) {}

    emitEvent() {
      this.eventEmitterService.emitEvent('Event from Component A');
    }
  }

  // Component B
  @Component({
    selector: 'component-b',
    template: '<p>{{ message }}</p>'
  })
  export class ComponentB implements OnInit {
    message: string;

    constructor(private eventEmitterService: EventEmitterService) {}

    ngOnInit() {
      this.eventEmitterService.event.subscribe(message => this.message = message);
    }
  }
  `;
    this.reactiveForms = `
  @Component({
    selector: 'form-component',
    template: \`
      <form [formGroup]="formGroup">
        <input formControlName="name">
      </form>
      <p>{{ formGroup.get('name').value }}</p>
    \`
  })
  export class FormComponent implements OnInit {
    formGroup: FormGroup;
  
    constructor(private fb: FormBuilder) {}
  
    ngOnInit() {
      this.formGroup = this.fb.group({
        name: ['']
      });
    }
  }
  `;
    this.templateRef = `// Child component
@Component({
  selector: 'child-component',
  template: '<p>Child Component</p>'
})
export class ChildComponent {
  childData = 'Data from child';
}

// Parent component
@Component({
  selector: 'parent-component',
  template: \`
    <child-component #childRef></child-component>
    <button (click)="accessChildData(childRef)">Access Child Data</button>
  \`
})
export class ParentComponent {
  accessChildData(child: ChildComponent) {
    console.log(child.childData);
  }
}
`;
    this.codeExtras = `import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-compA',
  standalone: true,
  imports: [],
  templateUrl: './component-name.component.html',
  styleUrls: ['./component-name.component.scss'],
  providers: [MyService],
  animations: [trigger('myAnimation', [
    state('state1', style({ backgroundColor: 'blue' })),
    transition('state1 => state2', [animate('1s')])
  ])],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  host: {
    '[class.special]': 'isSpecial',
    '(click)': 'onClick()'
  },
  interpolation: ['{{', '}}'],
  moduleId: module.id,
  entryComponents: [MyDynamicComponent],
  viewProviders: [AnotherService],
  exportAs: 'myComponentAlias',
  template: '<p>This is an inline template</p>'
})
export class CompAComponent {
  // Component logic here
}
`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function LearnComponentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LearnComponentComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LearnComponentComponent, selectors: [["app-learn-component"]], viewQuery: function LearnComponentComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.codeElement = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 0, consts: [["codeElement", ""], [1, "header"], ["label", "Syntax Reference"], ["matTabContent", ""], ["label", "Extras"], ["label", "Component Communication"], ["label", "Data Binding"], [1, "language-typescript"]], template: function LearnComponentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 1);
        \u0275\u0275text(1, "Components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "label");
        \u0275\u0275text(3, "A component in Angular is a self-contained unit that controls a part of the user interface using a template, logic, and styles.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "mat-tab-group")(5, "mat-tab", 2);
        \u0275\u0275template(6, LearnComponentComponent_ng_template_6_Template, 4, 1, "ng-template", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-tab", 4);
        \u0275\u0275template(8, LearnComponentComponent_ng_template_8_Template, 81, 1, "ng-template", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "mat-tab", 5);
        \u0275\u0275template(10, LearnComponentComponent_ng_template_10_Template, 74, 7, "ng-template", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-tab", 6);
        \u0275\u0275template(12, LearnComponentComponent_ng_template_12_Template, 28, 0, "ng-template", 3);
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [MatTabsModule, MatTabContent, MatTab, MatTabGroup] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LearnComponentComponent, { className: "LearnComponentComponent", filePath: "src\\app\\components\\angular\\learn-component\\learn-component.component.ts", lineNumber: 19 });
})();
export {
  LearnComponentComponent
};
//# sourceMappingURL=chunk-7U7HY5EB.js.map
