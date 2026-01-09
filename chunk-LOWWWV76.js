import{b as m,c,d as u}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as i,da as l,gb as n,hb as e,tb as t,ub as r,yb as d}from"./chunk-WGQ2ELTG.js";var f=(()=>{class o{constructor(){this.middlewareBasics=`// Middleware runs before requests are completed
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
&#125;`}ngAfterViewChecked(){Prism.highlightAll()}static{this.\u0275fac=function(a){return new(a||o)}}static{this.\u0275cmp=l({type:o,selectors:[["app-nextjs-middleware"]],standalone:!0,features:[d],decls:192,vars:8,consts:[[1,"container"],["label","Basics"],[1,"tab-content"],[1,"info-box"],[1,"language-tsx"],["label","Authentication"],["label","Redirects"],["label","Rewriting"],["label","Headers"],["label","Cookies"],["label","Rate Limiting"],["label","Geolocation"]],template:function(a,s){a&1&&(n(0,"div",0)(1,"h1"),t(2,"Next.js Middleware"),e(),n(3,"p"),t(4,"Middleware allows you to run code before a request is completed, enabling authentication, redirects, rewrites, and custom logic."),e(),n(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),t(9,"Middleware Basics"),e(),n(10,"div",3)(11,"p")(12,"strong"),t(13,"Middleware"),e(),t(14," runs before requests are completed, perfect for authentication and routing logic."),e(),n(15,"ul")(16,"li"),t(17,"Runs on Edge Runtime (fast and global)"),e(),n(18,"li"),t(19,"Define in middleware.ts at root"),e(),n(20,"li"),t(21,"Configure with matcher patterns"),e(),n(22,"li"),t(23,"Access request and modify response"),e(),n(24,"li"),t(25,"Lightweight execution environment"),e(),n(26,"li"),t(27,"Can't use Node.js APIs"),e()()(),n(28,"pre")(29,"code",4),t(30),e()()()(),n(31,"mat-tab",5)(32,"div",2)(33,"h2"),t(34,"Authentication"),e(),n(35,"div",3)(36,"p"),t(37,"Protect routes and implement authentication logic with middleware."),e(),n(38,"ul")(39,"li"),t(40,"Check authentication tokens"),e(),n(41,"li"),t(42,"Redirect unauthenticated users"),e(),n(43,"li"),t(44,"Protect specific routes"),e(),n(45,"li"),t(46,"Verify JWT tokens"),e(),n(47,"li"),t(48,"Pass user info to pages"),e(),n(49,"li"),t(50,"Handle login redirects"),e()()(),n(51,"pre")(52,"code",4),t(53),e()()()(),n(54,"mat-tab",6)(55,"div",2)(56,"h2"),t(57,"Redirects"),e(),n(58,"div",3)(59,"p"),t(60,"Implement redirects based on various conditions."),e(),n(61,"ul")(62,"li"),t(63,"Simple URL redirects"),e(),n(64,"li"),t(65,"Conditional redirects"),e(),n(66,"li"),t(67,"Locale-based redirects"),e(),n(68,"li"),t(69,"Permanent redirects (308)"),e(),n(70,"li"),t(71,"Query parameter based"),e(),n(72,"li"),t(73,"Geolocation redirects"),e()()(),n(74,"pre")(75,"code",4),t(76),e()()()(),n(77,"mat-tab",7)(78,"div",2)(79,"h2"),t(80,"URL Rewriting"),e(),n(81,"div",3)(82,"p"),t(83,"Rewrite URLs to serve different content while keeping the URL the same."),e(),n(84,"ul")(85,"li"),t(86,"URL stays same, content changes"),e(),n(87,"li"),t(88,"A/B testing"),e(),n(89,"li"),t(90,"Multi-tenant applications"),e(),n(91,"li"),t(92,"Feature flags"),e(),n(93,"li"),t(94,"Subdomain routing"),e(),n(95,"li"),t(96,"Transparent proxying"),e()()(),n(97,"pre")(98,"code",4),t(99),e()()()(),n(100,"mat-tab",8)(101,"div",2)(102,"h2"),t(103,"Custom Headers"),e(),n(104,"div",3)(105,"p"),t(106,"Set custom headers for security, CORS, caching, and more."),e(),n(107,"ul")(108,"li"),t(109,"Security headers (X-Frame-Options, etc.)"),e(),n(110,"li"),t(111,"CORS configuration"),e(),n(112,"li"),t(113,"Cache-Control headers"),e(),n(114,"li"),t(115,"Custom headers"),e(),n(116,"li"),t(117,"Request ID tracking"),e(),n(118,"li"),t(119,"Handle OPTIONS preflight"),e()()(),n(120,"pre")(121,"code",4),t(122),e()()()(),n(123,"mat-tab",9)(124,"div",2)(125,"h2"),t(126,"Cookie Management"),e(),n(127,"div",3)(128,"p"),t(129,"Read and set cookies in middleware for session management and preferences."),e(),n(130,"ul")(131,"li"),t(132,"Read request cookies"),e(),n(133,"li"),t(134,"Set response cookies"),e(),n(135,"li"),t(136,"Cookie options (httpOnly, secure, etc.)"),e(),n(137,"li"),t(138,"Delete cookies"),e(),n(139,"li"),t(140,"Cookie-based feature flags"),e(),n(141,"li"),t(142,"Session management"),e()()(),n(143,"pre")(144,"code",4),t(145),e()()()(),n(146,"mat-tab",10)(147,"div",2)(148,"h2"),t(149,"Rate Limiting"),e(),n(150,"div",3)(151,"p"),t(152,"Implement rate limiting to prevent abuse and protect your API."),e(),n(153,"ul")(154,"li"),t(155,"IP-based rate limiting"),e(),n(156,"li"),t(157,"Sliding window algorithm"),e(),n(158,"li"),t(159,"Custom rate limit headers"),e(),n(160,"li"),t(161,"429 Too Many Requests response"),e(),n(162,"li"),t(163,"Use Redis for production"),e(),n(164,"li"),t(165,"Per-route rate limits"),e()()(),n(166,"pre")(167,"code",4),t(168),e()()()(),n(169,"mat-tab",11)(170,"div",2)(171,"h2"),t(172,"Geolocation & Device Detection"),e(),n(173,"div",3)(174,"p"),t(175,"Use geolocation and device information for personalized experiences."),e(),n(176,"ul")(177,"li"),t(178,"Country and city detection"),e(),n(179,"li"),t(180,"Latitude and longitude"),e(),n(181,"li"),t(182,"User agent parsing"),e(),n(183,"li"),t(184,"Mobile vs desktop detection"),e(),n(185,"li"),t(186,"Bot detection"),e(),n(187,"li"),t(188,"Country-specific content"),e()()(),n(189,"pre")(190,"code",4),t(191),e()()()()()()),a&2&&(i(30),r(s.middlewareBasics),i(23),r(s.authentication),i(23),r(s.redirects),i(23),r(s.rewriting),i(23),r(s.headers),i(23),r(s.cookies),i(23),r(s.rateLimiting),i(23),r(s.geolocation))},dependencies:[u,m,c],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#000;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#f0f0f0;border-left:4px solid #000000;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#000}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#000}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#000}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#e0e0e0;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;color:#fff;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:14px}p[_ngcontent-%COMP%]{line-height:1.6;color:#333}"]})}}return o})();export{f as NextjsMiddlewareComponent};
