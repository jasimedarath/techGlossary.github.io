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

// src/app/components/nextjs/nextjs-rendering/nextjs-rendering.component.ts
var NextjsRenderingComponent = class _NextjsRenderingComponent {
  constructor() {
    this.ssrBasics = `// Server-Side Rendering (SSR)
// Page is rendered on each request

// app/posts/[id]/page.tsx
async function getPost(id: string) &#123;
  const res = await fetch(\\\`https://api.example.com/posts/$&#123;id&#125;\\\`, &#123;
    cache: 'no-store' // Disable caching for SSR
  &#125;);
  return res.json();
&#125;

export default async function PostPage(&#123; 
  params 
&#125;: &#123; 
  params: &#123; id: string &#125; 
&#125;) &#123;
  const post = await getPost(params.id);
  
  return (
    <article>
      <h1>&#123;post.title&#125;</h1>
      <p>&#123;post.content&#125;</p>
      <time>&#123;new Date().toLocaleString()&#125;</time>
    </article>
  );
&#125;

// Rendered on every request
// Always fresh data
// Slower initial load`;
    this.ssgBasics = `// Static Site Generation (SSG)
// Pages are generated at build time

// app/blog/[slug]/page.tsx
export async function generateStaticParams() &#123;
  const posts = await fetch('https://api.example.com/posts').then(res => res.json());
  
  return posts.map((post: any) => (&#123;
    slug: post.slug,
  &#125;));
&#125;

async function getPost(slug: string) &#123;
  const res = await fetch(\\\`https://api.example.com/posts/$&#123;slug&#125;\\\`, &#123;
    cache: 'force-cache' // Default for SSG
  &#125;);
  return res.json();
&#125;

export default async function BlogPost(&#123; 
  params 
&#125;: &#123; 
  params: &#123; slug: string &#125; 
&#125;) &#123;
  const post = await getPost(params.slug);
  
  return (
    <article>
      <h1>&#123;post.title&#125;</h1>
      <div dangerouslySetInnerHTML=&#123;&#123; __html: post.content &#125;&#125; />
    </article>
  );
&#125;

// Generated at build time
// Ultra-fast loading
// Great for blogs, documentation`;
    this.isrBasics = `// Incremental Static Regeneration (ISR)
// Static with periodic updates

// app/products/[id]/page.tsx
export const revalidate = 60; // Revalidate every 60 seconds

async function getProduct(id: string) &#123;
  const res = await fetch(\\\`https://api.example.com/products/$&#123;id&#125;\\\`, &#123;
    next: &#123; revalidate: 60 &#125;
  &#125;);
  return res.json();
&#125;

export default async function ProductPage(&#123; 
  params 
&#125;: &#123; 
  params: &#123; id: string &#125; 
&#125;) &#123;
  const product = await getProduct(params.id);
  
  return (
    <div>
      <h1>&#123;product.name&#125;</h1>
      <p>&#123;product.description&#125;</p>
      <p>Price: &#123;product.price&#125;</p>
      <p>Last updated: &#123;new Date().toLocaleString()&#125;</p>
    </div>
  );
&#125;

// On-demand revalidation
export async function POST(request: Request) &#123;
  const &#123; id &#125; = await request.json();
  revalidatePath(\\\`/products/$&#123;id&#125;\\\`);
  return Response.json(&#123; revalidated: true &#125;);
&#125;`;
    this.csrBasics = `// Client-Side Rendering (CSR)
// Rendered in the browser

'use client'; // Mark as Client Component

import &#123; useState, useEffect &#125; from 'react';

export default function UserProfile() &#123;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => &#123;
    fetch('/api/user')
      .then(res => res.json())
      .then(data => &#123;
        setUser(data);
        setLoading(false);
      &#125;);
  &#125;, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Welcome, &#123;user?.name&#125;</h1>
      <p>Email: &#123;user?.email&#125;</p>
    </div>
  );
&#125;

// Rendered in browser
// Interactive immediately
// Good for personalized content`;
    this.comparison = `// Rendering Method Comparison

// 1. SSG (Static Site Generation)
// \u2713 Best for: Blogs, marketing pages, documentation
// \u2713 Performance: Fastest
// \u2713 Build time: Slower (generates all pages)
// \u2713 Data freshness: Stale until rebuild
export const dynamic = 'force-static';

// 2. ISR (Incremental Static Regeneration)
// \u2713 Best for: E-commerce, news sites
// \u2713 Performance: Very fast
// \u2713 Build time: Fast (generates on-demand)
// \u2713 Data freshness: Stale with periodic updates
export const revalidate = 3600; // 1 hour

// 3. SSR (Server-Side Rendering)
// \u2713 Best for: Personalized dashboards, real-time data
// \u2713 Performance: Slower (renders on request)
// \u2713 Build time: Fast
// \u2713 Data freshness: Always fresh
export const dynamic = 'force-dynamic';

// 4. CSR (Client-Side Rendering)
// \u2713 Best for: Interactive widgets, user-specific UI
// \u2713 Performance: Slow initial, fast interactions
// \u2713 Build time: Fast
// \u2713 Data freshness: As fresh as you fetch
'use client';`;
    this.generateStaticParams = `// generateStaticParams - Define static paths at build time

// app/blog/[category]/[slug]/page.tsx
export async function generateStaticParams() &#123;
  const categories = await fetch('https://api.example.com/categories')
    .then(res => res.json());
  
  const paths = [];
  
  for (const category of categories) &#123;
    const posts = await fetch(\\\`https://api.example.com/posts?category=$&#123;category.id&#125;\\\`)
      .then(res => res.json());
    
    posts.forEach((post: any) => &#123;
      paths.push(&#123;
        category: category.slug,
        slug: post.slug,
      &#125;);
    &#125;);
  &#125;
  
  return paths;
&#125;

// With parent params
export async function generateStaticParams(&#123; 
  params 
&#125;: &#123; 
  params: &#123; category: string &#125; 
&#125;) &#123;
  const posts = await fetch(\\\`https://api.example.com/posts?category=$&#123;params.category&#125;\\\`)
    .then(res => res.json());
  
  return posts.map((post: any) => (&#123;
    slug: post.slug,
  &#125;));
&#125;`;
    this.revalidation = `// Revalidation Strategies

// 1. Time-based revalidation (ISR)
export const revalidate = 3600; // Revalidate every hour

async function getData() &#123;
  const res = await fetch('https://api.example.com/data', &#123;
    next: &#123; revalidate: 3600 &#125;
  &#125;);
  return res.json();
&#125;

// 2. On-demand revalidation
import &#123; revalidatePath, revalidateTag &#125; from 'next/cache';

// Revalidate specific path
export async function POST() &#123;
  revalidatePath('/posts');
  return Response.json(&#123; revalidated: true &#125;);
&#125;

// Revalidate by tag
async function getDataWithTag() &#123;
  const res = await fetch('https://api.example.com/data', &#123;
    next: &#123; tags: ['posts'] &#125;
  &#125;);
  return res.json();
&#125;

export async function POST() &#123;
  revalidateTag('posts');
  return Response.json(&#123; revalidated: true &#125;);
&#125;

// 3. Disable caching (SSR)
async function getDynamicData() &#123;
  const res = await fetch('https://api.example.com/data', &#123;
    cache: 'no-store'
  &#125;);
  return res.json();
&#125;`;
    this.streaming = `// Streaming and Suspense

import &#123; Suspense &#125; from 'react';

// Server Component that streams data
async function SlowComponent() &#123;
  await new Promise(resolve => setTimeout(resolve, 3000));
  return <div>Slow content loaded!</div>;
&#125;

function LoadingFallback() &#123;
  return <div className="skeleton">Loading...</div>;
&#125;

export default function StreamingPage() &#123;
  return (
    <div>
      <h1>Page loaded immediately</h1>
      
      <Suspense fallback=&#123;<LoadingFallback />&#125;>
        <SlowComponent />
      </Suspense>
      
      <div>This content is also visible immediately</div>
    </div>
  );
&#125;

// Benefits:
// - Fast Time to First Byte (TTFB)
// - Progressive rendering
// - Better perceived performance
// - SEO-friendly (HTML streamed)`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function NextjsRenderingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NextjsRenderingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NextjsRenderingComponent, selectors: [["app-nextjs-rendering"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 222, vars: 8, consts: [[1, "container"], ["label", "SSR"], [1, "tab-content"], [1, "info-box"], [1, "language-tsx"], ["label", "SSG"], ["label", "ISR"], ["label", "CSR"], ["label", "Comparison"], ["label", "generateStaticParams"], ["label", "Revalidation"], ["label", "Streaming"]], template: function NextjsRenderingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Next.js Rendering Strategies");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Next.js provides multiple rendering strategies to optimize performance and user experience: SSR, SSG, ISR, and CSR.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "Server-Side Rendering (SSR)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "SSR");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " renders pages on the server for each request, ensuring fresh data.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "Pages rendered on every request");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "Always fresh, up-to-date data");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li");
        \u0275\u0275text(21, "Use ");
        \u0275\u0275elementStart(22, "code");
        \u0275\u0275text(23, "cache: 'no-store'");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " to opt into SSR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "li");
        \u0275\u0275text(26, "Good for personalized content");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "li");
        \u0275\u0275text(28, "SEO-friendly with fresh content");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "li");
        \u0275\u0275text(30, "Slower initial load compared to static");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "pre")(32, "code", 4);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(34, "mat-tab", 5)(35, "div", 2)(36, "h2");
        \u0275\u0275text(37, "Static Site Generation (SSG)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 3)(39, "p")(40, "strong");
        \u0275\u0275text(41, "SSG");
        \u0275\u0275elementEnd();
        \u0275\u0275text(42, " generates pages at build time for maximum performance.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "ul")(44, "li");
        \u0275\u0275text(45, "Pages generated during build");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "li");
        \u0275\u0275text(47, "Served as static HTML");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "li");
        \u0275\u0275text(49, "Ultra-fast loading times");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "li");
        \u0275\u0275text(51, "Perfect for blogs and documentation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "li");
        \u0275\u0275text(53, "Use ");
        \u0275\u0275elementStart(54, "code");
        \u0275\u0275text(55, "generateStaticParams");
        \u0275\u0275elementEnd();
        \u0275\u0275text(56, " for dynamic routes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "li");
        \u0275\u0275text(58, "Data is stale until next build");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(59, "pre")(60, "code", 4);
        \u0275\u0275text(61);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(62, "mat-tab", 6)(63, "div", 2)(64, "h2");
        \u0275\u0275text(65, "Incremental Static Regeneration (ISR)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "div", 3)(67, "p")(68, "strong");
        \u0275\u0275text(69, "ISR");
        \u0275\u0275elementEnd();
        \u0275\u0275text(70, " combines static generation with periodic updates.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "ul")(72, "li");
        \u0275\u0275text(73, "Static pages with periodic revalidation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "li");
        \u0275\u0275text(75, "Best of both SSG and SSR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "li");
        \u0275\u0275text(77, "Set revalidation period with ");
        \u0275\u0275elementStart(78, "code");
        \u0275\u0275text(79, "revalidate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(80, "li");
        \u0275\u0275text(81, "On-demand revalidation with ");
        \u0275\u0275elementStart(82, "code");
        \u0275\u0275text(83, "revalidatePath");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "li");
        \u0275\u0275text(85, "Perfect for e-commerce and content sites");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "li");
        \u0275\u0275text(87, "Scales to millions of pages");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(88, "pre")(89, "code", 4);
        \u0275\u0275text(90);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(91, "mat-tab", 7)(92, "div", 2)(93, "h2");
        \u0275\u0275text(94, "Client-Side Rendering (CSR)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "div", 3)(96, "p")(97, "strong");
        \u0275\u0275text(98, "CSR");
        \u0275\u0275elementEnd();
        \u0275\u0275text(99, " renders content in the browser using JavaScript.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "ul")(101, "li");
        \u0275\u0275text(102, "Rendering happens in the browser");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "li");
        \u0275\u0275text(104, "Use 'use client' directive");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "li");
        \u0275\u0275text(106, "Good for interactive, user-specific UI");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "li");
        \u0275\u0275text(108, "Access to browser APIs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "li");
        \u0275\u0275text(110, "Can use React hooks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "li");
        \u0275\u0275text(112, "Slower initial page load");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(113, "pre")(114, "code", 4);
        \u0275\u0275text(115);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(116, "mat-tab", 8)(117, "div", 2)(118, "h2");
        \u0275\u0275text(119, "Rendering Methods Comparison");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "div", 3)(121, "p");
        \u0275\u0275text(122, "Choose the right rendering strategy based on your content and requirements.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "ul")(124, "li")(125, "strong");
        \u0275\u0275text(126, "SSG:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(127, " Best performance, stale data");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "li")(129, "strong");
        \u0275\u0275text(130, "ISR:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(131, " Great performance, periodic freshness");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "li")(133, "strong");
        \u0275\u0275text(134, "SSR:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(135, " Always fresh, slower load");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "li")(137, "strong");
        \u0275\u0275text(138, "CSR:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(139, " Interactive, browser-only");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(140, "pre")(141, "code", 4);
        \u0275\u0275text(142);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(143, "mat-tab", 9)(144, "div", 2)(145, "h2");
        \u0275\u0275text(146, "Generating Static Params");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "div", 3)(148, "p")(149, "strong");
        \u0275\u0275text(150, "generateStaticParams");
        \u0275\u0275elementEnd();
        \u0275\u0275text(151, " defines which dynamic routes to pre-render at build time.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "ul")(153, "li");
        \u0275\u0275text(154, "Replaces getStaticPaths from Pages Router");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "li");
        \u0275\u0275text(156, "Generates static pages for dynamic routes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "li");
        \u0275\u0275text(158, "Can be nested with parent params");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(159, "li");
        \u0275\u0275text(160, "Runs at build time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(161, "li");
        \u0275\u0275text(162, "Returns array of param objects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(163, "li");
        \u0275\u0275text(164, "Enables SSG for dynamic routes");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(165, "pre")(166, "code", 4);
        \u0275\u0275text(167);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(168, "mat-tab", 10)(169, "div", 2)(170, "h2");
        \u0275\u0275text(171, "Revalidation Strategies");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(172, "div", 3)(173, "p");
        \u0275\u0275text(174, "Control when and how your static content is regenerated.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(175, "ul")(176, "li")(177, "strong");
        \u0275\u0275text(178, "Time-based:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(179, " Set revalidate interval");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(180, "li")(181, "strong");
        \u0275\u0275text(182, "On-demand:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(183, " Trigger with revalidatePath/revalidateTag");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(184, "li")(185, "strong");
        \u0275\u0275text(186, "Tags:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(187, " Group related content for bulk revalidation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(188, "li");
        \u0275\u0275text(189, "Works with ISR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(190, "li");
        \u0275\u0275text(191, "Efficient cache invalidation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(192, "li");
        \u0275\u0275text(193, "No-store for SSR");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(194, "pre")(195, "code", 4);
        \u0275\u0275text(196);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(197, "mat-tab", 11)(198, "div", 2)(199, "h2");
        \u0275\u0275text(200, "Streaming with Suspense");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(201, "div", 3)(202, "p")(203, "strong");
        \u0275\u0275text(204, "Streaming");
        \u0275\u0275elementEnd();
        \u0275\u0275text(205, " allows you to progressively render UI as data becomes available.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(206, "ul")(207, "li");
        \u0275\u0275text(208, "Fast Time to First Byte (TTFB)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(209, "li");
        \u0275\u0275text(210, "Progressive rendering with Suspense");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(211, "li");
        \u0275\u0275text(212, "Instant loading states");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(213, "li");
        \u0275\u0275text(214, "Better perceived performance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(215, "li");
        \u0275\u0275text(216, "SEO-friendly HTML streaming");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(217, "li");
        \u0275\u0275text(218, "Works with Server Components");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(219, "pre")(220, "code", 4);
        \u0275\u0275text(221);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(33);
        \u0275\u0275textInterpolate(ctx.ssrBasics);
        \u0275\u0275advance(28);
        \u0275\u0275textInterpolate(ctx.ssgBasics);
        \u0275\u0275advance(29);
        \u0275\u0275textInterpolate(ctx.isrBasics);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.csrBasics);
        \u0275\u0275advance(27);
        \u0275\u0275textInterpolate(ctx.comparison);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.generateStaticParams);
        \u0275\u0275advance(29);
        \u0275\u0275textInterpolate(ctx.revalidation);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.streaming);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #000000;\n  margin-bottom: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #282c34;\n  margin-top: 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  border-left: 4px solid #000000;\n  padding: 15px;\n  margin: 15px 0;\n  border-radius: 4px;\n}\n.info-box.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-left-color: #000000;\n}\n.info-box.warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #000000;\n}\n.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #000000;\n}\n.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding-left: 20px;\n}\n.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #e0e0e0;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\npre[_ngcontent-%COMP%] {\n  background: #282c34;\n  color: #ffffff;\n  padding: 15px;\n  border-radius: 4px;\n  overflow-x: auto;\n  margin: 15px 0;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: 14px;\n}\np[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  color: #333;\n}\n/*# sourceMappingURL=nextjs-rendering.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NextjsRenderingComponent, { className: "NextjsRenderingComponent", filePath: "src\\app\\components\\nextjs\\nextjs-rendering\\nextjs-rendering.component.ts", lineNumber: 13 });
})();
export {
  NextjsRenderingComponent
};
//# sourceMappingURL=chunk-PVK7YSUT.js.map
