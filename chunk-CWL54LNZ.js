import{b as c,c as m,d as u}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as i,da as l,gb as n,hb as e,tb as t,ub as a,yb as d}from"./chunk-WGQ2ELTG.js";var x=(()=>{class s{constructor(){this.stateBasics=`import { useState } from 'react';

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
}`}ngAfterViewChecked(){Prism.highlightAll()}static{this.\u0275fac=function(r){return new(r||s)}}static{this.\u0275cmp=l({type:s,selectors:[["app-react-state"]],standalone:!0,features:[d],decls:171,vars:7,consts:[[1,"container"],["label","State Basics"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],["label","Objects"],["label","Arrays"],["label","Functional Updates"],[1,"info-box","success"],["label","Lazy Initialization"],["label","Class Components"],[1,"info-box","warning"],["label","Best Practices"]],template:function(r,o){r&1&&(n(0,"div",0)(1,"h1"),t(2,"React State"),e(),n(3,"p"),t(4,"State is a built-in React object used to store data that determines how a component renders and behaves. When state changes, the component re-renders to reflect the new state."),e(),n(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),t(9,"Understanding State"),e(),n(10,"div",3)(11,"p")(12,"strong"),t(13,"State"),e(),t(14," is mutable data that belongs to a component and can change over time."),e(),n(15,"ul")(16,"li"),t(17,"useState hook for functional components"),e(),n(18,"li"),t(19,"Returns a state variable and setter function"),e(),n(20,"li"),t(21,"Initial value passed as argument to useState"),e(),n(22,"li"),t(23,"Setting state triggers a re-render"),e(),n(24,"li"),t(25,"State updates are asynchronous"),e(),n(26,"li"),t(27,"Each component has its own state"),e()()(),n(28,"pre")(29,"code",4),t(30),e()()()(),n(31,"mat-tab",5)(32,"div",2)(33,"h2"),t(34,"State with Objects"),e(),n(35,"div",3)(36,"p"),t(37,"When state is an object, always create a new object with spread operator to update it."),e(),n(38,"ul")(39,"li"),t(40,"Always spread existing state when updating"),e(),n(41,"li"),t(42,"React uses shallow comparison for state"),e(),n(43,"li"),t(44,"Don't mutate state directly"),e(),n(45,"li"),t(46,"Use functional updates for safer updates"),e(),n(47,"li"),t(48,"Handle nested objects carefully"),e()()(),n(49,"pre")(50,"code",4),t(51),e()()()(),n(52,"mat-tab",6)(53,"div",2)(54,"h2"),t(55,"State with Arrays"),e(),n(56,"div",3)(57,"p"),t(58,"Managing arrays in state requires creating new arrays instead of mutating existing ones."),e(),n(59,"ul")(60,"li"),t(61,"Use spread operator or array methods that return new arrays"),e(),n(62,"li"),t(63,"Add items: [...array, newItem]"),e(),n(64,"li"),t(65,"Remove items: array.filter()"),e(),n(66,"li"),t(67,"Update items: array.map()"),e(),n(68,"li"),t(69,"Avoid push(), pop(), splice() - they mutate"),e()()(),n(70,"pre")(71,"code",4),t(72),e()()()(),n(73,"mat-tab",7)(74,"div",2)(75,"h2"),t(76,"Functional State Updates"),e(),n(77,"div",8)(78,"p")(79,"strong"),t(80,"Functional updates"),e(),t(81," use the previous state value to calculate the next state, ensuring accuracy."),e(),n(82,"ul")(83,"li"),t(84,"Pass a function to state setter instead of a value"),e(),n(85,"li"),t(86,"Function receives previous state as argument"),e(),n(87,"li"),t(88,"Necessary for multiple state updates"),e(),n(89,"li"),t(90,"Prevents stale closure issues"),e(),n(91,"li"),t(92,"More reliable for computed state changes"),e()()(),n(93,"pre")(94,"code",4),t(95),e()()()(),n(96,"mat-tab",9)(97,"div",2)(98,"h2"),t(99,"Lazy Initial State"),e(),n(100,"div",3)(101,"p")(102,"strong"),t(103,"Lazy initialization"),e(),t(104," runs the initialization function only once, not on every render."),e(),n(105,"ul")(106,"li"),t(107,"Pass a function to useState instead of a value"),e(),n(108,"li"),t(109,"Function runs only on initial render"),e(),n(110,"li"),t(111,"Useful for expensive computations"),e(),n(112,"li"),t(113,"Common with localStorage reads"),e(),n(114,"li"),t(115,"Improves performance for heavy initializations"),e()()(),n(116,"pre")(117,"code",4),t(118),e()()()(),n(119,"mat-tab",10)(120,"div",2)(121,"h2"),t(122,"State in Class Components"),e(),n(123,"div",11)(124,"p")(125,"strong"),t(126,"Class components"),e(),t(127," use this.state and this.setState() (legacy approach)."),e(),n(128,"ul")(129,"li"),t(130,"Initialize state in constructor"),e(),n(131,"li"),t(132,"this.setState() to update state"),e(),n(133,"li"),t(134,"setState merges object updates automatically"),e(),n(135,"li"),t(136,"Can pass callback to setState"),e(),n(137,"li"),t(138,"Can use functional form of setState"),e(),n(139,"li"),t(140,"Prefer functional components with hooks"),e()()(),n(141,"pre")(142,"code",4),t(143),e()()()(),n(144,"mat-tab",12)(145,"div",2)(146,"h2"),t(147,"State Management Best Practices"),e(),n(148,"div",8)(149,"h3"),t(150,"\u2713 Best Practices"),e(),n(151,"ul")(152,"li"),t(153,"Never mutate state directly"),e(),n(154,"li"),t(155,"Use functional updates when new state depends on previous state"),e(),n(156,"li"),t(157,"Split unrelated state into multiple useState calls"),e(),n(158,"li"),t(159,"Keep state minimal - derive values when possible"),e(),n(160,"li"),t(161,"Use lazy initialization for expensive initial values"),e(),n(162,"li"),t(163,"Prefer simple state structures over complex nested objects"),e(),n(164,"li"),t(165,"Consider useReducer for complex state logic"),e(),n(166,"li"),t(167,"Lift state up when multiple components need it"),e()()(),n(168,"pre")(169,"code",4),t(170),e()()()()()()),r&2&&(i(30),a(o.stateBasics),i(21),a(o.stateObjects),i(21),a(o.stateArrays),i(23),a(o.functionalUpdates),i(23),a(o.lazyInitialization),i(25),a(o.classComponentState),i(27),a(o.stateBestPractices))},dependencies:[u,c,m],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;color:#abb2bf;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return s})();export{x as ReactStateComponent};
