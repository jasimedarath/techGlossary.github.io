import"./chunk-4ITEIGFF.js";import"./chunk-WCULWZKC.js";import{a as S}from"./chunk-FSUYFWSG.js";import{a as u,b as f,c as x,d as b}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as r,Xa as o,da as p,e as g,gb as t,hb as e,lb as l,tb as n,ub as m,yb as c}from"./chunk-WGQ2ELTG.js";var h=g(S());function v(a,s){if(a&1&&(t(0,"div",10)(1,"h2"),n(2,"Controlled Form Components"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Controlled components"),e(),n(7," have their value controlled by React state."),e(),t(8,"ul")(9,"li"),n(10,"React state is the single source of truth"),e(),t(11,"li"),n(12,"Value prop controlled by state"),e(),t(13,"li"),n(14,"onChange handler updates state"),e(),t(15,"li"),n(16,"Full control over input value"),e(),t(17,"li"),n(18,"Easy to implement validation"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),a&2){let i=l();r(21),m(i.controlledForms)}}function E(a,s){if(a&1&&(t(0,"div",10)(1,"h2"),n(2,"Uncontrolled Form Components"),e(),t(3,"div",13)(4,"p")(5,"strong"),n(6,"Uncontrolled components"),e(),n(7," store their own state internally in the DOM."),e(),t(8,"ul")(9,"li"),n(10,"DOM is the source of truth"),e(),t(11,"li"),n(12,"Use refs to access form values"),e(),t(13,"li"),n(14,"Simpler for basic forms"),e(),t(15,"li"),n(16,"Less React code"),e(),t(17,"li"),n(18,"Controlled forms are generally preferred"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),a&2){let i=l();r(21),m(i.uncontrolledForms)}}function C(a,s){if(a&1&&(t(0,"div",10)(1,"h2"),n(2,"Form Validation"),e(),t(3,"div",11)(4,"p"),n(5,"Implement validation to ensure data quality and provide user feedback."),e(),t(6,"ul")(7,"li"),n(8,"Real-time validation on change/blur"),e(),t(9,"li"),n(10,"Display error messages clearly"),e(),t(11,"li"),n(12,"Prevent submission with errors"),e(),t(13,"li"),n(14,"Use regex for pattern matching"),e(),t(15,"li"),n(16,"Consider validation libraries"),e()()(),t(17,"pre")(18,"code",12),n(19),e()()()),a&2){let i=l();r(19),m(i.formValidation)}}function F(a,s){if(a&1&&(t(0,"div",10)(1,"h2"),n(2,"Different Input Types"),e(),t(3,"div",11)(4,"p"),n(5,"Handle various HTML input types in React forms."),e(),t(6,"ul")(7,"li"),n(8,"Text, number, email, password inputs"),e(),t(9,"li"),n(10,"Checkboxes (use checked prop)"),e(),t(11,"li"),n(12,"Radio buttons"),e(),t(13,"li"),n(14,"Select dropdowns"),e(),t(15,"li"),n(16,"Textareas"),e(),t(17,"li"),n(18,"Date and file inputs"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),a&2){let i=l();r(21),m(i.formInputs)}}function w(a,s){if(a&1&&(t(0,"div",10)(1,"h2"),n(2,"Form Libraries"),e(),t(3,"div",14)(4,"p"),n(5,"Use form libraries for complex forms with validation."),e(),t(6,"ul")(7,"li")(8,"strong"),n(9,"Formik:"),e(),n(10," Popular, feature-rich"),e(),t(11,"li")(12,"strong"),n(13,"React Hook Form:"),e(),n(14," Performance-focused"),e(),t(15,"li"),n(16,"Built-in validation support"),e(),t(17,"li"),n(18,"Reduces boilerplate code"),e(),t(19,"li"),n(20,"Better error handling"),e()()(),t(21,"pre")(22,"code",12),n(23),e()()()),a&2){let i=l();r(23),m(i.formLibraries)}}function _(a,s){if(a&1&&(t(0,"div",10)(1,"h2"),n(2,"File Upload"),e(),t(3,"div",11)(4,"p"),n(5,"Handle file uploads with previews and FormData API."),e(),t(6,"ul")(7,"li"),n(8,'Use input type="file"'),e(),t(9,"li"),n(10,"Access files via e.target.files"),e(),t(11,"li"),n(12,"FileReader for previews"),e(),t(13,"li"),n(14,"FormData for uploads"),e(),t(15,"li"),n(16,"Validate file type and size"),e()()(),t(17,"pre")(18,"code",12),n(19),e()()()),a&2){let i=l();r(19),m(i.fileUpload)}}function k(a,s){if(a&1&&(t(0,"div",10)(1,"h2"),n(2,"Multi-Step Forms"),e(),t(3,"div",11)(4,"p"),n(5,"Break complex forms into multiple steps for better UX."),e(),t(6,"ul")(7,"li"),n(8,"Track current step with state"),e(),t(9,"li"),n(10,"Store data from all steps"),e(),t(11,"li"),n(12,"Navigation between steps"),e(),t(13,"li"),n(14,"Progress indicator"),e(),t(15,"li"),n(16,"Validate each step"),e()()(),t(17,"pre")(18,"code",12),n(19),e()()()),a&2){let i=l();r(19),m(i.multiStepForm)}}function y(a,s){if(a&1&&(t(0,"div",10)(1,"h2"),n(2,"Form Best Practices"),e(),t(3,"div",14)(4,"h3"),n(5," Best Practices"),e(),t(6,"ul")(7,"li"),n(8,"Use controlled components for complex forms"),e(),t(9,"li"),n(10,"Prevent default form submission"),e(),t(11,"li"),n(12,"Validate on blur and submit"),e(),t(13,"li"),n(14,"Show clear error messages"),e(),t(15,"li"),n(16,"Disable submit while processing"),e(),t(17,"li"),n(18,"Consider form libraries for complex needs"),e(),t(19,"li"),n(20,"Make forms accessible"),e(),t(21,"li"),n(22,"Handle loading and error states"),e()()(),t(23,"pre")(24,"code",12),n(25),e()()()),a&2){let i=l();r(25),m(i.bestPractices)}}var T=(()=>{class a{constructor(){this.controlledForms=`// Controlled Form Components
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
<span id="email-error">{errors.email}</span>`}ngAfterViewChecked(){h.highlightAll()}static{this.\u0275fac=function(d){return new(d||a)}}static{this.\u0275cmp=p({type:a,selectors:[["app-react-forms"]],standalone:!0,features:[c],decls:22,vars:0,consts:[[1,"container"],["label","Controlled Forms"],["matTabContent",""],["label","Uncontrolled Forms"],["label","Validation"],["label","Input Types"],["label","Form Libraries"],["label","File Upload"],["label","Multi-Step Forms"],["label","Best Practices"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],[1,"info-box","warning"],[1,"info-box","success"]],template:function(d,D){d&1&&(t(0,"div",0)(1,"h1"),n(2,"React Forms"),e(),t(3,"p"),n(4,"Forms in React can be controlled (React controls the form state) or uncontrolled (DOM controls the state). Learn both approaches and form validation techniques."),e(),t(5,"mat-tab-group")(6,"mat-tab",1),o(7,v,22,1,"ng-template",2),e(),t(8,"mat-tab",3),o(9,E,22,1,"ng-template",2),e(),t(10,"mat-tab",4),o(11,C,20,1,"ng-template",2),e(),t(12,"mat-tab",5),o(13,F,22,1,"ng-template",2),e(),t(14,"mat-tab",6),o(15,w,24,1,"ng-template",2),e(),t(16,"mat-tab",7),o(17,_,20,1,"ng-template",2),e(),t(18,"mat-tab",8),o(19,k,20,1,"ng-template",2),e(),t(20,"mat-tab",9),o(21,y,26,1,"ng-template",2),e()()())},dependencies:[b,u,f,x],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return a})();export{T as ReactFormsComponent};
