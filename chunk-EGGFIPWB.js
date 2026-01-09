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

// src/app/components/nextjs/nextjs-servercomponents/nextjs-servercomponents.component.ts
var NextjsServercomponentsComponent = class _NextjsServercomponentsComponent {
  constructor() {
    this.serverComponentBasics = `// Server Components (default in App Router)
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
// - SEO-friendly`;
    this.clientComponentBasics = `// Client Components - interactive UI
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
// - Context API`;
    this.composition = `// Server and Client Component Composition

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
&#125;`;
    this.patterns = `// Composition Patterns

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
&#125;`;
    this.dataFlow = `// Data flow between Server and Client Components

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
// - Symbols`;
    this.whenToUse = `// When to use Server vs Client Components

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

// Default to Server Components, add 'use client' only when needed`;
    this.contextProviders = `// Context providers must be Client Components

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
&#125;`;
    this.thirdPartyLibraries = `// Using third-party libraries with 'use client'

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
// Keep the rest of your app as Server Components`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function NextjsServercomponentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NextjsServercomponentsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NextjsServercomponentsComponent, selectors: [["app-nextjs-servercomponents"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 198, vars: 8, consts: [[1, "container"], ["label", "Server Components"], [1, "tab-content"], [1, "info-box"], [1, "language-tsx"], ["label", "Client Components"], ["label", "Composition"], ["label", "Patterns"], ["label", "Data Flow"], ["label", "When to Use"], ["label", "Context Providers"], ["label", "Third-Party Libraries"]], template: function NextjsServercomponentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Next.js Server Components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "React Server Components allow you to render components on the server, reducing client-side JavaScript and improving performance.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "Server Components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "Server Components");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " are the default in Next.js App Router and render on the server.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "Default in App Router (no directive needed)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "Can be async functions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li");
        \u0275\u0275text(21, "Direct database and API access");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275text(23, "Zero JavaScript shipped to client");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "li");
        \u0275\u0275text(25, "Better security (sensitive data stays on server)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "li");
        \u0275\u0275text(27, "Automatic code splitting");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "pre")(29, "code", 4);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(31, "mat-tab", 5)(32, "div", 2)(33, "h2");
        \u0275\u0275text(34, "Client Components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 3)(36, "p")(37, "strong");
        \u0275\u0275text(38, "Client Components");
        \u0275\u0275elementEnd();
        \u0275\u0275text(39, " render in the browser and support interactivity.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "ul")(41, "li");
        \u0275\u0275text(42, "Mark with 'use client' directive");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li");
        \u0275\u0275text(44, "Use React hooks (useState, useEffect, etc.)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "li");
        \u0275\u0275text(46, "Event listeners (onClick, onChange, etc.)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "li");
        \u0275\u0275text(48, "Access browser APIs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "li");
        \u0275\u0275text(50, "Custom hooks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "li");
        \u0275\u0275text(52, "Context API");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(53, "pre")(54, "code", 4);
        \u0275\u0275text(55);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(56, "mat-tab", 6)(57, "div", 2)(58, "h2");
        \u0275\u0275text(59, "Component Composition");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 3)(61, "p");
        \u0275\u0275text(62, "Combine Server and Client Components for optimal performance.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "ul")(64, "li");
        \u0275\u0275text(65, "Server Components can import Client Components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "li");
        \u0275\u0275text(67, "Pass Server Components as children to Client Components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "li");
        \u0275\u0275text(69, "Keep as much on server as possible");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "li");
        \u0275\u0275text(71, "Client Components convert children to client");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "li");
        \u0275\u0275text(73, "Use props to pass data from server to client");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "li");
        \u0275\u0275text(75, "Strategic placement improves performance");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(76, "pre")(77, "code", 4);
        \u0275\u0275text(78);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(79, "mat-tab", 7)(80, "div", 2)(81, "h2");
        \u0275\u0275text(82, "Composition Patterns");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "div", 3)(84, "p");
        \u0275\u0275text(85, "Best practices for composing Server and Client Components.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "ul")(87, "li");
        \u0275\u0275text(88, "\u2705 Pass Server Components as children props");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "li");
        \u0275\u0275text(90, "\u2705 Keep Server Components at top level");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "li");
        \u0275\u0275text(92, "\u274C Don't import Server into Client Components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "li");
        \u0275\u0275text(94, "Use composition over direct imports");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "li");
        \u0275\u0275text(96, "Minimize Client Component boundaries");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "li");
        \u0275\u0275text(98, "Default to Server Components");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(99, "pre")(100, "code", 4);
        \u0275\u0275text(101);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(102, "mat-tab", 8)(103, "div", 2)(104, "h2");
        \u0275\u0275text(105, "Data Flow");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "div", 3)(107, "p");
        \u0275\u0275text(108, "How data flows between Server and Client Components.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "ul")(110, "li");
        \u0275\u0275text(111, "Server Components fetch data");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "li");
        \u0275\u0275text(113, "Pass data as props to Client Components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "li");
        \u0275\u0275text(115, "Props must be serializable (JSON)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "li");
        \u0275\u0275text(117, "Can't pass functions or class instances");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "li");
        \u0275\u0275text(119, "Server renders first, then hydrates client");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "li");
        \u0275\u0275text(121, "Client Components can fetch more data");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(122, "pre")(123, "code", 4);
        \u0275\u0275text(124);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(125, "mat-tab", 9)(126, "div", 2)(127, "h2");
        \u0275\u0275text(128, "When to Use Each");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "div", 3)(130, "p");
        \u0275\u0275text(131, "Guidelines for choosing between Server and Client Components.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "ul")(133, "li")(134, "strong");
        \u0275\u0275text(135, "Server:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(136, " Data fetching, static content, backend access");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "li")(138, "strong");
        \u0275\u0275text(139, "Client:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(140, " Interactivity, hooks, browser APIs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "li");
        \u0275\u0275text(142, "Default to Server Components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "li");
        \u0275\u0275text(144, "Add 'use client' only when necessary");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "li");
        \u0275\u0275text(146, "Move interactivity down the tree");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "li");
        \u0275\u0275text(148, "Keep bundle size small");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(149, "pre")(150, "code", 4);
        \u0275\u0275text(151);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(152, "mat-tab", 10)(153, "div", 2)(154, "h2");
        \u0275\u0275text(155, "Context Providers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "div", 3)(157, "p");
        \u0275\u0275text(158, "Context providers must be Client Components but can wrap Server Components.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(159, "ul")(160, "li");
        \u0275\u0275text(161, "Providers need 'use client'");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "li");
        \u0275\u0275text(163, "Wrap in root layout");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "li");
        \u0275\u0275text(165, "Children can be Server Components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(166, "li");
        \u0275\u0275text(167, "Use for theme, auth, i18n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(168, "li");
        \u0275\u0275text(169, "Create separate providers file");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(170, "li");
        \u0275\u0275text(171, "Import context hooks in Client Components");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(172, "pre")(173, "code", 4);
        \u0275\u0275text(174);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(175, "mat-tab", 11)(176, "div", 2)(177, "h2");
        \u0275\u0275text(178, "Third-Party Libraries");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(179, "div", 3)(180, "p");
        \u0275\u0275text(181, "Wrap third-party components that need client-side features.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(182, "ul")(183, "li");
        \u0275\u0275text(184, "Many libraries need 'use client' wrapper");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(185, "li");
        \u0275\u0275text(186, "Create wrapper components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "li");
        \u0275\u0275text(188, "Keep wrapper minimal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(189, "li");
        \u0275\u0275text(190, "Libraries using hooks need client");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(191, "li");
        \u0275\u0275text(192, "Libraries using browser APIs need client");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(193, "li");
        \u0275\u0275text(194, "Isolate to smallest component");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(195, "pre")(196, "code", 4);
        \u0275\u0275text(197);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(30);
        \u0275\u0275textInterpolate(ctx.serverComponentBasics);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.clientComponentBasics);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.composition);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.patterns);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.dataFlow);
        \u0275\u0275advance(27);
        \u0275\u0275textInterpolate(ctx.whenToUse);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.contextProviders);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.thirdPartyLibraries);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #000000;\n  margin-bottom: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #282c34;\n  margin-top: 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  border-left: 4px solid #000000;\n  padding: 15px;\n  margin: 15px 0;\n  border-radius: 4px;\n}\n.info-box.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-left-color: #000000;\n}\n.info-box.warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #000000;\n}\n.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #000000;\n}\n.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding-left: 20px;\n}\n.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #e0e0e0;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\npre[_ngcontent-%COMP%] {\n  background: #282c34;\n  color: #ffffff;\n  padding: 15px;\n  border-radius: 4px;\n  overflow-x: auto;\n  margin: 15px 0;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: 14px;\n}\np[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  color: #333;\n}\n/*# sourceMappingURL=nextjs-servercomponents.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NextjsServercomponentsComponent, { className: "NextjsServercomponentsComponent", filePath: "src\\app\\components\\nextjs\\nextjs-servercomponents\\nextjs-servercomponents.component.ts", lineNumber: 13 });
})();
export {
  NextjsServercomponentsComponent
};
//# sourceMappingURL=chunk-EGGFIPWB.js.map
