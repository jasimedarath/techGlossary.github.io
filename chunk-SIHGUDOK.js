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

// src/app/components/react/react-state/react-state.component.ts
var ReactStateComponent = class _ReactStateComponent {
  constructor() {
    this.stateBasics = `import { useState } from 'react';

// Basic useState Example
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

// Multiple State Variables
function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);

  return (
    <form>
      <input value={name} onChange={e => setName(e.target.value)} />
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <input type="number" value={age} onChange={e => setAge(e.target.value)} />
    </form>
  );
}`;
    this.stateObjects = `// State with Objects
function UserProfile() {
  const [user, setUser] = useState({
    name: 'John',
    age: 30,
    email: 'john@example.com'
  });

  const updateName = (newName) => {
    setUser({ ...user, name: newName });
  };

  const updateAge = (newAge) => {
    setUser(prevUser => ({ ...prevUser, age: newAge }));
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <button onClick={() => updateName('Jane')}>Change Name</button>
      <button onClick={() => updateAge(user.age + 1)}>Birthday</button>
    </div>
  );
}

// Nested State Objects
function AppSettings() {
  const [settings, setSettings] = useState({
    theme: 'dark',
    notifications: {
      email: true,
      push: false,
      sms: true
    }
  });

  const toggleEmailNotifications = () => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        email: !prev.notifications.email
      }
    }));
  };
}`;
    this.stateArrays = `// State with Arrays
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput('');
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span 
              style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`;
    this.functionalUpdates = `// Functional Updates
function Counter() {
  const [count, setCount] = useState(0);

  // Regular update (can cause issues with multiple updates)
  const incrementBad = () => {
    setCount(count + 1);
    setCount(count + 1); // This won't work as expected
  };

  // Functional update (correct way)
  const incrementGood = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1); // This works correctly
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementGood}>Increment by 2</button>
    </div>
  );
}

// With Complex State
function ShoppingCart() {
  const [cart, setCart] = useState({ items: [], total: 0 });

  const addItem = (item) => {
    setCart(prevCart => ({
      items: [...prevCart.items, item],
      total: prevCart.total + item.price
    }));
  };

  const removeItem = (itemId) => {
    setCart(prevCart => {
      const item = prevCart.items.find(i => i.id === itemId);
      return {
        items: prevCart.items.filter(i => i.id !== itemId),
        total: prevCart.total - item.price
      };
    });
  };
}`;
    this.lazyInitialization = `// Lazy Initial State
function ExpensiveComponent() {
  // Bad: Function runs on every render
  const [data, setData] = useState(computeExpensiveValue());

  // Good: Function runs only once
  const [data, setData] = useState(() => computeExpensiveValue());

  return <div>{data}</div>;
}

function computeExpensiveValue() {
  console.log('Computing expensive value...');
  // Expensive computation
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += i;
  }
  return result;
}

// With localStorage
function UserPreferences() {
  const [preferences, setPreferences] = useState(() => {
    const saved = localStorage.getItem('preferences');
    return saved ? JSON.parse(saved) : {
      theme: 'light',
      language: 'en'
    };
  });

  const updatePreferences = (newPrefs) => {
    setPreferences(newPrefs);
    localStorage.setItem('preferences', JSON.stringify(newPrefs));
  };
}`;
    this.classComponentState = `import React, { Component } from 'react';

// Class Component with State
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: 1
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + this.state.step });
  };

  // Functional setState
  incrementFunctional = () => {
    this.setState(prevState => ({
      count: prevState.count + prevState.step
    }));
  };

  // setState with callback
  incrementWithCallback = () => {
    this.setState(
      { count: this.state.count + 1 },
      () => {
        console.log('State updated:', this.state.count);
      }
    );
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}`;
    this.stateBestPractices = `// State Management Best Practices

// 1. Don't mutate state directly
function BadExample() {
  const [items, setItems] = useState([1, 2, 3]);
  
  const addItemBad = () => {
    items.push(4); // Wrong!
    setItems(items);
  };
  
  const addItemGood = () => {
    setItems([...items, 4]); // Correct!
  };
}

// 2. Merge state updates manually (objects)
function FormState() {
  const [form, setForm] = useState({ name: '', email: '' });
  
  const updateField = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };
}

// 3. Use functional updates for dependent state
function Timer() {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1); // Use functional update
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
}

// 4. Split unrelated state
function UserDashboard() {
  // Good: Split into multiple state variables
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Bad: One large state object for unrelated data
  // const [state, setState] = useState({ user: null, posts: [], loading: false });
}

// 5. Keep state minimal and derived
function ProductList({ products }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Good: Derive filtered list instead of storing it
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return <div>{filteredProducts.map(...)}</div>;
}`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function ReactStateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReactStateComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReactStateComponent, selectors: [["app-react-state"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 171, vars: 7, consts: [[1, "container"], ["label", "State Basics"], [1, "tab-content"], [1, "info-box"], [1, "language-jsx"], ["label", "Objects"], ["label", "Arrays"], ["label", "Functional Updates"], [1, "info-box", "success"], ["label", "Lazy Initialization"], ["label", "Class Components"], [1, "info-box", "warning"], ["label", "Best Practices"]], template: function ReactStateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "React State");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "State is a built-in React object used to store data that determines how a component renders and behaves. When state changes, the component re-renders to reflect the new state.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "Understanding State");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "State");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " is mutable data that belongs to a component and can change over time.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "useState hook for functional components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "Returns a state variable and setter function");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li");
        \u0275\u0275text(21, "Initial value passed as argument to useState");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275text(23, "Setting state triggers a re-render");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "li");
        \u0275\u0275text(25, "State updates are asynchronous");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "li");
        \u0275\u0275text(27, "Each component has its own state");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "pre")(29, "code", 4);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(31, "mat-tab", 5)(32, "div", 2)(33, "h2");
        \u0275\u0275text(34, "State with Objects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 3)(36, "p");
        \u0275\u0275text(37, "When state is an object, always create a new object with spread operator to update it.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "ul")(39, "li");
        \u0275\u0275text(40, "Always spread existing state when updating");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "li");
        \u0275\u0275text(42, "React uses shallow comparison for state");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li");
        \u0275\u0275text(44, "Don't mutate state directly");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "li");
        \u0275\u0275text(46, "Use functional updates for safer updates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "li");
        \u0275\u0275text(48, "Handle nested objects carefully");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "pre")(50, "code", 4);
        \u0275\u0275text(51);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(52, "mat-tab", 6)(53, "div", 2)(54, "h2");
        \u0275\u0275text(55, "State with Arrays");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 3)(57, "p");
        \u0275\u0275text(58, "Managing arrays in state requires creating new arrays instead of mutating existing ones.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "ul")(60, "li");
        \u0275\u0275text(61, "Use spread operator or array methods that return new arrays");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "li");
        \u0275\u0275text(63, "Add items: [...array, newItem]");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "li");
        \u0275\u0275text(65, "Remove items: array.filter()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "li");
        \u0275\u0275text(67, "Update items: array.map()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "li");
        \u0275\u0275text(69, "Avoid push(), pop(), splice() - they mutate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(70, "pre")(71, "code", 4);
        \u0275\u0275text(72);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(73, "mat-tab", 7)(74, "div", 2)(75, "h2");
        \u0275\u0275text(76, "Functional State Updates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "div", 8)(78, "p")(79, "strong");
        \u0275\u0275text(80, "Functional updates");
        \u0275\u0275elementEnd();
        \u0275\u0275text(81, " use the previous state value to calculate the next state, ensuring accuracy.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "ul")(83, "li");
        \u0275\u0275text(84, "Pass a function to state setter instead of a value");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "li");
        \u0275\u0275text(86, "Function receives previous state as argument");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "li");
        \u0275\u0275text(88, "Necessary for multiple state updates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "li");
        \u0275\u0275text(90, "Prevents stale closure issues");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "li");
        \u0275\u0275text(92, "More reliable for computed state changes");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(93, "pre")(94, "code", 4);
        \u0275\u0275text(95);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(96, "mat-tab", 9)(97, "div", 2)(98, "h2");
        \u0275\u0275text(99, "Lazy Initial State");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "div", 3)(101, "p")(102, "strong");
        \u0275\u0275text(103, "Lazy initialization");
        \u0275\u0275elementEnd();
        \u0275\u0275text(104, " runs the initialization function only once, not on every render.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "ul")(106, "li");
        \u0275\u0275text(107, "Pass a function to useState instead of a value");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "li");
        \u0275\u0275text(109, "Function runs only on initial render");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "li");
        \u0275\u0275text(111, "Useful for expensive computations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "li");
        \u0275\u0275text(113, "Common with localStorage reads");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "li");
        \u0275\u0275text(115, "Improves performance for heavy initializations");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(116, "pre")(117, "code", 4);
        \u0275\u0275text(118);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(119, "mat-tab", 10)(120, "div", 2)(121, "h2");
        \u0275\u0275text(122, "State in Class Components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "div", 11)(124, "p")(125, "strong");
        \u0275\u0275text(126, "Class components");
        \u0275\u0275elementEnd();
        \u0275\u0275text(127, " use this.state and this.setState() (legacy approach).");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "ul")(129, "li");
        \u0275\u0275text(130, "Initialize state in constructor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(131, "li");
        \u0275\u0275text(132, "this.setState() to update state");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "li");
        \u0275\u0275text(134, "setState merges object updates automatically");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "li");
        \u0275\u0275text(136, "Can pass callback to setState");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "li");
        \u0275\u0275text(138, "Can use functional form of setState");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "li");
        \u0275\u0275text(140, "Prefer functional components with hooks");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(141, "pre")(142, "code", 4);
        \u0275\u0275text(143);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(144, "mat-tab", 12)(145, "div", 2)(146, "h2");
        \u0275\u0275text(147, "State Management Best Practices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "div", 8)(149, "h3");
        \u0275\u0275text(150, "\u2713 Best Practices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "ul")(152, "li");
        \u0275\u0275text(153, "Never mutate state directly");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(154, "li");
        \u0275\u0275text(155, "Use functional updates when new state depends on previous state");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "li");
        \u0275\u0275text(157, "Split unrelated state into multiple useState calls");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "li");
        \u0275\u0275text(159, "Keep state minimal - derive values when possible");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "li");
        \u0275\u0275text(161, "Use lazy initialization for expensive initial values");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "li");
        \u0275\u0275text(163, "Prefer simple state structures over complex nested objects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "li");
        \u0275\u0275text(165, "Consider useReducer for complex state logic");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(166, "li");
        \u0275\u0275text(167, "Lift state up when multiple components need it");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(168, "pre")(169, "code", 4);
        \u0275\u0275text(170);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(30);
        \u0275\u0275textInterpolate(ctx.stateBasics);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.stateObjects);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.stateArrays);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.functionalUpdates);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.lazyInitialization);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.classComponentState);
        \u0275\u0275advance(27);
        \u0275\u0275textInterpolate(ctx.stateBestPractices);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #61dafb;\n  margin-bottom: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #282c34;\n  margin-top: 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  padding: 15px;\n  margin: 15px 0;\n  border-radius: 4px;\n}\n.info-box.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-left-color: #4caf50;\n}\n.info-box.warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #ff9800;\n}\n.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1976d2;\n}\n.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding-left: 20px;\n}\n.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05);\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\npre[_ngcontent-%COMP%] {\n  background: #282c34;\n  color: #abb2bf;\n  padding: 15px;\n  border-radius: 4px;\n  overflow-x: auto;\n  margin: 15px 0;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n  font-size: 14px;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=react-state.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReactStateComponent, { className: "ReactStateComponent", filePath: "src\\app\\components\\react\\react-state\\react-state.component.ts", lineNumber: 13 });
})();
export {
  ReactStateComponent
};
//# sourceMappingURL=chunk-SIHGUDOK.js.map
