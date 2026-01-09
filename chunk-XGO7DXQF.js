import{b as d,c as u,d as p}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as a,da as m,gb as n,hb as e,tb as t,ub as i,yb as s}from"./chunk-WGQ2ELTG.js";var x=(()=>{class o{constructor(){this.controlledForms=`// Controlled Form Components
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
}`,this.uncontrolledForms=`// Uncontrolled Forms with useRef
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
}`,this.formValidation=`// Form Validation
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
}`,this.formInputs=`// Different Input Types
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
}`,this.formLibraries=`// Using Formik Library
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
}`,this.fileUpload=`// File Upload
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
}`,this.multiStepForm=`// Multi-Step Form
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
}`,this.bestPractices=`// Form Best Practices

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
<span id="email-error">{errors.email}</span>`}ngAfterViewChecked(){Prism.highlightAll()}static{this.\u0275fac=function(l){return new(l||o)}}static{this.\u0275cmp=m({type:o,selectors:[["app-react-forms"]],standalone:!0,features:[s],decls:190,vars:8,consts:[[1,"container"],["label","Controlled Forms"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],["label","Uncontrolled Forms"],[1,"info-box","warning"],["label","Validation"],["label","Input Types"],["label","Form Libraries"],[1,"info-box","success"],["label","File Upload"],["label","Multi-Step Forms"],["label","Best Practices"]],template:function(l,r){l&1&&(n(0,"div",0)(1,"h1"),t(2,"React Forms"),e(),n(3,"p"),t(4,"Forms in React can be controlled (React controls the form state) or uncontrolled (DOM controls the state). Learn both approaches and form validation techniques."),e(),n(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),t(9,"Controlled Form Components"),e(),n(10,"div",3)(11,"p")(12,"strong"),t(13,"Controlled components"),e(),t(14," have their value controlled by React state."),e(),n(15,"ul")(16,"li"),t(17,"React state is the single source of truth"),e(),n(18,"li"),t(19,"Value prop controlled by state"),e(),n(20,"li"),t(21,"onChange handler updates state"),e(),n(22,"li"),t(23,"Full control over input value"),e(),n(24,"li"),t(25,"Easy to implement validation"),e()()(),n(26,"pre")(27,"code",4),t(28),e()()()(),n(29,"mat-tab",5)(30,"div",2)(31,"h2"),t(32,"Uncontrolled Form Components"),e(),n(33,"div",6)(34,"p")(35,"strong"),t(36,"Uncontrolled components"),e(),t(37," store their own state internally in the DOM."),e(),n(38,"ul")(39,"li"),t(40,"DOM is the source of truth"),e(),n(41,"li"),t(42,"Use refs to access form values"),e(),n(43,"li"),t(44,"Simpler for basic forms"),e(),n(45,"li"),t(46,"Less React code"),e(),n(47,"li"),t(48,"Controlled forms are generally preferred"),e()()(),n(49,"pre")(50,"code",4),t(51),e()()()(),n(52,"mat-tab",7)(53,"div",2)(54,"h2"),t(55,"Form Validation"),e(),n(56,"div",3)(57,"p"),t(58,"Implement validation to ensure data quality and provide user feedback."),e(),n(59,"ul")(60,"li"),t(61,"Real-time validation on change/blur"),e(),n(62,"li"),t(63,"Display error messages clearly"),e(),n(64,"li"),t(65,"Prevent submission with errors"),e(),n(66,"li"),t(67,"Use regex for pattern matching"),e(),n(68,"li"),t(69,"Consider validation libraries"),e()()(),n(70,"pre")(71,"code",4),t(72),e()()()(),n(73,"mat-tab",8)(74,"div",2)(75,"h2"),t(76,"Different Input Types"),e(),n(77,"div",3)(78,"p"),t(79,"Handle various HTML input types in React forms."),e(),n(80,"ul")(81,"li"),t(82,"Text, number, email, password inputs"),e(),n(83,"li"),t(84,"Checkboxes (use checked prop)"),e(),n(85,"li"),t(86,"Radio buttons"),e(),n(87,"li"),t(88,"Select dropdowns"),e(),n(89,"li"),t(90,"Textareas"),e(),n(91,"li"),t(92,"Date and file inputs"),e()()(),n(93,"pre")(94,"code",4),t(95),e()()()(),n(96,"mat-tab",9)(97,"div",2)(98,"h2"),t(99,"Form Libraries"),e(),n(100,"div",10)(101,"p"),t(102,"Use form libraries for complex forms with validation."),e(),n(103,"ul")(104,"li")(105,"strong"),t(106,"Formik:"),e(),t(107," Popular, feature-rich"),e(),n(108,"li")(109,"strong"),t(110,"React Hook Form:"),e(),t(111," Performance-focused"),e(),n(112,"li"),t(113,"Built-in validation support"),e(),n(114,"li"),t(115,"Reduces boilerplate code"),e(),n(116,"li"),t(117,"Better error handling"),e()()(),n(118,"pre")(119,"code",4),t(120),e()()()(),n(121,"mat-tab",11)(122,"div",2)(123,"h2"),t(124,"File Upload"),e(),n(125,"div",3)(126,"p"),t(127,"Handle file uploads with previews and FormData API."),e(),n(128,"ul")(129,"li"),t(130,'Use input type="file"'),e(),n(131,"li"),t(132,"Access files via e.target.files"),e(),n(133,"li"),t(134,"FileReader for previews"),e(),n(135,"li"),t(136,"FormData for uploads"),e(),n(137,"li"),t(138,"Validate file type and size"),e()()(),n(139,"pre")(140,"code",4),t(141),e()()()(),n(142,"mat-tab",12)(143,"div",2)(144,"h2"),t(145,"Multi-Step Forms"),e(),n(146,"div",3)(147,"p"),t(148,"Break complex forms into multiple steps for better UX."),e(),n(149,"ul")(150,"li"),t(151,"Track current step with state"),e(),n(152,"li"),t(153,"Store data from all steps"),e(),n(154,"li"),t(155,"Navigation between steps"),e(),n(156,"li"),t(157,"Progress indicator"),e(),n(158,"li"),t(159,"Validate each step"),e()()(),n(160,"pre")(161,"code",4),t(162),e()()()(),n(163,"mat-tab",13)(164,"div",2)(165,"h2"),t(166,"Form Best Practices"),e(),n(167,"div",10)(168,"h3"),t(169," Best Practices"),e(),n(170,"ul")(171,"li"),t(172,"Use controlled components for complex forms"),e(),n(173,"li"),t(174,"Prevent default form submission"),e(),n(175,"li"),t(176,"Validate on blur and submit"),e(),n(177,"li"),t(178,"Show clear error messages"),e(),n(179,"li"),t(180,"Disable submit while processing"),e(),n(181,"li"),t(182,"Consider form libraries for complex needs"),e(),n(183,"li"),t(184,"Make forms accessible"),e(),n(185,"li"),t(186,"Handle loading and error states"),e()()(),n(187,"pre")(188,"code",4),t(189),e()()()()()()),l&2&&(a(28),i(r.controlledForms),a(23),i(r.uncontrolledForms),a(21),i(r.formValidation),a(23),i(r.formInputs),a(25),i(r.formLibraries),a(21),i(r.fileUpload),a(21),i(r.multiStepForm),a(27),i(r.bestPractices))},dependencies:[p,d,u],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#abb2bf;font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return o})();export{x as ReactFormsComponent};
