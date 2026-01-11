import"./chunk-4ITEIGFF.js";import"./chunk-WCULWZKC.js";import{a as S}from"./chunk-VDRUEQXK.js";import{a as u,b as p,c as h,d as C}from"./chunk-GNZ74KMC.js";import"./chunk-XAZLOLJU.js";import"./chunk-SZTU5CXE.js";import{Ia as a,Ya as r,da as d,e as f,hb as t,ib as e,mb as l,ub as n,vb as s,zb as x}from"./chunk-KMNIY7WT.js";var g=f(S());function v(i,m){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Creating and Using Context"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Context"),e(),n(7," lets you pass data deep into the component tree without prop drilling."),e(),t(8,"ul")(9,"li"),n(10,"Create context with createContext()"),e(),t(11,"li"),n(12,"Provide value with Provider component"),e(),t(13,"li"),n(14,"Consume value with useContext hook"),e(),t(15,"li"),n(16,"Avoids prop drilling through intermediate components"),e(),t(17,"li"),n(18,"Value accessible to all nested consumers"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),i&2){let o=l();a(21),s(o.contextBasics)}}function E(i,m){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Custom Provider Component"),e(),t(3,"div",11)(4,"p"),n(5,"Create a custom Provider component to encapsulate context logic."),e(),t(6,"ul")(7,"li"),n(8,"Wrap context logic in dedicated component"),e(),t(9,"li"),n(10,"Manage state within provider"),e(),t(11,"li"),n(12,"Expose multiple values and functions"),e(),t(13,"li"),n(14,"Cleaner, more maintainable code"),e(),t(15,"li"),n(16,"Reusable across applications"),e()()(),t(17,"pre")(18,"code",12),n(19),e()()()),i&2){let o=l();a(19),s(o.providerPattern)}}function b(i,m){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Custom Hook for Context"),e(),t(3,"div",13)(4,"p"),n(5,"Create custom hooks to access context with error handling."),e(),t(6,"ul")(7,"li"),n(8,"Cleaner consumer API"),e(),t(9,"li"),n(10,"Built-in error handling"),e(),t(11,"li"),n(12,"Enforce provider usage"),e(),t(13,"li"),n(14,"Better developer experience"),e(),t(15,"li"),n(16,"Standard pattern in React apps"),e()()(),t(17,"pre")(18,"code",12),n(19),e()()()),i&2){let o=l();a(19),s(o.customHook)}}function P(i,m){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Using Multiple Contexts"),e(),t(3,"div",11)(4,"p"),n(5,"An application can use multiple contexts for different concerns."),e(),t(6,"ul")(7,"li"),n(8,"Separate contexts for different data domains"),e(),t(9,"li"),n(10,"Nest multiple providers"),e(),t(11,"li"),n(12,"Each component can consume multiple contexts"),e(),t(13,"li"),n(14,"Better separation of concerns"),e(),t(15,"li"),n(16,"More maintainable code structure"),e()()(),t(17,"pre")(18,"code",12),n(19),e()()()),i&2){let o=l();a(19),s(o.multipleContexts)}}function T(i,m){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Context with useReducer"),e(),t(3,"div",11)(4,"p"),n(5,"Combine Context API with useReducer for complex state management."),e(),t(6,"ul")(7,"li"),n(8,"useReducer for complex state logic"),e(),t(9,"li"),n(10,"Context to share state globally"),e(),t(11,"li"),n(12,"Similar pattern to Redux"),e(),t(13,"li"),n(14,"Actions for state updates"),e(),t(15,"li"),n(16,"Predictable state changes"),e()()(),t(17,"pre")(18,"code",12),n(19),e()()()),i&2){let o=l();a(19),s(o.contextWithReducer)}}function _(i,m){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Performance Optimization"),e(),t(3,"div",14)(4,"p"),n(5,"Context can cause performance issues if not used carefully."),e(),t(6,"ul")(7,"li"),n(8,"Memoize context value to prevent re-renders"),e(),t(9,"li"),n(10,"Split contexts by update frequency"),e(),t(11,"li"),n(12,"Separate state and dispatch contexts"),e(),t(13,"li"),n(14,"Use React.memo on expensive consumers"),e(),t(15,"li"),n(16,"Consider state management libraries for complex apps"),e()()(),t(17,"pre")(18,"code",12),n(19),e()()()),i&2){let o=l();a(19),s(o.performance)}}function M(i,m){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Real-World Example: Auth Context"),e(),t(3,"div",11)(4,"p"),n(5,"A practical example of authentication context."),e(),t(6,"ul")(7,"li"),n(8,"Manage user authentication state"),e(),t(9,"li"),n(10,"Login and logout functions"),e(),t(11,"li"),n(12,"Loading states"),e(),t(13,"li"),n(14,"Token management"),e(),t(15,"li"),n(16,"Accessible throughout app"),e()()(),t(17,"pre")(18,"code",12),n(19),e()()()),i&2){let o=l();a(19),s(o.realWorldExample)}}function w(i,m){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Context Best Practices"),e(),t(3,"div",13)(4,"h3"),n(5,"\u2713 Best Practices"),e(),t(6,"ul")(7,"li"),n(8,"Create custom hooks for each context"),e(),t(9,"li"),n(10,"Throw errors if context used outside provider"),e(),t(11,"li"),n(12,"Memoize context values"),e(),t(13,"li"),n(14,"Split large contexts into smaller ones"),e(),t(15,"li"),n(16,"Don't overuse Context - use props when appropriate"),e(),t(17,"li"),n(18,"Separate state and dispatch contexts"),e(),t(19,"li"),n(20,"Use Context for truly global state"),e(),t(21,"li"),n(22,"Consider Redux/Zustand for complex state"),e()()(),t(23,"pre")(24,"code",12),n(25),e()()()),i&2){let o=l();a(25),s(o.bestPractices)}}var I=(()=>{class i{constructor(){this.contextBasics=`import { createContext, useContext, useState } from 'react';

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
// Consider state management libraries for complex apps (Redux, Zustand)`}ngAfterViewChecked(){g.highlightAll()}static{this.\u0275fac=function(c){return new(c||i)}}static{this.\u0275cmp=d({type:i,selectors:[["app-react-context"]],standalone:!0,features:[x],decls:22,vars:0,consts:[[1,"container"],["label","Context Basics"],["matTabContent",""],["label","Provider Pattern"],["label","Custom Hooks"],["label","Multiple Contexts"],["label","With Reducer"],["label","Performance"],["label","Real Example"],["label","Best Practices"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],[1,"info-box","success"],[1,"info-box","warning"]],template:function(c,R){c&1&&(t(0,"div",0)(1,"h1"),n(2,"React Context API"),e(),t(3,"p"),n(4,`Context provides a way to pass data through the component tree without having to pass props down manually at every level. It's designed to share data that can be considered "global" for a tree of React components.`),e(),t(5,"mat-tab-group")(6,"mat-tab",1),r(7,v,22,1,"ng-template",2),e(),t(8,"mat-tab",3),r(9,E,20,1,"ng-template",2),e(),t(10,"mat-tab",4),r(11,b,20,1,"ng-template",2),e(),t(12,"mat-tab",5),r(13,P,20,1,"ng-template",2),e(),t(14,"mat-tab",6),r(15,T,20,1,"ng-template",2),e(),t(16,"mat-tab",7),r(17,_,20,1,"ng-template",2),e(),t(18,"mat-tab",8),r(19,M,20,1,"ng-template",2),e(),t(20,"mat-tab",9),r(21,w,26,1,"ng-template",2),e()()())},dependencies:[C,u,p,h],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return i})();export{I as ReactContextComponent};
