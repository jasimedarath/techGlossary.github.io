import"./chunk-4ITEIGFF.js";import"./chunk-WCULWZKC.js";import{a as h}from"./chunk-VDRUEQXK.js";import{a as f,b as g,c as x,d as S}from"./chunk-GNZ74KMC.js";import"./chunk-XAZLOLJU.js";import"./chunk-SZTU5CXE.js";import{Ia as r,Ya as o,da as u,e as b,hb as n,ib as e,mb as s,ub as t,vb as l,zb as p}from"./chunk-KMNIY7WT.js";var m=b(h());function C(i,c){if(i&1&&(n(0,"div",8)(1,"h2"),t(2,"Concurrent Rendering"),e(),n(3,"div",9)(4,"p")(5,"strong"),t(6,"Concurrent Rendering"),e(),t(7," allows React to work on multiple tasks simultaneously and prioritize urgent updates."),e(),n(8,"ul")(9,"li"),t(10,"Interruptible rendering process"),e(),n(11,"li"),t(12,"Prioritize user interactions"),e(),n(13,"li"),t(14,"Better perceived performance"),e(),n(15,"li"),t(16,"New root API with createRoot"),e()()(),n(17,"pre")(18,"code",10),t(19),e()()()),i&2){let a=s();r(19),l(a.concurrentRendering)}}function E(i,c){if(i&1&&(n(0,"div",8)(1,"h2"),t(2,"Transitions & Deferred Values"),e(),n(3,"div",9)(4,"p")(5,"strong"),t(6,"useTransition"),e(),t(7," and "),n(8,"strong"),t(9,"useDeferredValue"),e(),t(10," help distinguish urgent from non-urgent updates."),e(),n(11,"ul")(12,"li"),t(13,"useTransition marks updates as transitions"),e(),n(14,"li"),t(15,"useDeferredValue defers value updates"),e(),n(16,"li"),t(17,"Keep UI responsive during heavy updates"),e(),n(18,"li"),t(19,"Show pending states"),e()()(),n(20,"pre")(21,"code",10),t(22),e()()()),i&2){let a=s();r(22),l(a.transitions)}}function v(i,c){if(i&1&&(n(0,"div",8)(1,"h2"),t(2,"Suspense for Data Fetching"),e(),n(3,"div",9)(4,"p")(5,"strong"),t(6,"Suspense"),e(),t(7,' allows components to "wait" for something before rendering.'),e(),n(8,"ul")(9,"li"),t(10,"Code splitting with React.lazy"),e(),n(11,"li"),t(12,"Data fetching (experimental)"),e(),n(13,"li"),t(14,"Nested loading states"),e(),n(15,"li"),t(16,"Better loading UX"),e()()(),n(17,"pre")(18,"code",10),t(19),e()()()),i&2){let a=s();r(19),l(a.suspense)}}function R(i,c){if(i&1&&(n(0,"div",8)(1,"h2"),t(2,"Automatic Batching"),e(),n(3,"div",9)(4,"p"),t(5,"React 18 automatically batches all state updates, even in promises, timeouts, and event handlers."),e(),n(6,"ul")(7,"li"),t(8,"Fewer renders, better performance"),e(),n(9,"li"),t(10,"Works in all contexts"),e(),n(11,"li"),t(12,"flushSync to opt-out"),e(),n(13,"li"),t(14,"Backwards compatible"),e()()(),n(15,"pre")(16,"code",10),t(17),e()()()),i&2){let a=s();r(17),l(a.automaticBatching)}}function y(i,c){if(i&1&&(n(0,"div",8)(1,"h2"),t(2,"React Server Components"),e(),n(3,"div",9)(4,"p")(5,"strong"),t(6,"Server Components"),e(),t(7," run only on the server, reducing bundle size and enabling direct backend access."),e(),n(8,"ul")(9,"li"),t(10,"Zero bundle size for server components"),e(),n(11,"li"),t(12,"Direct database/file system access"),e(),n(13,"li"),t(14,"Automatic code splitting"),e(),n(15,"li"),t(16,"Better performance"),e()()(),n(17,"pre")(18,"code",10),t(19),e()()()),i&2){let a=s();r(19),l(a.serverComponents)}}function P(i,c){if(i&1&&(n(0,"div",8)(1,"h2"),t(2,"New Hooks in React 18"),e(),n(3,"div",9)(4,"p"),t(5,"React 18 introduces new hooks for specific use cases."),e(),n(6,"ul")(7,"li")(8,"strong"),t(9,"useId:"),e(),t(10," Generate unique IDs for accessibility"),e(),n(11,"li")(12,"strong"),t(13,"useSyncExternalStore:"),e(),t(14," Subscribe to external stores"),e(),n(15,"li")(16,"strong"),t(17,"useInsertionEffect:"),e(),t(18," CSS-in-JS libraries"),e()()(),n(19,"pre")(20,"code",10),t(21),e()()()),i&2){let a=s();r(21),l(a.newHooks)}}var I=(()=>{class i{constructor(){this.concurrentRendering=`// Concurrent Rendering in React 18
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
}`}ngAfterViewChecked(){typeof m<"u"&&m.highlightAll()}static{this.\u0275fac=function(d){return new(d||i)}}static{this.\u0275cmp=u({type:i,selectors:[["app-react-react18"]],standalone:!0,features:[p],decls:18,vars:0,consts:[[1,"container"],["label","Concurrent Rendering"],["matTabContent",""],["label","Transitions"],["label","Suspense"],["label","Automatic Batching"],["label","Server Components"],["label","New Hooks"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"]],template:function(d,_){d&1&&(n(0,"div",0)(1,"h1"),t(2,"React 18 Features"),e(),n(3,"p"),t(4,"Explore the latest features introduced in React 18, including concurrent rendering, transitions, and server components."),e(),n(5,"mat-tab-group")(6,"mat-tab",1),o(7,C,20,1,"ng-template",2),e(),n(8,"mat-tab",3),o(9,E,23,1,"ng-template",2),e(),n(10,"mat-tab",4),o(11,v,20,1,"ng-template",2),e(),n(12,"mat-tab",5),o(13,R,18,1,"ng-template",2),e(),n(14,"mat-tab",6),o(15,y,20,1,"ng-template",2),e(),n(16,"mat-tab",7),o(17,P,22,1,"ng-template",2),e()()())},dependencies:[S,f,g,x],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return i})();export{I as ReactReact18Component};
