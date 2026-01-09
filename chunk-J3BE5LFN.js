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

// src/app/components/nextjs/nextjs-apiroutes/nextjs-apiroutes.component.ts
var NextjsApiroutesComponent = class _NextjsApiroutesComponent {
  constructor() {
    this.routeHandlerBasics = `// Route Handlers in App Router (replaces API routes)
// app/api/hello/route.ts

export async function GET(request: Request) &#123;
  return Response.json(&#123; message: 'Hello from Next.js!' &#125;);
&#125;

// Support all HTTP methods
export async function POST(request: Request) &#123;
  const body = await request.json();
  return Response.json(&#123; received: body &#125;);
&#125;

export async function PUT(request: Request) &#123;
  const body = await request.json();
  // Update logic
  return Response.json(&#123; updated: true &#125;);
&#125;

export async function DELETE(request: Request) &#123;
  // Delete logic
  return Response.json(&#123; deleted: true &#125;);
&#125;

export async function PATCH(request: Request) &#123;
  const body = await request.json();
  return Response.json(&#123; patched: true &#125;);
&#125;

// Access via: /api/hello`;
    this.requestHandling = `// Handling requests and extracting data

import &#123; NextRequest &#125; from 'next/server';

export async function GET(request: NextRequest) &#123;
  // URL search params
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');
  const page = searchParams.get('page') || '1';
  
  // Headers
  const token = request.headers.get('authorization');
  const userAgent = request.headers.get('user-agent');
  
  // Cookies
  const sessionId = request.cookies.get('session')?.value;
  
  return Response.json(&#123;
    query,
    page,
    hasAuth: !!token,
    userAgent,
    sessionId
  &#125;);
&#125;

export async function POST(request: Request) &#123;
  // JSON body
  const body = await request.json();
  
  // FormData
  // const formData = await request.formData();
  // const name = formData.get('name');
  
  // Text body
  // const text = await request.text();
  
  return Response.json(&#123; received: body &#125;);
&#125;`;
    this.responseHandling = `// Creating different types of responses

export async function GET(request: Request) &#123;
  // JSON response (most common)
  return Response.json(&#123; data: 'value' &#125;);
  
  // JSON with status code
  return Response.json(
    &#123; error: 'Not found' &#125;,
    &#123; status: 404 &#125;
  );
  
  // Response with headers
  return Response.json(
    &#123; data: 'value' &#125;,
    &#123;
      status: 200,
      headers: &#123;
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=3600',
        'X-Custom-Header': 'value'
      &#125;
    &#125;
  );
  
  // Set cookies
  const response = Response.json(&#123; success: true &#125;);
  response.headers.set('Set-Cookie', 'token=abc123; Path=/; HttpOnly');
  return response;
  
  // Text response
  return new Response('Plain text', &#123;
    headers: &#123; 'Content-Type': 'text/plain' &#125;
  &#125;);
  
  // Redirect
  return Response.redirect('https://example.com', 307);
&#125;`;
    this.dynamicRoutes = `// Dynamic route handlers
// app/api/posts/[id]/route.ts

export async function GET(
  request: Request,
  &#123; params &#125;: &#123; params: &#123; id: string &#125; &#125;
) &#123;
  const post = await fetchPost(params.id);
  
  if (!post) &#123;
    return Response.json(
      &#123; error: 'Post not found' &#125;,
      &#123; status: 404 &#125;
    );
  &#125;
  
  return Response.json(post);
&#125;

export async function DELETE(
  request: Request,
  &#123; params &#125;: &#123; params: &#123; id: string &#125; &#125;
) &#123;
  await deletePost(params.id);
  return Response.json(&#123; deleted: true &#125;);
&#125;

// app/api/users/[userId]/posts/[postId]/route.ts
export async function GET(
  request: Request,
  &#123; params &#125;: &#123; params: &#123; userId: string; postId: string &#125; &#125;
) &#123;
  const post = await fetchUserPost(params.userId, params.postId);
  return Response.json(post);
&#125;`;
    this.errorHandling = `// Error handling in route handlers

export async function GET(request: Request) &#123;
  try &#123;
    const data = await fetchData();
    return Response.json(data);
  &#125; catch (error) &#123;
    console.error('API Error:', error);
    
    return Response.json(
      &#123; 
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      &#125;,
      &#123; status: 500 &#125;
    );
  &#125;
&#125;

// Validation errors
export async function POST(request: Request) &#123;
  const body = await request.json();
  
  if (!body.email || !body.password) &#123;
    return Response.json(
      &#123; error: 'Email and password are required' &#125;,
      &#123; status: 400 &#125;
    );
  &#125;
  
  if (!isValidEmail(body.email)) &#123;
    return Response.json(
      &#123; error: 'Invalid email format' &#125;,
      &#123; status: 422 &#125;
    );
  &#125;
  
  // Process request...
  return Response.json(&#123; success: true &#125;);
&#125;

// Authentication errors
export async function DELETE(request: Request) &#123;
  const token = request.headers.get('authorization');
  
  if (!token) &#123;
    return Response.json(
      &#123; error: 'Unauthorized' &#125;,
      &#123; status: 401 &#125;
    );
  &#125;
  
  const user = await verifyToken(token);
  
  if (!user) &#123;
    return Response.json(
      &#123; error: 'Invalid token' &#125;,
      &#123; status: 403 &#125;
    );
  &#125;
  
  // Proceed with delete...
&#125;`;
    this.middleware = `// Middleware for route handlers
// middleware.ts at root or in app/api/

import &#123; NextResponse &#125; from 'next/server';
import type &#123; NextRequest &#125; from 'next/server';

export function middleware(request: NextRequest) &#123;
  // CORS headers
  if (request.nextUrl.pathname.startsWith('/api/')) &#123;
    const response = NextResponse.next();
    
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    // Handle preflight
    if (request.method === 'OPTIONS') &#123;
      return new Response(null, &#123; status: 200, headers: response.headers &#125;);
    &#125;
    
    return response;
  &#125;
  
  return NextResponse.next();
&#125;

export const config = &#123;
  matcher: '/api/:path*',
&#125;;

// Auth middleware
export function middleware(request: NextRequest) &#123;
  const token = request.cookies.get('auth-token')?.value;
  
  if (!token && request.nextUrl.pathname.startsWith('/api/protected')) &#123;
    return Response.json(
      &#123; error: 'Unauthorized' &#125;,
      &#123; status: 401 &#125;
    );
  &#125;
  
  return NextResponse.next();
&#125;`;
    this.advancedPatterns = `// Advanced Route Handler patterns

// 1. Streaming responses
export async function GET() &#123;
  const encoder = new TextEncoder();
  const stream = new ReadableStream(&#123;
    async start(controller) &#123;
      for (let i = 0; i < 5; i++) &#123;
        controller.enqueue(encoder.encode(\`data: $&#123;i&#125;\\n\\n\`));
        await new Promise(resolve => setTimeout(resolve, 1000));
      &#125;
      controller.close();
    &#125;,
  &#125;);
  
  return new Response(stream, &#123;
    headers: &#123;
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    &#125;,
  &#125;);
&#125;

// 2. File uploads
export async function POST(request: Request) &#123;
  const formData = await request.formData();
  const file = formData.get('file') as File;
  
  if (!file) &#123;
    return Response.json(&#123; error: 'No file uploaded' &#125;, &#123; status: 400 &#125;);
  &#125;
  
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  
  // Save file...
  
  return Response.json(&#123; 
    success: true, 
    filename: file.name,
    size: file.size 
  &#125;);
&#125;

// 3. Webhook handlers
export async function POST(request: Request) &#123;
  const signature = request.headers.get('x-webhook-signature');
  const body = await request.text();
  
  if (!verifyWebhookSignature(body, signature)) &#123;
    return Response.json(&#123; error: 'Invalid signature' &#125;, &#123; status: 401 &#125;);
  &#125;
  
  const data = JSON.parse(body);
  // Process webhook...
  
  return Response.json(&#123; received: true &#125;);
&#125;`;
    this.caching = `// Caching in Route Handlers

// Static by default (cached)
export async function GET() &#123;
  const data = await fetch('https://api.example.com/data');
  return Response.json(data);
&#125;

// Opt out of caching
export const dynamic = 'force-dynamic';

export async function GET() &#123;
  const data = await fetchLatestData();
  return Response.json(data);
&#125;

// Revalidate periodically (ISR)
export const revalidate = 60; // Revalidate every 60 seconds

export async function GET() &#123;
  const data = await fetch('https://api.example.com/data', &#123;
    next: &#123; revalidate: 60 &#125;
  &#125;);
  return Response.json(data);
&#125;

// Custom cache headers
export async function GET() &#123;
  const data = await fetchData();
  
  return Response.json(data, &#123;
    headers: &#123;
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400'
    &#125;
  &#125;);
&#125;`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function NextjsApiroutesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NextjsApiroutesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NextjsApiroutesComponent, selectors: [["app-nextjs-apiroutes"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 196, vars: 8, consts: [[1, "container"], ["label", "Basics"], [1, "tab-content"], [1, "info-box"], [1, "language-tsx"], ["label", "Request Handling"], ["label", "Response Handling"], ["label", "Dynamic Routes"], ["label", "Error Handling"], ["label", "Middleware"], ["label", "Advanced Patterns"], ["label", "Caching"]], template: function NextjsApiroutesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Next.js API Routes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Route Handlers in Next.js App Router allow you to create custom request handlers using Web APIs for REST endpoints and webhooks.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "Route Handler Basics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "Route Handlers");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " are defined in route.ts files and support all HTTP methods.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "Define in app/api directory");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "Support GET, POST, PUT, DELETE, PATCH");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li");
        \u0275\u0275text(21, "Use Web Request and Response APIs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275text(23, "Can be co-located with pages");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "li");
        \u0275\u0275text(25, "Automatic TypeScript support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "li");
        \u0275\u0275text(27, "Built-in request deduplication");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "pre")(29, "code", 4);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(31, "mat-tab", 5)(32, "div", 2)(33, "h2");
        \u0275\u0275text(34, "Handling Requests");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 3)(36, "p");
        \u0275\u0275text(37, "Extract data from requests including query params, headers, cookies, and body.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "ul")(39, "li");
        \u0275\u0275text(40, "Access URL search params");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "li");
        \u0275\u0275text(42, "Read request headers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li");
        \u0275\u0275text(44, "Get cookies from request");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "li");
        \u0275\u0275text(46, "Parse JSON body");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "li");
        \u0275\u0275text(48, "Handle FormData uploads");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "li");
        \u0275\u0275text(50, "Read raw text body");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(51, "pre")(52, "code", 4);
        \u0275\u0275text(53);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(54, "mat-tab", 6)(55, "div", 2)(56, "h2");
        \u0275\u0275text(57, "Creating Responses");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 3)(59, "p");
        \u0275\u0275text(60, "Return different types of responses with custom status codes and headers.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "ul")(62, "li");
        \u0275\u0275text(63, "JSON responses with Response.json()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "li");
        \u0275\u0275text(65, "Custom status codes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "li");
        \u0275\u0275text(67, "Set response headers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "li");
        \u0275\u0275text(69, "Set cookies in response");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "li");
        \u0275\u0275text(71, "Text and HTML responses");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "li");
        \u0275\u0275text(73, "Redirects");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(74, "pre")(75, "code", 4);
        \u0275\u0275text(76);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(77, "mat-tab", 7)(78, "div", 2)(79, "h2");
        \u0275\u0275text(80, "Dynamic Route Handlers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "div", 3)(82, "p");
        \u0275\u0275text(83, "Create dynamic API routes using folder structure with parameters.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "ul")(85, "li");
        \u0275\u0275text(86, "Use [param] syntax for dynamic segments");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "li");
        \u0275\u0275text(88, "Access params from second argument");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "li");
        \u0275\u0275text(90, "Support nested dynamic routes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "li");
        \u0275\u0275text(92, "Multiple parameters per route");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "li");
        \u0275\u0275text(94, "Type-safe with TypeScript");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "li");
        \u0275\u0275text(96, "Great for RESTful APIs");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(97, "pre")(98, "code", 4);
        \u0275\u0275text(99);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(100, "mat-tab", 8)(101, "div", 2)(102, "h2");
        \u0275\u0275text(103, "Error Handling");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "div", 3)(105, "p");
        \u0275\u0275text(106, "Handle errors gracefully with proper status codes and messages.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "ul")(108, "li");
        \u0275\u0275text(109, "Try-catch for unexpected errors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "li");
        \u0275\u0275text(111, "400 for validation errors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "li");
        \u0275\u0275text(113, "401 for authentication errors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "li");
        \u0275\u0275text(115, "403 for authorization errors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "li");
        \u0275\u0275text(117, "404 for not found");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "li");
        \u0275\u0275text(119, "500 for server errors");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(120, "pre")(121, "code", 4);
        \u0275\u0275text(122);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(123, "mat-tab", 9)(124, "div", 2)(125, "h2");
        \u0275\u0275text(126, "Middleware for APIs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "div", 3)(128, "p");
        \u0275\u0275text(129, "Use middleware to handle cross-cutting concerns like CORS and authentication.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "ul")(131, "li");
        \u0275\u0275text(132, "CORS headers for cross-origin requests");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "li");
        \u0275\u0275text(134, "Authentication checks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "li");
        \u0275\u0275text(136, "Request logging");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "li");
        \u0275\u0275text(138, "Rate limiting");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "li");
        \u0275\u0275text(140, "Response headers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "li");
        \u0275\u0275text(142, "Runs before route handlers");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(143, "pre")(144, "code", 4);
        \u0275\u0275text(145);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(146, "mat-tab", 10)(147, "div", 2)(148, "h2");
        \u0275\u0275text(149, "Advanced Patterns");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "div", 3)(151, "p");
        \u0275\u0275text(152, "Implement advanced features like streaming, file uploads, and webhooks.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "ul")(154, "li");
        \u0275\u0275text(155, "Streaming responses for SSE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "li");
        \u0275\u0275text(157, "File upload handling");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "li");
        \u0275\u0275text(159, "Webhook signature verification");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "li");
        \u0275\u0275text(161, "Long-polling implementations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "li");
        \u0275\u0275text(163, "Binary data handling");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "li");
        \u0275\u0275text(165, "Custom content types");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(166, "pre")(167, "code", 4);
        \u0275\u0275text(168);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(169, "mat-tab", 11)(170, "div", 2)(171, "h2");
        \u0275\u0275text(172, "Caching Strategies");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(173, "div", 3)(174, "p");
        \u0275\u0275text(175, "Control caching behavior for API routes with route segment config.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "ul")(177, "li");
        \u0275\u0275text(178, "Static by default (cached)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(179, "li")(180, "code");
        \u0275\u0275text(181, "dynamic = 'force-dynamic'");
        \u0275\u0275elementEnd();
        \u0275\u0275text(182, " for SSR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "li")(184, "code");
        \u0275\u0275text(185, "revalidate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(186, " for ISR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "li");
        \u0275\u0275text(188, "Custom Cache-Control headers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(189, "li");
        \u0275\u0275text(190, "CDN caching with s-maxage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(191, "li");
        \u0275\u0275text(192, "Stale-while-revalidate pattern");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(193, "pre")(194, "code", 4);
        \u0275\u0275text(195);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(30);
        \u0275\u0275textInterpolate(ctx.routeHandlerBasics);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.requestHandling);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.responseHandling);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.dynamicRoutes);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.errorHandling);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.middleware);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.advancedPatterns);
        \u0275\u0275advance(27);
        \u0275\u0275textInterpolate(ctx.caching);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #000000;\n  margin-bottom: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #282c34;\n  margin-top: 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  border-left: 4px solid #000000;\n  padding: 15px;\n  margin: 15px 0;\n  border-radius: 4px;\n}\n.info-box.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-left-color: #000000;\n}\n.info-box.warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #000000;\n}\n.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #000000;\n}\n.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding-left: 20px;\n}\n.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #e0e0e0;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\npre[_ngcontent-%COMP%] {\n  background: #282c34;\n  color: #ffffff;\n  padding: 15px;\n  border-radius: 4px;\n  overflow-x: auto;\n  margin: 15px 0;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: 14px;\n}\np[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  color: #333;\n}\n/*# sourceMappingURL=nextjs-apiroutes.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NextjsApiroutesComponent, { className: "NextjsApiroutesComponent", filePath: "src\\app\\components\\nextjs\\nextjs-apiroutes\\nextjs-apiroutes.component.ts", lineNumber: 13 });
})();
export {
  NextjsApiroutesComponent
};
//# sourceMappingURL=chunk-J3BE5LFN.js.map
