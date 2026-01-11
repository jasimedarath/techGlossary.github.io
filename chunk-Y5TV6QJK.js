import"./chunk-4ITEIGFF.js";import"./chunk-WCULWZKC.js";import{a as v}from"./chunk-FSUYFWSG.js";import{a as x,b as u,c as g,d as S}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as r,Xa as l,da as c,e as h,gb as e,hb as t,lb as o,tb as n,ub as s,yb as p}from"./chunk-WGQ2ELTG.js";var f=h(v());function b(i,m){if(i&1&&(e(0,"div",8)(1,"h2"),n(2,"What is JSX?"),t(),e(3,"div",9)(4,"p")(5,"strong"),n(6,"JSX"),t(),n(7," stands for JavaScript XML. It's a syntax extension that allows you to write HTML-like code in JavaScript files. JSX gets compiled to regular JavaScript function calls."),t(),e(8,"ul")(9,"li"),n(10,'JSX produces React "elements"'),t(),e(11,"li"),n(12,"It's not required but makes code more readable"),t(),e(13,"li"),n(14,"You can embed JavaScript expressions using curly braces"),t(),e(15,"li"),n(16,"JSX is closer to JavaScript than HTML"),t()()(),e(17,"pre")(18,"code",10),n(19),t()()()),i&2){let a=o();r(19),s(a.jsxBasics)}}function E(i,m){if(i&1&&(e(0,"div",8)(1,"h2"),n(2,"React Fragments"),t(),e(3,"div",9)(4,"p")(5,"strong"),n(6,"Fragments"),t(),n(7," let you group multiple children without adding extra nodes to the DOM."),t(),e(8,"ul")(9,"li"),n(10,"Use <Fragment> or short syntax <>"),t(),e(11,"li"),n(12,"Helps maintain clean DOM structure"),t(),e(13,"li"),n(14,"Can have keys when rendering lists"),t(),e(15,"li"),n(16,"No extra wrapper div in the DOM"),t()()(),e(17,"pre")(18,"code",10),n(19),t()()()),i&2){let a=o();r(19),s(a.jsxFragments)}}function C(i,m){if(i&1&&(e(0,"div",8)(1,"h2"),n(2,"JavaScript Expressions in JSX"),t(),e(3,"div",9)(4,"p"),n(5,"You can embed any JavaScript expression in JSX by wrapping it in curly braces."),t(),e(6,"ul")(7,"li"),n(8,"Arithmetic operations"),t(),e(9,"li"),n(10,"Function calls"),t(),e(11,"li"),n(12,"Ternary operators for conditional rendering"),t(),e(13,"li"),n(14,"Logical && for conditional display"),t(),e(15,"li"),n(16,"Array methods like map, filter"),t()()(),e(17,"pre")(18,"code",10),n(19),t()()()),i&2){let a=o();r(19),s(a.jsxExpressions)}}function y(i,m){if(i&1&&(e(0,"div",8)(1,"h2"),n(2,"JSX Attributes"),t(),e(3,"div",9)(4,"p"),n(5,"JSX uses "),e(6,"strong"),n(7,"camelCase"),t(),n(8," for attributes and some have different names than HTML."),t(),e(9,"ul")(10,"li")(11,"code"),n(12,"class"),t(),n(13," \u2192 "),e(14,"code"),n(15,"className"),t()(),e(16,"li")(17,"code"),n(18,"for"),t(),n(19," \u2192 "),e(20,"code"),n(21,"htmlFor"),t()(),e(22,"li"),n(23,"Event handlers use camelCase: "),e(24,"code"),n(25,"onClick"),t(),n(26,", "),e(27,"code"),n(28,"onChange"),t()(),e(29,"li"),n(30,"Style attribute accepts a JavaScript object"),t(),e(31,"li"),n(32,"Custom data attributes: "),e(33,"code"),n(34,"data-*"),t()()()(),e(35,"pre")(36,"code",10),n(37),t()()()),i&2){let a=o();r(37),s(a.jsxAttributes)}}function J(i,m){if(i&1&&(e(0,"div",8)(1,"h2"),n(2,"JSX Children"),t(),e(3,"div",9)(4,"p"),n(5,"JSX elements can contain children - other elements, text, or expressions."),t(),e(6,"ul")(7,"li"),n(8,"Children can be nested JSX elements"),t(),e(9,"li"),n(10,"String literals as children"),t(),e(11,"li"),n(12,"JavaScript expressions as children"),t(),e(13,"li"),n(14,"Arrays of elements (with keys)"),t(),e(15,"li"),n(16,"Children as props for composition"),t()()(),e(17,"pre")(18,"code",10),n(19),t()()()),i&2){let a=o();r(19),s(a.jsxChildren)}}function _(i,m){if(i&1&&(e(0,"div",8)(1,"h2"),n(2,"JSX Best Practices"),t(),e(3,"div",11)(4,"h3"),n(5,"\u2713 Do's"),t(),e(6,"ul")(7,"li"),n(8,"Always provide keys when rendering lists"),t(),e(9,"li"),n(10,"Keep JSX readable with proper indentation"),t(),e(11,"li"),n(12,"Extract complex JSX into separate components"),t(),e(13,"li"),n(14,"Use meaningful component and variable names"),t(),e(15,"li"),n(16,"Wrap multi-line JSX in parentheses"),t(),e(17,"li"),n(18,"Use fragments to avoid extra wrapper divs"),t()()(),e(19,"div",12)(20,"h3"),n(21,"\u2717 Don'ts"),t(),e(22,"ul")(23,"li"),n(24,"Don't use index as key unless absolutely necessary"),t(),e(25,"li"),n(26,"Don't create components inside render methods"),t(),e(27,"li"),n(28,"Don't forget to close self-closing tags"),t(),e(29,"li"),n(30,"Don't use quotes for JavaScript expressions in attributes"),t(),e(31,"li"),n(32,"Avoid deeply nested JSX (extract to components)"),t()()(),e(33,"pre")(34,"code",10),n(35),t()()()),i&2){let a=o();r(35),s(a.jsxBestPractices)}}var T=(()=>{class i{constructor(){this.jsxBasics=`// JSX is a syntax extension for JavaScript
// It allows you to write HTML-like code in JavaScript

function Welcome() {
  return <h1>Hello, World!</h1>;
}

// JSX with expressions
function Greeting() {
  const name = 'React Developer';
  return <h1>Hello, {name}!</h1>;
}

// JSX with attributes
function Image() {
  const imageUrl = 'https://example.com/image.jpg';
  return <img src={imageUrl} alt="Description" />;
}

// JSX must return a single parent element
function App() {
  return (
    <div>
      <h1>Title</h1>
      <p>Paragraph</p>
    </div>
  );
}`,this.jsxFragments=`// Using React Fragments to avoid extra DOM nodes
import { Fragment } from 'react';

// Long syntax
function List() {
  return (
    <Fragment>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </Fragment>
  );
}

// Short syntax
function ListShort() {
  return (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </>
  );
}

// Fragments with keys (for lists)
function Glossary({ items }) {
  return (
    <>
      {items.map(item => (
        <Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </Fragment>
      ))}
    </>
  );
}`,this.jsxExpressions=`// JavaScript expressions in JSX
function Calculator() {
  const a = 10;
  const b = 20;
  
  return (
    <div>
      <p>Sum: {a + b}</p>
      <p>Product: {a * b}</p>
      <p>Uppercase: {'hello'.toUpperCase()}</p>
    </div>
  );
}

// Conditional rendering
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please sign in.</h1>
      )}
    </div>
  );
}

// Logical && operator
function Mailbox({ unreadMessages }) {
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}`,this.jsxAttributes=`// JSX attributes use camelCase
function StyledComponent() {
  const divStyle = {
    backgroundColor: 'blue',
    fontSize: '16px',
    padding: '10px'
  };

  return (
    <div
      className="container"
      style={divStyle}
      onClick={() => console.log('Clicked!')}
      data-testid="my-div"
    >
      Styled Content
    </div>
  );
}

// Common attribute differences from HTML:
// - class \u2192 className
// - for \u2192 htmlFor
// - tabindex \u2192 tabIndex
// - onclick \u2192 onClick (camelCase events)

function Form() {
  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        className="input-field"
        tabIndex={1}
      />
    </form>
  );
}`,this.jsxChildren=`// JSX children can be nested
function Card() {
  return (
    <div className="card">
      <div className="card-header">
        <h2>Card Title</h2>
      </div>
      <div className="card-body">
        <p>Card content goes here</p>
      </div>
    </div>
  );
}

// Children as props
function Container({ children }) {
  return (
    <div className="container">
      {children}
    </div>
  );
}

function App() {
  return (
    <Container>
      <h1>Title</h1>
      <p>Content</p>
    </Container>
  );
}

// Mapping over arrays
function List({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}`,this.jsxBestPractices=`// 1. Always use keys for list items
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

// 2. Keep JSX readable with proper formatting
function Profile({ user }) {
  return (
    <div className="profile">
      <img 
        src={user.avatar} 
        alt={user.name}
        className="avatar"
      />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>
  );
}

// 3. Extract complex JSX into separate components
function UserCard({ user }) {
  const renderAvatar = () => (
    <img src={user.avatar} alt={user.name} />
  );

  const renderInfo = () => (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );

  return (
    <div className="user-card">
      {renderAvatar()}
      {renderInfo()}
    </div>
  );
}

// 4. Use meaningful component names
function ProductPrice({ price, currency = 'USD' }) {
  return <span>{currency} {price.toFixed(2)}</span>;
}`}ngAfterViewChecked(){f.highlightAll()}static{this.\u0275fac=function(d){return new(d||i)}}static{this.\u0275cmp=c({type:i,selectors:[["app-react-jsx"]],standalone:!0,features:[p],decls:18,vars:0,consts:[[1,"container"],["label","JSX Basics"],["matTabContent",""],["label","Fragments"],["label","Expressions"],["label","Attributes"],["label","Children"],["label","Best Practices"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],[1,"info-box","success"],[1,"info-box","warning"]],template:function(d,M){d&1&&(e(0,"div",0)(1,"h1"),n(2,"JSX - JavaScript XML"),t(),e(3,"p"),n(4,"JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write UI components in a more intuitive way by mixing HTML-like syntax with JavaScript logic."),t(),e(5,"mat-tab-group")(6,"mat-tab",1),l(7,b,20,1,"ng-template",2),t(),e(8,"mat-tab",3),l(9,E,20,1,"ng-template",2),t(),e(10,"mat-tab",4),l(11,C,20,1,"ng-template",2),t(),e(12,"mat-tab",5),l(13,y,38,1,"ng-template",2),t(),e(14,"mat-tab",6),l(15,J,20,1,"ng-template",2),t(),e(16,"mat-tab",7),l(17,_,36,1,"ng-template",2),t()()())},dependencies:[S,x,u,g],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return i})();export{T as ReactJsxComponent};
