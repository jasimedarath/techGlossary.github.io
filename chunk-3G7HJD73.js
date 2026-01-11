import"./chunk-4ITEIGFF.js";import"./chunk-WCULWZKC.js";import{a as h}from"./chunk-VDRUEQXK.js";import{a as f,b as x,c as E,d as g}from"./chunk-GNZ74KMC.js";import"./chunk-XAZLOLJU.js";import"./chunk-SZTU5CXE.js";import{Ia as s,Ya as a,da as u,e as b,hb as t,ib as e,mb as r,ub as n,vb as c,zb as d}from"./chunk-KMNIY7WT.js";var p=b(h());function C(i,l){if(i&1&&(t(0,"div",8)(1,"h2"),n(2,"Class Component Lifecycle"),e(),t(3,"div",9)(4,"p"),n(5,"Class components have lifecycle methods that run at specific points in a component's life."),e(),t(6,"ul")(7,"li")(8,"strong"),n(9,"Mounting:"),e(),n(10," constructor \u2192 getDerivedStateFromProps \u2192 render \u2192 componentDidMount"),e(),t(11,"li")(12,"strong"),n(13,"Updating:"),e(),n(14," getDerivedStateFromProps \u2192 shouldComponentUpdate \u2192 render \u2192 getSnapshotBeforeUpdate \u2192 componentDidUpdate"),e(),t(15,"li")(16,"strong"),n(17,"Unmounting:"),e(),n(18," componentWillUnmount"),e()()(),t(19,"pre")(20,"code",10),n(21),e()()()),i&2){let o=r();s(21),c(o.classLifecycle)}}function S(i,l){if(i&1&&(t(0,"div",8)(1,"h2"),n(2,"useEffect Hook"),e(),t(3,"div",9)(4,"p")(5,"strong"),n(6,"useEffect"),e(),n(7," combines componentDidMount, componentDidUpdate, and componentWillUnmount into one API."),e(),t(8,"ul")(9,"li"),n(10,"Runs after render (side effects)"),e(),t(11,"li"),n(12,"Dependency array controls when it runs"),e(),t(13,"li"),n(14,"Return function for cleanup"),e(),t(15,"li"),n(16,"Can have multiple useEffect hooks"),e()()(),t(17,"pre")(18,"code",10),n(19),e()()()),i&2){let o=r();s(19),c(o.useEffectBasics)}}function y(i,l){if(i&1&&(t(0,"div",8)(1,"h2"),n(2,"Common useEffect Patterns"),e(),t(3,"div",9)(4,"p"),n(5,"Learn common patterns for data fetching, event listeners, timers, and subscriptions."),e(),t(6,"ul")(7,"li"),n(8,"Data fetching with cleanup"),e(),t(9,"li"),n(10,"Event listener management"),e(),t(11,"li"),n(12,"Timer and interval cleanup"),e(),t(13,"li"),n(14,"Subscription handling"),e()()(),t(15,"pre")(16,"code",10),n(17),e()()()),i&2){let o=r();s(17),c(o.useEffectPatterns)}}function v(i,l){if(i&1&&(t(0,"div",8)(1,"h2"),n(2,"useLayoutEffect Hook"),e(),t(3,"div",9)(4,"p")(5,"strong"),n(6,"useLayoutEffect"),e(),n(7," runs synchronously after DOM mutations but before browser paint."),e(),t(8,"ul")(9,"li"),n(10,"Use for DOM measurements"),e(),t(11,"li"),n(12,"Synchronous DOM updates"),e(),t(13,"li"),n(14,"Prevents visual flickering"),e(),t(15,"li"),n(16,"Same API as useEffect"),e()()(),t(17,"pre")(18,"code",10),n(19),e()()()),i&2){let o=r();s(19),c(o.useLayoutEffect)}}function _(i,l){if(i&1&&(t(0,"div",8)(1,"h2"),n(2,"Class vs Hooks Comparison"),e(),t(3,"div",9)(4,"p"),n(5,"See how class lifecycle methods translate to hooks."),e()(),t(6,"pre")(7,"code",10),n(8),e()()()),i&2){let o=r();s(8),c(o.lifecycleComparison)}}function P(i,l){if(i&1&&(t(0,"div",8)(1,"h2"),n(2,"Lifecycle Best Practices"),e(),t(3,"div",11)(4,"h3"),n(5,"\u2713 Do's"),e(),t(6,"ul")(7,"li"),n(8,"Always clean up effects (remove listeners, cancel requests)"),e(),t(9,"li"),n(10,"Include all dependencies in dependency array"),e(),t(11,"li"),n(12,"Use multiple effects for different concerns"),e(),t(13,"li"),n(14,"Use functional updates to avoid dependencies"),e()()(),t(15,"div",12)(16,"h3"),n(17,"\u2717 Don'ts"),e(),t(18,"ul")(19,"li"),n(20,"Don't omit dependencies (use ESLint plugin)"),e(),t(21,"li"),n(22,"Don't create infinite loops with missing dependencies"),e(),t(23,"li"),n(24,"Don't perform side effects during render"),e()()(),t(25,"pre")(26,"code",10),n(27),e()()()),i&2){let o=r();s(27),c(o.bestPractices)}}var O=(()=>{class i{constructor(){this.classLifecycle=`// Class Component Lifecycle Methods
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
}, []);`}ngAfterViewChecked(){typeof p<"u"&&p.highlightAll()}static{this.\u0275fac=function(m){return new(m||i)}}static{this.\u0275cmp=u({type:i,selectors:[["app-react-lifecycle"]],standalone:!0,features:[d],decls:18,vars:0,consts:[[1,"container"],["label","Class Lifecycle"],["matTabContent",""],["label","useEffect Basics"],["label","useEffect Patterns"],["label","useLayoutEffect"],["label","Lifecycle Comparison"],["label","Best Practices"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],[1,"info-box","success"],[1,"info-box","warning"]],template:function(m,D){m&1&&(t(0,"div",0)(1,"h1"),n(2,"React Lifecycle & Effects"),e(),t(3,"p"),n(4,"Understanding React component lifecycle methods in class components and their functional equivalents using hooks."),e(),t(5,"mat-tab-group")(6,"mat-tab",1),a(7,C,22,1,"ng-template",2),e(),t(8,"mat-tab",3),a(9,S,20,1,"ng-template",2),e(),t(10,"mat-tab",4),a(11,y,18,1,"ng-template",2),e(),t(12,"mat-tab",5),a(13,v,20,1,"ng-template",2),e(),t(14,"mat-tab",6),a(15,_,9,1,"ng-template",2),e(),t(16,"mat-tab",7),a(17,P,28,1,"ng-template",2),e()()())},dependencies:[g,f,x,E],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return i})();export{O as ReactLifecycleComponent};
