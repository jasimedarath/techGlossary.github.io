import{b as d,c as u,d as m}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as i,da as l,gb as n,hb as t,tb as e,ub as r,yb as c}from"./chunk-WGQ2ELTG.js";var S=(()=>{class o{constructor(){this.concurrentRendering=`// Concurrent Rendering in React 18
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
}`,this.transitions=`// useTransition - Mark updates as non-urgent
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
}`,this.suspense=`// Suspense - Show fallback while loading
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
}`,this.automaticBatching=`// Automatic Batching in React 18
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
}`,this.serverComponents=`// React Server Components (RSC)
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
// - Automatic code splitting`,this.newHooks=`// New Hooks in React 18

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
}`}ngAfterViewChecked(){typeof Prism<"u"&&Prism.highlightAll()}static{this.\u0275fac=function(s){return new(s||o)}}static{this.\u0275cmp=l({type:o,selectors:[["app-react-react18"]],standalone:!0,features:[c],decls:135,vars:6,consts:[[1,"container"],["label","Concurrent Rendering"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],["label","Transitions"],["label","Suspense"],["label","Automatic Batching"],["label","Server Components"],["label","New Hooks"]],template:function(s,a){s&1&&(n(0,"div",0)(1,"h1"),e(2,"React 18 Features"),t(),n(3,"p"),e(4,"Explore the latest features introduced in React 18, including concurrent rendering, transitions, and server components."),t(),n(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),e(9,"Concurrent Rendering"),t(),n(10,"div",3)(11,"p")(12,"strong"),e(13,"Concurrent Rendering"),t(),e(14," allows React to work on multiple tasks simultaneously and prioritize urgent updates."),t(),n(15,"ul")(16,"li"),e(17,"Interruptible rendering process"),t(),n(18,"li"),e(19,"Prioritize user interactions"),t(),n(20,"li"),e(21,"Better perceived performance"),t(),n(22,"li"),e(23,"New root API with createRoot"),t()()(),n(24,"pre")(25,"code",4),e(26),t()()()(),n(27,"mat-tab",5)(28,"div",2)(29,"h2"),e(30,"Transitions & Deferred Values"),t(),n(31,"div",3)(32,"p")(33,"strong"),e(34,"useTransition"),t(),e(35," and "),n(36,"strong"),e(37,"useDeferredValue"),t(),e(38," help distinguish urgent from non-urgent updates."),t(),n(39,"ul")(40,"li"),e(41,"useTransition marks updates as transitions"),t(),n(42,"li"),e(43,"useDeferredValue defers value updates"),t(),n(44,"li"),e(45,"Keep UI responsive during heavy updates"),t(),n(46,"li"),e(47,"Show pending states"),t()()(),n(48,"pre")(49,"code",4),e(50),t()()()(),n(51,"mat-tab",6)(52,"div",2)(53,"h2"),e(54,"Suspense for Data Fetching"),t(),n(55,"div",3)(56,"p")(57,"strong"),e(58,"Suspense"),t(),e(59,' allows components to "wait" for something before rendering.'),t(),n(60,"ul")(61,"li"),e(62,"Code splitting with React.lazy"),t(),n(63,"li"),e(64,"Data fetching (experimental)"),t(),n(65,"li"),e(66,"Nested loading states"),t(),n(67,"li"),e(68,"Better loading UX"),t()()(),n(69,"pre")(70,"code",4),e(71),t()()()(),n(72,"mat-tab",7)(73,"div",2)(74,"h2"),e(75,"Automatic Batching"),t(),n(76,"div",3)(77,"p"),e(78,"React 18 automatically batches all state updates, even in promises, timeouts, and event handlers."),t(),n(79,"ul")(80,"li"),e(81,"Fewer renders, better performance"),t(),n(82,"li"),e(83,"Works in all contexts"),t(),n(84,"li"),e(85,"flushSync to opt-out"),t(),n(86,"li"),e(87,"Backwards compatible"),t()()(),n(88,"pre")(89,"code",4),e(90),t()()()(),n(91,"mat-tab",8)(92,"div",2)(93,"h2"),e(94,"React Server Components"),t(),n(95,"div",3)(96,"p")(97,"strong"),e(98,"Server Components"),t(),e(99," run only on the server, reducing bundle size and enabling direct backend access."),t(),n(100,"ul")(101,"li"),e(102,"Zero bundle size for server components"),t(),n(103,"li"),e(104,"Direct database/file system access"),t(),n(105,"li"),e(106,"Automatic code splitting"),t(),n(107,"li"),e(108,"Better performance"),t()()(),n(109,"pre")(110,"code",4),e(111),t()()()(),n(112,"mat-tab",9)(113,"div",2)(114,"h2"),e(115,"New Hooks in React 18"),t(),n(116,"div",3)(117,"p"),e(118,"React 18 introduces new hooks for specific use cases."),t(),n(119,"ul")(120,"li")(121,"strong"),e(122,"useId:"),t(),e(123," Generate unique IDs for accessibility"),t(),n(124,"li")(125,"strong"),e(126,"useSyncExternalStore:"),t(),e(127," Subscribe to external stores"),t(),n(128,"li")(129,"strong"),e(130,"useInsertionEffect:"),t(),e(131," CSS-in-JS libraries"),t()()(),n(132,"pre")(133,"code",4),e(134),t()()()()()()),s&2&&(i(26),r(a.concurrentRendering),i(24),r(a.transitions),i(21),r(a.suspense),i(19),r(a.automaticBatching),i(21),r(a.serverComponents),i(23),r(a.newHooks))},dependencies:[m,d,u],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#abb2bf;font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return o})();export{S as ReactReact18Component};
