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
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-N7AAI6XN.js";

// src/app/components/angular/learn-webpack/learn-webpack.component.ts
var Prism = __toESM(require_prism());
function LearnWebpackComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3");
    \u0275\u0275text(2, "Webpack in Angular");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Webpack is a static module bundler for modern JavaScript applications. Angular CLI uses Webpack under the hood to bundle your application code, assets, and dependencies into optimized bundles for deployment. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "What Webpack Does");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "Module Bundling:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Combines multiple files into optimized bundles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "Code Transformation:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Converts TypeScript to JavaScript, SCSS to CSS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "Asset Management:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Handles images, fonts, and other assets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "Code Optimization:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Minifies, tree-shakes, and compresses code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li")(25, "strong");
    \u0275\u0275text(26, "Development Server:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Provides hot module replacement for dev");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "h4");
    \u0275\u0275text(29, "Webpack Core Concepts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ul")(31, "li");
    \u0275\u0275text(32, "\u{1F3AF} ");
    \u0275\u0275elementStart(33, "strong");
    \u0275\u0275text(34, "Entry:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Starting point of your application (main.ts)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "li");
    \u0275\u0275text(37, "\u{1F4E6} ");
    \u0275\u0275elementStart(38, "strong");
    \u0275\u0275text(39, "Output:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " Bundled files in dist/ folder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "li");
    \u0275\u0275text(42, "\u{1F504} ");
    \u0275\u0275elementStart(43, "strong");
    \u0275\u0275text(44, "Loaders:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, " Transform files (TypeScript, SASS, etc.)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "li");
    \u0275\u0275text(47, "\u{1F50C} ");
    \u0275\u0275elementStart(48, "strong");
    \u0275\u0275text(49, "Plugins:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, " Optimize bundles, inject scripts, minify");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "li");
    \u0275\u0275text(52, "\u{1F4CA} ");
    \u0275\u0275elementStart(53, "strong");
    \u0275\u0275text(54, "Mode:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, " Development or production configuration");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "h4");
    \u0275\u0275text(57, "Why Angular Uses Webpack");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "ul")(59, "li");
    \u0275\u0275text(60, "Powerful ecosystem with extensive plugin support");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "li");
    \u0275\u0275text(62, "Excellent code splitting and lazy loading capabilities");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "li");
    \u0275\u0275text(64, "Tree shaking for removing unused code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "li");
    \u0275\u0275text(66, "Hot Module Replacement for better development experience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "li");
    \u0275\u0275text(68, "Mature and battle-tested in production environments");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 11)(70, "p");
    \u0275\u0275text(71, "Webpack configuration and examples are handled through angular.json and Angular CLI build system");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 12)(73, "h4");
    \u0275\u0275text(74, "\u{1F4A1} Angular CLI Abstraction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "p");
    \u0275\u0275text(76, " Angular CLI abstracts most Webpack configuration, making it easier to get started. Most configuration is done through angular.json, but you can customize Webpack config for advanced use cases. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 13)(78, "h4");
    \u0275\u0275text(79, "\u{1F3AF} Understanding Bundles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "ul")(81, "li")(82, "strong");
    \u0275\u0275text(83, "main.js:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(84, " Your application code and components");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "li")(86, "strong");
    \u0275\u0275text(87, "polyfills.js:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(88, " Browser compatibility polyfills");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "li")(90, "strong");
    \u0275\u0275text(91, "runtime.js:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(92, " Webpack module loading logic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "li")(94, "strong");
    \u0275\u0275text(95, "styles.css:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(96, " Compiled global stylesheets");
    \u0275\u0275elementEnd()()()();
  }
}
function LearnWebpackComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3");
    \u0275\u0275text(2, "Optimizing Bundle Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Bundle optimization is crucial for application performance. Smaller bundles load faster, improving user experience and SEO rankings. Angular CLI provides several optimization strategies. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Optimization Strategies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "Tree Shaking:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Remove unused code automatically");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "Minification:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Compress JavaScript and CSS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "Code Splitting:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Split code into smaller chunks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "Lazy Loading:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Load features on demand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li")(25, "strong");
    \u0275\u0275text(26, "Asset Optimization:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Compress images and fonts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "h4");
    \u0275\u0275text(29, "Bundle Size Budgets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ul")(31, "li");
    \u0275\u0275text(32, "Set maximum sizes for different bundle types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "li");
    \u0275\u0275text(34, "Build fails or warns when budgets are exceeded");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "li");
    \u0275\u0275text(36, "Prevents accidental bundle size increases");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "li");
    \u0275\u0275text(38, "Configurable per bundle type (initial, lazy, etc.)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "h4");
    \u0275\u0275text(40, "Analyzing Bundle Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "ul")(42, "li");
    \u0275\u0275text(43, "\u{1F4CA} Use webpack-bundle-analyzer for visual analysis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "li");
    \u0275\u0275text(45, "\u{1F50D} Identify large dependencies taking up space");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "li");
    \u0275\u0275text(47, "\u{1F4C8} Track bundle size changes over time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "li");
    \u0275\u0275text(49, "\u{1F3AF} Find optimization opportunities");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 11)(51, "p");
    \u0275\u0275text(52, "Bundle optimization settings can be configured in angular.json under build configuration options including budgets, optimization flags, and source maps");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 12)(54, "h4");
    \u0275\u0275text(55, "\u{1F4A1} Bundle Size Best Practices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "p");
    \u0275\u0275text(57, " Aim to keep your initial bundle under 500KB (gzipped). Larger bundles significantly impact load time on slower networks. Use lazy loading for features not needed on initial load. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 14)(59, "h4");
    \u0275\u0275text(60, "\u26A0\uFE0F Common Bundle Size Issues");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "ul")(62, "li");
    \u0275\u0275text(63, "Importing entire libraries instead of specific modules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "li");
    \u0275\u0275text(65, "Not lazy loading rarely-used features");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "li");
    \u0275\u0275text(67, "Including development dependencies in production");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "li");
    \u0275\u0275text(69, "Large image assets not optimized");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(70, "div", 13)(71, "h4");
    \u0275\u0275text(72, "\u{1F3AF} Quick Wins");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "ul")(74, "li");
    \u0275\u0275text(75, "Replace moment.js with date-fns (10x smaller)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "li");
    \u0275\u0275text(77, "Use lodash-es with tree-shaking, not lodash");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "li");
    \u0275\u0275text(79, "Import specific RxJS operators, not entire library");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "li");
    \u0275\u0275text(81, "Enable production mode optimizations");
    \u0275\u0275elementEnd()()()();
  }
}
function LearnWebpackComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3");
    \u0275\u0275text(2, "Code Splitting Strategies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Code splitting divides your application into smaller chunks that can be loaded on demand. This reduces initial bundle size and improves load times by only loading code when needed. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Types of Code Splitting");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "Route-based:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Split by lazy-loaded routes (most common)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "Component-based:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Lazy load heavy components");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "Vendor splitting:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Separate third-party libraries");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "Dynamic imports:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Load code programmatically");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "h4");
    \u0275\u0275text(25, "Preloading Strategies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ul")(27, "li")(28, "strong");
    \u0275\u0275text(29, "NoPreloading:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " Only load when navigated (default for lazy)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "li")(32, "strong");
    \u0275\u0275text(33, "PreloadAllModules:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " Load all lazy modules after initial load");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "li")(36, "strong");
    \u0275\u0275text(37, "Custom Strategy:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " Selective preloading based on conditions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "h4");
    \u0275\u0275text(40, "Benefits of Code Splitting");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "ul")(42, "li");
    \u0275\u0275text(43, "\u26A1 Faster initial page load");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "li");
    \u0275\u0275text(45, "\u{1F4E6} Smaller initial bundle size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "li");
    \u0275\u0275text(47, "\u{1F3AF} Better caching (unchanged chunks stay cached)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "li");
    \u0275\u0275text(49, "\u{1F680} Improved perceived performance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "li");
    \u0275\u0275text(51, "\u{1F4F1} Better for mobile and slow networks");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 11)(53, "p");
    \u0275\u0275text(54, "Code splitting is implemented through lazy-loaded routes in app.routes.ts and dynamic imports for components");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 12)(56, "h4");
    \u0275\u0275text(57, "\u{1F4A1} When to Split Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "p");
    \u0275\u0275text(59, " Split code for features used by a subset of users (admin panels, settings) or rarely accessed features. Don't over-split code that's needed immediately. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 13)(61, "h4");
    \u0275\u0275text(62, "\u{1F3AF} Splitting Best Practices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "ul")(64, "li");
    \u0275\u0275text(65, "Lazy load entire feature modules, not individual components");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "li");
    \u0275\u0275text(67, "Use preloading for frequently accessed routes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "li");
    \u0275\u0275text(69, "Monitor chunk sizes - aim for 50-200KB per chunk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "li");
    \u0275\u0275text(71, "Consider network round-trip costs vs bundle size");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(72, "div", 14)(73, "h4");
    \u0275\u0275text(74, "\u26A0\uFE0F Over-splitting Warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "p");
    \u0275\u0275text(76, " Too many small chunks can hurt performance due to HTTP overhead. Each chunk requires a separate network request. Balance chunk count with chunk size. ");
    \u0275\u0275elementEnd()()();
  }
}
function LearnWebpackComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3");
    \u0275\u0275text(2, "Tree Shaking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Tree shaking eliminates unused code from your bundle. It's a form of dead code elimination that relies on ES6 module syntax to determine which exports are used and which can be safely removed. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "How Tree Shaking Works");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "Static Analysis:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Analyzes import/export statements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "Mark Phase:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Marks used exports in dependency graph");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "Sweep Phase:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Removes unmarked (unused) code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "Optimization:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Enabled automatically in production builds");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "h4");
    \u0275\u0275text(25, "Requirements for Tree Shaking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ul")(27, "li");
    \u0275\u0275text(28, "\u2705 Use ES6 import/export syntax");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "li");
    \u0275\u0275text(30, "\u2705 Production mode build");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "li");
    \u0275\u0275text(32, "\u2705 Side-effect free code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "li");
    \u0275\u0275text(34, "\u2705 Proper package.json configuration");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "h4");
    \u0275\u0275text(36, "Tree Shaking Benefits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "ul")(38, "li");
    \u0275\u0275text(39, "\u{1F333} Removes unused library code automatically");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "li");
    \u0275\u0275text(41, "\u{1F4C9} Significantly reduces bundle size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "li");
    \u0275\u0275text(43, "\u26A1 Faster load times and better performance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "li");
    \u0275\u0275text(45, "\u{1F527} Works automatically in production builds");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 11)(47, "p");
    \u0275\u0275text(48, "Tree shaking is automatically enabled in production builds and works best with ES6 modules and providedIn services");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 12)(50, "h4");
    \u0275\u0275text(51, "\u{1F4A1} Side Effects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "p");
    \u0275\u0275text(53, " Code with side effects (like setting global variables or modifying prototypes) can't be safely removed. Mark side-effect free packages in package.json with ");
    \u0275\u0275elementStart(54, "code");
    \u0275\u0275text(55, '"sideEffects": false');
    \u0275\u0275elementEnd();
    \u0275\u0275text(56, ". ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 13)(58, "h4");
    \u0275\u0275text(59, "\u{1F3AF} Maximizing Tree Shaking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "ul")(61, "li");
    \u0275\u0275text(62, "Import specific items: ");
    \u0275\u0275elementStart(63, "code");
    \u0275\u0275text(64, "import { map } from 'rxjs/operators'");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "li");
    \u0275\u0275text(66, "Avoid namespace imports: ");
    \u0275\u0275elementStart(67, "code");
    \u0275\u0275text(68, "import * as rxjs from 'rxjs'");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "li");
    \u0275\u0275text(70, "Use providedIn: 'root' for services (tree-shakeable)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "li");
    \u0275\u0275text(72, "Mark libraries as side-effect free when possible");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "div", 14)(74, "h4");
    \u0275\u0275text(75, "\u26A0\uFE0F Tree Shaking Limitations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "ul")(77, "li");
    \u0275\u0275text(78, "Doesn't work with CommonJS modules (require/exports)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "li");
    \u0275\u0275text(80, "Dynamic imports with variables prevent tree shaking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "li");
    \u0275\u0275text(82, "Side effects can prevent code removal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "li");
    \u0275\u0275text(84, "Some libraries aren't tree-shakeable");
    \u0275\u0275elementEnd()()()();
  }
}
function LearnWebpackComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3");
    \u0275\u0275text(2, "Custom Build Configuration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " While Angular CLI handles most Webpack configuration, you can customize builds for advanced scenarios using custom webpack builders or angular.json configuration options. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Configuration Options");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "angular.json:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Standard CLI configuration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "Custom Webpack Config:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Advanced Webpack customization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "Build Environments:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Different configs for dev/prod/staging");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "Builders:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Custom build processes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "h4");
    \u0275\u0275text(25, "Common Customizations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ul")(27, "li");
    \u0275\u0275text(28, "\u{1F527} Adding custom Webpack plugins");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "li");
    \u0275\u0275text(30, "\u{1F4DD} Configuring custom loaders for file types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "li");
    \u0275\u0275text(32, "\u{1F517} Setting up resolve aliases for imports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "li");
    \u0275\u0275text(34, "\u{1F310} Configuring dev server proxy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "li");
    \u0275\u0275text(36, "\u{1F4E6} Custom bundle splitting strategies");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "h4");
    \u0275\u0275text(38, "When to Customize Webpack");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "ul")(40, "li");
    \u0275\u0275text(41, "Need to support custom file types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "li");
    \u0275\u0275text(43, "Integration with specialized build tools");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "li");
    \u0275\u0275text(45, "Advanced optimization requirements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "li");
    \u0275\u0275text(47, "Custom asset processing pipelines");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "li");
    \u0275\u0275text(49, "Legacy code migration needs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 11)(51, "p");
    \u0275\u0275text(52, "Build configuration examples include custom webpack builders, angular.json settings, and environment-specific configurations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 12)(54, "h4");
    \u0275\u0275text(55, "\u{1F4A1} Custom Webpack Builder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "p");
    \u0275\u0275text(57, " Use ");
    \u0275\u0275elementStart(58, "code");
    \u0275\u0275text(59, "@angular-builders/custom-webpack");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, " to extend Angular CLI's Webpack configuration without ejecting. This allows you to add custom loaders, plugins, and other Webpack features. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 14)(62, "h4");
    \u0275\u0275text(63, "\u26A0\uFE0F Configuration Cautions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "ul")(65, "li");
    \u0275\u0275text(66, "Custom configs can break on Angular CLI updates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "li");
    \u0275\u0275text(68, "Thoroughly test custom configurations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "li");
    \u0275\u0275text(70, "Document why customization is needed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "li");
    \u0275\u0275text(72, "Consider if Angular CLI options are sufficient first");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "div", 13)(74, "h4");
    \u0275\u0275text(75, "\u{1F3AF} Configuration Tips");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "ul")(77, "li");
    \u0275\u0275text(78, "Start with angular.json before custom Webpack");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "li");
    \u0275\u0275text(80, "Use merge strategies to combine configurations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "li");
    \u0275\u0275text(82, "Test custom configs in CI/CD pipeline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "li");
    \u0275\u0275text(84, "Keep custom config minimal and focused");
    \u0275\u0275elementEnd()()()();
  }
}
function LearnWebpackComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3");
    \u0275\u0275text(2, "Production Build Optimizations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Production builds apply aggressive optimizations to reduce bundle size, improve load times, and ensure the best possible performance for end users. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Automatic Optimizations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "AOT Compilation:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Ahead-of-time compiles templates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "Build Optimizer:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Angular-specific optimizations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "Minification:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Removes whitespace and shortens names");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "Tree Shaking:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Removes unused code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li")(25, "strong");
    \u0275\u0275text(26, "Hashing:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Adds hashes to filenames for caching");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "h4");
    \u0275\u0275text(29, "Additional Optimizations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ul")(31, "li");
    \u0275\u0275text(32, "\u{1F5DC}\uFE0F ");
    \u0275\u0275elementStart(33, "strong");
    \u0275\u0275text(34, "Compression:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Gzip/Brotli compression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "li");
    \u0275\u0275text(37, "\u{1F4BE} ");
    \u0275\u0275elementStart(38, "strong");
    \u0275\u0275text(39, "Service Worker:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " Offline caching with PWA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "li");
    \u0275\u0275text(42, "\u{1F4F1} ");
    \u0275\u0275elementStart(43, "strong");
    \u0275\u0275text(44, "Differential Loading:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, " ES5 and ES2015+ bundles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "li");
    \u0275\u0275text(47, "\u{1F3A8} ");
    \u0275\u0275elementStart(48, "strong");
    \u0275\u0275text(49, "Critical CSS:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, " Inline critical styles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "li");
    \u0275\u0275text(52, "\u{1F5BC}\uFE0F ");
    \u0275\u0275elementStart(53, "strong");
    \u0275\u0275text(54, "Image Optimization:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, " Compress and lazy-load images");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "h4");
    \u0275\u0275text(57, "Caching Strategy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "ul")(59, "li");
    \u0275\u0275text(60, "Content hashing for long-term caching");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "li");
    \u0275\u0275text(62, "Service worker for app shell caching");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "li");
    \u0275\u0275text(64, "HTTP cache headers configuration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "li");
    \u0275\u0275text(66, "CDN integration for static assets");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 11)(68, "h4");
    \u0275\u0275text(69, "\u{1F4DD} Configuration Note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "p");
    \u0275\u0275text(71, "Production builds automatically enable AOT compilation, build optimizer, minification, and output hashing.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "p");
    \u0275\u0275text(73, "Configure in angular.json under projects > yourApp > architect > build > configurations > production");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 15)(75, "h4");
    \u0275\u0275text(76, "\u2705 Production Checklist");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "ul")(78, "li")(79, "strong");
    \u0275\u0275text(80, "Enable AOT:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(81, " Compile templates ahead of time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "li")(83, "strong");
    \u0275\u0275text(84, "Use Build Optimizer:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(85, " Angular-specific optimizations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "li")(87, "strong");
    \u0275\u0275text(88, "Enable Compression:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(89, " Configure server for gzip/brotli");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "li")(91, "strong");
    \u0275\u0275text(92, "Set Cache Headers:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(93, " Long-term caching for hashed files");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "li")(95, "strong");
    \u0275\u0275text(96, "Add Service Worker:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(97, " Offline support and caching");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "li")(99, "strong");
    \u0275\u0275text(100, "Monitor Bundle Size:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(101, " Set up CI checks");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(102, "div", 12)(103, "h4");
    \u0275\u0275text(104, "\u{1F4A1} Differential Loading");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "p");
    \u0275\u0275text(106, " Angular CLI automatically generates two sets of bundles: modern ES2015+ for newer browsers and ES5 for older browsers. Browsers automatically load the appropriate version. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "div", 13)(108, "h4");
    \u0275\u0275text(109, "\u{1F3AF} Performance Monitoring");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "ul")(111, "li");
    \u0275\u0275text(112, "Use Lighthouse for performance audits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "li");
    \u0275\u0275text(114, "Monitor Core Web Vitals (LCP, FID, CLS)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "li");
    \u0275\u0275text(116, "Set up bundle size tracking in CI/CD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "li");
    \u0275\u0275text(118, "Use Real User Monitoring (RUM) tools");
    \u0275\u0275elementEnd()()()();
  }
}
function LearnWebpackComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3");
    \u0275\u0275text(2, "Webpack Performance Tips");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Optimize both build-time performance (faster development) and runtime performance (faster app) with these proven strategies and best practices. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Build Performance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "Incremental Builds:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Rebuild only changed files");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "Build Cache:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Use Angular CLI's persistent cache");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "Parallel Processing:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Leverage multi-core processors");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "Reduce Checks:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Disable unnecessary type checking in dev");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "h4");
    \u0275\u0275text(25, "Runtime Performance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ul")(27, "li")(28, "strong");
    \u0275\u0275text(29, "OnPush Detection:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " Optimize change detection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "li")(32, "strong");
    \u0275\u0275text(33, "Lazy Loading:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " Load features on demand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "li")(36, "strong");
    \u0275\u0275text(37, "Virtual Scrolling:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " Handle large lists efficiently");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "li")(40, "strong");
    \u0275\u0275text(41, "Pure Pipes:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, " Avoid unnecessary recalculations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "li")(44, "strong");
    \u0275\u0275text(45, "TrackBy Functions:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, " Optimize ngFor rendering");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "h4");
    \u0275\u0275text(48, "Network Performance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "ul")(50, "li");
    \u0275\u0275text(51, "\u{1F310} HTTP caching with shareReplay");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "li");
    \u0275\u0275text(53, "\u{1F4E1} Preload critical resources");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "li");
    \u0275\u0275text(55, '\u{1F5BC}\uFE0F Lazy load images with loading="lazy"');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "li");
    \u0275\u0275text(57, "\u{1F4BE} Service worker for offline support");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "li");
    \u0275\u0275text(59, "\u26A1 CDN for static assets");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 11)(61, "p");
    \u0275\u0275text(62, "Performance optimization examples include OnPush change detection, lazy loading strategies, and Angular-specific build optimizations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 15)(64, "h4");
    \u0275\u0275text(65, "\u2705 Performance Best Practices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "ul")(67, "li")(68, "strong");
    \u0275\u0275text(69, "Measure First:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(70, " Use profiling before optimizing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "li")(72, "strong");
    \u0275\u0275text(73, "Lazy Load Routes:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(74, " Split code by feature");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "li")(76, "strong");
    \u0275\u0275text(77, "OnPush Everywhere:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(78, " Where possible, use OnPush");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "li")(80, "strong");
    \u0275\u0275text(81, "Avoid Memory Leaks:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(82, " Unsubscribe from observables");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "li")(84, "strong");
    \u0275\u0275text(85, "Cache API Calls:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(86, " Use shareReplay for shared data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "li")(88, "strong");
    \u0275\u0275text(89, "Monitor Bundle Size:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(90, " Set budgets and track growth");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(91, "div", 12)(92, "h4");
    \u0275\u0275text(93, "\u{1F4A1} Development vs Production");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "p");
    \u0275\u0275text(95, " Balance build speed in development with runtime performance in production. Use fast incremental builds in dev, and aggressive optimizations in production. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "div", 13)(97, "h4");
    \u0275\u0275text(98, "\u{1F3AF} Quick Performance Wins");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "ul")(100, "li");
    \u0275\u0275text(101, "Enable persistent build cache (automatic in Angular 13+)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "li");
    \u0275\u0275text(103, "Use OnPush change detection strategy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "li");
    \u0275\u0275text(105, "Lazy load non-critical routes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "li");
    \u0275\u0275text(107, "Remove unused dependencies with npm dedupe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "li");
    \u0275\u0275text(109, "Use async pipe in templates (auto-unsubscribe)");
    \u0275\u0275elementEnd()()()();
  }
}
function LearnWebpackComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3");
    \u0275\u0275text(2, "Troubleshooting Common Webpack Issues");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Learn to identify and resolve common Webpack-related issues that occur during Angular development and build processes. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Common Error Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "Module Resolution:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Can't find or resolve modules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "Memory Issues:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Heap out of memory errors");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "Build Failures:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Production build errors");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "Performance:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Slow build times");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li")(25, "strong");
    \u0275\u0275text(26, "Runtime Issues:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Code works in dev, fails in prod");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "h4");
    \u0275\u0275text(29, "Debugging Strategies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ul")(31, "li");
    \u0275\u0275text(32, "\u{1F50D} Use verbose logging: ");
    \u0275\u0275elementStart(33, "code");
    \u0275\u0275text(34, "ng build --verbose");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "li");
    \u0275\u0275text(36, "\u{1F4CA} Analyze bundles with webpack-bundle-analyzer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "li");
    \u0275\u0275text(38, "\u{1F9EA} Test production builds locally");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "li");
    \u0275\u0275text(40, "\u{1F50E} Check browser console for runtime errors");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "li");
    \u0275\u0275text(42, "\u{1F4DD} Enable source maps for debugging");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "h4");
    \u0275\u0275text(44, "Prevention Tips");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "ul")(46, "li");
    \u0275\u0275text(47, "Set up CI/CD to catch issues early");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "li");
    \u0275\u0275text(49, "Configure bundle size budgets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "li");
    \u0275\u0275text(51, "Regular dependency updates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "li");
    \u0275\u0275text(53, "Code reviews for import patterns");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "li");
    \u0275\u0275text(55, "Monitor build performance metrics");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 11)(57, "p");
    \u0275\u0275text(58, "Common issues include module resolution errors, memory issues, and build failures - solutions typically involve cache clearing, dependency updates, and configuration adjustments");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 14)(60, "h4");
    \u0275\u0275text(61, "\u26A0\uFE0F Common Pitfalls");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "ul")(63, "li");
    \u0275\u0275text(64, "Importing entire libraries instead of specific modules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "li");
    \u0275\u0275text(66, "Forgetting to update package-lock.json");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "li");
    \u0275\u0275text(68, "Not testing production builds before deployment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "li");
    \u0275\u0275text(70, "Ignoring bundle size budget warnings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "li");
    \u0275\u0275text(72, "Using outdated or incompatible dependencies");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "div", 12)(74, "h4");
    \u0275\u0275text(75, "\u{1F4A1} When Things Go Wrong");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "p");
    \u0275\u0275text(77, " Start with the basics: clear caches, delete node_modules and reinstall, check for conflicting dependencies. Many issues are resolved by ensuring a clean build environment. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 13)(79, "h4");
    \u0275\u0275text(80, "\u{1F3AF} Debugging Workflow");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "ol")(82, "li");
    \u0275\u0275text(83, "Read the error message carefully");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "li");
    \u0275\u0275text(85, "Check Angular/Webpack version compatibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "li");
    \u0275\u0275text(87, "Clear caches and rebuild");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "li");
    \u0275\u0275text(89, "Test with minimal reproduction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "li");
    \u0275\u0275text(91, "Check GitHub issues for known problems");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "li");
    \u0275\u0275text(93, "Enable verbose logging for details");
    \u0275\u0275elementEnd()()()();
  }
}
var LearnWebpackComponent = class _LearnWebpackComponent {
  constructor() {
    this.introduction = `// What is Webpack in Angular?
// Webpack is a powerful module bundler that Angular CLI uses under the hood
// It transforms, bundles, and packages your source code and assets

// Angular CLI abstracts Webpack configuration, but understanding it helps with:
// - Custom build configurations
// - Performance optimization
// - Troubleshooting build issues
// - Advanced customization

// Key Webpack Concepts in Angular:
// 1. Entry Points: Main.ts is the entry for Angular apps
// 2. Loaders: Transform files (TypeScript \u2192 JavaScript)
// 3. Plugins: Optimize bundles, inject scripts, minify code
// 4. Output: Bundled files in dist/ folder

// Angular Build Process:
// Source Files \u2192 TypeScript Compiler \u2192 Webpack Bundler \u2192 Optimized Bundles

// Build Commands:
// ng build              // Development build
// ng build --configuration production  // Production build with optimizations
// ng serve              // Development server with live reload

// Generated Bundles:
// - main.js: Your application code
// - polyfills.js: Browser compatibility code
// - runtime.js: Webpack runtime and module loading logic
// - vendor.js: Third-party libraries (in older configs)
// - styles.css: Compiled stylesheets

// Production Build Optimizations:
// optimization: scripts, styles, fonts - minify all assets
// outputHashing: "all" - add hash to filenames for cache busting
// sourceMap: false - disable source maps for smaller bundles
// namedChunks: false - use numeric IDs instead of names
// aot: true - Ahead-of-Time compilation
// buildOptimizer: true - Angular-specific optimizations`;
    this.bundleOptimization = `// angular.json - Bundle Optimization Configuration
// Configuration in projects > my-app > architect > build > configurations > production

Key production settings:
- optimization: true (enables all optimizations)
- outputHashing: "all" (cache busting)
- sourceMap: false (smaller bundles)
- namedChunks: false (numeric IDs)
- extractLicenses: true (separate license file)
- vendorChunk: false (better caching)
- buildOptimizer: true (Angular optimizations)

Budget configuration to warn/error on large bundles:
- type: "initial" - maximumWarning: "500kb", maximumError: "1mb"
- type: "anyComponentStyle" - maximumWarning: "6kb", maximumError: "10kb"

// Analyzing Bundle Size
// Install: npm install --save-dev webpack-bundle-analyzer
// Add script to package.json:
"analyze": "ng build --stats-json && webpack-bundle-analyzer dist/my-app/stats.json"

// Bundle Size Reduction Techniques:

// 1. Tree Shaking (automatic with production builds)
// Only import what you need
import &#123; map, filter &#125; from 'rxjs/operators'; // \u2705 Good
// import * as operators from 'rxjs/operators';  // \u274C Bad - imports everything

// 2. Lazy Loading Routes
const routes: Routes = [
  &#123;
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  &#125;
];

// 3. Lazy Load Heavy Libraries
// Instead of:
import * as moment from 'moment';

// Use dynamic import:
async loadMoment() &#123;
  const moment = await import('moment');
  return moment.default();
&#125;

// 4. Use Lighter Alternatives
// moment (231 KB) \u2192 date-fns (15 KB)
// lodash (72 KB) \u2192 lodash-es with tree-shaking
// rxjs (full) \u2192 import specific operators

// 5. Optimize Images and Assets
&#123;
  "assets": [
    &#123;
      "glob": "**/*.&#123;png,jpg,svg&#125;",
      "input": "src/assets/",
      "output": "/assets/",
      "optimization": true  // Optimize images during build
    &#125;
  ]
&#125;

// 6. Remove Unused CSS
// Angular automatically removes unused component styles
// For global styles, use PurgeCSS

// 7. Enable Compression
// Configure server to serve gzip/brotli compressed files
// Angular CLI generates .gz files with --optimization`;
    this.codeSplitting = `// Code Splitting Strategies in Angular

// 1. Route-based Code Splitting (Lazy Loading)
// This is the primary code splitting strategy in Angular
const routes: Routes = [
  &#123; path: '', component: HomeComponent &#125;,
  &#123;
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module')
      .then(m => m.DashboardModule)
  &#125;,
  &#123;
    path: 'profile',
    loadChildren: () => import('./profile/profile.module')
      .then(m => m.ProfileModule)
  &#125;
];

// Result: Separate chunks for each lazy-loaded module
// - main.js (core app)
// - dashboard-dashboard-module.js (loaded on demand)
// - profile-profile-module.js (loaded on demand)

// 2. Component-level Code Splitting
// Standalone components can be lazy-loaded
const routes: Routes = [
  &#123;
    path: 'admin',
    loadComponent: () => import('./admin/admin.component')
      .then(c => c.AdminComponent)
  &#125;
];

// 3. Preloading Strategies
import &#123; PreloadAllModules, RouterModule &#125; from '@angular/router';

@NgModule(&#123;
  imports: [
    RouterModule.forRoot(routes, &#123;
      preloadingStrategy: PreloadAllModules  // Preload all lazy modules
    &#125;)
  ]
&#125;)
export class AppRoutingModule &#123;&#125;

// Custom Preloading Strategy
import &#123; PreloadingStrategy, Route &#125; from '@angular/router';
import &#123; Observable, of &#125; from 'rxjs';

export class CustomPreloadingStrategy implements PreloadingStrategy &#123;
  preload(route: Route, load: () => Observable<any>): Observable<any> &#123;
    // Only preload routes marked with data.preload = true
    return route.data?.['preload'] ? load() : of(null);
  &#125;
&#125;

const routes: Routes = [
  &#123;
    path: 'important',
    loadChildren: () => import('./important/important.module'),
    data: &#123; preload: true &#125;  // This will be preloaded
  &#125;,
  &#123;
    path: 'rarely-used',
    loadChildren: () => import('./rarely/rarely.module')
    // This won't be preloaded
  &#125;
];

// 4. Vendor Chunk Splitting (legacy)
// In older Angular versions, configure in angular.json:
&#123;
  "optimization": &#123;
    "scripts": true
  &#125;,
  "vendorChunk": true,  // Split vendor libraries
  "commonChunk": true   // Extract common code
&#125;

// 5. Manual Code Splitting with Dynamic Imports
export class HeavyFeatureComponent &#123;
  async loadHeavyLibrary() &#123;
    // Load library only when needed
    const &#123; default: Chart &#125; = await import('chart.js');
    this.initChart(Chart);
  &#125;
  
  async loadHeavyComponent() &#123;
    // Dynamically load component
    const &#123; HeavyComponent &#125; = await import('./heavy.component');
    // Manually create component
  &#125;
&#125;

// 6. Shared Chunks Configuration
// Webpack will automatically create shared chunks for code used in multiple places
// Configure in angular.json for fine-tuning:
&#123;
  "optimization": &#123;
    "scripts": &#123;
      "minify": true,
      "inlineCritical": true
    &#125;,
    "styles": &#123;
      "minify": true,
      "inlineCritical": true
    &#125;
  &#125;
&#125;

// Best Practices:
// \u2705 Use lazy loading for feature modules
// \u2705 Keep main bundle under 500KB
// \u2705 Preload critical routes after initial load
// \u2705 Monitor bundle sizes with budgets
// \u274C Don't over-split (too many requests hurt performance)
// \u274C Don't lazy-load immediately needed features`;
    this.treeShaking = `// Tree Shaking in Angular

// Tree shaking removes unused code from the final bundle
// It's enabled automatically in production builds

// How Tree Shaking Works:
// 1. Code Analysis: Webpack analyzes import/export statements
// 2. Dead Code Detection: Identifies unused exports
// 3. Elimination: Removes unused code from bundle

// ===== WRITING TREE-SHAKEABLE CODE =====

// \u2705 Use ES6 Imports/Exports
export class UserService &#123; &#125;
import &#123; UserService &#125; from './user.service';

// \u274C Avoid require() - not tree-shakeable
const UserService = require('./user.service');

// \u2705 Import Specific Items
import &#123; map, filter &#125; from 'rxjs/operators';
import &#123; HttpClient &#125; from '@angular/common/http';

// \u274C Avoid Namespace Imports
import * as rxjs from 'rxjs';  // Imports everything!
import * as _ from 'lodash';    // Imports entire library!

// ===== ANGULAR-SPECIFIC TREE SHAKING =====

// 1. Providable Services (Tree-shakeable)
@Injectable(&#123;
  providedIn: 'root'  // Tree-shakeable if unused
&#125;)
export class OptionalService &#123;
  // If no component injects this, it won't be in bundle
&#125;

// 2. Standalone Components (Tree-shakeable)
@Component(&#123;
  selector: 'app-feature',
  standalone: true,
  imports: [CommonModule]  // Only imports what's used
&#125;)
export class FeatureComponent &#123;&#125;

// ===== LIBRARY-SPECIFIC TREE SHAKING =====

// RxJS - Use Pipeable Operators
import &#123; map, filter, take &#125; from 'rxjs/operators';

source$.pipe(
  map(x => x * 2),
  filter(x => x > 10),
  take(5)
).subscribe();

// Lodash-ES - Import Specific Functions
import map from 'lodash-es/map';
import filter from 'lodash-es/filter';
// NOT: import _ from 'lodash';

// Angular Material - Import Specific Modules
import &#123; MatButtonModule &#125; from '@angular/material/button';
import &#123; MatCardModule &#125; from '@angular/material/card';
// NOT: import &#123; MaterialModule &#125; from '@angular/material';

// ===== SIDE EFFECTS AND TREE SHAKING =====

// Mark side-effect-free code in package.json
&#123;
  "name": "my-library",
  "sideEffects": false  // Entire package is side-effect free
&#125;

// Or specify files with side effects:
&#123;
  "sideEffects": [
    "*.css",
    "*.scss",
    "src/polyfills.ts"
  ]
&#125;

// ===== VERIFYING TREE SHAKING =====

// 1. Build with source maps and analyze
ng build --source-map --configuration production

// 2. Check bundle sizes
ls -lh dist/my-app/*.js

// 3. Use webpack-bundle-analyzer
npm run analyze

// 4. Search for unused code in bundle
// Look for dead code in main.js

// ===== COMMON TREE-SHAKING ISSUES =====

// Issue 1: Dynamic Property Access
// \u274C This prevents tree shaking
const feature = features['featureName'];

// \u2705 Use static imports
import &#123; featureName &#125; from './features';

// Issue 2: Export All Pattern
// \u274C Barrel exports can prevent tree shaking
export * from './module-a';
export * from './module-b';

// \u2705 Explicit exports
export &#123; FeatureA &#125; from './feature-a';
export &#123; FeatureB &#125; from './feature-b';

// Issue 3: Side Effects in Initialization
// \u274C This code always runs
export const config = initializeConfig();  // Side effect!

// \u2705 Lazy initialization
let config: Config;
export function getConfig(): Config &#123;
  if (!config) &#123;
    config = initializeConfig();
  &#125;
  return config;
&#125;

// Best Practices:
// \u2705 Use providedIn: 'root' for services
// \u2705 Import specific items, not namespaces
// \u2705 Mark libraries as side-effect free
// \u2705 Use Angular's standalone components
// \u2705 Verify tree shaking with bundle analysis
// \u274C Avoid dynamic imports with variables
// \u274C Avoid export * patterns in barrel files`;
    this.buildConfiguration = `// Custom Webpack Configuration in Angular

// Angular CLI 8+ uses angular.json for most config
// For advanced customization, use @angular-builders/custom-webpack

// 1. Install custom webpack builder
// npm install --save-dev @angular-builders/custom-webpack

// 2. Update angular.json
&#123;
  "architect": &#123;
    "build": &#123;
      "builder": "@angular-builders/custom-webpack:browser",
      "options": &#123;
        "customWebpackConfig": &#123;
          "path": "./custom-webpack.config.js",
          "mergeStrategies": &#123; "externals": "replace" &#125;
        &#125;
      &#125;
    &#125;,
    "serve": &#123;
      "builder": "@angular-builders/custom-webpack:dev-server"
    &#125;
  &#125;
&#125;

// 3. Create custom-webpack.config.js
module.exports = &#123;
  // Add custom plugins
  plugins: [
    new webpack.DefinePlugin(&#123;
      'process.env.VERSION': JSON.stringify(require('./package.json').version)
    &#125;)
  ],
  
  // Add custom loaders
  module: &#123;
    rules: [
      &#123;
        test: /.txt$/,
        use: 'raw-loader'
      &#125;
    ]
  &#125;,
  
  // Add custom resolve aliases
  resolve: &#123;
    alias: &#123;
      '@shared': path.resolve(__dirname, 'src/app/shared'),
      '@core': path.resolve(__dirname, 'src/app/core')
    &#125;
  &#125;,
  
  // External dependencies (don't bundle)
  externals: &#123;
    'jquery': 'jQuery',
    'moment': 'moment'
  &#125;
&#125;;

// ===== COMMON CUSTOMIZATIONS =====

// Environment-specific Webpack Config
module.exports = (config, options) => &#123;
  if (options.configuration === 'production') &#123;
    config.optimization.minimize = true;
  &#125;
  return config;
&#125;;

// Add Custom Loader
&#123;
  module: &#123;
    rules: [
      &#123;
        test: /\\.md$/,
        use: [
          &#123;
            loader: 'html-loader'
          &#125;,
          &#123;
            loader: 'markdown-loader'
          &#125;
        ]
      &#125;
    ]
  &#125;
&#125;

// Configure Dev Server
&#123;
  devServer: &#123;
    proxy: &#123;
      '/api': &#123;
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true
      &#125;
    &#125;,
    port: 4200,
    open: true,
    historyApiFallback: true
  &#125;
&#125;

// Bundle Splitting
&#123;
  optimization: &#123;
    splitChunks: &#123;
      chunks: 'all',
      cacheGroups: &#123;
        vendor: &#123;
          test: /[\\\\/]node_modules[\\\\/]/,
          name: 'vendors',
          priority: 10
        &#125;,
        common: &#123;
          minChunks: 2,
          priority: 5,
          reuseExistingChunk: true
        &#125;
      &#125;
    &#125;
  &#125;
&#125;

// Source Maps Configuration
&#123;
  devtool: 'eval-source-map',  // Fast rebuilds in dev
  // Production options:
  // false - no source maps
  // 'source-map' - separate .map files
  // 'hidden-source-map' - for error reporting only
&#125;

// Performance Hints
&#123;
  performance: &#123;
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
    hints: 'warning'  // or 'error' to fail build
  &#125;
&#125;

// Copy Custom Assets
const CopyWebpackPlugin = require('copy-webpack-plugin');

&#123;
  plugins: [
    new CopyWebpackPlugin(&#123;
      patterns: [
        &#123; from: 'src/custom-assets', to: 'assets/custom' &#125;
      ]
    &#125;)
  ]
&#125;

// Compression Plugin
const CompressionPlugin = require('compression-webpack-plugin');

&#123;
  plugins: [
    new CompressionPlugin(&#123;
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: /\\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    &#125;)
  ]
&#125;`;
    this.productionOptimizations = `// Production Build Optimizations

// ===== ANGULAR.JSON PRODUCTION CONFIG =====
// Configuration object for production builds
// Key settings:
// - optimization: Enable minification and optimizations
// - aot: Ahead-of-Time compilation
// - buildOptimizer: Angular-specific optimizations
// - outputHashing: Cache busting with file hashes
// - budgets: Size limits and warnings

// Example configuration:
angular.json > projects > yourApp > architect > build > configurations > production

optimization: true
aot: true
buildOptimizer: true
outputHashing: "all"
sourceMap: false
namedChunks: false
extractLicenses: true
vendorChunk: false
serviceWorker: true

// Bundle budgets to control size:
budgets: [
  type: "initial",
  maximumWarning: "500kb",
  maximumError: "1mb"
]

// ===== RUNTIME OPTIMIZATIONS =====

// 1. OnPush Change Detection
@Component(&#123;
  selector: 'app-user-list',
  changeDetection: ChangeDetectionStrategy.OnPush
&#125;)
export class UserListComponent &#123;
  @Input() users: User[] = [];
&#125;

// 2. Track By Functions
trackByFn(index: number, item: any): any &#123;
  return item.id;  // Use unique identifier
&#125;

// 3. Lazy Loading Images
<img [src]="imageUrl" loading="lazy" />

// 4. Virtual Scrolling for Large Lists
<cdk-virtual-scroll-viewport itemSize="50">
  <div *cdkVirtualFor="let item of items">
    item content
  </div>
</cdk-virtual-scroll-viewport>

// 5. Preconnect to External Resources
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://api.example.com">

// ===== BUILD-TIME OPTIMIZATIONS =====

// 1. Remove Console Logs in Production
// Uses Terser plugin configuration
terserOptions: &#123;
  compress: &#123;
    drop_console: true,
    drop_debugger: true
  &#125;
&#125;

// 2. Differential Loading
// Generates ES5 and ES2015+ bundles automatically
<script src="main-es2015.js" type="module"><\/script>
<script src="main-es5.js" nomodule><\/script>

// 3. Compression Configuration (nginx)
gzip on;
gzip_types text/plain text/css application/json application/javascript;
brotli on;
brotli_types text/plain text/css application/json application/javascript;

// ===== CACHING STRATEGY =====

// 1. Long-term Caching with Hashing
// Files have hash in name: main.a1b2c3d4.js
// Cache-Control: max-age=31536000, immutable

// 2. Service Worker for App Shell Caching
// Configure in ngsw-config.json
// - prefetch: Load immediately
// - lazy: Load on demand
// - installMode/updateMode settings

// ===== MONITORING & METRICS =====

// 1. Webpack Bundle Analyzer
npm run analyze

// 2. Lighthouse CI
lhci autorun --upload.target=temporary-public-storage

// 3. Angular CLI Build Stats
ng build --stats-json

// 4. Bundle Size Checking with bundlesize
npm install -g bundlesize
// Set size limits in package.json`;
    this.performanceTips = `// Performance Tips & Best Practices

// ===== BUILD PERFORMANCE =====

// 1. Incremental Builds
ng build --watch  // Rebuilds only changed files

// 2. Parallel Builds (for monorepos)
// Use Nx or other build tools for parallel compilation

// 3. Build Cache
// Angular 13+ has persistent build cache
&#123;
  "cli": &#123;
    "cache": &#123;
      "enabled": true,
      "path": ".angular/cache",
      "environment": "all"
    &#125;
  &#125;
&#125;

// 4. Reduce Template Type Checking
// tsconfig.json (use carefully!)
&#123;
  "angularCompilerOptions": &#123;
    "fullTemplateTypeCheck": false,
    "strictTemplates": false
  &#125;
&#125;

// ===== BUNDLE SIZE OPTIMIZATION =====

// 1. Analyze and Remove Unused Dependencies
npm install -g depcheck
depcheck

// 2. Use Lighter Alternatives
// moment \u2192 date-fns (10x smaller)
// lodash \u2192 lodash-es + tree-shaking
// rxjs \u2192 import specific operators only

// 3. Remove Duplicate Dependencies
npm dedupe

// 4. Code Splitting
// Split large features into lazy-loaded modules
const routes: Routes = [
  &#123;
    path: 'heavy-feature',
    loadChildren: () => import('./heavy-feature/heavy-feature.module')
      .then(m => m.HeavyFeatureModule)
  &#125;
];

// ===== RUNTIME PERFORMANCE =====

// 1. OnPush Change Detection
@Component(&#123;
  changeDetection: ChangeDetectionStrategy.OnPush
&#125;)
export class OptimizedComponent &#123;
  // Only checks when @Input changes or events occur
&#125;

// 2. Detach Change Detection for Static Content
constructor(private cd: ChangeDetectorRef) &#123;&#125;

ngOnInit() &#123;
  this.cd.detach();  // Stop automatic change detection
  
  // Manually trigger when needed
  this.updateData().then(() => &#123;
    this.cd.detectChanges();
  &#125;);
&#125;

// 3. Use Pure Pipes
@Pipe(&#123;
  name: 'customPipe',
  pure: true  // Default: only recalculates when input changes
&#125;)
export class CustomPipe implements PipeTransform &#123;
  transform(value: any): any &#123;
    return value;
  &#125;
&#125;

// 4. Avoid Complex Template Expressions
// \u274C Bad: Complex logic in template
<div>&#123;&#123; calculateComplexValue(item) &#125;&#125;</div>

// \u2705 Good: Pre-calculate in component
ngOnInit() &#123;
  this.displayValue = this.calculateComplexValue(this.item);
&#125;
<div>&#123;&#123; displayValue &#125;&#125;</div>

// 5. Virtual Scrolling for Large Lists
import &#123; ScrollingModule &#125; from '@angular/cdk/scrolling';

<cdk-virtual-scroll-viewport itemSize="50">
  <div *cdkVirtualFor="let item of items">&#123;&#123; item &#125;&#125;</div>
</cdk-virtual-scroll-viewport>

// ===== NETWORK PERFORMANCE =====

// 1. HTTP Caching
import &#123; HttpClient, HttpHeaders &#125; from '@angular/common/http';
import &#123; shareReplay &#125; from 'rxjs/operators';

private cache$ = this.http.get('/api/data').pipe(
  shareReplay(1)  // Cache the result
);

// 2. Preload Data
export class DataResolver implements Resolve<any> &#123;
  resolve(): Observable<any> &#123;
    return this.dataService.getData();  // Loads before route activates
  &#125;
&#125;

// 3. Image Optimization
<img 
  [src]="imageUrl" 
  loading="lazy"
  srcset="image-320w.jpg 320w, image-640w.jpg 640w"
  sizes="(max-width: 320px) 280px, 640px"
/>

// 4. Service Worker for Offline Support
ng add @angular/pwa
// Automatically caches app shell and assets

// ===== MEMORY OPTIMIZATION =====

// 1. Unsubscribe from Observables
private destroy$ = new Subject<void>();

ngOnInit() &#123;
  this.dataService.getData()
    .pipe(takeUntil(this.destroy$))
    .subscribe(data => this.data = data);
&#125;

ngOnDestroy() &#123;
  this.destroy$.next();
  this.destroy$.complete();
&#125;

// 2. Avoid Memory Leaks
// Use async pipe in templates (auto-unsubscribe)
<div *ngIf="data$ | async as data">&#123;&#123; data &#125;&#125;</div>

// 3. Lazy Load Heavy Components
async loadHeavyComponent() &#123;
  const &#123; HeavyComponent &#125; = await import('./heavy.component');
  // Create component dynamically
&#125;

// ===== DEVELOPMENT PERFORMANCE =====

// 1. Use Incremental Build
ng serve --hmr  // Hot Module Replacement

// 2. Reduce Watched Files
// .gitignore / .dockerignore
node_modules/
dist/
*.log

// 3. Use SSD for node_modules
// Faster file I/O improves build times

// ===== MONITORING =====

// 1. Use Chrome DevTools Performance Tab
// Record page load and interaction

// 2. Lighthouse Audits
// Run in Chrome DevTools or CI/CD

// 3. Bundle Size Monitoring
// Set up CI checks for bundle size regressions

// 4. Real User Monitoring (RUM)
// Use tools like Google Analytics, Sentry`;
    this.commonIssues = `// Common Webpack Issues and Solutions

// ===== ISSUE 1: Bundle Size Too Large =====

// Problem: Initial bundle exceeds budget
// Error: "Initial exceeded maximum budget"

// Solutions:
// 1. Analyze bundle
ng build --stats-json
npx webpack-bundle-analyzer dist/stats.json

// 2. Lazy load routes
const routes: Routes = [
  &#123; path: 'feature', loadChildren: () => import('./feature/feature.module') &#125;
];

// 3. Remove unused dependencies
npm uninstall unused-package

// 4. Use lighter alternatives
// Replace moment with date-fns
// Replace lodash with lodash-es

// ===== ISSUE 2: Module Not Found =====

// Error: "Module not found: Error: Can't resolve 'module-name'"

// Solutions:
// 1. Install missing package
npm install module-name

// 2. Check import path
// \u274C import &#123; Component &#125; from 'component';
// \u2705 import &#123; Component &#125; from './component';

// 3. Add path alias in tsconfig.json
&#123;
  "compilerOptions": &#123;
    "paths": &#123;
      "@app/*": ["src/app/*"],
      "@shared/*": ["src/app/shared/*"]
    &#125;
  &#125;
&#125;

// ===== ISSUE 3: Memory Issues =====

// Error: "JavaScript heap out of memory"

// Solutions:
// 1. Increase Node memory
// package.json:
&#123;
  "scripts": &#123;
    "build": "node --max_old_space_size=8192 node_modules/@angular/cli/bin/ng build"
  &#125;
&#125;

// 2. Clear cache
rm -rf .angular/cache
rm -rf node_modules/.cache

// 3. Reduce parallel builds
// angular.json:
&#123;
  "cli": &#123;
    "cache": &#123;
      "enabled": true
    &#125;
  &#125;
&#125;

// ===== ISSUE 4: Slow Build Times =====

// Problem: Builds take too long

// Solutions:
// 1. Enable build cache (Angular 13+)
// Automatic with persistent cache

// 2. Use incremental builds
ng build --watch

// 3. Disable source maps in dev
&#123;
  "sourceMap": false
&#125;

// 4. Reduce type checking
&#123;
  "angularCompilerOptions": &#123;
    "strictTemplates": false
  &#125;
&#125;

// ===== ISSUE 5: CORS Errors in Development =====

// Error: "CORS policy: No 'Access-Control-Allow-Origin' header"

// Solution: Configure proxy in angular.json
&#123;
  "serve": &#123;
    "options": &#123;
      "proxyConfig": "proxy.conf.json"
    &#125;
  &#125;
&#125;

// proxy.conf.json:
&#123;
  "/api": &#123;
    "target": "http://localhost:3000",
    "secure": false,
    "changeOrigin": true,
    "logLevel": "debug"
  &#125;
&#125;

// ===== ISSUE 6: Production Build Fails =====

// Error: Various errors only in production build

// Solutions:
// 1. Test production build locally
ng build --configuration production
ng serve --configuration production

// 2. Check AOT compilation errors
// Fix template type errors

// 3. Enable build optimizer carefully
// May cause issues with some libraries

// ===== ISSUE 7: Source Maps Not Working =====

// Problem: Can't debug production issues

// Solution: Use hidden source maps
&#123;
  "sourceMap": &#123;
    "scripts": true,
    "styles": true,
    "hidden": true  // Separate .map files not linked in code
  &#125;
&#125;

// ===== ISSUE 8: CSS Not Loading =====

// Problem: Styles not applied after build

// Solutions:
// 1. Check styleUrl vs styleUrls
@Component(&#123;
  styleUrls: ['./component.scss']  // Note: styleUrls (plural)
&#125;)

// 2. Import global styles in angular.json
&#123;
  "styles": [
    "src/styles.scss",
    "node_modules/library/styles.css"
  ]
&#125;

// 3. Check CSS file paths are correct

// ===== ISSUE 9: Environment Variables =====

// Problem: Environment variables not working

// Solution: Use file replacements
// angular.json:
&#123;
  "fileReplacements": [
    &#123;
      "replace": "src/environments/environment.ts",
      "with": "src/environments/environment.prod.ts"
    &#125;
  ]
&#125;

// environment.ts:
export const environment = &#123;
  production: false,
  apiUrl: 'http://localhost:3000'
&#125;;

// environment.prod.ts:
export const environment = &#123;
  production: true,
  apiUrl: 'https://api.production.com'
&#125;;

// ===== ISSUE 10: Dependency Conflicts =====

// Error: "Unable to resolve dependency tree"

// Solutions:
// 1. Use --legacy-peer-deps
npm install --legacy-peer-deps

// 2. Update conflicting packages
npm update package-name

// 3. Check peer dependencies
npm list package-name

// 4. Clear package-lock and reinstall
rm package-lock.json
rm -rf node_modules
npm install

// ===== DEBUGGING TIPS =====

// 1. Verbose logging
ng build --verbose

// 2. Check webpack config
// With &#64;angular-builders/custom-webpack:
console.log(JSON.stringify(config, null, 2));

// 3. Use source maps in dev
- Set sourceMap: true in angular.json

// 4. Check browser console for errors
// Network tab shows failed resource loads

// 5. Validate angular.json syntax
// Use JSON validator or IDE`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function LearnWebpackComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LearnWebpackComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LearnWebpackComponent, selectors: [["app-learn-webpack"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 0, consts: [[1, "header"], ["label", "Introduction"], ["matTabContent", ""], ["label", "Bundle Optimization"], ["label", "Code Splitting"], ["label", "Tree Shaking"], ["label", "Build Configuration"], ["label", "Production Optimizations"], ["label", "Performance Tips"], ["label", "Common Issues"], [1, "tab-content"], [1, "code-note"], [1, "info-box"], [1, "tip-box"], [1, "warning-box"], [1, "best-practices"]], template: function LearnWebpackComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1, "Webpack");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "label");
        \u0275\u0275text(3, "Webpack is the powerful module bundler that powers Angular CLI, transforming and optimizing your application code for production deployment.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "mat-tab-group")(5, "mat-tab", 1);
        \u0275\u0275template(6, LearnWebpackComponent_ng_template_6_Template, 97, 0, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-tab", 3);
        \u0275\u0275template(8, LearnWebpackComponent_ng_template_8_Template, 82, 0, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "mat-tab", 4);
        \u0275\u0275template(10, LearnWebpackComponent_ng_template_10_Template, 77, 0, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-tab", 5);
        \u0275\u0275template(12, LearnWebpackComponent_ng_template_12_Template, 85, 0, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-tab", 6);
        \u0275\u0275template(14, LearnWebpackComponent_ng_template_14_Template, 85, 0, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-tab", 7);
        \u0275\u0275template(16, LearnWebpackComponent_ng_template_16_Template, 119, 0, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "mat-tab", 8);
        \u0275\u0275template(18, LearnWebpackComponent_ng_template_18_Template, 110, 0, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "mat-tab", 9);
        \u0275\u0275template(20, LearnWebpackComponent_ng_template_20_Template, 94, 0, "ng-template", 2);
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [MatTabsModule, MatTabContent, MatTab, MatTabGroup], styles: ['\n\n.header[_ngcontent-%COMP%] {\n  color: #dd0031;\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.tab-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #dd0031;\n  margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n.tab-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #444;\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n}\n.tab-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.tab-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  line-height: 1.8;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\n.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 15px;\n  border-radius: 5px;\n  overflow-x: auto;\n  margin: 1rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 1rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 12px;\n  text-align: left;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  font-weight: 600;\n}\n.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fafafa;\n}\n.info-box[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.info-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1976d2;\n}\n.tip-box[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  border-left: 4px solid #4caf50;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.tip-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #2e7d32;\n}\n.warning-box[_ngcontent-%COMP%] {\n  background-color: #fff3e0;\n  border-left: 4px solid #ff9800;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.warning-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #f57c00;\n}\n.best-practices[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  border-left: 4px solid #4caf50;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.best-practices[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #2e7d32;\n}\n.best-practices[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n/*# sourceMappingURL=learn-webpack.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LearnWebpackComponent, { className: "LearnWebpackComponent", filePath: "src\\app\\components\\angular\\learn-webpack\\learn-webpack.component.ts", lineNumber: 13 });
})();
export {
  LearnWebpackComponent
};
//# sourceMappingURL=chunk-HH4QYC4O.js.map
