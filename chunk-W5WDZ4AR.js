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

// src/app/components/react/react-performance/react-performance.component.ts
var ReactPerformanceComponent = class _ReactPerformanceComponent {
  constructor() {
    this.reactMemo = `// React.memo - Prevent Re-renders
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
);`;
    this.useMemoHook = `// useMemo - Memoize Expensive Calculations
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
}`;
    this.useCallbackHook = `// useCallback - Memoize Functions
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
});`;
    this.codeSplitting = `// Code Splitting with React.lazy
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
});`;
    this.virtualization = `// List Virtualization
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
}`;
    this.optimization = `// General Optimization Techniques

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
<Component style={styles} />`;
    this.profiling = `// Performance Profiling

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
}, []);`;
    this.bestPractices = `// Performance Best Practices

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

// 10. Profile regularly with React DevTools`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function ReactPerformanceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReactPerformanceComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReactPerformanceComponent, selectors: [["app-react-performance"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 132, vars: 6, consts: [[1, "container"], ["label", "React.memo"], [1, "tab-content"], [1, "info-box"], [1, "language-jsx"], ["label", "useMemo"], ["label", "useCallback"], ["label", "Code Splitting"], ["label", "Virtualization"], ["label", "Best Practices"], [1, "info-box", "success"]], template: function ReactPerformanceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "React Performance Optimization");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Learn techniques to optimize React application performance, reduce unnecessary re-renders, and improve user experience.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "React.memo - Memoized Components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "React.memo");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " is a higher order component that memoizes a component, preventing unnecessary re-renders when props haven't changed.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "Wraps functional components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "Performs shallow prop comparison");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li");
        \u0275\u0275text(21, "Custom comparison function available");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275text(23, "Best for expensive render operations");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "pre")(25, "code", 4);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "mat-tab", 5)(28, "div", 2)(29, "h2");
        \u0275\u0275text(30, "useMemo Hook");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 3)(32, "p")(33, "strong");
        \u0275\u0275text(34, "useMemo");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " memoizes expensive computations and only recalculates when dependencies change.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "ul")(37, "li");
        \u0275\u0275text(38, "Caches computed values");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "li");
        \u0275\u0275text(40, "Runs only when dependencies change");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "li");
        \u0275\u0275text(42, "Useful for expensive calculations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li");
        \u0275\u0275text(44, "Reduces unnecessary work");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "pre")(46, "code", 4);
        \u0275\u0275text(47);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(48, "mat-tab", 6)(49, "div", 2)(50, "h2");
        \u0275\u0275text(51, "useCallback Hook");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 3)(53, "p")(54, "strong");
        \u0275\u0275text(55, "useCallback");
        \u0275\u0275elementEnd();
        \u0275\u0275text(56, " memoizes callback functions to prevent unnecessary re-creations on each render.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "ul")(58, "li");
        \u0275\u0275text(59, "Memoizes function references");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "li");
        \u0275\u0275text(61, "Prevents child re-renders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "li");
        \u0275\u0275text(63, "Useful with React.memo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "li");
        \u0275\u0275text(65, "Stable function references");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(66, "pre")(67, "code", 4);
        \u0275\u0275text(68);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(69, "mat-tab", 7)(70, "div", 2)(71, "h2");
        \u0275\u0275text(72, "Code Splitting & Lazy Loading");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 3)(74, "p");
        \u0275\u0275text(75, "Split your code into smaller bundles and load them on demand to reduce initial load time.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "ul")(77, "li");
        \u0275\u0275text(78, "React.lazy() for component lazy loading");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "li");
        \u0275\u0275text(80, "Suspense for loading states");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "li");
        \u0275\u0275text(82, "Dynamic imports");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "li");
        \u0275\u0275text(84, "Route-based code splitting");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(85, "pre")(86, "code", 4);
        \u0275\u0275text(87);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(88, "mat-tab", 8)(89, "div", 2)(90, "h2");
        \u0275\u0275text(91, "List Virtualization");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "div", 3)(93, "p");
        \u0275\u0275text(94, "Render only visible items in large lists to improve performance.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "ul")(96, "li");
        \u0275\u0275text(97, "react-window library");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "li");
        \u0275\u0275text(99, "react-virtualized for complex scenarios");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "li");
        \u0275\u0275text(101, "Renders only visible items");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "li");
        \u0275\u0275text(103, "Handles thousands of items efficiently");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(104, "pre")(105, "code", 4);
        \u0275\u0275text(106);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(107, "mat-tab", 9)(108, "div", 2)(109, "h2");
        \u0275\u0275text(110, "Performance Best Practices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "div", 10)(112, "h3");
        \u0275\u0275text(113, "\u2713 Optimization Techniques");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "ul")(115, "li");
        \u0275\u0275text(116, "Use production build for deployment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "li");
        \u0275\u0275text(118, "Avoid inline function definitions in JSX");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "li");
        \u0275\u0275text(120, "Use key prop correctly in lists");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "li");
        \u0275\u0275text(122, "Debounce/throttle expensive operations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "li");
        \u0275\u0275text(124, "Use Web Workers for heavy computations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "li");
        \u0275\u0275text(126, "Optimize images and assets");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "li");
        \u0275\u0275text(128, "Implement proper error boundaries");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(129, "pre")(130, "code", 4);
        \u0275\u0275text(131);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(26);
        \u0275\u0275textInterpolate(ctx.reactMemo);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.useMemoHook);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.useCallbackHook);
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(ctx.codeSplitting);
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(ctx.virtualization);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.bestPractices);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #61dafb;\n  margin-bottom: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #282c34;\n  margin-top: 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  padding: 15px;\n  margin: 15px 0;\n  border-radius: 4px;\n}\n.info-box.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-left-color: #4caf50;\n}\n.info-box.warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #ff9800;\n}\n.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1976d2;\n}\n.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding-left: 20px;\n}\n.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05);\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\npre[_ngcontent-%COMP%] {\n  background: #282c34;\n  border-radius: 4px;\n  overflow-x: auto;\n  margin: 15px 0;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #abb2bf;\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n  font-size: 14px;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=react-performance.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReactPerformanceComponent, { className: "ReactPerformanceComponent", filePath: "src\\app\\components\\react\\react-performance\\react-performance.component.ts", lineNumber: 13 });
})();
export {
  ReactPerformanceComponent
};
//# sourceMappingURL=chunk-W5WDZ4AR.js.map
