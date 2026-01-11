import"./chunk-4ITEIGFF.js";import"./chunk-WCULWZKC.js";import{a as C}from"./chunk-FSUYFWSG.js";import{a as u,b as f,c as x,d as g}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as a,Xa as r,da as d,e as h,gb as t,hb as e,lb as l,tb as n,ub as m,yb as p}from"./chunk-WGQ2ELTG.js";var v=h(C());function b(i,s){if(i&1&&(t(0,"div",8)(1,"h2"),n(2,"React.memo - Memoized Components"),e(),t(3,"div",9)(4,"p")(5,"strong"),n(6,"React.memo"),e(),n(7," is a higher order component that memoizes a component, preventing unnecessary re-renders when props haven't changed."),e(),t(8,"ul")(9,"li"),n(10,"Wraps functional components"),e(),t(11,"li"),n(12,"Performs shallow prop comparison"),e(),t(13,"li"),n(14,"Custom comparison function available"),e(),t(15,"li"),n(16,"Best for expensive render operations"),e()()(),t(17,"pre")(18,"code",10),n(19),e()()()),i&2){let o=l();a(19),m(o.reactMemo)}}function S(i,s){if(i&1&&(t(0,"div",8)(1,"h2"),n(2,"useMemo Hook"),e(),t(3,"div",9)(4,"p")(5,"strong"),n(6,"useMemo"),e(),n(7," memoizes expensive computations and only recalculates when dependencies change."),e(),t(8,"ul")(9,"li"),n(10,"Caches computed values"),e(),t(11,"li"),n(12,"Runs only when dependencies change"),e(),t(13,"li"),n(14,"Useful for expensive calculations"),e(),t(15,"li"),n(16,"Reduces unnecessary work"),e()()(),t(17,"pre")(18,"code",10),n(19),e()()()),i&2){let o=l();a(19),m(o.useMemoHook)}}function E(i,s){if(i&1&&(t(0,"div",8)(1,"h2"),n(2,"useCallback Hook"),e(),t(3,"div",9)(4,"p")(5,"strong"),n(6,"useCallback"),e(),n(7," memoizes callback functions to prevent unnecessary re-creations on each render."),e(),t(8,"ul")(9,"li"),n(10,"Memoizes function references"),e(),t(11,"li"),n(12,"Prevents child re-renders"),e(),t(13,"li"),n(14,"Useful with React.memo"),e(),t(15,"li"),n(16,"Stable function references"),e()()(),t(17,"pre")(18,"code",10),n(19),e()()()),i&2){let o=l();a(19),m(o.useCallbackHook)}}function y(i,s){if(i&1&&(t(0,"div",8)(1,"h2"),n(2,"Code Splitting & Lazy Loading"),e(),t(3,"div",9)(4,"p"),n(5,"Split your code into smaller bundles and load them on demand to reduce initial load time."),e(),t(6,"ul")(7,"li"),n(8,"React.lazy() for component lazy loading"),e(),t(9,"li"),n(10,"Suspense for loading states"),e(),t(11,"li"),n(12,"Dynamic imports"),e(),t(13,"li"),n(14,"Route-based code splitting"),e()()(),t(15,"pre")(16,"code",10),n(17),e()()()),i&2){let o=l();a(17),m(o.codeSplitting)}}function P(i,s){if(i&1&&(t(0,"div",8)(1,"h2"),n(2,"List Virtualization"),e(),t(3,"div",9)(4,"p"),n(5,"Render only visible items in large lists to improve performance."),e(),t(6,"ul")(7,"li"),n(8,"react-window library"),e(),t(9,"li"),n(10,"react-virtualized for complex scenarios"),e(),t(11,"li"),n(12,"Renders only visible items"),e(),t(13,"li"),n(14,"Handles thousands of items efficiently"),e()()(),t(15,"pre")(16,"code",10),n(17),e()()()),i&2){let o=l();a(17),m(o.virtualization)}}function z(i,s){if(i&1&&(t(0,"div",8)(1,"h2"),n(2,"Performance Best Practices"),e(),t(3,"div",11)(4,"h3"),n(5,"\u2713 Optimization Techniques"),e(),t(6,"ul")(7,"li"),n(8,"Use production build for deployment"),e(),t(9,"li"),n(10,"Avoid inline function definitions in JSX"),e(),t(11,"li"),n(12,"Use key prop correctly in lists"),e(),t(13,"li"),n(14,"Debounce/throttle expensive operations"),e(),t(15,"li"),n(16,"Use Web Workers for heavy computations"),e(),t(17,"li"),n(18,"Optimize images and assets"),e(),t(19,"li"),n(20,"Implement proper error boundaries"),e()()(),t(21,"pre")(22,"code",10),n(23),e()()()),i&2){let o=l();a(23),m(o.bestPractices)}}var D=(()=>{class i{constructor(){this.reactMemo=`// React.memo - Prevent Re-renders
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

// 10. Profile regularly with React DevTools`}ngAfterViewChecked(){v.highlightAll()}static{this.\u0275fac=function(c){return new(c||i)}}static{this.\u0275cmp=d({type:i,selectors:[["app-react-performance"]],standalone:!0,features:[p],decls:18,vars:0,consts:[[1,"container"],["label","React.memo"],["matTabContent",""],["label","useMemo"],["label","useCallback"],["label","Code Splitting"],["label","Virtualization"],["label","Best Practices"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],[1,"info-box","success"]],template:function(c,M){c&1&&(t(0,"div",0)(1,"h1"),n(2,"React Performance Optimization"),e(),t(3,"p"),n(4,"Learn techniques to optimize React application performance, reduce unnecessary re-renders, and improve user experience."),e(),t(5,"mat-tab-group")(6,"mat-tab",1),r(7,b,20,1,"ng-template",2),e(),t(8,"mat-tab",3),r(9,S,20,1,"ng-template",2),e(),t(10,"mat-tab",4),r(11,E,20,1,"ng-template",2),e(),t(12,"mat-tab",5),r(13,y,18,1,"ng-template",2),e(),t(14,"mat-tab",6),r(15,P,18,1,"ng-template",2),e(),t(16,"mat-tab",7),r(17,z,24,1,"ng-template",2),e()()())},dependencies:[g,u,f,x],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return i})();export{D as ReactPerformanceComponent};
