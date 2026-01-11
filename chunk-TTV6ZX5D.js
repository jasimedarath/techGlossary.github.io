import"./chunk-2BQE7O6T.js";import"./chunk-4ITEIGFF.js";import"./chunk-WCULWZKC.js";import{a as E}from"./chunk-FSUYFWSG.js";import{a as c,b as x,c as g,d as f}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as o,Xa as r,da as m,e as S,gb as n,hb as e,lb as l,tb as t,ub as s,yb as u}from"./chunk-WGQ2ELTG.js";var h=S(E());function b(i,d){if(i&1&&(n(0,"div",10)(1,"h2"),t(2,"App Router Fundamentals"),e(),n(3,"div",11)(4,"p")(5,"strong"),t(6,"App Router"),e(),t(7," is built on React Server Components and introduces a new file-system based routing approach."),e(),n(8,"ul")(9,"li"),t(10,"File-based routing in the "),n(11,"code"),t(12,"app"),e(),t(13," directory"),e(),n(14,"li"),t(15,"page.tsx defines route UI"),e(),n(16,"li"),t(17,"Supports nested layouts and templates"),e(),n(18,"li"),t(19,"Server Components by default"),e(),n(20,"li"),t(21,"Simplified data fetching with async components"),e(),n(22,"li"),t(23,"Automatic code splitting"),e()()(),n(24,"pre")(25,"code",12),t(26),e()()()),i&2){let a=l();o(26),s(a.appRouterBasics)}}function v(i,d){if(i&1&&(n(0,"div",10)(1,"h2"),t(2,"Layouts in App Router"),e(),n(3,"div",11)(4,"p")(5,"strong"),t(6,"Layouts"),e(),t(7," are UI that wrap pages and persist across navigation without re-rendering."),e(),n(8,"ul")(9,"li"),t(10,"Root layout is required (app/layout.tsx)"),e(),n(11,"li"),t(12,"Layouts can be nested"),e(),n(13,"li"),t(14,"Preserve state and remain interactive"),e(),n(15,"li"),t(16,"Can fetch data using async/await"),e(),n(17,"li"),t(18,"Don't re-render on navigation"),e(),n(19,"li"),t(20,"Can share UI across multiple pages"),e()()(),n(21,"pre")(22,"code",12),t(23),e()()()),i&2){let a=l();o(23),s(a.layouts)}}function y(i,d){if(i&1&&(n(0,"div",10)(1,"h2"),t(2,"Route Groups"),e(),n(3,"div",11)(4,"p")(5,"strong"),t(6,"Route Groups"),e(),t(7," allow you to organize routes without affecting the URL structure."),e(),n(8,"ul")(9,"li"),t(10,"Use parentheses: (folderName)"),e(),n(11,"li"),t(12,"Group routes logically"),e(),n(13,"li"),t(14,"Apply different layouts to different groups"),e(),n(15,"li"),t(16,"Don't affect the URL path"),e(),n(17,"li"),t(18,"Great for separating marketing and app sections"),e(),n(19,"li"),t(20,"Can have multiple root layouts"),e()()(),n(21,"pre")(22,"code",12),t(23),e()()()),i&2){let a=l();o(23),s(a.routeGroups)}}function C(i,d){if(i&1&&(n(0,"div",10)(1,"h2"),t(2,"Parallel Routes"),e(),n(3,"div",11)(4,"p")(5,"strong"),t(6,"Parallel Routes"),e(),t(7," allow you to render multiple pages in the same layout simultaneously."),e(),n(8,"ul")(9,"li"),t(10,"Use @folder syntax for slots"),e(),n(11,"li"),t(12,"Render multiple pages independently"),e(),n(13,"li"),t(14,"Each slot can have its own loading/error states"),e(),n(15,"li"),t(16,"Great for dashboards with multiple sections"),e(),n(17,"li"),t(18,"Conditional rendering of slots"),e(),n(19,"li"),t(20,"Independent navigation per slot"),e()()(),n(21,"pre")(22,"code",12),t(23),e()()()),i&2){let a=l();o(23),s(a.parallelRoutes)}}function _(i,d){if(i&1&&(n(0,"div",10)(1,"h2"),t(2,"Intercepting Routes"),e(),n(3,"div",11)(4,"p")(5,"strong"),t(6,"Intercepting Routes"),e(),t(7," allow you to display a route in a modal while preserving the URL."),e(),n(8,"ul")(9,"li"),t(10,"(.) - intercept same level"),e(),n(11,"li"),t(12,"(..) - intercept one level up"),e(),n(13,"li"),t(14,"(...) - intercept from app root"),e(),n(15,"li"),t(16,"Perfect for modals and overlays"),e(),n(17,"li"),t(18,"Preserves context and URL"),e(),n(19,"li"),t(20,"Fallback to full page on refresh"),e()()(),n(21,"pre")(22,"code",12),t(23),e()()()),i&2){let a=l();o(23),s(a.interceptingRoutes)}}function R(i,d){if(i&1&&(n(0,"div",10)(1,"h2"),t(2,"Loading UI"),e(),n(3,"div",11)(4,"p")(5,"strong"),t(6,"loading.tsx"),e(),t(7," creates automatic loading UI using React Suspense."),e(),n(8,"ul")(9,"li"),t(10,"Shown instantly while content loads"),e(),n(11,"li"),t(12,"Automatically wraps page in Suspense"),e(),n(13,"li"),t(14,"Can be nested at any route level"),e(),n(15,"li"),t(16,"Works with streaming"),e(),n(17,"li"),t(18,"Great for skeleton screens"),e(),n(19,"li"),t(20,"Improves perceived performance"),e()()(),n(21,"pre")(22,"code",12),t(23),e()()()),i&2){let a=l();o(23),s(a.loadingStates)}}function w(i,d){if(i&1&&(n(0,"div",10)(1,"h2"),t(2,"Error Boundaries"),e(),n(3,"div",11)(4,"p")(5,"strong"),t(6,"error.tsx"),e(),t(7," creates automatic error boundaries for handling errors gracefully."),e(),n(8,"ul")(9,"li"),t(10,"Must be Client Component ('use client')"),e(),n(11,"li"),t(12,"Automatically wraps route in Error Boundary"),e(),n(13,"li"),t(14,"Can reset and retry"),e(),n(15,"li"),t(16,"Isolates errors to specific segments"),e(),n(17,"li"),t(18,"not-found.tsx for 404 errors"),e(),n(19,"li"),t(20,"global-error.tsx for root layout errors"),e()()(),n(21,"pre")(22,"code",12),t(23),e()()()),i&2){let a=l();o(23),s(a.errorStates)}}function P(i,d){if(i&1&&(n(0,"div",10)(1,"h2"),t(2,"Template Files"),e(),n(3,"div",11)(4,"p")(5,"strong"),t(6,"template.tsx"),e(),t(7," is similar to layouts but creates a new instance on each navigation."),e(),n(8,"ul")(9,"li"),t(10,"Re-mounts on navigation (unlike layouts)"),e(),n(11,"li"),t(12,"Fresh component state on each page"),e(),n(13,"li"),t(14,"Useful for animations and transitions"),e(),n(15,"li"),t(16,"Track page views with useEffect"),e(),n(17,"li"),t(18,"Children re-mount but not siblings"),e(),n(19,"li"),t(20,"Use sparingly for performance"),e()()(),n(21,"pre")(22,"code",12),t(23),e()()()),i&2){let a=l();o(23),s(a.templateFiles)}}var U=(()=>{class i{constructor(){this.appRouterBasics=`// app/page.tsx - Root page
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
&#125;`}ngAfterViewChecked(){h.highlightAll()}static{this.\u0275fac=function(p){return new(p||i)}}static{this.\u0275cmp=m({type:i,selectors:[["app-nextjs-approuter"]],standalone:!0,features:[u],decls:22,vars:0,consts:[[1,"container"],["label","Basics"],["matTabContent",""],["label","Layouts"],["label","Route Groups"],["label","Parallel Routes"],["label","Intercepting Routes"],["label","Loading States"],["label","Error Handling"],["label","Templates"],[1,"tab-content"],[1,"info-box"],[1,"language-tsx"]],template:function(p,N){p&1&&(n(0,"div",0)(1,"h1"),t(2,"Next.js App Router"),e(),n(3,"p"),t(4,"The App Router is a new paradigm for building applications with Next.js, introducing Server Components, nested layouts, and simplified data fetching."),e(),n(5,"mat-tab-group")(6,"mat-tab",1),r(7,b,27,1,"ng-template",2),e(),n(8,"mat-tab",3),r(9,v,24,1,"ng-template",2),e(),n(10,"mat-tab",4),r(11,y,24,1,"ng-template",2),e(),n(12,"mat-tab",5),r(13,C,24,1,"ng-template",2),e(),n(14,"mat-tab",6),r(15,_,24,1,"ng-template",2),e(),n(16,"mat-tab",7),r(17,R,24,1,"ng-template",2),e(),n(18,"mat-tab",8),r(19,w,24,1,"ng-template",2),e(),n(20,"mat-tab",9),r(21,P,24,1,"ng-template",2),e()()())},dependencies:[f,c,x,g],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return i})();export{U as NextjsApprouterComponent};
