import"./chunk-WCULWZKC.js";import{a as S}from"./chunk-FSUYFWSG.js";import{a as g,b as h,c as x,d as f}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as a,Xa as r,da as d,e as E,gb as n,hb as t,lb as l,tb as e,ub as c,wb as p,yb as u}from"./chunk-WGQ2ELTG.js";var C=E(S());function b(i,s){if(i&1&&(n(0,"div",9)(1,"h3"),e(2,"How Zone.js Works"),t(),n(3,"p"),e(4," Zone.js is a library that patches asynchronous APIs (setTimeout, addEventListener, Promise, etc.) to intercept async operations and notify Angular when they complete. "),t(),n(5,"h4"),e(6,"What is Zone.js?"),t(),n(7,"ul")(8,"li"),e(9,"Execution context that persists across async operations"),t(),n(10,"li"),e(11,"Monkey-patches browser APIs at startup"),t(),n(12,"li"),e(13,"Tracks when async operations start and finish"),t(),n(14,"li"),e(15,"Triggers Angular's change detection automatically"),t()(),n(16,"h4"),e(17,"Async Operations that Trigger Detection"),t(),n(18,"ul")(19,"li"),e(20,"\u{1F5B1}\uFE0F "),n(21,"strong"),e(22,"DOM Events:"),t(),e(23," click, input, keydown, etc."),t(),n(24,"li"),e(25,"\u23F1\uFE0F "),n(26,"strong"),e(27,"Timers:"),t(),e(28," setTimeout, setInterval"),t(),n(29,"li"),e(30,"\u{1F310} "),n(31,"strong"),e(32,"HTTP Requests:"),t(),e(33," HttpClient calls"),t(),n(34,"li"),e(35,"\u{1F504} "),n(36,"strong"),e(37,"Promises:"),t(),e(38," Promise.then(), async/await"),t(),n(39,"li"),e(40,"\u{1F4E1} "),n(41,"strong"),e(42,"Observables:"),t(),e(43," When used with async pipe"),t()(),n(44,"pre")(45,"code",10),e(46),t()(),n(47,"div",11)(48,"h4"),e(49,"\u{1F4A1} How It Works"),t(),n(50,"p"),e(51,' When you click a button, Zone.js wraps your click handler. After your code runs, Zone.js tells Angular "something might have changed", and Angular checks the component tree. '),t()(),n(52,"div",12)(53,"h4"),e(54,"\u26A0\uFE0F Performance Impact"),t(),n(55,"p"),e(56," Zone.js checks the ENTIRE component tree on every async operation, which can be inefficient for large applications. This is why OnPush strategy exists. "),t()()()),i&2){let o=l();a(46),c(o.zoneJS)}}function D(i,s){if(i&1&&(n(0,"div",9)(1,"h3"),e(2,"Default Change Detection"),t(),n(3,"p"),e(4," The default strategy checks every component in the tree whenever any async event occurs. While simple, it can become slow as applications grow. "),t(),n(5,"h4"),e(6,"How Default Works"),t(),n(7,"ol")(8,"li"),e(9,"Async operation completes (click, HTTP, timer)"),t(),n(10,"li"),e(11,"Zone.js notifies Angular"),t(),n(12,"li"),e(13,"Angular checks EVERY component from root to leaves"),t(),n(14,"li"),e(15,"Each component's template is evaluated"),t(),n(16,"li"),e(17,"DOM is updated if changes detected"),t()(),n(18,"h4"),e(19,"Characteristics"),t(),n(20,"ul")(21,"li"),e(22,"\u2705 "),n(23,"strong"),e(24,"Simple:"),t(),e(25," No special handling needed"),t(),n(26,"li"),e(27,"\u2705 "),n(28,"strong"),e(29,"Always works:"),t(),e(30," Catches all changes"),t(),n(31,"li"),e(32,"\u274C "),n(33,"strong"),e(34,"Inefficient:"),t(),e(35," Checks unchanged components"),t(),n(36,"li"),e(37,"\u274C "),n(38,"strong"),e(39,"Slow for large apps:"),t(),e(40," Scales poorly"),t()(),n(41,"pre")(42,"code",10),e(43),t()(),n(44,"div",13)(45,"h4"),e(46,"\u{1F4CA} Performance Implications"),t(),n(47,"p"),e(48," In a component tree with 100 components, clicking a button triggers 100 change detection checks - even if only 1 component changed! "),t()(),n(49,"div",14)(50,"h4"),e(51,"\u{1F4A1} When to Use"),t(),n(52,"ul")(53,"li"),e(54,"Small applications (< 50 components)"),t(),n(55,"li"),e(56,"Prototypes and demos"),t(),n(57,"li"),e(58,"When you mutate objects directly"),t(),n(59,"li"),e(60,"When simplicity is more important than performance"),t()()()()),i&2){let o=l();a(43),c(o.defaultStrategy)}}function y(i,s){if(i&1&&(n(0,"div",9)(1,"h3"),e(2,"OnPush Change Detection"),t(),n(3,"p"),e(4," OnPush strategy makes change detection opt-in rather than automatic. Components are only checked when specific conditions are met. "),t(),n(5,"h4"),e(6,"When OnPush Components Are Checked"),t(),n(7,"ol")(8,"li"),e(9,"\u{1F517} "),n(10,"strong"),e(11,"Input reference changes:"),t(),e(12," New object/array passed to @Input()"),t(),n(13,"li"),e(14,"\u{1F5B1}\uFE0F "),n(15,"strong"),e(16,"Event from component:"),t(),e(17," (click), (input), etc. fired from this component"),t(),n(18,"li"),e(19,"\u{1F4E1} "),n(20,"strong"),e(21,"Async pipe:"),t(),e(22," Observable/Promise emits new value"),t(),n(23,"li"),e(24,"\u{1F528} "),n(25,"strong"),e(26,"Manual trigger:"),t(),e(27," markForCheck() or detectChanges()"),t()(),n(28,"pre")(29,"code",10),e(30),t()(),n(31,"div",15)(32,"h4"),e(33,"Default vs OnPush"),t(),n(34,"table")(35,"tr")(36,"th"),e(37,"Aspect"),t(),n(38,"th"),e(39,"Default"),t(),n(40,"th"),e(41,"OnPush"),t()(),n(42,"tr")(43,"td"),e(44,"Trigger"),t(),n(45,"td"),e(46,"Any async operation"),t(),n(47,"td"),e(48,"Input/Event/Async pipe/Manual"),t()(),n(49,"tr")(50,"td"),e(51,"Checks"),t(),n(52,"td"),e(53,"Always"),t(),n(54,"td"),e(55,"Conditional"),t()(),n(56,"tr")(57,"td"),e(58,"Performance"),t(),n(59,"td"),e(60,"Lower"),t(),n(61,"td"),e(62,"Higher"),t()(),n(63,"tr")(64,"td"),e(65,"Complexity"),t(),n(66,"td"),e(67,"Simple"),t(),n(68,"td"),e(69,"Requires immutability"),t()()()(),n(70,"div",12)(71,"h4"),e(72,"\u26A0\uFE0F Important: Immutability Required"),t(),n(73,"p"),e(74," OnPush checks references, not values. You MUST create new objects/arrays when updating state, or changes won't be detected. "),t(),n(75,"pre")(76,"code"),e(77),t()()(),n(78,"div",14)(79,"h4"),e(80,"\u{1F4A1} Best Practices"),t(),n(81,"ul")(82,"li"),e(83,"Use OnPush for all presentational components"),t(),n(84,"li"),e(85,"Keep smart components with default strategy"),t(),n(86,"li"),e(87,"Always create new references when updating"),t(),n(88,"li"),e(89,"Use immutability libraries (Immer, Immutable.js)"),t()()()()),i&2){let o=l();a(30),c(o.onPushStrategy),a(47),p(`// \u274C Won't work with OnPush
this.user.name = 'New Name';

// \u2705 Works with OnPush
this.user = `,"{","...this.user, name: 'New Name'","}",";")}}function v(i,s){if(i&1&&(n(0,"div",9)(1,"h3"),e(2,"Manual Change Detection Control"),t(),n(3,"p"),e(4," ChangeDetectorRef gives you fine-grained control over when and how change detection runs for a component. "),t(),n(5,"h4"),e(6,"ChangeDetectorRef Methods"),t(),n(7,"ul")(8,"li")(9,"strong"),e(10,"detectChanges():"),t(),e(11," Run change detection immediately for this component and children"),t(),n(12,"li")(13,"strong"),e(14,"markForCheck():"),t(),e(15," Mark component and ancestors to be checked in next cycle"),t(),n(16,"li")(17,"strong"),e(18,"detach():"),t(),e(19," Remove component from change detection tree"),t(),n(20,"li")(21,"strong"),e(22,"reattach():"),t(),e(23," Add component back to change detection tree"),t(),n(24,"li")(25,"strong"),e(26,"checkNoChanges():"),t(),e(27," Verify no changes occurred (dev mode only)"),t()(),n(28,"pre")(29,"code",10),e(30),t()(),n(31,"div",16)(32,"h4"),e(33,"detectChanges() vs markForCheck()"),t(),n(34,"table")(35,"tr")(36,"th"),e(37,"Method"),t(),n(38,"th"),e(39,"When It Runs"),t(),n(40,"th"),e(41,"What It Checks"),t()(),n(42,"tr")(43,"td")(44,"code"),e(45,"detectChanges()"),t()(),n(46,"td"),e(47,"Immediately"),t(),n(48,"td"),e(49,"Component + children"),t()(),n(50,"tr")(51,"td")(52,"code"),e(53,"markForCheck()"),t()(),n(54,"td"),e(55,"Next cycle"),t(),n(56,"td"),e(57,"Component + ancestors"),t()()()(),n(58,"div",17)(59,"h4"),e(60,"\u{1F3AF} Common Use Cases"),t(),n(61,"ul")(62,"li")(63,"strong"),e(64,"Third-party libraries:"),t(),e(65," Trigger detection after library updates"),t(),n(66,"li")(67,"strong"),e(68,"Performance optimization:"),t(),e(69," Detach heavy components"),t(),n(70,"li")(71,"strong"),e(72,"Outside Zone:"),t(),e(73," Manually trigger after runOutsideAngular"),t(),n(74,"li")(75,"strong"),e(76,"OnPush + observables:"),t(),e(77," markForCheck in manual subscriptions"),t()()()()),i&2){let o=l();a(30),c(o.changeDetectorRef)}}function O(i,s){if(i&1&&(n(0,"div",9)(1,"h3"),e(2,"Zoneless Change Detection"),t(),n(3,"p"),e(4," Angular 18+ introduces experimental zoneless mode, removing Zone.js dependency for better performance and smaller bundles. "),t(),n(5,"h4"),e(6,"Why Zoneless?"),t(),n(7,"ul")(8,"li"),e(9,"\u{1F680} "),n(10,"strong"),e(11,"Better performance:"),t(),e(12," No Zone.js overhead"),t(),n(13,"li"),e(14,"\u{1F4E6} "),n(15,"strong"),e(16,"Smaller bundles:"),t(),e(17," ~40KB less"),t(),n(18,"li"),e(19,"\u{1F3AF} "),n(20,"strong"),e(21,"More predictable:"),t(),e(22," Explicit change triggers"),t(),n(23,"li"),e(24,"\u{1F52E} "),n(25,"strong"),e(26,"Future-ready:"),t(),e(27," Aligns with modern reactive patterns"),t(),n(28,"li"),e(29,"\u{1F9E9} "),n(30,"strong"),e(31,"Better composition:"),t(),e(32," Works well with micro-frontends"),t()(),n(33,"h4"),e(34,"How It Works"),t(),n(35,"p"),e(36," Instead of automatically detecting changes, zoneless Angular relies on: "),t(),n(37,"ul")(38,"li"),e(39,"\u2728 "),n(40,"strong"),e(41,"Signals:"),t(),e(42," Reactive primitives that track dependencies"),t(),n(43,"li"),e(44,"\u{1F4E1} "),n(45,"strong"),e(46,"RxJS interop:"),t(),e(47," toSignal() converts observables"),t(),n(48,"li"),e(49,"\u{1F5B1}\uFE0F "),n(50,"strong"),e(51,"Event handlers:"),t(),e(52," Still trigger detection automatically"),t(),n(53,"li"),e(54,"\u{1F528} "),n(55,"strong"),e(56,"Manual triggers:"),t(),e(57," When needed for edge cases"),t()(),n(58,"pre")(59,"code",10),e(60),t()(),n(61,"div",18)(62,"h4"),e(63,"\u{1F4CB} Migration Path"),t(),n(64,"ol")(65,"li"),e(66,"Adopt signals for local state"),t(),n(67,"li"),e(68,"Use toSignal() for observables"),t(),n(69,"li"),e(70,"Test with provideExperimentalZonelessChangeDetection()"),t(),n(71,"li"),e(72,"Identify and fix Zone-dependent code"),t(),n(73,"li"),e(74,"Remove Zone.js from polyfills.ts"),t()()(),n(75,"div",19)(76,"h4"),e(77,"\u{1F4CA} Current Status"),t(),n(78,"p")(79,"strong"),e(80,"Experimental in Angular 18"),t(),e(81," - Not recommended for production yet. Expected to stabilize in Angular 19/20. "),t()()()),i&2){let o=l();a(60),c(o.zonelessAngular)}}function P(i,s){if(i&1&&(n(0,"div",9)(1,"h3"),e(2,"Performance Optimization Techniques"),t(),n(3,"p"),e(4," Optimize change detection to keep your application fast and responsive. "),t(),n(5,"pre")(6,"code",10),e(7),t()(),n(8,"div",20)(9,"h4"),e(10,"\u2705 Performance Checklist"),t(),n(11,"ul")(12,"li"),e(13,"\u2713 Use OnPush for presentational components"),t(),n(14,"li"),e(15,"\u2713 Add trackBy to all *ngFor directives"),t(),n(16,"li"),e(17,"\u2713 Use async pipe instead of manual subscriptions"),t(),n(18,"li"),e(19,"\u2713 Avoid function calls in templates"),t(),n(20,"li"),e(21,"\u2713 Use pure pipes when possible"),t(),n(22,"li"),e(23,"\u2713 Detach components that update infrequently"),t(),n(24,"li"),e(25,"\u2713 Run expensive operations outside Angular zone"),t(),n(26,"li"),e(27,"\u2713 Make data structures immutable"),t(),n(28,"li"),e(29,"\u2713 Use signals for reactive state (Angular 16+)"),t(),n(30,"li"),e(31,"\u2713 Profile with Chrome DevTools"),t()()(),n(32,"div",21)(33,"h4"),e(34,"\u{1F4CA} Profiling Change Detection"),t(),n(35,"pre")(36,"code"),e(37,`// Enable profiling in dev mode
ng.profiler.timeChangeDetection()

// Results show:
// - Total time for change detection cycle
// - Time per component
// - Number of checks performed`),t()()()()),i&2){let o=l();a(7),c(o.performanceOptimization)}}function M(i,s){if(i&1&&(n(0,"div",9)(1,"h3"),e(2,"Change Detection Best Practices"),t(),n(3,"pre")(4,"code",10),e(5),t()(),n(6,"div",22)(7,"div",23)(8,"h4"),e(9,"\u2705 DO"),t(),n(10,"ul")(11,"li"),e(12,"Use OnPush for presentational components"),t(),n(13,"li"),e(14,"Create new object references with OnPush"),t(),n(15,"li"),e(16,"Use async pipe for observables"),t(),n(17,"li"),e(18,"Use signals for reactive state"),t(),n(19,"li"),e(20,"Add trackBy to *ngFor"),t(),n(21,"li"),e(22,"Profile your application"),t(),n(23,"li"),e(24,"Understand when detection runs"),t()()(),n(25,"div",24)(26,"h4"),e(27,"\u274C DON'T"),t(),n(28,"ul")(29,"li"),e(30,"Mutate objects with OnPush"),t(),n(31,"li"),e(32,"Call functions in templates"),t(),n(33,"li"),e(34,"Manually subscribe if async pipe works"),t(),n(35,"li"),e(36,"Use timers unnecessarily"),t(),n(37,"li"),e(38,"Forget to unsubscribe"),t(),n(39,"li"),e(40,"Ignore performance warnings"),t(),n(41,"li"),e(42,"Over-optimize prematurely"),t()()()(),n(43,"div",25)(44,"h4"),e(45,"\u{1F333} Which Strategy to Use?"),t(),n(46,"pre")(47,"code"),e(48,`Start with OnPush
    \u2193
Do you mutate data directly? 
    \u251C\u2500 Yes \u2192 Use Default (or refactor to immutable)
    \u2514\u2500 No \u2192 Keep OnPush
         \u2193
    Still having issues?
         \u251C\u2500 Yes \u2192 Add markForCheck() where needed
         \u2514\u2500 No \u2192 Perfect! \u{1F389}`),t()()()()),i&2){let o=l();a(5),c(o.bestPractices)}}var I=(()=>{class i{constructor(){this.zoneJS=`// How Zone.js Works
// Zone.js patches async APIs to track changes

// Async operations that trigger change detection:
- DOM events (click, input, etc.)
- setTimeout/setInterval
- HTTP requests (HttpClient)
- Promises
- Observables (with async pipe)

// Zone.js creates a "zone" context
class ApplicationRef {
  tick() {
    this.zones.forEach(zone => {
      zone.checkAndUpdateView(); // Check entire component tree
    });
  }
}

// Browser event example
button.addEventListener('click', () => {
  // Zone.js wraps this callback
  Zone.current.run(() => {
    // Your code runs here
    this.count++;
    
    // After callback completes, Zone.js triggers change detection
    applicationRef.tick();
  });
});`,this.defaultStrategy=`// Default Change Detection Strategy
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: \`
    <div>
      <h3>Users (Default Strategy)</h3>
      <div *ngFor="let user of users">
        {{ user.name }} - {{ user.email }}
      </div>
      <button (click)="addUser()">Add User</button>
    </div>
  \`
})
export class UserListComponent {
  users = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' }
  ];

  addUser() {
    // This triggers change detection for ENTIRE component tree
    this.users.push({
      id: this.users.length + 1,
      name: 'New User',
      email: 'new@example.com'
    });
  }
}

// With default strategy:
// 1. Any async operation triggers change detection
// 2. Angular checks EVERY component in the tree
// 3. Even if nothing changed, all components are checked
// 4. Can be inefficient for large applications`,this.onPushStrategy=`// OnPush Change Detection Strategy
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  template: \`
    <div class="card">
      <h4>{{ user.name }}</h4>
      <p>{{ user.email }}</p>
      <p>Checked at: {{ checkTime }}</p>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush // \u{1F448} OnPush strategy
})
export class UserCardComponent {
  @Input() user!: { id: number; name: string; email: string };
  
  get checkTime() {
    // Log when change detection runs
    console.log('UserCardComponent checked');
    return new Date().toLocaleTimeString();
  }
}

// OnPush only checks when:
// 1. Input reference changes
// 2. Event originates from component
// 3. Async pipe receives new value
// 4. Manual trigger with ChangeDetectorRef

// Parent component
@Component({
  selector: 'app-user-list',
  template: \`
    <app-user-card *ngFor="let user of users" [user]="user">
    </app-user-card>
    <button (click)="updateUser()">Update User</button>
  \`
})
export class UserListComponent {
  users = [
    { id: 1, name: 'John', email: 'john@example.com' }
  ];

  updateUser() {
    // \u274C This WON'T trigger change detection (mutating object)
    this.users[0].name = 'Updated John';
    
    // \u2705 This WILL trigger change detection (new reference)
    this.users = [
      { ...this.users[0], name: 'Updated John' }
    ];
  }
}`,this.changeDetectorRef=`// Manual Change Detection Control
import { 
  Component, 
  ChangeDetectorRef,
  ChangeDetectionStrategy 
} from '@angular/core';

@Component({
  selector: 'app-manual-detection',
  template: \`
    <div>
      <h3>Counter: {{ counter }}</h3>
      <p>Last Update: {{ lastUpdate }}</p>
      <button (click)="incrementOutsideZone()">Increment Outside Zone</button>
      <button (click)="forceCheck()">Force Check</button>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManualDetectionComponent {
  counter = 0;
  lastUpdate = new Date();

  constructor(
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  incrementOutsideZone() {
    // Run outside Angular's zone (no automatic detection)
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.counter++;
        this.lastUpdate = new Date();
        
        // Manually trigger change detection
        this.cdr.detectChanges(); // Only this component
        // OR
        this.cdr.markForCheck(); // Mark for next cycle
      }, 1000);
    });
  }

  forceCheck() {
    this.counter++;
    // Manually mark component as dirty
    this.cdr.markForCheck();
  }
  
  ngOnDestroy() {
    // Detach from change detection (for performance)
    this.cdr.detach();
  }
}

// ChangeDetectorRef Methods:
// - detectChanges(): Run change detection immediately for this component and children
// - markForCheck(): Mark component and ancestors to be checked in next cycle
// - detach(): Remove component from change detection tree
// - reattach(): Add component back to change detection tree
// - checkNoChanges(): Verify no changes (dev mode only)`,this.zonelessAngular=`// Zoneless Angular (Experimental - Angular 18+)
// Remove Zone.js dependency for better performance

// 1. Bootstrap without Zone.js
// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideExperimentalZonelessChangeDetection() // \u{1F448} Enable zoneless mode
  ]
});

// 2. Use Signals for reactive state
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: \`
    <div>
      <h3>Count: {{ count() }}</h3>
      <h3>Double: {{ doubleCount() }}</h3>
      <button (click)="increment()">Increment</button>
    </div>
  \`
})
export class CounterComponent {
  // Signals automatically trigger updates
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);
  
  increment() {
    this.count.update(c => c + 1); // Automatically updates view
  }
}

// 3. Async operations with RxJS
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-data',
  template: \`<div>{{ data()?.title }}</div>\`
})
export class DataComponent {
  private dataService = inject(DataService);
  
  // Convert observable to signal (auto-updates)
  data = toSignal(this.dataService.getData());
}

// Benefits of Zoneless:
// \u2705 Better performance (no Zone.js overhead)
// \u2705 Smaller bundle size (no Zone.js library)
// \u2705 More predictable change detection
// \u2705 Better for micro-frontends
// \u2705 Aligns with modern reactive patterns (signals)`,this.performanceOptimization=`// Change Detection Performance Optimization

// 1. Use OnPush wherever possible
@Component({
  selector: 'app-product',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`<div>{{ product.name }}</div>\`
})
export class ProductComponent {
  @Input() product!: Product;
}

// 2. Use trackBy for *ngFor
@Component({
  template: \`
    <div *ngFor="let item of items; trackBy: trackByFn">
      {{ item.name }}
    </div>
  \`
})
export class ListComponent {
  items: Item[] = [];
  
  // Prevent re-rendering unchanged items
  trackByFn(index: number, item: Item) {
    return item.id; // Use unique identifier
  }
}

// 3. Detach components from change detection
export class HeavyComponent implements OnInit, OnDestroy {
  constructor(private cdr: ChangeDetectorRef) {}
  
  ngOnInit() {
    // Detach from automatic change detection
    this.cdr.detach();
    
    // Manually update when needed
    this.updateData().subscribe(data => {
      this.data = data;
      this.cdr.detectChanges(); // Manual trigger
    });
  }
}

// 4. Run outside Angular zone for performance-intensive operations
export class ChartComponent {
  constructor(private ngZone: NgZone) {}
  
  renderChart(data: number[]) {
    // Run expensive operations outside Angular
    this.ngZone.runOutsideAngular(() => {
      // Heavy calculations or third-party library
      const chart = new Chart(data);
      chart.render();
      
      // Re-enter zone when done
      this.ngZone.run(() => {
        this.chartReady = true;
      });
    });
  }
}

// 5. Use pure pipes
@Pipe({
  name: 'customFilter',
  pure: true // Only recalculate when inputs change
})
export class CustomFilterPipe implements PipeTransform {
  transform(items: any[], filter: string): any[] {
    return items.filter(item => item.name.includes(filter));
  }
}

// 6. Avoid function calls in templates
// \u274C Bad: Function called on every change detection
<div>{{ calculateTotal() }}</div>

// \u2705 Good: Use computed signal or cached property
<div>{{ total() }}</div> // Signal

// 7. Use async pipe for observables
// \u274C Bad: Manual subscription
export class BadComponent {
  data: Data;
  
  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
    });
  }
}

// \u2705 Good: Async pipe handles everything
export class GoodComponent {
  data$ = this.dataService.getData();
}
template: \`<div>{{ data$ | async }}</div>\``,this.bestPractices=`// Change Detection Best Practices

// \u2705 DO: Use OnPush for presentational components
@Component({
  selector: 'app-display',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`<div>{{ data.title }}</div>\`
})
export class DisplayComponent {
  @Input() data!: Data;
}

// \u2705 DO: Make data immutable with OnPush
updateUser() {
  // Create new reference
  this.user = { ...this.user, name: 'New Name' };
  
  // For arrays
  this.items = [...this.items, newItem];
  
  // For nested updates
  this.config = {
    ...this.config,
    settings: { ...this.config.settings, theme: 'dark' }
  };
}

// \u2705 DO: Use signals for reactive state (Angular 16+)
export class ModernComponent {
  count = signal(0);
  doubled = computed(() => this.count() * 2);
  
  increment() {
    this.count.update(n => n + 1);
  }
}

// \u2705 DO: Use async pipe
export class DataComponent {
  users$ = this.http.get<User[]>('/api/users');
}
template: \`
  <div *ngFor="let user of users$ | async">
    {{ user.name }}
  </div>
\`

// \u274C DON'T: Mutate objects with OnPush
this.user.name = 'Changed'; // Won't trigger detection

// \u274C DON'T: Call functions in templates
<div>{{ expensiveCalculation() }}</div> // Called every check!

// \u274C DON'T: Use setTimeout/setInterval unnecessarily
setTimeout(() => {
  this.data = newData; // Triggers change detection
}, 1000);

// \u2705 DO: Run outside zone when appropriate
this.ngZone.runOutsideAngular(() => {
  setInterval(() => {
    // Update non-Angular UI
  }, 100);
});

// \u2705 DO: Use trackBy with *ngFor
<div *ngFor="let item of items; trackBy: trackById">

trackById(index: number, item: any) {
  return item.id;
}

// \u2705 DO: Profile change detection
import { enableDebugTools } from '@angular/platform-browser';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(moduleRef => {
    const appRef = moduleRef.injector.get(ApplicationRef);
    const componentRef = appRef.components[0];
    enableDebugTools(componentRef);
  });

// In console:
// ng.profiler.timeChangeDetection()`}ngAfterViewChecked(){C.default.highlightAll()}static{this.\u0275fac=function(m){return new(m||i)}}static{this.\u0275cmp=d({type:i,selectors:[["app-learn-changedetection"]],standalone:!0,features:[u],decls:19,vars:0,consts:[[1,"header"],["label","Zone.js"],["matTabContent",""],["label","Default Strategy"],["label","OnPush Strategy"],["label","ChangeDetectorRef"],["label","Zoneless Angular"],["label","Performance"],["label","Best Practices"],[1,"tab-content"],[1,"language-typescript"],[1,"info-box"],[1,"warning-box"],[1,"performance-box"],[1,"tip-box"],[1,"comparison"],[1,"method-comparison"],[1,"use-cases-box"],[1,"migration-guide"],[1,"status-box"],[1,"optimization-checklist"],[1,"profiling-box"],[1,"dos-donts"],[1,"dos"],[1,"donts"],[1,"decision-tree"]],template:function(m,k){m&1&&(n(0,"h2",0),e(1,"Change Detection"),t(),n(2,"label"),e(3,"Change detection is Angular's mechanism for keeping the UI in sync with application state. Understanding it is crucial for building performant applications."),t(),n(4,"mat-tab-group")(5,"mat-tab",1),r(6,b,57,1,"ng-template",2),t(),n(7,"mat-tab",3),r(8,D,61,1,"ng-template",2),t(),n(9,"mat-tab",4),r(10,y,90,3,"ng-template",2),t(),n(11,"mat-tab",5),r(12,v,78,1,"ng-template",2),t(),n(13,"mat-tab",6),r(14,O,82,1,"ng-template",2),t(),n(15,"mat-tab",7),r(16,P,38,1,"ng-template",2),t(),n(17,"mat-tab",8),r(18,M,49,1,"ng-template",2),t()())},dependencies:[f,g,h,x],styles:[".header[_ngcontent-%COMP%]{color:#dd0031;font-size:2rem;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]{padding:20px}.tab-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#dd0031;margin-top:1.5rem;margin-bottom:.5rem}.tab-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#444;margin-top:1rem;margin-bottom:.5rem}.tab-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.6;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .tab-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{line-height:1.8;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background-color:#f4f4f4;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background-color:#f5f5f5;padding:15px;border-radius:5px;overflow-x:auto;margin:1rem 0}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin:1rem 0}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #ddd;padding:12px;text-align:left}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#f5f5f5;font-weight:600}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#fafafa}.info-box[_ngcontent-%COMP%]{background-color:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:20px 0;border-radius:4px}.info-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.tip-box[_ngcontent-%COMP%]{background-color:#e8f5e9;border-left:4px solid #4caf50;padding:15px;margin:20px 0;border-radius:4px}.tip-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#2e7d32}.warning-box[_ngcontent-%COMP%]{background-color:#fff3e0;border-left:4px solid #ff9800;padding:15px;margin:20px 0;border-radius:4px}.warning-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#f57c00}.performance-box[_ngcontent-%COMP%]{background-color:#f3e5f5;border-left:4px solid #9c27b0;padding:15px;margin:20px 0;border-radius:4px}.performance-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#7b1fa2}.comparison[_ngcontent-%COMP%]{background-color:#fff;border:2px solid #e0e0e0;padding:15px;margin:20px 0;border-radius:4px}.method-comparison[_ngcontent-%COMP%]{background-color:#e0f2f1;padding:15px;margin:20px 0;border-radius:4px}.method-comparison[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#00796b;margin-top:0}.use-cases-box[_ngcontent-%COMP%]{background-color:#e8eaf6;border-left:4px solid #3f51b5;padding:15px;margin:20px 0;border-radius:4px}.use-cases-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#303f9f}.migration-guide[_ngcontent-%COMP%]{background-color:#e0f2f1;border-left:4px solid #009688;padding:15px;margin:20px 0;border-radius:4px}.migration-guide[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#00796b}.migration-guide[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{line-height:2}.status-box[_ngcontent-%COMP%]{background-color:#fff9c4;border-left:4px solid #fbc02d;padding:15px;margin:20px 0;border-radius:4px}.status-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#f57f17}.optimization-checklist[_ngcontent-%COMP%]{background-color:#e8f5e9;border-left:4px solid #4caf50;padding:15px;margin:20px 0;border-radius:4px}.optimization-checklist[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#2e7d32}.optimization-checklist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:4px 0}.profiling-box[_ngcontent-%COMP%]{background-color:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:20px 0;border-radius:4px}.profiling-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.dos-donts[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:20px 0}.dos-donts[_ngcontent-%COMP%]   .dos[_ngcontent-%COMP%], .dos-donts[_ngcontent-%COMP%]   .donts[_ngcontent-%COMP%]{padding:15px;border-radius:4px}.dos-donts[_ngcontent-%COMP%]   .dos[_ngcontent-%COMP%]{background-color:#e8f5e9;border-left:4px solid #4caf50}.dos-donts[_ngcontent-%COMP%]   .dos[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#2e7d32;margin-top:0}.dos-donts[_ngcontent-%COMP%]   .donts[_ngcontent-%COMP%]{background-color:#ffebee;border-left:4px solid #f44336}.dos-donts[_ngcontent-%COMP%]   .donts[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#c62828;margin-top:0}.decision-tree[_ngcontent-%COMP%]{background-color:#f3e5f5;padding:15px;margin:20px 0;border-radius:4px}.decision-tree[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#7b1fa2;margin-top:0}.decision-tree[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #e0e0e0}"]})}}return i})();export{I as LearnChangedetectionComponent};
