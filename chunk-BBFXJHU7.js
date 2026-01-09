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

// src/app/components/react/react-lifecycle/react-lifecycle.component.ts
var ReactLifecycleComponent = class _ReactLifecycleComponent {
  constructor() {
    this.classLifecycle = `// Class Component Lifecycle Methods
import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('1. Constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('4. componentDidMount - Component mounted');
    // API calls, subscriptions, timers
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('5. shouldComponentUpdate');
    return true; // Return false to prevent re-render
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('6. getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('7. componentDidUpdate - Component updated');
  }

  componentWillUnmount() {
    console.log('8. componentWillUnmount - Cleanup');
    // Cleanup: remove listeners, cancel requests
  }

  render() {
    console.log('3. Render');
    return <div>Count: {this.state.count}</div>;
  }
}`;
    this.useEffectBasics = `// useEffect - Equivalent to componentDidMount, componentDidUpdate, componentWillUnmount
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  // Runs after every render (no dependency array)
  useEffect(() => {
    console.log('Effect runs after every render');
  });

  // Runs once on mount (empty dependency array)
  useEffect(() => {
    console.log('Component mounted');
    fetchUser(userId).then(setUser);
  }, []); // Empty array = componentDidMount

  // Runs when userId changes
  useEffect(() => {
    console.log('userId changed');
    fetchUser(userId).then(setUser);
  }, [userId]); // Dependency array

  // Cleanup function (componentWillUnmount)
  useEffect(() => {
    const subscription = subscribeToUser(userId);
    
    return () => {
      // Cleanup runs before unmount
      subscription.unsubscribe();
    };
  }, [userId]);

  return <div>{user?.name}</div>;
}`;
    this.useEffectPatterns = `// Common useEffect Patterns

// 1. Fetching Data
useEffect(() => {
  let cancelled = false;

  async function fetchData() {
    const response = await fetch(\`/api/users/\${id}\`);
    const data = await response.json();
    if (!cancelled) {
      setData(data);
    }
  }

  fetchData();

  return () => {
    cancelled = true; // Prevent state update if unmounted
  };
}, [id]);

// 2. Event Listeners
useEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);
  
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

// 3. Timers
useEffect(() => {
  const timer = setInterval(() => {
    setCount(c => c + 1);
  }, 1000);

  return () => clearInterval(timer);
}, []);

// 4. Subscriptions
useEffect(() => {
  const subscription = dataSource.subscribe(handleData);
  return () => subscription.unsubscribe();
}, [dataSource]);`;
    this.useLayoutEffect = `// useLayoutEffect - Runs synchronously after DOM mutations
import React, { useLayoutEffect, useRef } from 'react';

function Tooltip() {
  const tooltipRef = useRef();

  // useLayoutEffect runs before browser paint
  // Use for DOM measurements or synchronous updates
  useLayoutEffect(() => {
    const { height } = tooltipRef.current.getBoundingClientRect();
    
    // Position tooltip based on measurements
    if (height > 100) {
      tooltipRef.current.style.top = '-10px';
    }
  });

  return <div ref={tooltipRef}>Tooltip content</div>;
}

// useEffect vs useLayoutEffect
// useEffect: Async, after paint (most cases)
// useLayoutEffect: Sync, before paint (DOM measurements)`;
    this.lifecycleComparison = `// Class Lifecycle vs Hooks Comparison

// componentDidMount
class Example extends Component {
  componentDidMount() {
    // Mount logic
  }
}

function Example() {
  useEffect(() => {
    // Mount logic
  }, []);
}

// componentDidUpdate
class Example extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      // Update logic
    }
  }
}

function Example({ id }) {
  useEffect(() => {
    // Update logic
  }, [id]);
}

// componentWillUnmount
class Example extends Component {
  componentWillUnmount() {
    // Cleanup
  }
}

function Example() {
  useEffect(() => {
    return () => {
      // Cleanup
    };
  }, []);
}`;
    this.bestPractices = `// Lifecycle Best Practices

// \u2713 Clean up effects to prevent memory leaks
useEffect(() => {
  const subscription = subscribe();
  return () => subscription.unsubscribe();
}, []);

// \u2713 Declare dependencies correctly
useEffect(() => {
  doSomething(prop1, prop2);
}, [prop1, prop2]); // Include all dependencies

// \u2717 Don't omit dependencies
useEffect(() => {
  doSomething(prop1); // prop1 used but not in deps
}, []); // WRONG!

// \u2713 Use multiple effects for different concerns
useEffect(() => {
  // User subscription
  const userSub = subscribeToUser();
  return () => userSub.unsubscribe();
}, [userId]);

useEffect(() => {
  // Analytics
  trackPageView();
}, [pathname]);

// \u2713 Avoid infinite loops
useEffect(() => {
  setCount(count + 1); // WRONG! Creates infinite loop
}, [count]);

// Better: Use functional update
useEffect(() => {
  setCount(c => c + 1); // Functional update, no dependency
}, []);`;
  }
  ngAfterViewChecked() {
    if (typeof Prism !== "undefined") {
      Prism.highlightAll();
    }
  }
  static {
    this.\u0275fac = function ReactLifecycleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReactLifecycleComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReactLifecycleComponent, selectors: [["app-react-lifecycle"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 129, vars: 6, consts: [[1, "container"], ["label", "Class Lifecycle"], [1, "tab-content"], [1, "info-box"], [1, "language-jsx"], ["label", "useEffect Basics"], ["label", "useEffect Patterns"], ["label", "useLayoutEffect"], ["label", "Lifecycle Comparison"], ["label", "Best Practices"], [1, "info-box", "success"], [1, "info-box", "warning"]], template: function ReactLifecycleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "React Lifecycle & Effects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Understanding React component lifecycle methods in class components and their functional equivalents using hooks.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "Class Component Lifecycle");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p");
        \u0275\u0275text(12, "Class components have lifecycle methods that run at specific points in a component's life.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "ul")(14, "li")(15, "strong");
        \u0275\u0275text(16, "Mounting:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, " constructor \u2192 getDerivedStateFromProps \u2192 render \u2192 componentDidMount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li")(19, "strong");
        \u0275\u0275text(20, "Updating:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, " getDerivedStateFromProps \u2192 shouldComponentUpdate \u2192 render \u2192 getSnapshotBeforeUpdate \u2192 componentDidUpdate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li")(23, "strong");
        \u0275\u0275text(24, "Unmounting:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, " componentWillUnmount");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "pre")(27, "code", 4);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(29, "mat-tab", 5)(30, "div", 2)(31, "h2");
        \u0275\u0275text(32, "useEffect Hook");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 3)(34, "p")(35, "strong");
        \u0275\u0275text(36, "useEffect");
        \u0275\u0275elementEnd();
        \u0275\u0275text(37, " combines componentDidMount, componentDidUpdate, and componentWillUnmount into one API.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "ul")(39, "li");
        \u0275\u0275text(40, "Runs after render (side effects)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "li");
        \u0275\u0275text(42, "Dependency array controls when it runs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li");
        \u0275\u0275text(44, "Return function for cleanup");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "li");
        \u0275\u0275text(46, "Can have multiple useEffect hooks");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "pre")(48, "code", 4);
        \u0275\u0275text(49);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(50, "mat-tab", 6)(51, "div", 2)(52, "h2");
        \u0275\u0275text(53, "Common useEffect Patterns");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "div", 3)(55, "p");
        \u0275\u0275text(56, "Learn common patterns for data fetching, event listeners, timers, and subscriptions.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "ul")(58, "li");
        \u0275\u0275text(59, "Data fetching with cleanup");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "li");
        \u0275\u0275text(61, "Event listener management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "li");
        \u0275\u0275text(63, "Timer and interval cleanup");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "li");
        \u0275\u0275text(65, "Subscription handling");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(66, "pre")(67, "code", 4);
        \u0275\u0275text(68);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(69, "mat-tab", 7)(70, "div", 2)(71, "h2");
        \u0275\u0275text(72, "useLayoutEffect Hook");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 3)(74, "p")(75, "strong");
        \u0275\u0275text(76, "useLayoutEffect");
        \u0275\u0275elementEnd();
        \u0275\u0275text(77, " runs synchronously after DOM mutations but before browser paint.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "ul")(79, "li");
        \u0275\u0275text(80, "Use for DOM measurements");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "li");
        \u0275\u0275text(82, "Synchronous DOM updates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "li");
        \u0275\u0275text(84, "Prevents visual flickering");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "li");
        \u0275\u0275text(86, "Same API as useEffect");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(87, "pre")(88, "code", 4);
        \u0275\u0275text(89);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(90, "mat-tab", 8)(91, "div", 2)(92, "h2");
        \u0275\u0275text(93, "Class vs Hooks Comparison");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "div", 3)(95, "p");
        \u0275\u0275text(96, "See how class lifecycle methods translate to hooks.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "pre")(98, "code", 4);
        \u0275\u0275text(99);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(100, "mat-tab", 9)(101, "div", 2)(102, "h2");
        \u0275\u0275text(103, "Lifecycle Best Practices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "div", 10)(105, "h3");
        \u0275\u0275text(106, "\u2713 Do's");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "ul")(108, "li");
        \u0275\u0275text(109, "Always clean up effects (remove listeners, cancel requests)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "li");
        \u0275\u0275text(111, "Include all dependencies in dependency array");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "li");
        \u0275\u0275text(113, "Use multiple effects for different concerns");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "li");
        \u0275\u0275text(115, "Use functional updates to avoid dependencies");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(116, "div", 11)(117, "h3");
        \u0275\u0275text(118, "\u2717 Don'ts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "ul")(120, "li");
        \u0275\u0275text(121, "Don't omit dependencies (use ESLint plugin)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "li");
        \u0275\u0275text(123, "Don't create infinite loops with missing dependencies");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "li");
        \u0275\u0275text(125, "Don't perform side effects during render");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(126, "pre")(127, "code", 4);
        \u0275\u0275text(128);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(28);
        \u0275\u0275textInterpolate(ctx.classLifecycle);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.useEffectBasics);
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(ctx.useEffectPatterns);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.useLayoutEffect);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.lifecycleComparison);
        \u0275\u0275advance(29);
        \u0275\u0275textInterpolate(ctx.bestPractices);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #61dafb;\n  margin-bottom: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #282c34;\n  margin-top: 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  padding: 15px;\n  margin: 15px 0;\n  border-radius: 4px;\n}\n.info-box.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-left-color: #4caf50;\n}\n.info-box.warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #ff9800;\n}\n.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1976d2;\n}\n.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding-left: 20px;\n}\n.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05);\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\npre[_ngcontent-%COMP%] {\n  background: #282c34;\n  border-radius: 4px;\n  overflow-x: auto;\n  margin: 15px 0;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #abb2bf;\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n  font-size: 14px;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=react-lifecycle.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReactLifecycleComponent, { className: "ReactLifecycleComponent", filePath: "src\\app\\components\\react\\react-lifecycle\\react-lifecycle.component.ts", lineNumber: 13 });
})();
export {
  ReactLifecycleComponent
};
//# sourceMappingURL=chunk-BBFXJHU7.js.map
