import"./chunk-WCULWZKC.js";import{a as v}from"./chunk-VDRUEQXK.js";import{a as u,b as g,c as S,d as f}from"./chunk-GNZ74KMC.js";import"./chunk-XAZLOLJU.js";import"./chunk-SZTU5CXE.js";import{Ia as o,Ya as l,da as c,e as h,hb as n,ib as t,mb as s,ub as e,vb as a,zb as p}from"./chunk-KMNIY7WT.js";var x=h(v());function E(i,d){if(i&1&&(n(0,"div",8)(1,"h3"),e(2,"What is Server-Side Rendering?"),t(),n(3,"p"),e(4," SSR renders your Angular application on the server and sends fully rendered HTML to the browser. This improves initial load time, SEO, and provides content to users with JavaScript disabled. "),t(),n(5,"h4"),e(6,"Key Benefits"),t(),n(7,"ul")(8,"li")(9,"strong"),e(10,"Faster First Contentful Paint (FCP):"),t(),e(11," Users see content immediately"),t(),n(12,"li")(13,"strong"),e(14,"Better SEO:"),t(),e(15," Search engines can crawl fully rendered content"),t(),n(16,"li")(17,"strong"),e(18,"Social Media Sharing:"),t(),e(19," Meta tags and content available for link previews"),t(),n(20,"li")(21,"strong"),e(22,"Improved perceived performance:"),t(),e(23," Content appears before JavaScript loads"),t(),n(24,"li")(25,"strong"),e(26,"Accessibility:"),t(),e(27," Works without JavaScript (progressive enhancement)"),t()(),n(28,"h4"),e(29,"When to Use SSR"),t(),n(30,"ul")(31,"li"),e(32,"Public-facing websites that need SEO"),t(),n(33,"li"),e(34,"Content-heavy applications (blogs, news sites)"),t(),n(35,"li"),e(36,"E-commerce product pages"),t(),n(37,"li"),e(38,"Landing pages and marketing sites"),t(),n(39,"li"),e(40,"Applications with slow initial JavaScript load"),t()(),n(41,"pre")(42,"code",9),e(43),t()(),n(44,"div",10)(45,"h4"),e(46,"\u{1F4A1} SSR vs Static Site Generation (SSG)"),t(),n(47,"p")(48,"strong"),e(49,"SSR:"),t(),e(50," Renders on each request (dynamic content)"),t(),n(51,"p")(52,"strong"),e(53,"SSG (Prerendering):"),t(),e(54," Renders at build time (static content)"),t(),n(55,"p"),e(56,"Angular supports both - use SSR for dynamic content and prerendering for static pages!"),t()()()),i&2){let r=s();o(43),a(r.basicSSR)}}function b(i,d){if(i&1&&(n(0,"div",8)(1,"h3"),e(2,"Non-Destructive Hydration"),t(),n(3,"p"),e(4," Hydration is the process of attaching Angular to server-rendered HTML without destroying and recreating it. This eliminates flickering and improves performance. "),t(),n(5,"h4"),e(6,"How Hydration Works"),t(),n(7,"ol")(8,"li"),e(9,"Server renders the application to HTML"),t(),n(10,"li"),e(11,"HTML is sent to the browser with hydration annotations"),t(),n(12,"li"),e(13,"Browser displays the static HTML immediately (fast FCP)"),t(),n(14,"li"),e(15,"Angular JavaScript loads and parses"),t(),n(16,"li"),e(17,'Angular "hydrates" by attaching to existing DOM'),t(),n(18,"li"),e(19,"Event listeners and interactivity are restored"),t(),n(20,"li"),e(21,"Application is fully functional"),t()(),n(22,"h4"),e(23,"Before Hydration (Angular < 16)"),t(),n(24,"ul",11)(25,"li"),e(26,"\u274C Angular would destroy server-rendered DOM"),t(),n(27,"li"),e(28,"\u274C Recreate everything from scratch"),t(),n(29,"li"),e(30,"\u274C Visible content flickering"),t(),n(31,"li"),e(32,"\u274C Lost user focus/scroll position"),t(),n(33,"li"),e(34,"\u274C Wasted rendering work"),t()(),n(35,"h4"),e(36,"With Hydration (Angular 16+)"),t(),n(37,"ul",12)(38,"li"),e(39,"\u2705 Preserves server-rendered DOM"),t(),n(40,"li"),e(41,"\u2705 Attaches to existing elements"),t(),n(42,"li"),e(43,"\u2705 No flickering or re-rendering"),t(),n(44,"li"),e(45,"\u2705 Maintains state and position"),t(),n(46,"li"),e(47,"\u2705 Better performance"),t()(),n(48,"pre")(49,"code",9),e(50),t()()()),i&2){let r=s();o(50),a(r.hydration)}}function C(i,d){if(i&1&&(n(0,"div",8)(1,"h3"),e(2,"Platform-Specific Code"),t(),n(3,"p"),e(4," Not all code can run on both server and browser. Use platform checks to conditionally execute code based on where your application is running. "),t(),n(5,"h4"),e(6,"Browser-Only APIs"),t(),n(7,"ul")(8,"li")(9,"code"),e(10,"window"),t(),e(11," - Browser window object"),t(),n(12,"li")(13,"code"),e(14,"document"),t(),e(15," - DOM document"),t(),n(16,"li")(17,"code"),e(18,"localStorage"),t(),e(19," / "),n(20,"code"),e(21,"sessionStorage"),t()(),n(22,"li")(23,"code"),e(24,"navigator"),t(),e(25," - Browser information"),t(),n(26,"li")(27,"code"),e(28,"WebSocket"),t(),e(29," - Real-time communication"),t(),n(30,"li"),e(31,"Third-party libraries that use DOM"),t()(),n(32,"h4"),e(33,"Server-Only Scenarios"),t(),n(34,"ul")(35,"li"),e(36,"File system access"),t(),n(37,"li"),e(38,"Database connections"),t(),n(39,"li"),e(40,"Environment variables"),t(),n(41,"li"),e(42,"Server-side caching"),t()(),n(43,"pre")(44,"code",9),e(45),t()(),n(46,"div",13)(47,"h4"),e(48,"\u26A0\uFE0F Common SSR Pitfalls"),t(),n(49,"ul")(50,"li"),e(51,"Accessing "),n(52,"code"),e(53,"window"),t(),e(54," or "),n(55,"code"),e(56,"document"),t(),e(57," without platform check"),t(),n(58,"li"),e(59,"Using browser-only libraries (charts, maps) directly"),t(),n(60,"li"),e(61,"Assuming "),n(62,"code"),e(63,"localStorage"),t(),e(64," is available"),t(),n(65,"li"),e(66,"Direct DOM manipulation in ngOnInit"),t(),n(67,"li"),e(68,"Timer-based code without cleanup"),t()()()()),i&2){let r=s();o(45),a(r.platformCheck)}}function y(i,d){if(i&1&&(n(0,"div",8)(1,"h3"),e(2,"Transferring Data from Server to Browser"),t(),n(3,"p"),e(4," Transfer State allows you to serialize data on the server and reuse it on the browser, avoiding duplicate HTTP requests and improving performance. "),t(),n(5,"h4"),e(6,"Why Transfer State?"),t(),n(7,"ul")(8,"li"),e(9,"Avoid duplicate API calls (server + browser)"),t(),n(10,"li"),e(11,"Faster browser interactivity"),t(),n(12,"li"),e(13,"Consistent data between SSR and hydration"),t(),n(14,"li"),e(15,"Reduced server load"),t()(),n(16,"h4"),e(17,"What to Transfer"),t(),n(18,"ul")(19,"li"),e(20,"Initial data from API calls"),t(),n(21,"li"),e(22,"User authentication state"),t(),n(23,"li"),e(24,"Configuration or settings"),t(),n(25,"li"),e(26,"Computed or derived data"),t()(),n(27,"pre")(28,"code",9),e(29),t()(),n(30,"div",14)(31,"h4"),e(32,"\u{1F3AF} Best Practices"),t(),n(33,"ul")(34,"li"),e(35,"Only transfer data needed for initial render"),t(),n(36,"li"),e(37,"Clear transferred data after use to prevent memory leaks"),t(),n(38,"li"),e(39,"Don't transfer sensitive data (use secure cookies instead)"),t(),n(40,"li"),e(41,"Consider data size - large transfers slow down hydration"),t(),n(42,"li"),e(43,"Use HTTP interceptors for automatic transfer state handling"),t()()()()),i&2){let r=s();o(29),a(r.transferState)}}function w(i,d){if(i&1&&(n(0,"div",8)(1,"h3"),e(2,"SSR Performance Optimization"),t(),n(3,"p"),e(4," Optimize your SSR setup to provide the best possible performance for both server and client. "),t(),n(5,"h4"),e(6,"Optimization Strategies"),t(),n(7,"ul")(8,"li")(9,"strong"),e(10,"Prerendering:"),t(),e(11," Generate static HTML at build time for static routes"),t(),n(12,"li")(13,"strong"),e(14,"Defer Non-Critical Content:"),t(),e(15," Use "),n(16,"code"),e(17,"@defer"),t(),e(18," blocks for below-fold content"),t(),n(19,"li")(20,"strong"),e(21,"Lazy Loading:"),t(),e(22," Load routes and components on-demand"),t(),n(23,"li")(24,"strong"),e(25,"Caching:"),t(),e(26," Cache rendered pages on CDN or server"),t(),n(27,"li")(28,"strong"),e(29,"Timeouts:"),t(),e(30," Set reasonable timeouts for SSR rendering"),t()(),n(31,"pre")(32,"code",9),e(33),t()(),n(34,"h3"),e(35,"Non-Destructive Hydration Details"),t(),n(36,"pre")(37,"code",9),e(38),t()(),n(39,"div",15)(40,"h4"),e(41,"\u{1F680} Performance Tips"),t(),n(42,"ul")(43,"li"),e(44,"Use prerendering for static pages (/, /about, /contact)"),t(),n(45,"li"),e(46,"Implement proper caching strategies (CDN, HTTP cache)"),t(),n(47,"li"),e(48,"Optimize Critical Rendering Path (minimize CSS, inline critical CSS)"),t(),n(49,"li"),e(50,"Use Image optimization (responsive images, lazy loading)"),t(),n(51,"li"),e(52,"Monitor SSR performance (rendering time, memory usage)"),t(),n(53,"li"),e(54,"Consider using a CDN for static assets"),t()()()()),i&2){let r=s();o(33),a(r.ssrOptimization),o(5),a(r.nonDestructiveHydration)}}function P(i,d){if(i&1&&(n(0,"div",8)(1,"h3"),e(2,"Production-Ready SSR Setup"),t(),n(3,"p"),e(4," This example shows a complete SSR setup with hydration, transfer state, and optimization strategies for a real-world application. "),t(),n(5,"pre")(6,"code",9),e(7),t()(),n(8,"div",16)(9,"h4"),e(10,"\u2705 SSR Checklist"),t(),n(11,"ul")(12,"li"),e(13,"\u2705 Enable SSR with "),n(14,"code"),e(15,"ng add @angular/ssr"),t()(),n(16,"li"),e(17,"\u2705 Enable hydration with "),n(18,"code"),e(19,"provideClientHydration()"),t()(),n(20,"li"),e(21,"\u2705 Add event replay with "),n(22,"code"),e(23,"withEventReplay()"),t()(),n(24,"li"),e(25,"\u2705 Implement transfer state for API calls"),t(),n(26,"li"),e(27,"\u2705 Add platform checks for browser-only code"),t(),n(28,"li"),e(29,"\u2705 Use "),n(30,"code"),e(31,"@defer"),t(),e(32," blocks for non-critical content"),t(),n(33,"li"),e(34,"\u2705 Configure prerendering for static routes"),t(),n(35,"li"),e(36,"\u2705 Add proper meta tags for SEO"),t(),n(37,"li"),e(38,"\u2705 Test without JavaScript enabled"),t(),n(39,"li"),e(40,"\u2705 Monitor Core Web Vitals (FCP, LCP, CLS)"),t()()(),n(41,"div",17)(42,"h4"),e(43,"\u{1F50D} SEO Optimization"),t(),n(44,"ul")(45,"li"),e(46,"Use proper meta tags (title, description, OG tags)"),t(),n(47,"li"),e(48,"Implement structured data (JSON-LD)"),t(),n(49,"li"),e(50,"Create sitemap.xml and robots.txt"),t(),n(51,"li"),e(52,"Ensure content is visible in server-rendered HTML"),t(),n(53,"li"),e(54,"Test with Google's Mobile-Friendly Test"),t(),n(55,"li"),e(56,"Monitor search console for indexing issues"),t()()()()),i&2){let r=s();o(7),a(r.realWorldSSR)}}var I=(()=>{class i{constructor(){this.basicSSR=`// Enable SSR in Angular 17+
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
}`,this.hydration=`// main.ts - Enable hydration
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
// - Reduced bandwidth usage`,this.platformCheck=`// Check if code is running on server or browser
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
}`,this.transferState=`// Transfer data from server to browser
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
};`,this.ssrOptimization=`// Optimize SSR performance

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
];`,this.nonDestructiveHydration=`// Non-destructive hydration (Angular 16+)
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
}`,this.realWorldSSR=`// Complete SSR setup example

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
}`}ngAfterViewChecked(){x.highlightAll()}static{this.\u0275fac=function(m){return new(m||i)}}static{this.\u0275cmp=c({type:i,selectors:[["app-learn-ssr-hydration"]],standalone:!0,features:[p],decls:17,vars:0,consts:[[1,"header"],["label","SSR Basics"],["matTabContent",""],["label","Hydration"],["label","Platform Detection"],["label","Transfer State"],["label","Optimization"],["label","Complete Example"],[1,"tab-content"],[1,"language-typescript"],[1,"info-box"],[1,"comparison"],[1,"comparison","success"],[1,"warning-box"],[1,"tip-box"],[1,"performance-tips"],[1,"checklist"],[1,"seo-tips"]],template:function(m,O){m&1&&(n(0,"h2",0),e(1,"Server-Side Rendering (SSR) & Hydration"),t(),n(2,"label"),e(3,"SSR renders your Angular application on the server for better performance, SEO, and user experience. Hydration makes the transition from server to browser seamless."),t(),n(4,"mat-tab-group")(5,"mat-tab",1),l(6,E,57,1,"ng-template",2),t(),n(7,"mat-tab",3),l(8,b,51,1,"ng-template",2),t(),n(9,"mat-tab",4),l(10,C,69,1,"ng-template",2),t(),n(11,"mat-tab",5),l(12,y,44,1,"ng-template",2),t(),n(13,"mat-tab",6),l(14,w,55,2,"ng-template",2),t(),n(15,"mat-tab",7),l(16,P,57,1,"ng-template",2),t()())},dependencies:[f,u,g,S],styles:[".header[_ngcontent-%COMP%]{color:#dd0031;font-size:2rem;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]{padding:20px}.tab-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#dd0031;margin-top:1.5rem;margin-bottom:.5rem}.tab-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#444;margin-top:1rem;margin-bottom:.5rem}.tab-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.6;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .tab-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{line-height:1.8;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background-color:#f4f4f4;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background-color:#f5f5f5;padding:15px;border-radius:5px;overflow-x:auto;margin:1rem 0}.info-box[_ngcontent-%COMP%]{background-color:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:20px 0;border-radius:4px}.info-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:.5rem}.info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.info-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1976d2}.warning-box[_ngcontent-%COMP%]{background-color:#fff3e0;border-left:4px solid #ff9800;padding:15px;margin:20px 0;border-radius:4px}.warning-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#f57c00}.tip-box[_ngcontent-%COMP%]{background-color:#e8f5e9;border-left:4px solid #4caf50;padding:15px;margin:20px 0;border-radius:4px}.tip-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#2e7d32}.performance-tips[_ngcontent-%COMP%]{background-color:#f3e5f5;border-left:4px solid #9c27b0;padding:15px;margin:20px 0;border-radius:4px}.performance-tips[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#7b1fa2}.checklist[_ngcontent-%COMP%], .seo-tips[_ngcontent-%COMP%]{background-color:#e0f2f1;border-left:4px solid #009688;padding:15px;margin:20px 0;border-radius:4px}.checklist[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .seo-tips[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#00796b}.checklist[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .seo-tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-bottom:0}.comparison[_ngcontent-%COMP%]{list-style:none;padding-left:0}.comparison[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:8px 12px;margin-bottom:6px;background-color:#ffebee;border-radius:4px}.comparison.success[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background-color:#e8f5e9}"]})}}return i})();export{I as LearnSsrHydrationComponent};
