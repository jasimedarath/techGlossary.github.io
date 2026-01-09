import{b as c,c as p,d as m}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as o,da as s,gb as n,hb as e,tb as t,ub as r,yb as d}from"./chunk-WGQ2ELTG.js";var v=(()=>{class a{constructor(){this.higherOrderComponents=`// Higher-Order Components (HOC)
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

const UserListWithLoading = withLoading(UserList);`,this.renderProps=`// Render Props Pattern
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
}`,this.portals=`// Portals - Render children outside parent DOM hierarchy
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

// HTML: <div id="root"></div><div id="modal-root"></div>`,this.errorBoundaries=`// Error Boundaries - Catch JavaScript errors in component tree
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
</ErrorBoundary>`,this.refs=`// Refs - Access DOM elements or store mutable values
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
}`,this.compoundComponents=`// Compound Components Pattern
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
</Select>`}ngAfterViewChecked(){typeof Prism<"u"&&Prism.highlightAll()}static{this.\u0275fac=function(l){return new(l||a)}}static{this.\u0275cmp=s({type:a,selectors:[["app-react-advanced"]],standalone:!0,features:[d],decls:132,vars:6,consts:[[1,"container"],["label","Higher-Order Components"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],["label","Render Props"],["label","Portals"],["label","Error Boundaries"],["label","Refs"],["label","Compound Components"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"h1"),t(2,"Advanced React Patterns"),e(),n(3,"p"),t(4,"Learn advanced React patterns and techniques for building scalable, maintainable applications."),e(),n(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),t(9,"Higher-Order Components (HOC)"),e(),n(10,"div",3)(11,"p")(12,"strong"),t(13,"HOCs"),e(),t(14," are functions that take a component and return a new enhanced component."),e(),n(15,"ul")(16,"li"),t(17,"Reuse component logic"),e(),n(18,"li"),t(19,"Add props or behavior"),e(),n(20,"li"),t(21,"Abstract common patterns"),e(),n(22,"li"),t(23,"Legacy pattern (hooks are preferred now)"),e()()(),n(24,"pre")(25,"code",4),t(26),e()()()(),n(27,"mat-tab",5)(28,"div",2)(29,"h2"),t(30,"Render Props Pattern"),e(),n(31,"div",3)(32,"p")(33,"strong"),t(34,"Render Props"),e(),t(35," use a function prop to share code between components."),e(),n(36,"ul")(37,"li"),t(38,"Component receives function as prop"),e(),n(39,"li"),t(40,"Function returns React elements"),e(),n(41,"li"),t(42,"Share stateful logic"),e(),n(43,"li"),t(44,"Custom hooks are modern alternative"),e()()(),n(45,"pre")(46,"code",4),t(47),e()()()(),n(48,"mat-tab",6)(49,"div",2)(50,"h2"),t(51,"React Portals"),e(),n(52,"div",3)(53,"p")(54,"strong"),t(55,"Portals"),e(),t(56," render children into a DOM node outside the parent component hierarchy."),e(),n(57,"ul")(58,"li"),t(59,"Render modals, tooltips, dropdowns"),e(),n(60,"li"),t(61,"Break out of parent container"),e(),n(62,"li"),t(63,"Maintain React tree behavior"),e(),n(64,"li"),t(65,"Events bubble up React tree"),e()()(),n(66,"pre")(67,"code",4),t(68),e()()()(),n(69,"mat-tab",7)(70,"div",2)(71,"h2"),t(72,"Error Boundaries"),e(),n(73,"div",3)(74,"p")(75,"strong"),t(76,"Error Boundaries"),e(),t(77," catch JavaScript errors in component tree and display fallback UI."),e(),n(78,"ul")(79,"li"),t(80,"Only available as class components"),e(),n(81,"li"),t(82,"Catch errors during render"),e(),n(83,"li"),t(84,"Display fallback UI"),e(),n(85,"li"),t(86,"Log errors for debugging"),e()()(),n(87,"pre")(88,"code",4),t(89),e()()()(),n(90,"mat-tab",8)(91,"div",2)(92,"h2"),t(93,"Refs & Forward Refs"),e(),n(94,"div",3)(95,"p")(96,"strong"),t(97,"Refs"),e(),t(98," provide access to DOM elements and store mutable values without causing re-renders."),e(),n(99,"ul")(100,"li"),t(101,"Access DOM elements directly"),e(),n(102,"li"),t(103,"Store mutable values"),e(),n(104,"li"),t(105,"Forward refs to child components"),e(),n(106,"li"),t(107,"Doesn't trigger re-renders"),e()()(),n(108,"pre")(109,"code",4),t(110),e()()()(),n(111,"mat-tab",9)(112,"div",2)(113,"h2"),t(114,"Compound Components Pattern"),e(),n(115,"div",3)(116,"p")(117,"strong"),t(118,"Compound Components"),e(),t(119," are components that work together to form a complete UI."),e(),n(120,"ul")(121,"li"),t(122,"Share implicit state"),e(),n(123,"li"),t(124,"Flexible API"),e(),n(125,"li"),t(126,"Encapsulate complex behavior"),e(),n(127,"li"),t(128,"Used in UI libraries (Tabs, Select, Accordion)"),e()()(),n(129,"pre")(130,"code",4),t(131),e()()()()()()),l&2&&(o(26),r(i.higherOrderComponents),o(21),r(i.renderProps),o(21),r(i.portals),o(21),r(i.errorBoundaries),o(21),r(i.refs),o(21),r(i.compoundComponents))},dependencies:[m,c,p],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#abb2bf;font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return a})();export{v as ReactAdvancedComponent};
