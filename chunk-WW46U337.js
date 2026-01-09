import{b as u,c as d,d as m}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as o,da as c,gb as n,hb as e,tb as t,ub as i,yb as l}from"./chunk-WGQ2ELTG.js";var x=(()=>{class r{constructor(){this.classLifecycle=`// Class Component Lifecycle Methods
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
}`,this.useEffectBasics=`// useEffect - Equivalent to componentDidMount, componentDidUpdate, componentWillUnmount
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
}`,this.useEffectPatterns=`// Common useEffect Patterns

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
}, [dataSource]);`,this.useLayoutEffect=`// useLayoutEffect - Runs synchronously after DOM mutations
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
// useLayoutEffect: Sync, before paint (DOM measurements)`,this.lifecycleComparison=`// Class Lifecycle vs Hooks Comparison

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
}`,this.bestPractices=`// Lifecycle Best Practices

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
}, []);`}ngAfterViewChecked(){typeof Prism<"u"&&Prism.highlightAll()}static{this.\u0275fac=function(a){return new(a||r)}}static{this.\u0275cmp=c({type:r,selectors:[["app-react-lifecycle"]],standalone:!0,features:[l],decls:129,vars:6,consts:[[1,"container"],["label","Class Lifecycle"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],["label","useEffect Basics"],["label","useEffect Patterns"],["label","useLayoutEffect"],["label","Lifecycle Comparison"],["label","Best Practices"],[1,"info-box","success"],[1,"info-box","warning"]],template:function(a,s){a&1&&(n(0,"div",0)(1,"h1"),t(2,"React Lifecycle & Effects"),e(),n(3,"p"),t(4,"Understanding React component lifecycle methods in class components and their functional equivalents using hooks."),e(),n(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),t(9,"Class Component Lifecycle"),e(),n(10,"div",3)(11,"p"),t(12,"Class components have lifecycle methods that run at specific points in a component's life."),e(),n(13,"ul")(14,"li")(15,"strong"),t(16,"Mounting:"),e(),t(17," constructor \u2192 getDerivedStateFromProps \u2192 render \u2192 componentDidMount"),e(),n(18,"li")(19,"strong"),t(20,"Updating:"),e(),t(21," getDerivedStateFromProps \u2192 shouldComponentUpdate \u2192 render \u2192 getSnapshotBeforeUpdate \u2192 componentDidUpdate"),e(),n(22,"li")(23,"strong"),t(24,"Unmounting:"),e(),t(25," componentWillUnmount"),e()()(),n(26,"pre")(27,"code",4),t(28),e()()()(),n(29,"mat-tab",5)(30,"div",2)(31,"h2"),t(32,"useEffect Hook"),e(),n(33,"div",3)(34,"p")(35,"strong"),t(36,"useEffect"),e(),t(37," combines componentDidMount, componentDidUpdate, and componentWillUnmount into one API."),e(),n(38,"ul")(39,"li"),t(40,"Runs after render (side effects)"),e(),n(41,"li"),t(42,"Dependency array controls when it runs"),e(),n(43,"li"),t(44,"Return function for cleanup"),e(),n(45,"li"),t(46,"Can have multiple useEffect hooks"),e()()(),n(47,"pre")(48,"code",4),t(49),e()()()(),n(50,"mat-tab",6)(51,"div",2)(52,"h2"),t(53,"Common useEffect Patterns"),e(),n(54,"div",3)(55,"p"),t(56,"Learn common patterns for data fetching, event listeners, timers, and subscriptions."),e(),n(57,"ul")(58,"li"),t(59,"Data fetching with cleanup"),e(),n(60,"li"),t(61,"Event listener management"),e(),n(62,"li"),t(63,"Timer and interval cleanup"),e(),n(64,"li"),t(65,"Subscription handling"),e()()(),n(66,"pre")(67,"code",4),t(68),e()()()(),n(69,"mat-tab",7)(70,"div",2)(71,"h2"),t(72,"useLayoutEffect Hook"),e(),n(73,"div",3)(74,"p")(75,"strong"),t(76,"useLayoutEffect"),e(),t(77," runs synchronously after DOM mutations but before browser paint."),e(),n(78,"ul")(79,"li"),t(80,"Use for DOM measurements"),e(),n(81,"li"),t(82,"Synchronous DOM updates"),e(),n(83,"li"),t(84,"Prevents visual flickering"),e(),n(85,"li"),t(86,"Same API as useEffect"),e()()(),n(87,"pre")(88,"code",4),t(89),e()()()(),n(90,"mat-tab",8)(91,"div",2)(92,"h2"),t(93,"Class vs Hooks Comparison"),e(),n(94,"div",3)(95,"p"),t(96,"See how class lifecycle methods translate to hooks."),e()(),n(97,"pre")(98,"code",4),t(99),e()()()(),n(100,"mat-tab",9)(101,"div",2)(102,"h2"),t(103,"Lifecycle Best Practices"),e(),n(104,"div",10)(105,"h3"),t(106,"\u2713 Do's"),e(),n(107,"ul")(108,"li"),t(109,"Always clean up effects (remove listeners, cancel requests)"),e(),n(110,"li"),t(111,"Include all dependencies in dependency array"),e(),n(112,"li"),t(113,"Use multiple effects for different concerns"),e(),n(114,"li"),t(115,"Use functional updates to avoid dependencies"),e()()(),n(116,"div",11)(117,"h3"),t(118,"\u2717 Don'ts"),e(),n(119,"ul")(120,"li"),t(121,"Don't omit dependencies (use ESLint plugin)"),e(),n(122,"li"),t(123,"Don't create infinite loops with missing dependencies"),e(),n(124,"li"),t(125,"Don't perform side effects during render"),e()()(),n(126,"pre")(127,"code",4),t(128),e()()()()()()),a&2&&(o(28),i(s.classLifecycle),o(21),i(s.useEffectBasics),o(19),i(s.useEffectPatterns),o(21),i(s.useLayoutEffect),o(10),i(s.lifecycleComparison),o(29),i(s.bestPractices))},dependencies:[m,u,d],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#abb2bf;font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return r})();export{x as ReactLifecycleComponent};
