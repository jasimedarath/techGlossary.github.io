import "./chunk-EJKSKVQ6.js";
import {
  require_prism
} from "./chunk-VYZLFJ7Z.js";
import {
  MatTab,
  MatTabContent,
  MatTabGroup,
  MatTabsModule
} from "./chunk-3BBRWWQW.js";
import "./chunk-PEESLLPT.js";
import "./chunk-AEAJYSPS.js";
import {
  __toESM,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-N7AAI6XN.js";

// src/app/components/angular/learn-ssr-hydration/learn-ssr-hydration.component.ts
var Prism = __toESM(require_prism());
function LearnSsrHydrationComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "h3");
    \u0275\u0275text(2, "What is Server-Side Rendering?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " SSR renders your Angular application on the server and sends fully rendered HTML to the browser. This improves initial load time, SEO, and provides content to users with JavaScript disabled. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Key Benefits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "Faster First Contentful Paint (FCP):");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Users see content immediately");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "Better SEO:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Search engines can crawl fully rendered content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "Social Media Sharing:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Meta tags and content available for link previews");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "Improved perceived performance:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Content appears before JavaScript loads");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li")(25, "strong");
    \u0275\u0275text(26, "Accessibility:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Works without JavaScript (progressive enhancement)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "h4");
    \u0275\u0275text(29, "When to Use SSR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ul")(31, "li");
    \u0275\u0275text(32, "Public-facing websites that need SEO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "li");
    \u0275\u0275text(34, "Content-heavy applications (blogs, news sites)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "li");
    \u0275\u0275text(36, "E-commerce product pages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "li");
    \u0275\u0275text(38, "Landing pages and marketing sites");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "li");
    \u0275\u0275text(40, "Applications with slow initial JavaScript load");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "pre")(42, "code", 9);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 10)(45, "h4");
    \u0275\u0275text(46, "\u{1F4A1} SSR vs Static Site Generation (SSG)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p")(48, "strong");
    \u0275\u0275text(49, "SSR:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, " Renders on each request (dynamic content)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "p")(52, "strong");
    \u0275\u0275text(53, "SSG (Prerendering):");
    \u0275\u0275elementEnd();
    \u0275\u0275text(54, " Renders at build time (static content)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "p");
    \u0275\u0275text(56, "Angular supports both - use SSR for dynamic content and prerendering for static pages!");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(43);
    \u0275\u0275textInterpolate(ctx_r0.basicSSR);
  }
}
function LearnSsrHydrationComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "h3");
    \u0275\u0275text(2, "Non-Destructive Hydration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Hydration is the process of attaching Angular to server-rendered HTML without destroying and recreating it. This eliminates flickering and improves performance. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "How Hydration Works");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ol")(8, "li");
    \u0275\u0275text(9, "Server renders the application to HTML");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275text(11, "HTML is sent to the browser with hydration annotations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li");
    \u0275\u0275text(13, "Browser displays the static HTML immediately (fast FCP)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "li");
    \u0275\u0275text(15, "Angular JavaScript loads and parses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li");
    \u0275\u0275text(17, 'Angular "hydrates" by attaching to existing DOM');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "li");
    \u0275\u0275text(19, "Event listeners and interactivity are restored");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li");
    \u0275\u0275text(21, "Application is fully functional");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "h4");
    \u0275\u0275text(23, "Before Hydration (Angular < 16)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ul", 11)(25, "li");
    \u0275\u0275text(26, "\u274C Angular would destroy server-rendered DOM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "li");
    \u0275\u0275text(28, "\u274C Recreate everything from scratch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "li");
    \u0275\u0275text(30, "\u274C Visible content flickering");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "li");
    \u0275\u0275text(32, "\u274C Lost user focus/scroll position");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "li");
    \u0275\u0275text(34, "\u274C Wasted rendering work");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "h4");
    \u0275\u0275text(36, "With Hydration (Angular 16+)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "ul", 12)(38, "li");
    \u0275\u0275text(39, "\u2705 Preserves server-rendered DOM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "li");
    \u0275\u0275text(41, "\u2705 Attaches to existing elements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "li");
    \u0275\u0275text(43, "\u2705 No flickering or re-rendering");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "li");
    \u0275\u0275text(45, "\u2705 Maintains state and position");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "li");
    \u0275\u0275text(47, "\u2705 Better performance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "pre")(49, "code", 9);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(50);
    \u0275\u0275textInterpolate(ctx_r0.hydration);
  }
}
function LearnSsrHydrationComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "h3");
    \u0275\u0275text(2, "Platform-Specific Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Not all code can run on both server and browser. Use platform checks to conditionally execute code based on where your application is running. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Browser-Only APIs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "code");
    \u0275\u0275text(10, "window");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " - Browser window object");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "code");
    \u0275\u0275text(14, "document");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " - DOM document");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "code");
    \u0275\u0275text(18, "localStorage");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " / ");
    \u0275\u0275elementStart(20, "code");
    \u0275\u0275text(21, "sessionStorage");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "li")(23, "code");
    \u0275\u0275text(24, "navigator");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " - Browser information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "li")(27, "code");
    \u0275\u0275text(28, "WebSocket");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " - Real-time communication");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "li");
    \u0275\u0275text(31, "Third-party libraries that use DOM");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "h4");
    \u0275\u0275text(33, "Server-Only Scenarios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "ul")(35, "li");
    \u0275\u0275text(36, "File system access");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "li");
    \u0275\u0275text(38, "Database connections");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "li");
    \u0275\u0275text(40, "Environment variables");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "li");
    \u0275\u0275text(42, "Server-side caching");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "pre")(44, "code", 9);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 13)(47, "h4");
    \u0275\u0275text(48, "\u26A0\uFE0F Common SSR Pitfalls");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "ul")(50, "li");
    \u0275\u0275text(51, "Accessing ");
    \u0275\u0275elementStart(52, "code");
    \u0275\u0275text(53, "window");
    \u0275\u0275elementEnd();
    \u0275\u0275text(54, " or ");
    \u0275\u0275elementStart(55, "code");
    \u0275\u0275text(56, "document");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57, " without platform check");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "li");
    \u0275\u0275text(59, "Using browser-only libraries (charts, maps) directly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "li");
    \u0275\u0275text(61, "Assuming ");
    \u0275\u0275elementStart(62, "code");
    \u0275\u0275text(63, "localStorage");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, " is available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "li");
    \u0275\u0275text(66, "Direct DOM manipulation in ngOnInit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "li");
    \u0275\u0275text(68, "Timer-based code without cleanup");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(45);
    \u0275\u0275textInterpolate(ctx_r0.platformCheck);
  }
}
function LearnSsrHydrationComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "h3");
    \u0275\u0275text(2, "Transferring Data from Server to Browser");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Transfer State allows you to serialize data on the server and reuse it on the browser, avoiding duplicate HTTP requests and improving performance. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Why Transfer State?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li");
    \u0275\u0275text(9, "Avoid duplicate API calls (server + browser)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275text(11, "Faster browser interactivity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li");
    \u0275\u0275text(13, "Consistent data between SSR and hydration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "li");
    \u0275\u0275text(15, "Reduced server load");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "h4");
    \u0275\u0275text(17, "What to Transfer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ul")(19, "li");
    \u0275\u0275text(20, "Initial data from API calls");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "li");
    \u0275\u0275text(22, "User authentication state");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "li");
    \u0275\u0275text(24, "Configuration or settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "li");
    \u0275\u0275text(26, "Computed or derived data");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "pre")(28, "code", 9);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 14)(31, "h4");
    \u0275\u0275text(32, "\u{1F3AF} Best Practices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "ul")(34, "li");
    \u0275\u0275text(35, "Only transfer data needed for initial render");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "li");
    \u0275\u0275text(37, "Clear transferred data after use to prevent memory leaks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "li");
    \u0275\u0275text(39, "Don't transfer sensitive data (use secure cookies instead)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "li");
    \u0275\u0275text(41, "Consider data size - large transfers slow down hydration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "li");
    \u0275\u0275text(43, "Use HTTP interceptors for automatic transfer state handling");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(29);
    \u0275\u0275textInterpolate(ctx_r0.transferState);
  }
}
function LearnSsrHydrationComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "h3");
    \u0275\u0275text(2, "SSR Performance Optimization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Optimize your SSR setup to provide the best possible performance for both server and client. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Optimization Strategies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "Prerendering:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Generate static HTML at build time for static routes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "Defer Non-Critical Content:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Use ");
    \u0275\u0275elementStart(16, "code");
    \u0275\u0275text(17, "@defer");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " blocks for below-fold content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "li")(20, "strong");
    \u0275\u0275text(21, "Lazy Loading:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Load routes and components on-demand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "li")(24, "strong");
    \u0275\u0275text(25, "Caching:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " Cache rendered pages on CDN or server");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "li")(28, "strong");
    \u0275\u0275text(29, "Timeouts:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " Set reasonable timeouts for SSR rendering");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "pre")(32, "code", 9);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "h3");
    \u0275\u0275text(35, "Non-Destructive Hydration Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "pre")(37, "code", 9);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 15)(40, "h4");
    \u0275\u0275text(41, "\u{1F680} Performance Tips");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "ul")(43, "li");
    \u0275\u0275text(44, "Use prerendering for static pages (/, /about, /contact)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "li");
    \u0275\u0275text(46, "Implement proper caching strategies (CDN, HTTP cache)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "li");
    \u0275\u0275text(48, "Optimize Critical Rendering Path (minimize CSS, inline critical CSS)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "li");
    \u0275\u0275text(50, "Use Image optimization (responsive images, lazy loading)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "li");
    \u0275\u0275text(52, "Monitor SSR performance (rendering time, memory usage)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "li");
    \u0275\u0275text(54, "Consider using a CDN for static assets");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(33);
    \u0275\u0275textInterpolate(ctx_r0.ssrOptimization);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.nonDestructiveHydration);
  }
}
function LearnSsrHydrationComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "h3");
    \u0275\u0275text(2, "Production-Ready SSR Setup");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " This example shows a complete SSR setup with hydration, transfer state, and optimization strategies for a real-world application. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "pre")(6, "code", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 16)(9, "h4");
    \u0275\u0275text(10, "\u2705 SSR Checklist");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ul")(12, "li");
    \u0275\u0275text(13, "\u2705 Enable SSR with ");
    \u0275\u0275elementStart(14, "code");
    \u0275\u0275text(15, "ng add @angular/ssr");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "li");
    \u0275\u0275text(17, "\u2705 Enable hydration with ");
    \u0275\u0275elementStart(18, "code");
    \u0275\u0275text(19, "provideClientHydration()");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "li");
    \u0275\u0275text(21, "\u2705 Add event replay with ");
    \u0275\u0275elementStart(22, "code");
    \u0275\u0275text(23, "withEventReplay()");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "li");
    \u0275\u0275text(25, "\u2705 Implement transfer state for API calls");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "li");
    \u0275\u0275text(27, "\u2705 Add platform checks for browser-only code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "li");
    \u0275\u0275text(29, "\u2705 Use ");
    \u0275\u0275elementStart(30, "code");
    \u0275\u0275text(31, "@defer");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " blocks for non-critical content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "li");
    \u0275\u0275text(34, "\u2705 Configure prerendering for static routes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "li");
    \u0275\u0275text(36, "\u2705 Add proper meta tags for SEO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "li");
    \u0275\u0275text(38, "\u2705 Test without JavaScript enabled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "li");
    \u0275\u0275text(40, "\u2705 Monitor Core Web Vitals (FCP, LCP, CLS)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 17)(42, "h4");
    \u0275\u0275text(43, "\u{1F50D} SEO Optimization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "ul")(45, "li");
    \u0275\u0275text(46, "Use proper meta tags (title, description, OG tags)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "li");
    \u0275\u0275text(48, "Implement structured data (JSON-LD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "li");
    \u0275\u0275text(50, "Create sitemap.xml and robots.txt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "li");
    \u0275\u0275text(52, "Ensure content is visible in server-rendered HTML");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "li");
    \u0275\u0275text(54, "Test with Google's Mobile-Friendly Test");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "li");
    \u0275\u0275text(56, "Monitor search console for indexing issues");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.realWorldSSR);
  }
}
var LearnSsrHydrationComponent = class _LearnSsrHydrationComponent {
  constructor() {
    this.basicSSR = `// Enable SSR in Angular 17+
// 1. Add SSR during project creation
ng new my-app --ssr

// 2. Or add to existing project
ng add @angular/ssr

// angular.json configuration
{
  "architect": {
    "build": {
      "builder": "@angular-devkit/build-angular:application",
      "options": {
        "browser": "src/main.ts",
        "server": "src/main.server.ts",
        "prerender": true,
        "ssr": {
          "entry": "server.ts"
        }
      }
    }
  }
}`;
    this.hydration = `// main.ts - Enable hydration
import { bootstrapApplication } from '@angular/platform-browser';
import { provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideClientHydration(), // Enable hydration
    // other providers...
  ]
});

// What hydration does:
// 1. Server renders HTML
// 2. HTML sent to browser
// 3. Angular attaches to existing DOM (no re-render)
// 4. Event listeners added
// 5. Full interactivity restored

// Benefits:
// - Faster First Contentful Paint (FCP)
// - Improved Largest Contentful Paint (LCP)
// - Better SEO
// - No content flashing
// - Reduced bandwidth usage`;
    this.platformCheck = `// Check if code is running on server or browser
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';

@Component({
  selector: 'app-geo-location',
  template: \`
    @if (location) {
      <div>Your location: {{ location.lat }}, {{ location.lng }}</div>
    }
  \`
})
export class GeoLocationComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  location: { lat: number; lng: number } | null = null;
  
  ngOnInit() {
    // Only access browser APIs on the browser
    if (isPlatformBrowser(this.platformId)) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        }
      );
    }
  }
}

// Common platform-specific scenarios
@Component({...})
export class PlatformAwareComponent {
  private platformId = inject(PLATFORM_ID);
  
  ngOnInit() {
    // Browser-only: DOM manipulation
    if (isPlatformBrowser(this.platformId)) {
      this.initChartLibrary();
      localStorage.setItem('key', 'value');
      window.addEventListener('scroll', this.onScroll);
    }
    
    // Server-only: Different rendering
    if (isPlatformServer(this.platformId)) {
      // Use placeholder data or server-specific logic
      this.loadDataForSEO();
    }
  }
}`;
    this.transferState = `// Transfer data from server to browser
import { TransferState, makeStateKey } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

const USERS_KEY = makeStateKey<User[]>('users');

@Component({
  selector: 'app-user-list',
  template: \`
    @for (user of users; track user.id) {
      <div>{{ user.name }}</div>
    }
  \`
})
export class UserListComponent implements OnInit {
  private transferState = inject(TransferState);
  private platformId = inject(PLATFORM_ID);
  private http = inject(HttpClient);
  
  users: User[] = [];
  
  ngOnInit() {
    // Check if data is already available from server
    const cachedUsers = this.transferState.get(USERS_KEY, null);
    
    if (cachedUsers) {
      // Use cached data (browser after SSR)
      this.users = cachedUsers;
    } else {
      // Fetch data
      this.http.get<User[]>('/api/users').subscribe(users => {
        this.users = users;
        
        // On server, save data for transfer to browser
        if (isPlatformServer(this.platformId)) {
          this.transferState.set(USERS_KEY, users);
        }
      });
    }
  }
}

// Using with HttpClient interceptor
import { HttpInterceptorFn } from '@angular/common/http';

export const transferStateInterceptor: HttpInterceptorFn = (req, next) => {
  const transferState = inject(TransferState);
  const platformId = inject(PLATFORM_ID);
  
  // Only cache GET requests
  if (req.method !== 'GET') {
    return next(req);
  }
  
  const key = makeStateKey(req.url);
  
  // On browser, check if data was transferred from server
  if (isPlatformBrowser(platformId)) {
    const cachedResponse = transferState.get(key, null);
    if (cachedResponse) {
      transferState.remove(key);
      return of(new HttpResponse({ body: cachedResponse }));
    }
  }
  
  // Make request and cache on server
  return next(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse && isPlatformServer(platformId)) {
        transferState.set(key, event.body);
      }
    })
  );
};`;
    this.ssrOptimization = `// Optimize SSR performance

// 1. Use deferrable views for non-critical content
@Component({
  template: \`
    <!-- Critical content renders on server -->
    <app-header />
    <app-hero />
    
    <!-- Defer heavy components -->
    @defer (on idle) {
      <app-recommendations />
    } @placeholder {
      <div class="skeleton"></div>
    }
  \`
})
export class PageComponent {}

// 2. Prerender static routes
// angular.json
{
  "architect": {
    "build": {
      "options": {
        "prerender": true,
        "prerenderRoutes": [
          "/",
          "/about",
          "/contact",
          "/products"
        ]
      }
    }
  }
}

// 3. Configure SSR timeout
// server.ts
const server = app();
server.set('view engine', 'html');
server.set('views', DIST_FOLDER);

server.get('*', (req, res) => {
  res.render('index', {
    req,
    providers: [
      { provide: APP_BASE_HREF, useValue: req.baseUrl },
      {
        provide: 'serverUrl',
        useValue: \`\${req.protocol}://\${req.get('host')}\`
      }
    ]
  }, {
    timeout: 10000 // 10 second timeout
  });
});

// 4. Lazy load routes
export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component')
      .then(m => m.DashboardComponent)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes')
      .then(m => m.ADMIN_ROUTES)
  }
];`;
    this.nonDestructiveHydration = `// Non-destructive hydration (Angular 16+)
// Prevents content flickering and preserves server-rendered content

// main.ts
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    provideClientHydration(
      // Replay events that occurred before hydration completed
      withEventReplay()
    ),
  ]
});

// How it works:
// 1. Server renders HTML
// 2. HTML sent to browser with hydration metadata
// 3. Browser displays content immediately (FCP)
// 4. Angular downloads and bootstraps
// 5. Angular "hydrates" existing DOM instead of destroying it
// 6. Event listeners attached
// 7. User events that occurred during hydration are replayed

// Benefits:
// - No DOM re-render (no flickering)
// - Preserves focus and scroll position
// - Better performance
// - Improved user experience
// - SEO-friendly content remains visible

// Common issues and solutions:
@Component({
  template: \`
    <!-- \u274C Avoid: Direct DOM manipulation conflicts with hydration -->
    <div #myDiv></div>
    
    <!-- \u2705 Use: Angular's template syntax -->
    @if (showContent) {
      <div>Content</div>
    }
  \`
})
export class HydrationFriendlyComponent {
  // \u274C Avoid: Accessing ViewChild before hydration
  @ViewChild('myDiv') myDiv!: ElementRef;
  
  ngOnInit() {
    // This might run before hydration completes
    // this.myDiv.nativeElement.innerHTML = 'content';
  }
  
  // \u2705 Use: AfterViewInit for DOM access
  ngAfterViewInit() {
    // Safe to access DOM here
    if (this.myDiv) {
      // DOM operations here
    }
  }
}`;
    this.realWorldSSR = `// Complete SSR setup example

// 1. app.config.ts - Application configuration
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { routes } from './app.routes';
import { transferStateInterceptor } from './interceptors/transfer-state.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withFetch(), // Use fetch API for SSR
      withInterceptors([transferStateInterceptor])
    ),
    provideClientHydration(
      withEventReplay() // Replay user events during hydration
    ),
  ]
};

// 2. app.config.server.ts - Server-specific configuration
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);

// 3. Component with SSR optimizations
@Component({
  selector: 'app-product-page',
  template: \`
    <!-- Critical content (SSR) -->
    <app-header />
    <div class="product-hero">
      <h1>{{ product()?.name }}</h1>
      <img [src]="product()?.image" [alt]="product()?.name" />
      <p>{{ product()?.description }}</p>
      <button (click)="addToCart()">Add to Cart</button>
    </div>
    
    <!-- Defer non-critical content -->
    @defer (on viewport; prefetch on idle) {
      <app-reviews [productId]="productId()" />
    } @placeholder {
      <div class="reviews-skeleton"></div>
    }
    
    @defer (on idle) {
      <app-related-products [category]="product()?.category" />
    }
    
    <!-- Browser-only features -->
    @if (isBrowser()) {
      <app-recently-viewed />
    }
  \`
})
export class ProductPageComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private platformId = inject(PLATFORM_ID);
  private transferState = inject(TransferState);
  private http = inject(HttpClient);
  
  productId = toSignal(this.route.params.pipe(map(p => p['id'])));
  product = signal<Product | null>(null);
  
  isBrowser = computed(() => isPlatformBrowser(this.platformId));
  
  ngOnInit() {
    const id = this.productId();
    if (!id) return;
    
    const key = makeStateKey<Product>(\`product-\${id}\`);
    const cached = this.transferState.get(key, null);
    
    if (cached) {
      this.product.set(cached);
    } else {
      this.http.get<Product>(\`/api/products/\${id}\`).subscribe(product => {
        this.product.set(product);
        if (isPlatformServer(this.platformId)) {
          this.transferState.set(key, product);
        }
      });
    }
  }
}`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function LearnSsrHydrationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LearnSsrHydrationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LearnSsrHydrationComponent, selectors: [["app-learn-ssr-hydration"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 0, consts: [[1, "header"], ["label", "SSR Basics"], ["matTabContent", ""], ["label", "Hydration"], ["label", "Platform Detection"], ["label", "Transfer State"], ["label", "Optimization"], ["label", "Complete Example"], [1, "tab-content"], [1, "language-typescript"], [1, "info-box"], [1, "comparison"], [1, "comparison", "success"], [1, "warning-box"], [1, "tip-box"], [1, "performance-tips"], [1, "checklist"], [1, "seo-tips"]], template: function LearnSsrHydrationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1, "Server-Side Rendering (SSR) & Hydration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "label");
        \u0275\u0275text(3, "SSR renders your Angular application on the server for better performance, SEO, and user experience. Hydration makes the transition from server to browser seamless.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "mat-tab-group")(5, "mat-tab", 1);
        \u0275\u0275template(6, LearnSsrHydrationComponent_ng_template_6_Template, 57, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-tab", 3);
        \u0275\u0275template(8, LearnSsrHydrationComponent_ng_template_8_Template, 51, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "mat-tab", 4);
        \u0275\u0275template(10, LearnSsrHydrationComponent_ng_template_10_Template, 69, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-tab", 5);
        \u0275\u0275template(12, LearnSsrHydrationComponent_ng_template_12_Template, 44, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-tab", 6);
        \u0275\u0275template(14, LearnSsrHydrationComponent_ng_template_14_Template, 55, 2, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-tab", 7);
        \u0275\u0275template(16, LearnSsrHydrationComponent_ng_template_16_Template, 57, 1, "ng-template", 2);
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [MatTabsModule, MatTabContent, MatTab, MatTabGroup], styles: ['\n\n.header[_ngcontent-%COMP%] {\n  color: #dd0031;\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.tab-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #dd0031;\n  margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n.tab-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #444;\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n}\n.tab-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.tab-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  line-height: 1.8;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\n.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 15px;\n  border-radius: 5px;\n  overflow-x: auto;\n  margin: 1rem 0;\n}\n.info-box[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.info-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1976d2;\n}\n.info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.info-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n.warning-box[_ngcontent-%COMP%] {\n  background-color: #fff3e0;\n  border-left: 4px solid #ff9800;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.warning-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #f57c00;\n}\n.tip-box[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  border-left: 4px solid #4caf50;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.tip-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #2e7d32;\n}\n.performance-tips[_ngcontent-%COMP%] {\n  background-color: #f3e5f5;\n  border-left: 4px solid #9c27b0;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.performance-tips[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #7b1fa2;\n}\n.checklist[_ngcontent-%COMP%], \n.seo-tips[_ngcontent-%COMP%] {\n  background-color: #e0f2f1;\n  border-left: 4px solid #009688;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.checklist[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.seo-tips[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #00796b;\n}\n.checklist[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.seo-tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.comparison[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n}\n.comparison[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  margin-bottom: 6px;\n  background-color: #ffebee;\n  border-radius: 4px;\n}\n.comparison.success[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n}\n/*# sourceMappingURL=learn-ssr-hydration.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LearnSsrHydrationComponent, { className: "LearnSsrHydrationComponent", filePath: "src\\app\\components\\angular\\learn-ssr-hydration\\learn-ssr-hydration.component.ts", lineNumber: 13 });
})();
export {
  LearnSsrHydrationComponent
};
//# sourceMappingURL=chunk-QS5B2JLM.js.map
