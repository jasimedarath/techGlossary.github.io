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

// src/app/components/nextjs/nextjs-optimization/nextjs-optimization.component.ts
var NextjsOptimizationComponent = class _NextjsOptimizationComponent {
  constructor() {
    this.imageOptimization = `// Next.js Image Component - automatic optimization
import Image from 'next/image';

export default function ProductPage() &#123;
  return (
    <div>
      &#123;/* Static import */&#125;
      <Image
        src="/hero.jpg"
        alt="Hero"
        width=&#123;800&#125;
        height=&#123;600&#125;
        priority // Load immediately for LCP
      />
      
      &#123;/* Remote image */&#125;
      <Image
        src="https://example.com/image.jpg"
        alt="Product"
        width=&#123;400&#125;
        height=&#123;300&#125;
        loading="lazy" // Default
      />
      
      &#123;/* Fill container */&#125;
      <div style=&#123;&#123; position: 'relative', width: '100%', height: '400px' &#125;&#125;>
        <Image
          src="/background.jpg"
          alt="Background"
          fill
          style=&#123;&#123; objectFit: 'cover' &#125;&#125;
        />
      </div>
      
      &#123;/* Responsive images */&#125;
      <Image
        src="/product.jpg"
        alt="Product"
        width=&#123;800&#125;
        height=&#123;600&#125;
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
&#125;

// next.config.js - Configure remote domains
module.exports = &#123;
  images: &#123;
    remotePatterns: [
      &#123;
        protocol: 'https',
        hostname: 'example.com',
      &#125;,
    ],
  &#125;,
&#125;;`;
    this.fontOptimization = `// Font Optimization with next/font
import &#123; Inter, Roboto_Mono, Playfair_Display &#125; from 'next/font/google';
import localFont from 'next/font/local';

// Google Fonts
const inter = Inter(&#123;
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
&#125;);

const robotoMono = Roboto_Mono(&#123;
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto-mono',
&#125;);

// Local fonts
const myFont = localFont(&#123;
  src: './my-font.woff2',
  display: 'swap',
  variable: '--font-custom',
&#125;);

// app/layout.tsx
export default function RootLayout(&#123; children &#125;: &#123; children: React.ReactNode &#125;) &#123;
  return (
    <html lang="en" className=&#123;\`$&#123;inter.variable&#125; $&#123;robotoMono.variable&#125;\`&#125;>
      <body className=&#123;inter.className&#125;>&#123;children&#125;</body>
    </html>
  );
&#125;

// Use in CSS
// .title &#123; font-family: var(--font-inter); &#125;
// .code &#123; font-family: var(--font-roboto-mono); &#125;

// Benefits:
// - Automatic self-hosting
// - Zero layout shift
// - No external network requests
// - Optimized loading`;
    this.scriptOptimization = `// Script Component for third-party scripts
import Script from 'next/script';

export default function Page() &#123;
  return (
    <>
      &#123;/* Load after page interactive (default) */&#125;
      <Script src="https://example.com/script.js" />
      
      &#123;/* Load before page interactive */&#125;
      <Script 
        src="https://example.com/critical.js"
        strategy="beforeInteractive"
      />
      
      &#123;/* Load after page fully loaded */&#125;
      <Script 
        src="https://example.com/analytics.js"
        strategy="afterInteractive"
      />
      
      &#123;/* Lazy load when idle */&#125;
      <Script 
        src="https://example.com/chat.js"
        strategy="lazyOnload"
      />
      
      &#123;/* Inline script */&#125;
      <Script id="analytics-init">
        &#123;\`
          window.dataLayer = window.dataLayer || [];
          function gtag()&#123;dataLayer.push(arguments);&#125;
          gtag('js', new Date());
        \`&#125;
      <\/Script>
      
      &#123;/* With callback */&#125;
      <Script
        src="https://example.com/sdk.js"
        onLoad=&#123;() => &#123;
          console.log('Script loaded!');
        &#125;&#125;
      />
    </>
  );
&#125;

// Strategies:
// - beforeInteractive: Critical scripts (polyfills)
// - afterInteractive: Analytics, ads (default)
// - lazyOnload: Chat widgets, social media`;
    this.bundleAnalyzer = `// Bundle Analysis
// Install: npm install @next/bundle-analyzer

// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')(&#123;
  enabled: process.env.ANALYZE === 'true',
&#125;);

module.exports = withBundleAnalyzer(&#123;
  // Your Next.js config
  reactStrictMode: true,
&#125;);

// package.json
&#123;
  "scripts": &#123;
    "analyze": "ANALYZE=true next build",
    "analyze:server": "ANALYZE=true BUNDLE_ANALYZE=server next build",
    "analyze:browser": "ANALYZE=true BUNDLE_ANALYZE=browser next build"
  &#125;
&#125;

// Run: npm run analyze
// Opens interactive treemap showing bundle composition

// Optimization tips:
// - Identify large dependencies
// - Use dynamic imports for heavy components
// - Remove unused dependencies
// - Use barrel file imports carefully
// - Check for duplicate packages`;
    this.codeSplitting = `// Code Splitting and Dynamic Imports

// 1. Dynamic imports for components
import dynamic from 'next/dynamic';

const DynamicChart = dynamic(() => import('@/components/Chart'), &#123;
  loading: () => <p>Loading chart...</p>,
  ssr: false, // Disable SSR for this component
&#125;);

export default function Dashboard() &#123;
  return (
    <div>
      <h1>Dashboard</h1>
      <DynamicChart data=&#123;data&#125; />
    </div>
  );
&#125;

// 2. Dynamic imports with named exports
const DynamicButton = dynamic(
  () => import('@/components/Button').then(mod => mod.PrimaryButton)
);

// 3. Conditional loading
'use client';

import &#123; useState &#125; from 'react';
import dynamic from 'next/dynamic';

const HeavyModal = dynamic(() => import('@/components/HeavyModal'));

export default function Page() &#123;
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div>
      <button onClick=&#123;() => setShowModal(true)&#125;>Open Modal</button>
      &#123;showModal && <HeavyModal onClose=&#123;() => setShowModal(false)&#125; />&#125;
    </div>
  );
&#125;

// 4. Preload on hover
const DynamicComponent = dynamic(() => import('./Component'), &#123;
  loading: () => <Skeleton />,
&#125;);

function Link() &#123;
  return (
    <a 
      onMouseEnter=&#123;() => &#123;
        DynamicComponent.preload();
      &#125;&#125;
    >
      Hover to preload
    </a>
  );
&#125;`;
    this.metadata = `// Metadata Optimization for SEO

// app/layout.tsx
import type &#123; Metadata &#125; from 'next';

export const metadata: Metadata = &#123;
  title: &#123;
    template: '%s | My App',
    default: 'My App',
  &#125;,
  description: 'My app description',
  keywords: ['Next.js', 'React', 'TypeScript'],
  authors: [&#123; name: 'John Doe' &#125;],
  openGraph: &#123;
    title: 'My App',
    description: 'My app description',
    images: ['/og-image.jpg'],
    locale: 'en_US',
    type: 'website',
  &#125;,
  twitter: &#123;
    card: 'summary_large_image',
    title: 'My App',
    description: 'My app description',
    images: ['/twitter-image.jpg'],
  &#125;,
  robots: &#123;
    index: true,
    follow: true,
  &#125;,
&#125;;

// app/posts/[slug]/page.tsx - Dynamic metadata
export async function generateMetadata(&#123; params &#125;): Promise<Metadata> &#123;
  const post = await fetchPost(params.slug);
  
  return &#123;
    title: post.title,
    description: post.excerpt,
    openGraph: &#123;
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    &#125;,
  &#125;;
&#125;`;
    this.performanceTips = `// Performance Optimization Tips

// 1. Streaming and Suspense
import &#123; Suspense &#125; from 'react';

export default function Page() &#123;
  return (
    <div>
      <Suspense fallback=&#123;<Skeleton />&#125;>
        <SlowComponent />
      </Suspense>
    </div>
  );
&#125;

// 2. Parallel data fetching
async function getData() &#123;
  const [users, posts, comments] = await Promise.all([
    fetchUsers(),
    fetchPosts(),
    fetchComments(),
  ]);
  return &#123; users, posts, comments &#125;;
&#125;

// 3. Optimize third-party scripts
<Script src="analytics.js" strategy="lazyOnload" />

// 4. Use Server Components by default
// Reduces client-side JavaScript

// 5. Implement proper caching
export const revalidate = 3600;

// 6. Use Image component for all images
<Image src="/hero.jpg" width=&#123;800&#125; height=&#123;600&#125; alt="Hero" priority />

// 7. Minimize use of client-side state
// Keep as much on server as possible

// 8. Code split heavy components
const Chart = dynamic(() => import('./Chart'), &#123; ssr: false &#125;);

// 9. Optimize fonts
import &#123; Inter &#125; from 'next/font/google';
const inter = Inter(&#123; subsets: ['latin'] &#125;);`;
    this.webVitals = `// Monitoring Web Vitals

// app/_components/WebVitals.tsx
'use client';

import &#123; useReportWebVitals &#125; from 'next/web-vitals';

export function WebVitals() &#123;
  useReportWebVitals((metric) => &#123;
    // Send to analytics
    console.log(metric);
    
    // Example: Send to Google Analytics
    if (window.gtag) &#123;
      window.gtag('event', metric.name, &#123;
        value: Math.round(metric.value),
        event_label: metric.id,
        non_interaction: true,
      &#125;);
    &#125;
  &#125;);
  
  return null;
&#125;

// app/layout.tsx
import &#123; WebVitals &#125; from './_components/WebVitals';

export default function RootLayout(&#123; children &#125;) &#123;
  return (
    <html>
      <body>
        <WebVitals />
        &#123;children&#125;
      </body>
    </html>
  );
&#125;

// Metrics tracked:
// - FCP: First Contentful Paint
// - LCP: Largest Contentful Paint
// - CLS: Cumulative Layout Shift
// - FID: First Input Delay
// - TTFB: Time to First Byte
// - INP: Interaction to Next Paint`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function NextjsOptimizationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NextjsOptimizationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NextjsOptimizationComponent, selectors: [["app-nextjs-optimization"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 196, vars: 8, consts: [[1, "container"], ["label", "Image Optimization"], [1, "tab-content"], [1, "info-box"], [1, "language-tsx"], ["label", "Font Optimization"], ["label", "Script Optimization"], ["label", "Bundle Analyzer"], ["label", "Code Splitting"], ["label", "Metadata"], ["label", "Performance Tips"], ["label", "Web Vitals"]], template: function NextjsOptimizationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Next.js Optimization");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Next.js provides built-in optimizations for images, fonts, scripts, and more to improve performance and user experience.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "Image Component");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "next/image");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " automatically optimizes images with lazy loading, responsive sizes, and modern formats.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "Automatic WebP/AVIF format conversion");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "Responsive image sizing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li");
        \u0275\u0275text(21, "Lazy loading by default");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275text(23, "Prevents Cumulative Layout Shift (CLS)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "li");
        \u0275\u0275text(25, "On-demand optimization");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "li");
        \u0275\u0275text(27, "Priority loading for LCP images");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "pre")(29, "code", 4);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(31, "mat-tab", 5)(32, "div", 2)(33, "h2");
        \u0275\u0275text(34, "Font Optimization");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 3)(36, "p")(37, "strong");
        \u0275\u0275text(38, "next/font");
        \u0275\u0275elementEnd();
        \u0275\u0275text(39, " automatically optimizes and self-hosts fonts with zero layout shift.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "ul")(41, "li");
        \u0275\u0275text(42, "Automatic self-hosting of Google Fonts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li");
        \u0275\u0275text(44, "Zero layout shift with font-display: swap");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "li");
        \u0275\u0275text(46, "No external network requests");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "li");
        \u0275\u0275text(48, "Built-in font subsetting");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "li");
        \u0275\u0275text(50, "Local font support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "li");
        \u0275\u0275text(52, "CSS variable support");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(53, "pre")(54, "code", 4);
        \u0275\u0275text(55);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(56, "mat-tab", 6)(57, "div", 2)(58, "h2");
        \u0275\u0275text(59, "Script Component");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 3)(61, "p")(62, "strong");
        \u0275\u0275text(63, "next/script");
        \u0275\u0275elementEnd();
        \u0275\u0275text(64, " optimizes third-party script loading with custom strategies.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "ul")(66, "li");
        \u0275\u0275text(67, "Control loading priority");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "li");
        \u0275\u0275text(69, "beforeInteractive for critical scripts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "li");
        \u0275\u0275text(71, "afterInteractive for analytics (default)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "li");
        \u0275\u0275text(73, "lazyOnload for non-critical scripts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "li");
        \u0275\u0275text(75, "Automatic deduplication");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "li");
        \u0275\u0275text(77, "Load callbacks");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(78, "pre")(79, "code", 4);
        \u0275\u0275text(80);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(81, "mat-tab", 7)(82, "div", 2)(83, "h2");
        \u0275\u0275text(84, "Bundle Analysis");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "div", 3)(86, "p");
        \u0275\u0275text(87, "Analyze your bundle size to identify optimization opportunities.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "ul")(89, "li");
        \u0275\u0275text(90, "Visual treemap of bundle composition");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "li");
        \u0275\u0275text(92, "Identify large dependencies");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "li");
        \u0275\u0275text(94, "Find duplicate packages");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "li");
        \u0275\u0275text(96, "Separate server and client analysis");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "li");
        \u0275\u0275text(98, "Track bundle size over time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "li");
        \u0275\u0275text(100, "Optimize imports");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(101, "pre")(102, "code", 4);
        \u0275\u0275text(103);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(104, "mat-tab", 8)(105, "div", 2)(106, "h2");
        \u0275\u0275text(107, "Code Splitting");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "div", 3)(109, "p");
        \u0275\u0275text(110, "Use dynamic imports to split code and reduce initial bundle size.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "ul")(112, "li");
        \u0275\u0275text(113, "Dynamic imports with next/dynamic");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "li");
        \u0275\u0275text(115, "Component-level code splitting");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "li");
        \u0275\u0275text(117, "Conditional loading");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "li");
        \u0275\u0275text(119, "Loading states");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "li");
        \u0275\u0275text(121, "Disable SSR for client-only code");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "li");
        \u0275\u0275text(123, "Preload on interaction");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(124, "pre")(125, "code", 4);
        \u0275\u0275text(126);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(127, "mat-tab", 9)(128, "div", 2)(129, "h2");
        \u0275\u0275text(130, "Metadata & SEO");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(131, "div", 3)(132, "p");
        \u0275\u0275text(133, "Optimize metadata for better SEO and social sharing.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "ul")(135, "li");
        \u0275\u0275text(136, "Static and dynamic metadata");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "li");
        \u0275\u0275text(138, "Open Graph tags");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "li");
        \u0275\u0275text(140, "Twitter Card tags");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "li");
        \u0275\u0275text(142, "Robots meta tags");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "li");
        \u0275\u0275text(144, "Title templates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "li");
        \u0275\u0275text(146, "generateMetadata for dynamic pages");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(147, "pre")(148, "code", 4);
        \u0275\u0275text(149);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(150, "mat-tab", 10)(151, "div", 2)(152, "h2");
        \u0275\u0275text(153, "Performance Best Practices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(154, "div", 3)(155, "p");
        \u0275\u0275text(156, "General optimization techniques for Next.js applications.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "ul")(158, "li");
        \u0275\u0275text(159, "Use Server Components by default");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "li");
        \u0275\u0275text(161, "Implement Streaming and Suspense");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "li");
        \u0275\u0275text(163, "Parallel data fetching");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "li");
        \u0275\u0275text(165, "Optimize third-party scripts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(166, "li");
        \u0275\u0275text(167, "Proper caching strategies");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(168, "li");
        \u0275\u0275text(169, "Code split heavy components");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(170, "pre")(171, "code", 4);
        \u0275\u0275text(172);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(173, "mat-tab", 11)(174, "div", 2)(175, "h2");
        \u0275\u0275text(176, "Web Vitals Monitoring");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(177, "div", 3)(178, "p");
        \u0275\u0275text(179, "Monitor Core Web Vitals to track and improve performance.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(180, "ul")(181, "li");
        \u0275\u0275text(182, "useReportWebVitals hook");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "li");
        \u0275\u0275text(184, "FCP, LCP, CLS, FID, TTFB, INP");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(185, "li");
        \u0275\u0275text(186, "Send to analytics services");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "li");
        \u0275\u0275text(188, "Track performance over time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(189, "li");
        \u0275\u0275text(190, "Identify performance regressions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(191, "li");
        \u0275\u0275text(192, "Optimize based on real user data");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(193, "pre")(194, "code", 4);
        \u0275\u0275text(195);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(30);
        \u0275\u0275textInterpolate(ctx.imageOptimization);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.fontOptimization);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.scriptOptimization);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.bundleAnalyzer);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.codeSplitting);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.metadata);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.performanceTips);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.webVitals);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #000000;\n  margin-bottom: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #282c34;\n  margin-top: 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  border-left: 4px solid #000000;\n  padding: 15px;\n  margin: 15px 0;\n  border-radius: 4px;\n}\n.info-box.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-left-color: #000000;\n}\n.info-box.warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #000000;\n}\n.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #000000;\n}\n.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding-left: 20px;\n}\n.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #e0e0e0;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\npre[_ngcontent-%COMP%] {\n  background: #282c34;\n  color: #ffffff;\n  padding: 15px;\n  border-radius: 4px;\n  overflow-x: auto;\n  margin: 15px 0;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: 14px;\n}\np[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  color: #333;\n}\n/*# sourceMappingURL=nextjs-optimization.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NextjsOptimizationComponent, { className: "NextjsOptimizationComponent", filePath: "src\\app\\components\\nextjs\\nextjs-optimization\\nextjs-optimization.component.ts", lineNumber: 13 });
})();
export {
  NextjsOptimizationComponent
};
//# sourceMappingURL=chunk-E5STDTB5.js.map
