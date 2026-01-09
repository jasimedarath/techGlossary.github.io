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

// src/app/components/react/react-components/react-components.component.ts
var ReactComponentsComponent = class _ReactComponentsComponent {
  constructor() {
    this.functionalComponents = `// Modern Function Component
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Arrow Function Component
const Greeting = (props) => {
  return <h1>Welcome, {props.user}!</h1>;
}

// Implicit Return
const Button = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);

// Component with children
function Card({ children, title }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}`;
    this.classComponents = `import React, { Component } from 'react';

// Basic Class Component
class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

// Class Component with State
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;`;
    this.componentComparison = `// Functional Component (Modern & Preferred)
function UserProfile({ user }) {
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    // Component did mount
    console.log('Component mounted');
    
    return () => {
      // Component will unmount
      console.log('Component unmounting');
    };
  }, []);

  return <div>{user.name}</div>;
}

// Class Component (Legacy)
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false };
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentWillUnmount() {
    console.log('Component unmounting');
  }

  render() {
    return <div>{this.props.user.name}</div>;
  }
}`;
    this.componentComposition = `// Composition Example
function Avatar({ user }) {
  return (
    <img 
      src={user.avatarUrl}
      alt={user.name}
      className="avatar"
    />
  );
}

function UserInfo({ user }) {
  return (
    <div className="user-info">
      <Avatar user={user} />
      <div className="user-name">{user.name}</div>
    </div>
  );
}

function Comment({ author, text, date }) {
  return (
    <div className="comment">
      <UserInfo user={author} />
      <div className="comment-text">{text}</div>
      <div className="comment-date">{date}</div>
    </div>
  );
}`;
    this.componentExport = `// Named Exports
export function Button({ label }) {
  return <button>{label}</button>;
}

export function Input({ value, onChange }) {
  return <input value={value} onChange={onChange} />;
}

// Default Export
export default function App() {
  return (
    <div>
      <Button label="Click me" />
      <Input value="" onChange={() => {}} />
    </div>
  );
}

// Importing
// import App, { Button, Input } from './App';`;
    this.componentProps = `// Destructuring Props
function UserCard({ name, age, email }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

// Default Props
function Greeting({ name = 'Guest', message = 'Welcome' }) {
  return <h1>{message}, {name}!</h1>;
}

// Spread Props
function Profile(props) {
  return (
    <div>
      <UserCard {...props} />
    </div>
  );
}

// Usage
<Profile name="John" age={30} email="john@example.com" />`;
    this.pureComponents = `import React, { memo, PureComponent } from 'react';

// Functional Component with memo
const ExpensiveComponent = memo(function ExpensiveComponent({ data }) {
  console.log('Rendering ExpensiveComponent');
  return <div>{data.value}</div>;
});

// Custom comparison function
const CustomMemo = memo(
  function MyComponent({ person }) {
    return <div>{person.name}</div>;
  },
  (prevProps, nextProps) => {
    return prevProps.person.id === nextProps.person.id;
  }
);

// PureComponent (Class)
class CounterDisplay extends PureComponent {
  render() {
    console.log('Rendering CounterDisplay');
    return <div>Count: {this.props.count}</div>;
  }
}`;
    this.componentPatterns = `// Container/Presentational Pattern
// Container Component
function UserContainer() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchUser().then(setUser);
  }, []);

  return <UserPresentation user={user} />;
}

// Presentational Component
function UserPresentation({ user }) {
  if (!user) return <div>Loading...</div>;
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

// Component with Multiple Returns
function Dashboard({ isLoggedIn, isLoading }) {
  if (isLoading) return <LoadingSpinner />;
  if (!isLoggedIn) return <LoginPage />;
  
  return <MainDashboard />;
}`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function ReactComponentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReactComponentsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReactComponentsComponent, selectors: [["app-react-components"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 214, vars: 8, consts: [[1, "container"], ["label", "Functional Components"], [1, "tab-content"], [1, "info-box"], [1, "language-jsx"], ["label", "Class Components"], [1, "info-box", "warning"], ["label", "Comparison"], ["label", "Composition"], ["label", "Import/Export"], ["label", "Props"], ["label", "Pure Components"], [1, "info-box", "success"], ["label", "Patterns"]], template: function ReactComponentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "React Components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces and think about each piece in isolation.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "Functional Components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "Functional components");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " are JavaScript functions that return JSX. They are the modern and preferred way to write React components.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "Simple JavaScript functions that return JSX");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "Can use React Hooks for state and lifecycle");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li");
        \u0275\u0275text(21, "More concise and easier to test");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275text(23, "Better performance with less boilerplate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "li");
        \u0275\u0275text(25, "Recommended for all new components");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "pre")(27, "code", 4);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(29, "mat-tab", 5)(30, "div", 2)(31, "h2");
        \u0275\u0275text(32, "Class Components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 6)(34, "p")(35, "strong");
        \u0275\u0275text(36, "Class components");
        \u0275\u0275elementEnd();
        \u0275\u0275text(37, " are ES6 classes that extend React.Component. They are the legacy way of creating components.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "ul")(39, "li");
        \u0275\u0275text(40, "Use ES6 class syntax");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "li");
        \u0275\u0275text(42, "Have access to lifecycle methods");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li");
        \u0275\u0275text(44, "Manage state with this.state and this.setState");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "li");
        \u0275\u0275text(46, "More verbose than functional components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "li");
        \u0275\u0275text(48, "Still supported but not recommended for new code");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "pre")(50, "code", 4);
        \u0275\u0275text(51);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(52, "mat-tab", 7)(53, "div", 2)(54, "h2");
        \u0275\u0275text(55, "Functional vs Class Components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 3)(57, "p");
        \u0275\u0275text(58, "Comparison between modern functional components and legacy class components.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "ul")(60, "li")(61, "strong");
        \u0275\u0275text(62, "Syntax:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(63, " Functions vs Classes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "li")(65, "strong");
        \u0275\u0275text(66, "State:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(67, " useState hook vs this.state");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "li")(69, "strong");
        \u0275\u0275text(70, "Lifecycle:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(71, " useEffect hook vs lifecycle methods");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "li")(73, "strong");
        \u0275\u0275text(74, "This binding:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(75, " Not needed in functional components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "li")(77, "strong");
        \u0275\u0275text(78, "Performance:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(79, " Functional components are generally faster");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "li")(81, "strong");
        \u0275\u0275text(82, "Code size:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(83, " Functional components are more concise");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(84, "pre")(85, "code", 4);
        \u0275\u0275text(86);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(87, "mat-tab", 8)(88, "div", 2)(89, "h2");
        \u0275\u0275text(90, "Component Composition");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "div", 3)(92, "p")(93, "strong");
        \u0275\u0275text(94, "Composition");
        \u0275\u0275elementEnd();
        \u0275\u0275text(95, " is the practice of building complex UIs by combining smaller, reusable components.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "ul")(97, "li");
        \u0275\u0275text(98, "Break down complex UIs into smaller pieces");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "li");
        \u0275\u0275text(100, "Create reusable component building blocks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "li");
        \u0275\u0275text(102, "Pass components as props (children)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "li");
        \u0275\u0275text(104, "Compose components together to build features");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "li");
        \u0275\u0275text(106, "Prefer composition over inheritance");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(107, "pre")(108, "code", 4);
        \u0275\u0275text(109);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(110, "mat-tab", 9)(111, "div", 2)(112, "h2");
        \u0275\u0275text(113, "Component Export and Import");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "div", 3)(115, "p");
        \u0275\u0275text(116, "Learn how to properly export and import React components across files.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "ul")(118, "li")(119, "strong");
        \u0275\u0275text(120, "Default export:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(121, " One default export per file");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "li")(123, "strong");
        \u0275\u0275text(124, "Named export:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(125, " Multiple named exports per file");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "li");
        \u0275\u0275text(127, "Import default: import App from './App'");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "li");
        \u0275\u0275text(129, "Import named: import { Button } from './Button'");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "li");
        \u0275\u0275text(131, "Mix both: import App, { Button } from './App'");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(132, "pre")(133, "code", 4);
        \u0275\u0275text(134);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(135, "mat-tab", 10)(136, "div", 2)(137, "h2");
        \u0275\u0275text(138, "Component Props");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "div", 3)(140, "p")(141, "strong");
        \u0275\u0275text(142, "Props");
        \u0275\u0275elementEnd();
        \u0275\u0275text(143, " (properties) are how you pass data from parent to child components.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "ul")(145, "li");
        \u0275\u0275text(146, "Props are read-only (immutable)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "li");
        \u0275\u0275text(148, "Passed from parent to child components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(149, "li");
        \u0275\u0275text(150, "Can destructure props in function parameters");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "li");
        \u0275\u0275text(152, "Use default values with ES6 default parameters");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "li");
        \u0275\u0275text(154, "Spread operator to pass multiple props");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(155, "pre")(156, "code", 4);
        \u0275\u0275text(157);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(158, "mat-tab", 11)(159, "div", 2)(160, "h2");
        \u0275\u0275text(161, "Pure Components & Memoization");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "div", 12)(163, "p")(164, "strong");
        \u0275\u0275text(165, "Pure components");
        \u0275\u0275elementEnd();
        \u0275\u0275text(166, " only re-render when their props change, optimizing performance.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "ul")(168, "li");
        \u0275\u0275text(169, "React.memo() for functional components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(170, "li");
        \u0275\u0275text(171, "PureComponent for class components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(172, "li");
        \u0275\u0275text(173, "Shallow comparison of props");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(174, "li");
        \u0275\u0275text(175, "Custom comparison function option");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "li");
        \u0275\u0275text(177, "Prevents unnecessary re-renders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "li");
        \u0275\u0275text(179, "Use for expensive render operations");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(180, "pre")(181, "code", 4);
        \u0275\u0275text(182);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(183, "mat-tab", 13)(184, "div", 2)(185, "h2");
        \u0275\u0275text(186, "Component Patterns");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "div", 3)(188, "p");
        \u0275\u0275text(189, "Common patterns for structuring React components effectively.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(190, "ul")(191, "li")(192, "strong");
        \u0275\u0275text(193, "Container/Presentational:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(194, " Separate logic from UI");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(195, "li")(196, "strong");
        \u0275\u0275text(197, "Multiple returns:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(198, " Early returns for conditions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(199, "li")(200, "strong");
        \u0275\u0275text(201, "Compound components:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(202, " Components that work together");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(203, "li")(204, "strong");
        \u0275\u0275text(205, "Props getters:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(206, " Functions that return props");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(207, "li")(208, "strong");
        \u0275\u0275text(209, "State reducers:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(210, " Custom state logic");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(211, "pre")(212, "code", 4);
        \u0275\u0275text(213);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(28);
        \u0275\u0275textInterpolate(ctx.functionalComponents);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.classComponents);
        \u0275\u0275advance(35);
        \u0275\u0275textInterpolate(ctx.componentComparison);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.componentComposition);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.componentExport);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.componentProps);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.pureComponents);
        \u0275\u0275advance(31);
        \u0275\u0275textInterpolate(ctx.componentPatterns);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #61dafb;\n  margin-bottom: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #282c34;\n  margin-top: 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  padding: 15px;\n  margin: 15px 0;\n  border-radius: 4px;\n}\n.info-box.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-left-color: #4caf50;\n}\n.info-box.warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #ff9800;\n}\n.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1976d2;\n}\n.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding-left: 20px;\n}\n.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05);\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\npre[_ngcontent-%COMP%] {\n  background: #282c34;\n  color: #abb2bf;\n  padding: 15px;\n  border-radius: 4px;\n  overflow-x: auto;\n  margin: 15px 0;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n  font-size: 14px;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=react-components.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReactComponentsComponent, { className: "ReactComponentsComponent", filePath: "src\\app\\components\\react\\react-components\\react-components.component.ts", lineNumber: 13 });
})();
export {
  ReactComponentsComponent
};
//# sourceMappingURL=chunk-5KVOKHDJ.js.map
