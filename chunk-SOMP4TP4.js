import{b as p,c as d,d as c}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as o,da as m,gb as n,hb as e,tb as t,ub as i,yb as s}from"./chunk-WGQ2ELTG.js";var g=(()=>{class a{constructor(){this.functionalComponents=`// Modern Function Component
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
}`}ngAfterViewChecked(){Prism.highlightAll()}static{this.\u0275fac=function(l){return new(l||a)}}static{this.\u0275cmp=m({type:a,selectors:[["app-react-components"]],standalone:!0,features:[s],decls:214,vars:8,consts:[[1,"container"],["label","Functional Components"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],["label","Class Components"],[1,"info-box","warning"],["label","Comparison"],["label","Composition"],["label","Import/Export"],["label","Props"],["label","Pure Components"],[1,"info-box","success"],["label","Patterns"]],template:function(l,r){l&1&&(n(0,"div",0)(1,"h1"),t(2,"React Components"),e(),n(3,"p"),t(4,"Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces and think about each piece in isolation."),e(),n(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),t(9,"Functional Components"),e(),n(10,"div",3)(11,"p")(12,"strong"),t(13,"Functional components"),e(),t(14," are JavaScript functions that return JSX. They are the modern and preferred way to write React components."),e(),n(15,"ul")(16,"li"),t(17,"Simple JavaScript functions that return JSX"),e(),n(18,"li"),t(19,"Can use React Hooks for state and lifecycle"),e(),n(20,"li"),t(21,"More concise and easier to test"),e(),n(22,"li"),t(23,"Better performance with less boilerplate"),e(),n(24,"li"),t(25,"Recommended for all new components"),e()()(),n(26,"pre")(27,"code",4),t(28),e()()()(),n(29,"mat-tab",5)(30,"div",2)(31,"h2"),t(32,"Class Components"),e(),n(33,"div",6)(34,"p")(35,"strong"),t(36,"Class components"),e(),t(37," are ES6 classes that extend React.Component. They are the legacy way of creating components."),e(),n(38,"ul")(39,"li"),t(40,"Use ES6 class syntax"),e(),n(41,"li"),t(42,"Have access to lifecycle methods"),e(),n(43,"li"),t(44,"Manage state with this.state and this.setState"),e(),n(45,"li"),t(46,"More verbose than functional components"),e(),n(47,"li"),t(48,"Still supported but not recommended for new code"),e()()(),n(49,"pre")(50,"code",4),t(51),e()()()(),n(52,"mat-tab",7)(53,"div",2)(54,"h2"),t(55,"Functional vs Class Components"),e(),n(56,"div",3)(57,"p"),t(58,"Comparison between modern functional components and legacy class components."),e(),n(59,"ul")(60,"li")(61,"strong"),t(62,"Syntax:"),e(),t(63," Functions vs Classes"),e(),n(64,"li")(65,"strong"),t(66,"State:"),e(),t(67," useState hook vs this.state"),e(),n(68,"li")(69,"strong"),t(70,"Lifecycle:"),e(),t(71," useEffect hook vs lifecycle methods"),e(),n(72,"li")(73,"strong"),t(74,"This binding:"),e(),t(75," Not needed in functional components"),e(),n(76,"li")(77,"strong"),t(78,"Performance:"),e(),t(79," Functional components are generally faster"),e(),n(80,"li")(81,"strong"),t(82,"Code size:"),e(),t(83," Functional components are more concise"),e()()(),n(84,"pre")(85,"code",4),t(86),e()()()(),n(87,"mat-tab",8)(88,"div",2)(89,"h2"),t(90,"Component Composition"),e(),n(91,"div",3)(92,"p")(93,"strong"),t(94,"Composition"),e(),t(95," is the practice of building complex UIs by combining smaller, reusable components."),e(),n(96,"ul")(97,"li"),t(98,"Break down complex UIs into smaller pieces"),e(),n(99,"li"),t(100,"Create reusable component building blocks"),e(),n(101,"li"),t(102,"Pass components as props (children)"),e(),n(103,"li"),t(104,"Compose components together to build features"),e(),n(105,"li"),t(106,"Prefer composition over inheritance"),e()()(),n(107,"pre")(108,"code",4),t(109),e()()()(),n(110,"mat-tab",9)(111,"div",2)(112,"h2"),t(113,"Component Export and Import"),e(),n(114,"div",3)(115,"p"),t(116,"Learn how to properly export and import React components across files."),e(),n(117,"ul")(118,"li")(119,"strong"),t(120,"Default export:"),e(),t(121," One default export per file"),e(),n(122,"li")(123,"strong"),t(124,"Named export:"),e(),t(125," Multiple named exports per file"),e(),n(126,"li"),t(127,"Import default: import App from './App'"),e(),n(128,"li"),t(129,"Import named: import { Button } from './Button'"),e(),n(130,"li"),t(131,"Mix both: import App, { Button } from './App'"),e()()(),n(132,"pre")(133,"code",4),t(134),e()()()(),n(135,"mat-tab",10)(136,"div",2)(137,"h2"),t(138,"Component Props"),e(),n(139,"div",3)(140,"p")(141,"strong"),t(142,"Props"),e(),t(143," (properties) are how you pass data from parent to child components."),e(),n(144,"ul")(145,"li"),t(146,"Props are read-only (immutable)"),e(),n(147,"li"),t(148,"Passed from parent to child components"),e(),n(149,"li"),t(150,"Can destructure props in function parameters"),e(),n(151,"li"),t(152,"Use default values with ES6 default parameters"),e(),n(153,"li"),t(154,"Spread operator to pass multiple props"),e()()(),n(155,"pre")(156,"code",4),t(157),e()()()(),n(158,"mat-tab",11)(159,"div",2)(160,"h2"),t(161,"Pure Components & Memoization"),e(),n(162,"div",12)(163,"p")(164,"strong"),t(165,"Pure components"),e(),t(166," only re-render when their props change, optimizing performance."),e(),n(167,"ul")(168,"li"),t(169,"React.memo() for functional components"),e(),n(170,"li"),t(171,"PureComponent for class components"),e(),n(172,"li"),t(173,"Shallow comparison of props"),e(),n(174,"li"),t(175,"Custom comparison function option"),e(),n(176,"li"),t(177,"Prevents unnecessary re-renders"),e(),n(178,"li"),t(179,"Use for expensive render operations"),e()()(),n(180,"pre")(181,"code",4),t(182),e()()()(),n(183,"mat-tab",13)(184,"div",2)(185,"h2"),t(186,"Component Patterns"),e(),n(187,"div",3)(188,"p"),t(189,"Common patterns for structuring React components effectively."),e(),n(190,"ul")(191,"li")(192,"strong"),t(193,"Container/Presentational:"),e(),t(194," Separate logic from UI"),e(),n(195,"li")(196,"strong"),t(197,"Multiple returns:"),e(),t(198," Early returns for conditions"),e(),n(199,"li")(200,"strong"),t(201,"Compound components:"),e(),t(202," Components that work together"),e(),n(203,"li")(204,"strong"),t(205,"Props getters:"),e(),t(206," Functions that return props"),e(),n(207,"li")(208,"strong"),t(209,"State reducers:"),e(),t(210," Custom state logic"),e()()(),n(211,"pre")(212,"code",4),t(213),e()()()()()()),l&2&&(o(28),i(r.functionalComponents),o(23),i(r.classComponents),o(35),i(r.componentComparison),o(23),i(r.componentComposition),o(25),i(r.componentExport),o(23),i(r.componentProps),o(25),i(r.pureComponents),o(31),i(r.componentPatterns))},dependencies:[c,p,d],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;color:#abb2bf;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return a})();export{g as ReactComponentsComponent};
