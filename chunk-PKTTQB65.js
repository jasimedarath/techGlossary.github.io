import"./chunk-WCULWZKC.js";import{a as h}from"./chunk-FSUYFWSG.js";import{a as c,b as v,c as F,d as b}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as r,Xa as s,da as d,e as x,gb as e,hb as t,lb as p,tb as i,vb as n,yb as u}from"./chunk-WGQ2ELTG.js";var f=x(h());function g(o,S){if(o&1&&(e(0,"label"),i(1,"Template-driven forms are suitable for simple forms and rely heavily on Angular's directives. They are easier to set up and use Angular's two-way data binding."),t(),e(2,"div")(3,"h2"),i(4,"Setting Up"),t(),e(5,"div")(6,"h3")(7,"b"),i(8,"Import FormsModule"),t()(),e(9,"ul")(10,"li"),i(11,"Import FormsModule in your AppModule."),t()(),e(12,"pre")(13,"code",5,0),i(15),t()()(),e(16,"div")(17,"h3")(18,"b"),i(19,"Create a Template-driven Form"),t()(),e(20,"ul")(21,"li"),i(22,"Use Angular directives like ngModel and ngForm."),t()(),e(23,"pre")(24,"code",5,0),i(26),t()()()(),e(27,"div")(28,"h2"),i(29,"Form Controls and Validation"),t(),e(30,"div")(31,"h3")(32,"b"),i(33,"FormControl:"),t()(),e(34,"pre")(35,"code",5,0),i(37),t()()(),e(38,"div")(39,"h3")(40,"b"),i(41,"Validation"),t()(),e(42,"pre")(43,"code",5,0),i(45),t()()()(),e(46,"div")(47,"h2"),i(48,"Handling Form Submission"),t(),e(49,"div")(50,"h3")(51,"b"),i(52,"Component Code:"),t()(),e(53,"pre")(54,"code",5,0),i(56),t()()()()),o&2){let a=p();r(15),n(" ",a.tempForms1," "),r(11),n(" ",a.tempForms2," "),r(11),n(" ",a.tempForms3," "),r(8),n(" ",a.tempForms4," "),r(11),n(" ",a.tempForms5," ")}}var I=(()=>{class o{constructor(){this.tempForms1=`
    import { FormsModule } from '@angular/forms';

    @NgModule({
      imports: [FormsModule]
    })
    export class AppModule { }
    `,this.tempForms2=`
    <form #form="ngForm" (ngSubmit)="onSubmit(form)">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" ngModel required>
      <button type="submit">Submit</button>
    </form>
    `,this.tempForms3=`
    <input type="text" id="name" name="name" ngModel required>
  `,this.tempForms4=`
    <div *ngIf="form.controls['name'].invalid && form.controls['name'].touched">
      Name is required.
    </div>
  `,this.tempForms5=`
    export class MyComponent {
      onSubmit(form: NgForm) {
        console.log(form.value);
      }
    }
  `,this.reactForms1=`
    import { ReactiveFormsModule } from '@angular/forms';

      @NgModule({
        imports: [ReactiveFormsModule]
      })
      export class AppModule { }
  `,this.reactForms2=`
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
  `,this.reactForms3=`
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
  `,this.reactForms4=`
    this.myForm = this.fb.group({
      name: ['', Validators.required]
    });
  `,this.reactForms5=`
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  `,this.reactForms6=`
  import { AbstractControl, ValidatorFn } from '@angular/forms';

  export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }
  `,this.reactForms7=`
    this.myForm = this.fb.group({
      name: ['', [Validators.required, forbiddenNameValidator(/bob/i)]]
    });
  `}ngAfterViewChecked(){f.highlightAll()}static{this.\u0275fac=function(l){return new(l||o)}}static{this.\u0275cmp=d({type:o,selectors:[["app-learn-forms"]],standalone:!0,features:[u],decls:85,vars:7,consts:[["codeElement",""],[1,"header"],["label","Template-driven Forms"],["matTabContent",""],["label","Reactive Forms"],[1,"language-typescript"]],template:function(l,m){l&1&&(e(0,"h2",1),i(1,"Forms"),t(),e(2,"mat-tab-group")(3,"mat-tab",2),s(4,g,57,5,"ng-template",3),t(),e(5,"mat-tab",4)(6,"label"),i(7,"Reactive forms provide more control and flexibility, especially for complex forms. They are built around reactive programming principles and use explicit and immutable data structures."),t(),e(8,"div")(9,"h2"),i(10,"Setting Up"),t(),e(11,"div")(12,"h3")(13,"b"),i(14,"Import ReactiveFormsModule"),t()(),e(15,"ul")(16,"li"),i(17,"Import ReactiveFormsModule in your AppModule."),t()(),e(18,"pre")(19,"code",5,0),i(21),t()()(),e(22,"div")(23,"h3")(24,"b"),i(25,"Create a Reactive Form"),t()(),e(26,"ul")(27,"li"),i(28,"Define form controls and group them in the component."),t()(),e(29,"pre")(30,"code",5,0),i(32),t()()(),e(33,"div")(34,"h3")(35,"b"),i(36,"Template code"),t()(),e(37,"pre")(38,"code",5,0),i(40),t()()()(),e(41,"div")(42,"h2"),i(43,"Form Controls and Validation"),t(),e(44,"div")(45,"h3")(46,"b"),i(47,"FormControl:"),t()(),e(48,"ul")(49,"li"),i(50,"Create form controls with initial values and validators."),t()(),e(51,"pre")(52,"code",5,0),i(54),t()()(),e(55,"div")(56,"h3")(57,"b"),i(58,"Validation"),t()(),e(59,"ul")(60,"li"),i(61," Use Angular's built-in validators or create custom validators. "),t()(),e(62,"pre")(63,"code",5,0),i(65),t()()()(),e(66,"div")(67,"h2"),i(68,"Custom Validators"),t(),e(69,"div")(70,"h3")(71,"b"),i(72,"Creating Custom Validators"),t()(),e(73,"pre")(74,"code",5,0),i(76),t()()(),e(77,"div")(78,"h3")(79,"b"),i(80,"Using Custom Validators"),t()(),e(81,"pre")(82,"code",5,0),i(84),t()()()()()()),l&2&&(r(21),n(" ",m.reactForms1," "),r(11),n(" ",m.reactForms2," "),r(8),n(" ",m.reactForms3," "),r(14),n(" ",m.reactForms4," "),r(11),n(" ",m.reactForms5," "),r(11),n(" ",m.reactForms6," "),r(8),n(" ",m.reactForms7," "))},dependencies:[b,c,v,F]})}}return o})();export{I as LearnFormsComponent};
