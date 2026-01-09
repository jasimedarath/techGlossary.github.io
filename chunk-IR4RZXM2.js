import{b as d,c as m,d as u}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as o,da as s,gb as n,hb as t,tb as e,ub as i,yb as c}from"./chunk-WGQ2ELTG.js";var C=(()=>{class a{constructor(){this.eventBasics=`// Basic Event Handling
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
}`}ngAfterViewChecked(){Prism.highlightAll()}static{this.\u0275fac=function(r){return new(r||a)}}static{this.\u0275cmp=s({type:a,selectors:[["app-react-events"]],standalone:!0,features:[c],decls:176,vars:7,consts:[[1,"container"],["label","Event Basics"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],["label","Synthetic Events"],["label","Form Events"],["label","Mouse & Keyboard"],["label","Event Propagation"],[1,"info-box","warning"],["label","Custom Events"],["label","Best Practices"],[1,"info-box","success"]],template:function(r,l){r&1&&(n(0,"div",0)(1,"h1"),e(2,"React Events"),t(),n(3,"p"),e(4,"React events are named using camelCase and you pass a function as the event handler. React uses synthetic events that wrap native browser events for better cross-browser compatibility."),t(),n(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),e(9,"Basic Event Handling"),t(),n(10,"div",3)(11,"p"),e(12,"React event handlers are written in "),n(13,"strong"),e(14,"camelCase"),t(),e(15," and passed as functions, not strings."),t(),n(16,"ul")(17,"li"),e(18,"onClick, onChange, onSubmit (camelCase)"),t(),n(19,"li"),e(20,"Pass function reference, not function call"),t(),n(21,"li"),e(22,"Can define handlers inline or separately"),t(),n(23,"li"),e(24,"Use arrow functions to pass parameters"),t(),n(25,"li"),e(26,"Event handlers receive synthetic event object"),t()()(),n(27,"pre")(28,"code",4),e(29),t()()()(),n(30,"mat-tab",5)(31,"div",2)(32,"h2"),e(33,"Synthetic Events"),t(),n(34,"div",3)(35,"p")(36,"strong"),e(37,"Synthetic events"),t(),e(38," are React's cross-browser wrapper around native browser events."),t(),n(39,"ul")(40,"li"),e(41,"Same interface as native events"),t(),n(42,"li"),e(43,"Works consistently across all browsers"),t(),n(44,"li"),e(45,"Access native event via e.nativeEvent"),t(),n(46,"li"),e(47,"No longer pooled in React 17+"),t(),n(48,"li"),e(49,"Can be used asynchronously"),t()()(),n(50,"pre")(51,"code",4),e(52),t()()()(),n(53,"mat-tab",6)(54,"div",2)(55,"h2"),e(56,"Form Events"),t(),n(57,"div",3)(58,"p"),e(59,"Common form events: onChange, onSubmit, onFocus, onBlur."),t(),n(60,"ul")(61,"li")(62,"strong"),e(63,"onChange:"),t(),e(64," Fires on every input change"),t(),n(65,"li")(66,"strong"),e(67,"onSubmit:"),t(),e(68," Fires on form submission"),t(),n(69,"li")(70,"strong"),e(71,"onFocus:"),t(),e(72," Element gains focus"),t(),n(73,"li")(74,"strong"),e(75,"onBlur:"),t(),e(76," Element loses focus"),t(),n(77,"li"),e(78,"Use e.preventDefault() to prevent default behavior"),t()()(),n(79,"pre")(80,"code",4),e(81),t()()()(),n(82,"mat-tab",7)(83,"div",2)(84,"h2"),e(85,"Mouse and Keyboard Events"),t(),n(86,"div",3)(87,"p"),e(88,"Handle mouse movements, clicks, and keyboard input."),t(),n(89,"ul")(90,"li")(91,"strong"),e(92,"Mouse:"),t(),e(93," onClick, onDoubleClick, onMouseMove, onMouseEnter, onMouseLeave"),t(),n(94,"li")(95,"strong"),e(96,"Keyboard:"),t(),e(97," onKeyDown, onKeyUp, onKeyPress (deprecated)"),t(),n(98,"li"),e(99,"Access key info: e.key, e.code, e.keyCode"),t(),n(100,"li"),e(101,"Check modifiers: e.ctrlKey, e.shiftKey, e.altKey"),t(),n(102,"li"),e(103,"Get mouse position: e.clientX, e.clientY"),t()()(),n(104,"pre")(105,"code",4),e(106),t()()()(),n(107,"mat-tab",8)(108,"div",2)(109,"h2"),e(110,"Event Bubbling and Propagation"),t(),n(111,"div",9)(112,"p"),e(113,"Events bubble up from child to parent elements by default."),t(),n(114,"ul")(115,"li"),e(116,"Events bubble up the DOM tree"),t(),n(117,"li"),e(118,"Use e.stopPropagation() to stop bubbling"),t(),n(119,"li"),e(120,"e.preventDefault() prevents default browser behavior"),t(),n(121,"li"),e(122,"Can handle at parent level (event delegation)"),t(),n(123,"li"),e(124,"Capture phase available with onClickCapture"),t()()(),n(125,"pre")(126,"code",4),e(127),t()()()(),n(128,"mat-tab",10)(129,"div",2)(130,"h2"),e(131,"Custom Event Handlers"),t(),n(132,"div",3)(133,"p"),e(134,"Create custom event handlers and pass custom data to parent components."),t(),n(135,"ul")(136,"li"),e(137,"Define custom callback props"),t(),n(138,"li"),e(139,"Process events and pass custom data"),t(),n(140,"li"),e(141,"Use for component communication"),t(),n(142,"li"),e(143,"Debounce frequent events for performance"),t(),n(144,"li"),e(145,"Throttle events like scroll or resize"),t()()(),n(146,"pre")(147,"code",4),e(148),t()()()(),n(149,"mat-tab",11)(150,"div",2)(151,"h2"),e(152,"Event Handling Best Practices"),t(),n(153,"div",12)(154,"h3"),e(155,"\u2713 Best Practices"),t(),n(156,"ul")(157,"li"),e(158,"Use arrow functions or bind 'this' in class components"),t(),n(159,"li"),e(160,"Avoid creating functions in render (use useCallback)"),t(),n(161,"li"),e(162,"Use e.preventDefault() to prevent default actions"),t(),n(163,"li"),e(164,"Use e.stopPropagation() carefully"),t(),n(165,"li"),e(166,"Debounce/throttle expensive event handlers"),t(),n(167,"li"),e(168,"Clean up event listeners in useEffect cleanup"),t(),n(169,"li"),e(170,'Name event handler props with "on" prefix'),t(),n(171,"li"),e(172,"Keep event handlers simple and focused"),t()()(),n(173,"pre")(174,"code",4),e(175),t()()()()()()),r&2&&(o(29),i(l.eventBasics),o(23),i(l.syntheticEvents),o(29),i(l.formEvents),o(25),i(l.mouseKeyboardEvents),o(21),i(l.eventPropagation),o(21),i(l.customEvents),o(27),i(l.eventBestPractices))},dependencies:[u,d,m],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;color:#abb2bf;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return a})();export{C as ReactEventsComponent};
