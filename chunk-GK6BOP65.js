import"./chunk-2BQE7O6T.js";import"./chunk-4ITEIGFF.js";import"./chunk-WCULWZKC.js";import{a as E}from"./chunk-FSUYFWSG.js";import{a as u,b as x,c as f,d as g}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as a,Xa as s,da as c,e as S,gb as t,hb as e,lb as o,tb as n,ub as l,yb as p}from"./chunk-WGQ2ELTG.js";var h=S(E());function R(r,d){if(r&1&&(t(0,"div",10)(1,"h2"),n(2,"Route Handler Basics"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Route Handlers"),e(),n(7," are defined in route.ts files and support all HTTP methods."),e(),t(8,"ul")(9,"li"),n(10,"Define in app/api directory"),e(),t(11,"li"),n(12,"Support GET, POST, PUT, DELETE, PATCH"),e(),t(13,"li"),n(14,"Use Web Request and Response APIs"),e(),t(15,"li"),n(16,"Can be co-located with pages"),e(),t(17,"li"),n(18,"Automatic TypeScript support"),e(),t(19,"li"),n(20,"Built-in request deduplication"),e()()(),t(21,"pre")(22,"code",12),n(23),e()()()),r&2){let i=o();a(23),l(i.routeHandlerBasics)}}function y(r,d){if(r&1&&(t(0,"div",10)(1,"h2"),n(2,"Handling Requests"),e(),t(3,"div",11)(4,"p"),n(5,"Extract data from requests including query params, headers, cookies, and body."),e(),t(6,"ul")(7,"li"),n(8,"Access URL search params"),e(),t(9,"li"),n(10,"Read request headers"),e(),t(11,"li"),n(12,"Get cookies from request"),e(),t(13,"li"),n(14,"Parse JSON body"),e(),t(15,"li"),n(16,"Handle FormData uploads"),e(),t(17,"li"),n(18,"Read raw text body"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),r&2){let i=o();a(21),l(i.requestHandling)}}function b(r,d){if(r&1&&(t(0,"div",10)(1,"h2"),n(2,"Creating Responses"),e(),t(3,"div",11)(4,"p"),n(5,"Return different types of responses with custom status codes and headers."),e(),t(6,"ul")(7,"li"),n(8,"JSON responses with Response.json()"),e(),t(9,"li"),n(10,"Custom status codes"),e(),t(11,"li"),n(12,"Set response headers"),e(),t(13,"li"),n(14,"Set cookies in response"),e(),t(15,"li"),n(16,"Text and HTML responses"),e(),t(17,"li"),n(18,"Redirects"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),r&2){let i=o();a(21),l(i.responseHandling)}}function C(r,d){if(r&1&&(t(0,"div",10)(1,"h2"),n(2,"Dynamic Route Handlers"),e(),t(3,"div",11)(4,"p"),n(5,"Create dynamic API routes using folder structure with parameters."),e(),t(6,"ul")(7,"li"),n(8,"Use [param] syntax for dynamic segments"),e(),t(9,"li"),n(10,"Access params from second argument"),e(),t(11,"li"),n(12,"Support nested dynamic routes"),e(),t(13,"li"),n(14,"Multiple parameters per route"),e(),t(15,"li"),n(16,"Type-safe with TypeScript"),e(),t(17,"li"),n(18,"Great for RESTful APIs"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),r&2){let i=o();a(21),l(i.dynamicRoutes)}}function q(r,d){if(r&1&&(t(0,"div",10)(1,"h2"),n(2,"Error Handling"),e(),t(3,"div",11)(4,"p"),n(5,"Handle errors gracefully with proper status codes and messages."),e(),t(6,"ul")(7,"li"),n(8,"Try-catch for unexpected errors"),e(),t(9,"li"),n(10,"400 for validation errors"),e(),t(11,"li"),n(12,"401 for authentication errors"),e(),t(13,"li"),n(14,"403 for authorization errors"),e(),t(15,"li"),n(16,"404 for not found"),e(),t(17,"li"),n(18,"500 for server errors"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),r&2){let i=o();a(21),l(i.errorHandling)}}function v(r,d){if(r&1&&(t(0,"div",10)(1,"h2"),n(2,"Middleware for APIs"),e(),t(3,"div",11)(4,"p"),n(5,"Use middleware to handle cross-cutting concerns like CORS and authentication."),e(),t(6,"ul")(7,"li"),n(8,"CORS headers for cross-origin requests"),e(),t(9,"li"),n(10,"Authentication checks"),e(),t(11,"li"),n(12,"Request logging"),e(),t(13,"li"),n(14,"Rate limiting"),e(),t(15,"li"),n(16,"Response headers"),e(),t(17,"li"),n(18,"Runs before route handlers"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),r&2){let i=o();a(21),l(i.middleware)}}function w(r,d){if(r&1&&(t(0,"div",10)(1,"h2"),n(2,"Advanced Patterns"),e(),t(3,"div",11)(4,"p"),n(5,"Implement advanced features like streaming, file uploads, and webhooks."),e(),t(6,"ul")(7,"li"),n(8,"Streaming responses for SSE"),e(),t(9,"li"),n(10,"File upload handling"),e(),t(11,"li"),n(12,"Webhook signature verification"),e(),t(13,"li"),n(14,"Long-polling implementations"),e(),t(15,"li"),n(16,"Binary data handling"),e(),t(17,"li"),n(18,"Custom content types"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),r&2){let i=o();a(21),l(i.advancedPatterns)}}function T(r,d){if(r&1&&(t(0,"div",10)(1,"h2"),n(2,"Caching Strategies"),e(),t(3,"div",11)(4,"p"),n(5,"Control caching behavior for API routes with route segment config."),e(),t(6,"ul")(7,"li"),n(8,"Static by default (cached)"),e(),t(9,"li")(10,"code"),n(11,"dynamic = 'force-dynamic'"),e(),n(12," for SSR"),e(),t(13,"li")(14,"code"),n(15,"revalidate"),e(),n(16," for ISR"),e(),t(17,"li"),n(18,"Custom Cache-Control headers"),e(),t(19,"li"),n(20,"CDN caching with s-maxage"),e(),t(21,"li"),n(22,"Stale-while-revalidate pattern"),e()()(),t(23,"pre")(24,"code",12),n(25),e()()()),r&2){let i=o();a(25),l(i.caching)}}var N=(()=>{class r{constructor(){this.routeHandlerBasics=`// Route Handlers in App Router (replaces API routes)
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
&#125;`}ngAfterViewChecked(){h.highlightAll()}static{this.\u0275fac=function(m){return new(m||r)}}static{this.\u0275cmp=c({type:r,selectors:[["app-nextjs-apiroutes"]],standalone:!0,features:[p],decls:22,vars:0,consts:[[1,"container"],["label","Basics"],["matTabContent",""],["label","Request Handling"],["label","Response Handling"],["label","Dynamic Routes"],["label","Error Handling"],["label","Middleware"],["label","Advanced Patterns"],["label","Caching"],[1,"tab-content"],[1,"info-box"],[1,"language-tsx"]],template:function(m,P){m&1&&(t(0,"div",0)(1,"h1"),n(2,"Next.js API Routes"),e(),t(3,"p"),n(4,"Route Handlers in Next.js App Router allow you to create custom request handlers using Web APIs for REST endpoints and webhooks."),e(),t(5,"mat-tab-group")(6,"mat-tab",1),s(7,R,24,1,"ng-template",2),e(),t(8,"mat-tab",3),s(9,y,22,1,"ng-template",2),e(),t(10,"mat-tab",4),s(11,b,22,1,"ng-template",2),e(),t(12,"mat-tab",5),s(13,C,22,1,"ng-template",2),e(),t(14,"mat-tab",6),s(15,q,22,1,"ng-template",2),e(),t(16,"mat-tab",7),s(17,v,22,1,"ng-template",2),e(),t(18,"mat-tab",8),s(19,w,22,1,"ng-template",2),e(),t(20,"mat-tab",9),s(21,T,26,1,"ng-template",2),e()()())},dependencies:[g,u,x,f],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return r})();export{N as NextjsApiroutesComponent};
