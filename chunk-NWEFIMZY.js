import{b as c,c as d,d as m}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as o,da as l,gb as n,hb as e,tb as t,ub as i,yb as u}from"./chunk-WGQ2ELTG.js";var v=(()=>{class r{constructor(){this.useStateHook=`import { useState } from 'react';

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
}`,this.useEffectHook=`import { useEffect, useState } from 'react';

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
}`,this.useContextHook=`import { createContext, useContext, useState } from 'react';

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
}`,this.useReducerHook=`import { useReducer } from 'react';

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
}`,this.useMemoHook=`import { useMemo, useState } from 'react';

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
}`,this.useCallbackHook=`import { useCallback, useState, memo } from 'react';

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
});`,this.useRefHook=`import { useRef, useState, useEffect } from 'react';

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
}`,this.customHooks=`import { useState, useEffect } from 'react';

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
}`}ngAfterViewChecked(){Prism.highlightAll()}static{this.\u0275fac=function(s){return new(s||r)}}static{this.\u0275cmp=l({type:r,selectors:[["app-react-hooks"]],standalone:!0,features:[u],decls:198,vars:8,consts:[[1,"container"],["label","useState"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],["label","useEffect"],["label","useContext"],["label","useReducer"],["label","useMemo"],[1,"info-box","success"],["label","useCallback"],["label","useRef"],["label","Custom Hooks"]],template:function(s,a){s&1&&(n(0,"div",0)(1,"h1"),t(2,"React Hooks"),e(),n(3,"p"),t(4,'Hooks are functions that let you "hook into" React state and lifecycle features from function components. They allow you to use state and other React features without writing a class.'),e(),n(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),t(9,"useState Hook"),e(),n(10,"div",3)(11,"p")(12,"strong"),t(13,"useState"),e(),t(14," is the most basic hook that lets you add state to functional components."),e(),n(15,"ul")(16,"li"),t(17,"Returns array: [stateValue, setterFunction]"),e(),n(18,"li"),t(19,"Takes initial value as argument"),e(),n(20,"li"),t(21,"Setter function triggers re-render"),e(),n(22,"li"),t(23,"Can have multiple useState calls per component"),e(),n(24,"li"),t(25,"State is preserved between re-renders"),e()()(),n(26,"pre")(27,"code",4),t(28),e()()()(),n(29,"mat-tab",5)(30,"div",2)(31,"h2"),t(32,"useEffect Hook"),e(),n(33,"div",3)(34,"p")(35,"strong"),t(36,"useEffect"),e(),t(37," lets you perform side effects in functional components (data fetching, subscriptions, DOM updates)."),e(),n(38,"ul")(39,"li"),t(40,"Runs after every render by default"),e(),n(41,"li"),t(42,"Dependency array controls when it runs"),e(),n(43,"li"),t(44,"Empty array [] = run once on mount"),e(),n(45,"li"),t(46,"Return cleanup function for unmount"),e(),n(47,"li"),t(48,"Replaces componentDidMount, componentDidUpdate, componentWillUnmount"),e()()(),n(49,"pre")(50,"code",4),t(51),e()()()(),n(52,"mat-tab",6)(53,"div",2)(54,"h2"),t(55,"useContext Hook"),e(),n(56,"div",3)(57,"p")(58,"strong"),t(59,"useContext"),e(),t(60," lets you subscribe to React context without nesting Consumer components."),e(),n(61,"ul")(62,"li"),t(63,"Cleaner than Context.Consumer"),e(),n(64,"li"),t(65,"Takes context object as argument"),e(),n(66,"li"),t(67,"Returns current context value"),e(),n(68,"li"),t(69,"Re-renders when context value changes"),e(),n(70,"li"),t(71,"Can use multiple contexts in one component"),e()()(),n(72,"pre")(73,"code",4),t(74),e()()()(),n(75,"mat-tab",7)(76,"div",2)(77,"h2"),t(78,"useReducer Hook"),e(),n(79,"div",3)(80,"p")(81,"strong"),t(82,"useReducer"),e(),t(83," is an alternative to useState for complex state logic, similar to Redux."),e(),n(84,"ul")(85,"li"),t(86,"Better for complex state logic"),e(),n(87,"li"),t(88,"Takes reducer function and initial state"),e(),n(89,"li"),t(90,"Returns [state, dispatch]"),e(),n(91,"li"),t(92,"Dispatch actions to update state"),e(),n(93,"li"),t(94,"Easier to test than useState"),e(),n(95,"li"),t(96,"Good for multiple related state updates"),e()()(),n(97,"pre")(98,"code",4),t(99),e()()()(),n(100,"mat-tab",8)(101,"div",2)(102,"h2"),t(103,"useMemo Hook"),e(),n(104,"div",9)(105,"p")(106,"strong"),t(107,"useMemo"),e(),t(108," memoizes expensive computations to optimize performance."),e(),n(109,"ul")(110,"li"),t(111,"Caches computed values"),e(),n(112,"li"),t(113,"Only recomputes when dependencies change"),e(),n(114,"li"),t(115,"Returns memoized value"),e(),n(116,"li"),t(117,"Use for expensive calculations"),e(),n(118,"li"),t(119,"Avoids unnecessary re-computations"),e(),n(120,"li"),t(121,"Don't overuse - has overhead"),e()()(),n(122,"pre")(123,"code",4),t(124),e()()()(),n(125,"mat-tab",10)(126,"div",2)(127,"h2"),t(128,"useCallback Hook"),e(),n(129,"div",9)(130,"p")(131,"strong"),t(132,"useCallback"),e(),t(133," memoizes functions to prevent unnecessary re-renders of child components."),e(),n(134,"ul")(135,"li"),t(136,"Returns memoized callback function"),e(),n(137,"li"),t(138,"Only creates new function when dependencies change"),e(),n(139,"li"),t(140,"Useful when passing callbacks to optimized child components"),e(),n(141,"li"),t(142,"Works with React.memo to prevent re-renders"),e(),n(143,"li"),t(144,"Similar to useMemo but for functions"),e()()(),n(145,"pre")(146,"code",4),t(147),e()()()(),n(148,"mat-tab",11)(149,"div",2)(150,"h2"),t(151,"useRef Hook"),e(),n(152,"div",3)(153,"p")(154,"strong"),t(155,"useRef"),e(),t(156," creates a mutable reference that persists across renders without causing re-renders."),e(),n(157,"ul")(158,"li"),t(159,"Access DOM elements directly"),e(),n(160,"li"),t(161,"Store mutable values that don't cause re-renders"),e(),n(162,"li"),t(163,"Persist values across renders"),e(),n(164,"li"),t(165,"Access previous values"),e(),n(166,"li"),t(167,"Store interval/timeout IDs"),e(),n(168,"li"),t(169,".current property holds the value"),e()()(),n(170,"pre")(171,"code",4),t(172),e()()()(),n(173,"mat-tab",12)(174,"div",2)(175,"h2"),t(176,"Custom Hooks"),e(),n(177,"div",9)(178,"p")(179,"strong"),t(180,"Custom hooks"),e(),t(181," let you extract component logic into reusable functions."),e(),n(182,"ul")(183,"li"),t(184,'Name must start with "use"'),e(),n(185,"li"),t(186,"Can call other hooks inside"),e(),n(187,"li"),t(188,"Share stateful logic between components"),e(),n(189,"li"),t(190,"More flexible than HOCs or render props"),e(),n(191,"li"),t(192,"Can return anything: values, functions, objects"),e(),n(193,"li"),t(194,"Examples: useFetch, useLocalStorage, useAuth"),e()()(),n(195,"pre")(196,"code",4),t(197),e()()()()()()),s&2&&(o(28),i(a.useStateHook),o(23),i(a.useEffectHook),o(23),i(a.useContextHook),o(25),i(a.useReducerHook),o(25),i(a.useMemoHook),o(23),i(a.useCallbackHook),o(25),i(a.useRefHook),o(25),i(a.customHooks))},dependencies:[m,c,d],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;color:#abb2bf;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return r})();export{v as ReactHooksComponent};
