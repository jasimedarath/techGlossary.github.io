import{b as m,c,d as p}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as i,da as l,gb as n,hb as t,tb as e,ub as a,yb as d}from"./chunk-WGQ2ELTG.js";var f=(()=>{class o{constructor(){this.ssrBasics=`// Server-Side Rendering (SSR)
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
// Slower initial load`,this.ssgBasics=`// Static Site Generation (SSG)
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
// Great for blogs, documentation`,this.isrBasics=`// Incremental Static Regeneration (ISR)
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
&#125;`,this.csrBasics=`// Client-Side Rendering (CSR)
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
// Good for personalized content`,this.comparison=`// Rendering Method Comparison

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
'use client';`,this.generateStaticParams=`// generateStaticParams - Define static paths at build time

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
&#125;`,this.revalidation=`// Revalidation Strategies

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
&#125;`,this.streaming=`// Streaming and Suspense

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
// - SEO-friendly (HTML streamed)`}ngAfterViewChecked(){Prism.highlightAll()}static{this.\u0275fac=function(s){return new(s||o)}}static{this.\u0275cmp=l({type:o,selectors:[["app-nextjs-rendering"]],standalone:!0,features:[d],decls:222,vars:8,consts:[[1,"container"],["label","SSR"],[1,"tab-content"],[1,"info-box"],[1,"language-tsx"],["label","SSG"],["label","ISR"],["label","CSR"],["label","Comparison"],["label","generateStaticParams"],["label","Revalidation"],["label","Streaming"]],template:function(s,r){s&1&&(n(0,"div",0)(1,"h1"),e(2,"Next.js Rendering Strategies"),t(),n(3,"p"),e(4,"Next.js provides multiple rendering strategies to optimize performance and user experience: SSR, SSG, ISR, and CSR."),t(),n(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),e(9,"Server-Side Rendering (SSR)"),t(),n(10,"div",3)(11,"p")(12,"strong"),e(13,"SSR"),t(),e(14," renders pages on the server for each request, ensuring fresh data."),t(),n(15,"ul")(16,"li"),e(17,"Pages rendered on every request"),t(),n(18,"li"),e(19,"Always fresh, up-to-date data"),t(),n(20,"li"),e(21,"Use "),n(22,"code"),e(23,"cache: 'no-store'"),t(),e(24," to opt into SSR"),t(),n(25,"li"),e(26,"Good for personalized content"),t(),n(27,"li"),e(28,"SEO-friendly with fresh content"),t(),n(29,"li"),e(30,"Slower initial load compared to static"),t()()(),n(31,"pre")(32,"code",4),e(33),t()()()(),n(34,"mat-tab",5)(35,"div",2)(36,"h2"),e(37,"Static Site Generation (SSG)"),t(),n(38,"div",3)(39,"p")(40,"strong"),e(41,"SSG"),t(),e(42," generates pages at build time for maximum performance."),t(),n(43,"ul")(44,"li"),e(45,"Pages generated during build"),t(),n(46,"li"),e(47,"Served as static HTML"),t(),n(48,"li"),e(49,"Ultra-fast loading times"),t(),n(50,"li"),e(51,"Perfect for blogs and documentation"),t(),n(52,"li"),e(53,"Use "),n(54,"code"),e(55,"generateStaticParams"),t(),e(56," for dynamic routes"),t(),n(57,"li"),e(58,"Data is stale until next build"),t()()(),n(59,"pre")(60,"code",4),e(61),t()()()(),n(62,"mat-tab",6)(63,"div",2)(64,"h2"),e(65,"Incremental Static Regeneration (ISR)"),t(),n(66,"div",3)(67,"p")(68,"strong"),e(69,"ISR"),t(),e(70," combines static generation with periodic updates."),t(),n(71,"ul")(72,"li"),e(73,"Static pages with periodic revalidation"),t(),n(74,"li"),e(75,"Best of both SSG and SSR"),t(),n(76,"li"),e(77,"Set revalidation period with "),n(78,"code"),e(79,"revalidate"),t()(),n(80,"li"),e(81,"On-demand revalidation with "),n(82,"code"),e(83,"revalidatePath"),t()(),n(84,"li"),e(85,"Perfect for e-commerce and content sites"),t(),n(86,"li"),e(87,"Scales to millions of pages"),t()()(),n(88,"pre")(89,"code",4),e(90),t()()()(),n(91,"mat-tab",7)(92,"div",2)(93,"h2"),e(94,"Client-Side Rendering (CSR)"),t(),n(95,"div",3)(96,"p")(97,"strong"),e(98,"CSR"),t(),e(99," renders content in the browser using JavaScript."),t(),n(100,"ul")(101,"li"),e(102,"Rendering happens in the browser"),t(),n(103,"li"),e(104,"Use 'use client' directive"),t(),n(105,"li"),e(106,"Good for interactive, user-specific UI"),t(),n(107,"li"),e(108,"Access to browser APIs"),t(),n(109,"li"),e(110,"Can use React hooks"),t(),n(111,"li"),e(112,"Slower initial page load"),t()()(),n(113,"pre")(114,"code",4),e(115),t()()()(),n(116,"mat-tab",8)(117,"div",2)(118,"h2"),e(119,"Rendering Methods Comparison"),t(),n(120,"div",3)(121,"p"),e(122,"Choose the right rendering strategy based on your content and requirements."),t(),n(123,"ul")(124,"li")(125,"strong"),e(126,"SSG:"),t(),e(127," Best performance, stale data"),t(),n(128,"li")(129,"strong"),e(130,"ISR:"),t(),e(131," Great performance, periodic freshness"),t(),n(132,"li")(133,"strong"),e(134,"SSR:"),t(),e(135," Always fresh, slower load"),t(),n(136,"li")(137,"strong"),e(138,"CSR:"),t(),e(139," Interactive, browser-only"),t()()(),n(140,"pre")(141,"code",4),e(142),t()()()(),n(143,"mat-tab",9)(144,"div",2)(145,"h2"),e(146,"Generating Static Params"),t(),n(147,"div",3)(148,"p")(149,"strong"),e(150,"generateStaticParams"),t(),e(151," defines which dynamic routes to pre-render at build time."),t(),n(152,"ul")(153,"li"),e(154,"Replaces getStaticPaths from Pages Router"),t(),n(155,"li"),e(156,"Generates static pages for dynamic routes"),t(),n(157,"li"),e(158,"Can be nested with parent params"),t(),n(159,"li"),e(160,"Runs at build time"),t(),n(161,"li"),e(162,"Returns array of param objects"),t(),n(163,"li"),e(164,"Enables SSG for dynamic routes"),t()()(),n(165,"pre")(166,"code",4),e(167),t()()()(),n(168,"mat-tab",10)(169,"div",2)(170,"h2"),e(171,"Revalidation Strategies"),t(),n(172,"div",3)(173,"p"),e(174,"Control when and how your static content is regenerated."),t(),n(175,"ul")(176,"li")(177,"strong"),e(178,"Time-based:"),t(),e(179," Set revalidate interval"),t(),n(180,"li")(181,"strong"),e(182,"On-demand:"),t(),e(183," Trigger with revalidatePath/revalidateTag"),t(),n(184,"li")(185,"strong"),e(186,"Tags:"),t(),e(187," Group related content for bulk revalidation"),t(),n(188,"li"),e(189,"Works with ISR"),t(),n(190,"li"),e(191,"Efficient cache invalidation"),t(),n(192,"li"),e(193,"No-store for SSR"),t()()(),n(194,"pre")(195,"code",4),e(196),t()()()(),n(197,"mat-tab",11)(198,"div",2)(199,"h2"),e(200,"Streaming with Suspense"),t(),n(201,"div",3)(202,"p")(203,"strong"),e(204,"Streaming"),t(),e(205," allows you to progressively render UI as data becomes available."),t(),n(206,"ul")(207,"li"),e(208,"Fast Time to First Byte (TTFB)"),t(),n(209,"li"),e(210,"Progressive rendering with Suspense"),t(),n(211,"li"),e(212,"Instant loading states"),t(),n(213,"li"),e(214,"Better perceived performance"),t(),n(215,"li"),e(216,"SEO-friendly HTML streaming"),t(),n(217,"li"),e(218,"Works with Server Components"),t()()(),n(219,"pre")(220,"code",4),e(221),t()()()()()()),s&2&&(i(33),a(r.ssrBasics),i(28),a(r.ssgBasics),i(29),a(r.isrBasics),i(25),a(r.csrBasics),i(27),a(r.comparison),i(25),a(r.generateStaticParams),i(29),a(r.revalidation),i(25),a(r.streaming))},dependencies:[p,m,c],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#000;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#f0f0f0;border-left:4px solid #000000;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#000}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#000}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#000}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#e0e0e0;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;color:#fff;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:14px}p[_ngcontent-%COMP%]{line-height:1.6;color:#333}"]})}}return o})();export{f as NextjsRenderingComponent};
