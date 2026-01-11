import"./chunk-2BQE7O6T.js";import"./chunk-4ITEIGFF.js";import"./chunk-WCULWZKC.js";import{a as R}from"./chunk-FSUYFWSG.js";import{a as p,b as x,c as g,d as h}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as o,Xa as s,da as c,e as w,gb as t,hb as e,lb as a,tb as n,ub as l,yb as u}from"./chunk-WGQ2ELTG.js";var f=w(R());function S(i,m){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Middleware Basics"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Middleware"),e(),n(7," runs before requests are completed, perfect for authentication and routing logic."),e(),t(8,"ul")(9,"li"),n(10,"Runs on Edge Runtime (fast and global)"),e(),t(11,"li"),n(12,"Define in middleware.ts at root"),e(),t(13,"li"),n(14,"Configure with matcher patterns"),e(),t(15,"li"),n(16,"Access request and modify response"),e(),t(17,"li"),n(18,"Lightweight execution environment"),e(),t(19,"li"),n(20,"Can't use Node.js APIs"),e()()(),t(21,"pre")(22,"code",12),n(23),e()()()),i&2){let r=a();o(23),l(r.middlewareBasics)}}function b(i,m){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Authentication"),e(),t(3,"div",11)(4,"p"),n(5,"Protect routes and implement authentication logic with middleware."),e(),t(6,"ul")(7,"li"),n(8,"Check authentication tokens"),e(),t(9,"li"),n(10,"Redirect unauthenticated users"),e(),t(11,"li"),n(12,"Protect specific routes"),e(),t(13,"li"),n(14,"Verify JWT tokens"),e(),t(15,"li"),n(16,"Pass user info to pages"),e(),t(17,"li"),n(18,"Handle login redirects"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),i&2){let r=a();o(21),l(r.authentication)}}function q(i,m){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Redirects"),e(),t(3,"div",11)(4,"p"),n(5,"Implement redirects based on various conditions."),e(),t(6,"ul")(7,"li"),n(8,"Simple URL redirects"),e(),t(9,"li"),n(10,"Conditional redirects"),e(),t(11,"li"),n(12,"Locale-based redirects"),e(),t(13,"li"),n(14,"Permanent redirects (308)"),e(),t(15,"li"),n(16,"Query parameter based"),e(),t(17,"li"),n(18,"Geolocation redirects"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),i&2){let r=a();o(21),l(r.redirects)}}function E(i,m){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"URL Rewriting"),e(),t(3,"div",11)(4,"p"),n(5,"Rewrite URLs to serve different content while keeping the URL the same."),e(),t(6,"ul")(7,"li"),n(8,"URL stays same, content changes"),e(),t(9,"li"),n(10,"A/B testing"),e(),t(11,"li"),n(12,"Multi-tenant applications"),e(),t(13,"li"),n(14,"Feature flags"),e(),t(15,"li"),n(16,"Subdomain routing"),e(),t(17,"li"),n(18,"Transparent proxying"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),i&2){let r=a();o(21),l(r.rewriting)}}function C(i,m){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Custom Headers"),e(),t(3,"div",11)(4,"p"),n(5,"Set custom headers for security, CORS, caching, and more."),e(),t(6,"ul")(7,"li"),n(8,"Security headers (X-Frame-Options, etc.)"),e(),t(9,"li"),n(10,"CORS configuration"),e(),t(11,"li"),n(12,"Cache-Control headers"),e(),t(13,"li"),n(14,"Custom headers"),e(),t(15,"li"),n(16,"Request ID tracking"),e(),t(17,"li"),n(18,"Handle OPTIONS preflight"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),i&2){let r=a();o(21),l(r.headers)}}function v(i,m){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Cookie Management"),e(),t(3,"div",11)(4,"p"),n(5,"Read and set cookies in middleware for session management and preferences."),e(),t(6,"ul")(7,"li"),n(8,"Read request cookies"),e(),t(9,"li"),n(10,"Set response cookies"),e(),t(11,"li"),n(12,"Cookie options (httpOnly, secure, etc.)"),e(),t(13,"li"),n(14,"Delete cookies"),e(),t(15,"li"),n(16,"Cookie-based feature flags"),e(),t(17,"li"),n(18,"Session management"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),i&2){let r=a();o(21),l(r.cookies)}}function N(i,m){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Rate Limiting"),e(),t(3,"div",11)(4,"p"),n(5,"Implement rate limiting to prevent abuse and protect your API."),e(),t(6,"ul")(7,"li"),n(8,"IP-based rate limiting"),e(),t(9,"li"),n(10,"Sliding window algorithm"),e(),t(11,"li"),n(12,"Custom rate limit headers"),e(),t(13,"li"),n(14,"429 Too Many Requests response"),e(),t(15,"li"),n(16,"Use Redis for production"),e(),t(17,"li"),n(18,"Per-route rate limits"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),i&2){let r=a();o(21),l(r.rateLimiting)}}function M(i,m){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Geolocation & Device Detection"),e(),t(3,"div",11)(4,"p"),n(5,"Use geolocation and device information for personalized experiences."),e(),t(6,"ul")(7,"li"),n(8,"Country and city detection"),e(),t(9,"li"),n(10,"Latitude and longitude"),e(),t(11,"li"),n(12,"User agent parsing"),e(),t(13,"li"),n(14,"Mobile vs desktop detection"),e(),t(15,"li"),n(16,"Bot detection"),e(),t(17,"li"),n(18,"Country-specific content"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),i&2){let r=a();o(21),l(r.geolocation)}}var T=(()=>{class i{constructor(){this.middlewareBasics=`// Middleware runs before requests are completed
// middleware.ts (at root level)

import &#123; NextResponse &#125; from 'next/server';
import type &#123; NextRequest &#125; from 'next/server';

export function middleware(request: NextRequest) &#123;
  console.log('Middleware running for:', request.nextUrl.pathname);
  
  // Continue with the request
  return NextResponse.next();
&#125;

// Configure which paths middleware runs on
export const config = &#123;
  matcher: '/dashboard/:path*', // Runs on all /dashboard routes
&#125;;

// Multiple matchers
export const config = &#123;
  matcher: [
    '/dashboard/:path*',
    '/admin/:path*',
    '/api/:path*',
  ],
&#125;;

// Exclude specific paths
export const config = &#123;
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
&#125;;`,this.authentication=`// Authentication with Middleware

import &#123; NextResponse &#125; from 'next/server';
import type &#123; NextRequest &#125; from 'next/server';

export function middleware(request: NextRequest) &#123;
  // Get token from cookies
  const token = request.cookies.get('auth-token')?.value;
  
  // Protected routes
  if (request.nextUrl.pathname.startsWith('/dashboard')) &#123;
    if (!token) &#123;
      // Redirect to login
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('from', request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    &#125;
    
    // Verify token (you might want to use JWT verify here)
    try &#123;
      // const verified = verifyToken(token);
      // if (!verified) throw new Error();
    &#125; catch (error) &#123;
      return NextResponse.redirect(new URL('/login', request.url));
    &#125;
  &#125;
  
  // Redirect authenticated users from login page
  if (request.nextUrl.pathname === '/login' && token) &#123;
    return NextResponse.redirect(new URL('/dashboard', request.url));
  &#125;
  
  return NextResponse.next();
&#125;

export const config = &#123;
  matcher: ['/dashboard/:path*', '/login'],
&#125;;`,this.redirects=`// Redirects with Middleware

import &#123; NextResponse &#125; from 'next/server';
import type &#123; NextRequest &#125; from 'next/server';

export function middleware(request: NextRequest) &#123;
  // 1. Simple redirect
  if (request.nextUrl.pathname === '/old-page') &#123;
    return NextResponse.redirect(new URL('/new-page', request.url));
  &#125;
  
  // 2. Conditional redirect
  const country = request.geo?.country;
  if (request.nextUrl.pathname === '/blocked' && country === 'US') &#123;
    return NextResponse.redirect(new URL('/us-only', request.url));
  &#125;
  
  // 3. Locale-based redirect
  const locale = request.cookies.get('locale')?.value || 'en';
  if (request.nextUrl.pathname === '/') &#123;
    return NextResponse.redirect(new URL(\\\`/$&#123;locale&#125;\\\`, request.url));
  &#125;
  
  // 4. Permanent redirect (308)
  if (request.nextUrl.pathname.startsWith('/blog')) &#123;
    const url = new URL(request.url);
    url.pathname = url.pathname.replace('/blog', '/articles');
    return NextResponse.redirect(url, 308);
  &#125;
  
  // 5. Query parameter based redirect
  const ref = request.nextUrl.searchParams.get('ref');
  if (ref === 'twitter') &#123;
    return NextResponse.redirect(new URL('/twitter-landing', request.url));
  &#125;
  
  return NextResponse.next();
&#125;`,this.rewriting=`// URL Rewriting with Middleware

import &#123; NextResponse &#125; from 'next/server';
import type &#123; NextRequest &#125; from 'next/server';

export function middleware(request: NextRequest) &#123;
  // 1. Simple rewrite (URL stays same, content changes)
  if (request.nextUrl.pathname.startsWith('/docs')) &#123;
    return NextResponse.rewrite(new URL('/documentation' + request.nextUrl.pathname.slice(5), request.url));
  &#125;
  
  // 2. A/B Testing
  const bucket = Math.random() < 0.5 ? 'a' : 'b';
  if (request.nextUrl.pathname === '/experiment') &#123;
    const response = NextResponse.rewrite(new URL(\\\`/experiment-$&#123;bucket&#125;\\\`, request.url));
    response.cookies.set('bucket', bucket);
    return response;
  &#125;
  
  // 3. Multi-tenant rewrite
  const hostname = request.headers.get('host') || '';
  const subdomain = hostname.split('.')[0];
  
  if (subdomain !== 'www' && subdomain !== 'localhost:3000') &#123;
    // Rewrite to tenant-specific page
    return NextResponse.rewrite(new URL(\`/tenants/$&#123;subdomain&#125;$&#123;request.nextUrl.pathname&#125;\`, request.url));
  &#125;
  
  // 4. Feature flag rewrite
  const features = request.cookies.get('features')?.value;
  if (features?.includes('new-ui') && request.nextUrl.pathname === '/dashboard') &#123;
    return NextResponse.rewrite(new URL('/dashboard-v2', request.url));
  &#125;
  
  return NextResponse.next();
&#125;`,this.headers=`// Setting Custom Headers

import &#123; NextResponse &#125; from 'next/server';
import type &#123; NextRequest &#125; from 'next/server';

export function middleware(request: NextRequest) &#123;
  const response = NextResponse.next();
  
  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // CORS headers
  if (request.nextUrl.pathname.startsWith('/api')) &#123;
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    // Handle preflight
    if (request.method === 'OPTIONS') &#123;
      return new NextResponse(null, &#123; status: 200, headers: response.headers &#125;);
    &#125;
  &#125;
  
  // Cache control
  if (request.nextUrl.pathname.startsWith('/static')) &#123;
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  &#125;
  
  // Custom headers
  response.headers.set('X-Custom-Header', 'value');
  response.headers.set('X-Request-ID', crypto.randomUUID());
  
  return response;
&#125;`,this.cookies=`// Cookie Management in Middleware

import &#123; NextResponse &#125; from 'next/server';
import type &#123; NextRequest &#125; from 'next/server';

export function middleware(request: NextRequest) &#123;
  const response = NextResponse.next();
  
  // Read cookies
  const sessionId = request.cookies.get('session')?.value;
  const theme = request.cookies.get('theme')?.value || 'light';
  
  // Set cookie
  response.cookies.set('visited', 'true', &#123;
    maxAge: 60 * 60 * 24 * 365, // 1 year
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  &#125;);
  
  // Set multiple cookies
  response.cookies.set('user-id', '123');
  response.cookies.set('session-token', 'abc', &#123;
    httpOnly: true,
    secure: true,
  &#125;);
  
  // Delete cookie
  if (request.nextUrl.pathname === '/logout') &#123;
    response.cookies.delete('session');
    response.cookies.delete('user-id');
    return NextResponse.redirect(new URL('/', request.url));
  &#125;
  
  // Cookie-based feature flags
  const features = request.cookies.get('features')?.value?.split(',') || [];
  if (features.includes('beta') && request.nextUrl.pathname === '/app') &#123;
    return NextResponse.rewrite(new URL('/app-beta', request.url));
  &#125;
  
  return response;
&#125;`,this.rateLimiting=`// Rate Limiting with Middleware

import &#123; NextResponse &#125; from 'next/server';
import type &#123; NextRequest &#125; from 'next/server';

// In-memory store (use Redis in production)
const rateLimit = new Map<string, &#123; count: number; resetTime: number &#125;>();

export function middleware(request: NextRequest) &#123;
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 100;
  
  const userLimit = rateLimit.get(ip);
  
  if (userLimit && now < userLimit.resetTime) &#123;
    if (userLimit.count >= maxRequests) &#123;
      return new NextResponse('Too Many Requests', &#123;
        status: 429,
        headers: &#123;
          'Retry-After': String(Math.ceil((userLimit.resetTime - now) / 1000)),
          'X-RateLimit-Limit': String(maxRequests),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': String(userLimit.resetTime),
        &#125;,
      &#125;);
    &#125;
    userLimit.count++;
  &#125; else &#123;
    rateLimit.set(ip, &#123;
      count: 1,
      resetTime: now + windowMs,
    &#125;);
  &#125;
  
  const response = NextResponse.next();
  const current = rateLimit.get(ip)!;
  response.headers.set('X-RateLimit-Limit', String(maxRequests));
  response.headers.set('X-RateLimit-Remaining', String(maxRequests - current.count));
  response.headers.set('X-RateLimit-Reset', String(current.resetTime));
  
  return response;
&#125;

export const config = &#123;
  matcher: '/api/:path*',
&#125;;`,this.geolocation=`// Geolocation and Device Detection

import &#123; NextResponse &#125; from 'next/server';
import type &#123; NextRequest &#125; from 'next/server';

export function middleware(request: NextRequest) &#123;
  // Geolocation data (Vercel provides this)
  const country = request.geo?.country || 'US';
  const city = request.geo?.city;
  const region = request.geo?.region;
  const latitude = request.geo?.latitude;
  const longitude = request.geo?.longitude;
  
  // User agent
  const userAgent = request.headers.get('user-agent') || '';
  const isMobile = /mobile/i.test(userAgent);
  const isBot = /bot|crawler|spider/i.test(userAgent);
  
  // Block bots from certain routes
  if (isBot && request.nextUrl.pathname.startsWith('/dashboard')) &#123;
    return new NextResponse('Forbidden', &#123; status: 403 &#125;);
  &#125;
  
  // Country-specific redirects
  if (country === 'CN' && request.nextUrl.pathname === '/') &#123;
    return NextResponse.redirect(new URL('/cn', request.url));
  &#125;
  
  // Mobile redirect
  if (isMobile && request.nextUrl.pathname === '/desktop-app') &#123;
    return NextResponse.redirect(new URL('/mobile-app', request.url));
  &#125;
  
  // Pass geo data to response headers
  const response = NextResponse.next();
  response.headers.set('x-user-country', country);
  response.headers.set('x-user-city', city || 'unknown');
  response.headers.set('x-device-type', isMobile ? 'mobile' : 'desktop');
  
  return response;
&#125;`}ngAfterViewChecked(){f.highlightAll()}static{this.\u0275fac=function(d){return new(d||i)}}static{this.\u0275cmp=c({type:i,selectors:[["app-nextjs-middleware"]],standalone:!0,features:[u],decls:22,vars:0,consts:[[1,"container"],["label","Basics"],["matTabContent",""],["label","Authentication"],["label","Redirects"],["label","Rewriting"],["label","Headers"],["label","Cookies"],["label","Rate Limiting"],["label","Geolocation"],[1,"tab-content"],[1,"info-box"],[1,"language-tsx"]],template:function(d,y){d&1&&(t(0,"div",0)(1,"h1"),n(2,"Next.js Middleware"),e(),t(3,"p"),n(4,"Middleware allows you to run code before a request is completed, enabling authentication, redirects, rewrites, and custom logic."),e(),t(5,"mat-tab-group")(6,"mat-tab",1),s(7,S,24,1,"ng-template",2),e(),t(8,"mat-tab",3),s(9,b,22,1,"ng-template",2),e(),t(10,"mat-tab",4),s(11,q,22,1,"ng-template",2),e(),t(12,"mat-tab",5),s(13,E,22,1,"ng-template",2),e(),t(14,"mat-tab",6),s(15,C,22,1,"ng-template",2),e(),t(16,"mat-tab",7),s(17,v,22,1,"ng-template",2),e(),t(18,"mat-tab",8),s(19,N,22,1,"ng-template",2),e(),t(20,"mat-tab",9),s(21,M,22,1,"ng-template",2),e()()())},dependencies:[h,p,x,g],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return i})();export{T as NextjsMiddlewareComponent};
