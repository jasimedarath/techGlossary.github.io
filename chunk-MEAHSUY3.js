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

// src/app/components/nextjs/nextjs-approuter/nextjs-approuter.component.ts
var NextjsApprouterComponent = class _NextjsApprouterComponent {
  constructor() {
    this.appRouterBasics = `// app/page.tsx - Root page
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
//       page.tsx   -> /blog/:slug`;
    this.layouts = `// app/layout.tsx - Root layout
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

// Layouts wrap all child pages and persist across navigation`;
    this.routeGroups = `// Route groups organize routes without affecting URL
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
// Great for organizing code and applying different layouts`;
    this.parallelRoutes = `// Parallel routes render multiple pages in the same layout simultaneously
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
&#125;`;
    this.interceptingRoutes = `// Intercepting routes display route in a modal while preserving context
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
// Direct URL navigation -> Shows full page`;
    this.loadingStates = `// app/dashboard/loading.tsx - Automatic loading UI
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
&#125;`;
    this.errorStates = `// app/dashboard/error.tsx - Error UI
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
&#125;`;
    this.templateFiles = `// template.tsx creates a new instance on navigation (unlike layouts)
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
&#125;`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function NextjsApprouterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NextjsApprouterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NextjsApprouterComponent, selectors: [["app-nextjs-approuter"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 209, vars: 8, consts: [[1, "container"], ["label", "Basics"], [1, "tab-content"], [1, "info-box"], [1, "language-tsx"], ["label", "Layouts"], ["label", "Route Groups"], ["label", "Parallel Routes"], ["label", "Intercepting Routes"], ["label", "Loading States"], ["label", "Error Handling"], ["label", "Templates"]], template: function NextjsApprouterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Next.js App Router");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "The App Router is a new paradigm for building applications with Next.js, introducing Server Components, nested layouts, and simplified data fetching.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "App Router Fundamentals");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "App Router");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " is built on React Server Components and introduces a new file-system based routing approach.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "File-based routing in the ");
        \u0275\u0275elementStart(18, "code");
        \u0275\u0275text(19, "app");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, " directory");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "li");
        \u0275\u0275text(22, "page.tsx defines route UI");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "li");
        \u0275\u0275text(24, "Supports nested layouts and templates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "li");
        \u0275\u0275text(26, "Server Components by default");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "li");
        \u0275\u0275text(28, "Simplified data fetching with async components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "li");
        \u0275\u0275text(30, "Automatic code splitting");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "pre")(32, "code", 4);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(34, "mat-tab", 5)(35, "div", 2)(36, "h2");
        \u0275\u0275text(37, "Layouts in App Router");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 3)(39, "p")(40, "strong");
        \u0275\u0275text(41, "Layouts");
        \u0275\u0275elementEnd();
        \u0275\u0275text(42, " are UI that wrap pages and persist across navigation without re-rendering.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "ul")(44, "li");
        \u0275\u0275text(45, "Root layout is required (app/layout.tsx)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "li");
        \u0275\u0275text(47, "Layouts can be nested");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "li");
        \u0275\u0275text(49, "Preserve state and remain interactive");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "li");
        \u0275\u0275text(51, "Can fetch data using async/await");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "li");
        \u0275\u0275text(53, "Don't re-render on navigation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "li");
        \u0275\u0275text(55, "Can share UI across multiple pages");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(56, "pre")(57, "code", 4);
        \u0275\u0275text(58);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(59, "mat-tab", 6)(60, "div", 2)(61, "h2");
        \u0275\u0275text(62, "Route Groups");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 3)(64, "p")(65, "strong");
        \u0275\u0275text(66, "Route Groups");
        \u0275\u0275elementEnd();
        \u0275\u0275text(67, " allow you to organize routes without affecting the URL structure.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "ul")(69, "li");
        \u0275\u0275text(70, "Use parentheses: (folderName)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "li");
        \u0275\u0275text(72, "Group routes logically");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "li");
        \u0275\u0275text(74, "Apply different layouts to different groups");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "li");
        \u0275\u0275text(76, "Don't affect the URL path");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "li");
        \u0275\u0275text(78, "Great for separating marketing and app sections");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "li");
        \u0275\u0275text(80, "Can have multiple root layouts");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(81, "pre")(82, "code", 4);
        \u0275\u0275text(83);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(84, "mat-tab", 7)(85, "div", 2)(86, "h2");
        \u0275\u0275text(87, "Parallel Routes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "div", 3)(89, "p")(90, "strong");
        \u0275\u0275text(91, "Parallel Routes");
        \u0275\u0275elementEnd();
        \u0275\u0275text(92, " allow you to render multiple pages in the same layout simultaneously.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "ul")(94, "li");
        \u0275\u0275text(95, "Use @folder syntax for slots");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "li");
        \u0275\u0275text(97, "Render multiple pages independently");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "li");
        \u0275\u0275text(99, "Each slot can have its own loading/error states");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "li");
        \u0275\u0275text(101, "Great for dashboards with multiple sections");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "li");
        \u0275\u0275text(103, "Conditional rendering of slots");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "li");
        \u0275\u0275text(105, "Independent navigation per slot");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(106, "pre")(107, "code", 4);
        \u0275\u0275text(108);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(109, "mat-tab", 8)(110, "div", 2)(111, "h2");
        \u0275\u0275text(112, "Intercepting Routes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "div", 3)(114, "p")(115, "strong");
        \u0275\u0275text(116, "Intercepting Routes");
        \u0275\u0275elementEnd();
        \u0275\u0275text(117, " allow you to display a route in a modal while preserving the URL.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "ul")(119, "li");
        \u0275\u0275text(120, "(.) - intercept same level");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "li");
        \u0275\u0275text(122, "(..) - intercept one level up");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "li");
        \u0275\u0275text(124, "(...) - intercept from app root");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "li");
        \u0275\u0275text(126, "Perfect for modals and overlays");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "li");
        \u0275\u0275text(128, "Preserves context and URL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "li");
        \u0275\u0275text(130, "Fallback to full page on refresh");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(131, "pre")(132, "code", 4);
        \u0275\u0275text(133);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(134, "mat-tab", 9)(135, "div", 2)(136, "h2");
        \u0275\u0275text(137, "Loading UI");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "div", 3)(139, "p")(140, "strong");
        \u0275\u0275text(141, "loading.tsx");
        \u0275\u0275elementEnd();
        \u0275\u0275text(142, " creates automatic loading UI using React Suspense.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "ul")(144, "li");
        \u0275\u0275text(145, "Shown instantly while content loads");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "li");
        \u0275\u0275text(147, "Automatically wraps page in Suspense");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "li");
        \u0275\u0275text(149, "Can be nested at any route level");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "li");
        \u0275\u0275text(151, "Works with streaming");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "li");
        \u0275\u0275text(153, "Great for skeleton screens");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(154, "li");
        \u0275\u0275text(155, "Improves perceived performance");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(156, "pre")(157, "code", 4);
        \u0275\u0275text(158);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(159, "mat-tab", 10)(160, "div", 2)(161, "h2");
        \u0275\u0275text(162, "Error Boundaries");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(163, "div", 3)(164, "p")(165, "strong");
        \u0275\u0275text(166, "error.tsx");
        \u0275\u0275elementEnd();
        \u0275\u0275text(167, " creates automatic error boundaries for handling errors gracefully.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(168, "ul")(169, "li");
        \u0275\u0275text(170, "Must be Client Component ('use client')");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(171, "li");
        \u0275\u0275text(172, "Automatically wraps route in Error Boundary");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(173, "li");
        \u0275\u0275text(174, "Can reset and retry");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(175, "li");
        \u0275\u0275text(176, "Isolates errors to specific segments");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(177, "li");
        \u0275\u0275text(178, "not-found.tsx for 404 errors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(179, "li");
        \u0275\u0275text(180, "global-error.tsx for root layout errors");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(181, "pre")(182, "code", 4);
        \u0275\u0275text(183);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(184, "mat-tab", 11)(185, "div", 2)(186, "h2");
        \u0275\u0275text(187, "Template Files");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(188, "div", 3)(189, "p")(190, "strong");
        \u0275\u0275text(191, "template.tsx");
        \u0275\u0275elementEnd();
        \u0275\u0275text(192, " is similar to layouts but creates a new instance on each navigation.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(193, "ul")(194, "li");
        \u0275\u0275text(195, "Re-mounts on navigation (unlike layouts)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(196, "li");
        \u0275\u0275text(197, "Fresh component state on each page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(198, "li");
        \u0275\u0275text(199, "Useful for animations and transitions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(200, "li");
        \u0275\u0275text(201, "Track page views with useEffect");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(202, "li");
        \u0275\u0275text(203, "Children re-mount but not siblings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(204, "li");
        \u0275\u0275text(205, "Use sparingly for performance");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(206, "pre")(207, "code", 4);
        \u0275\u0275text(208);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(33);
        \u0275\u0275textInterpolate(ctx.appRouterBasics);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.layouts);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.routeGroups);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.parallelRoutes);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.interceptingRoutes);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.loadingStates);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.errorStates);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.templateFiles);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #000000;\n  margin-bottom: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #282c34;\n  margin-top: 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  border-left: 4px solid #000000;\n  padding: 15px;\n  margin: 15px 0;\n  border-radius: 4px;\n}\n.info-box.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-left-color: #000000;\n}\n.info-box.warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #000000;\n}\n.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #000000;\n}\n.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding-left: 20px;\n}\n.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #e0e0e0;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\npre[_ngcontent-%COMP%] {\n  background: #282c34;\n  color: #ffffff;\n  padding: 15px;\n  border-radius: 4px;\n  overflow-x: auto;\n  margin: 15px 0;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: 14px;\n}\np[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  color: #333;\n}\n/*# sourceMappingURL=nextjs-approuter.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NextjsApprouterComponent, { className: "NextjsApprouterComponent", filePath: "src\\app\\components\\nextjs\\nextjs-approuter\\nextjs-approuter.component.ts", lineNumber: 13 });
})();
export {
  NextjsApprouterComponent
};
//# sourceMappingURL=chunk-MEAHSUY3.js.map
