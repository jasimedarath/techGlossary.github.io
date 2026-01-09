import{b as d,c as p,d as c}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as i,da as s,gb as n,hb as e,tb as t,ub as o,yb as m}from"./chunk-WGQ2ELTG.js";var v=(()=>{class a{constructor(){this.serverComponentBasics=`// Server Components (default in App Router)
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
// Keep the rest of your app as Server Components`}ngAfterViewChecked(){Prism.highlightAll()}static{this.\u0275fac=function(l){return new(l||a)}}static{this.\u0275cmp=s({type:a,selectors:[["app-nextjs-servercomponents"]],standalone:!0,features:[m],decls:198,vars:8,consts:[[1,"container"],["label","Server Components"],[1,"tab-content"],[1,"info-box"],[1,"language-tsx"],["label","Client Components"],["label","Composition"],["label","Patterns"],["label","Data Flow"],["label","When to Use"],["label","Context Providers"],["label","Third-Party Libraries"]],template:function(l,r){l&1&&(n(0,"div",0)(1,"h1"),t(2,"Next.js Server Components"),e(),n(3,"p"),t(4,"React Server Components allow you to render components on the server, reducing client-side JavaScript and improving performance."),e(),n(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),t(9,"Server Components"),e(),n(10,"div",3)(11,"p")(12,"strong"),t(13,"Server Components"),e(),t(14," are the default in Next.js App Router and render on the server."),e(),n(15,"ul")(16,"li"),t(17,"Default in App Router (no directive needed)"),e(),n(18,"li"),t(19,"Can be async functions"),e(),n(20,"li"),t(21,"Direct database and API access"),e(),n(22,"li"),t(23,"Zero JavaScript shipped to client"),e(),n(24,"li"),t(25,"Better security (sensitive data stays on server)"),e(),n(26,"li"),t(27,"Automatic code splitting"),e()()(),n(28,"pre")(29,"code",4),t(30),e()()()(),n(31,"mat-tab",5)(32,"div",2)(33,"h2"),t(34,"Client Components"),e(),n(35,"div",3)(36,"p")(37,"strong"),t(38,"Client Components"),e(),t(39," render in the browser and support interactivity."),e(),n(40,"ul")(41,"li"),t(42,"Mark with 'use client' directive"),e(),n(43,"li"),t(44,"Use React hooks (useState, useEffect, etc.)"),e(),n(45,"li"),t(46,"Event listeners (onClick, onChange, etc.)"),e(),n(47,"li"),t(48,"Access browser APIs"),e(),n(49,"li"),t(50,"Custom hooks"),e(),n(51,"li"),t(52,"Context API"),e()()(),n(53,"pre")(54,"code",4),t(55),e()()()(),n(56,"mat-tab",6)(57,"div",2)(58,"h2"),t(59,"Component Composition"),e(),n(60,"div",3)(61,"p"),t(62,"Combine Server and Client Components for optimal performance."),e(),n(63,"ul")(64,"li"),t(65,"Server Components can import Client Components"),e(),n(66,"li"),t(67,"Pass Server Components as children to Client Components"),e(),n(68,"li"),t(69,"Keep as much on server as possible"),e(),n(70,"li"),t(71,"Client Components convert children to client"),e(),n(72,"li"),t(73,"Use props to pass data from server to client"),e(),n(74,"li"),t(75,"Strategic placement improves performance"),e()()(),n(76,"pre")(77,"code",4),t(78),e()()()(),n(79,"mat-tab",7)(80,"div",2)(81,"h2"),t(82,"Composition Patterns"),e(),n(83,"div",3)(84,"p"),t(85,"Best practices for composing Server and Client Components."),e(),n(86,"ul")(87,"li"),t(88,"\u2705 Pass Server Components as children props"),e(),n(89,"li"),t(90,"\u2705 Keep Server Components at top level"),e(),n(91,"li"),t(92,"\u274C Don't import Server into Client Components"),e(),n(93,"li"),t(94,"Use composition over direct imports"),e(),n(95,"li"),t(96,"Minimize Client Component boundaries"),e(),n(97,"li"),t(98,"Default to Server Components"),e()()(),n(99,"pre")(100,"code",4),t(101),e()()()(),n(102,"mat-tab",8)(103,"div",2)(104,"h2"),t(105,"Data Flow"),e(),n(106,"div",3)(107,"p"),t(108,"How data flows between Server and Client Components."),e(),n(109,"ul")(110,"li"),t(111,"Server Components fetch data"),e(),n(112,"li"),t(113,"Pass data as props to Client Components"),e(),n(114,"li"),t(115,"Props must be serializable (JSON)"),e(),n(116,"li"),t(117,"Can't pass functions or class instances"),e(),n(118,"li"),t(119,"Server renders first, then hydrates client"),e(),n(120,"li"),t(121,"Client Components can fetch more data"),e()()(),n(122,"pre")(123,"code",4),t(124),e()()()(),n(125,"mat-tab",9)(126,"div",2)(127,"h2"),t(128,"When to Use Each"),e(),n(129,"div",3)(130,"p"),t(131,"Guidelines for choosing between Server and Client Components."),e(),n(132,"ul")(133,"li")(134,"strong"),t(135,"Server:"),e(),t(136," Data fetching, static content, backend access"),e(),n(137,"li")(138,"strong"),t(139,"Client:"),e(),t(140," Interactivity, hooks, browser APIs"),e(),n(141,"li"),t(142,"Default to Server Components"),e(),n(143,"li"),t(144,"Add 'use client' only when necessary"),e(),n(145,"li"),t(146,"Move interactivity down the tree"),e(),n(147,"li"),t(148,"Keep bundle size small"),e()()(),n(149,"pre")(150,"code",4),t(151),e()()()(),n(152,"mat-tab",10)(153,"div",2)(154,"h2"),t(155,"Context Providers"),e(),n(156,"div",3)(157,"p"),t(158,"Context providers must be Client Components but can wrap Server Components."),e(),n(159,"ul")(160,"li"),t(161,"Providers need 'use client'"),e(),n(162,"li"),t(163,"Wrap in root layout"),e(),n(164,"li"),t(165,"Children can be Server Components"),e(),n(166,"li"),t(167,"Use for theme, auth, i18n"),e(),n(168,"li"),t(169,"Create separate providers file"),e(),n(170,"li"),t(171,"Import context hooks in Client Components"),e()()(),n(172,"pre")(173,"code",4),t(174),e()()()(),n(175,"mat-tab",11)(176,"div",2)(177,"h2"),t(178,"Third-Party Libraries"),e(),n(179,"div",3)(180,"p"),t(181,"Wrap third-party components that need client-side features."),e(),n(182,"ul")(183,"li"),t(184,"Many libraries need 'use client' wrapper"),e(),n(185,"li"),t(186,"Create wrapper components"),e(),n(187,"li"),t(188,"Keep wrapper minimal"),e(),n(189,"li"),t(190,"Libraries using hooks need client"),e(),n(191,"li"),t(192,"Libraries using browser APIs need client"),e(),n(193,"li"),t(194,"Isolate to smallest component"),e()()(),n(195,"pre")(196,"code",4),t(197),e()()()()()()),l&2&&(i(30),o(r.serverComponentBasics),i(25),o(r.clientComponentBasics),i(23),o(r.composition),i(23),o(r.patterns),i(23),o(r.dataFlow),i(27),o(r.whenToUse),i(23),o(r.contextProviders),i(23),o(r.thirdPartyLibraries))},dependencies:[c,d,p],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#000;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#f0f0f0;border-left:4px solid #000000;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#000}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#000}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#000}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#e0e0e0;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;color:#fff;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:14px}p[_ngcontent-%COMP%]{line-height:1.6;color:#333}"]})}}return a})();export{v as NextjsServercomponentsComponent};
