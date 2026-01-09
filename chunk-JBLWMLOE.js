import{b as m,c as u,d}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as o,da as c,gb as n,hb as e,tb as t,ub as i,yb as l}from"./chunk-WGQ2ELTG.js";var h=(()=>{class r{constructor(){this.redux=`// Redux - Predictable State Container
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Action Types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Action Creators
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

// Reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Store
const store = createStore(counterReducer);

// Component
function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

// App
function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}`,this.reduxToolkit=`// Redux Toolkit - Modern Redux
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => {
      state.value += 1; // Immer allows mutations
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

// Component
function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}`,this.zustand=`// Zustand - Lightweight State Management
import create from 'zustand';

// Store
const useStore = create((set) => ({
  count: 0,
  user: null,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  setUser: (user) => set({ user }),
  reset: () => set({ count: 0, user: null })
}));

// Component
function Counter() {
  const count = useStore(state => state.count);
  const increment = useStore(state => state.increment);
  const decrement = useStore(state => state.decrement);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

// Multiple components can access the same store
function User() {
  const user = useStore(state => state.user);
  const setUser = useStore(state => state.setUser);

  return (
    <div>
      {user ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <button onClick={() => setUser({ name: 'John' })}>Login</button>
      )}
    </div>
  );
}

// Middleware example
const useStoreWithMiddleware = create((set) => ({
  count: 0,
  increment: () => set((state) => {
    console.log('Before:', state.count);
    const newState = { count: state.count + 1 };
    console.log('After:', newState.count);
    return newState;
  })
}));`,this.jotai=`// Jotai - Primitive and Flexible State
import { atom, useAtom } from 'jotai';

// Atoms (pieces of state)
const countAtom = atom(0);
const userAtom = atom({ name: '', email: '' });

// Derived atoms
const doubleCountAtom = atom(
  (get) => get(countAtom) * 2
);

// Write-only atoms
const incrementAtom = atom(
  null,
  (get, set) => set(countAtom, get(countAtom) + 1)
);

// Component
function Counter() {
  const [count, setCount] = useAtom(countAtom);
  const [doubleCount] = useAtom(doubleCountAtom);

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Double: {doubleCount}</h2>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <button onClick={() => setCount(c => c - 1)}>-</button>
    </div>
  );
}

// Async atoms
const fetchUserAtom = atom(async () => {
  const res = await fetch('/api/user');
  return res.json();
});

function UserProfile() {
  const [user] = useAtom(fetchUserAtom);
  return <div>{user.name}</div>;
}`,this.recoil=`// Recoil - Facebook's State Management
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { RecoilRoot } from 'recoil';

// Atoms
const countState = atom({
  key: 'countState',
  default: 0
});

const userState = atom({
  key: 'userState',
  default: { name: '', email: '' }
});

// Selectors (derived state)
const doubleCountState = selector({
  key: 'doubleCountState',
  get: ({ get }) => {
    const count = get(countState);
    return count * 2;
  }
});

// Component
function Counter() {
  const [count, setCount] = useRecoilState(countState);
  const doubleCount = useRecoilValue(doubleCountState);

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Double: {doubleCount}</h2>
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </div>
  );
}

// Async selectors
const currentUserQuery = selector({
  key: 'currentUserQuery',
  get: async () => {
    const res = await fetch('/api/user');
    return res.json();
  }
});

// App wrapper
function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}`,this.mobx=`// MobX - Observable State
import { makeObservable, observable, action, computed } from 'mobx';
import { observer } from 'mobx-react-lite';

// Store class
class CounterStore {
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      increment: action,
      decrement: action,
      doubleCount: computed
    });
  }

  increment = () => {
    this.count++;
  };

  decrement = () => {
    this.count--;
  };

  get doubleCount() {
    return this.count * 2;
  }
}

const store = new CounterStore();

// Component (observer makes it reactive)
const Counter = observer(() => {
  return (
    <div>
      <h1>{store.count}</h1>
      <h2>Double: {store.doubleCount}</h2>
      <button onClick={store.increment}>+</button>
      <button onClick={store.decrement}>-</button>
    </div>
  );
});

// React hooks API
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';

class Timer {
  secondsPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.secondsPassed += 1;
  }

  reset() {
    this.secondsPassed = 0;
  }
}

const timer = new Timer();

const TimerView = observer(() => (
  <div>
    <p>Seconds: {timer.secondsPassed}</p>
    <button onClick={() => timer.increase()}>Increase</button>
    <button onClick={() => timer.reset()}>Reset</button>
  </div>
));`,this.contextReducer=`// Context + useReducer Pattern
import { createContext, useContext, useReducer, ReactNode } from 'react';

// State and actions
interface State {
  user: User | null;
  theme: 'light' | 'dark';
  notifications: Notification[];
}

type Action =
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'TOGGLE_THEME' }
  | { type: 'ADD_NOTIFICATION'; payload: Notification };

// Reducer
function appReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'ADD_NOTIFICATION':
      return { ...state, notifications: [...state.notifications, action.payload] };
    default:
      return state;
  }
}

// Context
const AppContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

// Provider
export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, {
    user: null,
    theme: 'light',
    notifications: []
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook
export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}

// Usage
function Header() {
  const { state, dispatch } = useApp();

  return (
    <header className={state.theme}>
      {state.user ? (
        <div>
          <span>{state.user.name}</span>
          <button onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</button>
        </div>
      ) : (
        <button>Login</button>
      )}
      <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
        Toggle Theme
      </button>
    </header>
  );
}`,this.comparison=`// State Management Comparison

// \u2705 Redux Toolkit - Best for:
// - Large applications
// - Complex state logic
// - Time-travel debugging
// - Strict patterns
// - Team consistency

// \u2705 Zustand - Best for:
// - Small to medium apps
// - Simple API
// - No boilerplate
// - Fast setup
// - Modern approach

// \u2705 Jotai - Best for:
// - Atomic state management
// - Bottom-up approach
// - React Suspense integration
// - Derived state
// - Minimal bundle size

// \u2705 Recoil - Best for:
// - Facebook-style approach
// - Atoms and selectors
// - Async state
// - Experimental features
// - Graph-based state

// \u2705 MobX - Best for:
// - OOP style
// - Automatic reactivity
// - Less boilerplate
// - Observable patterns
// - Enterprise apps

// \u2705 Context + useReducer - Best for:
// - Built-in solution
// - No dependencies
// - Small apps
// - Simple global state
// - Learning basics

// Performance Comparison:
// Zustand \u2248 Jotai > Context > Redux Toolkit > Recoil > MobX

// Bundle Size (approximate):
// Zustand: ~1KB
// Jotai: ~3KB
// Redux Toolkit: ~12KB
// Recoil: ~21KB
// MobX: ~17KB
// Context: 0KB (built-in)`}static{this.\u0275fac=function(s){return new(s||r)}}static{this.\u0275cmp=c({type:r,selectors:[["app-react-statemanagement"]],standalone:!0,features:[l],decls:174,vars:8,consts:[[1,"container"],["label","Redux"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],["label","Redux Toolkit"],["label","Zustand"],["label","Jotai"],["label","Recoil"],["label","MobX"],["label","Context + Reducer"],[1,"language-tsx"],["label","Comparison"]],template:function(s,a){s&1&&(n(0,"div",0)(1,"h1"),t(2,"React State Management"),e(),n(3,"p"),t(4,"Learn popular state management solutions for React applications."),e(),n(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),t(9,"Redux - Predictable State Container"),e(),n(10,"div",3)(11,"p")(12,"strong"),t(13,"Redux"),e(),t(14," is a predictable state container with a single source of truth."),e(),n(15,"ul")(16,"li"),t(17,"Single store for entire app"),e(),n(18,"li"),t(19,"Actions describe state changes"),e(),n(20,"li"),t(21,"Reducers specify state updates"),e(),n(22,"li"),t(23,"Time-travel debugging"),e()()(),n(24,"pre")(25,"code",4),t(26),e()()()(),n(27,"mat-tab",5)(28,"div",2)(29,"h2"),t(30,"Redux Toolkit - Modern Redux"),e(),n(31,"div",3)(32,"p")(33,"strong"),t(34,"Redux Toolkit"),e(),t(35," simplifies Redux with less boilerplate and built-in best practices."),e(),n(36,"ul")(37,"li"),t(38,"createSlice for reducers & actions"),e(),n(39,"li"),t(40,"Immer for immutable updates"),e(),n(41,"li"),t(42,"configureStore with defaults"),e(),n(43,"li"),t(44,"TypeScript support built-in"),e()()(),n(45,"pre")(46,"code",4),t(47),e()()()(),n(48,"mat-tab",6)(49,"div",2)(50,"h2"),t(51,"Zustand - Lightweight State"),e(),n(52,"div",3)(53,"p")(54,"strong"),t(55,"Zustand"),e(),t(56," is a small, fast state management solution with minimal API."),e(),n(57,"ul")(58,"li"),t(59,"Very small bundle (~1KB)"),e(),n(60,"li"),t(61,"No providers needed"),e(),n(62,"li"),t(63,"Simple hook-based API"),e(),n(64,"li"),t(65,"Built-in middleware support"),e()()(),n(66,"pre")(67,"code",4),t(68),e()()()(),n(69,"mat-tab",7)(70,"div",2)(71,"h2"),t(72,"Jotai - Primitive State"),e(),n(73,"div",3)(74,"p")(75,"strong"),t(76,"Jotai"),e(),t(77," takes an atomic approach to state management with bottom-up composition."),e(),n(78,"ul")(79,"li"),t(80,"Atomic state pieces"),e(),n(81,"li"),t(82,"Derived atoms"),e(),n(83,"li"),t(84,"React Suspense integration"),e(),n(85,"li"),t(86,"No string keys needed"),e()()(),n(87,"pre")(88,"code",4),t(89),e()()()(),n(90,"mat-tab",8)(91,"div",2)(92,"h2"),t(93,"Recoil - Facebook's Solution"),e(),n(94,"div",3)(95,"p")(96,"strong"),t(97,"Recoil"),e(),t(98," provides graph-based state management from the React team at Facebook."),e(),n(99,"ul")(100,"li"),t(101,"Atoms for state pieces"),e(),n(102,"li"),t(103,"Selectors for derived state"),e(),n(104,"li"),t(105,"Async state handling"),e(),n(106,"li"),t(107,"Built for React's future"),e()()(),n(108,"pre")(109,"code",4),t(110),e()()()(),n(111,"mat-tab",9)(112,"div",2)(113,"h2"),t(114,"MobX - Observable State"),e(),n(115,"div",3)(116,"p")(117,"strong"),t(118,"MobX"),e(),t(119," makes state management simple with automatic reactivity and observables."),e(),n(120,"ul")(121,"li"),t(122,"OOP-style state management"),e(),n(123,"li"),t(124,"Automatic re-rendering"),e(),n(125,"li"),t(126,"Computed values"),e(),n(127,"li"),t(128,"Decorators or makeObservable"),e()()(),n(129,"pre")(130,"code",4),t(131),e()()()(),n(132,"mat-tab",10)(133,"div",2)(134,"h2"),t(135,"Context + useReducer Pattern"),e(),n(136,"div",3)(137,"p")(138,"strong"),t(139,"Built-in solution"),e(),t(140," using React's Context API with useReducer hook."),e(),n(141,"ul")(142,"li"),t(143,"No external dependencies"),e(),n(144,"li"),t(145,"Similar to Redux pattern"),e(),n(146,"li"),t(147,"Good for medium apps"),e(),n(148,"li"),t(149,"Performance considerations"),e()()(),n(150,"pre")(151,"code",11),t(152),e()()()(),n(153,"mat-tab",12)(154,"div",2)(155,"h2"),t(156,"State Management Comparison"),e(),n(157,"div",3)(158,"p")(159,"strong"),t(160,"Choose the right tool"),e(),t(161," based on your application's needs and complexity."),e(),n(162,"ul")(163,"li"),t(164,"Consider bundle size impact"),e(),n(165,"li"),t(166,"Team familiarity"),e(),n(167,"li"),t(168,"App complexity"),e(),n(169,"li"),t(170,"Performance requirements"),e()()(),n(171,"pre")(172,"code",4),t(173),e()()()()()()),s&2&&(o(26),i(a.redux),o(21),i(a.reduxToolkit),o(21),i(a.zustand),o(21),i(a.jotai),o(21),i(a.recoil),o(21),i(a.mobx),o(21),i(a.contextReducer),o(21),i(a.comparison))},dependencies:[d,m,u],styles:[".container[_ngcontent-%COMP%]{padding:2rem;max-width:1200px;margin:0 auto}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#333;margin-bottom:.5rem}.container[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#666;margin-bottom:2rem;font-size:1.1rem}.tab-content[_ngcontent-%COMP%]{padding:1.5rem 0}.tab-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#333;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]{background:#f8f9fa;border-left:4px solid #764abc;padding:1rem;margin-bottom:1.5rem;border-radius:4px}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:.5rem;color:#333}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:.5rem 0 0 1.5rem;color:#666}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:.25rem 0}.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:#282c34;border-radius:8px;padding:1.5rem;overflow-x:auto;margin:1rem 0}.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#abb2bf;font-family:Fira Code,Consolas,monospace;font-size:.9rem;line-height:1.6}"]})}}return r})();export{h as ReactStatemanagementComponent};
