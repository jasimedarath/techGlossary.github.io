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

// src/app/components/nextjs/nextjs-datafetching/nextjs-datafetching.component.ts
var NextjsDatafetchingComponent = class _NextjsDatafetchingComponent {
  constructor() {
    this.fetchBasics = `// Server Component data fetching with fetch API
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
// Data fetching happens on the server`;
    this.cacheOptions = `// Cache and revalidation options

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
export const dynamic = 'force-dynamic'; // Always SSR`;
    this.parallelFetching = `// Parallel data fetching - fetch data concurrently

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
&#125;`;
    this.sequentialFetching = `// Sequential data fetching - when data depends on previous results

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
&#125;`;
    this.clientFetching = `// Client-side data fetching with useEffect

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

// Good for: user interactions, personalized data`;
    this.swrPattern = `// SWR (stale-while-revalidate) for client-side fetching
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
&#125;`;
    this.reactQuery = `// React Query (TanStack Query) for advanced client-side fetching
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
&#125;`;
    this.errorHandling = `// Error handling in data fetching

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
&#125;);`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function NextjsDatafetchingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NextjsDatafetchingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NextjsDatafetchingComponent, selectors: [["app-nextjs-datafetching"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 216, vars: 8, consts: [[1, "container"], ["label", "Fetch Basics"], [1, "tab-content"], [1, "info-box"], [1, "language-tsx"], ["label", "Cache Options"], ["label", "Parallel Fetching"], ["label", "Sequential Fetching"], ["label", "Client Fetching"], ["label", "SWR"], ["label", "React Query"], ["label", "Error Handling"]], template: function NextjsDatafetchingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Next.js Data Fetching");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Next.js provides powerful data fetching capabilities with Server Components, fetch API with caching, and client-side libraries like SWR and React Query.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "Server Component Data Fetching");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "Server Components");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " can fetch data directly using async/await.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "Async Server Components by default");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "Direct database or API access");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li");
        \u0275\u0275text(21, "No client-side JavaScript for data fetching");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275text(23, "Better performance and security");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "li");
        \u0275\u0275text(25, "Automatic request deduplication");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "li");
        \u0275\u0275text(27, "Built-in error handling");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "pre")(29, "code", 4);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(31, "mat-tab", 5)(32, "div", 2)(33, "h2");
        \u0275\u0275text(34, "Caching and Revalidation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 3)(36, "p");
        \u0275\u0275text(37, "Control caching behavior with ");
        \u0275\u0275elementStart(38, "code");
        \u0275\u0275text(39, "cache");
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, " and ");
        \u0275\u0275elementStart(41, "code");
        \u0275\u0275text(42, "next");
        \u0275\u0275elementEnd();
        \u0275\u0275text(43, " options.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "ul")(45, "li")(46, "code");
        \u0275\u0275text(47, "force-cache");
        \u0275\u0275elementEnd();
        \u0275\u0275text(48, ": Static generation (default)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "li")(50, "code");
        \u0275\u0275text(51, "no-store");
        \u0275\u0275elementEnd();
        \u0275\u0275text(52, ": Server-side rendering");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "li")(54, "code");
        \u0275\u0275text(55, "revalidate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(56, ": Incremental static regeneration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "li")(58, "code");
        \u0275\u0275text(59, "tags");
        \u0275\u0275elementEnd();
        \u0275\u0275text(60, ": Group related requests for revalidation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "li");
        \u0275\u0275text(62, "On-demand revalidation with revalidatePath/Tag");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "li");
        \u0275\u0275text(64, "Route segment config options");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(65, "pre")(66, "code", 4);
        \u0275\u0275text(67);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(68, "mat-tab", 6)(69, "div", 2)(70, "h2");
        \u0275\u0275text(71, "Parallel Data Fetching");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div", 3)(73, "p");
        \u0275\u0275text(74, "Fetch multiple data sources concurrently with ");
        \u0275\u0275elementStart(75, "code");
        \u0275\u0275text(76, "Promise.all");
        \u0275\u0275elementEnd();
        \u0275\u0275text(77, ".");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "ul")(79, "li");
        \u0275\u0275text(80, "Fetch independent data in parallel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "li");
        \u0275\u0275text(82, "Reduces total loading time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "li");
        \u0275\u0275text(84, "Use Promise.all for concurrent requests");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "li");
        \u0275\u0275text(86, "Better performance than sequential");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "li");
        \u0275\u0275text(88, "All requests start simultaneously");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "li");
        \u0275\u0275text(90, "Ideal for dashboard pages");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(91, "pre")(92, "code", 4);
        \u0275\u0275text(93);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(94, "mat-tab", 7)(95, "div", 2)(96, "h2");
        \u0275\u0275text(97, "Sequential Data Fetching");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "div", 3)(99, "p");
        \u0275\u0275text(100, "Fetch data sequentially when each request depends on the previous result.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "ul")(102, "li");
        \u0275\u0275text(103, "Used when data depends on previous results");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "li");
        \u0275\u0275text(105, "Each request waits for the previous to complete");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "li");
        \u0275\u0275text(107, "Longer total loading time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "li");
        \u0275\u0275text(109, "Sometimes necessary for dependent data");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "li");
        \u0275\u0275text(111, "Consider if parallel is possible");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "li");
        \u0275\u0275text(113, "Use Suspense for progressive rendering");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(114, "pre")(115, "code", 4);
        \u0275\u0275text(116);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(117, "mat-tab", 8)(118, "div", 2)(119, "h2");
        \u0275\u0275text(120, "Client-Side Data Fetching");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "div", 3)(122, "p");
        \u0275\u0275text(123, "Use ");
        \u0275\u0275elementStart(124, "code");
        \u0275\u0275text(125, "useEffect");
        \u0275\u0275elementEnd();
        \u0275\u0275text(126, " for client-side data fetching in Client Components.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "ul")(128, "li");
        \u0275\u0275text(129, "Fetching happens in the browser");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "li");
        \u0275\u0275text(131, "Use 'use client' directive");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "li");
        \u0275\u0275text(133, "Good for user interactions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "li");
        \u0275\u0275text(135, "Access to browser state");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "li");
        \u0275\u0275text(137, "Personalized content");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "li");
        \u0275\u0275text(139, "Consider SWR or React Query for better UX");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(140, "pre")(141, "code", 4);
        \u0275\u0275text(142);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(143, "mat-tab", 9)(144, "div", 2)(145, "h2");
        \u0275\u0275text(146, "SWR - Stale-While-Revalidate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "div", 3)(148, "p")(149, "strong");
        \u0275\u0275text(150, "SWR");
        \u0275\u0275elementEnd();
        \u0275\u0275text(151, " is a React Hooks library for data fetching with caching and revalidation.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "ul")(153, "li");
        \u0275\u0275text(154, "Built by Vercel for Next.js");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "li");
        \u0275\u0275text(156, "Automatic caching and revalidation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "li");
        \u0275\u0275text(158, "Focus/reconnect revalidation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(159, "li");
        \u0275\u0275text(160, "Polling and pagination support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(161, "li");
        \u0275\u0275text(162, "Optimistic updates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(163, "li");
        \u0275\u0275text(164, "Lightweight and fast");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(165, "pre")(166, "code", 4);
        \u0275\u0275text(167);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(168, "mat-tab", 10)(169, "div", 2)(170, "h2");
        \u0275\u0275text(171, "React Query (TanStack Query)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(172, "div", 3)(173, "p")(174, "strong");
        \u0275\u0275text(175, "React Query");
        \u0275\u0275elementEnd();
        \u0275\u0275text(176, " provides powerful data synchronization and caching.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(177, "ul")(178, "li");
        \u0275\u0275text(179, "Advanced caching strategies");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(180, "li");
        \u0275\u0275text(181, "Automatic background refetching");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(182, "li");
        \u0275\u0275text(183, "Mutations with optimistic updates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(184, "li");
        \u0275\u0275text(185, "Pagination and infinite scroll");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(186, "li");
        \u0275\u0275text(187, "DevTools for debugging");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(188, "li");
        \u0275\u0275text(189, "TypeScript support");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(190, "pre")(191, "code", 4);
        \u0275\u0275text(192);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(193, "mat-tab", 11)(194, "div", 2)(195, "h2");
        \u0275\u0275text(196, "Error Handling");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(197, "div", 3)(198, "p");
        \u0275\u0275text(199, "Properly handle errors in both server and client data fetching.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(200, "ul")(201, "li");
        \u0275\u0275text(202, "Try-catch in Server Components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(203, "li");
        \u0275\u0275text(204, "error.tsx boundaries for UI");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(205, "li");
        \u0275\u0275text(206, "Client-side error states");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(207, "li");
        \u0275\u0275text(208, "Retry strategies with React Query");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(209, "li");
        \u0275\u0275text(210, "Graceful degradation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(211, "li");
        \u0275\u0275text(212, "User-friendly error messages");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(213, "pre")(214, "code", 4);
        \u0275\u0275text(215);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(30);
        \u0275\u0275textInterpolate(ctx.fetchBasics);
        \u0275\u0275advance(37);
        \u0275\u0275textInterpolate(ctx.cacheOptions);
        \u0275\u0275advance(26);
        \u0275\u0275textInterpolate(ctx.parallelFetching);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.sequentialFetching);
        \u0275\u0275advance(26);
        \u0275\u0275textInterpolate(ctx.clientFetching);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.swrPattern);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.reactQuery);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.errorHandling);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #000000;\n  margin-bottom: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #282c34;\n  margin-top: 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  border-left: 4px solid #000000;\n  padding: 15px;\n  margin: 15px 0;\n  border-radius: 4px;\n}\n.info-box.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-left-color: #000000;\n}\n.info-box.warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #000000;\n}\n.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #000000;\n}\n.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding-left: 20px;\n}\n.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #e0e0e0;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\npre[_ngcontent-%COMP%] {\n  background: #282c34;\n  color: #ffffff;\n  padding: 15px;\n  border-radius: 4px;\n  overflow-x: auto;\n  margin: 15px 0;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: 14px;\n}\np[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  color: #333;\n}\n/*# sourceMappingURL=nextjs-datafetching.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NextjsDatafetchingComponent, { className: "NextjsDatafetchingComponent", filePath: "src\\app\\components\\nextjs\\nextjs-datafetching\\nextjs-datafetching.component.ts", lineNumber: 13 });
})();
export {
  NextjsDatafetchingComponent
};
//# sourceMappingURL=chunk-ZZWAOO62.js.map
