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

// src/app/components/react/react-jsx/react-jsx.component.ts
var ReactJsxComponent = class _ReactJsxComponent {
  constructor() {
    this.jsxBasics = `// JSX is a syntax extension for JavaScript
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
}`;
    this.jsxFragments = `// Using React Fragments to avoid extra DOM nodes
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
}`;
    this.jsxExpressions = `// JavaScript expressions in JSX
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
}`;
    this.jsxAttributes = `// JSX attributes use camelCase
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
}`;
    this.jsxChildren = `// JSX children can be nested
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
}`;
    this.jsxBestPractices = `// 1. Always use keys for list items
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
}`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function ReactJsxComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReactJsxComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReactJsxComponent, selectors: [["app-react-jsx"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 166, vars: 6, consts: [[1, "container"], ["label", "JSX Basics"], [1, "tab-content"], [1, "info-box"], [1, "language-jsx"], ["label", "Fragments"], ["label", "Expressions"], ["label", "Attributes"], ["label", "Children"], ["label", "Best Practices"], [1, "info-box", "success"], [1, "info-box", "warning"]], template: function ReactJsxComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "JSX - JavaScript XML");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write UI components in a more intuitive way by mixing HTML-like syntax with JavaScript logic.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "What is JSX?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "JSX");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " stands for JavaScript XML. It's a syntax extension that allows you to write HTML-like code in JavaScript files. JSX gets compiled to regular JavaScript function calls.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, 'JSX produces React "elements"');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "It's not required but makes code more readable");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li");
        \u0275\u0275text(21, "You can embed JavaScript expressions using curly braces");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275text(23, "JSX is closer to JavaScript than HTML");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "pre")(25, "code", 4);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "mat-tab", 5)(28, "div", 2)(29, "h2");
        \u0275\u0275text(30, "React Fragments");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 3)(32, "p")(33, "strong");
        \u0275\u0275text(34, "Fragments");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " let you group multiple children without adding extra nodes to the DOM.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "ul")(37, "li");
        \u0275\u0275text(38, "Use <Fragment> or short syntax <>");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "li");
        \u0275\u0275text(40, "Helps maintain clean DOM structure");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "li");
        \u0275\u0275text(42, "Can have keys when rendering lists");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li");
        \u0275\u0275text(44, "No extra wrapper div in the DOM");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "pre")(46, "code", 4);
        \u0275\u0275text(47);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(48, "mat-tab", 6)(49, "div", 2)(50, "h2");
        \u0275\u0275text(51, "JavaScript Expressions in JSX");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 3)(53, "p");
        \u0275\u0275text(54, "You can embed any JavaScript expression in JSX by wrapping it in curly braces.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "ul")(56, "li");
        \u0275\u0275text(57, "Arithmetic operations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "li");
        \u0275\u0275text(59, "Function calls");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "li");
        \u0275\u0275text(61, "Ternary operators for conditional rendering");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "li");
        \u0275\u0275text(63, "Logical && for conditional display");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "li");
        \u0275\u0275text(65, "Array methods like map, filter");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(66, "pre")(67, "code", 4);
        \u0275\u0275text(68);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(69, "mat-tab", 7)(70, "div", 2)(71, "h2");
        \u0275\u0275text(72, "JSX Attributes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 3)(74, "p");
        \u0275\u0275text(75, "JSX uses ");
        \u0275\u0275elementStart(76, "strong");
        \u0275\u0275text(77, "camelCase");
        \u0275\u0275elementEnd();
        \u0275\u0275text(78, " for attributes and some have different names than HTML.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "ul")(80, "li")(81, "code");
        \u0275\u0275text(82, "class");
        \u0275\u0275elementEnd();
        \u0275\u0275text(83, " \u2192 ");
        \u0275\u0275elementStart(84, "code");
        \u0275\u0275text(85, "className");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "li")(87, "code");
        \u0275\u0275text(88, "for");
        \u0275\u0275elementEnd();
        \u0275\u0275text(89, " \u2192 ");
        \u0275\u0275elementStart(90, "code");
        \u0275\u0275text(91, "htmlFor");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "li");
        \u0275\u0275text(93, "Event handlers use camelCase: ");
        \u0275\u0275elementStart(94, "code");
        \u0275\u0275text(95, "onClick");
        \u0275\u0275elementEnd();
        \u0275\u0275text(96, ", ");
        \u0275\u0275elementStart(97, "code");
        \u0275\u0275text(98, "onChange");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(99, "li");
        \u0275\u0275text(100, "Style attribute accepts a JavaScript object");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "li");
        \u0275\u0275text(102, "Custom data attributes: ");
        \u0275\u0275elementStart(103, "code");
        \u0275\u0275text(104, "data-*");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(105, "pre")(106, "code", 4);
        \u0275\u0275text(107);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(108, "mat-tab", 8)(109, "div", 2)(110, "h2");
        \u0275\u0275text(111, "JSX Children");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "div", 3)(113, "p");
        \u0275\u0275text(114, "JSX elements can contain children - other elements, text, or expressions.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "ul")(116, "li");
        \u0275\u0275text(117, "Children can be nested JSX elements");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "li");
        \u0275\u0275text(119, "String literals as children");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "li");
        \u0275\u0275text(121, "JavaScript expressions as children");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "li");
        \u0275\u0275text(123, "Arrays of elements (with keys)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "li");
        \u0275\u0275text(125, "Children as props for composition");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(126, "pre")(127, "code", 4);
        \u0275\u0275text(128);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(129, "mat-tab", 9)(130, "div", 2)(131, "h2");
        \u0275\u0275text(132, "JSX Best Practices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "div", 10)(134, "h3");
        \u0275\u0275text(135, "\u2713 Do's");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "ul")(137, "li");
        \u0275\u0275text(138, "Always provide keys when rendering lists");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "li");
        \u0275\u0275text(140, "Keep JSX readable with proper indentation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "li");
        \u0275\u0275text(142, "Extract complex JSX into separate components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "li");
        \u0275\u0275text(144, "Use meaningful component and variable names");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "li");
        \u0275\u0275text(146, "Wrap multi-line JSX in parentheses");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "li");
        \u0275\u0275text(148, "Use fragments to avoid extra wrapper divs");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(149, "div", 11)(150, "h3");
        \u0275\u0275text(151, "\u2717 Don'ts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "ul")(153, "li");
        \u0275\u0275text(154, "Don't use index as key unless absolutely necessary");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "li");
        \u0275\u0275text(156, "Don't create components inside render methods");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "li");
        \u0275\u0275text(158, "Don't forget to close self-closing tags");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(159, "li");
        \u0275\u0275text(160, "Don't use quotes for JavaScript expressions in attributes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(161, "li");
        \u0275\u0275text(162, "Avoid deeply nested JSX (extract to components)");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(163, "pre")(164, "code", 4);
        \u0275\u0275text(165);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(26);
        \u0275\u0275textInterpolate(ctx.jsxBasics);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.jsxFragments);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.jsxExpressions);
        \u0275\u0275advance(39);
        \u0275\u0275textInterpolate(ctx.jsxAttributes);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.jsxChildren);
        \u0275\u0275advance(37);
        \u0275\u0275textInterpolate(ctx.jsxBestPractices);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #61dafb;\n  margin-bottom: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #282c34;\n  margin-top: 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  padding: 15px;\n  margin: 15px 0;\n  border-radius: 4px;\n}\n.info-box.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-left-color: #4caf50;\n}\n.info-box.warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #ff9800;\n}\n.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1976d2;\n}\n.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding-left: 20px;\n}\n.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05);\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\npre[_ngcontent-%COMP%] {\n  background: #282c34;\n  border-radius: 4px;\n  overflow-x: auto;\n  margin: 15px 0;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #abb2bf;\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n  font-size: 14px;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=react-jsx.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReactJsxComponent, { className: "ReactJsxComponent", filePath: "src\\app\\components\\react\\react-jsx\\react-jsx.component.ts", lineNumber: 13 });
})();
export {
  ReactJsxComponent
};
//# sourceMappingURL=chunk-SY6NNUKJ.js.map
