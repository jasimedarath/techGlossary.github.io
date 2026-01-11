import"./chunk-4ITEIGFF.js";import"./chunk-WCULWZKC.js";import{a as P}from"./chunk-FSUYFWSG.js";import{a as u,b as f,c as x,d as g}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as o,Xa as a,da as c,e as b,gb as t,hb as e,lb as l,tb as n,ub as p,yb as d}from"./chunk-WGQ2ELTG.js";var h=b(P());function C(i,s){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Understanding Props"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Props"),e(),n(7," are arguments passed to React components, similar to function parameters."),e(),t(8,"ul")(9,"li"),n(10,"Props are passed from parent to child components"),e(),t(11,"li"),n(12,"Props are read-only (immutable)"),e(),t(13,"li"),n(14,"Props can be any JavaScript value: strings, numbers, objects, arrays, functions"),e(),t(15,"li"),n(16,"Use curly braces for non-string values"),e(),t(17,"li"),n(18,"Props enable component reusability"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),i&2){let r=l();o(21),p(r.propsBasics)}}function S(i,s){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Props Destructuring"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Destructuring"),e(),n(7," makes it easier to access props by extracting them directly in the function parameters."),e(),t(8,"ul")(9,"li"),n(10,"Extract props in function parameters"),e(),t(11,"li"),n(12,"Cleaner and more readable code"),e(),t(13,"li"),n(14,"Can use nested destructuring for nested objects"),e(),t(15,"li"),n(16,"Use rest operator (...) to collect remaining props"),e(),t(17,"li"),n(18,"Combine with default values"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),i&2){let r=l();o(21),p(r.propsDestructuring)}}function v(i,s){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Default Props"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Default props"),e(),n(7," provide fallback values when props are not provided by the parent."),e(),t(8,"ul")(9,"li"),n(10,"Use ES6 default parameters in function signatures"),e(),t(11,"li"),n(12,"Provides fallback values for undefined props"),e(),t(13,"li"),n(14,"Makes components more robust"),e(),t(15,"li"),n(16,"Can use complex default values (objects, arrays)"),e(),t(17,"li"),n(18,"Combined with destructuring for clean syntax"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),i&2){let r=l();o(21),p(r.defaultProps)}}function E(i,s){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Props Validation with PropTypes"),e(),t(3,"div",13)(4,"p")(5,"strong"),n(6,"PropTypes"),e(),n(7," provide runtime type checking for React props (use TypeScript for better type safety)."),e(),t(8,"ul")(9,"li"),n(10,"Runtime validation of prop types"),e(),t(11,"li"),n(12,"Helps catch bugs during development"),e(),t(13,"li"),n(14,"Documents component API"),e(),t(15,"li"),n(16,"Use .isRequired for mandatory props"),e(),t(17,"li"),n(18,"Supports complex types (arrays, objects, shapes)"),e(),t(19,"li"),n(20,"Consider TypeScript for compile-time type checking"),e()()(),t(21,"pre")(22,"code",12),n(23),e()()()),i&2){let r=l();o(23),p(r.propTypes)}}function y(i,s){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"The Children Prop"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Children"),e(),n(7," is a special prop that contains the content between opening and closing component tags."),e(),t(8,"ul")(9,"li"),n(10,"Special prop automatically passed by React"),e(),t(11,"li"),n(12,"Contains nested content/components"),e(),t(13,"li"),n(14,"Can be any valid JSX: text, elements, components"),e(),t(15,"li"),n(16,"Use React.Children API to manipulate children"),e(),t(17,"li"),n(18,"Enables composition patterns"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),i&2){let r=l();o(21),p(r.childrenProp)}}function _(i,s){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Spreading Props"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Spread operator"),e(),n(7," allows passing all props or selected props to child components efficiently."),e(),t(8,"ul")(9,"li"),n(10,"Pass all props at once with {...props}"),e(),t(11,"li"),n(12,"Useful for wrapper components"),e(),t(13,"li"),n(14,"Combine with destructuring for selective passing"),e(),t(15,"li"),n(16,"Can override spread props by placing them after"),e(),t(17,"li"),n(18,"Be careful not to pass unnecessary props"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),i&2){let r=l();o(21),p(r.propsSpread)}}function T(i,s){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Passing Functions as Props"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Function props"),e(),n(7," enable child components to communicate with parent components (callbacks)."),e(),t(8,"ul")(9,"li"),n(10,"Pass functions to handle events in child components"),e(),t(11,"li"),n(12,"Enable child-to-parent communication"),e(),t(13,"li"),n(14,"Common pattern for form inputs and buttons"),e(),t(15,"li"),n(16,"Use arrow functions to pass arguments"),e(),t(17,"li"),n(18,'Name function props with "on" prefix (onClick, onSubmit)'),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),i&2){let r=l();o(21),p(r.functionProps)}}function k(i,s){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Props Best Practices"),e(),t(3,"div",14)(4,"h3"),n(5,"\u2713 Best Practices"),e(),t(6,"ul")(7,"li"),n(8,"Keep props simple and focused"),e(),t(9,"li"),n(10,"Use descriptive and consistent prop names"),e(),t(11,"li"),n(12,"Never mutate props inside components"),e(),t(13,"li"),n(14,"Validate props with PropTypes or TypeScript"),e(),t(15,"li"),n(16,"Group related props into objects"),e(),t(17,"li"),n(18,"Use default props for optional values"),e(),t(19,"li"),n(20,"Destructure props for cleaner code"),e(),t(21,"li"),n(22,"Document complex props with comments"),e()()(),t(23,"pre")(24,"code",12),n(25),e()()()),i&2){let r=l();o(25),p(r.propsBestPractices)}}var O=(()=>{class i{constructor(){this.propsBasics=`// Passing Props to Components
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Using the component
<Welcome name="Sarah" />

// Multiple Props
function UserCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

<UserCard 
  name="John Doe" 
  age={30} 
  email="john@example.com" 
/>`,this.propsDestructuring=`// Destructuring Props in Function Parameters
function UserProfile({ name, age, email, avatar }) {
  return (
    <div className="profile">
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{email}</p>
    </div>
  );
}

// Nested Destructuring
function BlogPost({ post: { title, author, content } }) {
  return (
    <article>
      <h1>{title}</h1>
      <p>By {author}</p>
      <div>{content}</div>
    </article>
  );
}

// Rest Props
function Button({ label, ...restProps }) {
  return <button {...restProps}>{label}</button>;
}

<Button label="Click" className="btn" onClick={handleClick} />`,this.defaultProps=`// Default Props with ES6 Default Parameters
function Greeting({ name = 'Guest', message = 'Welcome' }) {
  return <h1>{message}, {name}!</h1>;
}

// Usage without props
<Greeting /> // Output: Welcome, Guest!
<Greeting name="John" /> // Output: Welcome, John!

// Complex Default Values
function ProductCard({ 
  name = 'Unknown Product',
  price = 0,
  inStock = true,
  discount = 0,
  currency = '$'
}) {
  const finalPrice = price - (price * discount / 100);
  
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>Price: {currency}{finalPrice}</p>
      <p>{inStock ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
}`,this.propTypes=`import PropTypes from 'prop-types';

// Component with PropTypes
function UserProfile({ name, age, email, isActive }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
}

// PropTypes validation
UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};

// Default props
UserProfile.defaultProps = {
  isActive: true
};

// Complex PropTypes
function DataTable({ data, columns, onRowClick }) {
  return <table>...table content...</table>;
}

DataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      width: PropTypes.number
    })
  ).isRequired,
  onRowClick: PropTypes.func
};`,this.childrenProp=`// Children Prop
function Card({ children, title }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

// Usage
<Card title="User Information">
  <p>Name: John Doe</p>
  <p>Email: john@example.com</p>
</Card>

// Multiple Children
function Layout({ header, sidebar, children, footer }) {
  return (
    <div className="layout">
      <header>{header}</header>
      <aside>{sidebar}</aside>
      <main>{children}</main>
      <footer>{footer}</footer>
    </div>
  );
}

// Manipulating Children
import React from 'react';

function List({ children }) {
  return (
    <ul>
      {React.Children.map(children, (child, index) => (
        <li key={index}>{child}</li>
      ))}
    </ul>
  );
}`,this.propsSpread=`// Spreading Props
function Button(props) {
  return <button className="btn" {...props} />;
}

// Usage - all props are passed to button
<Button onClick={handleClick} disabled={false} type="submit">
  Submit
</Button>

// Selective Props Passing
function Input({ label, error, ...inputProps }) {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input {...inputProps} />
      {error && <span className="error">{error}</span>}
    </div>
  );
}

<Input 
  label="Email"
  error="Invalid email"
  type="email"
  value={email}
  onChange={handleChange}
  placeholder="Enter email"
/>

// Overriding Props
function CustomButton(props) {
  return (
    <button 
      {...props}
      className="custom-btn"
    />
  );
}`,this.functionProps=`// Passing Functions as Props (Callbacks)
function ParentComponent() {
  const handleClick = (message) => {
    alert(message);
  };

  return <ChildComponent onButtonClick={handleClick} />;
}

function ChildComponent({ onButtonClick }) {
  return (
    <button onClick={() => onButtonClick('Hello from child!')}>
      Click Me
    </button>
  );
}

// Search Form with Multiple Callbacks
function SearchForm({ onSearch, onClear, onFilter }) {
  return (
    <form>
      <input 
        type="text" 
        onChange={(e) => onFilter(e.target.value)}
      />
      <button type="submit">Search</button>
      <button type="button" onClick={onClear}>Clear</button>
    </form>
  );
}`,this.propsBestPractices=`// Best Practices for Props

// 1. Keep props simple and focused
// Good
function UserCard({ name, email, avatar }) {
  return <div>...</div>;
}

// 2. Use descriptive prop names
// Good
<Button onClick={handleSubmit} isLoading={false} />
// Bad
<Button fn={handleSubmit} loading={false} />

// 3. Pass objects for related data
function UserProfile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <img src={user.avatar} alt={user.name} />
    </div>
  );
}

<UserProfile user={{ name: 'John', email: 'john@email.com', avatar: 'url' }} />

// 4. Don't mutate props
// Bad
function MyComponent(props) {
  props.value = 'new value'; // Never do this!
}

// Good
function MyComponent({ value, onChange }) {
  onChange('new value'); // Use callback to update
}

// 5. Validate props with PropTypes or TypeScript
function ProductCard({ name, price }: { name: string, price: number }) {
  return <div>{name}: \${price}</div>;
}`}ngAfterViewChecked(){h.highlightAll()}static{this.\u0275fac=function(m){return new(m||i)}}static{this.\u0275cmp=c({type:i,selectors:[["app-react-props"]],standalone:!0,features:[d],decls:22,vars:0,consts:[[1,"container"],["label","Props Basics"],["matTabContent",""],["label","Destructuring"],["label","Default Props"],["label","PropTypes"],["label","Children Prop"],["label","Spread Props"],["label","Function Props"],["label","Best Practices"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],[1,"info-box","warning"],[1,"info-box","success"]],template:function(m,w){m&1&&(t(0,"div",0)(1,"h1"),n(2,"React Props"),e(),t(3,"p"),n(4,"Props (short for properties) are how you pass data from parent components to child components in React. They are read-only and help make components reusable and configurable."),e(),t(5,"mat-tab-group")(6,"mat-tab",1),a(7,C,22,1,"ng-template",2),e(),t(8,"mat-tab",3),a(9,S,22,1,"ng-template",2),e(),t(10,"mat-tab",4),a(11,v,22,1,"ng-template",2),e(),t(12,"mat-tab",5),a(13,E,24,1,"ng-template",2),e(),t(14,"mat-tab",6),a(15,y,22,1,"ng-template",2),e(),t(16,"mat-tab",7),a(17,_,22,1,"ng-template",2),e(),t(18,"mat-tab",8),a(19,T,22,1,"ng-template",2),e(),t(20,"mat-tab",9),a(21,k,26,1,"ng-template",2),e()()())},dependencies:[g,u,f,x],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return i})();export{O as ReactPropsComponent};
