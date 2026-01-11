import"./chunk-4ITEIGFF.js";import"./chunk-WCULWZKC.js";import{a as C}from"./chunk-FSUYFWSG.js";import{a as f,b as x,c as h,d as g}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as r,Xa as a,da as p,e as v,gb as t,hb as e,lb as l,tb as n,ub as s,yb as u}from"./chunk-WGQ2ELTG.js";var m=v(C());function S(o,d){if(o&1&&(t(0,"div",8)(1,"h2"),n(2,"Higher-Order Components (HOC)"),e(),t(3,"div",9)(4,"p")(5,"strong"),n(6,"HOCs"),e(),n(7," are functions that take a component and return a new enhanced component."),e(),t(8,"ul")(9,"li"),n(10,"Reuse component logic"),e(),t(11,"li"),n(12,"Add props or behavior"),e(),t(13,"li"),n(14,"Abstract common patterns"),e(),t(15,"li"),n(16,"Legacy pattern (hooks are preferred now)"),e()()(),t(17,"pre")(18,"code",10),n(19),e()()()),o&2){let i=l();r(19),s(i.higherOrderComponents)}}function b(o,d){if(o&1&&(t(0,"div",8)(1,"h2"),n(2,"Render Props Pattern"),e(),t(3,"div",9)(4,"p")(5,"strong"),n(6,"Render Props"),e(),n(7," use a function prop to share code between components."),e(),t(8,"ul")(9,"li"),n(10,"Component receives function as prop"),e(),t(11,"li"),n(12,"Function returns React elements"),e(),t(13,"li"),n(14,"Share stateful logic"),e(),t(15,"li"),n(16,"Custom hooks are modern alternative"),e()()(),t(17,"pre")(18,"code",10),n(19),e()()()),o&2){let i=l();r(19),s(i.renderProps)}}function E(o,d){if(o&1&&(t(0,"div",8)(1,"h2"),n(2,"React Portals"),e(),t(3,"div",9)(4,"p")(5,"strong"),n(6,"Portals"),e(),n(7," render children into a DOM node outside the parent component hierarchy."),e(),t(8,"ul")(9,"li"),n(10,"Render modals, tooltips, dropdowns"),e(),t(11,"li"),n(12,"Break out of parent container"),e(),t(13,"li"),n(14,"Maintain React tree behavior"),e(),t(15,"li"),n(16,"Events bubble up React tree"),e()()(),t(17,"pre")(18,"code",10),n(19),e()()()),o&2){let i=l();r(19),s(i.portals)}}function M(o,d){if(o&1&&(t(0,"div",8)(1,"h2"),n(2,"Error Boundaries"),e(),t(3,"div",9)(4,"p")(5,"strong"),n(6,"Error Boundaries"),e(),n(7," catch JavaScript errors in component tree and display fallback UI."),e(),t(8,"ul")(9,"li"),n(10,"Only available as class components"),e(),t(11,"li"),n(12,"Catch errors during render"),e(),t(13,"li"),n(14,"Display fallback UI"),e(),t(15,"li"),n(16,"Log errors for debugging"),e()()(),t(17,"pre")(18,"code",10),n(19),e()()()),o&2){let i=l();r(19),s(i.errorBoundaries)}}function O(o,d){if(o&1&&(t(0,"div",8)(1,"h2"),n(2,"Refs & Forward Refs"),e(),t(3,"div",9)(4,"p")(5,"strong"),n(6,"Refs"),e(),n(7," provide access to DOM elements and store mutable values without causing re-renders."),e(),t(8,"ul")(9,"li"),n(10,"Access DOM elements directly"),e(),t(11,"li"),n(12,"Store mutable values"),e(),t(13,"li"),n(14,"Forward refs to child components"),e(),t(15,"li"),n(16,"Doesn't trigger re-renders"),e()()(),t(17,"pre")(18,"code",10),n(19),e()()()),o&2){let i=l();r(19),s(i.refs)}}function R(o,d){if(o&1&&(t(0,"div",8)(1,"h2"),n(2,"Compound Components Pattern"),e(),t(3,"div",9)(4,"p")(5,"strong"),n(6,"Compound Components"),e(),n(7," are components that work together to form a complete UI."),e(),t(8,"ul")(9,"li"),n(10,"Share implicit state"),e(),t(11,"li"),n(12,"Flexible API"),e(),t(13,"li"),n(14,"Encapsulate complex behavior"),e(),t(15,"li"),n(16,"Used in UI libraries (Tabs, Select, Accordion)"),e()()(),t(17,"pre")(18,"code",10),n(19),e()()()),o&2){let i=l();r(19),s(i.compoundComponents)}}var I=(()=>{class o{constructor(){this.higherOrderComponents=`// Higher-Order Components (HOC)
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
</Select>`}ngAfterViewChecked(){typeof m<"u"&&m.highlightAll()}static{this.\u0275fac=function(c){return new(c||o)}}static{this.\u0275cmp=p({type:o,selectors:[["app-react-advanced"]],standalone:!0,features:[u],decls:18,vars:0,consts:[[1,"container"],["label","Higher-Order Components"],["matTabContent",""],["label","Render Props"],["label","Portals"],["label","Error Boundaries"],["label","Refs"],["label","Compound Components"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"]],template:function(c,_){c&1&&(t(0,"div",0)(1,"h1"),n(2,"Advanced React Patterns"),e(),t(3,"p"),n(4,"Learn advanced React patterns and techniques for building scalable, maintainable applications."),e(),t(5,"mat-tab-group")(6,"mat-tab",1),a(7,S,20,1,"ng-template",2),e(),t(8,"mat-tab",3),a(9,b,20,1,"ng-template",2),e(),t(10,"mat-tab",4),a(11,E,20,1,"ng-template",2),e(),t(12,"mat-tab",5),a(13,M,20,1,"ng-template",2),e(),t(14,"mat-tab",6),a(15,O,20,1,"ng-template",2),e(),t(16,"mat-tab",7),a(17,R,20,1,"ng-template",2),e()()())},dependencies:[g,f,x,h],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return o})();export{I as ReactAdvancedComponent};
