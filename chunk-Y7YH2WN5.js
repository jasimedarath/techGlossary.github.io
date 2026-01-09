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

// src/app/components/react/react-statemanagement/react-statemanagement.component.ts
var ReactStatemanagementComponent = class _ReactStatemanagementComponent {
  constructor() {
    this.redux = `// Redux - Predictable State Container
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
}`;
    this.reduxToolkit = `// Redux Toolkit - Modern Redux
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
}`;
    this.zustand = `// Zustand - Lightweight State Management
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
}));`;
    this.jotai = `// Jotai - Primitive and Flexible State
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
}`;
    this.recoil = `// Recoil - Facebook's State Management
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
}`;
    this.mobx = `// MobX - Observable State
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
));`;
    this.contextReducer = `// Context + useReducer Pattern
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
}`;
    this.comparison = `// State Management Comparison

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
// Context: 0KB (built-in)`;
  }
  static {
    this.\u0275fac = function ReactStatemanagementComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReactStatemanagementComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReactStatemanagementComponent, selectors: [["app-react-statemanagement"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 174, vars: 8, consts: [[1, "container"], ["label", "Redux"], [1, "tab-content"], [1, "info-box"], [1, "language-jsx"], ["label", "Redux Toolkit"], ["label", "Zustand"], ["label", "Jotai"], ["label", "Recoil"], ["label", "MobX"], ["label", "Context + Reducer"], [1, "language-tsx"], ["label", "Comparison"]], template: function ReactStatemanagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "React State Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Learn popular state management solutions for React applications.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "Redux - Predictable State Container");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "Redux");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " is a predictable state container with a single source of truth.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "Single store for entire app");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "Actions describe state changes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li");
        \u0275\u0275text(21, "Reducers specify state updates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275text(23, "Time-travel debugging");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "pre")(25, "code", 4);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "mat-tab", 5)(28, "div", 2)(29, "h2");
        \u0275\u0275text(30, "Redux Toolkit - Modern Redux");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 3)(32, "p")(33, "strong");
        \u0275\u0275text(34, "Redux Toolkit");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " simplifies Redux with less boilerplate and built-in best practices.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "ul")(37, "li");
        \u0275\u0275text(38, "createSlice for reducers & actions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "li");
        \u0275\u0275text(40, "Immer for immutable updates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "li");
        \u0275\u0275text(42, "configureStore with defaults");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li");
        \u0275\u0275text(44, "TypeScript support built-in");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "pre")(46, "code", 4);
        \u0275\u0275text(47);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(48, "mat-tab", 6)(49, "div", 2)(50, "h2");
        \u0275\u0275text(51, "Zustand - Lightweight State");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 3)(53, "p")(54, "strong");
        \u0275\u0275text(55, "Zustand");
        \u0275\u0275elementEnd();
        \u0275\u0275text(56, " is a small, fast state management solution with minimal API.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "ul")(58, "li");
        \u0275\u0275text(59, "Very small bundle (~1KB)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "li");
        \u0275\u0275text(61, "No providers needed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "li");
        \u0275\u0275text(63, "Simple hook-based API");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "li");
        \u0275\u0275text(65, "Built-in middleware support");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(66, "pre")(67, "code", 4);
        \u0275\u0275text(68);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(69, "mat-tab", 7)(70, "div", 2)(71, "h2");
        \u0275\u0275text(72, "Jotai - Primitive State");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 3)(74, "p")(75, "strong");
        \u0275\u0275text(76, "Jotai");
        \u0275\u0275elementEnd();
        \u0275\u0275text(77, " takes an atomic approach to state management with bottom-up composition.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "ul")(79, "li");
        \u0275\u0275text(80, "Atomic state pieces");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "li");
        \u0275\u0275text(82, "Derived atoms");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "li");
        \u0275\u0275text(84, "React Suspense integration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "li");
        \u0275\u0275text(86, "No string keys needed");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(87, "pre")(88, "code", 4);
        \u0275\u0275text(89);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(90, "mat-tab", 8)(91, "div", 2)(92, "h2");
        \u0275\u0275text(93, "Recoil - Facebook's Solution");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "div", 3)(95, "p")(96, "strong");
        \u0275\u0275text(97, "Recoil");
        \u0275\u0275elementEnd();
        \u0275\u0275text(98, " provides graph-based state management from the React team at Facebook.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "ul")(100, "li");
        \u0275\u0275text(101, "Atoms for state pieces");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "li");
        \u0275\u0275text(103, "Selectors for derived state");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "li");
        \u0275\u0275text(105, "Async state handling");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "li");
        \u0275\u0275text(107, "Built for React's future");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(108, "pre")(109, "code", 4);
        \u0275\u0275text(110);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(111, "mat-tab", 9)(112, "div", 2)(113, "h2");
        \u0275\u0275text(114, "MobX - Observable State");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "div", 3)(116, "p")(117, "strong");
        \u0275\u0275text(118, "MobX");
        \u0275\u0275elementEnd();
        \u0275\u0275text(119, " makes state management simple with automatic reactivity and observables.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "ul")(121, "li");
        \u0275\u0275text(122, "OOP-style state management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "li");
        \u0275\u0275text(124, "Automatic re-rendering");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "li");
        \u0275\u0275text(126, "Computed values");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "li");
        \u0275\u0275text(128, "Decorators or makeObservable");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(129, "pre")(130, "code", 4);
        \u0275\u0275text(131);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(132, "mat-tab", 10)(133, "div", 2)(134, "h2");
        \u0275\u0275text(135, "Context + useReducer Pattern");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "div", 3)(137, "p")(138, "strong");
        \u0275\u0275text(139, "Built-in solution");
        \u0275\u0275elementEnd();
        \u0275\u0275text(140, " using React's Context API with useReducer hook.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "ul")(142, "li");
        \u0275\u0275text(143, "No external dependencies");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "li");
        \u0275\u0275text(145, "Similar to Redux pattern");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "li");
        \u0275\u0275text(147, "Good for medium apps");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "li");
        \u0275\u0275text(149, "Performance considerations");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(150, "pre")(151, "code", 11);
        \u0275\u0275text(152);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(153, "mat-tab", 12)(154, "div", 2)(155, "h2");
        \u0275\u0275text(156, "State Management Comparison");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "div", 3)(158, "p")(159, "strong");
        \u0275\u0275text(160, "Choose the right tool");
        \u0275\u0275elementEnd();
        \u0275\u0275text(161, " based on your application's needs and complexity.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "ul")(163, "li");
        \u0275\u0275text(164, "Consider bundle size impact");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "li");
        \u0275\u0275text(166, "Team familiarity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "li");
        \u0275\u0275text(168, "App complexity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(169, "li");
        \u0275\u0275text(170, "Performance requirements");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(171, "pre")(172, "code", 4);
        \u0275\u0275text(173);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(26);
        \u0275\u0275textInterpolate(ctx.redux);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.reduxToolkit);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.zustand);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.jotai);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.recoil);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.mobx);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.contextReducer);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.comparison);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 0.5rem;\n}\n.container[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 2rem;\n  font-size: 1.1rem;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 1.5rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-left: 4px solid #764abc;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  border-radius: 4px;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  color: #333;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0 1.5rem;\n  color: #666;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background: #282c34;\n  border-radius: 8px;\n  padding: 1.5rem;\n  overflow-x: auto;\n  margin: 1rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #abb2bf;\n  font-family:\n    "Fira Code",\n    "Consolas",\n    monospace;\n  font-size: 0.9rem;\n  line-height: 1.6;\n}\n/*# sourceMappingURL=react-statemanagement.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReactStatemanagementComponent, { className: "ReactStatemanagementComponent", filePath: "src\\app\\components\\react\\react-statemanagement\\react-statemanagement.component.ts", lineNumber: 11 });
})();
export {
  ReactStatemanagementComponent
};
//# sourceMappingURL=chunk-Y7YH2WN5.js.map
