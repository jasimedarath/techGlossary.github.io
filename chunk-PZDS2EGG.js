import"./chunk-4ITEIGFF.js";import"./chunk-WCULWZKC.js";import{a as f}from"./chunk-VDRUEQXK.js";import{a as p,b as v,c as g,d as h}from"./chunk-GNZ74KMC.js";import"./chunk-XAZLOLJU.js";import"./chunk-SZTU5CXE.js";import{Ia as l,Ya as a,da as d,e as x,hb as n,ib as e,mb as r,ub as t,vb as s,zb as u}from"./chunk-KMNIY7WT.js";var C=x(f());function E(i,c){if(i&1&&(n(0,"div",9)(1,"h2"),t(2,"Basic Event Handling"),e(),n(3,"div",10)(4,"p"),t(5,"React event handlers are written in "),n(6,"strong"),t(7,"camelCase"),e(),t(8," and passed as functions, not strings."),e(),n(9,"ul")(10,"li"),t(11,"onClick, onChange, onSubmit (camelCase)"),e(),n(12,"li"),t(13,"Pass function reference, not function call"),e(),n(14,"li"),t(15,"Can define handlers inline or separately"),e(),n(16,"li"),t(17,"Use arrow functions to pass parameters"),e(),n(18,"li"),t(19,"Event handlers receive synthetic event object"),e()()(),n(20,"pre")(21,"code",11),t(22),e()()()),i&2){let o=r();l(22),s(o.eventBasics)}}function b(i,c){if(i&1&&(n(0,"div",9)(1,"h2"),t(2,"Synthetic Events"),e(),n(3,"div",10)(4,"p")(5,"strong"),t(6,"Synthetic events"),e(),t(7," are React's cross-browser wrapper around native browser events."),e(),n(8,"ul")(9,"li"),t(10,"Same interface as native events"),e(),n(11,"li"),t(12,"Works consistently across all browsers"),e(),n(13,"li"),t(14,"Access native event via e.nativeEvent"),e(),n(15,"li"),t(16,"No longer pooled in React 17+"),e(),n(17,"li"),t(18,"Can be used asynchronously"),e()()(),n(19,"pre")(20,"code",11),t(21),e()()()),i&2){let o=r();l(21),s(o.syntheticEvents)}}function k(i,c){if(i&1&&(n(0,"div",9)(1,"h2"),t(2,"Form Events"),e(),n(3,"div",10)(4,"p"),t(5,"Common form events: onChange, onSubmit, onFocus, onBlur."),e(),n(6,"ul")(7,"li")(8,"strong"),t(9,"onChange:"),e(),t(10," Fires on every input change"),e(),n(11,"li")(12,"strong"),t(13,"onSubmit:"),e(),t(14," Fires on form submission"),e(),n(15,"li")(16,"strong"),t(17,"onFocus:"),e(),t(18," Element gains focus"),e(),n(19,"li")(20,"strong"),t(21,"onBlur:"),e(),t(22," Element loses focus"),e(),n(23,"li"),t(24,"Use e.preventDefault() to prevent default behavior"),e()()(),n(25,"pre")(26,"code",11),t(27),e()()()),i&2){let o=r();l(27),s(o.formEvents)}}function S(i,c){if(i&1&&(n(0,"div",9)(1,"h2"),t(2,"Mouse and Keyboard Events"),e(),n(3,"div",10)(4,"p"),t(5,"Handle mouse movements, clicks, and keyboard input."),e(),n(6,"ul")(7,"li")(8,"strong"),t(9,"Mouse:"),e(),t(10," onClick, onDoubleClick, onMouseMove, onMouseEnter, onMouseLeave"),e(),n(11,"li")(12,"strong"),t(13,"Keyboard:"),e(),t(14," onKeyDown, onKeyUp, onKeyPress (deprecated)"),e(),n(15,"li"),t(16,"Access key info: e.key, e.code, e.keyCode"),e(),n(17,"li"),t(18,"Check modifiers: e.ctrlKey, e.shiftKey, e.altKey"),e(),n(19,"li"),t(20,"Get mouse position: e.clientX, e.clientY"),e()()(),n(21,"pre")(22,"code",11),t(23),e()()()),i&2){let o=r();l(23),s(o.mouseKeyboardEvents)}}function y(i,c){if(i&1&&(n(0,"div",9)(1,"h2"),t(2,"Event Bubbling and Propagation"),e(),n(3,"div",12)(4,"p"),t(5,"Events bubble up from child to parent elements by default."),e(),n(6,"ul")(7,"li"),t(8,"Events bubble up the DOM tree"),e(),n(9,"li"),t(10,"Use e.stopPropagation() to stop bubbling"),e(),n(11,"li"),t(12,"e.preventDefault() prevents default browser behavior"),e(),n(13,"li"),t(14,"Can handle at parent level (event delegation)"),e(),n(15,"li"),t(16,"Capture phase available with onClickCapture"),e()()(),n(17,"pre")(18,"code",11),t(19),e()()()),i&2){let o=r();l(19),s(o.eventPropagation)}}function P(i,c){if(i&1&&(n(0,"div",9)(1,"h2"),t(2,"Custom Event Handlers"),e(),n(3,"div",10)(4,"p"),t(5,"Create custom event handlers and pass custom data to parent components."),e(),n(6,"ul")(7,"li"),t(8,"Define custom callback props"),e(),n(9,"li"),t(10,"Process events and pass custom data"),e(),n(11,"li"),t(12,"Use for component communication"),e(),n(13,"li"),t(14,"Debounce frequent events for performance"),e(),n(15,"li"),t(16,"Throttle events like scroll or resize"),e()()(),n(17,"pre")(18,"code",11),t(19),e()()()),i&2){let o=r();l(19),s(o.customEvents)}}function M(i,c){if(i&1&&(n(0,"div",9)(1,"h2"),t(2,"Event Handling Best Practices"),e(),n(3,"div",13)(4,"h3"),t(5,"\u2713 Best Practices"),e(),n(6,"ul")(7,"li"),t(8,"Use arrow functions or bind 'this' in class components"),e(),n(9,"li"),t(10,"Avoid creating functions in render (use useCallback)"),e(),n(11,"li"),t(12,"Use e.preventDefault() to prevent default actions"),e(),n(13,"li"),t(14,"Use e.stopPropagation() carefully"),e(),n(15,"li"),t(16,"Debounce/throttle expensive event handlers"),e(),n(17,"li"),t(18,"Clean up event listeners in useEffect cleanup"),e(),n(19,"li"),t(20,'Name event handler props with "on" prefix'),e(),n(21,"li"),t(22,"Keep event handlers simple and focused"),e()()(),n(23,"pre")(24,"code",11),t(25),e()()()),i&2){let o=r();l(25),s(o.eventBestPractices)}}var F=(()=>{class i{constructor(){this.eventBasics=`// Basic Event Handling
function Button() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click Me</button>;
}

// Inline Event Handler
function InlineButton() {
  return (
    <button onClick={() => console.log('Clicked!')}>
      Click Me
    </button>
  );
}

// Event with Parameters
function ParameterButton() {
  const handleClick = (message) => {
    alert(message);
  };

  return (
    <button onClick={() => handleClick('Hello!')}>
      Say Hello
    </button>
  );
}

// Multiple Event Handlers
function MultiEventDiv() {
  return (
    <div
      onClick={() => console.log('Clicked')}
      onMouseEnter={() => console.log('Mouse entered')}
      onMouseLeave={() => console.log('Mouse left')}
    >
      Hover or click me
    </div>
  );
}`,this.syntheticEvents=`// Synthetic Event Object
function InputComponent() {
  const handleChange = (event) => {
    console.log('Event type:', event.type);
    console.log('Target element:', event.target);
    console.log('Value:', event.target.value);
    console.log('Native event:', event.nativeEvent);
  };

  return <input onChange={handleChange} />;
}

// Event Properties
function FormExample() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log('Form submitted');
    
    // Access form data
    const formData = new FormData(e.target);
    console.log('Data:', Object.fromEntries(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" />
      <button type="submit">Submit</button>
    </form>
  );
}

// Event Pooling (React 17+)
function EventPooling() {
  const handleClick = (e) => {
    console.log('Event:', e.type);
    
    // In React 17+, synthetic events are not pooled
    setTimeout(() => {
      console.log('Still accessible:', e.type);
    }, 1000);
  };

  return <button onClick={handleClick}>Click</button>;
}`,this.formEvents=`// Form Input Events
function FormEvents() {
  const [formData, setFormData] = useState({
    text: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (e) => {
    console.log('Input focused:', e.target.name);
  };

  const handleBlur = (e) => {
    console.log('Input blurred:', e.target.name);
  };

  return (
    <form>
      <input
        name="text"
        value={formData.text}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
    </form>
  );
}

// Select and Checkbox Events
function SelectEvents() {
  const [selected, setSelected] = useState('');
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <select value={selected} onChange={e => setSelected(e.target.value)}>
        <option value="">Choose...</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
      
      <input
        type="checkbox"
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
      />
    </div>
  );
}`,this.mouseKeyboardEvents=`// Mouse Events
function MouseEvents() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleDoubleClick = () => {
    console.log('Double clicked!');
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onDoubleClick={handleDoubleClick}
      style={{ height: '200px', border: '1px solid black' }}
    >
      Mouse position: X: {position.x}, Y: {position.y}
    </div>
  );
}

// Keyboard Events
function KeyboardEvents() {
  const [key, setKey] = useState('');

  const handleKeyDown = (e) => {
    console.log('Key:', e.key);
    console.log('Code:', e.code);
    console.log('Ctrl pressed:', e.ctrlKey);
    console.log('Shift pressed:', e.shiftKey);
    setKey(e.key);
  };

  return (
    <input
      onKeyDown={handleKeyDown}
      onKeyUp={(e) => console.log('Key released:', e.key)}
      onKeyPress={(e) => console.log('Key pressed:', e.key)}
      placeholder="Type something..."
    />
  );
}`,this.eventPropagation=`// Event Bubbling
function EventBubbling() {
  const handleParentClick = () => {
    console.log('Parent clicked');
  };

  const handleChildClick = () => {
    console.log('Child clicked');
  };

  return (
    <div onClick={handleParentClick} style={{ padding: '20px', background: 'lightblue' }}>
      Parent
      <button onClick={handleChildClick}>
        Child Button
      </button>
    </div>
  );
  // Clicking child logs: "Child clicked" then "Parent clicked"
}

// Stop Propagation
function StopPropagation() {
  const handleParentClick = () => {
    console.log('Parent clicked');
  };

  const handleChildClick = (e) => {
    e.stopPropagation(); // Stop event from bubbling
    console.log('Child clicked');
  };

  return (
    <div onClick={handleParentClick}>
      Parent
      <button onClick={handleChildClick}>
        Child Button (won't trigger parent)
      </button>
    </div>
  );
}`,this.customEvents=`// Custom Event Handler
function CustomEventButton({ onCustomClick }) {
  const handleClick = (e) => {
    // Do some processing
    const customData = {
      timestamp: Date.now(),
      position: { x: e.clientX, y: e.clientY }
    };
    
    // Call parent's callback with custom data
    onCustomClick(customData);
  };

  return <button onClick={handleClick}>Click Me</button>;
}

// Parent Component
function ParentComponent() {
  const handleCustomClick = (data) => {
    console.log('Custom event received:', data);
  };

  return <CustomEventButton onCustomClick={handleCustomClick} />;
}

// Debounced Events
function DebouncedSearch() {
  const [query, setQuery] = useState('');

  const debouncedSearch = useMemo(
    () => debounce((value) => {
      console.log('Searching for:', value);
      // Perform search
    }, 500),
    []
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  return <input value={query} onChange={handleChange} />;
}`,this.eventBestPractices=`// Best Practices for Event Handling

// 1. Use Arrow Functions or bind in constructor (class components)
class MyComponent extends React.Component {
  // Method 1: Arrow function (recommended)
  handleClick = () => {
    console.log(this.state);
  };

  // Method 2: Bind in constructor
  constructor(props) {
    super(props);
    this.handleClickBound = this.handleClickBound.bind(this);
  }

  handleClickBound() {
    console.log(this.state);
  }
}

// 2. Avoid Creating Functions in Render
function GoodExample() {
  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []);

  return <button onClick={handleClick}>Click</button>;
}

// 3. Pass Parameters Correctly
function ParameterExample({ items }) {
  const handleItemClick = (id) => {
    console.log('Item clicked:', id);
  };

  return (
    <ul>
      {items.map(item => (
        <li key={item.id} onClick={() => handleItemClick(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}

// 4. Prevent Default When Needed
function LinkHandler() {
  const handleClick = (e) => {
    e.preventDefault();
    // Custom navigation logic
  };

  return <a href="/page" onClick={handleClick}>Link</a>;
}`}ngAfterViewChecked(){C.highlightAll()}static{this.\u0275fac=function(m){return new(m||i)}}static{this.\u0275cmp=d({type:i,selectors:[["app-react-events"]],standalone:!0,features:[u],decls:20,vars:0,consts:[[1,"container"],["label","Event Basics"],["matTabContent",""],["label","Synthetic Events"],["label","Form Events"],["label","Mouse & Keyboard"],["label","Event Propagation"],["label","Custom Events"],["label","Best Practices"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],[1,"info-box","warning"],[1,"info-box","success"]],template:function(m,_){m&1&&(n(0,"div",0)(1,"h1"),t(2,"React Events"),e(),n(3,"p"),t(4,"React events are named using camelCase and you pass a function as the event handler. React uses synthetic events that wrap native browser events for better cross-browser compatibility."),e(),n(5,"mat-tab-group")(6,"mat-tab",1),a(7,E,23,1,"ng-template",2),e(),n(8,"mat-tab",3),a(9,b,22,1,"ng-template",2),e(),n(10,"mat-tab",4),a(11,k,28,1,"ng-template",2),e(),n(12,"mat-tab",5),a(13,S,24,1,"ng-template",2),e(),n(14,"mat-tab",6),a(15,y,20,1,"ng-template",2),e(),n(16,"mat-tab",7),a(17,P,20,1,"ng-template",2),e(),n(18,"mat-tab",8),a(19,M,26,1,"ng-template",2),e()()())},dependencies:[h,p,v,g],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return i})();export{F as ReactEventsComponent};
