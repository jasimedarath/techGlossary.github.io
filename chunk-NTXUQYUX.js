import{b as d,c,d as p}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as i,da as s,gb as t,hb as n,tb as e,ub as a,yb as m}from"./chunk-WGQ2ELTG.js";var f=(()=>{class l{constructor(){this.jsxBasics=`// JSX is a syntax extension for JavaScript
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
}`}ngAfterViewChecked(){Prism.highlightAll()}static{this.\u0275fac=function(o){return new(o||l)}}static{this.\u0275cmp=s({type:l,selectors:[["app-react-jsx"]],standalone:!0,features:[m],decls:166,vars:6,consts:[[1,"container"],["label","JSX Basics"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],["label","Fragments"],["label","Expressions"],["label","Attributes"],["label","Children"],["label","Best Practices"],[1,"info-box","success"],[1,"info-box","warning"]],template:function(o,r){o&1&&(t(0,"div",0)(1,"h1"),e(2,"JSX - JavaScript XML"),n(),t(3,"p"),e(4,"JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write UI components in a more intuitive way by mixing HTML-like syntax with JavaScript logic."),n(),t(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),e(9,"What is JSX?"),n(),t(10,"div",3)(11,"p")(12,"strong"),e(13,"JSX"),n(),e(14," stands for JavaScript XML. It's a syntax extension that allows you to write HTML-like code in JavaScript files. JSX gets compiled to regular JavaScript function calls."),n(),t(15,"ul")(16,"li"),e(17,'JSX produces React "elements"'),n(),t(18,"li"),e(19,"It's not required but makes code more readable"),n(),t(20,"li"),e(21,"You can embed JavaScript expressions using curly braces"),n(),t(22,"li"),e(23,"JSX is closer to JavaScript than HTML"),n()()(),t(24,"pre")(25,"code",4),e(26),n()()()(),t(27,"mat-tab",5)(28,"div",2)(29,"h2"),e(30,"React Fragments"),n(),t(31,"div",3)(32,"p")(33,"strong"),e(34,"Fragments"),n(),e(35," let you group multiple children without adding extra nodes to the DOM."),n(),t(36,"ul")(37,"li"),e(38,"Use <Fragment> or short syntax <>"),n(),t(39,"li"),e(40,"Helps maintain clean DOM structure"),n(),t(41,"li"),e(42,"Can have keys when rendering lists"),n(),t(43,"li"),e(44,"No extra wrapper div in the DOM"),n()()(),t(45,"pre")(46,"code",4),e(47),n()()()(),t(48,"mat-tab",6)(49,"div",2)(50,"h2"),e(51,"JavaScript Expressions in JSX"),n(),t(52,"div",3)(53,"p"),e(54,"You can embed any JavaScript expression in JSX by wrapping it in curly braces."),n(),t(55,"ul")(56,"li"),e(57,"Arithmetic operations"),n(),t(58,"li"),e(59,"Function calls"),n(),t(60,"li"),e(61,"Ternary operators for conditional rendering"),n(),t(62,"li"),e(63,"Logical && for conditional display"),n(),t(64,"li"),e(65,"Array methods like map, filter"),n()()(),t(66,"pre")(67,"code",4),e(68),n()()()(),t(69,"mat-tab",7)(70,"div",2)(71,"h2"),e(72,"JSX Attributes"),n(),t(73,"div",3)(74,"p"),e(75,"JSX uses "),t(76,"strong"),e(77,"camelCase"),n(),e(78," for attributes and some have different names than HTML."),n(),t(79,"ul")(80,"li")(81,"code"),e(82,"class"),n(),e(83," \u2192 "),t(84,"code"),e(85,"className"),n()(),t(86,"li")(87,"code"),e(88,"for"),n(),e(89," \u2192 "),t(90,"code"),e(91,"htmlFor"),n()(),t(92,"li"),e(93,"Event handlers use camelCase: "),t(94,"code"),e(95,"onClick"),n(),e(96,", "),t(97,"code"),e(98,"onChange"),n()(),t(99,"li"),e(100,"Style attribute accepts a JavaScript object"),n(),t(101,"li"),e(102,"Custom data attributes: "),t(103,"code"),e(104,"data-*"),n()()()(),t(105,"pre")(106,"code",4),e(107),n()()()(),t(108,"mat-tab",8)(109,"div",2)(110,"h2"),e(111,"JSX Children"),n(),t(112,"div",3)(113,"p"),e(114,"JSX elements can contain children - other elements, text, or expressions."),n(),t(115,"ul")(116,"li"),e(117,"Children can be nested JSX elements"),n(),t(118,"li"),e(119,"String literals as children"),n(),t(120,"li"),e(121,"JavaScript expressions as children"),n(),t(122,"li"),e(123,"Arrays of elements (with keys)"),n(),t(124,"li"),e(125,"Children as props for composition"),n()()(),t(126,"pre")(127,"code",4),e(128),n()()()(),t(129,"mat-tab",9)(130,"div",2)(131,"h2"),e(132,"JSX Best Practices"),n(),t(133,"div",10)(134,"h3"),e(135,"\u2713 Do's"),n(),t(136,"ul")(137,"li"),e(138,"Always provide keys when rendering lists"),n(),t(139,"li"),e(140,"Keep JSX readable with proper indentation"),n(),t(141,"li"),e(142,"Extract complex JSX into separate components"),n(),t(143,"li"),e(144,"Use meaningful component and variable names"),n(),t(145,"li"),e(146,"Wrap multi-line JSX in parentheses"),n(),t(147,"li"),e(148,"Use fragments to avoid extra wrapper divs"),n()()(),t(149,"div",11)(150,"h3"),e(151,"\u2717 Don'ts"),n(),t(152,"ul")(153,"li"),e(154,"Don't use index as key unless absolutely necessary"),n(),t(155,"li"),e(156,"Don't create components inside render methods"),n(),t(157,"li"),e(158,"Don't forget to close self-closing tags"),n(),t(159,"li"),e(160,"Don't use quotes for JavaScript expressions in attributes"),n(),t(161,"li"),e(162,"Avoid deeply nested JSX (extract to components)"),n()()(),t(163,"pre")(164,"code",4),e(165),n()()()()()()),o&2&&(i(26),a(r.jsxBasics),i(21),a(r.jsxFragments),i(21),a(r.jsxExpressions),i(39),a(r.jsxAttributes),i(21),a(r.jsxChildren),i(37),a(r.jsxBestPractices))},dependencies:[p,d,c],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#abb2bf;font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return l})();export{f as ReactJsxComponent};
