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
  ɵɵnextContext,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-N7AAI6XN.js";

// src/app/components/angular/learn-forms/learn-forms.component.ts
var Prism = __toESM(require_prism());
function LearnFormsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1, "Template-driven forms are suitable for simple forms and rely heavily on Angular's directives. They are easier to set up and use Angular's two-way data binding.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div")(3, "h2");
    \u0275\u0275text(4, "Setting Up");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h3")(7, "b");
    \u0275\u0275text(8, "Import FormsModule");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "ul")(10, "li");
    \u0275\u0275text(11, "Import FormsModule in your AppModule.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "pre")(13, "code", 5, 0);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div")(17, "h3")(18, "b");
    \u0275\u0275text(19, "Create a Template-driven Form");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "ul")(21, "li");
    \u0275\u0275text(22, "Use Angular directives like ngModel and ngForm.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "pre")(24, "code", 5, 0);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div")(28, "h2");
    \u0275\u0275text(29, "Form Controls and Validation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div")(31, "h3")(32, "b");
    \u0275\u0275text(33, "FormControl:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "pre")(35, "code", 5, 0);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div")(39, "h3")(40, "b");
    \u0275\u0275text(41, "Validation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "pre")(43, "code", 5, 0);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div")(47, "h2");
    \u0275\u0275text(48, "Handling Form Submission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div")(50, "h3")(51, "b");
    \u0275\u0275text(52, "Component Code:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "pre")(54, "code", 5, 0);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate1(" ", ctx_r0.tempForms1, " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", ctx_r0.tempForms2, " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", ctx_r0.tempForms3, " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r0.tempForms4, " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", ctx_r0.tempForms5, " ");
  }
}
var LearnFormsComponent = class _LearnFormsComponent {
  constructor() {
    this.tempForms1 = `
    import { FormsModule } from '@angular/forms';

    @NgModule({
      imports: [FormsModule]
    })
    export class AppModule { }
    `;
    this.tempForms2 = `
    <form #form="ngForm" (ngSubmit)="onSubmit(form)">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" ngModel required>
      <button type="submit">Submit</button>
    </form>
    `;
    this.tempForms3 = `
    <input type="text" id="name" name="name" ngModel required>
  `;
    this.tempForms4 = `
    <div *ngIf="form.controls['name'].invalid && form.controls['name'].touched">
      Name is required.
    </div>
  `;
    this.tempForms5 = `
    export class MyComponent {
      onSubmit(form: NgForm) {
        console.log(form.value);
      }
    }
  `;
    this.reactForms1 = `
    import { ReactiveFormsModule } from '@angular/forms';

      @NgModule({
        imports: [ReactiveFormsModule]
      })
      export class AppModule { }
  `;
    this.reactForms2 = `
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';

  export class MyComponent implements OnInit {
    myForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
      this.myForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      });
    }

    onSubmit() {
      console.log(this.myForm.value);
    }
  }
  `;
    this.reactForms3 = `
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
      <label for="name">Name:</label>
      <input type="text" id="name" formControlName="name">
      <div *ngIf="myForm.get('name').invalid && myForm.get('name').touched">
        Name is required.
      </div>

      <label for="email">Email:</label>
      <input type="email" id="email" formControlName="email">
      <div *ngIf="myForm.get('email').invalid && myForm.get('email').touched">
        Enter a valid email.
      </div>

      <button type="submit">Submit</button>
    </form>
  `;
    this.reactForms4 = `
    this.myForm = this.fb.group({
      name: ['', Validators.required]
    });
  `;
    this.reactForms5 = `
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  `;
    this.reactForms6 = `
  import { AbstractControl, ValidatorFn } from '@angular/forms';

  export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }
  `;
    this.reactForms7 = `
    this.myForm = this.fb.group({
      name: ['', [Validators.required, forbiddenNameValidator(/bob/i)]]
    });
  `;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function LearnFormsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LearnFormsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LearnFormsComponent, selectors: [["app-learn-forms"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 85, vars: 7, consts: [["codeElement", ""], [1, "header"], ["label", "Template-driven Forms"], ["matTabContent", ""], ["label", "Reactive Forms"], [1, "language-typescript"]], template: function LearnFormsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 1);
        \u0275\u0275text(1, "Forms");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "mat-tab-group")(3, "mat-tab", 2);
        \u0275\u0275template(4, LearnFormsComponent_ng_template_4_Template, 57, 5, "ng-template", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab", 4)(6, "label");
        \u0275\u0275text(7, "Reactive forms provide more control and flexibility, especially for complex forms. They are built around reactive programming principles and use explicit and immutable data structures.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div")(9, "h2");
        \u0275\u0275text(10, "Setting Up");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div")(12, "h3")(13, "b");
        \u0275\u0275text(14, "Import ReactiveFormsModule");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "Import ReactiveFormsModule in your AppModule.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "pre")(19, "code", 5, 0);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div")(23, "h3")(24, "b");
        \u0275\u0275text(25, "Create a Reactive Form");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "ul")(27, "li");
        \u0275\u0275text(28, "Define form controls and group them in the component.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "pre")(30, "code", 5, 0);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "div")(34, "h3")(35, "b");
        \u0275\u0275text(36, "Template code");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "pre")(38, "code", 5, 0);
        \u0275\u0275text(40);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(41, "div")(42, "h2");
        \u0275\u0275text(43, "Form Controls and Validation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div")(45, "h3")(46, "b");
        \u0275\u0275text(47, "FormControl:");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "ul")(49, "li");
        \u0275\u0275text(50, "Create form controls with initial values and validators.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "pre")(52, "code", 5, 0);
        \u0275\u0275text(54);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "div")(56, "h3")(57, "b");
        \u0275\u0275text(58, "Validation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "ul")(60, "li");
        \u0275\u0275text(61, " Use Angular's built-in validators or create custom validators. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "pre")(63, "code", 5, 0);
        \u0275\u0275text(65);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(66, "div")(67, "h2");
        \u0275\u0275text(68, "Custom Validators");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "div")(70, "h3")(71, "b");
        \u0275\u0275text(72, "Creating Custom Validators");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "pre")(74, "code", 5, 0);
        \u0275\u0275text(76);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(77, "div")(78, "h3")(79, "b");
        \u0275\u0275text(80, "Using Custom Validators");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "pre")(82, "code", 5, 0);
        \u0275\u0275text(84);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate1(" ", ctx.reactForms1, " ");
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate1(" ", ctx.reactForms2, " ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", ctx.reactForms3, " ");
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate1(" ", ctx.reactForms4, " ");
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate1(" ", ctx.reactForms5, " ");
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate1(" ", ctx.reactForms6, " ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", ctx.reactForms7, " ");
      }
    }, dependencies: [MatTabsModule, MatTabContent, MatTab, MatTabGroup] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LearnFormsComponent, { className: "LearnFormsComponent", filePath: "src\\app\\components\\angular\\learn-forms\\learn-forms.component.ts", lineNumber: 13 });
})();
export {
  LearnFormsComponent
};
//# sourceMappingURL=chunk-WQHBFN7A.js.map
