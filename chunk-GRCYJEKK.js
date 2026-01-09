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

// src/app/components/react/react-advanced/react-advanced.component.ts
var ReactAdvancedComponent = class _ReactAdvancedComponent {
  constructor() {
    this.higherOrderComponents = `// Higher-Order Components (HOC)
// A function that takes a component and returns a new component

function withAuth(WrappedComponent) {
  return function AuthComponent(props) {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };
}

// Usage
const ProtectedDashboard = withAuth(Dashboard);

// HOC with additional props
function withLoading(WrappedComponent) {
  return function LoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <Spinner />;
    }
    return <WrappedComponent {...props} />;
  };
}

const UserListWithLoading = withLoading(UserList);`;
    this.renderProps = `// Render Props Pattern
// A component with a function prop that returns React elements

class Mouse extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

// Usage
<Mouse render=({ x, y }) => (
  <h1>Mouse position: {x}, {y}</h1>
)}/>

// Modern alternative: Custom Hook
function useMouse() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return position;
}

// Usage
function App() {
  const { x, y } = useMouse();
  return <h1>Mouse: {x}, {y}</h1>;
}`;
    this.portals = `// Portals - Render children outside parent DOM hierarchy
import ReactDOM from 'react-dom';

function Modal({ children, isOpen }) {
  if (!isOpen) return null;

  // Renders into #modal-root instead of parent component
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

// Usage
function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>
        Open Modal
      </button>
      <Modal isOpen={showModal}>
        <h2>Modal Title</h2>
        <p>Modal content</p>
        <button onClick={() => setShowModal(false)}>
          Close
        </button>
      </Modal>
    </div>
  );
}

// HTML: <div id="root"></div><div id="modal-root"></div>`;
    this.errorBoundaries = `// Error Boundaries - Catch JavaScript errors in component tree
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
    // Log to error reporting service
    logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>`;
    this.refs = `// Refs - Access DOM elements or store mutable values
import React, { useRef, useEffect } from 'react';

// 1. Accessing DOM elements
function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

// 2. Storing mutable values (doesn't cause re-render)
function Timer() {
  const intervalRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return <div>Count: {count}</div>;
}

// 3. Forward Refs
const FancyInput = React.forwardRef((props, ref) => {
  return <input ref={ref} className="fancy" />;
});

// Usage
function Parent() {
  const inputRef = useRef();
  
  return (
    <div>
      <FancyInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        Focus
      </button>
    </div>
  );
}`;
    this.compoundComponents = `// Compound Components Pattern
// Components that work together to form a complete UI

const Select = ({ children, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="select">
      <button onClick={() => setIsOpen(!isOpen)}>
        {value || 'Select...'}
      </button>
      {isOpen && (
        <div className="options">
          {React.Children.map(children, child =>
            React.cloneElement(child, {
              onClick: () => {
                onChange(child.props.value);
                setIsOpen(false);
              }
            })
          )}
        </div>
      )}
    </div>
  );
};

Select.Option = ({ children, value, onClick }) => (
  <div className="option" onClick={onClick}>
    {children}
  </div>
);

// Usage
<Select value={selected} onChange={setSelected}>
  <Select.Option value="react">React</Select.Option>
  <Select.Option value="vue">Vue</Select.Option>
  <Select.Option value="angular">Angular</Select.Option>
</Select>`;
  }
  ngAfterViewChecked() {
    if (typeof Prism !== "undefined") {
      Prism.highlightAll();
    }
  }
  static {
    this.\u0275fac = function ReactAdvancedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReactAdvancedComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReactAdvancedComponent, selectors: [["app-react-advanced"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 132, vars: 6, consts: [[1, "container"], ["label", "Higher-Order Components"], [1, "tab-content"], [1, "info-box"], [1, "language-jsx"], ["label", "Render Props"], ["label", "Portals"], ["label", "Error Boundaries"], ["label", "Refs"], ["label", "Compound Components"]], template: function ReactAdvancedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Advanced React Patterns");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Learn advanced React patterns and techniques for building scalable, maintainable applications.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "Higher-Order Components (HOC)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "HOCs");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " are functions that take a component and return a new enhanced component.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "Reuse component logic");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "Add props or behavior");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li");
        \u0275\u0275text(21, "Abstract common patterns");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275text(23, "Legacy pattern (hooks are preferred now)");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "pre")(25, "code", 4);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "mat-tab", 5)(28, "div", 2)(29, "h2");
        \u0275\u0275text(30, "Render Props Pattern");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 3)(32, "p")(33, "strong");
        \u0275\u0275text(34, "Render Props");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " use a function prop to share code between components.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "ul")(37, "li");
        \u0275\u0275text(38, "Component receives function as prop");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "li");
        \u0275\u0275text(40, "Function returns React elements");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "li");
        \u0275\u0275text(42, "Share stateful logic");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li");
        \u0275\u0275text(44, "Custom hooks are modern alternative");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "pre")(46, "code", 4);
        \u0275\u0275text(47);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(48, "mat-tab", 6)(49, "div", 2)(50, "h2");
        \u0275\u0275text(51, "React Portals");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 3)(53, "p")(54, "strong");
        \u0275\u0275text(55, "Portals");
        \u0275\u0275elementEnd();
        \u0275\u0275text(56, " render children into a DOM node outside the parent component hierarchy.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "ul")(58, "li");
        \u0275\u0275text(59, "Render modals, tooltips, dropdowns");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "li");
        \u0275\u0275text(61, "Break out of parent container");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "li");
        \u0275\u0275text(63, "Maintain React tree behavior");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "li");
        \u0275\u0275text(65, "Events bubble up React tree");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(66, "pre")(67, "code", 4);
        \u0275\u0275text(68);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(69, "mat-tab", 7)(70, "div", 2)(71, "h2");
        \u0275\u0275text(72, "Error Boundaries");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 3)(74, "p")(75, "strong");
        \u0275\u0275text(76, "Error Boundaries");
        \u0275\u0275elementEnd();
        \u0275\u0275text(77, " catch JavaScript errors in component tree and display fallback UI.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "ul")(79, "li");
        \u0275\u0275text(80, "Only available as class components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "li");
        \u0275\u0275text(82, "Catch errors during render");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "li");
        \u0275\u0275text(84, "Display fallback UI");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "li");
        \u0275\u0275text(86, "Log errors for debugging");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(87, "pre")(88, "code", 4);
        \u0275\u0275text(89);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(90, "mat-tab", 8)(91, "div", 2)(92, "h2");
        \u0275\u0275text(93, "Refs & Forward Refs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "div", 3)(95, "p")(96, "strong");
        \u0275\u0275text(97, "Refs");
        \u0275\u0275elementEnd();
        \u0275\u0275text(98, " provide access to DOM elements and store mutable values without causing re-renders.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "ul")(100, "li");
        \u0275\u0275text(101, "Access DOM elements directly");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "li");
        \u0275\u0275text(103, "Store mutable values");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "li");
        \u0275\u0275text(105, "Forward refs to child components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "li");
        \u0275\u0275text(107, "Doesn't trigger re-renders");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(108, "pre")(109, "code", 4);
        \u0275\u0275text(110);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(111, "mat-tab", 9)(112, "div", 2)(113, "h2");
        \u0275\u0275text(114, "Compound Components Pattern");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "div", 3)(116, "p")(117, "strong");
        \u0275\u0275text(118, "Compound Components");
        \u0275\u0275elementEnd();
        \u0275\u0275text(119, " are components that work together to form a complete UI.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "ul")(121, "li");
        \u0275\u0275text(122, "Share implicit state");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "li");
        \u0275\u0275text(124, "Flexible API");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "li");
        \u0275\u0275text(126, "Encapsulate complex behavior");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "li");
        \u0275\u0275text(128, "Used in UI libraries (Tabs, Select, Accordion)");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(129, "pre")(130, "code", 4);
        \u0275\u0275text(131);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(26);
        \u0275\u0275textInterpolate(ctx.higherOrderComponents);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.renderProps);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.portals);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.errorBoundaries);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.refs);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.compoundComponents);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #61dafb;\n  margin-bottom: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #282c34;\n  margin-top: 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  padding: 15px;\n  margin: 15px 0;\n  border-radius: 4px;\n}\n.info-box.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-left-color: #4caf50;\n}\n.info-box.warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #ff9800;\n}\n.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1976d2;\n}\n.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding-left: 20px;\n}\n.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05);\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\npre[_ngcontent-%COMP%] {\n  background: #282c34;\n  border-radius: 4px;\n  overflow-x: auto;\n  margin: 15px 0;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #abb2bf;\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n  font-size: 14px;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=react-advanced.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReactAdvancedComponent, { className: "ReactAdvancedComponent", filePath: "src\\app\\components\\react\\react-advanced\\react-advanced.component.ts", lineNumber: 13 });
})();
export {
  ReactAdvancedComponent
};
//# sourceMappingURL=chunk-GRCYJEKK.js.map
