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

// src/app/components/react/react-react18/react-react18.component.ts
var ReactReact18Component = class _ReactReact18Component {
  constructor() {
    this.concurrentRendering = `// Concurrent Rendering in React 18
// Allows React to work on multiple tasks simultaneously

import { createRoot } from 'react-dom/client';

// React 18 root API
const root = createRoot(document.getElementById('root'));
root.render(<App />);

// Legacy API (React 17)
// ReactDOM.render(<App />, document.getElementById('root'));

// Benefits of Concurrent Rendering:
// - Interruptible rendering
// - Prioritize urgent updates
// - Better user experience
// - Automatic batching of updates

// Example: Urgent vs Non-urgent updates
function SearchResults() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    // Urgent: Update input immediately
    setQuery(e.target.value);
    
    // Non-urgent: Search can be deferred
    startTransition(() => {
      const newResults = searchData(e.target.value);
      setResults(newResults);
    });
  };

  return (
    <div>
      <input value={query} onChange={handleChange} />
      <ResultsList results={results} />
    </div>
  );
}`;
    this.transitions = `// useTransition - Mark updates as non-urgent
import { useState, useTransition } from 'react';

function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('home');

  const selectTab = (nextTab) => {
    startTransition(() => {
      setTab(nextTab);
    });
  };

  return (
    <div>
      <button onClick={() => selectTab('home')}>Home</button>
      <button onClick={() => selectTab('posts')}>
        Posts {isPending && '(Loading...)'}
      </button>
      <button onClick={() => selectTab('profile')}>Profile</button>
      
      {isPending && <Spinner />}
      <TabContent tab={tab} />
    </div>
  );
}

// useDeferredValue - Defer re-rendering of non-critical parts
function SearchPage({ query }) {
  const deferredQuery = useDeferredValue(query);
  
  // deferredQuery updates after urgent updates complete
  return (
    <div>
      <input value={query} />
      <Suspense fallback={<Spinner />}>
        <SearchResults query={deferredQuery} />
      </Suspense>
    </div>
  );
}`;
    this.suspense = `// Suspense - Show fallback while loading
import { Suspense, lazy } from 'react';

// Code splitting with Suspense
const ProfilePage = lazy(() => import('./ProfilePage'));
const PostsPage = lazy(() => import('./PostsPage'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ProfilePage />
      <Suspense fallback={<PostsLoading />}>
        <PostsPage />
      </Suspense>
    </Suspense>
  );
}

// Data fetching with Suspense (experimental)
const resource = fetchProfileData();

function ProfileDetails() {
  // Suspends while data is loading
  const user = resource.user.read();
  return <h1>{user.name}</h1>;
}

function ProfilePage() {
  return (
    <Suspense fallback={<h2>Loading profile...</h2>}>
      <ProfileDetails />
      <Suspense fallback={<h2>Loading posts...</h2>}>
        <ProfilePosts />
      </Suspense>
    </Suspense>
  );
}`;
    this.automaticBatching = `// Automatic Batching in React 18
// Multiple state updates are automatically batched

// React 17: Only batched in event handlers
function handleClick() {
  setCount(c => c + 1);
  setFlag(f => !f);
  // Only 1 render
}

// React 17: Not batched in promises/timeouts
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // 2 renders in React 17!
}, 1000);

// React 18: All updates are batched
function handleClick() {
  fetch('/api/data').then(() => {
    setCount(c => c + 1);
    setFlag(f => !f);
    // Only 1 render in React 18!
  });
}

// Opt-out of batching if needed
import { flushSync } from 'react-dom';

function handleClick() {
  flushSync(() => {
    setCount(c => c + 1);
  });
  // React renders immediately
  
  flushSync(() => {
    setFlag(f => !f);
  });
  // React renders again
}`;
    this.serverComponents = `// React Server Components (RSC)
// Components that run only on the server

// Server Component (runs on server)
// server.js or .server.jsx
async function NoteList() {
  // Direct database access on server
  const notes = await db.query('SELECT * FROM notes');
  
  return (
    <ul>
      {notes.map(note => (
        <li key={note.id}>
          <Note note={note} />
        </li>
      ))}
    </ul>
  );
}

// Client Component (runs on client)
// client.js or .client.jsx
'use client';

function EditButton({ noteId }) {
  const [editing, setEditing] = useState(false);
  
  return (
    <button onClick={() => setEditing(true)}>
      Edit
    </button>
  );
}

// Benefits:
// - Zero bundle size for server components
// - Direct backend access
// - Better performance
// - Automatic code splitting`;
    this.newHooks = `// New Hooks in React 18

// useId - Generate unique IDs
function NameFields() {
  const id = useId();
  
  return (
    <div>
      <label htmlFor={id + '-firstName'}>First Name</label>
      <input id={id + '-firstName'} />
      
      <label htmlFor={id + '-lastName'}>Last Name</label>
      <input id={id + '-lastName'} />
    </div>
  );
}

// useSyncExternalStore - Subscribe to external stores
import { useSyncExternalStore } from 'react';

function useOnlineStatus() {
  return useSyncExternalStore(
    // Subscribe
    (callback) => {
      window.addEventListener('online', callback);
      window.addEventListener('offline', callback);
      return () => {
        window.removeEventListener('online', callback);
        window.removeEventListener('offline', callback);
      };
    },
    // Get snapshot
    () => navigator.onLine,
    // Server snapshot
    () => true
  );
}

// useInsertionEffect - CSS-in-JS libraries
function useCSS(rule) {
  useInsertionEffect(() => {
    document.head.appendChild(createStyleElement(rule));
  });
}`;
  }
  ngAfterViewChecked() {
    if (typeof Prism !== "undefined") {
      Prism.highlightAll();
    }
  }
  static {
    this.\u0275fac = function ReactReact18Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReactReact18Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReactReact18Component, selectors: [["app-react-react18"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 135, vars: 6, consts: [[1, "container"], ["label", "Concurrent Rendering"], [1, "tab-content"], [1, "info-box"], [1, "language-jsx"], ["label", "Transitions"], ["label", "Suspense"], ["label", "Automatic Batching"], ["label", "Server Components"], ["label", "New Hooks"]], template: function ReactReact18Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "React 18 Features");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Explore the latest features introduced in React 18, including concurrent rendering, transitions, and server components.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "Concurrent Rendering");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "Concurrent Rendering");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " allows React to work on multiple tasks simultaneously and prioritize urgent updates.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "Interruptible rendering process");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "Prioritize user interactions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li");
        \u0275\u0275text(21, "Better perceived performance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275text(23, "New root API with createRoot");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "pre")(25, "code", 4);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "mat-tab", 5)(28, "div", 2)(29, "h2");
        \u0275\u0275text(30, "Transitions & Deferred Values");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 3)(32, "p")(33, "strong");
        \u0275\u0275text(34, "useTransition");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " and ");
        \u0275\u0275elementStart(36, "strong");
        \u0275\u0275text(37, "useDeferredValue");
        \u0275\u0275elementEnd();
        \u0275\u0275text(38, " help distinguish urgent from non-urgent updates.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "ul")(40, "li");
        \u0275\u0275text(41, "useTransition marks updates as transitions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "li");
        \u0275\u0275text(43, "useDeferredValue defers value updates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "li");
        \u0275\u0275text(45, "Keep UI responsive during heavy updates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "li");
        \u0275\u0275text(47, "Show pending states");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "pre")(49, "code", 4);
        \u0275\u0275text(50);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(51, "mat-tab", 6)(52, "div", 2)(53, "h2");
        \u0275\u0275text(54, "Suspense for Data Fetching");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 3)(56, "p")(57, "strong");
        \u0275\u0275text(58, "Suspense");
        \u0275\u0275elementEnd();
        \u0275\u0275text(59, ' allows components to "wait" for something before rendering.');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "ul")(61, "li");
        \u0275\u0275text(62, "Code splitting with React.lazy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "li");
        \u0275\u0275text(64, "Data fetching (experimental)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "li");
        \u0275\u0275text(66, "Nested loading states");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "li");
        \u0275\u0275text(68, "Better loading UX");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(69, "pre")(70, "code", 4);
        \u0275\u0275text(71);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(72, "mat-tab", 7)(73, "div", 2)(74, "h2");
        \u0275\u0275text(75, "Automatic Batching");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "div", 3)(77, "p");
        \u0275\u0275text(78, "React 18 automatically batches all state updates, even in promises, timeouts, and event handlers.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "ul")(80, "li");
        \u0275\u0275text(81, "Fewer renders, better performance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "li");
        \u0275\u0275text(83, "Works in all contexts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "li");
        \u0275\u0275text(85, "flushSync to opt-out");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "li");
        \u0275\u0275text(87, "Backwards compatible");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(88, "pre")(89, "code", 4);
        \u0275\u0275text(90);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(91, "mat-tab", 8)(92, "div", 2)(93, "h2");
        \u0275\u0275text(94, "React Server Components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "div", 3)(96, "p")(97, "strong");
        \u0275\u0275text(98, "Server Components");
        \u0275\u0275elementEnd();
        \u0275\u0275text(99, " run only on the server, reducing bundle size and enabling direct backend access.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "ul")(101, "li");
        \u0275\u0275text(102, "Zero bundle size for server components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "li");
        \u0275\u0275text(104, "Direct database/file system access");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "li");
        \u0275\u0275text(106, "Automatic code splitting");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "li");
        \u0275\u0275text(108, "Better performance");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(109, "pre")(110, "code", 4);
        \u0275\u0275text(111);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(112, "mat-tab", 9)(113, "div", 2)(114, "h2");
        \u0275\u0275text(115, "New Hooks in React 18");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "div", 3)(117, "p");
        \u0275\u0275text(118, "React 18 introduces new hooks for specific use cases.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "ul")(120, "li")(121, "strong");
        \u0275\u0275text(122, "useId:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(123, " Generate unique IDs for accessibility");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "li")(125, "strong");
        \u0275\u0275text(126, "useSyncExternalStore:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(127, " Subscribe to external stores");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "li")(129, "strong");
        \u0275\u0275text(130, "useInsertionEffect:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(131, " CSS-in-JS libraries");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(132, "pre")(133, "code", 4);
        \u0275\u0275text(134);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(26);
        \u0275\u0275textInterpolate(ctx.concurrentRendering);
        \u0275\u0275advance(24);
        \u0275\u0275textInterpolate(ctx.transitions);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.suspense);
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(ctx.automaticBatching);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.serverComponents);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.newHooks);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #61dafb;\n  margin-bottom: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #282c34;\n  margin-top: 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  padding: 15px;\n  margin: 15px 0;\n  border-radius: 4px;\n}\n.info-box.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-left-color: #4caf50;\n}\n.info-box.warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #ff9800;\n}\n.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1976d2;\n}\n.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding-left: 20px;\n}\n.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05);\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\npre[_ngcontent-%COMP%] {\n  background: #282c34;\n  border-radius: 4px;\n  overflow-x: auto;\n  margin: 15px 0;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #abb2bf;\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n  font-size: 14px;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=react-react18.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReactReact18Component, { className: "ReactReact18Component", filePath: "src\\app\\components\\react\\react-react18\\react-react18.component.ts", lineNumber: 13 });
})();
export {
  ReactReact18Component
};
//# sourceMappingURL=chunk-UETCDFZF.js.map
