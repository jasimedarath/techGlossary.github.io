import{b as d,c,d as p}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as i,da as m,gb as n,hb as e,tb as t,ub as o,yb as s}from"./chunk-WGQ2ELTG.js";var v=(()=>{class r{constructor(){this.reactMemo=`// React.memo - Prevent Re-renders
import { memo } from 'react';

// Without memo - re-renders on every parent render
function ExpensiveComponent({ data }) {
  console.log('Rendering ExpensiveComponent');
  return <div>{data.value}</div>;
}

// With memo - only re-renders when props change
const MemoizedComponent = memo(function ExpensiveComponent({ data }) {
  console.log('Rendering ExpensiveComponent');
  return <div>{data.value}</div>;
});

// Custom comparison function
const CustomMemoComponent = memo(
  ({ user }) => <div>{user.name}</div>,
  (prevProps, nextProps) => {
    return prevProps.user.id === nextProps.user.id;
  }
);`,this.useMemoHook=`// useMemo - Memoize Expensive Calculations
import { useMemo, useState } from 'react';

function DataTable({ data }) {
  const [filter, setFilter] = useState('');
  
  // Without useMemo - runs on every render
  const filteredData = data.filter(item => 
    item.name.includes(filter)
  );
  
  // With useMemo - only recalculates when dependencies change
  const memoizedFilteredData = useMemo(() => {
    console.log('Filtering data...');
    return data.filter(item => item.name.includes(filter));
  }, [data, filter]);
  
  // Expensive computation
  const statistics = useMemo(() => {
    console.log('Computing statistics...');
    return {
      total: data.length,
      average: data.reduce((sum, item) => sum + item.value, 0) / data.length,
      max: Math.max(...data.map(item => item.value))
    };
  }, [data]);
  
  return (
    <div>
      <input value={filter} onChange={e => setFilter(e.target.value)} />
      <ul>
        {memoizedFilteredData.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
      <div>Total: {statistics.total}</div>
    </div>
  );
}`,this.useCallbackHook=`// useCallback - Memoize Functions
import { useCallback, memo } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  
  // Without useCallback - new function on every render
  const handleClick = () => {
    console.log('Button clicked');
  };
  
  // With useCallback - same function reference
  const memoizedHandleClick = useCallback(() => {
    console.log('Button clicked', count);
  }, [count]);
  
  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <ChildComponent onClick={memoizedHandleClick} />
    </div>
  );
}

// Child component with memo
const ChildComponent = memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click Me</button>;
});`,this.codeSplitting=`// Code Splitting with React.lazy
import { lazy, Suspense } from 'react';

// Lazy load components
const Dashboard = lazy(() => import('./Dashboard'));
const Profile = lazy(() => import('./Profile'));
const Settings = lazy(() => import('./Settings'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}

// Dynamic import with delay
const HeavyComponent = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import('./HeavyComponent'));
    }, 1000);
  });
});`,this.virtualization=`// List Virtualization
import { FixedSizeList } from 'react-window';

// Virtualize large lists - only render visible items
function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  );
  
  return (
    <FixedSizeList
      height={600}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {Row}
    </FixedSizeList>
  );
}

// Without virtualization - renders all 10,000 items
function RegularList({ items }) {
  return (
    <div>
      {items.map(item => <div key={item.id}>{item.name}</div>)}
    </div>
  );
}`,this.optimization=`// General Optimization Techniques

// 1. Debounce expensive operations
function SearchComponent() {
  const [query, setQuery] = useState('');
  
  const debouncedSearch = useMemo(
    () => debounce((value) => {
      // Expensive search operation
      performSearch(value);
    }, 300),
    []
  );
  
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };
  
  return <input value={query} onChange={handleChange} />;
}

// 2. Lazy initialization
const [state, setState] = useState(() => {
  const saved = localStorage.getItem('data');
  return saved ? JSON.parse(saved) : initialData;
});

// 3. Avoid inline object creation
// Bad
<Component style={{ marginTop: 10 }} />

// Good
const styles = { marginTop: 10 };
<Component style={styles} />`,this.profiling=`// Performance Profiling

// 1. Use React DevTools Profiler
// Enable profiler in DevTools

// 2. Measure render time
import { Profiler } from 'react';

function onRenderCallback(
  id, // component that was rendered
  phase, // "mount" or "update"
  actualDuration, // time spent rendering
  baseDuration, // estimated time without memoization
  startTime, // when React began rendering
  commitTime, // when React committed the update
  interactions // Set of interactions for this update
) {
  console.log(\`\${id} took \${actualDuration}ms\`);
}

function App() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <Dashboard />
    </Profiler>
  );
}

// 3. Use performance.mark
useEffect(() => {
  performance.mark('componentDidMount');
  return () => {
    performance.mark('componentWillUnmount');
    performance.measure('componentLifetime', 'componentDidMount', 'componentWillUnmount');
  };
}, []);`,this.bestPractices=`// Performance Best Practices

// 1. Use React.memo for expensive components
const ExpensiveComponent = memo(MyComponent);

// 2. useMemo for expensive calculations
const result = useMemo(() => expensiveCalculation(data), [data]);

// 3. useCallback for event handlers passed to memoized children
const handleClick = useCallback(() => {/* ... */}, [dependencies]);

// 4. Code splitting with React.lazy
const Component = lazy(() => import('./Component'));

// 5. Virtualize long lists
// Use react-window or react-virtualized

// 6. Avoid unnecessary re-renders
// - Use proper keys in lists
// - Don't create functions/objects inline
// - Split large components

// 7. Optimize images
// - Use appropriate formats (WebP)
// - Lazy load images
// - Use responsive images

// 8. Bundle optimization
// - Tree shaking
// - Code splitting
// - Lazy loading routes

// 9. Avoid prop drilling - use Context or state management

// 10. Profile regularly with React DevTools`}ngAfterViewChecked(){Prism.highlightAll()}static{this.\u0275fac=function(l){return new(l||r)}}static{this.\u0275cmp=m({type:r,selectors:[["app-react-performance"]],standalone:!0,features:[s],decls:132,vars:6,consts:[[1,"container"],["label","React.memo"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],["label","useMemo"],["label","useCallback"],["label","Code Splitting"],["label","Virtualization"],["label","Best Practices"],[1,"info-box","success"]],template:function(l,a){l&1&&(n(0,"div",0)(1,"h1"),t(2,"React Performance Optimization"),e(),n(3,"p"),t(4,"Learn techniques to optimize React application performance, reduce unnecessary re-renders, and improve user experience."),e(),n(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),t(9,"React.memo - Memoized Components"),e(),n(10,"div",3)(11,"p")(12,"strong"),t(13,"React.memo"),e(),t(14," is a higher order component that memoizes a component, preventing unnecessary re-renders when props haven't changed."),e(),n(15,"ul")(16,"li"),t(17,"Wraps functional components"),e(),n(18,"li"),t(19,"Performs shallow prop comparison"),e(),n(20,"li"),t(21,"Custom comparison function available"),e(),n(22,"li"),t(23,"Best for expensive render operations"),e()()(),n(24,"pre")(25,"code",4),t(26),e()()()(),n(27,"mat-tab",5)(28,"div",2)(29,"h2"),t(30,"useMemo Hook"),e(),n(31,"div",3)(32,"p")(33,"strong"),t(34,"useMemo"),e(),t(35," memoizes expensive computations and only recalculates when dependencies change."),e(),n(36,"ul")(37,"li"),t(38,"Caches computed values"),e(),n(39,"li"),t(40,"Runs only when dependencies change"),e(),n(41,"li"),t(42,"Useful for expensive calculations"),e(),n(43,"li"),t(44,"Reduces unnecessary work"),e()()(),n(45,"pre")(46,"code",4),t(47),e()()()(),n(48,"mat-tab",6)(49,"div",2)(50,"h2"),t(51,"useCallback Hook"),e(),n(52,"div",3)(53,"p")(54,"strong"),t(55,"useCallback"),e(),t(56," memoizes callback functions to prevent unnecessary re-creations on each render."),e(),n(57,"ul")(58,"li"),t(59,"Memoizes function references"),e(),n(60,"li"),t(61,"Prevents child re-renders"),e(),n(62,"li"),t(63,"Useful with React.memo"),e(),n(64,"li"),t(65,"Stable function references"),e()()(),n(66,"pre")(67,"code",4),t(68),e()()()(),n(69,"mat-tab",7)(70,"div",2)(71,"h2"),t(72,"Code Splitting & Lazy Loading"),e(),n(73,"div",3)(74,"p"),t(75,"Split your code into smaller bundles and load them on demand to reduce initial load time."),e(),n(76,"ul")(77,"li"),t(78,"React.lazy() for component lazy loading"),e(),n(79,"li"),t(80,"Suspense for loading states"),e(),n(81,"li"),t(82,"Dynamic imports"),e(),n(83,"li"),t(84,"Route-based code splitting"),e()()(),n(85,"pre")(86,"code",4),t(87),e()()()(),n(88,"mat-tab",8)(89,"div",2)(90,"h2"),t(91,"List Virtualization"),e(),n(92,"div",3)(93,"p"),t(94,"Render only visible items in large lists to improve performance."),e(),n(95,"ul")(96,"li"),t(97,"react-window library"),e(),n(98,"li"),t(99,"react-virtualized for complex scenarios"),e(),n(100,"li"),t(101,"Renders only visible items"),e(),n(102,"li"),t(103,"Handles thousands of items efficiently"),e()()(),n(104,"pre")(105,"code",4),t(106),e()()()(),n(107,"mat-tab",9)(108,"div",2)(109,"h2"),t(110,"Performance Best Practices"),e(),n(111,"div",10)(112,"h3"),t(113,"\u2713 Optimization Techniques"),e(),n(114,"ul")(115,"li"),t(116,"Use production build for deployment"),e(),n(117,"li"),t(118,"Avoid inline function definitions in JSX"),e(),n(119,"li"),t(120,"Use key prop correctly in lists"),e(),n(121,"li"),t(122,"Debounce/throttle expensive operations"),e(),n(123,"li"),t(124,"Use Web Workers for heavy computations"),e(),n(125,"li"),t(126,"Optimize images and assets"),e(),n(127,"li"),t(128,"Implement proper error boundaries"),e()()(),n(129,"pre")(130,"code",4),t(131),e()()()()()()),l&2&&(i(26),o(a.reactMemo),i(21),o(a.useMemoHook),i(21),o(a.useCallbackHook),i(19),o(a.codeSplitting),i(19),o(a.virtualization),i(25),o(a.bestPractices))},dependencies:[p,d,c],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#abb2bf;font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return r})();export{v as ReactPerformanceComponent};
