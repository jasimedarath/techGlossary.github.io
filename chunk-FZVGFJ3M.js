import{a as p,b as x,c as b,d as S}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as a,Xa as r,da as u,gb as t,hb as e,lb as s,tb as n,ub as c,yb as d}from"./chunk-WGQ2ELTG.js";function g(o,l){if(o&1&&(t(0,"div",10)(1,"h2"),n(2,"Redux - Predictable State Container"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Redux"),e(),n(7," is a predictable state container with a single source of truth."),e(),t(8,"ul")(9,"li"),n(10,"Single store for entire app"),e(),t(11,"li"),n(12,"Actions describe state changes"),e(),t(13,"li"),n(14,"Reducers specify state updates"),e(),t(15,"li"),n(16,"Time-travel debugging"),e()()(),t(17,"pre")(18,"code",12),n(19),e()()()),o&2){let i=s();a(19),c(i.redux)}}function f(o,l){if(o&1&&(t(0,"div",10)(1,"h2"),n(2,"Redux Toolkit - Modern Redux"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Redux Toolkit"),e(),n(7," simplifies Redux with less boilerplate and built-in best practices."),e(),t(8,"ul")(9,"li"),n(10,"createSlice for reducers & actions"),e(),t(11,"li"),n(12,"Immer for immutable updates"),e(),t(13,"li"),n(14,"configureStore with defaults"),e(),t(15,"li"),n(16,"TypeScript support built-in"),e()()(),t(17,"pre")(18,"code",12),n(19),e()()()),o&2){let i=s();a(19),c(i.reduxToolkit)}}function C(o,l){if(o&1&&(t(0,"div",10)(1,"h2"),n(2,"Zustand - Lightweight State"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Zustand"),e(),n(7," is a small, fast state management solution with minimal API."),e(),t(8,"ul")(9,"li"),n(10,"Very small bundle (~1KB)"),e(),t(11,"li"),n(12,"No providers needed"),e(),t(13,"li"),n(14,"Simple hook-based API"),e(),t(15,"li"),n(16,"Built-in middleware support"),e()()(),t(17,"pre")(18,"code",12),n(19),e()()()),o&2){let i=s();a(19),c(i.zustand)}}function h(o,l){if(o&1&&(t(0,"div",10)(1,"h2"),n(2,"Jotai - Primitive State"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Jotai"),e(),n(7," takes an atomic approach to state management with bottom-up composition."),e(),t(8,"ul")(9,"li"),n(10,"Atomic state pieces"),e(),t(11,"li"),n(12,"Derived atoms"),e(),t(13,"li"),n(14,"React Suspense integration"),e(),t(15,"li"),n(16,"No string keys needed"),e()()(),t(17,"pre")(18,"code",12),n(19),e()()()),o&2){let i=s();a(19),c(i.jotai)}}function E(o,l){if(o&1&&(t(0,"div",10)(1,"h2"),n(2,"Recoil - Facebook's Solution"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Recoil"),e(),n(7," provides graph-based state management from the React team at Facebook."),e(),t(8,"ul")(9,"li"),n(10,"Atoms for state pieces"),e(),t(11,"li"),n(12,"Selectors for derived state"),e(),t(13,"li"),n(14,"Async state handling"),e(),t(15,"li"),n(16,"Built for React's future"),e()()(),t(17,"pre")(18,"code",12),n(19),e()()()),o&2){let i=s();a(19),c(i.recoil)}}function v(o,l){if(o&1&&(t(0,"div",10)(1,"h2"),n(2,"MobX - Observable State"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"MobX"),e(),n(7," makes state management simple with automatic reactivity and observables."),e(),t(8,"ul")(9,"li"),n(10,"OOP-style state management"),e(),t(11,"li"),n(12,"Automatic re-rendering"),e(),t(13,"li"),n(14,"Computed values"),e(),t(15,"li"),n(16,"Decorators or makeObservable"),e()()(),t(17,"pre")(18,"code",12),n(19),e()()()),o&2){let i=s();a(19),c(i.mobx)}}function R(o,l){if(o&1&&(t(0,"div",10)(1,"h2"),n(2,"Context + useReducer Pattern"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Built-in solution"),e(),n(7," using React's Context API with useReducer hook."),e(),t(8,"ul")(9,"li"),n(10,"No external dependencies"),e(),t(11,"li"),n(12,"Similar to Redux pattern"),e(),t(13,"li"),n(14,"Good for medium apps"),e(),t(15,"li"),n(16,"Performance considerations"),e()()(),t(17,"pre")(18,"code",13),n(19),e()()()),o&2){let i=s();a(19),c(i.contextReducer)}}function _(o,l){if(o&1&&(t(0,"div",10)(1,"h2"),n(2,"State Management Comparison"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Choose the right tool"),e(),n(7," based on your application's needs and complexity."),e(),t(8,"ul")(9,"li"),n(10,"Consider bundle size impact"),e(),t(11,"li"),n(12,"Team familiarity"),e(),t(13,"li"),n(14,"App complexity"),e(),t(15,"li"),n(16,"Performance requirements"),e()()(),t(17,"pre")(18,"code",12),n(19),e()()()),o&2){let i=s();a(19),c(i.comparison)}}var y=(()=>{class o{constructor(){this.redux=`// Redux - Predictable State Container
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
// Context: 0KB (built-in)`}static{this.\u0275fac=function(m){return new(m||o)}}static{this.\u0275cmp=u({type:o,selectors:[["app-react-statemanagement"]],standalone:!0,features:[d],decls:22,vars:0,consts:[[1,"container"],["label","Redux"],["matTabContent",""],["label","Redux Toolkit"],["label","Zustand"],["label","Jotai"],["label","Recoil"],["label","MobX"],["label","Context + Reducer"],["label","Comparison"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],[1,"language-tsx"]],template:function(m,A){m&1&&(t(0,"div",0)(1,"h1"),n(2,"React State Management"),e(),t(3,"p"),n(4,"Learn popular state management solutions for React applications."),e(),t(5,"mat-tab-group")(6,"mat-tab",1),r(7,g,20,1,"ng-template",2),e(),t(8,"mat-tab",3),r(9,f,20,1,"ng-template",2),e(),t(10,"mat-tab",4),r(11,C,20,1,"ng-template",2),e(),t(12,"mat-tab",5),r(13,h,20,1,"ng-template",2),e(),t(14,"mat-tab",6),r(15,E,20,1,"ng-template",2),e(),t(16,"mat-tab",7),r(17,v,20,1,"ng-template",2),e(),t(18,"mat-tab",8),r(19,R,20,1,"ng-template",2),e(),t(20,"mat-tab",9),r(21,_,20,1,"ng-template",2),e()()())},dependencies:[S,p,x,b],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return o})();export{y as ReactStatemanagementComponent};
