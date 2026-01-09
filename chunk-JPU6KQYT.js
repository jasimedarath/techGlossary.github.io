import{b as d,c as p,d as c}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as n,da as m,gb as i,hb as e,tb as t,ub as a,yb as s}from"./chunk-WGQ2ELTG.js";var y=(()=>{class r{constructor(){this.imageOptimization=`// Next.js Image Component - automatic optimization
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
&#125;;`,this.fontOptimization=`// Font Optimization with next/font
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
// - Optimized loading`,this.scriptOptimization=`// Script Component for third-party scripts
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
// - lazyOnload: Chat widgets, social media`,this.bundleAnalyzer=`// Bundle Analysis
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
// - Check for duplicate packages`,this.codeSplitting=`// Code Splitting and Dynamic Imports

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
&#125;`,this.metadata=`// Metadata Optimization for SEO

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
&#125;`,this.performanceTips=`// Performance Optimization Tips

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
const inter = Inter(&#123; subsets: ['latin'] &#125;);`,this.webVitals=`// Monitoring Web Vitals

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
// - INP: Interaction to Next Paint`}ngAfterViewChecked(){Prism.highlightAll()}static{this.\u0275fac=function(l){return new(l||r)}}static{this.\u0275cmp=m({type:r,selectors:[["app-nextjs-optimization"]],standalone:!0,features:[s],decls:196,vars:8,consts:[[1,"container"],["label","Image Optimization"],[1,"tab-content"],[1,"info-box"],[1,"language-tsx"],["label","Font Optimization"],["label","Script Optimization"],["label","Bundle Analyzer"],["label","Code Splitting"],["label","Metadata"],["label","Performance Tips"],["label","Web Vitals"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"h1"),t(2,"Next.js Optimization"),e(),i(3,"p"),t(4,"Next.js provides built-in optimizations for images, fonts, scripts, and more to improve performance and user experience."),e(),i(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),t(9,"Image Component"),e(),i(10,"div",3)(11,"p")(12,"strong"),t(13,"next/image"),e(),t(14," automatically optimizes images with lazy loading, responsive sizes, and modern formats."),e(),i(15,"ul")(16,"li"),t(17,"Automatic WebP/AVIF format conversion"),e(),i(18,"li"),t(19,"Responsive image sizing"),e(),i(20,"li"),t(21,"Lazy loading by default"),e(),i(22,"li"),t(23,"Prevents Cumulative Layout Shift (CLS)"),e(),i(24,"li"),t(25,"On-demand optimization"),e(),i(26,"li"),t(27,"Priority loading for LCP images"),e()()(),i(28,"pre")(29,"code",4),t(30),e()()()(),i(31,"mat-tab",5)(32,"div",2)(33,"h2"),t(34,"Font Optimization"),e(),i(35,"div",3)(36,"p")(37,"strong"),t(38,"next/font"),e(),t(39," automatically optimizes and self-hosts fonts with zero layout shift."),e(),i(40,"ul")(41,"li"),t(42,"Automatic self-hosting of Google Fonts"),e(),i(43,"li"),t(44,"Zero layout shift with font-display: swap"),e(),i(45,"li"),t(46,"No external network requests"),e(),i(47,"li"),t(48,"Built-in font subsetting"),e(),i(49,"li"),t(50,"Local font support"),e(),i(51,"li"),t(52,"CSS variable support"),e()()(),i(53,"pre")(54,"code",4),t(55),e()()()(),i(56,"mat-tab",6)(57,"div",2)(58,"h2"),t(59,"Script Component"),e(),i(60,"div",3)(61,"p")(62,"strong"),t(63,"next/script"),e(),t(64," optimizes third-party script loading with custom strategies."),e(),i(65,"ul")(66,"li"),t(67,"Control loading priority"),e(),i(68,"li"),t(69,"beforeInteractive for critical scripts"),e(),i(70,"li"),t(71,"afterInteractive for analytics (default)"),e(),i(72,"li"),t(73,"lazyOnload for non-critical scripts"),e(),i(74,"li"),t(75,"Automatic deduplication"),e(),i(76,"li"),t(77,"Load callbacks"),e()()(),i(78,"pre")(79,"code",4),t(80),e()()()(),i(81,"mat-tab",7)(82,"div",2)(83,"h2"),t(84,"Bundle Analysis"),e(),i(85,"div",3)(86,"p"),t(87,"Analyze your bundle size to identify optimization opportunities."),e(),i(88,"ul")(89,"li"),t(90,"Visual treemap of bundle composition"),e(),i(91,"li"),t(92,"Identify large dependencies"),e(),i(93,"li"),t(94,"Find duplicate packages"),e(),i(95,"li"),t(96,"Separate server and client analysis"),e(),i(97,"li"),t(98,"Track bundle size over time"),e(),i(99,"li"),t(100,"Optimize imports"),e()()(),i(101,"pre")(102,"code",4),t(103),e()()()(),i(104,"mat-tab",8)(105,"div",2)(106,"h2"),t(107,"Code Splitting"),e(),i(108,"div",3)(109,"p"),t(110,"Use dynamic imports to split code and reduce initial bundle size."),e(),i(111,"ul")(112,"li"),t(113,"Dynamic imports with next/dynamic"),e(),i(114,"li"),t(115,"Component-level code splitting"),e(),i(116,"li"),t(117,"Conditional loading"),e(),i(118,"li"),t(119,"Loading states"),e(),i(120,"li"),t(121,"Disable SSR for client-only code"),e(),i(122,"li"),t(123,"Preload on interaction"),e()()(),i(124,"pre")(125,"code",4),t(126),e()()()(),i(127,"mat-tab",9)(128,"div",2)(129,"h2"),t(130,"Metadata & SEO"),e(),i(131,"div",3)(132,"p"),t(133,"Optimize metadata for better SEO and social sharing."),e(),i(134,"ul")(135,"li"),t(136,"Static and dynamic metadata"),e(),i(137,"li"),t(138,"Open Graph tags"),e(),i(139,"li"),t(140,"Twitter Card tags"),e(),i(141,"li"),t(142,"Robots meta tags"),e(),i(143,"li"),t(144,"Title templates"),e(),i(145,"li"),t(146,"generateMetadata for dynamic pages"),e()()(),i(147,"pre")(148,"code",4),t(149),e()()()(),i(150,"mat-tab",10)(151,"div",2)(152,"h2"),t(153,"Performance Best Practices"),e(),i(154,"div",3)(155,"p"),t(156,"General optimization techniques for Next.js applications."),e(),i(157,"ul")(158,"li"),t(159,"Use Server Components by default"),e(),i(160,"li"),t(161,"Implement Streaming and Suspense"),e(),i(162,"li"),t(163,"Parallel data fetching"),e(),i(164,"li"),t(165,"Optimize third-party scripts"),e(),i(166,"li"),t(167,"Proper caching strategies"),e(),i(168,"li"),t(169,"Code split heavy components"),e()()(),i(170,"pre")(171,"code",4),t(172),e()()()(),i(173,"mat-tab",11)(174,"div",2)(175,"h2"),t(176,"Web Vitals Monitoring"),e(),i(177,"div",3)(178,"p"),t(179,"Monitor Core Web Vitals to track and improve performance."),e(),i(180,"ul")(181,"li"),t(182,"useReportWebVitals hook"),e(),i(183,"li"),t(184,"FCP, LCP, CLS, FID, TTFB, INP"),e(),i(185,"li"),t(186,"Send to analytics services"),e(),i(187,"li"),t(188,"Track performance over time"),e(),i(189,"li"),t(190,"Identify performance regressions"),e(),i(191,"li"),t(192,"Optimize based on real user data"),e()()(),i(193,"pre")(194,"code",4),t(195),e()()()()()()),l&2&&(n(30),a(o.imageOptimization),n(25),a(o.fontOptimization),n(25),a(o.scriptOptimization),n(23),a(o.bundleAnalyzer),n(23),a(o.codeSplitting),n(23),a(o.metadata),n(23),a(o.performanceTips),n(23),a(o.webVitals))},dependencies:[c,d,p],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#000;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#f0f0f0;border-left:4px solid #000000;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#000}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#000}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#000}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#e0e0e0;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;color:#fff;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:14px}p[_ngcontent-%COMP%]{line-height:1.6;color:#333}"]})}}return r})();export{y as NextjsOptimizationComponent};
