import"./chunk-WCULWZKC.js";import{a as b}from"./chunk-VDRUEQXK.js";import{a as g,b as u,c as x,d as h}from"./chunk-GNZ74KMC.js";import"./chunk-XAZLOLJU.js";import"./chunk-SZTU5CXE.js";import{Ia as l,Ya as o,da as c,e as S,hb as n,ib as t,mb as r,ub as e,vb as s,zb as p}from"./chunk-KMNIY7WT.js";var f=S(b());function E(i,d){if(i&1&&(n(0,"div",9)(1,"h3"),e(2,"What are Signals?"),t(),n(3,"p"),e(4," Signals are a reactive primitive introduced in Angular 16 that notify interested consumers when their value changes. They provide a new way to manage state and reactivity in Angular applications with better performance and developer experience. "),t(),n(5,"h4"),e(6,"Key Concepts"),t(),n(7,"ul")(8,"li")(9,"strong"),e(10,"Writable Signal:"),t(),e(11," Created with "),n(12,"code"),e(13,"signal()"),t(),e(14,", can be read and updated"),t(),n(15,"li")(16,"strong"),e(17,"Computed Signal:"),t(),e(18," Derived from other signals, automatically updates"),t(),n(19,"li")(20,"strong"),e(21,"Effect:"),t(),e(22," Side effects that run when signals change"),t(),n(23,"li")(24,"strong"),e(25,"Fine-grained Reactivity:"),t(),e(26," Only affected components update"),t()(),n(27,"h4"),e(28,"Why Use Signals?"),t(),n(29,"ul")(30,"li"),e(31,"\u{1F680} "),n(32,"strong"),e(33,"Better Performance:"),t(),e(34," Fine-grained reactivity, no zone.js overhead"),t(),n(35,"li"),e(36,"\u{1F3AF} "),n(37,"strong"),e(38,"Simpler Code:"),t(),e(39," Less boilerplate than RxJS for simple state"),t(),n(40,"li"),e(41,"\u{1F50D} "),n(42,"strong"),e(43,"Better Debugging:"),t(),e(44," Clear dependency graph"),t(),n(45,"li"),e(46,"\u26A1 "),n(47,"strong"),e(48,"Automatic Updates:"),t(),e(49," Computed values update automatically"),t(),n(50,"li"),e(51,"\u{1F3C3} "),n(52,"strong"),e(53,"Zoneless Future:"),t(),e(54," Enables running without zone.js"),t()(),n(55,"pre")(56,"code",10),e(57),t()(),n(58,"div",11)(59,"h4"),e(60,"\u{1F4A1} Signal Reading Syntax"),t(),n(61,"p"),e(62," Signals use a function call syntax to read values: "),n(63,"code"),e(64,"count()"),t(),e(65,". This allows Angular to track dependencies automatically and is necessary for the reactive system to work. "),t()()()),i&2){let a=r();l(57),s(a.basicSignals)}}function C(i,d){if(i&1&&(n(0,"div",9)(1,"h3"),e(2,"Computed Signals"),t(),n(3,"p"),e(4," Computed signals derive their value from other signals. They automatically track dependencies and only recompute when dependent signals change, making them highly efficient. "),t(),n(5,"h4"),e(6,"Characteristics"),t(),n(7,"ul")(8,"li")(9,"strong"),e(10,"Readonly:"),t(),e(11," Cannot be directly set, only computed from dependencies"),t(),n(12,"li")(13,"strong"),e(14,"Lazy:"),t(),e(15," Only computes when read and dependencies have changed"),t(),n(16,"li")(17,"strong"),e(18,"Memoized:"),t(),e(19," Caches result until dependencies change"),t(),n(20,"li")(21,"strong"),e(22,"Automatic Dependencies:"),t(),e(23," Tracks all signals read during computation"),t()(),n(24,"h4"),e(25,"When to Use Computed"),t(),n(26,"ul")(27,"li"),e(28,"Deriving data from other signals"),t(),n(29,"li"),e(30,"Filtering or transforming signal data"),t(),n(31,"li"),e(32,"Creating complex calculations"),t(),n(33,"li"),e(34,"Building dependent state chains"),t()(),n(35,"pre")(36,"code",10),e(37),t()(),n(38,"div",12)(39,"h4"),e(40,"\u{1F3AF} Best Practices"),t(),n(41,"ul")(42,"li"),e(43,"Keep computed functions pure (no side effects)"),t(),n(44,"li"),e(45,"Computed signals should be cheap to calculate"),t(),n(46,"li"),e(47,"Use computed for derived state, effect for side effects"),t(),n(48,"li"),e(49,"Avoid circular dependencies between computed signals"),t()()()()),i&2){let a=r();l(37),s(a.computedSignals)}}function v(i,d){if(i&1&&(n(0,"div",9)(1,"h3"),e(2,"Effects"),t(),n(3,"p"),e(4," Effects are operations that run when signals they depend on change. Unlike computed signals, effects are designed for side effects like logging, API calls, or DOM manipulation. "),t(),n(5,"h4"),e(6,"Effect Characteristics"),t(),n(7,"ul")(8,"li"),e(9,"Run automatically when dependent signals change"),t(),n(10,"li"),e(11,"Should be used for side effects only"),t(),n(12,"li"),e(13,"Support cleanup functions"),t(),n(14,"li"),e(15,"Run at least once on creation"),t()(),n(16,"h4"),e(17,"Common Use Cases"),t(),n(18,"ul")(19,"li"),e(20,"Logging or analytics"),t(),n(21,"li"),e(22,"Synchronizing with localStorage"),t(),n(23,"li"),e(24,"Triggering API calls"),t(),n(25,"li"),e(26,"DOM manipulation"),t(),n(27,"li"),e(28,"WebSocket connections"),t()(),n(29,"pre")(30,"code",10),e(31),t()(),n(32,"div",13)(33,"h4"),e(34,"\u26A0\uFE0F Important Notes"),t(),n(35,"ul")(36,"li"),e(37,"Effects run in an async task by default"),t(),n(38,"li"),e(39,"Don't update signals within effects (can cause infinite loops)"),t(),n(40,"li"),e(41,"Use "),n(42,"code"),e(43,"allowSignalWrites"),t(),e(44," option if absolutely necessary"),t(),n(45,"li"),e(46,"Effects should not return values - use computed instead"),t(),n(47,"li"),e(48,"Always provide cleanup for subscriptions or timers"),t()()()()),i&2){let a=r();l(31),s(a.effectSignals)}}function y(i,d){if(i&1&&(n(0,"div",9)(1,"h3"),e(2,"Signal-based Inputs (Angular 17.1+)"),t(),n(3,"p"),e(4," Signal inputs provide a reactive way to handle component inputs, replacing the traditional "),n(5,"code"),e(6,"@Input()"),t(),e(7," decorator with a more powerful and type-safe API. "),t(),n(8,"h4"),e(9,"Advantages Over "),n(10,"code"),e(11,"@Input()"),t()(),n(12,"ul")(13,"li"),e(14,"Better type safety and inference"),t(),n(15,"li"),e(16,"Can be used in computed and effect"),t(),n(17,"li"),e(18,"Required inputs are type-checked at compile time"),t(),n(19,"li"),e(20,"Transform functions are type-safe"),t(),n(21,"li"),e(22,"No OnChanges lifecycle hook needed"),t()(),n(23,"h4"),e(24,"Input Types"),t(),n(25,"ul")(26,"li")(27,"code"),e(28,"input()"),t(),e(29," - Optional input with default"),t(),n(30,"li")(31,"code"),e(32,"input.required()"),t(),e(33," - Required input"),t(),n(34,"li")(35,"code"),e(36,"model()"),t(),e(37," - Two-way binding signal"),t(),n(38,"li")(39,"code"),e(40,"linkedSignal()"),t(),e(41," - Writable signal linked to input"),t()(),n(42,"pre")(43,"code",10),e(44),t()(),n(45,"div",14)(46,"h4"),e(47,"\u{1F4E6} Migration Path"),t(),n(48,"pre")(49,"code"),e(50,`// Before (traditional)
@Input() name: string;
@Input() required email!: string;
@Output() nameChange = new EventEmitter<string>();

// After (signals)
name = input<string>('');
email = input.required<string>();
name = model<string>('');`),t()()()()),i&2){let a=r();l(44),s(a.signalInputs)}}function _(i,d){if(i&1&&(n(0,"div",9)(1,"h3"),e(2,"Linked Signals (Angular 18+)"),t(),n(3,"p"),e(4," Linked signals create a writable signal that tracks an input signal but can also be modified independently. They reset to the source value when the source changes. "),t(),n(5,"h4"),e(6,"Use Cases"),t(),n(7,"ul")(8,"li"),e(9,"Form fields that need local edits and reset functionality"),t(),n(10,"li"),e(11,"Filters that can be temporarily overridden"),t(),n(12,"li"),e(13,"Draft state that syncs with saved data"),t(),n(14,"li"),e(15,"Optimistic UI updates with rollback"),t()(),n(16,"pre")(17,"code",10),e(18),t()(),n(19,"div",15)(20,"h4"),e(21,"\u{1F3A8} Common Pattern: Editable with Reset"),t(),n(22,"pre")(23,"code"),e(24,`// Perfect for forms where you want to:
// 1. Show initial value from parent
// 2. Allow local edits
// 3. Reset back to original

editableValue = linkedSignal(() => this.originalValue());
hasChanges = computed(() => 
  this.editableValue() !== this.originalValue()
);`),t()()()()),i&2){let a=r();l(18),s(a.linkedSignal)}}function P(i,d){if(i&1&&(n(0,"div",9)(1,"h3"),e(2,"Interoperability with RxJS"),t(),n(3,"p"),e(4," Angular provides utilities to convert between signals and observables, allowing you to leverage both paradigms in your application. "),t(),n(5,"h4"),e(6,"Conversion Functions"),t(),n(7,"ul")(8,"li")(9,"code"),e(10,"toSignal()"),t(),e(11," - Converts Observable to Signal"),t(),n(12,"li")(13,"code"),e(14,"toObservable()"),t(),e(15," - Converts Signal to Observable"),t()(),n(16,"h4"),e(17,"When to Use Each"),t(),n(18,"table")(19,"tr")(20,"th"),e(21,"Use Signals For"),t(),n(22,"th"),e(23,"Use RxJS For"),t()(),n(24,"tr")(25,"td"),e(26,"Component state"),t(),n(27,"td"),e(28,"HTTP requests"),t()(),n(29,"tr")(30,"td"),e(31,"Simple transformations"),t(),n(32,"td"),e(33,"Complex async operations"),t()(),n(34,"tr")(35,"td"),e(36,"Derived values"),t(),n(37,"td"),e(38,"Debouncing, throttling"),t()(),n(39,"tr")(40,"td"),e(41,"UI state"),t(),n(42,"td"),e(43,"WebSocket streams"),t()()(),n(44,"pre")(45,"code",10),e(46),t()(),n(47,"div",12)(48,"h4"),e(49,"\u{1F4A1} Best Practices"),t(),n(50,"ul")(51,"li"),e(52,"Use signals for synchronous state management"),t(),n(53,"li"),e(54,"Use RxJS for complex async operations"),t(),n(55,"li"),e(56,"Convert at the boundaries (service \u2192 signal)"),t(),n(57,"li"),e(58,"Prefer signals for component-local state"),t(),n(59,"li"),e(60,"toSignal requires initialValue or can return undefined"),t()()()()),i&2){let a=r();l(46),s(a.signalsRxjs)}}function w(i,d){if(i&1&&(n(0,"div",9)(1,"h3"),e(2,"Advanced Signal Patterns"),t(),n(3,"p"),e(4," These patterns demonstrate how to build sophisticated state management solutions using signals. "),t(),n(5,"pre")(6,"code",10),e(7),t()(),n(8,"div",16)(9,"h4"),e(10,"\u2705 Signal Best Practices"),t(),n(11,"ul")(12,"li")(13,"strong"),e(14,"Immutability:"),t(),e(15," Always update signals immutably"),t(),n(16,"li")(17,"strong"),e(18,"Privacy:"),t(),e(19," Expose readonly signals, keep writable private"),t(),n(20,"li")(21,"strong"),e(22,"Granularity:"),t(),e(23," Break state into smaller signals for better performance"),t(),n(24,"li")(25,"strong"),e(26,"Computation:"),t(),e(27," Use computed for derived state, not manual updates"),t(),n(28,"li")(29,"strong"),e(30,"Effects:"),t(),e(31," Keep effects focused and provide cleanup"),t(),n(32,"li")(33,"strong"),e(34,"Testing:"),t(),e(35," Signals are easy to test - just set values and read results"),t()()(),n(36,"div",17)(37,"h4"),e(38,"\u{1F680} Performance Tips"),t(),n(39,"ul")(40,"li"),e(41,"Signals enable OnPush-like performance everywhere"),t(),n(42,"li"),e(43,"Computed signals only recalculate when dependencies change"),t(),n(44,"li"),e(45,"No need for ChangeDetectorRef or manual detection"),t(),n(46,"li"),e(47,"Works towards zoneless Angular applications"),t(),n(48,"li"),e(49,"Fine-grained updates mean less work for Angular"),t()()()()),i&2){let a=r();l(7),s(a.advancedPatterns)}}var I=(()=>{class i{constructor(){this.basicSignals=`import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: \`
    <div>
      <p>Count: {{ count() }}</p>
      <button (click)="increment()">Increment</button>
    </div>
  \`
})
export class CounterComponent {
  // Creating a signal with initial value
  count = signal(0);
  
  // Reading a signal value (must use () to read)
  increment() {
    this.count.update(value => value + 1);
  }
  
  // Setting a new value directly
  reset() {
    this.count.set(0);
  }
}`,this.computedSignals=`import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  template: \`
    <div>
      <p>Items: {{ items().length }}</p>
      <p>Total: \${{ total() }}</p>
      <p>Tax: \${{ tax() }}</p>
      <p>Final Price: \${{ finalPrice() }}</p>
    </div>
  \`
})
export class ShoppingCartComponent {
  items = signal<CartItem[]>([
    { id: 1, name: 'Product A', price: 10, quantity: 2 },
    { id: 2, name: 'Product B', price: 15, quantity: 1 }
  ]);
  
  taxRate = signal(0.08); // 8% tax
  
  // Computed signal - automatically updates when dependencies change
  total = computed(() => {
    return this.items().reduce((sum, item) => 
      sum + (item.price * item.quantity), 0
    );
  });
  
  // Computed signals can depend on other computed signals
  tax = computed(() => this.total() * this.taxRate());
  
  finalPrice = computed(() => this.total() + this.tax());
  
  addItem(item: CartItem) {
    this.items.update(items => [...items, item]);
    // total, tax, and finalPrice automatically recalculate!
  }
}`,this.effectSignals=`import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  template: '...'
})
export class UserProfileComponent {
  userId = signal<string | null>(null);
  userData = signal<User | null>(null);
  
  constructor() {
    // Effect runs when userId changes
    effect(() => {
      const id = this.userId();
      if (id) {
        console.log('Loading user data for:', id);
        this.loadUserData(id);
      }
    });
    
    // Effect with cleanup
    effect((onCleanup) => {
      const theme = this.theme();
      document.body.className = theme;
      
      // Cleanup function runs before next effect or on destroy
      onCleanup(() => {
        document.body.className = '';
      });
    });
  }
  
  async loadUserData(id: string) {
    const data = await fetch(\`/api/users/\${id}\`).then(r => r.json());
    this.userData.set(data);
  }
}

// Using effect for synchronization
@Component({...})
export class LocalStorageSync {
  settings = signal({ theme: 'light', lang: 'en' });
  
  constructor() {
    // Sync to localStorage whenever settings change
    effect(() => {
      const settings = this.settings();
      localStorage.setItem('settings', JSON.stringify(settings));
    });
  }
}`,this.signalInputs=`import { Component, input, model } from '@angular/core';

// Signal-based inputs (Angular 17.1+)
@Component({
  selector: 'app-user-card',
  template: \`
    <div class="card">
      <h3>{{ name() }}</h3>
      <p>{{ email() }}</p>
      @if (showDetails()) {
        <div>{{ details() }}</div>
      }
    </div>
  \`
})
export class UserCardComponent {
  // Required input
  name = input.required<string>();
  
  // Optional input with default value
  email = input<string>('no-email@example.com');
  
  // Optional input (can be undefined)
  details = input<string>();
  
  // With transform function
  showDetails = input<boolean, string>(false, {
    transform: (value: string) => value === 'true'
  });
  
  // Alias
  userId = input<number>('', { alias: 'id' });
}

// Two-way binding with model()
@Component({
  selector: 'app-search-box',
  template: \`
    <input 
      [value]="searchTerm()" 
      (input)="searchTerm.set($event.target.value)"
    />
  \`
})
export class SearchBoxComponent {
  // Two-way bindable signal
  searchTerm = model<string>('');
  
  // With default value
  selectedItems = model<string[]>([]);
}

// Usage in parent
@Component({
  template: \`
    <app-search-box [(searchTerm)]="query" />
  \`
})
export class ParentComponent {
  query = signal('');
}`,this.linkedSignal=`import { Component, signal, computed, linkedSignal } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  template: '...'
})
export class ProductFilterComponent {
  category = input<string>('all');
  
  // linkedSignal creates a writable signal that updates when input changes
  // but can also be modified locally
  selectedCategory = linkedSignal(() => this.category());
  
  // Use case: reset to input value but allow local modifications
  constructor() {
    // selectedCategory starts with category value
    // Can be updated independently: this.selectedCategory.set('electronics')
    // Resets when category input changes
  }
}

// Real-world example: Form with reset capability
@Component({
  selector: 'app-editable-profile',
  template: \`
    <div>
      <input [value]="editableName()" 
             (input)="editableName.set($event.target.value)" />
      <button (click)="reset()">Reset</button>
    </div>
  \`
})
export class EditableProfileComponent {
  originalName = input.required<string>();
  
  // Linked signal allows editing while keeping track of original
  editableName = linkedSignal(() => this.originalName());
  
  hasChanges = computed(() => 
    this.editableName() !== this.originalName()
  );
  
  reset() {
    this.editableName.set(this.originalName());
  }
}`,this.signalsRxjs=`import { Component, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  template: \`
    <input (input)="searchTerm.set($event.target.value)" />
    
    @if (loading()) {
      <div>Loading...</div>
    }
    
    @for (result of results(); track result.id) {
      <div>{{ result.name }}</div>
    }
  \`
})
export class SearchComponent {
  private http = inject(HttpClient);
  
  // Signal for input
  searchTerm = signal('');
  
  // Convert signal to observable for RxJS operators
  private searchTerm$ = toObservable(this.searchTerm);
  
  // Process with RxJS and convert back to signal
  results = toSignal(
    this.searchTerm$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.http.get<Result[]>(\`/api/search?q=\${term}\`))
    ),
    { initialValue: [] }
  );
  
  loading = signal(false);
}

// Converting observables to signals
@Component({...})
export class UserComponent {
  private route = inject(ActivatedRoute);
  
  // Convert route params to signal
  userId = toSignal(
    this.route.params.pipe(map(p => p['id'])),
    { initialValue: null }
  );
  
  // Use in computed
  userUrl = computed(() => 
    this.userId() ? \`/api/users/\${this.userId()}\` : null
  );
}`,this.advancedPatterns=`// Pattern 1: Signal-based store
import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TodoStore {
  // Private state
  private _todos = signal<Todo[]>([]);
  private _loading = signal(false);
  
  // Public readonly signals
  readonly todos = this._todos.asReadonly();
  readonly loading = this._loading.asReadonly();
  
  // Computed selectors
  readonly completedTodos = computed(() =>
    this._todos().filter(t => t.completed)
  );
  
  readonly activeTodos = computed(() =>
    this._todos().filter(t => !t.completed)
  );
  
  readonly stats = computed(() => ({
    total: this._todos().length,
    completed: this.completedTodos().length,
    active: this.activeTodos().length
  }));
  
  // Actions
  addTodo(title: string) {
    const todo: Todo = {
      id: Date.now(),
      title,
      completed: false
    };
    this._todos.update(todos => [...todos, todo]);
  }
  
  toggleTodo(id: number) {
    this._todos.update(todos =>
      todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    );
  }
  
  deleteTodo(id: number) {
    this._todos.update(todos => todos.filter(t => t.id !== id));
  }
}

// Pattern 2: Computed async values
@Component({...})
export class AsyncComponent {
  userId = signal<string>('123');
  
  // Trigger fetch when userId changes
  private userDataTrigger = toObservable(this.userId);
  
  userData = toSignal(
    this.userDataTrigger.pipe(
      switchMap(id => this.http.get<User>(\`/api/users/\${id}\`))
    ),
    { initialValue: null }
  );
  
  // Derived data
  userName = computed(() => this.userData()?.name ?? 'Loading...');
}

// Pattern 3: Deep signal updates
@Component({...})
export class DeepUpdateComponent {
  user = signal({
    profile: {
      name: 'John',
      settings: {
        theme: 'dark',
        notifications: true
      }
    }
  });
  
  // Update nested property immutably
  updateTheme(newTheme: string) {
    this.user.update(user => ({
      ...user,
      profile: {
        ...user.profile,
        settings: {
          ...user.profile.settings,
          theme: newTheme
        }
      }
    }));
  }
}`}ngAfterViewChecked(){f.highlightAll()}static{this.\u0275fac=function(m){return new(m||i)}}static{this.\u0275cmp=c({type:i,selectors:[["app-learn-signals"]],standalone:!0,features:[p],decls:19,vars:0,consts:[[1,"header"],["label","Basic Signals"],["matTabContent",""],["label","Computed Signals"],["label","Effects"],["label","Signal Inputs"],["label","Linked Signals"],["label","Signals & RxJS"],["label","Advanced Patterns"],[1,"tab-content"],[1,"language-typescript"],[1,"info-box"],[1,"tip-box"],[1,"warning-box"],[1,"migration-tip"],[1,"pattern-box"],[1,"best-practices"],[1,"performance-tip"]],template:function(m,O){m&1&&(n(0,"h2",0),e(1,"Signals"),t(),n(2,"label"),e(3,"Signals are Angular's reactive primitives for managing state changes and dependencies, providing fine-grained reactivity and better performance."),t(),n(4,"mat-tab-group")(5,"mat-tab",1),o(6,E,66,1,"ng-template",2),t(),n(7,"mat-tab",3),o(8,C,50,1,"ng-template",2),t(),n(9,"mat-tab",4),o(10,v,49,1,"ng-template",2),t(),n(11,"mat-tab",5),o(12,y,51,1,"ng-template",2),t(),n(13,"mat-tab",6),o(14,_,25,1,"ng-template",2),t(),n(15,"mat-tab",7),o(16,P,61,1,"ng-template",2),t(),n(17,"mat-tab",8),o(18,w,50,1,"ng-template",2),t()())},dependencies:[h,g,u,x],styles:[".header[_ngcontent-%COMP%]{color:#dd0031;font-size:2rem;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]{padding:20px}.tab-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#dd0031;margin-top:1.5rem;margin-bottom:.5rem}.tab-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#444;margin-top:1rem;margin-bottom:.5rem}.tab-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.6;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{line-height:1.8;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background-color:#f4f4f4;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background-color:#f5f5f5;padding:15px;border-radius:5px;overflow-x:auto;margin:1rem 0}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin:1rem 0}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #ddd;padding:12px;text-align:left}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#f5f5f5;font-weight:600}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#fafafa}.info-box[_ngcontent-%COMP%]{background-color:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:20px 0;border-radius:4px}.info-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.tip-box[_ngcontent-%COMP%]{background-color:#e8f5e9;border-left:4px solid #4caf50;padding:15px;margin:20px 0;border-radius:4px}.tip-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#2e7d32}.warning-box[_ngcontent-%COMP%]{background-color:#fff3e0;border-left:4px solid #ff9800;padding:15px;margin:20px 0;border-radius:4px}.warning-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#f57c00}.migration-tip[_ngcontent-%COMP%]{background-color:#e0f2f1;border-left:4px solid #009688;padding:15px;margin:20px 0;border-radius:4px}.migration-tip[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#00796b}.pattern-box[_ngcontent-%COMP%]{background-color:#f3e5f5;border-left:4px solid #9c27b0;padding:15px;margin:20px 0;border-radius:4px}.pattern-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#7b1fa2}.best-practices[_ngcontent-%COMP%]{background-color:#e8f5e9;border-left:4px solid #4caf50;padding:15px;margin:20px 0;border-radius:4px}.best-practices[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#2e7d32}.best-practices[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#2e7d32}.performance-tip[_ngcontent-%COMP%]{background-color:#fff3e0;border-left:4px solid #ff9800;padding:15px;margin:20px 0;border-radius:4px}.performance-tip[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#f57c00}"]})}}return i})();export{I as LearnSignalsComponent};
