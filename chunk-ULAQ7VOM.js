import"./chunk-4ITEIGFF.js";import"./chunk-WCULWZKC.js";import{a as C}from"./chunk-FSUYFWSG.js";import{a as p,b as S,c as x,d as f}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as o,Xa as s,da as d,e as v,gb as e,hb as t,lb as r,tb as n,ub as l,yb as u}from"./chunk-WGQ2ELTG.js";var g=v(C());function h(i,m){if(i&1&&(e(0,"div",9)(1,"h2"),n(2,"Understanding State"),t(),e(3,"div",10)(4,"p")(5,"strong"),n(6,"State"),t(),n(7," is mutable data that belongs to a component and can change over time."),t(),e(8,"ul")(9,"li"),n(10,"useState hook for functional components"),t(),e(11,"li"),n(12,"Returns a state variable and setter function"),t(),e(13,"li"),n(14,"Initial value passed as argument to useState"),t(),e(15,"li"),n(16,"Setting state triggers a re-render"),t(),e(17,"li"),n(18,"State updates are asynchronous"),t(),e(19,"li"),n(20,"Each component has its own state"),t()()(),e(21,"pre")(22,"code",11),n(23),t()()()),i&2){let a=r();o(23),l(a.stateBasics)}}function b(i,m){if(i&1&&(e(0,"div",9)(1,"h2"),n(2,"State with Objects"),t(),e(3,"div",10)(4,"p"),n(5,"When state is an object, always create a new object with spread operator to update it."),t(),e(6,"ul")(7,"li"),n(8,"Always spread existing state when updating"),t(),e(9,"li"),n(10,"React uses shallow comparison for state"),t(),e(11,"li"),n(12,"Don't mutate state directly"),t(),e(13,"li"),n(14,"Use functional updates for safer updates"),t(),e(15,"li"),n(16,"Handle nested objects carefully"),t()()(),e(17,"pre")(18,"code",11),n(19),t()()()),i&2){let a=r();o(19),l(a.stateObjects)}}function E(i,m){if(i&1&&(e(0,"div",9)(1,"h2"),n(2,"State with Arrays"),t(),e(3,"div",10)(4,"p"),n(5,"Managing arrays in state requires creating new arrays instead of mutating existing ones."),t(),e(6,"ul")(7,"li"),n(8,"Use spread operator or array methods that return new arrays"),t(),e(9,"li"),n(10,"Add items: [...array, newItem]"),t(),e(11,"li"),n(12,"Remove items: array.filter()"),t(),e(13,"li"),n(14,"Update items: array.map()"),t(),e(15,"li"),n(16,"Avoid push(), pop(), splice() - they mutate"),t()()(),e(17,"pre")(18,"code",11),n(19),t()()()),i&2){let a=r();o(19),l(a.stateArrays)}}function _(i,m){if(i&1&&(e(0,"div",9)(1,"h2"),n(2,"Functional State Updates"),t(),e(3,"div",12)(4,"p")(5,"strong"),n(6,"Functional updates"),t(),n(7," use the previous state value to calculate the next state, ensuring accuracy."),t(),e(8,"ul")(9,"li"),n(10,"Pass a function to state setter instead of a value"),t(),e(11,"li"),n(12,"Function receives previous state as argument"),t(),e(13,"li"),n(14,"Necessary for multiple state updates"),t(),e(15,"li"),n(16,"Prevents stale closure issues"),t(),e(17,"li"),n(18,"More reliable for computed state changes"),t()()(),e(19,"pre")(20,"code",11),n(21),t()()()),i&2){let a=r();o(21),l(a.functionalUpdates)}}function y(i,m){if(i&1&&(e(0,"div",9)(1,"h2"),n(2,"Lazy Initial State"),t(),e(3,"div",10)(4,"p")(5,"strong"),n(6,"Lazy initialization"),t(),n(7," runs the initialization function only once, not on every render."),t(),e(8,"ul")(9,"li"),n(10,"Pass a function to useState instead of a value"),t(),e(11,"li"),n(12,"Function runs only on initial render"),t(),e(13,"li"),n(14,"Useful for expensive computations"),t(),e(15,"li"),n(16,"Common with localStorage reads"),t(),e(17,"li"),n(18,"Improves performance for heavy initializations"),t()()(),e(19,"pre")(20,"code",11),n(21),t()()()),i&2){let a=r();o(21),l(a.lazyInitialization)}}function w(i,m){if(i&1&&(e(0,"div",9)(1,"h2"),n(2,"State in Class Components"),t(),e(3,"div",13)(4,"p")(5,"strong"),n(6,"Class components"),t(),n(7," use this.state and this.setState() (legacy approach)."),t(),e(8,"ul")(9,"li"),n(10,"Initialize state in constructor"),t(),e(11,"li"),n(12,"this.setState() to update state"),t(),e(13,"li"),n(14,"setState merges object updates automatically"),t(),e(15,"li"),n(16,"Can pass callback to setState"),t(),e(17,"li"),n(18,"Can use functional form of setState"),t(),e(19,"li"),n(20,"Prefer functional components with hooks"),t()()(),e(21,"pre")(22,"code",11),n(23),t()()()),i&2){let a=r();o(23),l(a.classComponentState)}}function P(i,m){if(i&1&&(e(0,"div",9)(1,"h2"),n(2,"State Management Best Practices"),t(),e(3,"div",12)(4,"h3"),n(5,"\u2713 Best Practices"),t(),e(6,"ul")(7,"li"),n(8,"Never mutate state directly"),t(),e(9,"li"),n(10,"Use functional updates when new state depends on previous state"),t(),e(11,"li"),n(12,"Split unrelated state into multiple useState calls"),t(),e(13,"li"),n(14,"Keep state minimal - derive values when possible"),t(),e(15,"li"),n(16,"Use lazy initialization for expensive initial values"),t(),e(17,"li"),n(18,"Prefer simple state structures over complex nested objects"),t(),e(19,"li"),n(20,"Consider useReducer for complex state logic"),t(),e(21,"li"),n(22,"Lift state up when multiple components need it"),t()()(),e(23,"pre")(24,"code",11),n(25),t()()()),i&2){let a=r();o(25),l(a.stateBestPractices)}}var A=(()=>{class i{constructor(){this.stateBasics=`import { useState } from 'react';

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
}`,this.stateObjects=`// State with Objects
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
}`,this.stateArrays=`// State with Arrays
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
}`,this.functionalUpdates=`// Functional Updates
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
}`,this.lazyInitialization=`// Lazy Initial State
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
}`,this.classComponentState=`import React, { Component } from 'react';

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
}`,this.stateBestPractices=`// State Management Best Practices

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
}`}ngAfterViewChecked(){g.highlightAll()}static{this.\u0275fac=function(c){return new(c||i)}}static{this.\u0275cmp=d({type:i,selectors:[["app-react-state"]],standalone:!0,features:[u],decls:20,vars:0,consts:[[1,"container"],["label","State Basics"],["matTabContent",""],["label","Objects"],["label","Arrays"],["label","Functional Updates"],["label","Lazy Initialization"],["label","Class Components"],["label","Best Practices"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],[1,"info-box","success"],[1,"info-box","warning"]],template:function(c,I){c&1&&(e(0,"div",0)(1,"h1"),n(2,"React State"),t(),e(3,"p"),n(4,"State is a built-in React object used to store data that determines how a component renders and behaves. When state changes, the component re-renders to reflect the new state."),t(),e(5,"mat-tab-group")(6,"mat-tab",1),s(7,h,24,1,"ng-template",2),t(),e(8,"mat-tab",3),s(9,b,20,1,"ng-template",2),t(),e(10,"mat-tab",4),s(11,E,20,1,"ng-template",2),t(),e(12,"mat-tab",5),s(13,_,22,1,"ng-template",2),t(),e(14,"mat-tab",6),s(15,y,22,1,"ng-template",2),t(),e(16,"mat-tab",7),s(17,w,24,1,"ng-template",2),t(),e(18,"mat-tab",8),s(19,P,26,1,"ng-template",2),t()()())},dependencies:[f,p,S,x],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return i})();export{A as ReactStateComponent};
