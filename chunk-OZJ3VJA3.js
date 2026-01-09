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

// src/app/components/react/react-events/react-events.component.ts
var ReactEventsComponent = class _ReactEventsComponent {
  constructor() {
    this.eventBasics = `// Basic Event Handling
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
}`;
    this.syntheticEvents = `// Synthetic Event Object
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
}`;
    this.formEvents = `// Form Input Events
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
}`;
    this.mouseKeyboardEvents = `// Mouse Events
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
}`;
    this.eventPropagation = `// Event Bubbling
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
}`;
    this.customEvents = `// Custom Event Handler
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
}`;
    this.eventBestPractices = `// Best Practices for Event Handling

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
}`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function ReactEventsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReactEventsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReactEventsComponent, selectors: [["app-react-events"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 176, vars: 7, consts: [[1, "container"], ["label", "Event Basics"], [1, "tab-content"], [1, "info-box"], [1, "language-jsx"], ["label", "Synthetic Events"], ["label", "Form Events"], ["label", "Mouse & Keyboard"], ["label", "Event Propagation"], [1, "info-box", "warning"], ["label", "Custom Events"], ["label", "Best Practices"], [1, "info-box", "success"]], template: function ReactEventsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "React Events");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "React events are named using camelCase and you pass a function as the event handler. React uses synthetic events that wrap native browser events for better cross-browser compatibility.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "Basic Event Handling");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p");
        \u0275\u0275text(12, "React event handlers are written in ");
        \u0275\u0275elementStart(13, "strong");
        \u0275\u0275text(14, "camelCase");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " and passed as functions, not strings.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "ul")(17, "li");
        \u0275\u0275text(18, "onClick, onChange, onSubmit (camelCase)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "li");
        \u0275\u0275text(20, "Pass function reference, not function call");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "li");
        \u0275\u0275text(22, "Can define handlers inline or separately");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "li");
        \u0275\u0275text(24, "Use arrow functions to pass parameters");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "li");
        \u0275\u0275text(26, "Event handlers receive synthetic event object");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "pre")(28, "code", 4);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(30, "mat-tab", 5)(31, "div", 2)(32, "h2");
        \u0275\u0275text(33, "Synthetic Events");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 3)(35, "p")(36, "strong");
        \u0275\u0275text(37, "Synthetic events");
        \u0275\u0275elementEnd();
        \u0275\u0275text(38, " are React's cross-browser wrapper around native browser events.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "ul")(40, "li");
        \u0275\u0275text(41, "Same interface as native events");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "li");
        \u0275\u0275text(43, "Works consistently across all browsers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "li");
        \u0275\u0275text(45, "Access native event via e.nativeEvent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "li");
        \u0275\u0275text(47, "No longer pooled in React 17+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "li");
        \u0275\u0275text(49, "Can be used asynchronously");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "pre")(51, "code", 4);
        \u0275\u0275text(52);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(53, "mat-tab", 6)(54, "div", 2)(55, "h2");
        \u0275\u0275text(56, "Form Events");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "div", 3)(58, "p");
        \u0275\u0275text(59, "Common form events: onChange, onSubmit, onFocus, onBlur.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "ul")(61, "li")(62, "strong");
        \u0275\u0275text(63, "onChange:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(64, " Fires on every input change");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "li")(66, "strong");
        \u0275\u0275text(67, "onSubmit:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(68, " Fires on form submission");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "li")(70, "strong");
        \u0275\u0275text(71, "onFocus:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(72, " Element gains focus");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "li")(74, "strong");
        \u0275\u0275text(75, "onBlur:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(76, " Element loses focus");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "li");
        \u0275\u0275text(78, "Use e.preventDefault() to prevent default behavior");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(79, "pre")(80, "code", 4);
        \u0275\u0275text(81);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(82, "mat-tab", 7)(83, "div", 2)(84, "h2");
        \u0275\u0275text(85, "Mouse and Keyboard Events");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "div", 3)(87, "p");
        \u0275\u0275text(88, "Handle mouse movements, clicks, and keyboard input.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "ul")(90, "li")(91, "strong");
        \u0275\u0275text(92, "Mouse:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(93, " onClick, onDoubleClick, onMouseMove, onMouseEnter, onMouseLeave");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "li")(95, "strong");
        \u0275\u0275text(96, "Keyboard:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(97, " onKeyDown, onKeyUp, onKeyPress (deprecated)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "li");
        \u0275\u0275text(99, "Access key info: e.key, e.code, e.keyCode");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "li");
        \u0275\u0275text(101, "Check modifiers: e.ctrlKey, e.shiftKey, e.altKey");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "li");
        \u0275\u0275text(103, "Get mouse position: e.clientX, e.clientY");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(104, "pre")(105, "code", 4);
        \u0275\u0275text(106);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(107, "mat-tab", 8)(108, "div", 2)(109, "h2");
        \u0275\u0275text(110, "Event Bubbling and Propagation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "div", 9)(112, "p");
        \u0275\u0275text(113, "Events bubble up from child to parent elements by default.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "ul")(115, "li");
        \u0275\u0275text(116, "Events bubble up the DOM tree");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "li");
        \u0275\u0275text(118, "Use e.stopPropagation() to stop bubbling");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "li");
        \u0275\u0275text(120, "e.preventDefault() prevents default browser behavior");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "li");
        \u0275\u0275text(122, "Can handle at parent level (event delegation)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "li");
        \u0275\u0275text(124, "Capture phase available with onClickCapture");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(125, "pre")(126, "code", 4);
        \u0275\u0275text(127);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(128, "mat-tab", 10)(129, "div", 2)(130, "h2");
        \u0275\u0275text(131, "Custom Event Handlers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "div", 3)(133, "p");
        \u0275\u0275text(134, "Create custom event handlers and pass custom data to parent components.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "ul")(136, "li");
        \u0275\u0275text(137, "Define custom callback props");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "li");
        \u0275\u0275text(139, "Process events and pass custom data");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "li");
        \u0275\u0275text(141, "Use for component communication");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "li");
        \u0275\u0275text(143, "Debounce frequent events for performance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "li");
        \u0275\u0275text(145, "Throttle events like scroll or resize");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(146, "pre")(147, "code", 4);
        \u0275\u0275text(148);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(149, "mat-tab", 11)(150, "div", 2)(151, "h2");
        \u0275\u0275text(152, "Event Handling Best Practices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "div", 12)(154, "h3");
        \u0275\u0275text(155, "\u2713 Best Practices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "ul")(157, "li");
        \u0275\u0275text(158, "Use arrow functions or bind 'this' in class components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(159, "li");
        \u0275\u0275text(160, "Avoid creating functions in render (use useCallback)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(161, "li");
        \u0275\u0275text(162, "Use e.preventDefault() to prevent default actions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(163, "li");
        \u0275\u0275text(164, "Use e.stopPropagation() carefully");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "li");
        \u0275\u0275text(166, "Debounce/throttle expensive event handlers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "li");
        \u0275\u0275text(168, "Clean up event listeners in useEffect cleanup");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(169, "li");
        \u0275\u0275text(170, 'Name event handler props with "on" prefix');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(171, "li");
        \u0275\u0275text(172, "Keep event handlers simple and focused");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(173, "pre")(174, "code", 4);
        \u0275\u0275text(175);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(29);
        \u0275\u0275textInterpolate(ctx.eventBasics);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.syntheticEvents);
        \u0275\u0275advance(29);
        \u0275\u0275textInterpolate(ctx.formEvents);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.mouseKeyboardEvents);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.eventPropagation);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.customEvents);
        \u0275\u0275advance(27);
        \u0275\u0275textInterpolate(ctx.eventBestPractices);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #61dafb;\n  margin-bottom: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #282c34;\n  margin-top: 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  padding: 15px;\n  margin: 15px 0;\n  border-radius: 4px;\n}\n.info-box.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-left-color: #4caf50;\n}\n.info-box.warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #ff9800;\n}\n.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1976d2;\n}\n.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding-left: 20px;\n}\n.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05);\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\npre[_ngcontent-%COMP%] {\n  background: #282c34;\n  color: #abb2bf;\n  padding: 15px;\n  border-radius: 4px;\n  overflow-x: auto;\n  margin: 15px 0;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n  font-size: 14px;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=react-events.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReactEventsComponent, { className: "ReactEventsComponent", filePath: "src\\app\\components\\react\\react-events\\react-events.component.ts", lineNumber: 13 });
})();
export {
  ReactEventsComponent
};
//# sourceMappingURL=chunk-OZJ3VJA3.js.map
