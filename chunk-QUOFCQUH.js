import"./chunk-4ITEIGFF.js";import"./chunk-WCULWZKC.js";import{a as h}from"./chunk-VDRUEQXK.js";import{a as u,b as x,c as f,d as C}from"./chunk-GNZ74KMC.js";import"./chunk-XAZLOLJU.js";import"./chunk-SZTU5CXE.js";import{Ia as r,Ya as a,da as c,e as E,hb as n,ib as e,mb as m,ub as t,vb as l,zb as d}from"./chunk-KMNIY7WT.js";var g=E(h());function S(o,s){if(o&1&&(n(0,"div",10)(1,"h2"),t(2,"Functional Components"),e(),n(3,"div",11)(4,"p")(5,"strong"),t(6,"Functional components"),e(),t(7," are JavaScript functions that return JSX. They are the modern and preferred way to write React components."),e(),n(8,"ul")(9,"li"),t(10,"Simple JavaScript functions that return JSX"),e(),n(11,"li"),t(12,"Can use React Hooks for state and lifecycle"),e(),n(13,"li"),t(14,"More concise and easier to test"),e(),n(15,"li"),t(16,"Better performance with less boilerplate"),e(),n(17,"li"),t(18,"Recommended for all new components"),e()()(),n(19,"pre")(20,"code",12),t(21),e()()()),o&2){let i=m();r(21),l(i.functionalComponents)}}function v(o,s){if(o&1&&(n(0,"div",10)(1,"h2"),t(2,"Class Components"),e(),n(3,"div",13)(4,"p")(5,"strong"),t(6,"Class components"),e(),t(7," are ES6 classes that extend React.Component. They are the legacy way of creating components."),e(),n(8,"ul")(9,"li"),t(10,"Use ES6 class syntax"),e(),n(11,"li"),t(12,"Have access to lifecycle methods"),e(),n(13,"li"),t(14,"Manage state with this.state and this.setState"),e(),n(15,"li"),t(16,"More verbose than functional components"),e(),n(17,"li"),t(18,"Still supported but not recommended for new code"),e()()(),n(19,"pre")(20,"code",12),t(21),e()()()),o&2){let i=m();r(21),l(i.classComponents)}}function b(o,s){if(o&1&&(n(0,"div",10)(1,"h2"),t(2,"Functional vs Class Components"),e(),n(3,"div",11)(4,"p"),t(5,"Comparison between modern functional components and legacy class components."),e(),n(6,"ul")(7,"li")(8,"strong"),t(9,"Syntax:"),e(),t(10," Functions vs Classes"),e(),n(11,"li")(12,"strong"),t(13,"State:"),e(),t(14," useState hook vs this.state"),e(),n(15,"li")(16,"strong"),t(17,"Lifecycle:"),e(),t(18," useEffect hook vs lifecycle methods"),e(),n(19,"li")(20,"strong"),t(21,"This binding:"),e(),t(22," Not needed in functional components"),e(),n(23,"li")(24,"strong"),t(25,"Performance:"),e(),t(26," Functional components are generally faster"),e(),n(27,"li")(28,"strong"),t(29,"Code size:"),e(),t(30," Functional components are more concise"),e()()(),n(31,"pre")(32,"code",12),t(33),e()()()),o&2){let i=m();r(33),l(i.componentComparison)}}function P(o,s){if(o&1&&(n(0,"div",10)(1,"h2"),t(2,"Component Composition"),e(),n(3,"div",11)(4,"p")(5,"strong"),t(6,"Composition"),e(),t(7," is the practice of building complex UIs by combining smaller, reusable components."),e(),n(8,"ul")(9,"li"),t(10,"Break down complex UIs into smaller pieces"),e(),n(11,"li"),t(12,"Create reusable component building blocks"),e(),n(13,"li"),t(14,"Pass components as props (children)"),e(),n(15,"li"),t(16,"Compose components together to build features"),e(),n(17,"li"),t(18,"Prefer composition over inheritance"),e()()(),n(19,"pre")(20,"code",12),t(21),e()()()),o&2){let i=m();r(21),l(i.componentComposition)}}function _(o,s){if(o&1&&(n(0,"div",10)(1,"h2"),t(2,"Component Export and Import"),e(),n(3,"div",11)(4,"p"),t(5,"Learn how to properly export and import React components across files."),e(),n(6,"ul")(7,"li")(8,"strong"),t(9,"Default export:"),e(),t(10," One default export per file"),e(),n(11,"li")(12,"strong"),t(13,"Named export:"),e(),t(14," Multiple named exports per file"),e(),n(15,"li"),t(16,"Import default: import App from './App'"),e(),n(17,"li"),t(18,"Import named: import { Button } from './Button'"),e(),n(19,"li"),t(20,"Mix both: import App, { Button } from './App'"),e()()(),n(21,"pre")(22,"code",12),t(23),e()()()),o&2){let i=m();r(23),l(i.componentExport)}}function M(o,s){if(o&1&&(n(0,"div",10)(1,"h2"),t(2,"Component Props"),e(),n(3,"div",11)(4,"p")(5,"strong"),t(6,"Props"),e(),t(7," (properties) are how you pass data from parent to child components."),e(),n(8,"ul")(9,"li"),t(10,"Props are read-only (immutable)"),e(),n(11,"li"),t(12,"Passed from parent to child components"),e(),n(13,"li"),t(14,"Can destructure props in function parameters"),e(),n(15,"li"),t(16,"Use default values with ES6 default parameters"),e(),n(17,"li"),t(18,"Spread operator to pass multiple props"),e()()(),n(19,"pre")(20,"code",12),t(21),e()()()),o&2){let i=m();r(21),l(i.componentProps)}}function y(o,s){if(o&1&&(n(0,"div",10)(1,"h2"),t(2,"Pure Components & Memoization"),e(),n(3,"div",14)(4,"p")(5,"strong"),t(6,"Pure components"),e(),t(7," only re-render when their props change, optimizing performance."),e(),n(8,"ul")(9,"li"),t(10,"React.memo() for functional components"),e(),n(11,"li"),t(12,"PureComponent for class components"),e(),n(13,"li"),t(14,"Shallow comparison of props"),e(),n(15,"li"),t(16,"Custom comparison function option"),e(),n(17,"li"),t(18,"Prevents unnecessary re-renders"),e(),n(19,"li"),t(20,"Use for expensive render operations"),e()()(),n(21,"pre")(22,"code",12),t(23),e()()()),o&2){let i=m();r(23),l(i.pureComponents)}}function w(o,s){if(o&1&&(n(0,"div",10)(1,"h2"),t(2,"Component Patterns"),e(),n(3,"div",11)(4,"p"),t(5,"Common patterns for structuring React components effectively."),e(),n(6,"ul")(7,"li")(8,"strong"),t(9,"Container/Presentational:"),e(),t(10," Separate logic from UI"),e(),n(11,"li")(12,"strong"),t(13,"Multiple returns:"),e(),t(14," Early returns for conditions"),e(),n(15,"li")(16,"strong"),t(17,"Compound components:"),e(),t(18," Components that work together"),e(),n(19,"li")(20,"strong"),t(21,"Props getters:"),e(),t(22," Functions that return props"),e(),n(23,"li")(24,"strong"),t(25,"State reducers:"),e(),t(26," Custom state logic"),e()()(),n(27,"pre")(28,"code",12),t(29),e()()()),o&2){let i=m();r(29),l(i.componentPatterns)}}var F=(()=>{class o{constructor(){this.functionalComponents=`// Modern Function Component
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
}`,this.classComponents=`import React, { Component } from 'react';

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

export default Counter;`,this.componentComparison=`// Functional Component (Modern & Preferred)
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
}`,this.componentComposition=`// Composition Example
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
}`,this.componentExport=`// Named Exports
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
// import App, { Button, Input } from './App';`,this.componentProps=`// Destructuring Props
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
<Profile name="John" age={30} email="john@example.com" />`,this.pureComponents=`import React, { memo, PureComponent } from 'react';

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
}`,this.componentPatterns=`// Container/Presentational Pattern
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
}`}ngAfterViewChecked(){g.highlightAll()}static{this.\u0275fac=function(p){return new(p||o)}}static{this.\u0275cmp=c({type:o,selectors:[["app-react-components"]],standalone:!0,features:[d],decls:22,vars:0,consts:[[1,"container"],["label","Functional Components"],["matTabContent",""],["label","Class Components"],["label","Comparison"],["label","Composition"],["label","Import/Export"],["label","Props"],["label","Pure Components"],["label","Patterns"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],[1,"info-box","warning"],[1,"info-box","success"]],template:function(p,I){p&1&&(n(0,"div",0)(1,"h1"),t(2,"React Components"),e(),n(3,"p"),t(4,"Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces and think about each piece in isolation."),e(),n(5,"mat-tab-group")(6,"mat-tab",1),a(7,S,22,1,"ng-template",2),e(),n(8,"mat-tab",3),a(9,v,22,1,"ng-template",2),e(),n(10,"mat-tab",4),a(11,b,34,1,"ng-template",2),e(),n(12,"mat-tab",5),a(13,P,22,1,"ng-template",2),e(),n(14,"mat-tab",6),a(15,_,24,1,"ng-template",2),e(),n(16,"mat-tab",7),a(17,M,22,1,"ng-template",2),e(),n(18,"mat-tab",8),a(19,y,24,1,"ng-template",2),e(),n(20,"mat-tab",9),a(21,w,30,1,"ng-template",2),e()()())},dependencies:[C,u,x,f],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return o})();export{F as ReactComponentsComponent};
