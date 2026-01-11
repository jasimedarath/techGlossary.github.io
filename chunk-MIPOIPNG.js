import"./chunk-2BQE7O6T.js";import"./chunk-4ITEIGFF.js";import"./chunk-WCULWZKC.js";import{a as v}from"./chunk-FSUYFWSG.js";import{a as u,b as h,c as f,d as x}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as r,Xa as o,da as m,e as S,gb as n,hb as e,lb as s,tb as t,ub as l,yb as p}from"./chunk-WGQ2ELTG.js";var g=S(v());function E(i,c){if(i&1&&(n(0,"div",10)(1,"h2"),t(2,"Server Component Data Fetching"),e(),n(3,"div",11)(4,"p")(5,"strong"),t(6,"Server Components"),e(),t(7," can fetch data directly using async/await."),e(),n(8,"ul")(9,"li"),t(10,"Async Server Components by default"),e(),n(11,"li"),t(12,"Direct database or API access"),e(),n(13,"li"),t(14,"No client-side JavaScript for data fetching"),e(),n(15,"li"),t(16,"Better performance and security"),e(),n(17,"li"),t(18,"Automatic request deduplication"),e(),n(19,"li"),t(20,"Built-in error handling"),e()()(),n(21,"pre")(22,"code",12),t(23),e()()()),i&2){let a=s();r(23),l(a.fetchBasics)}}function y(i,c){if(i&1&&(n(0,"div",10)(1,"h2"),t(2,"Caching and Revalidation"),e(),n(3,"div",11)(4,"p"),t(5,"Control caching behavior with "),n(6,"code"),t(7,"cache"),e(),t(8," and "),n(9,"code"),t(10,"next"),e(),t(11," options."),e(),n(12,"ul")(13,"li")(14,"code"),t(15,"force-cache"),e(),t(16,": Static generation (default)"),e(),n(17,"li")(18,"code"),t(19,"no-store"),e(),t(20,": Server-side rendering"),e(),n(21,"li")(22,"code"),t(23,"revalidate"),e(),t(24,": Incremental static regeneration"),e(),n(25,"li")(26,"code"),t(27,"tags"),e(),t(28,": Group related requests for revalidation"),e(),n(29,"li"),t(30,"On-demand revalidation with revalidatePath/Tag"),e(),n(31,"li"),t(32,"Route segment config options"),e()()(),n(33,"pre")(34,"code",12),t(35),e()()()),i&2){let a=s();r(35),l(a.cacheOptions)}}function C(i,c){if(i&1&&(n(0,"div",10)(1,"h2"),t(2,"Parallel Data Fetching"),e(),n(3,"div",11)(4,"p"),t(5,"Fetch multiple data sources concurrently with "),n(6,"code"),t(7,"Promise.all"),e(),t(8,"."),e(),n(9,"ul")(10,"li"),t(11,"Fetch independent data in parallel"),e(),n(12,"li"),t(13,"Reduces total loading time"),e(),n(14,"li"),t(15,"Use Promise.all for concurrent requests"),e(),n(16,"li"),t(17,"Better performance than sequential"),e(),n(18,"li"),t(19,"All requests start simultaneously"),e(),n(20,"li"),t(21,"Ideal for dashboard pages"),e()()(),n(22,"pre")(23,"code",12),t(24),e()()()),i&2){let a=s();r(24),l(a.parallelFetching)}}function b(i,c){if(i&1&&(n(0,"div",10)(1,"h2"),t(2,"Sequential Data Fetching"),e(),n(3,"div",11)(4,"p"),t(5,"Fetch data sequentially when each request depends on the previous result."),e(),n(6,"ul")(7,"li"),t(8,"Used when data depends on previous results"),e(),n(9,"li"),t(10,"Each request waits for the previous to complete"),e(),n(11,"li"),t(12,"Longer total loading time"),e(),n(13,"li"),t(14,"Sometimes necessary for dependent data"),e(),n(15,"li"),t(16,"Consider if parallel is possible"),e(),n(17,"li"),t(18,"Use Suspense for progressive rendering"),e()()(),n(19,"pre")(20,"code",12),t(21),e()()()),i&2){let a=s();r(21),l(a.sequentialFetching)}}function P(i,c){if(i&1&&(n(0,"div",10)(1,"h2"),t(2,"Client-Side Data Fetching"),e(),n(3,"div",11)(4,"p"),t(5,"Use "),n(6,"code"),t(7,"useEffect"),e(),t(8," for client-side data fetching in Client Components."),e(),n(9,"ul")(10,"li"),t(11,"Fetching happens in the browser"),e(),n(12,"li"),t(13,"Use 'use client' directive"),e(),n(14,"li"),t(15,"Good for user interactions"),e(),n(16,"li"),t(17,"Access to browser state"),e(),n(18,"li"),t(19,"Personalized content"),e(),n(20,"li"),t(21,"Consider SWR or React Query for better UX"),e()()(),n(22,"pre")(23,"code",12),t(24),e()()()),i&2){let a=s();r(24),l(a.clientFetching)}}function w(i,c){if(i&1&&(n(0,"div",10)(1,"h2"),t(2,"SWR - Stale-While-Revalidate"),e(),n(3,"div",11)(4,"p")(5,"strong"),t(6,"SWR"),e(),t(7," is a React Hooks library for data fetching with caching and revalidation."),e(),n(8,"ul")(9,"li"),t(10,"Built by Vercel for Next.js"),e(),n(11,"li"),t(12,"Automatic caching and revalidation"),e(),n(13,"li"),t(14,"Focus/reconnect revalidation"),e(),n(15,"li"),t(16,"Polling and pagination support"),e(),n(17,"li"),t(18,"Optimistic updates"),e(),n(19,"li"),t(20,"Lightweight and fast"),e()()(),n(21,"pre")(22,"code",12),t(23),e()()()),i&2){let a=s();r(23),l(a.swrPattern)}}function _(i,c){if(i&1&&(n(0,"div",10)(1,"h2"),t(2,"React Query (TanStack Query)"),e(),n(3,"div",11)(4,"p")(5,"strong"),t(6,"React Query"),e(),t(7," provides powerful data synchronization and caching."),e(),n(8,"ul")(9,"li"),t(10,"Advanced caching strategies"),e(),n(11,"li"),t(12,"Automatic background refetching"),e(),n(13,"li"),t(14,"Mutations with optimistic updates"),e(),n(15,"li"),t(16,"Pagination and infinite scroll"),e(),n(17,"li"),t(18,"DevTools for debugging"),e(),n(19,"li"),t(20,"TypeScript support"),e()()(),n(21,"pre")(22,"code",12),t(23),e()()()),i&2){let a=s();r(23),l(a.reactQuery)}}function R(i,c){if(i&1&&(n(0,"div",10)(1,"h2"),t(2,"Error Handling"),e(),n(3,"div",11)(4,"p"),t(5,"Properly handle errors in both server and client data fetching."),e(),n(6,"ul")(7,"li"),t(8,"Try-catch in Server Components"),e(),n(9,"li"),t(10,"error.tsx boundaries for UI"),e(),n(11,"li"),t(12,"Client-side error states"),e(),n(13,"li"),t(14,"Retry strategies with React Query"),e(),n(15,"li"),t(16,"Graceful degradation"),e(),n(17,"li"),t(18,"User-friendly error messages"),e()()(),n(19,"pre")(20,"code",12),t(21),e()()()),i&2){let a=s();r(21),l(a.errorHandling)}}var D=(()=>{class i{constructor(){this.fetchBasics=`// Server Component data fetching with fetch API
// app/posts/page.tsx

async function getPosts() &#123;
  const res = await fetch('https://api.example.com/posts', &#123;
    cache: 'force-cache', // Default - cached until revalidated
  &#125;);
  
  if (!res.ok) &#123;
    throw new Error('Failed to fetch posts');
  &#125;
  
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

// Server Components are async by default
// Data fetching happens on the server`,this.cacheOptions=`// Cache and revalidation options

// 1. Force cache (default) - SSG
const res = await fetch('https://api.example.com/data', &#123;
  cache: 'force-cache'
&#125;);

// 2. No store - SSR (always fresh)
const res = await fetch('https://api.example.com/data', &#123;
  cache: 'no-store'
&#125;);

// 3. Revalidate - ISR (time-based)
const res = await fetch('https://api.example.com/data', &#123;
  next: &#123; revalidate: 3600 &#125; // Revalidate every hour
&#125;);

// 4. Tag-based revalidation
const res = await fetch('https://api.example.com/data', &#123;
  next: &#123; tags: ['posts'] &#125;
&#125;);

// Revalidate by tag
import &#123; revalidateTag &#125; from 'next/cache';
revalidateTag('posts');

// 5. Path-based revalidation
import &#123; revalidatePath &#125; from 'next/cache';
revalidatePath('/posts');

// Route segment config
export const revalidate = 60; // Revalidate every 60 seconds
export const dynamic = 'force-dynamic'; // Always SSR`,this.parallelFetching=`// Parallel data fetching - fetch data concurrently

async function getUser(id: string) &#123;
  const res = await fetch(\\\`https://api.example.com/users/$&#123;id&#125;\\\`);
  return res.json();
&#125;

async function getPosts(userId: string) &#123;
  const res = await fetch(\`https://api.example.com/posts?userId=$&#123;userId&#125;\`);
  return res.json();
&#125;

async function getComments(userId: string) &#123;
  const res = await fetch(\`https://api.example.com/comments?userId=$&#123;userId&#125;\`);
  return res.json();
&#125;

export default async function UserProfile(&#123; params &#125;: &#123; params: &#123; id: string &#125; &#125;) &#123;
  // Fetch all data in parallel
  const [user, posts, comments] = await Promise.all([
    getUser(params.id),
    getPosts(params.id),
    getComments(params.id),
  ]);
  
  return (
    <div>
      <h1>&#123;user.name&#125;</h1>
      <section>
        <h2>Posts: &#123;posts.length&#125;</h2>
        <h2>Comments: &#123;comments.length&#125;</h2>
      </section>
    </div>
  );
&#125;`,this.sequentialFetching=`// Sequential data fetching - when data depends on previous results

async function getUser(id: string) &#123;
  const res = await fetch(\\\`https://api.example.com/users/$&#123;id&#125;\\\`);
  return res.json();
&#125;

async function getUserPosts(userId: string) &#123;
  const res = await fetch(\\\`https://api.example.com/posts?author=$&#123;userId&#125;\\\`);
  return res.json();
&#125;

async function getPostComments(postId: string) &#123;
  const res = await fetch(\\\`https://api.example.com/comments?postId=$&#123;postId&#125;\\\`);
  return res.json();
&#125;

export default async function UserPostsPage(&#123; params &#125;: &#123; params: &#123; id: string &#125; &#125;) &#123;
  // Fetch user first
  const user = await getUser(params.id);
  
  // Then fetch their posts
  const posts = await getUserPosts(user.id);
  
  // Then fetch comments for first post
  const comments = posts[0] ? await getPostComments(posts[0].id) : [];
  
  return (
    <div>
      <h1>&#123;user.name&#125;'s Posts</h1>
      &#123;posts.map((post: any) => (
        <article key=&#123;post.id&#125;>&#123;post.title&#125;</article>
      ))&#125;
    </div>
  );
&#125;`,this.clientFetching=`// Client-side data fetching with useEffect

'use client';

import &#123; useState, useEffect &#125; from 'react';

export default function ClientPosts() &#123;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => &#123;
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => &#123;
        setPosts(data);
        setLoading(false);
      &#125;)
      .catch(err => &#123;
        setError(err.message);
        setLoading(false);
      &#125;);
  &#125;, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: &#123;error&#125;</div>;

  return (
    <div>
      &#123;posts.map((post: any) => (
        <article key=&#123;post.id&#125;>
          <h2>&#123;post.title&#125;</h2>
        </article>
      ))&#125;
    </div>
  );
&#125;

// Good for: user interactions, personalized data`,this.swrPattern=`// SWR (stale-while-revalidate) for client-side fetching
// npm install swr

'use client';

import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Posts() &#123;
  const &#123; data, error, isLoading &#125; = useSWR('/api/posts', fetcher, &#123;
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshInterval: 30000, // Refresh every 30 seconds
  &#125;);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      &#123;data.map((post: any) => (
        <article key=&#123;post.id&#125;>
          <h2>&#123;post.title&#125;</h2>
        </article>
      ))&#125;
    </div>
  );
&#125;

// With mutation
import useSWR, &#123; mutate &#125; from 'swr';

function addPost() &#123;
  mutate('/api/posts', async (posts) => &#123;
    const newPost = await createPost();
    return [...posts, newPost];
  &#125;);
&#125;`,this.reactQuery=`// React Query (TanStack Query) for advanced client-side fetching
// npm install @tanstack/react-query

// app/providers.tsx
'use client';

import &#123; QueryClient, QueryClientProvider &#125; from '@tanstack/react-query';
import &#123; useState &#125; from 'react';

export function Providers(&#123; children &#125;: &#123; children: React.ReactNode &#125;) &#123;
  const [queryClient] = useState(() => new QueryClient(&#123;
    defaultOptions: &#123;
      queries: &#123;
        staleTime: 60 * 1000, // 1 minute
        cacheTime: 5 * 60 * 1000, // 5 minutes
      &#125;,
    &#125;,
  &#125;));

  return (
    <QueryClientProvider client=&#123;queryClient&#125;>
      &#123;children&#125;
    </QueryClientProvider>
  );
&#125;

// app/posts/page.tsx
'use client';

import &#123; useQuery, useMutation, useQueryClient &#125; from '@tanstack/react-query';

export default function Posts() &#123;
  const queryClient = useQueryClient();
  
  const &#123; data, isLoading, error &#125; = useQuery(&#123;
    queryKey: ['posts'],
    queryFn: async () => &#123;
      const res = await fetch('/api/posts');
      return res.json();
    &#125;,
  &#125;);

  const mutation = useMutation(&#123;
    mutationFn: (newPost) => fetch('/api/posts', &#123;
      method: 'POST',
      body: JSON.stringify(newPost),
    &#125;),
    onSuccess: () => &#123;
      queryClient.invalidateQueries(&#123; queryKey: ['posts'] &#125;);
    &#125;,
  &#125;);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  return (
    <div>
      &#123;data.map((post: any) => (
        <article key=&#123;post.id&#125;>&#123;post.title&#125;</article>
      ))&#125;
    </div>
  );
&#125;`,this.errorHandling=`// Error handling in data fetching

// Server Component error handling
async function getData() &#123;
  try &#123;
    const res = await fetch('https://api.example.com/data');
    
    if (!res.ok) &#123;
      throw new Error(\\\`HTTP error! status: $&#123;res.status&#125;\\\`);
    &#125;
    
    return res.json();
  &#125; catch (error) &#123;
    console.error('Failed to fetch data:', error);
    throw error; // Will be caught by error.tsx
  &#125;
&#125;

export default async function Page() &#123;
  const data = await getData();
  return <div>&#123;data.content&#125;</div>;
&#125;

// error.tsx boundary
'use client';

export default function Error(&#123;
  error,
  reset,
&#125;: &#123;
  error: Error & &#123; digest?: string &#125;;
  reset: () => void;
&#125;) &#123;
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>&#123;error.message&#125;</p>
      <button onClick=&#123;reset&#125;>Try again</button>
    </div>
  );
&#125;

// Client-side error handling with React Query
const &#123; data, error, isError &#125; = useQuery(&#123;
  queryKey: ['data'],
  queryFn: fetchData,
  retry: 3,
  retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
&#125;);`}ngAfterViewChecked(){g.highlightAll()}static{this.\u0275fac=function(d){return new(d||i)}}static{this.\u0275cmp=m({type:i,selectors:[["app-nextjs-datafetching"]],standalone:!0,features:[p],decls:22,vars:0,consts:[[1,"container"],["label","Fetch Basics"],["matTabContent",""],["label","Cache Options"],["label","Parallel Fetching"],["label","Sequential Fetching"],["label","Client Fetching"],["label","SWR"],["label","React Query"],["label","Error Handling"],[1,"tab-content"],[1,"info-box"],[1,"language-tsx"]],template:function(d,F){d&1&&(n(0,"div",0)(1,"h1"),t(2,"Next.js Data Fetching"),e(),n(3,"p"),t(4,"Next.js provides powerful data fetching capabilities with Server Components, fetch API with caching, and client-side libraries like SWR and React Query."),e(),n(5,"mat-tab-group")(6,"mat-tab",1),o(7,E,24,1,"ng-template",2),e(),n(8,"mat-tab",3),o(9,y,36,1,"ng-template",2),e(),n(10,"mat-tab",4),o(11,C,25,1,"ng-template",2),e(),n(12,"mat-tab",5),o(13,b,22,1,"ng-template",2),e(),n(14,"mat-tab",6),o(15,P,25,1,"ng-template",2),e(),n(16,"mat-tab",7),o(17,w,24,1,"ng-template",2),e(),n(18,"mat-tab",8),o(19,_,24,1,"ng-template",2),e(),n(20,"mat-tab",9),o(21,R,22,1,"ng-template",2),e()()())},dependencies:[x,u,h,f],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return i})();export{D as NextjsDatafetchingComponent};
