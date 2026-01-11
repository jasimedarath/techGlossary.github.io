import"./chunk-2BQE7O6T.js";import"./chunk-4ITEIGFF.js";import"./chunk-WCULWZKC.js";import{a as h}from"./chunk-FSUYFWSG.js";import{a as u,b as C,c as x,d as S}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as r,Xa as a,da as c,e as f,gb as t,hb as e,lb as l,tb as n,ub as s,yb as d}from"./chunk-WGQ2ELTG.js";var v=f(h());function g(i,m){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Server Components"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Server Components"),e(),n(7," are the default in Next.js App Router and render on the server."),e(),t(8,"ul")(9,"li"),n(10,"Default in App Router (no directive needed)"),e(),t(11,"li"),n(12,"Can be async functions"),e(),t(13,"li"),n(14,"Direct database and API access"),e(),t(15,"li"),n(16,"Zero JavaScript shipped to client"),e(),t(17,"li"),n(18,"Better security (sensitive data stays on server)"),e(),t(19,"li"),n(20,"Automatic code splitting"),e()()(),t(21,"pre")(22,"code",12),n(23),e()()()),i&2){let o=l();r(23),s(o.serverComponentBasics)}}function b(i,m){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Client Components"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Client Components"),e(),n(7," render in the browser and support interactivity."),e(),t(8,"ul")(9,"li"),n(10,"Mark with 'use client' directive"),e(),t(11,"li"),n(12,"Use React hooks (useState, useEffect, etc.)"),e(),t(13,"li"),n(14,"Event listeners (onClick, onChange, etc.)"),e(),t(15,"li"),n(16,"Access browser APIs"),e(),t(17,"li"),n(18,"Custom hooks"),e(),t(19,"li"),n(20,"Context API"),e()()(),t(21,"pre")(22,"code",12),n(23),e()()()),i&2){let o=l();r(23),s(o.clientComponentBasics)}}function E(i,m){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Component Composition"),e(),t(3,"div",11)(4,"p"),n(5,"Combine Server and Client Components for optimal performance."),e(),t(6,"ul")(7,"li"),n(8,"Server Components can import Client Components"),e(),t(9,"li"),n(10,"Pass Server Components as children to Client Components"),e(),t(11,"li"),n(12,"Keep as much on server as possible"),e(),t(13,"li"),n(14,"Client Components convert children to client"),e(),t(15,"li"),n(16,"Use props to pass data from server to client"),e(),t(17,"li"),n(18,"Strategic placement improves performance"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),i&2){let o=l();r(21),s(o.composition)}}function P(i,m){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Composition Patterns"),e(),t(3,"div",11)(4,"p"),n(5,"Best practices for composing Server and Client Components."),e(),t(6,"ul")(7,"li"),n(8,"\u2705 Pass Server Components as children props"),e(),t(9,"li"),n(10,"\u2705 Keep Server Components at top level"),e(),t(11,"li"),n(12,"\u274C Don't import Server into Client Components"),e(),t(13,"li"),n(14,"Use composition over direct imports"),e(),t(15,"li"),n(16,"Minimize Client Component boundaries"),e(),t(17,"li"),n(18,"Default to Server Components"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),i&2){let o=l();r(21),s(o.patterns)}}function w(i,m){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Data Flow"),e(),t(3,"div",11)(4,"p"),n(5,"How data flows between Server and Client Components."),e(),t(6,"ul")(7,"li"),n(8,"Server Components fetch data"),e(),t(9,"li"),n(10,"Pass data as props to Client Components"),e(),t(11,"li"),n(12,"Props must be serializable (JSON)"),e(),t(13,"li"),n(14,"Can't pass functions or class instances"),e(),t(15,"li"),n(16,"Server renders first, then hydrates client"),e(),t(17,"li"),n(18,"Client Components can fetch more data"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),i&2){let o=l();r(21),s(o.dataFlow)}}function y(i,m){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"When to Use Each"),e(),t(3,"div",11)(4,"p"),n(5,"Guidelines for choosing between Server and Client Components."),e(),t(6,"ul")(7,"li")(8,"strong"),n(9,"Server:"),e(),n(10," Data fetching, static content, backend access"),e(),t(11,"li")(12,"strong"),n(13,"Client:"),e(),n(14," Interactivity, hooks, browser APIs"),e(),t(15,"li"),n(16,"Default to Server Components"),e(),t(17,"li"),n(18,"Add 'use client' only when necessary"),e(),t(19,"li"),n(20,"Move interactivity down the tree"),e(),t(21,"li"),n(22,"Keep bundle size small"),e()()(),t(23,"pre")(24,"code",12),n(25),e()()()),i&2){let o=l();r(25),s(o.whenToUse)}}function _(i,m){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Context Providers"),e(),t(3,"div",11)(4,"p"),n(5,"Context providers must be Client Components but can wrap Server Components."),e(),t(6,"ul")(7,"li"),n(8,"Providers need 'use client'"),e(),t(9,"li"),n(10,"Wrap in root layout"),e(),t(11,"li"),n(12,"Children can be Server Components"),e(),t(13,"li"),n(14,"Use for theme, auth, i18n"),e(),t(15,"li"),n(16,"Create separate providers file"),e(),t(17,"li"),n(18,"Import context hooks in Client Components"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),i&2){let o=l();r(21),s(o.contextProviders)}}function T(i,m){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Third-Party Libraries"),e(),t(3,"div",11)(4,"p"),n(5,"Wrap third-party components that need client-side features."),e(),t(6,"ul")(7,"li"),n(8,"Many libraries need 'use client' wrapper"),e(),t(9,"li"),n(10,"Create wrapper components"),e(),t(11,"li"),n(12,"Keep wrapper minimal"),e(),t(13,"li"),n(14,"Libraries using hooks need client"),e(),t(15,"li"),n(16,"Libraries using browser APIs need client"),e(),t(17,"li"),n(18,"Isolate to smallest component"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),i&2){let o=l();r(21),s(o.thirdPartyLibraries)}}var U=(()=>{class i{constructor(){this.serverComponentBasics=`// Server Components (default in App Router)
// No 'use client' directive needed

// app/posts/page.tsx
async function getPosts() &#123;
  const res = await fetch('https://api.example.com/posts');
  return res.json();
&#125;

export default async function PostsPage() &#123;
  const posts = await getPosts();
  
  return (
    <div>
      <h1>Blog Posts</h1>
      &#123;posts.map((post: any) => (
        <article key=&#123;post.id&#125;>
          <h2>&#123;post.title&#125;</h2>
          <p>&#123;post.excerpt&#125;</p>
        </article>
      ))&#125;
    </div>
  );
&#125;

// Benefits:
// - Direct database/API access
// - Zero JavaScript to client
// - Automatic code splitting
// - Better security (API keys stay on server)
// - SEO-friendly`,this.clientComponentBasics=`// Client Components - interactive UI
// Mark with 'use client' at the top

'use client';

import &#123; useState &#125; from 'react';

export default function Counter() &#123;
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: &#123;count&#125;</p>
      <button onClick=&#123;() => setCount(count + 1)&#125;>
        Increment
      </button>
    </div>
  );
&#125;

// Use Client Components when you need:
// - useState, useEffect, other hooks
// - Event listeners (onClick, onChange, etc.)
// - Browser APIs (localStorage, window, etc.)
// - Custom hooks
// - Class components
// - Context API`,this.composition=`// Server and Client Component Composition

// app/page.tsx - Server Component (default)
import ClientCounter from './ClientCounter';
import ServerData from './ServerData';

async function getData() &#123;
  const res = await fetch('https://api.example.com/data');
  return res.json();
&#125;

export default async function Page() &#123;
  const data = await getData();
  
  return (
    <div>
      &#123;/* Server Component */&#125;
      <ServerData data=&#123;data&#125; />
      
      &#123;/* Client Component */&#125;
      <ClientCounter initialCount=&#123;data.count&#125; />
    </div>
  );
&#125;

// ServerData.tsx - Server Component
export default function ServerData(&#123; data &#125;: &#123; data: any &#125;) &#123;
  return <div>Server rendered: &#123;data.title&#125;</div>;
&#125;

// ClientCounter.tsx - Client Component
'use client';

import &#123; useState &#125; from 'react';

export default function ClientCounter(&#123; initialCount &#125;: &#123; initialCount: number &#125;) &#123;
  const [count, setCount] = useState(initialCount);
  return <button onClick=&#123;() => setCount(c => c + 1)&#125;>&#123;count&#125;</button>;
&#125;`,this.patterns=`// Composition Patterns

// \u2705 GOOD: Pass Server Component as children to Client Component
// layout.tsx (Server Component)
import Sidebar from './Sidebar'; // Client Component
import Feed from './Feed'; // Server Component

export default function Layout() &#123;
  return (
    <Sidebar>
      <Feed />
    </Sidebar>
  );
&#125;

// Sidebar.tsx (Client Component)
'use client';

export default function Sidebar(&#123; children &#125;: &#123; children: React.ReactNode &#125;) &#123;
  return (
    <aside>
      <nav>Navigation</nav>
      &#123;children&#125;
    </aside>
  );
&#125;

// \u274C BAD: Can't import Server Component into Client Component
'use client';

import ServerComponent from './ServerComponent'; // \u274C Won't work as Server Component

export default function ClientComponent() &#123;
  return <ServerComponent />; // Will be converted to Client Component
&#125;`,this.dataFlow=`// Data flow between Server and Client Components

// Server Component
async function getUser() &#123;
  const res = await fetch('https://api.example.com/user');
  return res.json();
&#125;

export default async function UserProfile() &#123;
  const user = await getUser();
  
  // Pass data as props to Client Component
  return (
    <div>
      <UserHeader user=&#123;user&#125; />
      <UserActions userId=&#123;user.id&#125; />
    </div>
  );
&#125;

// Client Component - receives data as props
'use client';

import &#123; useState &#125; from 'react';

export default function UserActions(&#123; userId &#125;: &#123; userId: string &#125;) &#123;
  const [following, setFollowing] = useState(false);
  
  const handleFollow = async () => &#123;
    await fetch(\`/api/follow/$&#123;userId&#125;\`, &#123; method: 'POST' &#125;);
    setFollowing(true);
  &#125;;
  
  return (
    <button onClick=&#123;handleFollow&#125;>
      &#123;following ? 'Following' : 'Follow'&#125;
    </button>
  );
&#125;

// Server Components can't pass:
// - Functions as props
// - Class instances
// - Symbols`,this.whenToUse=`// When to use Server vs Client Components

// \u2705 Use Server Components for:
// - Data fetching
// - Direct database access
// - Accessing backend resources
// - Keeping sensitive information on server
// - Large dependencies (keep on server)
// - Static content

async function ServerExample() &#123;
  const data = await db.query('SELECT * FROM posts');
  return <div>&#123;data.map(post => <Post key=&#123;post.id&#125; &#123;...post&#125; />)&#125;</div>;
&#125;

// \u2705 Use Client Components for:
// - Interactivity (event listeners)
// - State management (useState, useReducer)
// - Effects (useEffect)
// - Browser-only APIs
// - Custom hooks
// - Context providers

'use client';

import &#123; useState, useEffect &#125; from 'react';

function ClientExample() &#123;
  const [theme, setTheme] = useState('light');
  
  useEffect(() => &#123;
    const saved = localStorage.getItem('theme');
    if (saved) setTheme(saved);
  &#125;, []);
  
  return <button onClick=&#123;() => setTheme('dark')&#125;>Toggle Theme</button>;
&#125;

// Default to Server Components, add 'use client' only when needed`,this.contextProviders=`// Context providers must be Client Components

// app/providers.tsx
'use client';

import &#123; createContext, useContext, useState &#125; from 'react';

const ThemeContext = createContext<any>(null);

export function ThemeProvider(&#123; children &#125;: &#123; children: React.ReactNode &#125;) &#123;
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value=&#123;&#123; theme, setTheme &#125;&#125;>
      &#123;children&#125;
    </ThemeContext.Provider>
  );
&#125;

export function useTheme() &#123;
  return useContext(ThemeContext);
&#125;

// app/layout.tsx (Server Component)
import &#123; ThemeProvider &#125; from './providers';

export default function RootLayout(&#123; children &#125;: &#123; children: React.ReactNode &#125;) &#123;
  return (
    <html>
      <body>
        <ThemeProvider>
          &#123;children&#125;
        </ThemeProvider>
      </body>
    </html>
  );
&#125;

// Any component can now use the context
'use client';

import &#123; useTheme &#125; from './providers';

export default function ThemeToggle() &#123;
  const &#123; theme, setTheme &#125; = useTheme();
  return <button onClick=&#123;() => setTheme(theme === 'light' ? 'dark' : 'light')&#125;>&#123;theme&#125;</button>;
&#125;`,this.thirdPartyLibraries=`// Using third-party libraries with 'use client'

// Many libraries need 'use client' wrapper

// components/Carousel.tsx
'use client';

import ReactCarousel from 'react-awesome-slider';

export default function Carousel(&#123; images &#125;: &#123; images: string[] &#125;) &#123;
  return (
    <ReactCarousel>
      &#123;images.map((img, i) => (
        <div key=&#123;i&#125;>
          <img src=&#123;img&#125; alt=\`Slide $&#123;i&#125;\` />
        </div>
      ))&#125;
    </ReactCarousel>
  );
&#125;

// app/page.tsx (Server Component)
import Carousel from '@/components/Carousel';

export default function Page() &#123;
  return (
    <div>
      <h1>Gallery</h1>
      <Carousel images=&#123;['/1.jpg', '/2.jpg']&#125; />
    </div>
  );
&#125;

// Wrap libraries that use browser APIs or hooks
// Keep the rest of your app as Server Components`}ngAfterViewChecked(){v.highlightAll()}static{this.\u0275fac=function(p){return new(p||i)}}static{this.\u0275cmp=c({type:i,selectors:[["app-nextjs-servercomponents"]],standalone:!0,features:[d],decls:22,vars:0,consts:[[1,"container"],["label","Server Components"],["matTabContent",""],["label","Client Components"],["label","Composition"],["label","Patterns"],["label","Data Flow"],["label","When to Use"],["label","Context Providers"],["label","Third-Party Libraries"],[1,"tab-content"],[1,"info-box"],[1,"language-tsx"]],template:function(p,k){p&1&&(t(0,"div",0)(1,"h1"),n(2,"Next.js Server Components"),e(),t(3,"p"),n(4,"React Server Components allow you to render components on the server, reducing client-side JavaScript and improving performance."),e(),t(5,"mat-tab-group")(6,"mat-tab",1),a(7,g,24,1,"ng-template",2),e(),t(8,"mat-tab",3),a(9,b,24,1,"ng-template",2),e(),t(10,"mat-tab",4),a(11,E,22,1,"ng-template",2),e(),t(12,"mat-tab",5),a(13,P,22,1,"ng-template",2),e(),t(14,"mat-tab",6),a(15,w,22,1,"ng-template",2),e(),t(16,"mat-tab",7),a(17,y,26,1,"ng-template",2),e(),t(18,"mat-tab",8),a(19,_,22,1,"ng-template",2),e(),t(20,"mat-tab",9),a(21,T,22,1,"ng-template",2),e()()())},dependencies:[S,u,C,x],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return i})();export{U as NextjsServercomponentsComponent};
