import"./chunk-4ITEIGFF.js";import"./chunk-WCULWZKC.js";import{a as h}from"./chunk-FSUYFWSG.js";import{a as p,b as f,c as x,d as g}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as a,Xa as r,da as m,e as S,gb as t,hb as e,lb as l,tb as n,ub as s,yb as d}from"./chunk-WGQ2ELTG.js";var C=S(h());function v(o,u){if(o&1&&(t(0,"div",10)(1,"h2"),n(2,"useState Hook"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"useState"),e(),n(7," is the most basic hook that lets you add state to functional components."),e(),t(8,"ul")(9,"li"),n(10,"Returns array: [stateValue, setterFunction]"),e(),t(11,"li"),n(12,"Takes initial value as argument"),e(),t(13,"li"),n(14,"Setter function triggers re-render"),e(),t(15,"li"),n(16,"Can have multiple useState calls per component"),e(),t(17,"li"),n(18,"State is preserved between re-renders"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),o&2){let i=l();a(21),s(i.useStateHook)}}function E(o,u){if(o&1&&(t(0,"div",10)(1,"h2"),n(2,"useEffect Hook"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"useEffect"),e(),n(7," lets you perform side effects in functional components (data fetching, subscriptions, DOM updates)."),e(),t(8,"ul")(9,"li"),n(10,"Runs after every render by default"),e(),t(11,"li"),n(12,"Dependency array controls when it runs"),e(),t(13,"li"),n(14,"Empty array [] = run once on mount"),e(),t(15,"li"),n(16,"Return cleanup function for unmount"),e(),t(17,"li"),n(18,"Replaces componentDidMount, componentDidUpdate, componentWillUnmount"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),o&2){let i=l();a(21),s(i.useEffectHook)}}function b(o,u){if(o&1&&(t(0,"div",10)(1,"h2"),n(2,"useContext Hook"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"useContext"),e(),n(7," lets you subscribe to React context without nesting Consumer components."),e(),t(8,"ul")(9,"li"),n(10,"Cleaner than Context.Consumer"),e(),t(11,"li"),n(12,"Takes context object as argument"),e(),t(13,"li"),n(14,"Returns current context value"),e(),t(15,"li"),n(16,"Re-renders when context value changes"),e(),t(17,"li"),n(18,"Can use multiple contexts in one component"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),o&2){let i=l();a(21),s(i.useContextHook)}}function k(o,u){if(o&1&&(t(0,"div",10)(1,"h2"),n(2,"useReducer Hook"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"useReducer"),e(),n(7," is an alternative to useState for complex state logic, similar to Redux."),e(),t(8,"ul")(9,"li"),n(10,"Better for complex state logic"),e(),t(11,"li"),n(12,"Takes reducer function and initial state"),e(),t(13,"li"),n(14,"Returns [state, dispatch]"),e(),t(15,"li"),n(16,"Dispatch actions to update state"),e(),t(17,"li"),n(18,"Easier to test than useState"),e(),t(19,"li"),n(20,"Good for multiple related state updates"),e()()(),t(21,"pre")(22,"code",12),n(23),e()()()),o&2){let i=l();a(23),s(i.useReducerHook)}}function R(o,u){if(o&1&&(t(0,"div",10)(1,"h2"),n(2,"useMemo Hook"),e(),t(3,"div",13)(4,"p")(5,"strong"),n(6,"useMemo"),e(),n(7," memoizes expensive computations to optimize performance."),e(),t(8,"ul")(9,"li"),n(10,"Caches computed values"),e(),t(11,"li"),n(12,"Only recomputes when dependencies change"),e(),t(13,"li"),n(14,"Returns memoized value"),e(),t(15,"li"),n(16,"Use for expensive calculations"),e(),t(17,"li"),n(18,"Avoids unnecessary re-computations"),e(),t(19,"li"),n(20,"Don't overuse - has overhead"),e()()(),t(21,"pre")(22,"code",12),n(23),e()()()),o&2){let i=l();a(23),s(i.useMemoHook)}}function _(o,u){if(o&1&&(t(0,"div",10)(1,"h2"),n(2,"useCallback Hook"),e(),t(3,"div",13)(4,"p")(5,"strong"),n(6,"useCallback"),e(),n(7," memoizes functions to prevent unnecessary re-renders of child components."),e(),t(8,"ul")(9,"li"),n(10,"Returns memoized callback function"),e(),t(11,"li"),n(12,"Only creates new function when dependencies change"),e(),t(13,"li"),n(14,"Useful when passing callbacks to optimized child components"),e(),t(15,"li"),n(16,"Works with React.memo to prevent re-renders"),e(),t(17,"li"),n(18,"Similar to useMemo but for functions"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),o&2){let i=l();a(21),s(i.useCallbackHook)}}function T(o,u){if(o&1&&(t(0,"div",10)(1,"h2"),n(2,"useRef Hook"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"useRef"),e(),n(7," creates a mutable reference that persists across renders without causing re-renders."),e(),t(8,"ul")(9,"li"),n(10,"Access DOM elements directly"),e(),t(11,"li"),n(12,"Store mutable values that don't cause re-renders"),e(),t(13,"li"),n(14,"Persist values across renders"),e(),t(15,"li"),n(16,"Access previous values"),e(),t(17,"li"),n(18,"Store interval/timeout IDs"),e(),t(19,"li"),n(20,".current property holds the value"),e()()(),t(21,"pre")(22,"code",12),n(23),e()()()),o&2){let i=l();a(23),s(i.useRefHook)}}function y(o,u){if(o&1&&(t(0,"div",10)(1,"h2"),n(2,"Custom Hooks"),e(),t(3,"div",13)(4,"p")(5,"strong"),n(6,"Custom hooks"),e(),n(7," let you extract component logic into reusable functions."),e(),t(8,"ul")(9,"li"),n(10,'Name must start with "use"'),e(),t(11,"li"),n(12,"Can call other hooks inside"),e(),t(13,"li"),n(14,"Share stateful logic between components"),e(),t(15,"li"),n(16,"More flexible than HOCs or render props"),e(),t(17,"li"),n(18,"Can return anything: values, functions, objects"),e(),t(19,"li"),n(20,"Examples: useFetch, useLocalStorage, useAuth"),e()()(),t(21,"pre")(22,"code",12),n(23),e()()()),o&2){let i=l();a(23),s(i.customHooks)}}var w=(()=>{class o{constructor(){this.useStateHook=`import { useState } from 'react';

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
}`}ngAfterViewChecked(){C.highlightAll()}static{this.\u0275fac=function(c){return new(c||o)}}static{this.\u0275cmp=m({type:o,selectors:[["app-react-hooks"]],standalone:!0,features:[d],decls:22,vars:0,consts:[[1,"container"],["label","useState"],["matTabContent",""],["label","useEffect"],["label","useContext"],["label","useReducer"],["label","useMemo"],["label","useCallback"],["label","useRef"],["label","Custom Hooks"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],[1,"info-box","success"]],template:function(c,M){c&1&&(t(0,"div",0)(1,"h1"),n(2,"React Hooks"),e(),t(3,"p"),n(4,'Hooks are functions that let you "hook into" React state and lifecycle features from function components. They allow you to use state and other React features without writing a class.'),e(),t(5,"mat-tab-group")(6,"mat-tab",1),r(7,v,22,1,"ng-template",2),e(),t(8,"mat-tab",3),r(9,E,22,1,"ng-template",2),e(),t(10,"mat-tab",4),r(11,b,22,1,"ng-template",2),e(),t(12,"mat-tab",5),r(13,k,24,1,"ng-template",2),e(),t(14,"mat-tab",6),r(15,R,24,1,"ng-template",2),e(),t(16,"mat-tab",7),r(17,_,22,1,"ng-template",2),e(),t(18,"mat-tab",8),r(19,T,24,1,"ng-template",2),e(),t(20,"mat-tab",9),r(21,y,24,1,"ng-template",2),e()()())},dependencies:[g,p,f,x],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return o})();export{w as ReactHooksComponent};
