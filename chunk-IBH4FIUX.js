import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-3BBRWWQW.js";
import "./chunk-PEESLLPT.js";
import "./chunk-AEAJYSPS.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-N7AAI6XN.js";

// src/app/components/react/react-forms/react-forms.component.ts
var ReactFormsComponent = class _ReactFormsComponent {
  constructor() {
    this.controlledForms = `// Controlled Form Components
function ControlledForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}`;
    this.uncontrolledForms = `// Uncontrolled Forms with useRef
import { useRef } from 'react';

function UncontrolledForm() {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      username: usernameRef.current.value,
      email: emailRef.current.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={usernameRef} placeholder="Username" />
      <input ref={emailRef} type="email" placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}

// With FormData API
function FormDataExample() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" />
      <input name="email" type="email" />
      <button type="submit">Submit</button>
    </form>
  );
}`;
    this.formValidation = `// Form Validation
function ValidatedForm() {
  const [values, setValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    switch (name) {
      case 'email':
        return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value)
          ? ''
          : 'Invalid email address';
      case 'password':
        return value.length >= 8
          ? ''
          : 'Password must be at least 8 characters';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    const error = validate(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(values).forEach(key => {
      const error = validate(key, values[key]);
      if (error) newErrors[key] = error;
    });
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form is valid:', values);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}`;
    this.formInputs = `// Different Input Types
function FormInputs() {
  const [form, setForm] = useState({
    text: '',
    number: 0,
    checkbox: false,
    radio: '',
    select: '',
    textarea: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <form>
      <input name="text" value={form.text} onChange={handleChange} />
      
      <input name="number" type="number" value={form.number} onChange={handleChange} />
      
      <input name="checkbox" type="checkbox" checked={form.checkbox} onChange={handleChange} />
      
      <label>
        <input name="radio" type="radio" value="option1" checked={form.radio === 'option1'} onChange={handleChange} />
        Option 1
      </label>
      
      <select name="select" value={form.select} onChange={handleChange}>
        <option value="">Choose...</option>
        <option value="a">Option A</option>
        <option value="b">Option B</option>
      </select>
      
      <textarea name="textarea" value={form.textarea} onChange={handleChange} />
      
      <input name="date" type="date" value={form.date} onChange={handleChange} />
    </form>
  );
}`;
    this.formLibraries = `// Using Formik Library
import { useFormik } from 'formik';
import * as Yup from 'yup';

function FormikExample() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(8, 'Too short').required('Required')
    }),
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email && <span>{formik.errors.email}</span>}
      
      <input
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password && <span>{formik.errors.password}</span>}
      
      <button type="submit">Submit</button>
    </form>
  );
}

// React Hook Form
import { useForm } from 'react-hook-form';

function HookFormExample() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email', { required: true })} />
      {errors.email && <span>Email is required</span>}
      
      <input {...register('password', { required: true, minLength: 8 })} />
      {errors.password && <span>Password must be 8+ chars</span>}
      
      <button type="submit">Submit</button>
    </form>
  );
}`;
    this.fileUpload = `// File Upload
function FileUpload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    
    const formData = new FormData();
    formData.append('file', file);
    
    await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept="image/*" />
      {preview && <img src={preview} alt="Preview" />}
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}`;
    this.multiStepForm = `// Multi-Step Form
function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personal: {},
    contact: {},
    preferences: {}
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const updateFormData = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  return (
    <div>
      {step === 1 && (
        <PersonalInfo
          data={formData.personal}
          onNext={(data) => { updateFormData('personal', data); nextStep(); }}
        />
      )}
      
      {step === 2 && (
        <ContactInfo
          data={formData.contact}
          onNext={(data) => { updateFormData('contact', data); nextStep(); }}
          onBack={prevStep}
        />
      )}
      
      {step === 3 && (
        <Review
          data={formData}
          onBack={prevStep}
          onSubmit={() => console.log('Final:', formData)}
        />
      )}
    </div>
  );
}`;
    this.bestPractices = `// Form Best Practices

// 1. Use controlled components for form state
const [email, setEmail] = useState('');
<input value={email} onChange={e => setEmail(e.target.value)} />

// 2. Prevent default form submission
const handleSubmit = (e) => {
  e.preventDefault();
  // Handle submission
};

// 3. Validate on blur and submit
const handleBlur = (e) => {
  validateField(e.target.name, e.target.value);
};

// 4. Show clear error messages
{errors.email && (
  <span className="error" role="alert">{errors.email}</span>
)}

// 5. Disable submit while processing
<button type="submit" disabled={isSubmitting}>
  {isSubmitting ? 'Submitting...' : 'Submit'}
</button>

// 6. Use form libraries for complex forms
// - Formik: Feature-rich, popular
// - React Hook Form: Performance-focused, minimal re-renders
// - Final Form: Subscription-based rendering

// 7. Accessibility
<label htmlFor="email">Email</label>
<input
  id="email"
  aria-label="Email address"
  aria-required="true"
  aria-invalid={!!errors.email}
  aria-describedby="email-error"
/>
<span id="email-error">{errors.email}</span>`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function ReactFormsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReactFormsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReactFormsComponent, selectors: [["app-react-forms"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 190, vars: 8, consts: [[1, "container"], ["label", "Controlled Forms"], [1, "tab-content"], [1, "info-box"], [1, "language-jsx"], ["label", "Uncontrolled Forms"], [1, "info-box", "warning"], ["label", "Validation"], ["label", "Input Types"], ["label", "Form Libraries"], [1, "info-box", "success"], ["label", "File Upload"], ["label", "Multi-Step Forms"], ["label", "Best Practices"]], template: function ReactFormsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "React Forms");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Forms in React can be controlled (React controls the form state) or uncontrolled (DOM controls the state). Learn both approaches and form validation techniques.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "Controlled Form Components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "Controlled components");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " have their value controlled by React state.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "React state is the single source of truth");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "Value prop controlled by state");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li");
        \u0275\u0275text(21, "onChange handler updates state");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275text(23, "Full control over input value");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "li");
        \u0275\u0275text(25, "Easy to implement validation");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "pre")(27, "code", 4);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(29, "mat-tab", 5)(30, "div", 2)(31, "h2");
        \u0275\u0275text(32, "Uncontrolled Form Components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 6)(34, "p")(35, "strong");
        \u0275\u0275text(36, "Uncontrolled components");
        \u0275\u0275elementEnd();
        \u0275\u0275text(37, " store their own state internally in the DOM.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "ul")(39, "li");
        \u0275\u0275text(40, "DOM is the source of truth");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "li");
        \u0275\u0275text(42, "Use refs to access form values");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li");
        \u0275\u0275text(44, "Simpler for basic forms");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "li");
        \u0275\u0275text(46, "Less React code");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "li");
        \u0275\u0275text(48, "Controlled forms are generally preferred");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "pre")(50, "code", 4);
        \u0275\u0275text(51);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(52, "mat-tab", 7)(53, "div", 2)(54, "h2");
        \u0275\u0275text(55, "Form Validation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 3)(57, "p");
        \u0275\u0275text(58, "Implement validation to ensure data quality and provide user feedback.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "ul")(60, "li");
        \u0275\u0275text(61, "Real-time validation on change/blur");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "li");
        \u0275\u0275text(63, "Display error messages clearly");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "li");
        \u0275\u0275text(65, "Prevent submission with errors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "li");
        \u0275\u0275text(67, "Use regex for pattern matching");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "li");
        \u0275\u0275text(69, "Consider validation libraries");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(70, "pre")(71, "code", 4);
        \u0275\u0275text(72);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(73, "mat-tab", 8)(74, "div", 2)(75, "h2");
        \u0275\u0275text(76, "Different Input Types");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "div", 3)(78, "p");
        \u0275\u0275text(79, "Handle various HTML input types in React forms.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "ul")(81, "li");
        \u0275\u0275text(82, "Text, number, email, password inputs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "li");
        \u0275\u0275text(84, "Checkboxes (use checked prop)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "li");
        \u0275\u0275text(86, "Radio buttons");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "li");
        \u0275\u0275text(88, "Select dropdowns");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "li");
        \u0275\u0275text(90, "Textareas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "li");
        \u0275\u0275text(92, "Date and file inputs");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(93, "pre")(94, "code", 4);
        \u0275\u0275text(95);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(96, "mat-tab", 9)(97, "div", 2)(98, "h2");
        \u0275\u0275text(99, "Form Libraries");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "div", 10)(101, "p");
        \u0275\u0275text(102, "Use form libraries for complex forms with validation.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "ul")(104, "li")(105, "strong");
        \u0275\u0275text(106, "Formik:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(107, " Popular, feature-rich");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "li")(109, "strong");
        \u0275\u0275text(110, "React Hook Form:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(111, " Performance-focused");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "li");
        \u0275\u0275text(113, "Built-in validation support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "li");
        \u0275\u0275text(115, "Reduces boilerplate code");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "li");
        \u0275\u0275text(117, "Better error handling");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(118, "pre")(119, "code", 4);
        \u0275\u0275text(120);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(121, "mat-tab", 11)(122, "div", 2)(123, "h2");
        \u0275\u0275text(124, "File Upload");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "div", 3)(126, "p");
        \u0275\u0275text(127, "Handle file uploads with previews and FormData API.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "ul")(129, "li");
        \u0275\u0275text(130, 'Use input type="file"');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(131, "li");
        \u0275\u0275text(132, "Access files via e.target.files");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "li");
        \u0275\u0275text(134, "FileReader for previews");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "li");
        \u0275\u0275text(136, "FormData for uploads");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "li");
        \u0275\u0275text(138, "Validate file type and size");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(139, "pre")(140, "code", 4);
        \u0275\u0275text(141);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(142, "mat-tab", 12)(143, "div", 2)(144, "h2");
        \u0275\u0275text(145, "Multi-Step Forms");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "div", 3)(147, "p");
        \u0275\u0275text(148, "Break complex forms into multiple steps for better UX.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(149, "ul")(150, "li");
        \u0275\u0275text(151, "Track current step with state");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "li");
        \u0275\u0275text(153, "Store data from all steps");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(154, "li");
        \u0275\u0275text(155, "Navigation between steps");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "li");
        \u0275\u0275text(157, "Progress indicator");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "li");
        \u0275\u0275text(159, "Validate each step");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(160, "pre")(161, "code", 4);
        \u0275\u0275text(162);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(163, "mat-tab", 13)(164, "div", 2)(165, "h2");
        \u0275\u0275text(166, "Form Best Practices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "div", 10)(168, "h3");
        \u0275\u0275text(169, " Best Practices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(170, "ul")(171, "li");
        \u0275\u0275text(172, "Use controlled components for complex forms");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(173, "li");
        \u0275\u0275text(174, "Prevent default form submission");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(175, "li");
        \u0275\u0275text(176, "Validate on blur and submit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(177, "li");
        \u0275\u0275text(178, "Show clear error messages");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(179, "li");
        \u0275\u0275text(180, "Disable submit while processing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(181, "li");
        \u0275\u0275text(182, "Consider form libraries for complex needs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "li");
        \u0275\u0275text(184, "Make forms accessible");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(185, "li");
        \u0275\u0275text(186, "Handle loading and error states");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(187, "pre")(188, "code", 4);
        \u0275\u0275text(189);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(28);
        \u0275\u0275textInterpolate(ctx.controlledForms);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.uncontrolledForms);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.formValidation);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.formInputs);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.formLibraries);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.fileUpload);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.multiStepForm);
        \u0275\u0275advance(27);
        \u0275\u0275textInterpolate(ctx.bestPractices);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #61dafb;\n  margin-bottom: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #282c34;\n  margin-top: 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  padding: 15px;\n  margin: 15px 0;\n  border-radius: 4px;\n}\n.info-box.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-left-color: #4caf50;\n}\n.info-box.warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #ff9800;\n}\n.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1976d2;\n}\n.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding-left: 20px;\n}\n.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05);\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\npre[_ngcontent-%COMP%] {\n  background: #282c34;\n  border-radius: 4px;\n  overflow-x: auto;\n  margin: 15px 0;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #abb2bf;\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n  font-size: 14px;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=react-forms.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReactFormsComponent, { className: "ReactFormsComponent", filePath: "src\\app\\components\\react\\react-forms\\react-forms.component.ts", lineNumber: 13 });
})();
export {
  ReactFormsComponent
};
//# sourceMappingURL=chunk-IBH4FIUX.js.map
