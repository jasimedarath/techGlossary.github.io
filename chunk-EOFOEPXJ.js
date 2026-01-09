import"./chunk-WCULWZKC.js";import{a as h}from"./chunk-FSUYFWSG.js";import{a as g,b as u,c as x,d as f}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as r,Xa as l,da as m,e as S,gb as n,hb as e,lb as c,tb as t,ub as a,yb as p}from"./chunk-WGQ2ELTG.js";var v=S(h());function C(i,d){if(i&1&&(n(0,"div",9)(1,"h3"),t(2,"Modern Dependency Injection with inject()"),e(),n(3,"p"),t(4," Angular 14+ introduced the "),n(5,"code"),t(6,"inject()"),e(),t(7," function, providing a more flexible and functional approach to dependency injection compared to constructor injection. "),e(),n(8,"h4"),t(9,"Why Use inject()?"),e(),n(10,"ul")(11,"li")(12,"strong"),t(13,"Less boilerplate:"),e(),t(14," No need for constructor parameters"),e(),n(15,"li")(16,"strong"),t(17,"Functional composition:"),e(),t(18," Can be used in factory functions"),e(),n(19,"li")(20,"strong"),t(21,"Better tree-shaking:"),e(),t(22," Unused dependencies are eliminated"),e(),n(23,"li")(24,"strong"),t(25,"More flexible:"),e(),t(26," Can be used in field initializers"),e(),n(27,"li")(28,"strong"),t(29,"Easier testing:"),e(),t(30," Simpler to mock and override"),e()(),n(31,"h4"),t(32,"Comparison: Constructor vs inject()"),e(),n(33,"pre")(34,"code",10),t(35),e()(),n(36,"div",11)(37,"h4"),t(38,"\u{1F4A1} When to Use inject()"),e(),n(39,"p"),t(40,"The "),n(41,"code"),t(42,"inject()"),e(),t(43," function can only be called during:"),e(),n(44,"ul")(45,"li"),t(46,"Class field initialization"),e(),n(47,"li"),t(48,"Constructor execution"),e(),n(49,"li"),t(50,"Factory functions called by the injector"),e(),n(51,"li"),t(52,"Within an injection context"),e()()()()),i&2){let o=c();r(35),a(o.basicDI)}}function E(i,d){if(i&1&&(n(0,"div",9)(1,"h3"),t(2,"Using inject() in Functions"),e(),n(3,"p"),t(4," One of the most powerful features of "),n(5,"code"),t(6,"inject()"),e(),t(7," is the ability to use it in standalone functions, enabling better code reuse and composition. "),e(),n(8,"h4"),t(9,"Benefits"),e(),n(10,"ul")(11,"li"),t(12,"Create reusable factory functions"),e(),n(13,"li"),t(14,"Better separation of concerns"),e(),n(15,"li"),t(16,"Easier to compose functionality"),e(),n(17,"li"),t(18,"Improved testability"),e()(),n(19,"pre")(20,"code",10),t(21),e()(),n(22,"div",12)(23,"h4"),t(24,"\u{1F3AF} Best Practices"),e(),n(25,"ul")(26,"li"),t(27,"Use inject() for new code and components"),e(),n(28,"li"),t(29,"Create factory functions for complex initialization logic"),e(),n(30,"li"),t(31,"Combine with signals for reactive patterns"),e(),n(32,"li"),t(33,"Keep factory functions pure and focused"),e()()()()),i&2){let o=c();r(21),a(o.injectInFunctions)}}function b(i,d){if(i&1&&(n(0,"div",9)(1,"h3"),t(2,"Optional Dependencies and Injection Flags"),e(),n(3,"p"),t(4," Angular provides several flags to control how dependencies are resolved. These flags give you fine-grained control over the injection process. "),e(),n(5,"h4"),t(6,"Available Flags"),e(),n(7,"ul")(8,"li")(9,"strong"),t(10,"optional:"),e(),t(11," Returns null if dependency is not available"),e(),n(12,"li")(13,"strong"),t(14,"self:"),e(),t(15," Only look in the current injector"),e(),n(16,"li")(17,"strong"),t(18,"skipSelf:"),e(),t(19," Skip the current injector and look in parent"),e(),n(20,"li")(21,"strong"),t(22,"host:"),e(),t(23," Stop searching at the host component"),e()(),n(24,"pre")(25,"code",10),t(26),e()(),n(27,"div",13)(28,"h4"),t(29,"\u26A0\uFE0F Common Pitfalls"),e(),n(30,"ul")(31,"li"),t(32,"Don't overuse optional dependencies - they can hide configuration issues"),e(),n(33,"li"),t(34,"Be careful with skipSelf - ensure parent actually provides the service"),e(),n(35,"li"),t(36,"Self flag is rarely needed - use it only for specific scoping scenarios"),e()()()()),i&2){let o=c();r(26),a(o.optionalDI)}}function _(i,d){if(i&1&&(n(0,"div",9)(1,"h3"),t(2,"Understanding Provider Scopes"),e(),n(3,"p"),t(4," Angular's DI system is hierarchical. Understanding where to provide services is crucial for managing state and performance. "),e(),n(5,"h4"),t(6,"Scope Levels"),e(),n(7,"div",14)(8,"div",15)(9,"h5"),t(10,"Root (providedIn: 'root')"),e(),n(11,"p"),t(12,"Application-wide singleton, available everywhere, tree-shakeable"),e()(),n(13,"div",15)(14,"h5"),t(15,"Module (providedIn: SomeModule)"),e(),n(16,"p"),t(17,"Scoped to a feature module, loaded lazily with the module"),e()(),n(18,"div",15)(19,"h5"),t(20,"Component (providers: [...])"),e(),n(21,"p"),t(22,"New instance for each component and its children"),e()(),n(23,"div",15)(24,"h5"),t(25,"Platform"),e(),n(26,"p"),t(27,"Shared across multiple Angular applications on the same page"),e()()(),n(28,"pre")(29,"code",10),t(30),e()(),n(31,"div",16)(32,"h4"),t(33,"\u{1F4CB} When to Use Each Scope"),e(),n(34,"table")(35,"tr")(36,"th"),t(37,"Scope"),e(),n(38,"th"),t(39,"Use When"),e(),n(40,"th"),t(41,"Examples"),e()(),n(42,"tr")(43,"td"),t(44,"Root"),e(),n(45,"td"),t(46,"Shared across entire app"),e(),n(47,"td"),t(48,"AuthService, GlobalStateService"),e()(),n(49,"tr")(50,"td"),t(51,"Module"),e(),n(52,"td"),t(53,"Feature-specific, lazy loaded"),e(),n(54,"td"),t(55,"AdminService, ShoppingCartService"),e()(),n(56,"tr")(57,"td"),t(58,"Component"),e(),n(59,"td"),t(60,"Isolated state per component"),e(),n(61,"td"),t(62,"FormStateService, LocalFilterService"),e()()()()()),i&2){let o=c();r(30),a(o.providerScopes)}}function P(i,d){if(i&1&&(n(0,"div",9)(1,"h3"),t(2,"Custom Injection Tokens"),e(),n(3,"p"),t(4," Injection tokens allow you to provide and inject values that aren't classes, such as configuration objects, strings, or functions. "),e(),n(5,"h4"),t(6,"Why Use Injection Tokens?"),e(),n(7,"ul")(8,"li"),t(9,"Provide configuration objects"),e(),n(10,"li"),t(11,"Type-safe non-class dependencies"),e(),n(12,"li"),t(13,"Avoid naming collisions"),e(),n(14,"li"),t(15,"Create flexible APIs"),e()(),n(16,"pre")(17,"code",10),t(18),e()(),n(19,"h3"),t(20,"Factory Providers"),e(),n(21,"p"),t(22," Factory providers allow you to create dependencies dynamically based on other dependencies or runtime conditions. "),e(),n(23,"pre")(24,"code",10),t(25),e()()()),i&2){let o=c();r(18),a(o.injectionTokens),r(7),a(o.factoryProviders)}}function j(i,d){if(i&1&&(n(0,"div",9)(1,"h3"),t(2,"Understanding Hierarchical Dependency Injection"),e(),n(3,"p"),t(4," Angular's DI system is hierarchical, meaning injectors form a tree structure that mirrors your component tree. This enables powerful scoping strategies. "),e(),n(5,"h4"),t(6,"Injector Hierarchy"),e(),n(7,"div",17)(8,"div",18),t(9,"Platform Injector (shared across apps)"),e(),n(10,"div",19),t(11,"\u2193"),e(),n(12,"div",18),t(13,"Root Injector (application singleton)"),e(),n(14,"div",19),t(15,"\u2193"),e(),n(16,"div",18),t(17,"Module Injector (lazy loaded modules)"),e(),n(18,"div",19),t(19,"\u2193"),e(),n(20,"div",18),t(21,"Component Injector (component instance)"),e(),n(22,"div",19),t(23,"\u2193"),e(),n(24,"div",18),t(25,"Element Injector (directives)"),e()(),n(26,"pre")(27,"code",10),t(28),e()(),n(29,"div",20)(30,"h4"),t(31,"\u{1F3AF} Common Use Cases"),e(),n(32,"ul")(33,"li")(34,"strong"),t(35,"Form State:"),e(),t(36," Provide FormService at component level for isolated form state"),e(),n(37,"li")(38,"strong"),t(39,"Filter State:"),e(),t(40," Provide FilterService per list component"),e(),n(41,"li")(42,"strong"),t(43,"Theme Context:"),e(),t(44," Provide theme at module level for feature-specific theming"),e(),n(45,"li")(46,"strong"),t(47,"Multi-tenancy:"),e(),t(48," Provide tenant config at component subtree level"),e()()()()),i&2){let o=c();r(28),a(o.hierarchicalDI)}}function y(i,d){if(i&1&&(n(0,"div",9)(1,"h3"),t(2,"Complete Real-World Example"),e(),n(3,"p"),t(4," This example demonstrates a modern Angular feature store using inject(), signals, and proper dependency injection patterns. "),e(),n(5,"pre")(6,"code",10),t(7),e()(),n(8,"div",21)(9,"h4"),t(10,"\u2705 Key Takeaways"),e(),n(11,"ul")(12,"li"),t(13,"Use "),n(14,"code"),t(15,"inject()"),e(),t(16," for cleaner code"),e(),n(17,"li"),t(18,"Provide stores at component level for isolated state"),e(),n(19,"li"),t(20,"Combine with signals for reactive patterns"),e(),n(21,"li"),t(22,"Use injection tokens for configuration"),e(),n(23,"li"),t(24,"Keep services focused and single-purpose"),e(),n(25,"li"),t(26,"Leverage computed signals for derived state"),e()()()()),i&2){let o=c();r(7),a(o.realWorldExample)}}var F=(()=>{class i{constructor(){this.basicDI=`// Old constructor injection
@Component({
  selector: 'app-user-profile',
  template: '<div>{{ user.name }}</div>'
})
export class UserProfileComponent {
  constructor(
    private userService: UserService,
    private http: HttpClient,
    private router: Router
  ) {}
}

// New inject() function
import { inject } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  template: '<div>{{ user.name }}</div>'
})
export class UserProfileComponent {
  private userService = inject(UserService);
  private http = inject(HttpClient);
  private router = inject(Router);
  
  // Can be used anywhere in the class during construction
  private logger = inject(LoggerService);
}`,this.injectInFunctions=`// Using inject() in functions
export function createUserStore() {
  const http = inject(HttpClient);
  const authService = inject(AuthService);
  
  return {
    loadUsers: () => http.get('/api/users'),
    currentUser: authService.currentUser
  };
}

// Using in class initializers
@Component({...})
export class DashboardComponent {
  // Can use inject in field initializers
  private store = createUserStore();
  
  // Computed values using injected services
  private authService = inject(AuthService);
  isAdmin = computed(() => 
    this.authService.currentUser()?.role === 'admin'
  );
}

// Factory functions with inject
export function createLogger(prefix: string) {
  const console = inject(ConsoleService);
  
  return {
    log: (message: string) => console.log(\`[\${prefix}] \${message}\`),
    error: (message: string) => console.error(\`[\${prefix}] \${message}\`)
  };
}`,this.optionalDI=`// Optional dependencies
import { inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({...})
export class MyComponent {
  // Optional injection - returns null if not available
  private analytics = inject(AnalyticsService, { optional: true });
  
  // With default value
  private config = inject(ConfigService, { optional: true }) ?? defaultConfig;
  
  trackEvent(event: string) {
    // Safe to call if available
    this.analytics?.track(event);
  }
}

// Self and SkipSelf
@Component({
  providers: [LocalService]
})
export class ParentComponent {
  // Gets the instance from this component's injector
  private local = inject(LocalService, { self: true });
  
  // Skips this component, looks in parent injectors
  private parent = inject(GlobalService, { skipSelf: true });
}`,this.providerScopes=`// Root-level providers (application-wide singleton)
@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  private state = signal({ count: 0 });
  
  increment() {
    this.state.update(s => ({ count: s.count + 1 }));
  }
}

// Component-level providers (new instance per component)
@Component({
  selector: 'app-user-form',
  providers: [FormStateService],
  template: '...'
})
export class UserFormComponent {
  private formState = inject(FormStateService);
}

// Lazy loaded module providers
@Injectable({
  providedIn: AdminModule
})
export class AdminService {
  // Only loaded when AdminModule is loaded
}

// Platform providers (shared across multiple apps)
platformBrowserDynamic([
  { provide: LOCALE_ID, useValue: 'en-US' }
]).bootstrapApplication(AppComponent);`,this.injectionTokens=`// Creating custom injection tokens
import { InjectionToken } from '@angular/core';

// Simple value token
export const API_URL = new InjectionToken<string>('API_URL');

// Complex type token
export interface AppConfig {
  apiUrl: string;
  timeout: number;
  retries: number;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

// Providing tokens
export const appConfig: ApplicationConfig = {
  providers: [
    { provide: API_URL, useValue: 'https://api.example.com' },
    {
      provide: APP_CONFIG,
      useValue: {
        apiUrl: 'https://api.example.com',
        timeout: 30000,
        retries: 3
      }
    }
  ]
};

// Using tokens with inject()
@Component({...})
export class ApiComponent {
  private apiUrl = inject(API_URL);
  private config = inject(APP_CONFIG);
  
  fetchData() {
    return fetch(this.apiUrl);
  }
}`,this.factoryProviders=`// Factory providers with dependencies
export function createHttpClient(config: AppConfig, logger: Logger) {
  return new HttpClient(config.apiUrl, {
    timeout: config.timeout,
    logger: logger
  });
}

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: HTTP_CLIENT,
      useFactory: createHttpClient,
      deps: [APP_CONFIG, Logger]
    }
  ]
};

// Factory with inject() - cleaner approach
export function httpClientFactory() {
  const config = inject(APP_CONFIG);
  const logger = inject(Logger);
  
  return new HttpClient(config.apiUrl, {
    timeout: config.timeout,
    logger: logger
  });
}

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: HTTP_CLIENT,
      useFactory: httpClientFactory
    }
  ]
};`,this.hierarchicalDI=`// Hierarchical Dependency Injection
// App-level service
@Injectable({ providedIn: 'root' })
export class GlobalUserService {
  private users = signal<User[]>([]);
}

// Feature module service
@Injectable({ providedIn: ShoppingModule })
export class ShoppingCartService {
  private cart = signal<CartItem[]>([]);
}

// Component-level service
@Component({
  selector: 'app-product-list',
  providers: [FilterService], // New instance for each component
  template: '...'
})
export class ProductListComponent {
  private filterService = inject(FilterService);
  private globalUsers = inject(GlobalUserService); // Shared instance
}

// Understanding the lookup
/*
Component
  \u2193 (not found)
Parent Component
  \u2193 (not found)
Feature Module
  \u2193 (not found)
Root Injector
  \u2193 (not found)
Platform Injector
  \u2193 (not found)
Null Injector (throws error)
*/`,this.realWorldExample=`// Real-world example: Feature store with DI
import { inject, Injectable, signal, computed } from '@angular/core';

// API Configuration
export const API_CONFIG = new InjectionToken<{
  baseUrl: string;
  timeout: number;
}>('api.config');

// Feature Store using inject()
@Injectable()
export class TodoStore {
  private http = inject(HttpClient);
  private config = inject(API_CONFIG);
  
  // State
  private todos = signal<Todo[]>([]);
  private loading = signal(false);
  private error = signal<string | null>(null);
  
  // Selectors
  readonly allTodos = this.todos.asReadonly();
  readonly isLoading = this.loading.asReadonly();
  readonly completedTodos = computed(() =>
    this.todos().filter(t => t.completed)
  );
  readonly pendingTodos = computed(() =>
    this.todos().filter(t => !t.completed)
  );
  
  // Actions
  async loadTodos() {
    this.loading.set(true);
    this.error.set(null);
    
    try {
      const url = \`\${this.config.baseUrl}/todos\`;
      const todos = await firstValueFrom(
        this.http.get<Todo[]>(url)
      );
      this.todos.set(todos);
    } catch (err) {
      this.error.set('Failed to load todos');
    } finally {
      this.loading.set(false);
    }
  }
  
  addTodo(title: string) {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false
    };
    this.todos.update(todos => [...todos, newTodo]);
  }
}

// Component using the store
@Component({
  selector: 'app-todo-list',
  providers: [TodoStore], // Scoped to component
  template: \`
    <div>
      @if (store.isLoading()) {
        <spinner />
      } @else {
        @for (todo of store.allTodos(); track todo.id) {
          <todo-item [todo]="todo" />
        }
      }
      
      <div class="stats">
        Completed: {{ store.completedTodos().length }}
        Pending: {{ store.pendingTodos().length }}
      </div>
    </div>
  \`
})
export class TodoListComponent implements OnInit {
  protected store = inject(TodoStore);
  
  ngOnInit() {
    this.store.loadTodos();
  }
}`}ngAfterViewChecked(){v.highlightAll()}static{this.\u0275fac=function(s){return new(s||i)}}static{this.\u0275cmp=m({type:i,selectors:[["app-learn-dependency-injection"]],standalone:!0,features:[p],decls:19,vars:0,consts:[[1,"header"],["label","inject() Function"],["matTabContent",""],["label","Functional Injection"],["label","Optional & Flags"],["label","Provider Scopes"],["label","Injection Tokens"],["label","Hierarchical DI"],["label","Real-World Example"],[1,"tab-content"],[1,"language-typescript"],[1,"info-box"],[1,"tip-box"],[1,"warning-box"],[1,"scope-levels"],[1,"scope-item"],[1,"decision-guide"],[1,"hierarchy-diagram"],[1,"level"],[1,"arrow"],[1,"use-cases"],[1,"best-practices"]],template:function(s,M){s&1&&(n(0,"h2",0),t(1,"Dependency Injection"),e(),n(2,"label"),t(3,"Dependency Injection is Angular's powerful system for managing dependencies and creating maintainable, testable applications."),e(),n(4,"mat-tab-group")(5,"mat-tab",1),l(6,C,53,1,"ng-template",2),e(),n(7,"mat-tab",3),l(8,E,34,1,"ng-template",2),e(),n(9,"mat-tab",4),l(10,b,37,1,"ng-template",2),e(),n(11,"mat-tab",5),l(12,_,63,1,"ng-template",2),e(),n(13,"mat-tab",6),l(14,P,26,2,"ng-template",2),e(),n(15,"mat-tab",7),l(16,j,49,1,"ng-template",2),e(),n(17,"mat-tab",8),l(18,y,27,1,"ng-template",2),e()())},dependencies:[f,g,u,x],styles:[".header[_ngcontent-%COMP%]{color:#dd0031;font-size:2rem;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]{padding:20px}.tab-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#dd0031;margin-top:1.5rem;margin-bottom:.5rem}.tab-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .tab-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#444;margin-top:1rem;margin-bottom:.5rem}.tab-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.6;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{line-height:1.8;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background-color:#f4f4f4;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background-color:#f5f5f5;padding:15px;border-radius:5px;overflow-x:auto;margin:1rem 0}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin:1rem 0}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #ddd;padding:12px;text-align:left}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#f5f5f5;font-weight:600}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#fafafa}.info-box[_ngcontent-%COMP%]{background-color:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:20px 0;border-radius:4px}.info-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.tip-box[_ngcontent-%COMP%]{background-color:#e8f5e9;border-left:4px solid #4caf50;padding:15px;margin:20px 0;border-radius:4px}.tip-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#2e7d32}.warning-box[_ngcontent-%COMP%]{background-color:#fff3e0;border-left:4px solid #ff9800;padding:15px;margin:20px 0;border-radius:4px}.warning-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#f57c00}.decision-guide[_ngcontent-%COMP%]{background-color:#f3e5f5;padding:15px;margin:20px 0;border-radius:4px}.decision-guide[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#7b1fa2}.scope-levels[_ngcontent-%COMP%]{margin:20px 0}.scope-levels[_ngcontent-%COMP%]   .scope-item[_ngcontent-%COMP%]{background-color:#fafafa;border-left:3px solid #dd0031;padding:15px;margin-bottom:10px;border-radius:4px}.scope-levels[_ngcontent-%COMP%]   .scope-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 8px;color:#dd0031}.scope-levels[_ngcontent-%COMP%]   .scope-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:.95rem;color:#666}.hierarchy-diagram[_ngcontent-%COMP%]{background-color:#f9f9f9;padding:20px;border-radius:8px;margin:20px 0;text-align:center}.hierarchy-diagram[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]{background-color:#fff;border:2px solid #dd0031;padding:12px 20px;border-radius:6px;margin:5px auto;max-width:400px;font-weight:500}.hierarchy-diagram[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{color:#dd0031;font-size:1.5rem;margin:5px 0}.use-cases[_ngcontent-%COMP%], .best-practices[_ngcontent-%COMP%]{background-color:#e0f2f1;border-left:4px solid #009688;padding:15px;margin:20px 0;border-radius:4px}.use-cases[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .best-practices[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#00796b}.use-cases[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .best-practices[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-bottom:0}.use-cases[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .best-practices[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#00796b}"]})}}return i})();export{F as LearnDependencyInjectionComponent};
