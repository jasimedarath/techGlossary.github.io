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

// src/app/components/react/react-context/react-context.component.ts
var ReactContextComponent = class _ReactContextComponent {
  constructor() {
    this.contextBasics = `import { createContext, useContext, useState } from 'react';

// Create Context
const ThemeContext = createContext();

// Provider Component
function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
      <Content />
    </ThemeContext.Provider>
  );
}

// Consumer Component
function Toolbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme (Current: {theme})
    </button>
  );
}`;
    this.providerPattern = `// Custom Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  const value = { theme, setTheme, toggleTheme };
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Usage
function App() {
  return (
    <ThemeProvider>
      <Header />
      <Main />
    </ThemeProvider>
  );
}`;
    this.customHook = `// Custom Hook for Context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom Hook
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// Usage
function Header() {
  const { theme, setTheme } = useTheme();
  return <div className={theme}>Header</div>;
}`;
    this.multipleContexts = `// Multiple Contexts
const UserContext = createContext();
const SettingsContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [settings, setSettings] = useState({});
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <SettingsContext.Provider value={{ settings, setSettings }}>
        <Dashboard />
      </SettingsContext.Provider>
    </UserContext.Provider>
  );
}

// Using multiple contexts
function Dashboard() {
  const { user } = useContext(UserContext);
  const { settings } = useContext(SettingsContext);
  
  return <div>Welcome {user?.name}</div>;
}`;
    this.contextWithReducer = `// Context with useReducer
const StateContext = createContext();

function stateReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
}

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(stateReducer, {
    user: null,
    theme: 'light'
  });
  
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}`;
    this.performance = `// Performance Optimization
// 1. Memoize context value
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const value = useMemo(() => ({ theme, setTheme }), [theme]);
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// 2. Split contexts to avoid unnecessary re-renders
const UserStateContext = createContext();
const UserDispatchContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  
  return (
    <UserStateContext.Provider value={user}>
      <UserDispatchContext.Provider value={setUser}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}`;
    this.realWorldExample = `// Real-world Auth Context
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      fetchUser(token).then(setUser).finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);
  
  const login = async (email, password) => {
    const user = await api.login(email, password);
    setUser(user);
    localStorage.setItem('token', user.token);
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };
  
  const value = { user, loading, login, logout };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be within AuthProvider');
  return context;
}`;
    this.bestPractices = `// Context Best Practices

// 1. Create custom hooks for contexts
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be within Provider');
  return context;
}

// 2. Separate state and dispatch contexts for optimization
const StateContext = createContext();
const DispatchContext = createContext();

// 3. Memoize context values
const value = useMemo(() => ({ state, dispatch }), [state]);

// 4. Split large contexts into smaller ones
// Instead of one AppContext, use:
// - AuthContext
// - ThemeContext
// - SettingsContext

// 5. Don't overuse Context
// Use Context for truly global state
// Use props for component-specific data
// Consider state management libraries for complex apps (Redux, Zustand)`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function ReactContextComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReactContextComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReactContextComponent, selectors: [["app-react-context"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 182, vars: 8, consts: [[1, "container"], ["label", "Context Basics"], [1, "tab-content"], [1, "info-box"], [1, "language-jsx"], ["label", "Provider Pattern"], ["label", "Custom Hooks"], [1, "info-box", "success"], ["label", "Multiple Contexts"], ["label", "With Reducer"], ["label", "Performance"], [1, "info-box", "warning"], ["label", "Real Example"], ["label", "Best Practices"]], template: function ReactContextComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "React Context API");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, `Context provides a way to pass data through the component tree without having to pass props down manually at every level. It's designed to share data that can be considered "global" for a tree of React components.`);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "Creating and Using Context");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "Context");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " lets you pass data deep into the component tree without prop drilling.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "Create context with createContext()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "Provide value with Provider component");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li");
        \u0275\u0275text(21, "Consume value with useContext hook");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275text(23, "Avoids prop drilling through intermediate components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "li");
        \u0275\u0275text(25, "Value accessible to all nested consumers");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "pre")(27, "code", 4);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(29, "mat-tab", 5)(30, "div", 2)(31, "h2");
        \u0275\u0275text(32, "Custom Provider Component");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 3)(34, "p");
        \u0275\u0275text(35, "Create a custom Provider component to encapsulate context logic.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "ul")(37, "li");
        \u0275\u0275text(38, "Wrap context logic in dedicated component");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "li");
        \u0275\u0275text(40, "Manage state within provider");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "li");
        \u0275\u0275text(42, "Expose multiple values and functions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li");
        \u0275\u0275text(44, "Cleaner, more maintainable code");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "li");
        \u0275\u0275text(46, "Reusable across applications");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "pre")(48, "code", 4);
        \u0275\u0275text(49);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(50, "mat-tab", 6)(51, "div", 2)(52, "h2");
        \u0275\u0275text(53, "Custom Hook for Context");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "div", 7)(55, "p");
        \u0275\u0275text(56, "Create custom hooks to access context with error handling.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "ul")(58, "li");
        \u0275\u0275text(59, "Cleaner consumer API");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "li");
        \u0275\u0275text(61, "Built-in error handling");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "li");
        \u0275\u0275text(63, "Enforce provider usage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "li");
        \u0275\u0275text(65, "Better developer experience");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "li");
        \u0275\u0275text(67, "Standard pattern in React apps");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(68, "pre")(69, "code", 4);
        \u0275\u0275text(70);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(71, "mat-tab", 8)(72, "div", 2)(73, "h2");
        \u0275\u0275text(74, "Using Multiple Contexts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "div", 3)(76, "p");
        \u0275\u0275text(77, "An application can use multiple contexts for different concerns.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "ul")(79, "li");
        \u0275\u0275text(80, "Separate contexts for different data domains");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "li");
        \u0275\u0275text(82, "Nest multiple providers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "li");
        \u0275\u0275text(84, "Each component can consume multiple contexts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "li");
        \u0275\u0275text(86, "Better separation of concerns");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "li");
        \u0275\u0275text(88, "More maintainable code structure");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(89, "pre")(90, "code", 4);
        \u0275\u0275text(91);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(92, "mat-tab", 9)(93, "div", 2)(94, "h2");
        \u0275\u0275text(95, "Context with useReducer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "div", 3)(97, "p");
        \u0275\u0275text(98, "Combine Context API with useReducer for complex state management.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "ul")(100, "li");
        \u0275\u0275text(101, "useReducer for complex state logic");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "li");
        \u0275\u0275text(103, "Context to share state globally");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "li");
        \u0275\u0275text(105, "Similar pattern to Redux");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "li");
        \u0275\u0275text(107, "Actions for state updates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "li");
        \u0275\u0275text(109, "Predictable state changes");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(110, "pre")(111, "code", 4);
        \u0275\u0275text(112);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(113, "mat-tab", 10)(114, "div", 2)(115, "h2");
        \u0275\u0275text(116, "Performance Optimization");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "div", 11)(118, "p");
        \u0275\u0275text(119, "Context can cause performance issues if not used carefully.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "ul")(121, "li");
        \u0275\u0275text(122, "Memoize context value to prevent re-renders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "li");
        \u0275\u0275text(124, "Split contexts by update frequency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "li");
        \u0275\u0275text(126, "Separate state and dispatch contexts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "li");
        \u0275\u0275text(128, "Use React.memo on expensive consumers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "li");
        \u0275\u0275text(130, "Consider state management libraries for complex apps");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(131, "pre")(132, "code", 4);
        \u0275\u0275text(133);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(134, "mat-tab", 12)(135, "div", 2)(136, "h2");
        \u0275\u0275text(137, "Real-World Example: Auth Context");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "div", 3)(139, "p");
        \u0275\u0275text(140, "A practical example of authentication context.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "ul")(142, "li");
        \u0275\u0275text(143, "Manage user authentication state");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "li");
        \u0275\u0275text(145, "Login and logout functions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "li");
        \u0275\u0275text(147, "Loading states");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "li");
        \u0275\u0275text(149, "Token management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "li");
        \u0275\u0275text(151, "Accessible throughout app");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(152, "pre")(153, "code", 4);
        \u0275\u0275text(154);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(155, "mat-tab", 13)(156, "div", 2)(157, "h2");
        \u0275\u0275text(158, "Context Best Practices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(159, "div", 7)(160, "h3");
        \u0275\u0275text(161, "\u2713 Best Practices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "ul")(163, "li");
        \u0275\u0275text(164, "Create custom hooks for each context");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "li");
        \u0275\u0275text(166, "Throw errors if context used outside provider");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "li");
        \u0275\u0275text(168, "Memoize context values");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(169, "li");
        \u0275\u0275text(170, "Split large contexts into smaller ones");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(171, "li");
        \u0275\u0275text(172, "Don't overuse Context - use props when appropriate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(173, "li");
        \u0275\u0275text(174, "Separate state and dispatch contexts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(175, "li");
        \u0275\u0275text(176, "Use Context for truly global state");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(177, "li");
        \u0275\u0275text(178, "Consider Redux/Zustand for complex state");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(179, "pre")(180, "code", 4);
        \u0275\u0275text(181);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(28);
        \u0275\u0275textInterpolate(ctx.contextBasics);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.providerPattern);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.customHook);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.multipleContexts);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.contextWithReducer);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.performance);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.realWorldExample);
        \u0275\u0275advance(27);
        \u0275\u0275textInterpolate(ctx.bestPractices);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #61dafb;\n  margin-bottom: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #282c34;\n  margin-top: 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  padding: 15px;\n  margin: 15px 0;\n  border-radius: 4px;\n}\n.info-box.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-left-color: #4caf50;\n}\n.info-box.warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #ff9800;\n}\n.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1976d2;\n}\n.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding-left: 20px;\n}\n.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05);\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\npre[_ngcontent-%COMP%] {\n  background: #282c34;\n  border-radius: 4px;\n  overflow-x: auto;\n  margin: 15px 0;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #abb2bf;\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n  font-size: 14px;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=react-context.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReactContextComponent, { className: "ReactContextComponent", filePath: "src\\app\\components\\react\\react-context\\react-context.component.ts", lineNumber: 13 });
})();
export {
  ReactContextComponent
};
//# sourceMappingURL=chunk-5QJNCJSH.js.map
