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

// src/app/components/react/react-hooks/react-hooks.component.ts
var ReactHooksComponent = class _ReactHooksComponent {
  constructor() {
    this.useStateHook = `import { useState } from 'react';

// Basic useState
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

// Multiple State Variables
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  
  return (
    <form>
      <input value={name} onChange={e => setName(e.target.value)} />
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <input type="number" value={age} onChange={e => setAge(+e.target.value)} />
    </form>
  );
}`;
    this.useEffectHook = `import { useEffect, useState } from 'react';

// Component Did Mount
function DataFetcher() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(setData);
  }, []); // Empty array = run once on mount
  
  return <div>{data?.title}</div>;
}

// Component Did Update
function SearchResults({ query }) {
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    if (query) {
      searchAPI(query).then(setResults);
    }
  }, [query]); // Re-run when query changes
  
  return <ul>{results.map(r => <li>{r}</li>)}</ul>;
}

// Component Will Unmount (Cleanup)
function Timer() {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    
    return () => clearInterval(interval); // Cleanup
  }, []);
  
  return <div>Seconds: {seconds}</div>;
}`;
    this.useContextHook = `import { createContext, useContext, useState } from 'react';

// Create Context
const ThemeContext = createContext();

// Provider Component
function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Content />
    </ThemeContext.Provider>
  );
}

// Consumer Component using useContext
function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <header className={theme}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </header>
  );
}

// Multiple Contexts
const UserContext = createContext();
const SettingsContext = createContext();

function Dashboard() {
  const user = useContext(UserContext);
  const settings = useContext(SettingsContext);
  
  return <div>Welcome {user.name}</div>;
}`;
    this.useReducerHook = `import { useReducer } from 'react';

// Reducer Function
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

// Component using useReducer
function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}

// Complex State with useReducer
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload, done: false }];
    case 'TOGGLE_TODO':
      return state.map(todo => 
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}`;
    this.useMemoHook = `import { useMemo, useState } from 'react';

// Expensive Computation
function DataProcessor({ data }) {
  const [filter, setFilter] = useState('');
  
  // Without useMemo - runs on every render
  const processedData = expensiveProcessing(data);
  
  // With useMemo - only runs when data changes
  const memoizedData = useMemo(() => {
    console.log('Processing data...');
    return expensiveProcessing(data);
  }, [data]);
  
  const filtered = useMemo(() => {
    return memoizedData.filter(item => 
      item.name.includes(filter)
    );
  }, [memoizedData, filter]);
  
  return (
    <div>
      <input value={filter} onChange={e => setFilter(e.target.value)} />
      <ul>
        {filtered.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

function expensiveProcessing(data) {
  // Simulate expensive operation
  return data.map(item => {/* complex transformation */});
}`;
    this.useCallbackHook = `import { useCallback, useState, memo } from 'react';

// Parent Component
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  // Without useCallback - new function on every render
  const addTodo = () => {
    setTodos([...todos, input]);
  };
  
  // With useCallback - same function reference
  const addTodoMemoized = useCallback(() => {
    setTodos(prev => [...prev, input]);
  }, [input]);
  
  // Memoized callback for child
  const handleDelete = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);
  
  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTodoMemoized}>Add</button>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
      ))}
    </div>
  );
}

// Memoized Child Component
const TodoItem = memo(function TodoItem({ todo, onDelete }) {
  console.log('Rendering TodoItem:', todo.id);
  return (
    <div>
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
});`;
    this.useRefHook = `import { useRef, useState, useEffect } from 'react';

// Accessing DOM Elements
function TextInputWithFocus() {
  const inputRef = useRef(null);
  
  const focusInput = () => {
    inputRef.current.focus();
  };
  
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

// Storing Mutable Values
function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  
  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
  };
  
  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };
  
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

// Previous Value
function PreviousValue({ value }) {
  const prevValueRef = useRef();
  
  useEffect(() => {
    prevValueRef.current = value;
  });
  
  return <div>Now: {value}, Before: {prevValueRef.current}</div>;
}`;
    this.customHooks = `import { useState, useEffect } from 'react';

// Custom Hook: useLocalStorage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  
  return [value, setValue];
}

// Usage
function App() {
  const [name, setName] = useLocalStorage('name', 'Guest');
  return <input value={name} onChange={e => setName(e.target.value)} />;
}

// Custom Hook: useFetch
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);
  
  return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
  const { data, loading, error } = useFetch(\`/api/users/\${userId}\`);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{data.name}</div>;
}`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function ReactHooksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReactHooksComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReactHooksComponent, selectors: [["app-react-hooks"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 198, vars: 8, consts: [[1, "container"], ["label", "useState"], [1, "tab-content"], [1, "info-box"], [1, "language-jsx"], ["label", "useEffect"], ["label", "useContext"], ["label", "useReducer"], ["label", "useMemo"], [1, "info-box", "success"], ["label", "useCallback"], ["label", "useRef"], ["label", "Custom Hooks"]], template: function ReactHooksComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "React Hooks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, 'Hooks are functions that let you "hook into" React state and lifecycle features from function components. They allow you to use state and other React features without writing a class.');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "useState Hook");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "useState");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " is the most basic hook that lets you add state to functional components.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "Returns array: [stateValue, setterFunction]");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "Takes initial value as argument");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li");
        \u0275\u0275text(21, "Setter function triggers re-render");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275text(23, "Can have multiple useState calls per component");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "li");
        \u0275\u0275text(25, "State is preserved between re-renders");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "pre")(27, "code", 4);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(29, "mat-tab", 5)(30, "div", 2)(31, "h2");
        \u0275\u0275text(32, "useEffect Hook");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 3)(34, "p")(35, "strong");
        \u0275\u0275text(36, "useEffect");
        \u0275\u0275elementEnd();
        \u0275\u0275text(37, " lets you perform side effects in functional components (data fetching, subscriptions, DOM updates).");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "ul")(39, "li");
        \u0275\u0275text(40, "Runs after every render by default");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "li");
        \u0275\u0275text(42, "Dependency array controls when it runs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li");
        \u0275\u0275text(44, "Empty array [] = run once on mount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "li");
        \u0275\u0275text(46, "Return cleanup function for unmount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "li");
        \u0275\u0275text(48, "Replaces componentDidMount, componentDidUpdate, componentWillUnmount");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "pre")(50, "code", 4);
        \u0275\u0275text(51);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(52, "mat-tab", 6)(53, "div", 2)(54, "h2");
        \u0275\u0275text(55, "useContext Hook");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 3)(57, "p")(58, "strong");
        \u0275\u0275text(59, "useContext");
        \u0275\u0275elementEnd();
        \u0275\u0275text(60, " lets you subscribe to React context without nesting Consumer components.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "ul")(62, "li");
        \u0275\u0275text(63, "Cleaner than Context.Consumer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "li");
        \u0275\u0275text(65, "Takes context object as argument");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "li");
        \u0275\u0275text(67, "Returns current context value");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "li");
        \u0275\u0275text(69, "Re-renders when context value changes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "li");
        \u0275\u0275text(71, "Can use multiple contexts in one component");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(72, "pre")(73, "code", 4);
        \u0275\u0275text(74);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(75, "mat-tab", 7)(76, "div", 2)(77, "h2");
        \u0275\u0275text(78, "useReducer Hook");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "div", 3)(80, "p")(81, "strong");
        \u0275\u0275text(82, "useReducer");
        \u0275\u0275elementEnd();
        \u0275\u0275text(83, " is an alternative to useState for complex state logic, similar to Redux.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "ul")(85, "li");
        \u0275\u0275text(86, "Better for complex state logic");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "li");
        \u0275\u0275text(88, "Takes reducer function and initial state");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "li");
        \u0275\u0275text(90, "Returns [state, dispatch]");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "li");
        \u0275\u0275text(92, "Dispatch actions to update state");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "li");
        \u0275\u0275text(94, "Easier to test than useState");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "li");
        \u0275\u0275text(96, "Good for multiple related state updates");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(97, "pre")(98, "code", 4);
        \u0275\u0275text(99);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(100, "mat-tab", 8)(101, "div", 2)(102, "h2");
        \u0275\u0275text(103, "useMemo Hook");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "div", 9)(105, "p")(106, "strong");
        \u0275\u0275text(107, "useMemo");
        \u0275\u0275elementEnd();
        \u0275\u0275text(108, " memoizes expensive computations to optimize performance.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "ul")(110, "li");
        \u0275\u0275text(111, "Caches computed values");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "li");
        \u0275\u0275text(113, "Only recomputes when dependencies change");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "li");
        \u0275\u0275text(115, "Returns memoized value");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "li");
        \u0275\u0275text(117, "Use for expensive calculations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "li");
        \u0275\u0275text(119, "Avoids unnecessary re-computations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "li");
        \u0275\u0275text(121, "Don't overuse - has overhead");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(122, "pre")(123, "code", 4);
        \u0275\u0275text(124);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(125, "mat-tab", 10)(126, "div", 2)(127, "h2");
        \u0275\u0275text(128, "useCallback Hook");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "div", 9)(130, "p")(131, "strong");
        \u0275\u0275text(132, "useCallback");
        \u0275\u0275elementEnd();
        \u0275\u0275text(133, " memoizes functions to prevent unnecessary re-renders of child components.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "ul")(135, "li");
        \u0275\u0275text(136, "Returns memoized callback function");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "li");
        \u0275\u0275text(138, "Only creates new function when dependencies change");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "li");
        \u0275\u0275text(140, "Useful when passing callbacks to optimized child components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "li");
        \u0275\u0275text(142, "Works with React.memo to prevent re-renders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "li");
        \u0275\u0275text(144, "Similar to useMemo but for functions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(145, "pre")(146, "code", 4);
        \u0275\u0275text(147);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(148, "mat-tab", 11)(149, "div", 2)(150, "h2");
        \u0275\u0275text(151, "useRef Hook");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "div", 3)(153, "p")(154, "strong");
        \u0275\u0275text(155, "useRef");
        \u0275\u0275elementEnd();
        \u0275\u0275text(156, " creates a mutable reference that persists across renders without causing re-renders.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "ul")(158, "li");
        \u0275\u0275text(159, "Access DOM elements directly");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "li");
        \u0275\u0275text(161, "Store mutable values that don't cause re-renders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "li");
        \u0275\u0275text(163, "Persist values across renders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "li");
        \u0275\u0275text(165, "Access previous values");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(166, "li");
        \u0275\u0275text(167, "Store interval/timeout IDs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(168, "li");
        \u0275\u0275text(169, ".current property holds the value");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(170, "pre")(171, "code", 4);
        \u0275\u0275text(172);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(173, "mat-tab", 12)(174, "div", 2)(175, "h2");
        \u0275\u0275text(176, "Custom Hooks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(177, "div", 9)(178, "p")(179, "strong");
        \u0275\u0275text(180, "Custom hooks");
        \u0275\u0275elementEnd();
        \u0275\u0275text(181, " let you extract component logic into reusable functions.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(182, "ul")(183, "li");
        \u0275\u0275text(184, 'Name must start with "use"');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(185, "li");
        \u0275\u0275text(186, "Can call other hooks inside");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "li");
        \u0275\u0275text(188, "Share stateful logic between components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(189, "li");
        \u0275\u0275text(190, "More flexible than HOCs or render props");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(191, "li");
        \u0275\u0275text(192, "Can return anything: values, functions, objects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(193, "li");
        \u0275\u0275text(194, "Examples: useFetch, useLocalStorage, useAuth");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(195, "pre")(196, "code", 4);
        \u0275\u0275text(197);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(28);
        \u0275\u0275textInterpolate(ctx.useStateHook);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.useEffectHook);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.useContextHook);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.useReducerHook);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.useMemoHook);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.useCallbackHook);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.useRefHook);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.customHooks);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #61dafb;\n  margin-bottom: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #282c34;\n  margin-top: 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  padding: 15px;\n  margin: 15px 0;\n  border-radius: 4px;\n}\n.info-box.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-left-color: #4caf50;\n}\n.info-box.warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #ff9800;\n}\n.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1976d2;\n}\n.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding-left: 20px;\n}\n.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05);\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\npre[_ngcontent-%COMP%] {\n  background: #282c34;\n  color: #abb2bf;\n  padding: 15px;\n  border-radius: 4px;\n  overflow-x: auto;\n  margin: 15px 0;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n  font-size: 14px;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=react-hooks.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReactHooksComponent, { className: "ReactHooksComponent", filePath: "src\\app\\components\\react\\react-hooks\\react-hooks.component.ts", lineNumber: 13 });
})();
export {
  ReactHooksComponent
};
//# sourceMappingURL=chunk-KXCJ7WDJ.js.map
