import"./chunk-WCULWZKC.js";import{a as S}from"./chunk-VDRUEQXK.js";import{a as u,b,c as x,d as g}from"./chunk-GNZ74KMC.js";import"./chunk-XAZLOLJU.js";import"./chunk-SZTU5CXE.js";import{Ia as s,Ya as a,da as d,e as E,hb as n,ib as e,mb as o,ub as t,vb as l,zb as p}from"./chunk-KMNIY7WT.js";var h=E(S());function v(i,m){if(i&1&&(n(0,"div",10)(1,"h3"),t(2,"What is RxJS?"),e(),n(3,"p"),t(4," RxJS (Reactive Extensions for JavaScript) is a library for composing asynchronous and event-based programs using observable sequences. It provides powerful operators to transform, combine, and manage data streams. "),e(),n(5,"h4"),t(6,"Core Concepts"),e(),n(7,"ul")(8,"li")(9,"strong"),t(10,"Observable:"),e(),t(11," Represents a stream of values over time"),e(),n(12,"li")(13,"strong"),t(14,"Observer:"),e(),t(15," Consumes values from an observable (next, error, complete)"),e(),n(16,"li")(17,"strong"),t(18,"Subscription:"),e(),t(19," Represents execution of an observable"),e(),n(20,"li")(21,"strong"),t(22,"Operators:"),e(),t(23," Pure functions to transform observables"),e(),n(24,"li")(25,"strong"),t(26,"Subject:"),e(),t(27," Both observable and observer (multicast)"),e()(),n(28,"h4"),t(29,"Why RxJS?"),e(),n(30,"ul")(31,"li"),t(32,"\u{1F504} "),n(33,"strong"),t(34,"Unified API:"),e(),t(35," Handle events, promises, and async data consistently"),e(),n(36,"li"),t(37,"\u{1F3AF} "),n(38,"strong"),t(39,"Composable:"),e(),t(40," Chain operators to build complex logic"),e(),n(41,"li"),t(42,"\u{1F680} "),n(43,"strong"),t(44,"Powerful:"),e(),t(45," 100+ operators for any scenario"),e(),n(46,"li"),t(47,"\u26A1 "),n(48,"strong"),t(49,"Cancellable:"),e(),t(50," Unsubscribe to stop execution"),e(),n(51,"li"),t(52,"\u{1F527} "),n(53,"strong"),t(54,"Error Handling:"),e(),t(55," Built-in error handling and retry logic"),e()(),n(56,"pre")(57,"code",11),t(58),e()(),n(59,"div",12)(60,"h4"),t(61,"\u{1F4A1} Observable vs Promise"),e(),n(62,"ul")(63,"li")(64,"strong"),t(65,"Observables:"),e(),t(66," Lazy (don't execute until subscribed), can emit multiple values, cancellable"),e(),n(67,"li")(68,"strong"),t(69,"Promises:"),e(),t(70," Eager (execute immediately), emit single value, not cancellable"),e()()()()),i&2){let r=o();s(58),l(r.basicObservables)}}function f(i,m){if(i&1&&(n(0,"div",10)(1,"h3"),t(2,"Essential RxJS Operators"),e(),n(3,"p"),t(4," Operators are functions that transform observables. They're the building blocks for creating complex data transformations and async logic. "),e(),n(5,"h4"),t(6,"Transformation Operators"),e(),n(7,"ul")(8,"li")(9,"code"),t(10,"map"),e(),t(11," - Transform each value"),e(),n(12,"li")(13,"code"),t(14,"scan"),e(),t(15," - Accumulate values (like reduce)"),e(),n(16,"li")(17,"code"),t(18,"pluck"),e(),t(19," - Extract property from objects"),e()(),n(20,"h4"),t(21,"Filtering Operators"),e(),n(22,"ul")(23,"li")(24,"code"),t(25,"filter"),e(),t(26," - Filter values by predicate"),e(),n(27,"li")(28,"code"),t(29,"take"),e(),t(30," - Take first N values"),e(),n(31,"li")(32,"code"),t(33,"takeUntil"),e(),t(34," - Take until another observable emits"),e(),n(35,"li")(36,"code"),t(37,"skip"),e(),t(38," - Skip first N values"),e(),n(39,"li")(40,"code"),t(41,"distinctUntilChanged"),e(),t(42," - Emit only when value changes"),e()(),n(43,"h4"),t(44,"Timing Operators"),e(),n(45,"ul")(46,"li")(47,"code"),t(48,"debounceTime"),e(),t(49," - Wait for pause in emissions"),e(),n(50,"li")(51,"code"),t(52,"throttleTime"),e(),t(53," - Emit at most once per time period"),e(),n(54,"li")(55,"code"),t(56,"delay"),e(),t(57," - Delay emissions"),e(),n(58,"li")(59,"code"),t(60,"timeout"),e(),t(61," - Error if no emission within time"),e()(),n(62,"pre")(63,"code",11),t(64),e()(),n(65,"div",13)(66,"h4"),t(67,"\u{1F3AF} When to Use Which"),e(),n(68,"ul")(69,"li")(70,"strong"),t(71,"debounceTime:"),e(),t(72," Search as user types (wait for pause)"),e(),n(73,"li")(74,"strong"),t(75,"throttleTime:"),e(),t(76," Scroll events (limit frequency)"),e(),n(77,"li")(78,"strong"),t(79,"distinctUntilChanged:"),e(),t(80," Prevent duplicate API calls"),e(),n(81,"li")(82,"strong"),t(83,"take:"),e(),t(84," Get first N results then complete"),e()()()()),i&2){let r=o();s(64),l(r.commonOperators)}}function C(i,m){if(i&1&&(n(0,"div",10)(1,"h3"),t(2,"Combining Multiple Observables"),e(),n(3,"p"),t(4," These operators allow you to work with multiple observables simultaneously, combining their emissions in different ways. "),e(),n(5,"h4"),t(6,"Join Operators"),e(),n(7,"ul")(8,"li")(9,"strong"),t(10,"combineLatest:"),e(),t(11," Emits when ANY source emits (latest from all)"),e(),n(12,"li")(13,"strong"),t(14,"merge:"),e(),t(15," Combines emissions from all sources"),e(),n(16,"li")(17,"strong"),t(18,"forkJoin:"),e(),t(19," Waits for all to complete (like Promise.all)"),e(),n(20,"li")(21,"strong"),t(22,"zip:"),e(),t(23," Combines emissions by index"),e(),n(24,"li")(25,"strong"),t(26,"concat:"),e(),t(27," Sequential execution"),e()(),n(28,"pre")(29,"code",11),t(30),e()(),n(31,"div",14)(32,"h4"),t(33,"Operator Comparison"),e(),n(34,"table")(35,"tr")(36,"th"),t(37,"Operator"),e(),n(38,"th"),t(39,"Behavior"),e(),n(40,"th"),t(41,"Use Case"),e()(),n(42,"tr")(43,"td")(44,"code"),t(45,"combineLatest"),e()(),n(46,"td"),t(47,"Latest from each when any emits"),e(),n(48,"td"),t(49,"Form validation, multiple filters"),e()(),n(50,"tr")(51,"td")(52,"code"),t(53,"merge"),e()(),n(54,"td"),t(55,"All emissions as they occur"),e(),n(56,"td"),t(57,"Multiple event sources"),e()(),n(58,"tr")(59,"td")(60,"code"),t(61,"forkJoin"),e()(),n(62,"td"),t(63,"Wait for all to complete"),e(),n(64,"td"),t(65,"Loading multiple resources"),e()(),n(66,"tr")(67,"td")(68,"code"),t(69,"zip"),e()(),n(70,"td"),t(71,"Pair by index"),e(),n(72,"td"),t(73,"Parallel processing"),e()()()()()),i&2){let r=o();s(30),l(r.combinationOperators)}}function O(i,m){if(i&1&&(n(0,"div",10)(1,"h3"),t(2,"Flattening Operators"),e(),n(3,"p"),t(4,' Higher-order operators handle observables that emit other observables. They "flatten" nested observables into a single stream. '),e(),n(5,"h4"),t(6,"The Four Flattening Operators"),e(),n(7,"ul")(8,"li")(9,"strong"),t(10,"switchMap:"),e(),t(11," Cancel previous, switch to new (most common)"),e(),n(12,"li")(13,"strong"),t(14,"mergeMap:"),e(),t(15," Run all in parallel"),e(),n(16,"li")(17,"strong"),t(18,"concatMap:"),e(),t(19," Run sequentially, preserve order"),e(),n(20,"li")(21,"strong"),t(22,"exhaustMap:"),e(),t(23," Ignore new until current completes"),e()(),n(24,"pre")(25,"code",11),t(26),e()(),n(27,"div",15)(28,"h4"),t(29,"\u{1F4CB} Which Operator to Use?"),e(),n(30,"table")(31,"tr")(32,"th"),t(33,"Scenario"),e(),n(34,"th"),t(35,"Operator"),e(),n(36,"th"),t(37,"Why"),e()(),n(38,"tr")(39,"td"),t(40,"Search/Autocomplete"),e(),n(41,"td")(42,"code"),t(43,"switchMap"),e()(),n(44,"td"),t(45,"Cancel old searches"),e()(),n(46,"tr")(47,"td"),t(48,"Save button click"),e(),n(49,"td")(50,"code"),t(51,"exhaustMap"),e()(),n(52,"td"),t(53,"Prevent duplicate saves"),e()(),n(54,"tr")(55,"td"),t(56,"Load multiple items"),e(),n(57,"td")(58,"code"),t(59,"mergeMap"),e()(),n(60,"td"),t(61,"Parallel requests OK"),e()(),n(62,"tr")(63,"td"),t(64,"Sequential operations"),e(),n(65,"td")(66,"code"),t(67,"concatMap"),e()(),n(68,"td"),t(69,"Order matters"),e()()()()()),i&2){let r=o();s(26),l(r.higherOrderOperators)}}function y(i,m){if(i&1&&(n(0,"div",10)(1,"h3"),t(2,"Handling Errors in RxJS"),e(),n(3,"p"),t(4," Proper error handling is crucial for building robust applications. RxJS provides several operators for managing errors gracefully. "),e(),n(5,"h4"),t(6,"Error Handling Strategies"),e(),n(7,"ul")(8,"li")(9,"strong"),t(10,"catchError:"),e(),t(11," Catch errors and return fallback"),e(),n(12,"li")(13,"strong"),t(14,"retry:"),e(),t(15," Retry failed operations"),e(),n(16,"li")(17,"strong"),t(18,"retryWhen:"),e(),t(19," Custom retry logic"),e(),n(20,"li")(21,"strong"),t(22,"throwError:"),e(),t(23," Create error observable"),e(),n(24,"li")(25,"strong"),t(26,"onErrorResumeNext:"),e(),t(27," Continue with next observable"),e()(),n(28,"pre")(29,"code",11),t(30),e()(),n(31,"div",16)(32,"h4"),t(33,"\u26A0\uFE0F Important Notes"),e(),n(34,"ul")(35,"li"),t(36,"Errors terminate the observable unless caught"),e(),n(37,"li"),t(38,"Always use catchError to prevent stream termination"),e(),n(39,"li"),t(40,"Place catchError strategically (inner vs outer)"),e(),n(41,"li"),t(42,"Consider user experience when retrying"),e()()()()),i&2){let r=o();s(30),l(r.errorHandling)}}function M(i,m){if(i&1&&(n(0,"div",10)(1,"h3"),t(2,"Subjects - Multicasting Observables"),e(),n(3,"p"),t(4," Subjects are special types of observables that can multicast to multiple observers. They act as both observable and observer. "),e(),n(5,"h4"),t(6,"Types of Subjects"),e(),n(7,"ul")(8,"li")(9,"strong"),t(10,"Subject:"),e(),t(11," No initial value, new subscribers don't get past values"),e(),n(12,"li")(13,"strong"),t(14,"BehaviorSubject:"),e(),t(15," Has current value, new subscribers get latest value"),e(),n(16,"li")(17,"strong"),t(18,"ReplaySubject:"),e(),t(19," Replays N last values to new subscribers"),e(),n(20,"li")(21,"strong"),t(22,"AsyncSubject:"),e(),t(23," Only emits last value when completed"),e()(),n(24,"pre")(25,"code",11),t(26),e()(),n(27,"div",17)(28,"h4"),t(29,"\u{1F3AF} When to Use Each Subject"),e(),n(30,"ul")(31,"li")(32,"strong"),t(33,"Subject:"),e(),t(34," Event bus, notifications"),e(),n(35,"li")(36,"strong"),t(37,"BehaviorSubject:"),e(),t(38," Current user, app state"),e(),n(39,"li")(40,"strong"),t(41,"ReplaySubject:"),e(),t(42," Chat messages, activity log"),e(),n(43,"li")(44,"strong"),t(45,"AsyncSubject:"),e(),t(46," API calls that emit once"),e()()()()),i&2){let r=o();s(26),l(r.subjects)}}function _(i,m){if(i&1&&(n(0,"div",10)(1,"h3"),t(2,"RxJS in Angular Applications"),e(),n(3,"p"),t(4," Angular uses RxJS extensively for HTTP, forms, routing, and more. Understanding RxJS patterns is essential for Angular development. "),e(),n(5,"h4"),t(6,"Common Angular + RxJS Patterns"),e(),n(7,"ul")(8,"li"),t(9,"HttpClient returns observables"),e(),n(10,"li"),t(11,"Reactive forms use observables for value changes"),e(),n(12,"li"),t(13,"Router events are observables"),e(),n(14,"li"),t(15,"async pipe auto-subscribes and unsubscribes"),e()(),n(16,"pre")(17,"code",11),t(18),e()(),n(19,"div",18)(20,"h4"),t(21,"\u{1F4E6} RxJS + Signals"),e(),n(22,"p"),t(23,"Angular 16+ provides utilities to bridge RxJS and Signals:"),e(),n(24,"ul")(25,"li")(26,"code"),t(27,"toSignal(observable$)"),e(),t(28," - Convert observable to signal"),e(),n(29,"li")(30,"code"),t(31,"toObservable(signal)"),e(),t(32," - Convert signal to observable"),e(),n(33,"li"),t(34,"Use signals for synchronous state"),e(),n(35,"li"),t(36,"Use RxJS for complex async operations"),e()()()()),i&2){let r=o();s(18),l(r.angularIntegration)}}function P(i,m){if(i&1&&(n(0,"div",10)(1,"h3"),t(2,"RxJS Best Practices"),e(),n(3,"p"),t(4," Follow these practices to write clean, efficient, and maintainable RxJS code. "),e(),n(5,"pre")(6,"code",11),t(7),e()(),n(8,"div",19)(9,"h4"),t(10,"\u2705 Essential Best Practices"),e(),n(11,"ul")(12,"li")(13,"strong"),t(14,"Always unsubscribe:"),e(),t(15," Prevent memory leaks"),e(),n(16,"li")(17,"strong"),t(18,"Use async pipe:"),e(),t(19," Automatic subscription management"),e(),n(20,"li")(21,"strong"),t(22,"Avoid nested subscriptions:"),e(),t(23," Use operators instead"),e(),n(24,"li")(25,"strong"),t(26,"Handle errors:"),e(),t(27," Don't let errors crash streams"),e(),n(28,"li")(29,"strong"),t(30,"Use shareReplay:"),e(),t(31," Avoid duplicate requests"),e(),n(32,"li")(33,"strong"),t(34,"Name observables with $:"),e(),t(35," users$, data$ convention"),e(),n(36,"li")(37,"strong"),t(38,"Keep operators pure:"),e(),t(39," No side effects in operators"),e(),n(40,"li")(41,"strong"),t(42,"Use takeUntil pattern:"),e(),t(43," For component cleanup"),e()()(),n(44,"div",20)(45,"h4"),t(46,"\u{1F680} Performance Tips"),e(),n(47,"ul")(48,"li"),t(49,"Use "),n(50,"code"),t(51,"shareReplay"),e(),t(52," for expensive operations"),e(),n(53,"li"),t(54,"Debounce user input to reduce API calls"),e(),n(55,"li"),t(56,"Use "),n(57,"code"),t(58,"distinctUntilChanged"),e(),t(59," to prevent redundant work"),e(),n(60,"li"),t(61,"Lazy subscribe - don't subscribe in constructors"),e(),n(62,"li"),t(63,"Consider using signals for synchronous state"),e()()()()),i&2){let r=o();s(7),l(r.bestPractices)}}var k=(()=>{class i{constructor(){this.basicObservables=`import { Observable, of, from, interval } from 'rxjs';

// Creating Observables
// 1. of() - Emits values in sequence
const numbers$ = of(1, 2, 3, 4, 5);
numbers$.subscribe(val => console.log(val)); // 1, 2, 3, 4, 5

// 2. from() - Converts array/promise to observable
const array$ = from([10, 20, 30]);
const promise$ = from(fetch('/api/data'));

// 3. interval() - Emits numbers at intervals
const timer$ = interval(1000); // Emits 0, 1, 2... every second

// 4. Creating custom observable
const custom$ = new Observable(subscriber => {
  subscriber.next('Hello');
  subscriber.next('World');
  subscriber.complete();
});

// Subscribing to observables
const subscription = custom$.subscribe({
  next: (value) => console.log('Received:', value),
  error: (err) => console.error('Error:', err),
  complete: () => console.log('Completed!')
});

// Don't forget to unsubscribe!
subscription.unsubscribe();`,this.commonOperators=`import { of, interval } from 'rxjs';
import { map, filter, tap, take, debounceTime, distinctUntilChanged } from 'rxjs/operators';

// map - Transform values
of(1, 2, 3, 4, 5)
  .pipe(
    map(x => x * 10)
  )
  .subscribe(val => console.log(val)); // 10, 20, 30, 40, 50

// filter - Filter values
of(1, 2, 3, 4, 5)
  .pipe(
    filter(x => x % 2 === 0)
  )
  .subscribe(val => console.log(val)); // 2, 4

// tap - Side effects (debugging)
of(1, 2, 3)
  .pipe(
    tap(x => console.log('Before:', x)),
    map(x => x * 2),
    tap(x => console.log('After:', x))
  )
  .subscribe();

// take - Take first N emissions
interval(1000)
  .pipe(
    take(5)
  )
  .subscribe(val => console.log(val)); // 0, 1, 2, 3, 4 then completes

// debounceTime - Wait for pause in emissions
searchInput$
  .pipe(
    debounceTime(300) // Wait 300ms after last keystroke
  )
  .subscribe(term => console.log('Search:', term));

// distinctUntilChanged - Only emit when value changes
of(1, 1, 2, 2, 3, 1)
  .pipe(
    distinctUntilChanged()
  )
  .subscribe(val => console.log(val)); // 1, 2, 3, 1`,this.combinationOperators=`import { of, combineLatest, merge, forkJoin, zip } from 'rxjs';
import { switchMap, mergeMap, concatMap, exhaustMap } from 'rxjs/operators';

// combineLatest - Emit when ANY observable emits (latest from each)
const age$ = of(25, 26, 27);
const name$ = of('Alice', 'Bob');

combineLatest([age$, name$])
  .subscribe(([age, name]) => {
    console.log(\`\${name} is \${age} years old\`);
  });

// merge - Combine multiple observables into one
const clicks$ = fromEvent(button, 'click');
const timer$ = interval(1000);

merge(clicks$, timer$)
  .subscribe(val => console.log('Event:', val));

// forkJoin - Wait for all to complete (like Promise.all)
forkJoin({
  users: http.get('/api/users'),
  posts: http.get('/api/posts'),
  comments: http.get('/api/comments')
}).subscribe(({ users, posts, comments }) => {
  console.log('All loaded!', users, posts, comments);
});

// zip - Combine emissions by index
const nums$ = of(1, 2, 3);
const letters$ = of('A', 'B', 'C');

zip(nums$, letters$)
  .subscribe(([num, letter]) => {
    console.log(\`\${num}\${letter}\`); // 1A, 2B, 3C
  });`,this.higherOrderOperators=`import { fromEvent, interval, of } from 'rxjs';
import { switchMap, mergeMap, concatMap, exhaustMap } from 'rxjs/operators';

// switchMap - Cancel previous, switch to new observable
// Use: Search, live updates
searchInput$.pipe(
  debounceTime(300),
  switchMap(term => http.get(\`/api/search?q=\${term}\`))
).subscribe(results => console.log(results));

// mergeMap - Run in parallel, emit all results
// Use: Independent operations that can run simultaneously
of(1, 2, 3).pipe(
  mergeMap(id => http.get(\`/api/user/\${id}\`))
).subscribe(user => console.log(user));

// concatMap - Run in sequence, preserve order
// Use: Operations that must complete in order
of(1, 2, 3).pipe(
  concatMap(id => http.post(\`/api/user/\${id}\`, data))
).subscribe(response => console.log(response));

// exhaustMap - Ignore new emissions until current completes
// Use: Preventing duplicate operations (form submissions)
submitButton$.pipe(
  exhaustMap(() => http.post('/api/save', formData))
).subscribe(response => console.log('Saved:', response));

// Real-world example: Autocomplete search
searchInput$.pipe(
  debounceTime(300),           // Wait for user to stop typing
  distinctUntilChanged(),      // Only if value changed
  filter(term => term.length > 2), // Min 3 characters
  switchMap(term =>            // Cancel previous searches
    http.get(\`/api/search?q=\${term}\`).pipe(
      catchError(() => of([])) // Handle errors gracefully
    )
  )
).subscribe(results => displayResults(results));`,this.errorHandling=`import { of, throwError, EMPTY } from 'rxjs';
import { catchError, retry, retryWhen, delay, tap } from 'rxjs/operators';

// catchError - Handle errors and provide fallback
http.get('/api/data').pipe(
  catchError(error => {
    console.error('Error occurred:', error);
    return of([]); // Return empty array as fallback
  })
).subscribe(data => console.log(data));

// retry - Retry failed operation N times
http.get('/api/data').pipe(
  retry(3), // Retry up to 3 times
  catchError(error => {
    console.error('Failed after 3 retries');
    return throwError(() => error);
  })
).subscribe();

// retryWhen - Custom retry logic with delay
http.get('/api/data').pipe(
  retryWhen(errors =>
    errors.pipe(
      delay(1000),  // Wait 1 second between retries
      take(3),      // Max 3 retries
      tap(() => console.log('Retrying...'))
    )
  )
).subscribe();

// Advanced error handling
http.get<User[]>('/api/users').pipe(
  timeout(5000),           // Fail if takes > 5 seconds
  retry({
    count: 2,
    delay: 1000
  }),
  catchError(error => {
    if (error.status === 404) {
      return of([]); // Return empty for not found
    }
    // Log error and return cached data
    logError(error);
    return of(getCachedData());
  })
).subscribe(users => displayUsers(users));`,this.subjects=`import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

// Subject - Multicast observable, no initial value
const subject = new Subject<number>();

subject.subscribe(val => console.log('A:', val));
subject.subscribe(val => console.log('B:', val));

subject.next(1); // Both A and B receive 1
subject.next(2); // Both A and B receive 2

// BehaviorSubject - Has current value, emits last value to new subscribers
const currentUser = new BehaviorSubject<User | null>(null);

currentUser.subscribe(user => console.log('Current user:', user));
currentUser.next({ id: 1, name: 'Alice' });

// New subscriber gets current value immediately
currentUser.subscribe(user => console.log('New subscriber:', user));

// ReplaySubject - Replays N last values to new subscribers
const messages = new ReplaySubject<string>(3); // Keep last 3

messages.next('Message 1');
messages.next('Message 2');
messages.next('Message 3');
messages.next('Message 4');

// New subscriber gets last 3 messages
messages.subscribe(msg => console.log(msg)); // 2, 3, 4

// AsyncSubject - Only emits last value when completed
const result = new AsyncSubject<number>();

result.subscribe(val => console.log(val));
result.next(1);
result.next(2);
result.next(3);
result.complete(); // Now emits 3 to all subscribers

// Real-world: Event Bus Service
@Injectable({ providedIn: 'root' })
export class EventBusService {
  private eventSubject = new Subject<AppEvent>();
  public events$ = this.eventSubject.asObservable();
  
  emit(event: AppEvent) {
    this.eventSubject.next(event);
  }
}`,this.angularIntegration=`import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-search',
  template: \`
    <input [formControl]="searchControl" placeholder="Search users..." />
    
    @if (loading()) {
      <div>Loading...</div>
    }
    
    @for (user of users(); track user.id) {
      <div>{{ user.name }}</div>
    }
  \`
})
export class UserSearchComponent implements OnInit, OnDestroy {
  private http = inject(HttpClient);
  private destroy$ = new Subject<void>();
  
  searchControl = new FormControl('');
  users = signal<User[]>([]);
  loading = signal(false);
  
  ngOnInit() {
    // Listen to form control changes
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.loading.set(true)),
      switchMap(term => 
        this.http.get<User[]>(\`/api/users?q=\${term}\`)
      ),
      takeUntil(this.destroy$) // Auto-unsubscribe on destroy
    ).subscribe({
      next: users => {
        this.users.set(users);
        this.loading.set(false);
      },
      error: err => {
        console.error(err);
        this.loading.set(false);
      }
    });
  }
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

// Using async pipe (auto unsubscribes)
@Component({
  selector: 'app-users-list',
  template: \`
    @if (users$ | async; as users) {
      @for (user of users; track user.id) {
        <div>{{ user.name }}</div>
      }
    }
  \`
})
export class UsersListComponent {
  users$ = inject(HttpClient).get<User[]>('/api/users');
}`,this.bestPractices=`// 1. ALWAYS UNSUBSCRIBE
// Method 1: takeUntil pattern
private destroy$ = new Subject<void>();

ngOnInit() {
  this.dataService.data$.pipe(
    takeUntil(this.destroy$)
  ).subscribe(data => this.handleData(data));
}

ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}

// Method 2: Subscription management
private subscription = new Subscription();

ngOnInit() {
  this.subscription.add(
    observable1$.subscribe(data => {})
  );
  this.subscription.add(
    observable2$.subscribe(data => {})
  );
}

ngOnDestroy() {
  this.subscription.unsubscribe();
}

// Method 3: async pipe (automatic unsubscribe)
@Component({
  template: \`{{ data$ | async }}\`
})
export class MyComponent {
  data$ = this.http.get('/api/data');
}

// 2. USE PROPER OPERATORS
// \u274C BAD - Nested subscriptions (callback hell)
this.userService.getUser(id).subscribe(user => {
  this.postService.getPosts(user.id).subscribe(posts => {
    this.commentService.getComments(posts[0].id).subscribe(comments => {
      // Nested mess...
    });
  });
});

// \u2705 GOOD - Use switchMap
this.userService.getUser(id).pipe(
  switchMap(user => this.postService.getPosts(user.id)),
  switchMap(posts => this.commentService.getComments(posts[0].id))
).subscribe(comments => {
  // Clean and readable
});

// 3. HANDLE ERRORS
// \u274C BAD - No error handling
http.get('/api/data').subscribe(data => console.log(data));

// \u2705 GOOD - Handle errors
http.get('/api/data').pipe(
  catchError(error => {
    console.error('API Error:', error);
    return of(defaultValue);
  })
).subscribe(data => console.log(data));

// 4. USE SHAREPLAY FOR EXPENSIVE OPERATIONS
// \u274C BAD - Multiple subscriptions = multiple requests
const data$ = http.get('/api/expensive');
data$.subscribe(d => console.log('A:', d)); // Request 1
data$.subscribe(d => console.log('B:', d)); // Request 2

// \u2705 GOOD - Share single request
const data$ = http.get('/api/expensive').pipe(
  shareReplay({ bufferSize: 1, refCount: true })
);
data$.subscribe(d => console.log('A:', d)); // Request 1
data$.subscribe(d => console.log('B:', d)); // Uses cached result

// 5. COMBINE WITH SIGNALS
@Component({...})
export class ModernComponent {
  private http = inject(HttpClient);
  
  // Convert Observable to Signal
  users = toSignal(
    this.http.get<User[]>('/api/users'),
    { initialValue: [] }
  );
  
  // Convert Signal to Observable
  private searchTerm = signal('');
  private searchTerm$ = toObservable(this.searchTerm);
  
  results = toSignal(
    this.searchTerm$.pipe(
      debounceTime(300),
      switchMap(term => this.http.get(\`/search?q=\${term}\`))
    ),
    { initialValue: [] }
  );
}`}ngAfterViewChecked(){h.highlightAll()}static{this.\u0275fac=function(c){return new(c||i)}}static{this.\u0275cmp=d({type:i,selectors:[["app-learn-rxjs"]],standalone:!0,features:[p],decls:21,vars:0,consts:[[1,"header"],["label","Observables Basics"],["matTabContent",""],["label","Common Operators"],["label","Combination Operators"],["label","Higher-Order Operators"],["label","Error Handling"],["label","Subjects"],["label","Angular Integration"],["label","Best Practices"],[1,"tab-content"],[1,"language-typescript"],[1,"info-box"],[1,"tip-box"],[1,"comparison-table"],[1,"decision-guide"],[1,"warning-box"],[1,"use-cases"],[1,"migration-tip"],[1,"best-practices-list"],[1,"performance-tips"]],template:function(c,w){c&1&&(n(0,"h2",0),t(1,"RxJS - Reactive Extensions for JavaScript"),e(),n(2,"label"),t(3,"RxJS is a library for reactive programming using observables. It's essential for handling asynchronous operations, events, and data streams in Angular applications."),e(),n(4,"mat-tab-group")(5,"mat-tab",1),a(6,v,71,1,"ng-template",2),e(),n(7,"mat-tab",3),a(8,f,85,1,"ng-template",2),e(),n(9,"mat-tab",4),a(10,C,74,1,"ng-template",2),e(),n(11,"mat-tab",5),a(12,O,70,1,"ng-template",2),e(),n(13,"mat-tab",6),a(14,y,43,1,"ng-template",2),e(),n(15,"mat-tab",7),a(16,M,47,1,"ng-template",2),e(),n(17,"mat-tab",8),a(18,_,37,1,"ng-template",2),e(),n(19,"mat-tab",9),a(20,P,64,1,"ng-template",2),e()())},dependencies:[g,u,b,x],styles:[".header[_ngcontent-%COMP%]{color:#dd0031;font-size:2rem;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]{padding:20px}.tab-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#dd0031;margin-top:1.5rem;margin-bottom:.5rem}.tab-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#444;margin-top:1rem;margin-bottom:.5rem}.tab-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.6;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{line-height:1.8;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background-color:#f4f4f4;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background-color:#f5f5f5;padding:15px;border-radius:5px;overflow-x:auto;margin:1rem 0}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin:1rem 0}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #ddd;padding:12px;text-align:left}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#f5f5f5;font-weight:600}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#fafafa}.info-box[_ngcontent-%COMP%]{background-color:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:20px 0;border-radius:4px}.info-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.tip-box[_ngcontent-%COMP%]{background-color:#e8f5e9;border-left:4px solid #4caf50;padding:15px;margin:20px 0;border-radius:4px}.tip-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#2e7d32}.warning-box[_ngcontent-%COMP%]{background-color:#fff3e0;border-left:4px solid #ff9800;padding:15px;margin:20px 0;border-radius:4px}.warning-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#f57c00}.decision-guide[_ngcontent-%COMP%], .comparison-table[_ngcontent-%COMP%]{background-color:#f3e5f5;padding:15px;margin:20px 0;border-radius:4px}.decision-guide[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .comparison-table[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#7b1fa2}.use-cases[_ngcontent-%COMP%]{background-color:#e0f2f1;border-left:4px solid #009688;padding:15px;margin:20px 0;border-radius:4px}.use-cases[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#00796b}.migration-tip[_ngcontent-%COMP%]{background-color:#e0f2f1;border-left:4px solid #009688;padding:15px;margin:20px 0;border-radius:4px}.migration-tip[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#00796b}.best-practices-list[_ngcontent-%COMP%]{background-color:#e8f5e9;border-left:4px solid #4caf50;padding:15px;margin:20px 0;border-radius:4px}.best-practices-list[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#2e7d32}.best-practices-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#2e7d32}.performance-tips[_ngcontent-%COMP%]{background-color:#f3e5f5;border-left:4px solid #9c27b0;padding:15px;margin:20px 0;border-radius:4px}.performance-tips[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#7b1fa2}"]})}}return i})();export{k as LearnRxjsComponent};
