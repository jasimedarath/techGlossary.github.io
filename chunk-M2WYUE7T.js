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

// src/app/components/angular/learn-deferrable-views/learn-deferrable-views.component.ts
var Prism = __toESM(require_prism());
function LearnDeferrableViewsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h3");
    \u0275\u0275text(2, "What are Deferrable Views?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Introduced in Angular 17, deferrable views (@defer blocks) provide a declarative way to lazy load parts of your template. This is a powerful feature that can significantly improve your application's initial load time and runtime performance. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Key Features");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "Automatic code splitting:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Components in defer blocks are automatically split into separate chunks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "Multiple trigger conditions:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Load content based on viewport visibility, user interaction, timers, and more");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "Prefetching support:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Start loading resources before they're needed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "Built-in states:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Handle loading, error, and placeholder states declaratively");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li")(25, "strong");
    \u0275\u0275text(26, "No additional APIs:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Works entirely through template syntax");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "pre")(29, "code", 8);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(30);
    \u0275\u0275textInterpolate(ctx_r0.basicDefer);
  }
}
function LearnDeferrableViewsComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h3");
    \u0275\u0275text(2, "Available Triggers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4, "1. viewport");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Triggers when the placeholder enters the viewport. Perfect for lazy loading content below the fold.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h4");
    \u0275\u0275text(8, "2. interaction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "Triggers on click or keydown events on the placeholder element.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h4");
    \u0275\u0275text(12, "3. hover");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14, "Triggers when the user hovers over the placeholder element.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "h4");
    \u0275\u0275text(16, "4. idle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p");
    \u0275\u0275text(18, "Triggers when the browser reaches an idle state (uses requestIdleCallback).");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "h4");
    \u0275\u0275text(20, "5. timer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p");
    \u0275\u0275text(22, "Triggers after a specified duration.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h4");
    \u0275\u0275text(24, "6. immediate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26, "Triggers immediately, useful with prefetching strategies.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "pre")(28, "code", 8);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(29);
    \u0275\u0275textInterpolate(ctx_r0.deferTriggers);
  }
}
function LearnDeferrableViewsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h3");
    \u0275\u0275text(2, "Prefetching Strategies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " Prefetching allows you to start loading resources before they're needed, improving perceived performance. The prefetch happens in the background and doesn't block the main thread. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Benefits of Prefetching");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li");
    \u0275\u0275text(9, "Reduces perceived loading time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275text(11, "Improves user experience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li");
    \u0275\u0275text(13, "Resources are ready when users interact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "li");
    \u0275\u0275text(15, "Can be combined with any trigger condition");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "h4");
    \u0275\u0275text(17, "Best Practices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ul")(19, "li");
    \u0275\u0275text(20, "Use ");
    \u0275\u0275elementStart(21, "code");
    \u0275\u0275text(22, "prefetch on idle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " for content that's likely to be needed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li");
    \u0275\u0275text(25, "Combine viewport trigger with idle prefetch for below-fold content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "li");
    \u0275\u0275text(27, "Use hover prefetch for dropdown menus and tooltips");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "li");
    \u0275\u0275text(29, "Be cautious with prefetching on mobile devices (data usage)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "pre")(31, "code", 8);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(32);
    \u0275\u0275textInterpolate(ctx_r0.prefetching);
  }
}
function LearnDeferrableViewsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h3");
    \u0275\u0275text(2, "Advanced Usage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4, "Trigger References");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, " You can reference specific elements as triggers, allowing you to control when defer blocks load from anywhere in your template. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h4");
    \u0275\u0275text(8, "Nested Defer Blocks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, " Defer blocks can be nested, allowing for progressive loading of increasingly complex content. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h4");
    \u0275\u0275text(12, "Loading States with Timing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ul")(14, "li")(15, "strong");
    \u0275\u0275text(16, "minimum:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Minimum time to show the loading state (prevents flashing)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "li")(19, "strong");
    \u0275\u0275text(20, "after:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " Delay before showing the loading state (avoids showing for fast loads)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "h4");
    \u0275\u0275text(23, "Placeholder Timing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p");
    \u0275\u0275text(25, " The ");
    \u0275\u0275elementStart(26, "code");
    \u0275\u0275text(27, "minimum");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " parameter on placeholders ensures they're visible for a minimum duration, preventing jarring layout shifts. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "pre")(30, "code", 8);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(31);
    \u0275\u0275textInterpolate(ctx_r0.advancedPatterns);
  }
}
function LearnDeferrableViewsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h3");
    \u0275\u0275text(2, "E-commerce Product Page");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " This example demonstrates how to use deferrable views to optimize a product page, loading critical content first and deferring secondary content. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Strategy Breakdown");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "Product header & images:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Load immediately (critical content)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "Reviews:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Defer until viewport, prefetch on idle (high value, below fold)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "Related products:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Defer until idle (nice to have, not critical)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "Recommendations:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Defer until viewport (personalized, expensive to compute)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "h4");
    \u0275\u0275text(25, "Performance Benefits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ul")(27, "li");
    \u0275\u0275text(28, "Reduced initial bundle size by ~40-60%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "li");
    \u0275\u0275text(30, "Faster time to interactive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "li");
    \u0275\u0275text(32, "Better Core Web Vitals scores");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "li");
    \u0275\u0275text(34, "Improved mobile performance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "pre")(36, "code", 8);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 9)(39, "h4");
    \u0275\u0275text(40, "\u{1F4A1} Tips");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "ul")(42, "li");
    \u0275\u0275text(43, "Always provide meaningful placeholders for better UX");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "li");
    \u0275\u0275text(45, "Use loading states for operations that might take time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "li");
    \u0275\u0275text(47, "Consider data usage on mobile when using prefetching");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "li");
    \u0275\u0275text(49, "Test defer blocks with network throttling to ensure good UX");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "li");
    \u0275\u0275text(51, "Use Chrome DevTools to verify code splitting is working");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(37);
    \u0275\u0275textInterpolate(ctx_r0.realWorldExample);
  }
}
var LearnDeferrableViewsComponent = class _LearnDeferrableViewsComponent {
  constructor() {
    this.basicDefer = `// Basic @defer block
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
}`;
    this.deferTriggers = `// Viewport trigger - loads when enters viewport
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
}`;
    this.prefetching = `// Prefetch on idle
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
}`;
    this.advancedPatterns = `// Conditional defer with trigger references
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
}`;
    this.realWorldExample = `// E-commerce product page
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
}`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function LearnDeferrableViewsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LearnDeferrableViewsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LearnDeferrableViewsComponent, selectors: [["app-learn-deferrable-views"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 0, consts: [[1, "header"], ["label", "Basic Syntax"], ["matTabContent", ""], ["label", "Trigger Conditions"], ["label", "Prefetching"], ["label", "Advanced Patterns"], ["label", "Real-World Example"], [1, "tab-content"], [1, "language-typescript"], [1, "tips"]], template: function LearnDeferrableViewsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1, "Deferrable Views");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "label");
        \u0275\u0275text(3, "Deferrable views allow you to lazy load components, reducing initial bundle size and improving performance by loading content only when needed.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "mat-tab-group")(5, "mat-tab", 1);
        \u0275\u0275template(6, LearnDeferrableViewsComponent_ng_template_6_Template, 31, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-tab", 3);
        \u0275\u0275template(8, LearnDeferrableViewsComponent_ng_template_8_Template, 30, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "mat-tab", 4);
        \u0275\u0275template(10, LearnDeferrableViewsComponent_ng_template_10_Template, 33, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-tab", 5);
        \u0275\u0275template(12, LearnDeferrableViewsComponent_ng_template_12_Template, 32, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-tab", 6);
        \u0275\u0275template(14, LearnDeferrableViewsComponent_ng_template_14_Template, 52, 1, "ng-template", 2);
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [MatTabsModule, MatTabContent, MatTab, MatTabGroup], styles: ['\n\n.header[_ngcontent-%COMP%] {\n  color: #dd0031;\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.tab-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #dd0031;\n  margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n.tab-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #444;\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n}\n.tab-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  line-height: 1.8;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\n.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 15px;\n  border-radius: 5px;\n  overflow-x: auto;\n  margin: 1rem 0;\n}\n.tips[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  border-left: 4px solid #4caf50;\n  padding: 15px;\n  margin-top: 20px;\n  border-radius: 4px;\n}\n.tips[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #2e7d32;\n}\n.tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=learn-deferrable-views.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LearnDeferrableViewsComponent, { className: "LearnDeferrableViewsComponent", filePath: "src\\app\\components\\angular\\learn-deferrable-views\\learn-deferrable-views.component.ts", lineNumber: 13 });
})();
export {
  LearnDeferrableViewsComponent
};
//# sourceMappingURL=chunk-M2WYUE7T.js.map
