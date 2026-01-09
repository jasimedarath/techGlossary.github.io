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

// src/app/components/nextjs/nextjs-middleware/nextjs-middleware.component.ts
var NextjsMiddlewareComponent = class _NextjsMiddlewareComponent {
  constructor() {
    this.middlewareBasics = `// Middleware runs before requests are completed
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
&#125;;`;
    this.authentication = `// Authentication with Middleware

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
&#125;;`;
    this.redirects = `// Redirects with Middleware

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
&#125;`;
    this.rewriting = `// URL Rewriting with Middleware

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
&#125;`;
    this.headers = `// Setting Custom Headers

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
&#125;`;
    this.cookies = `// Cookie Management in Middleware

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
&#125;`;
    this.rateLimiting = `// Rate Limiting with Middleware

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
&#125;;`;
    this.geolocation = `// Geolocation and Device Detection

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
&#125;`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function NextjsMiddlewareComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NextjsMiddlewareComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NextjsMiddlewareComponent, selectors: [["app-nextjs-middleware"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 192, vars: 8, consts: [[1, "container"], ["label", "Basics"], [1, "tab-content"], [1, "info-box"], [1, "language-tsx"], ["label", "Authentication"], ["label", "Redirects"], ["label", "Rewriting"], ["label", "Headers"], ["label", "Cookies"], ["label", "Rate Limiting"], ["label", "Geolocation"]], template: function NextjsMiddlewareComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Next.js Middleware");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Middleware allows you to run code before a request is completed, enabling authentication, redirects, rewrites, and custom logic.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "Middleware Basics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "Middleware");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " runs before requests are completed, perfect for authentication and routing logic.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "Runs on Edge Runtime (fast and global)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "Define in middleware.ts at root");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li");
        \u0275\u0275text(21, "Configure with matcher patterns");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275text(23, "Access request and modify response");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "li");
        \u0275\u0275text(25, "Lightweight execution environment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "li");
        \u0275\u0275text(27, "Can't use Node.js APIs");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "pre")(29, "code", 4);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(31, "mat-tab", 5)(32, "div", 2)(33, "h2");
        \u0275\u0275text(34, "Authentication");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 3)(36, "p");
        \u0275\u0275text(37, "Protect routes and implement authentication logic with middleware.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "ul")(39, "li");
        \u0275\u0275text(40, "Check authentication tokens");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "li");
        \u0275\u0275text(42, "Redirect unauthenticated users");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li");
        \u0275\u0275text(44, "Protect specific routes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "li");
        \u0275\u0275text(46, "Verify JWT tokens");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "li");
        \u0275\u0275text(48, "Pass user info to pages");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "li");
        \u0275\u0275text(50, "Handle login redirects");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(51, "pre")(52, "code", 4);
        \u0275\u0275text(53);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(54, "mat-tab", 6)(55, "div", 2)(56, "h2");
        \u0275\u0275text(57, "Redirects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 3)(59, "p");
        \u0275\u0275text(60, "Implement redirects based on various conditions.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "ul")(62, "li");
        \u0275\u0275text(63, "Simple URL redirects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "li");
        \u0275\u0275text(65, "Conditional redirects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "li");
        \u0275\u0275text(67, "Locale-based redirects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "li");
        \u0275\u0275text(69, "Permanent redirects (308)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "li");
        \u0275\u0275text(71, "Query parameter based");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "li");
        \u0275\u0275text(73, "Geolocation redirects");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(74, "pre")(75, "code", 4);
        \u0275\u0275text(76);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(77, "mat-tab", 7)(78, "div", 2)(79, "h2");
        \u0275\u0275text(80, "URL Rewriting");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "div", 3)(82, "p");
        \u0275\u0275text(83, "Rewrite URLs to serve different content while keeping the URL the same.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "ul")(85, "li");
        \u0275\u0275text(86, "URL stays same, content changes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "li");
        \u0275\u0275text(88, "A/B testing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "li");
        \u0275\u0275text(90, "Multi-tenant applications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "li");
        \u0275\u0275text(92, "Feature flags");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "li");
        \u0275\u0275text(94, "Subdomain routing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "li");
        \u0275\u0275text(96, "Transparent proxying");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(97, "pre")(98, "code", 4);
        \u0275\u0275text(99);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(100, "mat-tab", 8)(101, "div", 2)(102, "h2");
        \u0275\u0275text(103, "Custom Headers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "div", 3)(105, "p");
        \u0275\u0275text(106, "Set custom headers for security, CORS, caching, and more.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "ul")(108, "li");
        \u0275\u0275text(109, "Security headers (X-Frame-Options, etc.)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "li");
        \u0275\u0275text(111, "CORS configuration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "li");
        \u0275\u0275text(113, "Cache-Control headers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "li");
        \u0275\u0275text(115, "Custom headers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "li");
        \u0275\u0275text(117, "Request ID tracking");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "li");
        \u0275\u0275text(119, "Handle OPTIONS preflight");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(120, "pre")(121, "code", 4);
        \u0275\u0275text(122);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(123, "mat-tab", 9)(124, "div", 2)(125, "h2");
        \u0275\u0275text(126, "Cookie Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "div", 3)(128, "p");
        \u0275\u0275text(129, "Read and set cookies in middleware for session management and preferences.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "ul")(131, "li");
        \u0275\u0275text(132, "Read request cookies");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "li");
        \u0275\u0275text(134, "Set response cookies");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "li");
        \u0275\u0275text(136, "Cookie options (httpOnly, secure, etc.)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "li");
        \u0275\u0275text(138, "Delete cookies");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "li");
        \u0275\u0275text(140, "Cookie-based feature flags");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "li");
        \u0275\u0275text(142, "Session management");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(143, "pre")(144, "code", 4);
        \u0275\u0275text(145);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(146, "mat-tab", 10)(147, "div", 2)(148, "h2");
        \u0275\u0275text(149, "Rate Limiting");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "div", 3)(151, "p");
        \u0275\u0275text(152, "Implement rate limiting to prevent abuse and protect your API.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "ul")(154, "li");
        \u0275\u0275text(155, "IP-based rate limiting");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "li");
        \u0275\u0275text(157, "Sliding window algorithm");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "li");
        \u0275\u0275text(159, "Custom rate limit headers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "li");
        \u0275\u0275text(161, "429 Too Many Requests response");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "li");
        \u0275\u0275text(163, "Use Redis for production");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "li");
        \u0275\u0275text(165, "Per-route rate limits");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(166, "pre")(167, "code", 4);
        \u0275\u0275text(168);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(169, "mat-tab", 11)(170, "div", 2)(171, "h2");
        \u0275\u0275text(172, "Geolocation & Device Detection");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(173, "div", 3)(174, "p");
        \u0275\u0275text(175, "Use geolocation and device information for personalized experiences.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "ul")(177, "li");
        \u0275\u0275text(178, "Country and city detection");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(179, "li");
        \u0275\u0275text(180, "Latitude and longitude");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(181, "li");
        \u0275\u0275text(182, "User agent parsing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "li");
        \u0275\u0275text(184, "Mobile vs desktop detection");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(185, "li");
        \u0275\u0275text(186, "Bot detection");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "li");
        \u0275\u0275text(188, "Country-specific content");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(189, "pre")(190, "code", 4);
        \u0275\u0275text(191);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(30);
        \u0275\u0275textInterpolate(ctx.middlewareBasics);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.authentication);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.redirects);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.rewriting);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.headers);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.cookies);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.rateLimiting);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.geolocation);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #000000;\n  margin-bottom: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #282c34;\n  margin-top: 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  border-left: 4px solid #000000;\n  padding: 15px;\n  margin: 15px 0;\n  border-radius: 4px;\n}\n.info-box.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-left-color: #000000;\n}\n.info-box.warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #000000;\n}\n.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #000000;\n}\n.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding-left: 20px;\n}\n.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #e0e0e0;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\npre[_ngcontent-%COMP%] {\n  background: #282c34;\n  color: #ffffff;\n  padding: 15px;\n  border-radius: 4px;\n  overflow-x: auto;\n  margin: 15px 0;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: 14px;\n}\np[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  color: #333;\n}\n/*# sourceMappingURL=nextjs-middleware.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NextjsMiddlewareComponent, { className: "NextjsMiddlewareComponent", filePath: "src\\app\\components\\nextjs\\nextjs-middleware\\nextjs-middleware.component.ts", lineNumber: 13 });
})();
export {
  NextjsMiddlewareComponent
};
//# sourceMappingURL=chunk-FPO4CZ7K.js.map
