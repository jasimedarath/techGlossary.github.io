import"./chunk-WCULWZKC.js";import{a as b}from"./chunk-VDRUEQXK.js";import{a as g,b as h,c as f,d as u}from"./chunk-GNZ74KMC.js";import"./chunk-XAZLOLJU.js";import"./chunk-SZTU5CXE.js";import{Ia as o,Ya as l,da as s,e as v,hb as n,ib as e,mb as a,ub as t,vb as d,zb as p}from"./chunk-KMNIY7WT.js";var x=v(b());function E(i,m){if(i&1&&(n(0,"div",7)(1,"h3"),t(2,"What are Deferrable Views?"),e(),n(3,"p"),t(4," Introduced in Angular 17, deferrable views (@defer blocks) provide a declarative way to lazy load parts of your template. This is a powerful feature that can significantly improve your application's initial load time and runtime performance. "),e(),n(5,"h3"),t(6,"Key Features"),e(),n(7,"ul")(8,"li")(9,"strong"),t(10,"Automatic code splitting:"),e(),t(11," Components in defer blocks are automatically split into separate chunks"),e(),n(12,"li")(13,"strong"),t(14,"Multiple trigger conditions:"),e(),t(15," Load content based on viewport visibility, user interaction, timers, and more"),e(),n(16,"li")(17,"strong"),t(18,"Prefetching support:"),e(),t(19," Start loading resources before they're needed"),e(),n(20,"li")(21,"strong"),t(22,"Built-in states:"),e(),t(23," Handle loading, error, and placeholder states declaratively"),e(),n(24,"li")(25,"strong"),t(26,"No additional APIs:"),e(),t(27," Works entirely through template syntax"),e()(),n(28,"pre")(29,"code",8),t(30),e()()()),i&2){let r=a();o(30),d(r.basicDefer)}}function S(i,m){if(i&1&&(n(0,"div",7)(1,"h3"),t(2,"Available Triggers"),e(),n(3,"h4"),t(4,"1. viewport"),e(),n(5,"p"),t(6,"Triggers when the placeholder enters the viewport. Perfect for lazy loading content below the fold."),e(),n(7,"h4"),t(8,"2. interaction"),e(),n(9,"p"),t(10,"Triggers on click or keydown events on the placeholder element."),e(),n(11,"h4"),t(12,"3. hover"),e(),n(13,"p"),t(14,"Triggers when the user hovers over the placeholder element."),e(),n(15,"h4"),t(16,"4. idle"),e(),n(17,"p"),t(18,"Triggers when the browser reaches an idle state (uses requestIdleCallback)."),e(),n(19,"h4"),t(20,"5. timer"),e(),n(21,"p"),t(22,"Triggers after a specified duration."),e(),n(23,"h4"),t(24,"6. immediate"),e(),n(25,"p"),t(26,"Triggers immediately, useful with prefetching strategies."),e(),n(27,"pre")(28,"code",8),t(29),e()()()),i&2){let r=a();o(29),d(r.deferTriggers)}}function w(i,m){if(i&1&&(n(0,"div",7)(1,"h3"),t(2,"Prefetching Strategies"),e(),n(3,"p"),t(4," Prefetching allows you to start loading resources before they're needed, improving perceived performance. The prefetch happens in the background and doesn't block the main thread. "),e(),n(5,"h4"),t(6,"Benefits of Prefetching"),e(),n(7,"ul")(8,"li"),t(9,"Reduces perceived loading time"),e(),n(10,"li"),t(11,"Improves user experience"),e(),n(12,"li"),t(13,"Resources are ready when users interact"),e(),n(14,"li"),t(15,"Can be combined with any trigger condition"),e()(),n(16,"h4"),t(17,"Best Practices"),e(),n(18,"ul")(19,"li"),t(20,"Use "),n(21,"code"),t(22,"prefetch on idle"),e(),t(23," for content that's likely to be needed"),e(),n(24,"li"),t(25,"Combine viewport trigger with idle prefetch for below-fold content"),e(),n(26,"li"),t(27,"Use hover prefetch for dropdown menus and tooltips"),e(),n(28,"li"),t(29,"Be cautious with prefetching on mobile devices (data usage)"),e()(),n(30,"pre")(31,"code",8),t(32),e()()()),i&2){let r=a();o(32),d(r.prefetching)}}function C(i,m){if(i&1&&(n(0,"div",7)(1,"h3"),t(2,"Advanced Usage"),e(),n(3,"h4"),t(4,"Trigger References"),e(),n(5,"p"),t(6," You can reference specific elements as triggers, allowing you to control when defer blocks load from anywhere in your template. "),e(),n(7,"h4"),t(8,"Nested Defer Blocks"),e(),n(9,"p"),t(10," Defer blocks can be nested, allowing for progressive loading of increasingly complex content. "),e(),n(11,"h4"),t(12,"Loading States with Timing"),e(),n(13,"ul")(14,"li")(15,"strong"),t(16,"minimum:"),e(),t(17," Minimum time to show the loading state (prevents flashing)"),e(),n(18,"li")(19,"strong"),t(20,"after:"),e(),t(21," Delay before showing the loading state (avoids showing for fast loads)"),e()(),n(22,"h4"),t(23,"Placeholder Timing"),e(),n(24,"p"),t(25," The "),n(26,"code"),t(27,"minimum"),e(),t(28," parameter on placeholders ensures they're visible for a minimum duration, preventing jarring layout shifts. "),e(),n(29,"pre")(30,"code",8),t(31),e()()()),i&2){let r=a();o(31),d(r.advancedPatterns)}}function y(i,m){if(i&1&&(n(0,"div",7)(1,"h3"),t(2,"E-commerce Product Page"),e(),n(3,"p"),t(4," This example demonstrates how to use deferrable views to optimize a product page, loading critical content first and deferring secondary content. "),e(),n(5,"h4"),t(6,"Strategy Breakdown"),e(),n(7,"ul")(8,"li")(9,"strong"),t(10,"Product header & images:"),e(),t(11," Load immediately (critical content)"),e(),n(12,"li")(13,"strong"),t(14,"Reviews:"),e(),t(15," Defer until viewport, prefetch on idle (high value, below fold)"),e(),n(16,"li")(17,"strong"),t(18,"Related products:"),e(),t(19," Defer until idle (nice to have, not critical)"),e(),n(20,"li")(21,"strong"),t(22,"Recommendations:"),e(),t(23," Defer until viewport (personalized, expensive to compute)"),e()(),n(24,"h4"),t(25,"Performance Benefits"),e(),n(26,"ul")(27,"li"),t(28,"Reduced initial bundle size by ~40-60%"),e(),n(29,"li"),t(30,"Faster time to interactive"),e(),n(31,"li"),t(32,"Better Core Web Vitals scores"),e(),n(33,"li"),t(34,"Improved mobile performance"),e()(),n(35,"pre")(36,"code",8),t(37),e()(),n(38,"div",9)(39,"h4"),t(40,"\u{1F4A1} Tips"),e(),n(41,"ul")(42,"li"),t(43,"Always provide meaningful placeholders for better UX"),e(),n(44,"li"),t(45,"Use loading states for operations that might take time"),e(),n(46,"li"),t(47,"Consider data usage on mobile when using prefetching"),e(),n(48,"li"),t(49,"Test defer blocks with network throttling to ensure good UX"),e(),n(50,"li"),t(51,"Use Chrome DevTools to verify code splitting is working"),e()()()()),i&2){let r=a();o(37),d(r.realWorldExample)}}var D=(()=>{class i{constructor(){this.basicDefer=`// Basic @defer block
@defer {
  <heavy-component />
}

// With placeholder
@defer {
  <heavy-component />
} @placeholder {
  <div>Loading...</div>
}

// With loading state
@defer {
  <heavy-component />
} @loading (minimum 2s) {
  <spinner-component />
} @placeholder {
  <div>Click to load</div>
}

// With error handling
@defer {
  <heavy-component />
} @error {
  <div>Failed to load component</div>
} @placeholder {
  <div>Content placeholder</div>
}`,this.deferTriggers=`// Viewport trigger - loads when enters viewport
@defer (on viewport) {
  <chart-component />
} @placeholder {
  <div>Chart will load when visible</div>
}

// Interaction trigger - loads on user interaction
@defer (on interaction) {
  <video-player />
} @placeholder {
  <div>Click to load video player</div>
}

// Hover trigger
@defer (on hover) {
  <tooltip-details />
} @placeholder {
  <span>Hover for details</span>
}

// Idle trigger - loads when browser is idle
@defer (on idle) {
  <analytics-dashboard />
}

// Timer trigger - loads after specified time
@defer (on timer(5s)) {
  <advertisement />
}

// Immediate trigger - loads immediately
@defer (on immediate) {
  <critical-component />
}`,this.prefetching=`// Prefetch on idle
@defer (on viewport; prefetch on idle) {
  <data-table [data]="largeDataset" />
} @placeholder {
  <div>Table will load when visible</div>
}

// Prefetch on interaction
@defer (on hover; prefetch on interaction) {
  <user-profile [userId]="userId" />
}

// Multiple prefetch conditions
@defer (on viewport; prefetch on hover; prefetch on interaction) {
  <complex-chart />
}`,this.advancedPatterns=`// Conditional defer with trigger references
<button #loadBtn>Load Content</button>

@defer (on interaction(loadBtn)) {
  <lazy-content />
} @placeholder {
  <div>Click button to load</div>
}

// Nested defer blocks
@defer (on viewport) {
  <parent-component>
    @defer (on idle) {
      <child-expensive-component />
    } @placeholder {
      <child-placeholder />
    }
  </parent-component>
}

// With minimum loading time
@defer (on viewport) {
  <data-grid />
} @loading (minimum 1s; after 500ms) {
  <loading-spinner />
} @placeholder (minimum 2s) {
  <skeleton-loader />
}`,this.realWorldExample=`// E-commerce product page
@Component({
  template: \`
    <div class="product-page">
      <!-- Critical content loads immediately -->
      <product-header [product]="product" />
      <product-images [images]="product.images" />
      
      <!-- Reviews load when scrolled into view -->
      @defer (on viewport; prefetch on idle) {
        <product-reviews [productId]="product.id" />
      } @placeholder {
        <div class="reviews-skeleton">
          Loading reviews...
        </div>
      }
      
      <!-- Related products load after idle -->
      @defer (on idle) {
        <related-products [category]="product.category" />
      } @loading (minimum 1s) {
        <spinner />
      }
      
      <!-- Recommendations load on interaction -->
      <section #recommendationSection>
        @defer (on viewport(recommendationSection)) {
          <product-recommendations [userId]="currentUser.id" />
        } @error {
          <div>Unable to load recommendations</div>
        }
      </section>
    </div>
  \`
})
export class ProductPageComponent {
  product = inject(ProductService).getCurrentProduct();
  currentUser = inject(UserService).getCurrentUser();
}`}ngAfterViewChecked(){x.highlightAll()}static{this.\u0275fac=function(c){return new(c||i)}}static{this.\u0275cmp=s({type:i,selectors:[["app-learn-deferrable-views"]],standalone:!0,features:[p],decls:15,vars:0,consts:[[1,"header"],["label","Basic Syntax"],["matTabContent",""],["label","Trigger Conditions"],["label","Prefetching"],["label","Advanced Patterns"],["label","Real-World Example"],[1,"tab-content"],[1,"language-typescript"],[1,"tips"]],template:function(c,_){c&1&&(n(0,"h2",0),t(1,"Deferrable Views"),e(),n(2,"label"),t(3,"Deferrable views allow you to lazy load components, reducing initial bundle size and improving performance by loading content only when needed."),e(),n(4,"mat-tab-group")(5,"mat-tab",1),l(6,E,31,1,"ng-template",2),e(),n(7,"mat-tab",3),l(8,S,30,1,"ng-template",2),e(),n(9,"mat-tab",4),l(10,w,33,1,"ng-template",2),e(),n(11,"mat-tab",5),l(12,C,32,1,"ng-template",2),e(),n(13,"mat-tab",6),l(14,y,52,1,"ng-template",2),e()())},dependencies:[u,g,h,f],styles:[".header[_ngcontent-%COMP%]{color:#dd0031;font-size:2rem;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]{padding:20px}.tab-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#dd0031;margin-top:1.5rem;margin-bottom:.5rem}.tab-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#444;margin-top:1rem;margin-bottom:.5rem}.tab-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.6;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{line-height:1.8;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background-color:#f4f4f4;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background-color:#f5f5f5;padding:15px;border-radius:5px;overflow-x:auto;margin:1rem 0}.tips[_ngcontent-%COMP%]{background-color:#e8f5e9;border-left:4px solid #4caf50;padding:15px;margin-top:20px;border-radius:4px}.tips[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#2e7d32}.tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-bottom:0}"]})}}return i})();export{D as LearnDeferrableViewsComponent};
