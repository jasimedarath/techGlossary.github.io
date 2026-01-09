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

// src/app/components/react/react-props/react-props.component.ts
var ReactPropsComponent = class _ReactPropsComponent {
  constructor() {
    this.propsBasics = `// Passing Props to Components
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
/>`;
    this.propsDestructuring = `// Destructuring Props in Function Parameters
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

<Button label="Click" className="btn" onClick={handleClick} />`;
    this.defaultProps = `// Default Props with ES6 Default Parameters
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
}`;
    this.propTypes = `import PropTypes from 'prop-types';

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
};`;
    this.childrenProp = `// Children Prop
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
}`;
    this.propsSpread = `// Spreading Props
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
}`;
    this.functionProps = `// Passing Functions as Props (Callbacks)
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
}`;
    this.propsBestPractices = `// Best Practices for Props

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
}`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function ReactPropsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReactPropsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReactPropsComponent, selectors: [["app-react-props"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 196, vars: 8, consts: [[1, "container"], ["label", "Props Basics"], [1, "tab-content"], [1, "info-box"], [1, "language-jsx"], ["label", "Destructuring"], ["label", "Default Props"], ["label", "PropTypes"], [1, "info-box", "warning"], ["label", "Children Prop"], ["label", "Spread Props"], ["label", "Function Props"], ["label", "Best Practices"], [1, "info-box", "success"]], template: function ReactPropsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "React Props");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Props (short for properties) are how you pass data from parent components to child components in React. They are read-only and help make components reusable and configurable.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "Understanding Props");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "Props");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " are arguments passed to React components, similar to function parameters.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "Props are passed from parent to child components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "Props are read-only (immutable)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li");
        \u0275\u0275text(21, "Props can be any JavaScript value: strings, numbers, objects, arrays, functions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275text(23, "Use curly braces for non-string values");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "li");
        \u0275\u0275text(25, "Props enable component reusability");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "pre")(27, "code", 4);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(29, "mat-tab", 5)(30, "div", 2)(31, "h2");
        \u0275\u0275text(32, "Props Destructuring");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 3)(34, "p")(35, "strong");
        \u0275\u0275text(36, "Destructuring");
        \u0275\u0275elementEnd();
        \u0275\u0275text(37, " makes it easier to access props by extracting them directly in the function parameters.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "ul")(39, "li");
        \u0275\u0275text(40, "Extract props in function parameters");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "li");
        \u0275\u0275text(42, "Cleaner and more readable code");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li");
        \u0275\u0275text(44, "Can use nested destructuring for nested objects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "li");
        \u0275\u0275text(46, "Use rest operator (...) to collect remaining props");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "li");
        \u0275\u0275text(48, "Combine with default values");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "pre")(50, "code", 4);
        \u0275\u0275text(51);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(52, "mat-tab", 6)(53, "div", 2)(54, "h2");
        \u0275\u0275text(55, "Default Props");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 3)(57, "p")(58, "strong");
        \u0275\u0275text(59, "Default props");
        \u0275\u0275elementEnd();
        \u0275\u0275text(60, " provide fallback values when props are not provided by the parent.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "ul")(62, "li");
        \u0275\u0275text(63, "Use ES6 default parameters in function signatures");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "li");
        \u0275\u0275text(65, "Provides fallback values for undefined props");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "li");
        \u0275\u0275text(67, "Makes components more robust");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "li");
        \u0275\u0275text(69, "Can use complex default values (objects, arrays)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "li");
        \u0275\u0275text(71, "Combined with destructuring for clean syntax");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(72, "pre")(73, "code", 4);
        \u0275\u0275text(74);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(75, "mat-tab", 7)(76, "div", 2)(77, "h2");
        \u0275\u0275text(78, "Props Validation with PropTypes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "div", 8)(80, "p")(81, "strong");
        \u0275\u0275text(82, "PropTypes");
        \u0275\u0275elementEnd();
        \u0275\u0275text(83, " provide runtime type checking for React props (use TypeScript for better type safety).");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "ul")(85, "li");
        \u0275\u0275text(86, "Runtime validation of prop types");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "li");
        \u0275\u0275text(88, "Helps catch bugs during development");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "li");
        \u0275\u0275text(90, "Documents component API");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "li");
        \u0275\u0275text(92, "Use .isRequired for mandatory props");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "li");
        \u0275\u0275text(94, "Supports complex types (arrays, objects, shapes)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "li");
        \u0275\u0275text(96, "Consider TypeScript for compile-time type checking");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(97, "pre")(98, "code", 4);
        \u0275\u0275text(99);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(100, "mat-tab", 9)(101, "div", 2)(102, "h2");
        \u0275\u0275text(103, "The Children Prop");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "div", 3)(105, "p")(106, "strong");
        \u0275\u0275text(107, "Children");
        \u0275\u0275elementEnd();
        \u0275\u0275text(108, " is a special prop that contains the content between opening and closing component tags.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "ul")(110, "li");
        \u0275\u0275text(111, "Special prop automatically passed by React");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "li");
        \u0275\u0275text(113, "Contains nested content/components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "li");
        \u0275\u0275text(115, "Can be any valid JSX: text, elements, components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "li");
        \u0275\u0275text(117, "Use React.Children API to manipulate children");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "li");
        \u0275\u0275text(119, "Enables composition patterns");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(120, "pre")(121, "code", 4);
        \u0275\u0275text(122);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(123, "mat-tab", 10)(124, "div", 2)(125, "h2");
        \u0275\u0275text(126, "Spreading Props");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "div", 3)(128, "p")(129, "strong");
        \u0275\u0275text(130, "Spread operator");
        \u0275\u0275elementEnd();
        \u0275\u0275text(131, " allows passing all props or selected props to child components efficiently.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "ul")(133, "li");
        \u0275\u0275text(134, "Pass all props at once with {...props}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "li");
        \u0275\u0275text(136, "Useful for wrapper components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "li");
        \u0275\u0275text(138, "Combine with destructuring for selective passing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "li");
        \u0275\u0275text(140, "Can override spread props by placing them after");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "li");
        \u0275\u0275text(142, "Be careful not to pass unnecessary props");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(143, "pre")(144, "code", 4);
        \u0275\u0275text(145);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(146, "mat-tab", 11)(147, "div", 2)(148, "h2");
        \u0275\u0275text(149, "Passing Functions as Props");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "div", 3)(151, "p")(152, "strong");
        \u0275\u0275text(153, "Function props");
        \u0275\u0275elementEnd();
        \u0275\u0275text(154, " enable child components to communicate with parent components (callbacks).");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "ul")(156, "li");
        \u0275\u0275text(157, "Pass functions to handle events in child components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "li");
        \u0275\u0275text(159, "Enable child-to-parent communication");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "li");
        \u0275\u0275text(161, "Common pattern for form inputs and buttons");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "li");
        \u0275\u0275text(163, "Use arrow functions to pass arguments");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "li");
        \u0275\u0275text(165, 'Name function props with "on" prefix (onClick, onSubmit)');
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(166, "pre")(167, "code", 4);
        \u0275\u0275text(168);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(169, "mat-tab", 12)(170, "div", 2)(171, "h2");
        \u0275\u0275text(172, "Props Best Practices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(173, "div", 13)(174, "h3");
        \u0275\u0275text(175, "\u2713 Best Practices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "ul")(177, "li");
        \u0275\u0275text(178, "Keep props simple and focused");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(179, "li");
        \u0275\u0275text(180, "Use descriptive and consistent prop names");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(181, "li");
        \u0275\u0275text(182, "Never mutate props inside components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "li");
        \u0275\u0275text(184, "Validate props with PropTypes or TypeScript");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(185, "li");
        \u0275\u0275text(186, "Group related props into objects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "li");
        \u0275\u0275text(188, "Use default props for optional values");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(189, "li");
        \u0275\u0275text(190, "Destructure props for cleaner code");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(191, "li");
        \u0275\u0275text(192, "Document complex props with comments");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(193, "pre")(194, "code", 4);
        \u0275\u0275text(195);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(28);
        \u0275\u0275textInterpolate(ctx.propsBasics);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.propsDestructuring);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.defaultProps);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.propTypes);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.childrenProp);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.propsSpread);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.functionProps);
        \u0275\u0275advance(27);
        \u0275\u0275textInterpolate(ctx.propsBestPractices);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #61dafb;\n  margin-bottom: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #282c34;\n  margin-top: 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  padding: 15px;\n  margin: 15px 0;\n  border-radius: 4px;\n}\n.info-box.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-left-color: #4caf50;\n}\n.info-box.warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #ff9800;\n}\n.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1976d2;\n}\n.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding-left: 20px;\n}\n.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05);\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\npre[_ngcontent-%COMP%] {\n  background: #282c34;\n  color: #abb2bf;\n  padding: 15px;\n  border-radius: 4px;\n  overflow-x: auto;\n  margin: 15px 0;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n  font-size: 14px;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=react-props.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReactPropsComponent, { className: "ReactPropsComponent", filePath: "src\\app\\components\\react\\react-props\\react-props.component.ts", lineNumber: 13 });
})();
export {
  ReactPropsComponent
};
//# sourceMappingURL=chunk-FUGAN27O.js.map
