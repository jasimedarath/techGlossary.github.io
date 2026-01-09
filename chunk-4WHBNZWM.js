import{b as p,c as m,d as u}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as a,da as s,gb as n,hb as t,tb as e,ub as i,yb as d}from"./chunk-WGQ2ELTG.js";var h=(()=>{class r{constructor(){this.appRouterBasics=`// app/page.tsx - Root page
export default function HomePage() &#123;
  return <h1>Welcome to Next.js App Router</h1>;
&#125;

// app/about/page.tsx - About page
export default function AboutPage() &#123;
  return <h1>About Us</h1>;
&#125;

// app/blog/[slug]/page.tsx - Dynamic route
export default function BlogPost(&#123; params &#125;: &#123; params: &#123; slug: string &#125; &#125;) &#123;
  return <h1>Blog Post: &#123;params.slug&#125;</h1>;
&#125;

// Folder structure:
// app/
//   page.tsx       -> /
//   about/
//     page.tsx     -> /about
//   blog/
//     [slug]/
//       page.tsx   -> /blog/:slug`,this.layouts=`// app/layout.tsx - Root layout
export default function RootLayout(&#123;
  children,
&#125;: &#123;
  children: React.ReactNode;
&#125;) &#123;
  return (
    <html lang="en">
      <body>
        <nav>Global Navigation</nav>
        &#123;children&#125;
        <footer>Global Footer</footer>
      </body>
    </html>
  );
&#125;

// app/dashboard/layout.tsx - Nested layout
export default function DashboardLayout(&#123;
  children,
&#125;: &#123;
  children: React.ReactNode;
&#125;) &#123;
  return (
    <div className="dashboard">
      <aside>Dashboard Sidebar</aside>
      <main>&#123;children&#125;</main>
    </div>
  );
&#125;

// Layouts wrap all child pages and persist across navigation`,this.routeGroups=`// Route groups organize routes without affecting URL
// Use (folder) syntax

// app/(marketing)/about/page.tsx -> /about
// app/(marketing)/contact/page.tsx -> /contact
// app/(marketing)/layout.tsx - Shared layout for marketing pages

export default function MarketingLayout(&#123;
  children,
&#125;: &#123;
  children: React.ReactNode;
&#125;) &#123;
  return (
    <div className="marketing-layout">
      <header>Marketing Header</header>
      &#123;children&#125;
    </div>
  );
&#125;

// app/(shop)/products/page.tsx -> /products
// app/(shop)/cart/page.tsx -> /cart
// app/(shop)/layout.tsx - Different layout for shop

// Route groups don't appear in URLs
// Great for organizing code and applying different layouts`,this.parallelRoutes=`// Parallel routes render multiple pages in the same layout simultaneously
// Use @folder syntax

// app/layout.tsx
export default function Layout(&#123;
  children,
  team,
  analytics,
&#125;: &#123;
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
&#125;) &#123;
  return (
    <>
      <div>&#123;children&#125;</div>
      <div className="parallel-sections">
        <section>&#123;team&#125;</section>
        <section>&#123;analytics&#125;</section>
      </div>
    </>
  );
&#125;

// app/@team/page.tsx - Team slot
export default function TeamPage() &#123;
  return <div>Team Dashboard</div>;
&#125;

// app/@analytics/page.tsx - Analytics slot
export default function AnalyticsPage() &#123;
  return <div>Analytics Dashboard</div>;
&#125;`,this.interceptingRoutes=`// Intercepting routes display route in a modal while preserving context
// (.) - same level
// (..) - one level up
// (..)(..) - two levels up
// (...) - from app root

// app/@modal/(.)photo/[id]/page.tsx
export default function PhotoModal(&#123; params &#125;: &#123; params: &#123; id: string &#125; &#125;) &#123;
  return (
    <dialog open>
      <img src=\`/photos/$&#123;params.id&#125;\` alt="Photo" />
      <button>Close</button>
    </dialog>
  );
&#125;

// app/photo/[id]/page.tsx - Full page version
export default function PhotoPage(&#123; params &#125;: &#123; params: &#123; id: string &#125; &#125;) &#123;
  return (
    <div>
      <h1>Photo &#123;params.id&#125;</h1>
      <img src=\`/photos/$&#123;params.id&#125;\` alt="Photo" />
    </div>
  );
&#125;

// Click from gallery -> Opens modal
// Direct URL navigation -> Shows full page`,this.loadingStates=`// app/dashboard/loading.tsx - Automatic loading UI
export default function Loading() &#123;
  return (
    <div className="loading-skeleton">
      <div className="skeleton-header" />
      <div className="skeleton-content" />
    </div>
  );
&#125;

// Shown automatically while page.tsx is loading
// Works with Suspense boundaries

// app/dashboard/page.tsx
import &#123; Suspense &#125; from 'react';

async function DashboardData() &#123;
  const data = await fetchDashboardData();
  return <div>&#123;data&#125;</div>;
&#125;

export default function DashboardPage() &#123;
  return (
    <Suspense fallback=&#123;<Loading />&#125;>
      <DashboardData />
    </Suspense>
  );
&#125;`,this.errorStates=`// app/dashboard/error.tsx - Error UI
'use client';

export default function Error(&#123;
  error,
  reset,
&#125;: &#123;
  error: Error & &#123; digest?: string &#125;;
  reset: () => void;
&#125;) &#123;
  return (
    <div className="error-container">
      <h2>Something went wrong!</h2>
      <p>&#123;error.message&#125;</p>
      <button onClick=&#123;reset&#125;>Try again</button>
    </div>
  );
&#125;

// app/not-found.tsx - 404 page
export default function NotFound() &#123;
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>Could not find requested resource</p>
    </div>
  );
&#125;

// app/dashboard/page.tsx
import &#123; notFound &#125; from 'next/navigation';

export default async function Page(&#123; params &#125;) &#123;
  const data = await fetchData(params.id);
  if (!data) notFound();
  return <div>&#123;data&#125;</div>;
&#125;`,this.templateFiles=`// template.tsx creates a new instance on navigation (unlike layouts)
// app/template.tsx
export default function Template(&#123; children &#125;: &#123; children: React.ReactNode &#125;) &#123;
  return <div className="animate-fadeIn">&#123;children&#125;</div>;
&#125;

// Use cases:
// - Animations on page transitions
// - Features requiring fresh component state
// - Logging page views

// Difference from layout.tsx:
// - Layout: Persists, doesn't remount
// - Template: Creates new instance on each navigation

// app/dashboard/template.tsx
'use client';

import &#123; useEffect &#125; from 'react';

export default function DashboardTemplate(&#123;
  children,
&#125;: &#123;
  children: React.ReactNode;
&#125;) &#123;
  useEffect(() => &#123;
    console.log('Page viewed');
  &#125;, []);

  return <div className="page-transition">&#123;children&#125;</div>;
&#125;`}ngAfterViewChecked(){Prism.highlightAll()}static{this.\u0275fac=function(l){return new(l||r)}}static{this.\u0275cmp=s({type:r,selectors:[["app-nextjs-approuter"]],standalone:!0,features:[d],decls:209,vars:8,consts:[[1,"container"],["label","Basics"],[1,"tab-content"],[1,"info-box"],[1,"language-tsx"],["label","Layouts"],["label","Route Groups"],["label","Parallel Routes"],["label","Intercepting Routes"],["label","Loading States"],["label","Error Handling"],["label","Templates"]],template:function(l,o){l&1&&(n(0,"div",0)(1,"h1"),e(2,"Next.js App Router"),t(),n(3,"p"),e(4,"The App Router is a new paradigm for building applications with Next.js, introducing Server Components, nested layouts, and simplified data fetching."),t(),n(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),e(9,"App Router Fundamentals"),t(),n(10,"div",3)(11,"p")(12,"strong"),e(13,"App Router"),t(),e(14," is built on React Server Components and introduces a new file-system based routing approach."),t(),n(15,"ul")(16,"li"),e(17,"File-based routing in the "),n(18,"code"),e(19,"app"),t(),e(20," directory"),t(),n(21,"li"),e(22,"page.tsx defines route UI"),t(),n(23,"li"),e(24,"Supports nested layouts and templates"),t(),n(25,"li"),e(26,"Server Components by default"),t(),n(27,"li"),e(28,"Simplified data fetching with async components"),t(),n(29,"li"),e(30,"Automatic code splitting"),t()()(),n(31,"pre")(32,"code",4),e(33),t()()()(),n(34,"mat-tab",5)(35,"div",2)(36,"h2"),e(37,"Layouts in App Router"),t(),n(38,"div",3)(39,"p")(40,"strong"),e(41,"Layouts"),t(),e(42," are UI that wrap pages and persist across navigation without re-rendering."),t(),n(43,"ul")(44,"li"),e(45,"Root layout is required (app/layout.tsx)"),t(),n(46,"li"),e(47,"Layouts can be nested"),t(),n(48,"li"),e(49,"Preserve state and remain interactive"),t(),n(50,"li"),e(51,"Can fetch data using async/await"),t(),n(52,"li"),e(53,"Don't re-render on navigation"),t(),n(54,"li"),e(55,"Can share UI across multiple pages"),t()()(),n(56,"pre")(57,"code",4),e(58),t()()()(),n(59,"mat-tab",6)(60,"div",2)(61,"h2"),e(62,"Route Groups"),t(),n(63,"div",3)(64,"p")(65,"strong"),e(66,"Route Groups"),t(),e(67," allow you to organize routes without affecting the URL structure."),t(),n(68,"ul")(69,"li"),e(70,"Use parentheses: (folderName)"),t(),n(71,"li"),e(72,"Group routes logically"),t(),n(73,"li"),e(74,"Apply different layouts to different groups"),t(),n(75,"li"),e(76,"Don't affect the URL path"),t(),n(77,"li"),e(78,"Great for separating marketing and app sections"),t(),n(79,"li"),e(80,"Can have multiple root layouts"),t()()(),n(81,"pre")(82,"code",4),e(83),t()()()(),n(84,"mat-tab",7)(85,"div",2)(86,"h2"),e(87,"Parallel Routes"),t(),n(88,"div",3)(89,"p")(90,"strong"),e(91,"Parallel Routes"),t(),e(92," allow you to render multiple pages in the same layout simultaneously."),t(),n(93,"ul")(94,"li"),e(95,"Use @folder syntax for slots"),t(),n(96,"li"),e(97,"Render multiple pages independently"),t(),n(98,"li"),e(99,"Each slot can have its own loading/error states"),t(),n(100,"li"),e(101,"Great for dashboards with multiple sections"),t(),n(102,"li"),e(103,"Conditional rendering of slots"),t(),n(104,"li"),e(105,"Independent navigation per slot"),t()()(),n(106,"pre")(107,"code",4),e(108),t()()()(),n(109,"mat-tab",8)(110,"div",2)(111,"h2"),e(112,"Intercepting Routes"),t(),n(113,"div",3)(114,"p")(115,"strong"),e(116,"Intercepting Routes"),t(),e(117," allow you to display a route in a modal while preserving the URL."),t(),n(118,"ul")(119,"li"),e(120,"(.) - intercept same level"),t(),n(121,"li"),e(122,"(..) - intercept one level up"),t(),n(123,"li"),e(124,"(...) - intercept from app root"),t(),n(125,"li"),e(126,"Perfect for modals and overlays"),t(),n(127,"li"),e(128,"Preserves context and URL"),t(),n(129,"li"),e(130,"Fallback to full page on refresh"),t()()(),n(131,"pre")(132,"code",4),e(133),t()()()(),n(134,"mat-tab",9)(135,"div",2)(136,"h2"),e(137,"Loading UI"),t(),n(138,"div",3)(139,"p")(140,"strong"),e(141,"loading.tsx"),t(),e(142," creates automatic loading UI using React Suspense."),t(),n(143,"ul")(144,"li"),e(145,"Shown instantly while content loads"),t(),n(146,"li"),e(147,"Automatically wraps page in Suspense"),t(),n(148,"li"),e(149,"Can be nested at any route level"),t(),n(150,"li"),e(151,"Works with streaming"),t(),n(152,"li"),e(153,"Great for skeleton screens"),t(),n(154,"li"),e(155,"Improves perceived performance"),t()()(),n(156,"pre")(157,"code",4),e(158),t()()()(),n(159,"mat-tab",10)(160,"div",2)(161,"h2"),e(162,"Error Boundaries"),t(),n(163,"div",3)(164,"p")(165,"strong"),e(166,"error.tsx"),t(),e(167," creates automatic error boundaries for handling errors gracefully."),t(),n(168,"ul")(169,"li"),e(170,"Must be Client Component ('use client')"),t(),n(171,"li"),e(172,"Automatically wraps route in Error Boundary"),t(),n(173,"li"),e(174,"Can reset and retry"),t(),n(175,"li"),e(176,"Isolates errors to specific segments"),t(),n(177,"li"),e(178,"not-found.tsx for 404 errors"),t(),n(179,"li"),e(180,"global-error.tsx for root layout errors"),t()()(),n(181,"pre")(182,"code",4),e(183),t()()()(),n(184,"mat-tab",11)(185,"div",2)(186,"h2"),e(187,"Template Files"),t(),n(188,"div",3)(189,"p")(190,"strong"),e(191,"template.tsx"),t(),e(192," is similar to layouts but creates a new instance on each navigation."),t(),n(193,"ul")(194,"li"),e(195,"Re-mounts on navigation (unlike layouts)"),t(),n(196,"li"),e(197,"Fresh component state on each page"),t(),n(198,"li"),e(199,"Useful for animations and transitions"),t(),n(200,"li"),e(201,"Track page views with useEffect"),t(),n(202,"li"),e(203,"Children re-mount but not siblings"),t(),n(204,"li"),e(205,"Use sparingly for performance"),t()()(),n(206,"pre")(207,"code",4),e(208),t()()()()()()),l&2&&(a(33),i(o.appRouterBasics),a(25),i(o.layouts),a(25),i(o.routeGroups),a(25),i(o.parallelRoutes),a(25),i(o.interceptingRoutes),a(25),i(o.loadingStates),a(25),i(o.errorStates),a(25),i(o.templateFiles))},dependencies:[u,p,m],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#000;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#f0f0f0;border-left:4px solid #000000;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#000}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#000}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#000}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#e0e0e0;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;color:#fff;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:14px}p[_ngcontent-%COMP%]{line-height:1.6;color:#333}"]})}}return r})();export{h as NextjsApprouterComponent};
