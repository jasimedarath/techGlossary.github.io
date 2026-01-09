import{b as c,c as m,d as p}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as i,da as l,gb as n,hb as t,tb as e,ub as a,yb as d}from"./chunk-WGQ2ELTG.js";var x=(()=>{class o{constructor(){this.fetchBasics=`// Server Component data fetching with fetch API
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
&#125;);`}ngAfterViewChecked(){Prism.highlightAll()}static{this.\u0275fac=function(s){return new(s||o)}}static{this.\u0275cmp=l({type:o,selectors:[["app-nextjs-datafetching"]],standalone:!0,features:[d],decls:216,vars:8,consts:[[1,"container"],["label","Fetch Basics"],[1,"tab-content"],[1,"info-box"],[1,"language-tsx"],["label","Cache Options"],["label","Parallel Fetching"],["label","Sequential Fetching"],["label","Client Fetching"],["label","SWR"],["label","React Query"],["label","Error Handling"]],template:function(s,r){s&1&&(n(0,"div",0)(1,"h1"),e(2,"Next.js Data Fetching"),t(),n(3,"p"),e(4,"Next.js provides powerful data fetching capabilities with Server Components, fetch API with caching, and client-side libraries like SWR and React Query."),t(),n(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),e(9,"Server Component Data Fetching"),t(),n(10,"div",3)(11,"p")(12,"strong"),e(13,"Server Components"),t(),e(14," can fetch data directly using async/await."),t(),n(15,"ul")(16,"li"),e(17,"Async Server Components by default"),t(),n(18,"li"),e(19,"Direct database or API access"),t(),n(20,"li"),e(21,"No client-side JavaScript for data fetching"),t(),n(22,"li"),e(23,"Better performance and security"),t(),n(24,"li"),e(25,"Automatic request deduplication"),t(),n(26,"li"),e(27,"Built-in error handling"),t()()(),n(28,"pre")(29,"code",4),e(30),t()()()(),n(31,"mat-tab",5)(32,"div",2)(33,"h2"),e(34,"Caching and Revalidation"),t(),n(35,"div",3)(36,"p"),e(37,"Control caching behavior with "),n(38,"code"),e(39,"cache"),t(),e(40," and "),n(41,"code"),e(42,"next"),t(),e(43," options."),t(),n(44,"ul")(45,"li")(46,"code"),e(47,"force-cache"),t(),e(48,": Static generation (default)"),t(),n(49,"li")(50,"code"),e(51,"no-store"),t(),e(52,": Server-side rendering"),t(),n(53,"li")(54,"code"),e(55,"revalidate"),t(),e(56,": Incremental static regeneration"),t(),n(57,"li")(58,"code"),e(59,"tags"),t(),e(60,": Group related requests for revalidation"),t(),n(61,"li"),e(62,"On-demand revalidation with revalidatePath/Tag"),t(),n(63,"li"),e(64,"Route segment config options"),t()()(),n(65,"pre")(66,"code",4),e(67),t()()()(),n(68,"mat-tab",6)(69,"div",2)(70,"h2"),e(71,"Parallel Data Fetching"),t(),n(72,"div",3)(73,"p"),e(74,"Fetch multiple data sources concurrently with "),n(75,"code"),e(76,"Promise.all"),t(),e(77,"."),t(),n(78,"ul")(79,"li"),e(80,"Fetch independent data in parallel"),t(),n(81,"li"),e(82,"Reduces total loading time"),t(),n(83,"li"),e(84,"Use Promise.all for concurrent requests"),t(),n(85,"li"),e(86,"Better performance than sequential"),t(),n(87,"li"),e(88,"All requests start simultaneously"),t(),n(89,"li"),e(90,"Ideal for dashboard pages"),t()()(),n(91,"pre")(92,"code",4),e(93),t()()()(),n(94,"mat-tab",7)(95,"div",2)(96,"h2"),e(97,"Sequential Data Fetching"),t(),n(98,"div",3)(99,"p"),e(100,"Fetch data sequentially when each request depends on the previous result."),t(),n(101,"ul")(102,"li"),e(103,"Used when data depends on previous results"),t(),n(104,"li"),e(105,"Each request waits for the previous to complete"),t(),n(106,"li"),e(107,"Longer total loading time"),t(),n(108,"li"),e(109,"Sometimes necessary for dependent data"),t(),n(110,"li"),e(111,"Consider if parallel is possible"),t(),n(112,"li"),e(113,"Use Suspense for progressive rendering"),t()()(),n(114,"pre")(115,"code",4),e(116),t()()()(),n(117,"mat-tab",8)(118,"div",2)(119,"h2"),e(120,"Client-Side Data Fetching"),t(),n(121,"div",3)(122,"p"),e(123,"Use "),n(124,"code"),e(125,"useEffect"),t(),e(126," for client-side data fetching in Client Components."),t(),n(127,"ul")(128,"li"),e(129,"Fetching happens in the browser"),t(),n(130,"li"),e(131,"Use 'use client' directive"),t(),n(132,"li"),e(133,"Good for user interactions"),t(),n(134,"li"),e(135,"Access to browser state"),t(),n(136,"li"),e(137,"Personalized content"),t(),n(138,"li"),e(139,"Consider SWR or React Query for better UX"),t()()(),n(140,"pre")(141,"code",4),e(142),t()()()(),n(143,"mat-tab",9)(144,"div",2)(145,"h2"),e(146,"SWR - Stale-While-Revalidate"),t(),n(147,"div",3)(148,"p")(149,"strong"),e(150,"SWR"),t(),e(151," is a React Hooks library for data fetching with caching and revalidation."),t(),n(152,"ul")(153,"li"),e(154,"Built by Vercel for Next.js"),t(),n(155,"li"),e(156,"Automatic caching and revalidation"),t(),n(157,"li"),e(158,"Focus/reconnect revalidation"),t(),n(159,"li"),e(160,"Polling and pagination support"),t(),n(161,"li"),e(162,"Optimistic updates"),t(),n(163,"li"),e(164,"Lightweight and fast"),t()()(),n(165,"pre")(166,"code",4),e(167),t()()()(),n(168,"mat-tab",10)(169,"div",2)(170,"h2"),e(171,"React Query (TanStack Query)"),t(),n(172,"div",3)(173,"p")(174,"strong"),e(175,"React Query"),t(),e(176," provides powerful data synchronization and caching."),t(),n(177,"ul")(178,"li"),e(179,"Advanced caching strategies"),t(),n(180,"li"),e(181,"Automatic background refetching"),t(),n(182,"li"),e(183,"Mutations with optimistic updates"),t(),n(184,"li"),e(185,"Pagination and infinite scroll"),t(),n(186,"li"),e(187,"DevTools for debugging"),t(),n(188,"li"),e(189,"TypeScript support"),t()()(),n(190,"pre")(191,"code",4),e(192),t()()()(),n(193,"mat-tab",11)(194,"div",2)(195,"h2"),e(196,"Error Handling"),t(),n(197,"div",3)(198,"p"),e(199,"Properly handle errors in both server and client data fetching."),t(),n(200,"ul")(201,"li"),e(202,"Try-catch in Server Components"),t(),n(203,"li"),e(204,"error.tsx boundaries for UI"),t(),n(205,"li"),e(206,"Client-side error states"),t(),n(207,"li"),e(208,"Retry strategies with React Query"),t(),n(209,"li"),e(210,"Graceful degradation"),t(),n(211,"li"),e(212,"User-friendly error messages"),t()()(),n(213,"pre")(214,"code",4),e(215),t()()()()()()),s&2&&(i(30),a(r.fetchBasics),i(37),a(r.cacheOptions),i(26),a(r.parallelFetching),i(23),a(r.sequentialFetching),i(26),a(r.clientFetching),i(25),a(r.swrPattern),i(25),a(r.reactQuery),i(23),a(r.errorHandling))},dependencies:[p,c,m],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#000;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#f0f0f0;border-left:4px solid #000000;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#000}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#000}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#000}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#e0e0e0;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;color:#fff;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:14px}p[_ngcontent-%COMP%]{line-height:1.6;color:#333}"]})}}return o})();export{x as NextjsDatafetchingComponent};
