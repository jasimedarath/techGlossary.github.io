import"./chunk-2BQE7O6T.js";import"./chunk-4ITEIGFF.js";import"./chunk-WCULWZKC.js";import{a as v}from"./chunk-VDRUEQXK.js";import{a as g,b as S,c as x,d as u}from"./chunk-GNZ74KMC.js";import"./chunk-XAZLOLJU.js";import"./chunk-SZTU5CXE.js";import{Ia as r,Ya as o,da as c,e as h,hb as n,ib as e,mb as s,ub as t,vb as l,zb as p}from"./chunk-KMNIY7WT.js";var f=h(v());function E(i,d){if(i&1&&(n(0,"div",10)(1,"h2"),t(2,"Server-Side Rendering (SSR)"),e(),n(3,"div",11)(4,"p")(5,"strong"),t(6,"SSR"),e(),t(7," renders pages on the server for each request, ensuring fresh data."),e(),n(8,"ul")(9,"li"),t(10,"Pages rendered on every request"),e(),n(11,"li"),t(12,"Always fresh, up-to-date data"),e(),n(13,"li"),t(14,"Use "),n(15,"code"),t(16,"cache: 'no-store'"),e(),t(17," to opt into SSR"),e(),n(18,"li"),t(19,"Good for personalized content"),e(),n(20,"li"),t(21,"SEO-friendly with fresh content"),e(),n(22,"li"),t(23,"Slower initial load compared to static"),e()()(),n(24,"pre")(25,"code",12),t(26),e()()()),i&2){let a=s();r(26),l(a.ssrBasics)}}function b(i,d){if(i&1&&(n(0,"div",10)(1,"h2"),t(2,"Static Site Generation (SSG)"),e(),n(3,"div",11)(4,"p")(5,"strong"),t(6,"SSG"),e(),t(7," generates pages at build time for maximum performance."),e(),n(8,"ul")(9,"li"),t(10,"Pages generated during build"),e(),n(11,"li"),t(12,"Served as static HTML"),e(),n(13,"li"),t(14,"Ultra-fast loading times"),e(),n(15,"li"),t(16,"Perfect for blogs and documentation"),e(),n(17,"li"),t(18,"Use "),n(19,"code"),t(20,"generateStaticParams"),e(),t(21," for dynamic routes"),e(),n(22,"li"),t(23,"Data is stale until next build"),e()()(),n(24,"pre")(25,"code",12),t(26),e()()()),i&2){let a=s();r(26),l(a.ssgBasics)}}function P(i,d){if(i&1&&(n(0,"div",10)(1,"h2"),t(2,"Incremental Static Regeneration (ISR)"),e(),n(3,"div",11)(4,"p")(5,"strong"),t(6,"ISR"),e(),t(7," combines static generation with periodic updates."),e(),n(8,"ul")(9,"li"),t(10,"Static pages with periodic revalidation"),e(),n(11,"li"),t(12,"Best of both SSG and SSR"),e(),n(13,"li"),t(14,"Set revalidation period with "),n(15,"code"),t(16,"revalidate"),e()(),n(17,"li"),t(18,"On-demand revalidation with "),n(19,"code"),t(20,"revalidatePath"),e()(),n(21,"li"),t(22,"Perfect for e-commerce and content sites"),e(),n(23,"li"),t(24,"Scales to millions of pages"),e()()(),n(25,"pre")(26,"code",12),t(27),e()()()),i&2){let a=s();r(27),l(a.isrBasics)}}function R(i,d){if(i&1&&(n(0,"div",10)(1,"h2"),t(2,"Client-Side Rendering (CSR)"),e(),n(3,"div",11)(4,"p")(5,"strong"),t(6,"CSR"),e(),t(7," renders content in the browser using JavaScript."),e(),n(8,"ul")(9,"li"),t(10,"Rendering happens in the browser"),e(),n(11,"li"),t(12,"Use 'use client' directive"),e(),n(13,"li"),t(14,"Good for interactive, user-specific UI"),e(),n(15,"li"),t(16,"Access to browser APIs"),e(),n(17,"li"),t(18,"Can use React hooks"),e(),n(19,"li"),t(20,"Slower initial page load"),e()()(),n(21,"pre")(22,"code",12),t(23),e()()()),i&2){let a=s();r(23),l(a.csrBasics)}}function y(i,d){if(i&1&&(n(0,"div",10)(1,"h2"),t(2,"Rendering Methods Comparison"),e(),n(3,"div",11)(4,"p"),t(5,"Choose the right rendering strategy based on your content and requirements."),e(),n(6,"ul")(7,"li")(8,"strong"),t(9,"SSG:"),e(),t(10," Best performance, stale data"),e(),n(11,"li")(12,"strong"),t(13,"ISR:"),e(),t(14," Great performance, periodic freshness"),e(),n(15,"li")(16,"strong"),t(17,"SSR:"),e(),t(18," Always fresh, slower load"),e(),n(19,"li")(20,"strong"),t(21,"CSR:"),e(),t(22," Interactive, browser-only"),e()()(),n(23,"pre")(24,"code",12),t(25),e()()()),i&2){let a=s();r(25),l(a.comparison)}}function C(i,d){if(i&1&&(n(0,"div",10)(1,"h2"),t(2,"Generating Static Params"),e(),n(3,"div",11)(4,"p")(5,"strong"),t(6,"generateStaticParams"),e(),t(7," defines which dynamic routes to pre-render at build time."),e(),n(8,"ul")(9,"li"),t(10,"Replaces getStaticPaths from Pages Router"),e(),n(11,"li"),t(12,"Generates static pages for dynamic routes"),e(),n(13,"li"),t(14,"Can be nested with parent params"),e(),n(15,"li"),t(16,"Runs at build time"),e(),n(17,"li"),t(18,"Returns array of param objects"),e(),n(19,"li"),t(20,"Enables SSG for dynamic routes"),e()()(),n(21,"pre")(22,"code",12),t(23),e()()()),i&2){let a=s();r(23),l(a.generateStaticParams)}}function w(i,d){if(i&1&&(n(0,"div",10)(1,"h2"),t(2,"Revalidation Strategies"),e(),n(3,"div",11)(4,"p"),t(5,"Control when and how your static content is regenerated."),e(),n(6,"ul")(7,"li")(8,"strong"),t(9,"Time-based:"),e(),t(10," Set revalidate interval"),e(),n(11,"li")(12,"strong"),t(13,"On-demand:"),e(),t(14," Trigger with revalidatePath/revalidateTag"),e(),n(15,"li")(16,"strong"),t(17,"Tags:"),e(),t(18," Group related content for bulk revalidation"),e(),n(19,"li"),t(20,"Works with ISR"),e(),n(21,"li"),t(22,"Efficient cache invalidation"),e(),n(23,"li"),t(24,"No-store for SSR"),e()()(),n(25,"pre")(26,"code",12),t(27),e()()()),i&2){let a=s();r(27),l(a.revalidation)}}function _(i,d){if(i&1&&(n(0,"div",10)(1,"h2"),t(2,"Streaming with Suspense"),e(),n(3,"div",11)(4,"p")(5,"strong"),t(6,"Streaming"),e(),t(7," allows you to progressively render UI as data becomes available."),e(),n(8,"ul")(9,"li"),t(10,"Fast Time to First Byte (TTFB)"),e(),n(11,"li"),t(12,"Progressive rendering with Suspense"),e(),n(13,"li"),t(14,"Instant loading states"),e(),n(15,"li"),t(16,"Better perceived performance"),e(),n(17,"li"),t(18,"SEO-friendly HTML streaming"),e(),n(19,"li"),t(20,"Works with Server Components"),e()()(),n(21,"pre")(22,"code",12),t(23),e()()()),i&2){let a=s();r(23),l(a.streaming)}}var k=(()=>{class i{constructor(){this.ssrBasics=`// Server-Side Rendering (SSR)
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
// - SEO-friendly (HTML streamed)`}ngAfterViewChecked(){f.highlightAll()}static{this.\u0275fac=function(m){return new(m||i)}}static{this.\u0275cmp=c({type:i,selectors:[["app-nextjs-rendering"]],standalone:!0,features:[p],decls:22,vars:0,consts:[[1,"container"],["label","SSR"],["matTabContent",""],["label","SSG"],["label","ISR"],["label","CSR"],["label","Comparison"],["label","generateStaticParams"],["label","Revalidation"],["label","Streaming"],[1,"tab-content"],[1,"info-box"],[1,"language-tsx"]],template:function(m,T){m&1&&(n(0,"div",0)(1,"h1"),t(2,"Next.js Rendering Strategies"),e(),n(3,"p"),t(4,"Next.js provides multiple rendering strategies to optimize performance and user experience: SSR, SSG, ISR, and CSR."),e(),n(5,"mat-tab-group")(6,"mat-tab",1),o(7,E,27,1,"ng-template",2),e(),n(8,"mat-tab",3),o(9,b,27,1,"ng-template",2),e(),n(10,"mat-tab",4),o(11,P,28,1,"ng-template",2),e(),n(12,"mat-tab",5),o(13,R,24,1,"ng-template",2),e(),n(14,"mat-tab",6),o(15,y,26,1,"ng-template",2),e(),n(16,"mat-tab",7),o(17,C,24,1,"ng-template",2),e(),n(18,"mat-tab",8),o(19,w,28,1,"ng-template",2),e(),n(20,"mat-tab",9),o(21,_,24,1,"ng-template",2),e()()())},dependencies:[u,g,S,x],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return i})();export{k as NextjsRenderingComponent};
