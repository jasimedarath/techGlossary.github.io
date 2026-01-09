import"./chunk-WCULWZKC.js";import{a as h}from"./chunk-FSUYFWSG.js";import{a as m,b as d,c as u,d as c}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Xa as a,da as r,e as f,gb as i,hb as t,tb as e,yb as s}from"./chunk-WGQ2ELTG.js";var p=f(h());function S(n,o){n&1&&(i(0,"div",10)(1,"h3"),e(2,"Webpack in Angular"),t(),i(3,"p"),e(4," Webpack is a static module bundler for modern JavaScript applications. Angular CLI uses Webpack under the hood to bundle your application code, assets, and dependencies into optimized bundles for deployment. "),t(),i(5,"h4"),e(6,"What Webpack Does"),t(),i(7,"ul")(8,"li")(9,"strong"),e(10,"Module Bundling:"),t(),e(11," Combines multiple files into optimized bundles"),t(),i(12,"li")(13,"strong"),e(14,"Code Transformation:"),t(),e(15," Converts TypeScript to JavaScript, SCSS to CSS"),t(),i(16,"li")(17,"strong"),e(18,"Asset Management:"),t(),e(19," Handles images, fonts, and other assets"),t(),i(20,"li")(21,"strong"),e(22,"Code Optimization:"),t(),e(23," Minifies, tree-shakes, and compresses code"),t(),i(24,"li")(25,"strong"),e(26,"Development Server:"),t(),e(27," Provides hot module replacement for dev"),t()(),i(28,"h4"),e(29,"Webpack Core Concepts"),t(),i(30,"ul")(31,"li"),e(32,"\u{1F3AF} "),i(33,"strong"),e(34,"Entry:"),t(),e(35," Starting point of your application (main.ts)"),t(),i(36,"li"),e(37,"\u{1F4E6} "),i(38,"strong"),e(39,"Output:"),t(),e(40," Bundled files in dist/ folder"),t(),i(41,"li"),e(42,"\u{1F504} "),i(43,"strong"),e(44,"Loaders:"),t(),e(45," Transform files (TypeScript, SASS, etc.)"),t(),i(46,"li"),e(47,"\u{1F50C} "),i(48,"strong"),e(49,"Plugins:"),t(),e(50," Optimize bundles, inject scripts, minify"),t(),i(51,"li"),e(52,"\u{1F4CA} "),i(53,"strong"),e(54,"Mode:"),t(),e(55," Development or production configuration"),t()(),i(56,"h4"),e(57,"Why Angular Uses Webpack"),t(),i(58,"ul")(59,"li"),e(60,"Powerful ecosystem with extensive plugin support"),t(),i(61,"li"),e(62,"Excellent code splitting and lazy loading capabilities"),t(),i(63,"li"),e(64,"Tree shaking for removing unused code"),t(),i(65,"li"),e(66,"Hot Module Replacement for better development experience"),t(),i(67,"li"),e(68,"Mature and battle-tested in production environments"),t()(),i(69,"div",11)(70,"p"),e(71,"Webpack configuration and examples are handled through angular.json and Angular CLI build system"),t()(),i(72,"div",12)(73,"h4"),e(74,"\u{1F4A1} Angular CLI Abstraction"),t(),i(75,"p"),e(76," Angular CLI abstracts most Webpack configuration, making it easier to get started. Most configuration is done through angular.json, but you can customize Webpack config for advanced use cases. "),t()(),i(77,"div",13)(78,"h4"),e(79,"\u{1F3AF} Understanding Bundles"),t(),i(80,"ul")(81,"li")(82,"strong"),e(83,"main.js:"),t(),e(84," Your application code and components"),t(),i(85,"li")(86,"strong"),e(87,"polyfills.js:"),t(),e(88," Browser compatibility polyfills"),t(),i(89,"li")(90,"strong"),e(91,"runtime.js:"),t(),e(92," Webpack module loading logic"),t(),i(93,"li")(94,"strong"),e(95,"styles.css:"),t(),e(96," Compiled global stylesheets"),t()()()())}function x(n,o){n&1&&(i(0,"div",10)(1,"h3"),e(2,"Optimizing Bundle Size"),t(),i(3,"p"),e(4," Bundle optimization is crucial for application performance. Smaller bundles load faster, improving user experience and SEO rankings. Angular CLI provides several optimization strategies. "),t(),i(5,"h4"),e(6,"Optimization Strategies"),t(),i(7,"ul")(8,"li")(9,"strong"),e(10,"Tree Shaking:"),t(),e(11," Remove unused code automatically"),t(),i(12,"li")(13,"strong"),e(14,"Minification:"),t(),e(15," Compress JavaScript and CSS"),t(),i(16,"li")(17,"strong"),e(18,"Code Splitting:"),t(),e(19," Split code into smaller chunks"),t(),i(20,"li")(21,"strong"),e(22,"Lazy Loading:"),t(),e(23," Load features on demand"),t(),i(24,"li")(25,"strong"),e(26,"Asset Optimization:"),t(),e(27," Compress images and fonts"),t()(),i(28,"h4"),e(29,"Bundle Size Budgets"),t(),i(30,"ul")(31,"li"),e(32,"Set maximum sizes for different bundle types"),t(),i(33,"li"),e(34,"Build fails or warns when budgets are exceeded"),t(),i(35,"li"),e(36,"Prevents accidental bundle size increases"),t(),i(37,"li"),e(38,"Configurable per bundle type (initial, lazy, etc.)"),t()(),i(39,"h4"),e(40,"Analyzing Bundle Size"),t(),i(41,"ul")(42,"li"),e(43,"\u{1F4CA} Use webpack-bundle-analyzer for visual analysis"),t(),i(44,"li"),e(45,"\u{1F50D} Identify large dependencies taking up space"),t(),i(46,"li"),e(47,"\u{1F4C8} Track bundle size changes over time"),t(),i(48,"li"),e(49,"\u{1F3AF} Find optimization opportunities"),t()(),i(50,"div",11)(51,"p"),e(52,"Bundle optimization settings can be configured in angular.json under build configuration options including budgets, optimization flags, and source maps"),t()(),i(53,"div",12)(54,"h4"),e(55,"\u{1F4A1} Bundle Size Best Practices"),t(),i(56,"p"),e(57," Aim to keep your initial bundle under 500KB (gzipped). Larger bundles significantly impact load time on slower networks. Use lazy loading for features not needed on initial load. "),t()(),i(58,"div",14)(59,"h4"),e(60,"\u26A0\uFE0F Common Bundle Size Issues"),t(),i(61,"ul")(62,"li"),e(63,"Importing entire libraries instead of specific modules"),t(),i(64,"li"),e(65,"Not lazy loading rarely-used features"),t(),i(66,"li"),e(67,"Including development dependencies in production"),t(),i(68,"li"),e(69,"Large image assets not optimized"),t()()(),i(70,"div",13)(71,"h4"),e(72,"\u{1F3AF} Quick Wins"),t(),i(73,"ul")(74,"li"),e(75,"Replace moment.js with date-fns (10x smaller)"),t(),i(76,"li"),e(77,"Use lodash-es with tree-shaking, not lodash"),t(),i(78,"li"),e(79,"Import specific RxJS operators, not entire library"),t(),i(80,"li"),e(81,"Enable production mode optimizations"),t()()()())}function b(n,o){n&1&&(i(0,"div",10)(1,"h3"),e(2,"Code Splitting Strategies"),t(),i(3,"p"),e(4," Code splitting divides your application into smaller chunks that can be loaded on demand. This reduces initial bundle size and improves load times by only loading code when needed. "),t(),i(5,"h4"),e(6,"Types of Code Splitting"),t(),i(7,"ul")(8,"li")(9,"strong"),e(10,"Route-based:"),t(),e(11," Split by lazy-loaded routes (most common)"),t(),i(12,"li")(13,"strong"),e(14,"Component-based:"),t(),e(15," Lazy load heavy components"),t(),i(16,"li")(17,"strong"),e(18,"Vendor splitting:"),t(),e(19," Separate third-party libraries"),t(),i(20,"li")(21,"strong"),e(22,"Dynamic imports:"),t(),e(23," Load code programmatically"),t()(),i(24,"h4"),e(25,"Preloading Strategies"),t(),i(26,"ul")(27,"li")(28,"strong"),e(29,"NoPreloading:"),t(),e(30," Only load when navigated (default for lazy)"),t(),i(31,"li")(32,"strong"),e(33,"PreloadAllModules:"),t(),e(34," Load all lazy modules after initial load"),t(),i(35,"li")(36,"strong"),e(37,"Custom Strategy:"),t(),e(38," Selective preloading based on conditions"),t()(),i(39,"h4"),e(40,"Benefits of Code Splitting"),t(),i(41,"ul")(42,"li"),e(43,"\u26A1 Faster initial page load"),t(),i(44,"li"),e(45,"\u{1F4E6} Smaller initial bundle size"),t(),i(46,"li"),e(47,"\u{1F3AF} Better caching (unchanged chunks stay cached)"),t(),i(48,"li"),e(49,"\u{1F680} Improved perceived performance"),t(),i(50,"li"),e(51,"\u{1F4F1} Better for mobile and slow networks"),t()(),i(52,"div",11)(53,"p"),e(54,"Code splitting is implemented through lazy-loaded routes in app.routes.ts and dynamic imports for components"),t()(),i(55,"div",12)(56,"h4"),e(57,"\u{1F4A1} When to Split Code"),t(),i(58,"p"),e(59," Split code for features used by a subset of users (admin panels, settings) or rarely accessed features. Don't over-split code that's needed immediately. "),t()(),i(60,"div",13)(61,"h4"),e(62,"\u{1F3AF} Splitting Best Practices"),t(),i(63,"ul")(64,"li"),e(65,"Lazy load entire feature modules, not individual components"),t(),i(66,"li"),e(67,"Use preloading for frequently accessed routes"),t(),i(68,"li"),e(69,"Monitor chunk sizes - aim for 50-200KB per chunk"),t(),i(70,"li"),e(71,"Consider network round-trip costs vs bundle size"),t()()(),i(72,"div",14)(73,"h4"),e(74,"\u26A0\uFE0F Over-splitting Warning"),t(),i(75,"p"),e(76," Too many small chunks can hurt performance due to HTTP overhead. Each chunk requires a separate network request. Balance chunk count with chunk size. "),t()()())}function E(n,o){n&1&&(i(0,"div",10)(1,"h3"),e(2,"Tree Shaking"),t(),i(3,"p"),e(4," Tree shaking eliminates unused code from your bundle. It's a form of dead code elimination that relies on ES6 module syntax to determine which exports are used and which can be safely removed. "),t(),i(5,"h4"),e(6,"How Tree Shaking Works"),t(),i(7,"ul")(8,"li")(9,"strong"),e(10,"Static Analysis:"),t(),e(11," Analyzes import/export statements"),t(),i(12,"li")(13,"strong"),e(14,"Mark Phase:"),t(),e(15," Marks used exports in dependency graph"),t(),i(16,"li")(17,"strong"),e(18,"Sweep Phase:"),t(),e(19," Removes unmarked (unused) code"),t(),i(20,"li")(21,"strong"),e(22,"Optimization:"),t(),e(23," Enabled automatically in production builds"),t()(),i(24,"h4"),e(25,"Requirements for Tree Shaking"),t(),i(26,"ul")(27,"li"),e(28,"\u2705 Use ES6 import/export syntax"),t(),i(29,"li"),e(30,"\u2705 Production mode build"),t(),i(31,"li"),e(32,"\u2705 Side-effect free code"),t(),i(33,"li"),e(34,"\u2705 Proper package.json configuration"),t()(),i(35,"h4"),e(36,"Tree Shaking Benefits"),t(),i(37,"ul")(38,"li"),e(39,"\u{1F333} Removes unused library code automatically"),t(),i(40,"li"),e(41,"\u{1F4C9} Significantly reduces bundle size"),t(),i(42,"li"),e(43,"\u26A1 Faster load times and better performance"),t(),i(44,"li"),e(45,"\u{1F527} Works automatically in production builds"),t()(),i(46,"div",11)(47,"p"),e(48,"Tree shaking is automatically enabled in production builds and works best with ES6 modules and providedIn services"),t()(),i(49,"div",12)(50,"h4"),e(51,"\u{1F4A1} Side Effects"),t(),i(52,"p"),e(53," Code with side effects (like setting global variables or modifying prototypes) can't be safely removed. Mark side-effect free packages in package.json with "),i(54,"code"),e(55,'"sideEffects": false'),t(),e(56,". "),t()(),i(57,"div",13)(58,"h4"),e(59,"\u{1F3AF} Maximizing Tree Shaking"),t(),i(60,"ul")(61,"li"),e(62,"Import specific items: "),i(63,"code"),e(64,"import { map } from 'rxjs/operators'"),t()(),i(65,"li"),e(66,"Avoid namespace imports: "),i(67,"code"),e(68,"import * as rxjs from 'rxjs'"),t()(),i(69,"li"),e(70,"Use providedIn: 'root' for services (tree-shakeable)"),t(),i(71,"li"),e(72,"Mark libraries as side-effect free when possible"),t()()(),i(73,"div",14)(74,"h4"),e(75,"\u26A0\uFE0F Tree Shaking Limitations"),t(),i(76,"ul")(77,"li"),e(78,"Doesn't work with CommonJS modules (require/exports)"),t(),i(79,"li"),e(80,"Dynamic imports with variables prevent tree shaking"),t(),i(81,"li"),e(82,"Side effects can prevent code removal"),t(),i(83,"li"),e(84,"Some libraries aren't tree-shakeable"),t()()()())}function C(n,o){n&1&&(i(0,"div",10)(1,"h3"),e(2,"Custom Build Configuration"),t(),i(3,"p"),e(4," While Angular CLI handles most Webpack configuration, you can customize builds for advanced scenarios using custom webpack builders or angular.json configuration options. "),t(),i(5,"h4"),e(6,"Configuration Options"),t(),i(7,"ul")(8,"li")(9,"strong"),e(10,"angular.json:"),t(),e(11," Standard CLI configuration"),t(),i(12,"li")(13,"strong"),e(14,"Custom Webpack Config:"),t(),e(15," Advanced Webpack customization"),t(),i(16,"li")(17,"strong"),e(18,"Build Environments:"),t(),e(19," Different configs for dev/prod/staging"),t(),i(20,"li")(21,"strong"),e(22,"Builders:"),t(),e(23," Custom build processes"),t()(),i(24,"h4"),e(25,"Common Customizations"),t(),i(26,"ul")(27,"li"),e(28,"\u{1F527} Adding custom Webpack plugins"),t(),i(29,"li"),e(30,"\u{1F4DD} Configuring custom loaders for file types"),t(),i(31,"li"),e(32,"\u{1F517} Setting up resolve aliases for imports"),t(),i(33,"li"),e(34,"\u{1F310} Configuring dev server proxy"),t(),i(35,"li"),e(36,"\u{1F4E6} Custom bundle splitting strategies"),t()(),i(37,"h4"),e(38,"When to Customize Webpack"),t(),i(39,"ul")(40,"li"),e(41,"Need to support custom file types"),t(),i(42,"li"),e(43,"Integration with specialized build tools"),t(),i(44,"li"),e(45,"Advanced optimization requirements"),t(),i(46,"li"),e(47,"Custom asset processing pipelines"),t(),i(48,"li"),e(49,"Legacy code migration needs"),t()(),i(50,"div",11)(51,"p"),e(52,"Build configuration examples include custom webpack builders, angular.json settings, and environment-specific configurations"),t()(),i(53,"div",12)(54,"h4"),e(55,"\u{1F4A1} Custom Webpack Builder"),t(),i(56,"p"),e(57," Use "),i(58,"code"),e(59,"@angular-builders/custom-webpack"),t(),e(60," to extend Angular CLI's Webpack configuration without ejecting. This allows you to add custom loaders, plugins, and other Webpack features. "),t()(),i(61,"div",14)(62,"h4"),e(63,"\u26A0\uFE0F Configuration Cautions"),t(),i(64,"ul")(65,"li"),e(66,"Custom configs can break on Angular CLI updates"),t(),i(67,"li"),e(68,"Thoroughly test custom configurations"),t(),i(69,"li"),e(70,"Document why customization is needed"),t(),i(71,"li"),e(72,"Consider if Angular CLI options are sufficient first"),t()()(),i(73,"div",13)(74,"h4"),e(75,"\u{1F3AF} Configuration Tips"),t(),i(76,"ul")(77,"li"),e(78,"Start with angular.json before custom Webpack"),t(),i(79,"li"),e(80,"Use merge strategies to combine configurations"),t(),i(81,"li"),e(82,"Test custom configs in CI/CD pipeline"),t(),i(83,"li"),e(84,"Keep custom config minimal and focused"),t()()()())}function y(n,o){n&1&&(i(0,"div",10)(1,"h3"),e(2,"Production Build Optimizations"),t(),i(3,"p"),e(4," Production builds apply aggressive optimizations to reduce bundle size, improve load times, and ensure the best possible performance for end users. "),t(),i(5,"h4"),e(6,"Automatic Optimizations"),t(),i(7,"ul")(8,"li")(9,"strong"),e(10,"AOT Compilation:"),t(),e(11," Ahead-of-time compiles templates"),t(),i(12,"li")(13,"strong"),e(14,"Build Optimizer:"),t(),e(15," Angular-specific optimizations"),t(),i(16,"li")(17,"strong"),e(18,"Minification:"),t(),e(19," Removes whitespace and shortens names"),t(),i(20,"li")(21,"strong"),e(22,"Tree Shaking:"),t(),e(23," Removes unused code"),t(),i(24,"li")(25,"strong"),e(26,"Hashing:"),t(),e(27," Adds hashes to filenames for caching"),t()(),i(28,"h4"),e(29,"Additional Optimizations"),t(),i(30,"ul")(31,"li"),e(32,"\u{1F5DC}\uFE0F "),i(33,"strong"),e(34,"Compression:"),t(),e(35," Gzip/Brotli compression"),t(),i(36,"li"),e(37,"\u{1F4BE} "),i(38,"strong"),e(39,"Service Worker:"),t(),e(40," Offline caching with PWA"),t(),i(41,"li"),e(42,"\u{1F4F1} "),i(43,"strong"),e(44,"Differential Loading:"),t(),e(45," ES5 and ES2015+ bundles"),t(),i(46,"li"),e(47,"\u{1F3A8} "),i(48,"strong"),e(49,"Critical CSS:"),t(),e(50," Inline critical styles"),t(),i(51,"li"),e(52,"\u{1F5BC}\uFE0F "),i(53,"strong"),e(54,"Image Optimization:"),t(),e(55," Compress and lazy-load images"),t()(),i(56,"h4"),e(57,"Caching Strategy"),t(),i(58,"ul")(59,"li"),e(60,"Content hashing for long-term caching"),t(),i(61,"li"),e(62,"Service worker for app shell caching"),t(),i(63,"li"),e(64,"HTTP cache headers configuration"),t(),i(65,"li"),e(66,"CDN integration for static assets"),t()(),i(67,"div",11)(68,"h4"),e(69,"\u{1F4DD} Configuration Note"),t(),i(70,"p"),e(71,"Production builds automatically enable AOT compilation, build optimizer, minification, and output hashing."),t(),i(72,"p"),e(73,"Configure in angular.json under projects > yourApp > architect > build > configurations > production"),t()(),i(74,"div",15)(75,"h4"),e(76,"\u2705 Production Checklist"),t(),i(77,"ul")(78,"li")(79,"strong"),e(80,"Enable AOT:"),t(),e(81," Compile templates ahead of time"),t(),i(82,"li")(83,"strong"),e(84,"Use Build Optimizer:"),t(),e(85," Angular-specific optimizations"),t(),i(86,"li")(87,"strong"),e(88,"Enable Compression:"),t(),e(89," Configure server for gzip/brotli"),t(),i(90,"li")(91,"strong"),e(92,"Set Cache Headers:"),t(),e(93," Long-term caching for hashed files"),t(),i(94,"li")(95,"strong"),e(96,"Add Service Worker:"),t(),e(97," Offline support and caching"),t(),i(98,"li")(99,"strong"),e(100,"Monitor Bundle Size:"),t(),e(101," Set up CI checks"),t()()(),i(102,"div",12)(103,"h4"),e(104,"\u{1F4A1} Differential Loading"),t(),i(105,"p"),e(106," Angular CLI automatically generates two sets of bundles: modern ES2015+ for newer browsers and ES5 for older browsers. Browsers automatically load the appropriate version. "),t()(),i(107,"div",13)(108,"h4"),e(109,"\u{1F3AF} Performance Monitoring"),t(),i(110,"ul")(111,"li"),e(112,"Use Lighthouse for performance audits"),t(),i(113,"li"),e(114,"Monitor Core Web Vitals (LCP, FID, CLS)"),t(),i(115,"li"),e(116,"Set up bundle size tracking in CI/CD"),t(),i(117,"li"),e(118,"Use Real User Monitoring (RUM) tools"),t()()()())}function v(n,o){n&1&&(i(0,"div",10)(1,"h3"),e(2,"Webpack Performance Tips"),t(),i(3,"p"),e(4," Optimize both build-time performance (faster development) and runtime performance (faster app) with these proven strategies and best practices. "),t(),i(5,"h4"),e(6,"Build Performance"),t(),i(7,"ul")(8,"li")(9,"strong"),e(10,"Incremental Builds:"),t(),e(11," Rebuild only changed files"),t(),i(12,"li")(13,"strong"),e(14,"Build Cache:"),t(),e(15," Use Angular CLI's persistent cache"),t(),i(16,"li")(17,"strong"),e(18,"Parallel Processing:"),t(),e(19," Leverage multi-core processors"),t(),i(20,"li")(21,"strong"),e(22,"Reduce Checks:"),t(),e(23," Disable unnecessary type checking in dev"),t()(),i(24,"h4"),e(25,"Runtime Performance"),t(),i(26,"ul")(27,"li")(28,"strong"),e(29,"OnPush Detection:"),t(),e(30," Optimize change detection"),t(),i(31,"li")(32,"strong"),e(33,"Lazy Loading:"),t(),e(34," Load features on demand"),t(),i(35,"li")(36,"strong"),e(37,"Virtual Scrolling:"),t(),e(38," Handle large lists efficiently"),t(),i(39,"li")(40,"strong"),e(41,"Pure Pipes:"),t(),e(42," Avoid unnecessary recalculations"),t(),i(43,"li")(44,"strong"),e(45,"TrackBy Functions:"),t(),e(46," Optimize ngFor rendering"),t()(),i(47,"h4"),e(48,"Network Performance"),t(),i(49,"ul")(50,"li"),e(51,"\u{1F310} HTTP caching with shareReplay"),t(),i(52,"li"),e(53,"\u{1F4E1} Preload critical resources"),t(),i(54,"li"),e(55,'\u{1F5BC}\uFE0F Lazy load images with loading="lazy"'),t(),i(56,"li"),e(57,"\u{1F4BE} Service worker for offline support"),t(),i(58,"li"),e(59,"\u26A1 CDN for static assets"),t()(),i(60,"div",11)(61,"p"),e(62,"Performance optimization examples include OnPush change detection, lazy loading strategies, and Angular-specific build optimizations"),t()(),i(63,"div",15)(64,"h4"),e(65,"\u2705 Performance Best Practices"),t(),i(66,"ul")(67,"li")(68,"strong"),e(69,"Measure First:"),t(),e(70," Use profiling before optimizing"),t(),i(71,"li")(72,"strong"),e(73,"Lazy Load Routes:"),t(),e(74," Split code by feature"),t(),i(75,"li")(76,"strong"),e(77,"OnPush Everywhere:"),t(),e(78," Where possible, use OnPush"),t(),i(79,"li")(80,"strong"),e(81,"Avoid Memory Leaks:"),t(),e(82," Unsubscribe from observables"),t(),i(83,"li")(84,"strong"),e(85,"Cache API Calls:"),t(),e(86," Use shareReplay for shared data"),t(),i(87,"li")(88,"strong"),e(89,"Monitor Bundle Size:"),t(),e(90," Set budgets and track growth"),t()()(),i(91,"div",12)(92,"h4"),e(93,"\u{1F4A1} Development vs Production"),t(),i(94,"p"),e(95," Balance build speed in development with runtime performance in production. Use fast incremental builds in dev, and aggressive optimizations in production. "),t()(),i(96,"div",13)(97,"h4"),e(98,"\u{1F3AF} Quick Performance Wins"),t(),i(99,"ul")(100,"li"),e(101,"Enable persistent build cache (automatic in Angular 13+)"),t(),i(102,"li"),e(103,"Use OnPush change detection strategy"),t(),i(104,"li"),e(105,"Lazy load non-critical routes"),t(),i(106,"li"),e(107,"Remove unused dependencies with npm dedupe"),t(),i(108,"li"),e(109,"Use async pipe in templates (auto-unsubscribe)"),t()()()())}function k(n,o){n&1&&(i(0,"div",10)(1,"h3"),e(2,"Troubleshooting Common Webpack Issues"),t(),i(3,"p"),e(4," Learn to identify and resolve common Webpack-related issues that occur during Angular development and build processes. "),t(),i(5,"h4"),e(6,"Common Error Categories"),t(),i(7,"ul")(8,"li")(9,"strong"),e(10,"Module Resolution:"),t(),e(11," Can't find or resolve modules"),t(),i(12,"li")(13,"strong"),e(14,"Memory Issues:"),t(),e(15," Heap out of memory errors"),t(),i(16,"li")(17,"strong"),e(18,"Build Failures:"),t(),e(19," Production build errors"),t(),i(20,"li")(21,"strong"),e(22,"Performance:"),t(),e(23," Slow build times"),t(),i(24,"li")(25,"strong"),e(26,"Runtime Issues:"),t(),e(27," Code works in dev, fails in prod"),t()(),i(28,"h4"),e(29,"Debugging Strategies"),t(),i(30,"ul")(31,"li"),e(32,"\u{1F50D} Use verbose logging: "),i(33,"code"),e(34,"ng build --verbose"),t()(),i(35,"li"),e(36,"\u{1F4CA} Analyze bundles with webpack-bundle-analyzer"),t(),i(37,"li"),e(38,"\u{1F9EA} Test production builds locally"),t(),i(39,"li"),e(40,"\u{1F50E} Check browser console for runtime errors"),t(),i(41,"li"),e(42,"\u{1F4DD} Enable source maps for debugging"),t()(),i(43,"h4"),e(44,"Prevention Tips"),t(),i(45,"ul")(46,"li"),e(47,"Set up CI/CD to catch issues early"),t(),i(48,"li"),e(49,"Configure bundle size budgets"),t(),i(50,"li"),e(51,"Regular dependency updates"),t(),i(52,"li"),e(53,"Code reviews for import patterns"),t(),i(54,"li"),e(55,"Monitor build performance metrics"),t()(),i(56,"div",11)(57,"p"),e(58,"Common issues include module resolution errors, memory issues, and build failures - solutions typically involve cache clearing, dependency updates, and configuration adjustments"),t()(),i(59,"div",14)(60,"h4"),e(61,"\u26A0\uFE0F Common Pitfalls"),t(),i(62,"ul")(63,"li"),e(64,"Importing entire libraries instead of specific modules"),t(),i(65,"li"),e(66,"Forgetting to update package-lock.json"),t(),i(67,"li"),e(68,"Not testing production builds before deployment"),t(),i(69,"li"),e(70,"Ignoring bundle size budget warnings"),t(),i(71,"li"),e(72,"Using outdated or incompatible dependencies"),t()()(),i(73,"div",12)(74,"h4"),e(75,"\u{1F4A1} When Things Go Wrong"),t(),i(76,"p"),e(77," Start with the basics: clear caches, delete node_modules and reinstall, check for conflicting dependencies. Many issues are resolved by ensuring a clean build environment. "),t()(),i(78,"div",13)(79,"h4"),e(80,"\u{1F3AF} Debugging Workflow"),t(),i(81,"ol")(82,"li"),e(83,"Read the error message carefully"),t(),i(84,"li"),e(85,"Check Angular/Webpack version compatibility"),t(),i(86,"li"),e(87,"Clear caches and rebuild"),t(),i(88,"li"),e(89,"Test with minimal reproduction"),t(),i(90,"li"),e(91,"Check GitHub issues for known problems"),t(),i(92,"li"),e(93,"Enable verbose logging for details"),t()()()())}var O=(()=>{class n{constructor(){this.introduction=`// What is Webpack in Angular?
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
// buildOptimizer: true - Angular-specific optimizations`,this.bundleOptimization=`// angular.json - Bundle Optimization Configuration
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
// Angular CLI generates .gz files with --optimization`,this.codeSplitting=`// Code Splitting Strategies in Angular

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
// \u274C Don't lazy-load immediately needed features`,this.treeShaking=`// Tree Shaking in Angular

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
// \u274C Avoid export * patterns in barrel files`,this.buildConfiguration=`// Custom Webpack Configuration in Angular

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
&#125;`,this.productionOptimizations=`// Production Build Optimizations

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
// Set size limits in package.json`,this.performanceTips=`// Performance Tips & Best Practices

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
// Use tools like Google Analytics, Sentry`,this.commonIssues=`// Common Webpack Issues and Solutions

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
// Use JSON validator or IDE`}ngAfterViewChecked(){p.highlightAll()}static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=r({type:n,selectors:[["app-learn-webpack"]],standalone:!0,features:[s],decls:21,vars:0,consts:[[1,"header"],["label","Introduction"],["matTabContent",""],["label","Bundle Optimization"],["label","Code Splitting"],["label","Tree Shaking"],["label","Build Configuration"],["label","Production Optimizations"],["label","Performance Tips"],["label","Common Issues"],[1,"tab-content"],[1,"code-note"],[1,"info-box"],[1,"tip-box"],[1,"warning-box"],[1,"best-practices"]],template:function(l,D){l&1&&(i(0,"h2",0),e(1,"Webpack"),t(),i(2,"label"),e(3,"Webpack is the powerful module bundler that powers Angular CLI, transforming and optimizing your application code for production deployment."),t(),i(4,"mat-tab-group")(5,"mat-tab",1),a(6,S,97,0,"ng-template",2),t(),i(7,"mat-tab",3),a(8,x,82,0,"ng-template",2),t(),i(9,"mat-tab",4),a(10,b,77,0,"ng-template",2),t(),i(11,"mat-tab",5),a(12,E,85,0,"ng-template",2),t(),i(13,"mat-tab",6),a(14,C,85,0,"ng-template",2),t(),i(15,"mat-tab",7),a(16,y,119,0,"ng-template",2),t(),i(17,"mat-tab",8),a(18,v,110,0,"ng-template",2),t(),i(19,"mat-tab",9),a(20,k,94,0,"ng-template",2),t()())},dependencies:[c,m,d,u],styles:[".header[_ngcontent-%COMP%]{color:#dd0031;font-size:2rem;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]{padding:20px}.tab-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#dd0031;margin-top:1.5rem;margin-bottom:.5rem}.tab-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#444;margin-top:1rem;margin-bottom:.5rem}.tab-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.6;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .tab-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{line-height:1.8;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background-color:#f4f4f4;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background-color:#f5f5f5;padding:15px;border-radius:5px;overflow-x:auto;margin:1rem 0}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin:1rem 0}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #ddd;padding:12px;text-align:left}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#f5f5f5;font-weight:600}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#fafafa}.info-box[_ngcontent-%COMP%]{background-color:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:20px 0;border-radius:4px}.info-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.tip-box[_ngcontent-%COMP%]{background-color:#e8f5e9;border-left:4px solid #4caf50;padding:15px;margin:20px 0;border-radius:4px}.tip-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#2e7d32}.warning-box[_ngcontent-%COMP%]{background-color:#fff3e0;border-left:4px solid #ff9800;padding:15px;margin:20px 0;border-radius:4px}.warning-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#f57c00}.best-practices[_ngcontent-%COMP%]{background-color:#e8f5e9;border-left:4px solid #4caf50;padding:15px;margin:20px 0;border-radius:4px}.best-practices[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#2e7d32}.best-practices[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#2e7d32}"]})}}return n})();export{O as LearnWebpackComponent};
