import{b as m,c as d,d as c}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as i,da as s,gb as n,hb as e,tb as t,ub as r,yb as p}from"./chunk-WGQ2ELTG.js";var b=(()=>{class a{constructor(){this.propsBasics=`// Passing Props to Components
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
}`}ngAfterViewChecked(){Prism.highlightAll()}static{this.\u0275fac=function(l){return new(l||a)}}static{this.\u0275cmp=s({type:a,selectors:[["app-react-props"]],standalone:!0,features:[p],decls:196,vars:8,consts:[[1,"container"],["label","Props Basics"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],["label","Destructuring"],["label","Default Props"],["label","PropTypes"],[1,"info-box","warning"],["label","Children Prop"],["label","Spread Props"],["label","Function Props"],["label","Best Practices"],[1,"info-box","success"]],template:function(l,o){l&1&&(n(0,"div",0)(1,"h1"),t(2,"React Props"),e(),n(3,"p"),t(4,"Props (short for properties) are how you pass data from parent components to child components in React. They are read-only and help make components reusable and configurable."),e(),n(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),t(9,"Understanding Props"),e(),n(10,"div",3)(11,"p")(12,"strong"),t(13,"Props"),e(),t(14," are arguments passed to React components, similar to function parameters."),e(),n(15,"ul")(16,"li"),t(17,"Props are passed from parent to child components"),e(),n(18,"li"),t(19,"Props are read-only (immutable)"),e(),n(20,"li"),t(21,"Props can be any JavaScript value: strings, numbers, objects, arrays, functions"),e(),n(22,"li"),t(23,"Use curly braces for non-string values"),e(),n(24,"li"),t(25,"Props enable component reusability"),e()()(),n(26,"pre")(27,"code",4),t(28),e()()()(),n(29,"mat-tab",5)(30,"div",2)(31,"h2"),t(32,"Props Destructuring"),e(),n(33,"div",3)(34,"p")(35,"strong"),t(36,"Destructuring"),e(),t(37," makes it easier to access props by extracting them directly in the function parameters."),e(),n(38,"ul")(39,"li"),t(40,"Extract props in function parameters"),e(),n(41,"li"),t(42,"Cleaner and more readable code"),e(),n(43,"li"),t(44,"Can use nested destructuring for nested objects"),e(),n(45,"li"),t(46,"Use rest operator (...) to collect remaining props"),e(),n(47,"li"),t(48,"Combine with default values"),e()()(),n(49,"pre")(50,"code",4),t(51),e()()()(),n(52,"mat-tab",6)(53,"div",2)(54,"h2"),t(55,"Default Props"),e(),n(56,"div",3)(57,"p")(58,"strong"),t(59,"Default props"),e(),t(60," provide fallback values when props are not provided by the parent."),e(),n(61,"ul")(62,"li"),t(63,"Use ES6 default parameters in function signatures"),e(),n(64,"li"),t(65,"Provides fallback values for undefined props"),e(),n(66,"li"),t(67,"Makes components more robust"),e(),n(68,"li"),t(69,"Can use complex default values (objects, arrays)"),e(),n(70,"li"),t(71,"Combined with destructuring for clean syntax"),e()()(),n(72,"pre")(73,"code",4),t(74),e()()()(),n(75,"mat-tab",7)(76,"div",2)(77,"h2"),t(78,"Props Validation with PropTypes"),e(),n(79,"div",8)(80,"p")(81,"strong"),t(82,"PropTypes"),e(),t(83," provide runtime type checking for React props (use TypeScript for better type safety)."),e(),n(84,"ul")(85,"li"),t(86,"Runtime validation of prop types"),e(),n(87,"li"),t(88,"Helps catch bugs during development"),e(),n(89,"li"),t(90,"Documents component API"),e(),n(91,"li"),t(92,"Use .isRequired for mandatory props"),e(),n(93,"li"),t(94,"Supports complex types (arrays, objects, shapes)"),e(),n(95,"li"),t(96,"Consider TypeScript for compile-time type checking"),e()()(),n(97,"pre")(98,"code",4),t(99),e()()()(),n(100,"mat-tab",9)(101,"div",2)(102,"h2"),t(103,"The Children Prop"),e(),n(104,"div",3)(105,"p")(106,"strong"),t(107,"Children"),e(),t(108," is a special prop that contains the content between opening and closing component tags."),e(),n(109,"ul")(110,"li"),t(111,"Special prop automatically passed by React"),e(),n(112,"li"),t(113,"Contains nested content/components"),e(),n(114,"li"),t(115,"Can be any valid JSX: text, elements, components"),e(),n(116,"li"),t(117,"Use React.Children API to manipulate children"),e(),n(118,"li"),t(119,"Enables composition patterns"),e()()(),n(120,"pre")(121,"code",4),t(122),e()()()(),n(123,"mat-tab",10)(124,"div",2)(125,"h2"),t(126,"Spreading Props"),e(),n(127,"div",3)(128,"p")(129,"strong"),t(130,"Spread operator"),e(),t(131," allows passing all props or selected props to child components efficiently."),e(),n(132,"ul")(133,"li"),t(134,"Pass all props at once with {...props}"),e(),n(135,"li"),t(136,"Useful for wrapper components"),e(),n(137,"li"),t(138,"Combine with destructuring for selective passing"),e(),n(139,"li"),t(140,"Can override spread props by placing them after"),e(),n(141,"li"),t(142,"Be careful not to pass unnecessary props"),e()()(),n(143,"pre")(144,"code",4),t(145),e()()()(),n(146,"mat-tab",11)(147,"div",2)(148,"h2"),t(149,"Passing Functions as Props"),e(),n(150,"div",3)(151,"p")(152,"strong"),t(153,"Function props"),e(),t(154," enable child components to communicate with parent components (callbacks)."),e(),n(155,"ul")(156,"li"),t(157,"Pass functions to handle events in child components"),e(),n(158,"li"),t(159,"Enable child-to-parent communication"),e(),n(160,"li"),t(161,"Common pattern for form inputs and buttons"),e(),n(162,"li"),t(163,"Use arrow functions to pass arguments"),e(),n(164,"li"),t(165,'Name function props with "on" prefix (onClick, onSubmit)'),e()()(),n(166,"pre")(167,"code",4),t(168),e()()()(),n(169,"mat-tab",12)(170,"div",2)(171,"h2"),t(172,"Props Best Practices"),e(),n(173,"div",13)(174,"h3"),t(175,"\u2713 Best Practices"),e(),n(176,"ul")(177,"li"),t(178,"Keep props simple and focused"),e(),n(179,"li"),t(180,"Use descriptive and consistent prop names"),e(),n(181,"li"),t(182,"Never mutate props inside components"),e(),n(183,"li"),t(184,"Validate props with PropTypes or TypeScript"),e(),n(185,"li"),t(186,"Group related props into objects"),e(),n(187,"li"),t(188,"Use default props for optional values"),e(),n(189,"li"),t(190,"Destructure props for cleaner code"),e(),n(191,"li"),t(192,"Document complex props with comments"),e()()(),n(193,"pre")(194,"code",4),t(195),e()()()()()()),l&2&&(i(28),r(o.propsBasics),i(23),r(o.propsDestructuring),i(23),r(o.defaultProps),i(25),r(o.propTypes),i(23),r(o.childrenProp),i(23),r(o.propsSpread),i(23),r(o.functionProps),i(27),r(o.propsBestPractices))},dependencies:[c,m,d],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;color:#abb2bf;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return a})();export{b as ReactPropsComponent};
