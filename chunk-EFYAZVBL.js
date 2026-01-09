import{b as c,c as u,d as m}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as r,da as l,gb as n,hb as e,tb as t,ub as a,yb as d}from"./chunk-WGQ2ELTG.js";var g=(()=>{class s{constructor(){this.routeHandlerBasics=`// Route Handlers in App Router (replaces API routes)
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

// Access via: /api/hello`,this.requestHandling=`// Handling requests and extracting data

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
&#125;`,this.responseHandling=`// Creating different types of responses

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
&#125;`,this.dynamicRoutes=`// Dynamic route handlers
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
&#125;`,this.errorHandling=`// Error handling in route handlers

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
&#125;`,this.middleware=`// Middleware for route handlers
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
&#125;`,this.advancedPatterns=`// Advanced Route Handler patterns

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
&#125;`,this.caching=`// Caching in Route Handlers

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
&#125;`}ngAfterViewChecked(){Prism.highlightAll()}static{this.\u0275fac=function(o){return new(o||s)}}static{this.\u0275cmp=l({type:s,selectors:[["app-nextjs-apiroutes"]],standalone:!0,features:[d],decls:196,vars:8,consts:[[1,"container"],["label","Basics"],[1,"tab-content"],[1,"info-box"],[1,"language-tsx"],["label","Request Handling"],["label","Response Handling"],["label","Dynamic Routes"],["label","Error Handling"],["label","Middleware"],["label","Advanced Patterns"],["label","Caching"]],template:function(o,i){o&1&&(n(0,"div",0)(1,"h1"),t(2,"Next.js API Routes"),e(),n(3,"p"),t(4,"Route Handlers in Next.js App Router allow you to create custom request handlers using Web APIs for REST endpoints and webhooks."),e(),n(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),t(9,"Route Handler Basics"),e(),n(10,"div",3)(11,"p")(12,"strong"),t(13,"Route Handlers"),e(),t(14," are defined in route.ts files and support all HTTP methods."),e(),n(15,"ul")(16,"li"),t(17,"Define in app/api directory"),e(),n(18,"li"),t(19,"Support GET, POST, PUT, DELETE, PATCH"),e(),n(20,"li"),t(21,"Use Web Request and Response APIs"),e(),n(22,"li"),t(23,"Can be co-located with pages"),e(),n(24,"li"),t(25,"Automatic TypeScript support"),e(),n(26,"li"),t(27,"Built-in request deduplication"),e()()(),n(28,"pre")(29,"code",4),t(30),e()()()(),n(31,"mat-tab",5)(32,"div",2)(33,"h2"),t(34,"Handling Requests"),e(),n(35,"div",3)(36,"p"),t(37,"Extract data from requests including query params, headers, cookies, and body."),e(),n(38,"ul")(39,"li"),t(40,"Access URL search params"),e(),n(41,"li"),t(42,"Read request headers"),e(),n(43,"li"),t(44,"Get cookies from request"),e(),n(45,"li"),t(46,"Parse JSON body"),e(),n(47,"li"),t(48,"Handle FormData uploads"),e(),n(49,"li"),t(50,"Read raw text body"),e()()(),n(51,"pre")(52,"code",4),t(53),e()()()(),n(54,"mat-tab",6)(55,"div",2)(56,"h2"),t(57,"Creating Responses"),e(),n(58,"div",3)(59,"p"),t(60,"Return different types of responses with custom status codes and headers."),e(),n(61,"ul")(62,"li"),t(63,"JSON responses with Response.json()"),e(),n(64,"li"),t(65,"Custom status codes"),e(),n(66,"li"),t(67,"Set response headers"),e(),n(68,"li"),t(69,"Set cookies in response"),e(),n(70,"li"),t(71,"Text and HTML responses"),e(),n(72,"li"),t(73,"Redirects"),e()()(),n(74,"pre")(75,"code",4),t(76),e()()()(),n(77,"mat-tab",7)(78,"div",2)(79,"h2"),t(80,"Dynamic Route Handlers"),e(),n(81,"div",3)(82,"p"),t(83,"Create dynamic API routes using folder structure with parameters."),e(),n(84,"ul")(85,"li"),t(86,"Use [param] syntax for dynamic segments"),e(),n(87,"li"),t(88,"Access params from second argument"),e(),n(89,"li"),t(90,"Support nested dynamic routes"),e(),n(91,"li"),t(92,"Multiple parameters per route"),e(),n(93,"li"),t(94,"Type-safe with TypeScript"),e(),n(95,"li"),t(96,"Great for RESTful APIs"),e()()(),n(97,"pre")(98,"code",4),t(99),e()()()(),n(100,"mat-tab",8)(101,"div",2)(102,"h2"),t(103,"Error Handling"),e(),n(104,"div",3)(105,"p"),t(106,"Handle errors gracefully with proper status codes and messages."),e(),n(107,"ul")(108,"li"),t(109,"Try-catch for unexpected errors"),e(),n(110,"li"),t(111,"400 for validation errors"),e(),n(112,"li"),t(113,"401 for authentication errors"),e(),n(114,"li"),t(115,"403 for authorization errors"),e(),n(116,"li"),t(117,"404 for not found"),e(),n(118,"li"),t(119,"500 for server errors"),e()()(),n(120,"pre")(121,"code",4),t(122),e()()()(),n(123,"mat-tab",9)(124,"div",2)(125,"h2"),t(126,"Middleware for APIs"),e(),n(127,"div",3)(128,"p"),t(129,"Use middleware to handle cross-cutting concerns like CORS and authentication."),e(),n(130,"ul")(131,"li"),t(132,"CORS headers for cross-origin requests"),e(),n(133,"li"),t(134,"Authentication checks"),e(),n(135,"li"),t(136,"Request logging"),e(),n(137,"li"),t(138,"Rate limiting"),e(),n(139,"li"),t(140,"Response headers"),e(),n(141,"li"),t(142,"Runs before route handlers"),e()()(),n(143,"pre")(144,"code",4),t(145),e()()()(),n(146,"mat-tab",10)(147,"div",2)(148,"h2"),t(149,"Advanced Patterns"),e(),n(150,"div",3)(151,"p"),t(152,"Implement advanced features like streaming, file uploads, and webhooks."),e(),n(153,"ul")(154,"li"),t(155,"Streaming responses for SSE"),e(),n(156,"li"),t(157,"File upload handling"),e(),n(158,"li"),t(159,"Webhook signature verification"),e(),n(160,"li"),t(161,"Long-polling implementations"),e(),n(162,"li"),t(163,"Binary data handling"),e(),n(164,"li"),t(165,"Custom content types"),e()()(),n(166,"pre")(167,"code",4),t(168),e()()()(),n(169,"mat-tab",11)(170,"div",2)(171,"h2"),t(172,"Caching Strategies"),e(),n(173,"div",3)(174,"p"),t(175,"Control caching behavior for API routes with route segment config."),e(),n(176,"ul")(177,"li"),t(178,"Static by default (cached)"),e(),n(179,"li")(180,"code"),t(181,"dynamic = 'force-dynamic'"),e(),t(182," for SSR"),e(),n(183,"li")(184,"code"),t(185,"revalidate"),e(),t(186," for ISR"),e(),n(187,"li"),t(188,"Custom Cache-Control headers"),e(),n(189,"li"),t(190,"CDN caching with s-maxage"),e(),n(191,"li"),t(192,"Stale-while-revalidate pattern"),e()()(),n(193,"pre")(194,"code",4),t(195),e()()()()()()),o&2&&(r(30),a(i.routeHandlerBasics),r(23),a(i.requestHandling),r(23),a(i.responseHandling),r(23),a(i.dynamicRoutes),r(23),a(i.errorHandling),r(23),a(i.middleware),r(23),a(i.advancedPatterns),r(27),a(i.caching))},dependencies:[m,c,u],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#000;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#f0f0f0;border-left:4px solid #000000;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#000}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#000}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#000}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#e0e0e0;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;color:#fff;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:14px}p[_ngcontent-%COMP%]{line-height:1.6;color:#333}"]})}}return s})();export{g as NextjsApiroutesComponent};
