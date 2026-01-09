import{b as c,c as d,d as u}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as i,da as s,gb as n,hb as e,tb as t,ub as o,yb as m}from"./chunk-WGQ2ELTG.js";var g=(()=>{class a{constructor(){this.contextBasics=`import { createContext, useContext, useState } from 'react';

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
}`,this.providerPattern=`// Custom Provider Component
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
}`,this.customHook=`// Custom Hook for Context
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
}`,this.multipleContexts=`// Multiple Contexts
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
}`,this.contextWithReducer=`// Context with useReducer
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
}`,this.performance=`// Performance Optimization
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
}`,this.realWorldExample=`// Real-world Auth Context
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
}`,this.bestPractices=`// Context Best Practices

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
// Consider state management libraries for complex apps (Redux, Zustand)`}ngAfterViewChecked(){Prism.highlightAll()}static{this.\u0275fac=function(l){return new(l||a)}}static{this.\u0275cmp=s({type:a,selectors:[["app-react-context"]],standalone:!0,features:[m],decls:182,vars:8,consts:[[1,"container"],["label","Context Basics"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],["label","Provider Pattern"],["label","Custom Hooks"],[1,"info-box","success"],["label","Multiple Contexts"],["label","With Reducer"],["label","Performance"],[1,"info-box","warning"],["label","Real Example"],["label","Best Practices"]],template:function(l,r){l&1&&(n(0,"div",0)(1,"h1"),t(2,"React Context API"),e(),n(3,"p"),t(4,`Context provides a way to pass data through the component tree without having to pass props down manually at every level. It's designed to share data that can be considered "global" for a tree of React components.`),e(),n(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),t(9,"Creating and Using Context"),e(),n(10,"div",3)(11,"p")(12,"strong"),t(13,"Context"),e(),t(14," lets you pass data deep into the component tree without prop drilling."),e(),n(15,"ul")(16,"li"),t(17,"Create context with createContext()"),e(),n(18,"li"),t(19,"Provide value with Provider component"),e(),n(20,"li"),t(21,"Consume value with useContext hook"),e(),n(22,"li"),t(23,"Avoids prop drilling through intermediate components"),e(),n(24,"li"),t(25,"Value accessible to all nested consumers"),e()()(),n(26,"pre")(27,"code",4),t(28),e()()()(),n(29,"mat-tab",5)(30,"div",2)(31,"h2"),t(32,"Custom Provider Component"),e(),n(33,"div",3)(34,"p"),t(35,"Create a custom Provider component to encapsulate context logic."),e(),n(36,"ul")(37,"li"),t(38,"Wrap context logic in dedicated component"),e(),n(39,"li"),t(40,"Manage state within provider"),e(),n(41,"li"),t(42,"Expose multiple values and functions"),e(),n(43,"li"),t(44,"Cleaner, more maintainable code"),e(),n(45,"li"),t(46,"Reusable across applications"),e()()(),n(47,"pre")(48,"code",4),t(49),e()()()(),n(50,"mat-tab",6)(51,"div",2)(52,"h2"),t(53,"Custom Hook for Context"),e(),n(54,"div",7)(55,"p"),t(56,"Create custom hooks to access context with error handling."),e(),n(57,"ul")(58,"li"),t(59,"Cleaner consumer API"),e(),n(60,"li"),t(61,"Built-in error handling"),e(),n(62,"li"),t(63,"Enforce provider usage"),e(),n(64,"li"),t(65,"Better developer experience"),e(),n(66,"li"),t(67,"Standard pattern in React apps"),e()()(),n(68,"pre")(69,"code",4),t(70),e()()()(),n(71,"mat-tab",8)(72,"div",2)(73,"h2"),t(74,"Using Multiple Contexts"),e(),n(75,"div",3)(76,"p"),t(77,"An application can use multiple contexts for different concerns."),e(),n(78,"ul")(79,"li"),t(80,"Separate contexts for different data domains"),e(),n(81,"li"),t(82,"Nest multiple providers"),e(),n(83,"li"),t(84,"Each component can consume multiple contexts"),e(),n(85,"li"),t(86,"Better separation of concerns"),e(),n(87,"li"),t(88,"More maintainable code structure"),e()()(),n(89,"pre")(90,"code",4),t(91),e()()()(),n(92,"mat-tab",9)(93,"div",2)(94,"h2"),t(95,"Context with useReducer"),e(),n(96,"div",3)(97,"p"),t(98,"Combine Context API with useReducer for complex state management."),e(),n(99,"ul")(100,"li"),t(101,"useReducer for complex state logic"),e(),n(102,"li"),t(103,"Context to share state globally"),e(),n(104,"li"),t(105,"Similar pattern to Redux"),e(),n(106,"li"),t(107,"Actions for state updates"),e(),n(108,"li"),t(109,"Predictable state changes"),e()()(),n(110,"pre")(111,"code",4),t(112),e()()()(),n(113,"mat-tab",10)(114,"div",2)(115,"h2"),t(116,"Performance Optimization"),e(),n(117,"div",11)(118,"p"),t(119,"Context can cause performance issues if not used carefully."),e(),n(120,"ul")(121,"li"),t(122,"Memoize context value to prevent re-renders"),e(),n(123,"li"),t(124,"Split contexts by update frequency"),e(),n(125,"li"),t(126,"Separate state and dispatch contexts"),e(),n(127,"li"),t(128,"Use React.memo on expensive consumers"),e(),n(129,"li"),t(130,"Consider state management libraries for complex apps"),e()()(),n(131,"pre")(132,"code",4),t(133),e()()()(),n(134,"mat-tab",12)(135,"div",2)(136,"h2"),t(137,"Real-World Example: Auth Context"),e(),n(138,"div",3)(139,"p"),t(140,"A practical example of authentication context."),e(),n(141,"ul")(142,"li"),t(143,"Manage user authentication state"),e(),n(144,"li"),t(145,"Login and logout functions"),e(),n(146,"li"),t(147,"Loading states"),e(),n(148,"li"),t(149,"Token management"),e(),n(150,"li"),t(151,"Accessible throughout app"),e()()(),n(152,"pre")(153,"code",4),t(154),e()()()(),n(155,"mat-tab",13)(156,"div",2)(157,"h2"),t(158,"Context Best Practices"),e(),n(159,"div",7)(160,"h3"),t(161,"\u2713 Best Practices"),e(),n(162,"ul")(163,"li"),t(164,"Create custom hooks for each context"),e(),n(165,"li"),t(166,"Throw errors if context used outside provider"),e(),n(167,"li"),t(168,"Memoize context values"),e(),n(169,"li"),t(170,"Split large contexts into smaller ones"),e(),n(171,"li"),t(172,"Don't overuse Context - use props when appropriate"),e(),n(173,"li"),t(174,"Separate state and dispatch contexts"),e(),n(175,"li"),t(176,"Use Context for truly global state"),e(),n(177,"li"),t(178,"Consider Redux/Zustand for complex state"),e()()(),n(179,"pre")(180,"code",4),t(181),e()()()()()()),l&2&&(i(28),o(r.contextBasics),i(21),o(r.providerPattern),i(21),o(r.customHook),i(21),o(r.multipleContexts),i(21),o(r.contextWithReducer),i(21),o(r.performance),i(21),o(r.realWorldExample),i(27),o(r.bestPractices))},dependencies:[u,c,d],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#abb2bf;font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return a})();export{g as ReactContextComponent};
