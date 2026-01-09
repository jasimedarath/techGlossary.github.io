import"./chunk-WCULWZKC.js";import{a as E}from"./chunk-FSUYFWSG.js";import{a as u,b as g,c as x,d as S}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as i,Xa as s,da as m,e as h,gb as n,hb as t,lb as a,tb as e,ub as l,yb as p}from"./chunk-WGQ2ELTG.js";var f=h(E());function U(r,c){if(r&1&&(n(0,"div",12)(1,"h3"),e(2,"What is NgRx?"),t(),n(3,"p"),e(4," NgRx provides state management for Angular applications based on the Redux pattern. It uses RxJS observables to handle async data and provides a single source of truth for application state. "),t(),n(5,"h4"),e(6,"Core Concepts"),t(),n(7,"ul")(8,"li")(9,"strong"),e(10,"Store:"),t(),e(11," Single immutable state tree"),t(),n(12,"li")(13,"strong"),e(14,"Actions:"),t(),e(15," Events that describe state changes"),t(),n(16,"li")(17,"strong"),e(18,"Reducers:"),t(),e(19," Pure functions that update state"),t(),n(20,"li")(21,"strong"),e(22,"Selectors:"),t(),e(23," Query state slices"),t(),n(24,"li")(25,"strong"),e(26,"Effects:"),t(),e(27," Handle side effects (HTTP, etc.)"),t()(),n(28,"h4"),e(29,"Why Use NgRx?"),t(),n(30,"ul")(31,"li"),e(32,"\u{1F4E6} "),n(33,"strong"),e(34,"Single Source of Truth:"),t(),e(35," All state in one place"),t(),n(36,"li"),e(37,"\u{1F504} "),n(38,"strong"),e(39,"Predictable:"),t(),e(40," State changes via pure functions"),t(),n(41,"li"),e(42,"\u{1F41B} "),n(43,"strong"),e(44,"Debuggable:"),t(),e(45," Redux DevTools integration"),t(),n(46,"li"),e(47,"\u23F1\uFE0F "),n(48,"strong"),e(49,"Time Travel:"),t(),e(50," Debug by replaying actions"),t(),n(51,"li"),e(52,"\u{1F9EA} "),n(53,"strong"),e(54,"Testable:"),t(),e(55," Pure functions easy to test"),t(),n(56,"li"),e(57,"\u{1F680} "),n(58,"strong"),e(59,"Performance:"),t(),e(60," OnPush change detection"),t()(),n(61,"pre")(62,"code",13),e(63),t()(),n(64,"div",14)(65,"h4"),e(66,"\u{1F4A1} When to Use NgRx"),t(),n(67,"ul")(68,"li"),e(69,"Complex state management"),t(),n(70,"li"),e(71,"State shared across many components"),t(),n(72,"li"),e(73,"Need for time-travel debugging"),t(),n(74,"li"),e(75,"Large teams needing structure"),t(),n(76,"li"),e(77,"State persistence requirements"),t()()(),n(78,"div",15)(79,"h4"),e(80,"\u26A0\uFE0F When NOT to Use NgRx"),t(),n(81,"ul")(82,"li"),e(83,"Small applications with simple state"),t(),n(84,"li"),e(85,"Prototypes and POCs"),t(),n(86,"li"),e(87,"When team unfamiliar with Redux patterns"),t(),n(88,"li"),e(89,"Local component state (use signals or ComponentStore)"),t()()()()),r&2){let o=a();i(63),l(o.introduction)}}function b(r,c){if(r&1&&(n(0,"div",12)(1,"h3"),e(2,"Store and State Management"),t(),n(3,"p"),e(4," The Store holds the entire application state in a single immutable object tree. It's the single source of truth for your application data. "),t(),n(5,"pre")(6,"code",13),e(7),t()(),n(8,"div",16)(9,"h4"),e(10,"\u{1F3D7}\uFE0F State Architecture"),t(),n(11,"pre")(12,"code"),e(13,`AppState
  \u251C\u2500\u2500 users: UserState
  \u2502   \u251C\u2500\u2500 entities: {}
  \u2502   \u251C\u2500\u2500 ids: []
  \u2502   \u251C\u2500\u2500 selectedId: null
  \u2502   \u2514\u2500\u2500 loading: false
  \u251C\u2500\u2500 products: ProductState
  \u2514\u2500\u2500 auth: AuthState`),t()()(),n(14,"div",17)(15,"h4"),e(16,"\u{1F4A1} State Design Tips"),t(),n(17,"ul")(18,"li"),e(19,"Keep state flat and normalized"),t(),n(20,"li"),e(21,"Use Entity Adapter for collections"),t(),n(22,"li"),e(23,"Separate data from UI state"),t(),n(24,"li"),e(25,"Store IDs, not references"),t(),n(26,"li"),e(27,"Use TypeScript interfaces"),t()()()()),r&2){let o=a();i(7),l(o.storeAndState)}}function C(r,c){if(r&1&&(n(0,"div",12)(1,"h3"),e(2,"Actions - Events that Describe Changes"),t(),n(3,"p"),e(4," Actions are plain objects that represent events in your application. They're the only way to trigger state changes. "),t(),n(5,"pre")(6,"code",13),e(7),t()(),n(8,"div",18)(9,"h4"),e(10,"\u{1F4DD} Action Naming Convention"),t(),n(11,"table")(12,"tr")(13,"th"),e(14,"Pattern"),t(),n(15,"th"),e(16,"Example"),t(),n(17,"th"),e(18,"Description"),t()(),n(19,"tr")(20,"td"),e(21,"[Source] Event"),t(),n(22,"td"),e(23,"[Login Page] Login"),t(),n(24,"td"),e(25,"User initiated"),t()(),n(26,"tr")(27,"td"),e(28,"[API] Success"),t(),n(29,"td"),e(30,"[Auth API] Login Success"),t(),n(31,"td"),e(32,"API success"),t()(),n(33,"tr")(34,"td"),e(35,"[API] Failure"),t(),n(36,"td"),e(37,"[Auth API] Login Failure"),t(),n(38,"td"),e(39,"API error"),t()()()()()),r&2){let o=a();i(7),l(o.actions)}}function v(r,c){if(r&1&&(n(0,"div",12)(1,"h3"),e(2,"Reducers - Pure Functions that Update State"),t(),n(3,"p"),e(4," Reducers are pure functions that take current state and an action, and return new state. They must be synchronous and side-effect free. "),t(),n(5,"pre")(6,"code",13),e(7),t()(),n(8,"div",19)(9,"h4"),e(10,"\u{1F4CF} Reducer Rules"),t(),n(11,"ul")(12,"li"),e(13,"\u2705 Must be pure functions"),t(),n(14,"li"),e(15,"\u2705 Always return new state (immutability)"),t(),n(16,"li"),e(17,"\u2705 No side effects (HTTP, localStorage, etc.)"),t(),n(18,"li"),e(19,"\u2705 Handle all relevant actions"),t(),n(20,"li"),e(21,"\u274C Never mutate state directly"),t(),n(22,"li"),e(23,"\u274C No async operations"),t()()()()),r&2){let o=a();i(7),l(o.reducers)}}function A(r,c){if(r&1&&(n(0,"div",12)(1,"h3"),e(2,"Selectors - Query State Efficiently"),t(),n(3,"p"),e(4," Selectors are pure functions for querying state. They're memoized for performance and composable for complex queries. "),t(),n(5,"pre")(6,"code",13),e(7),t()(),n(8,"div",20)(9,"h4"),e(10,"\u{1F3AF} Selector Benefits"),t(),n(11,"ul")(12,"li"),e(13,"\u{1F680} "),n(14,"strong"),e(15,"Memoization:"),t(),e(16," Only recompute when inputs change"),t(),n(17,"li"),e(18,"\u{1F527} "),n(19,"strong"),e(20,"Composition:"),t(),e(21," Build complex from simple"),t(),n(22,"li"),e(23,"\u{1F9EA} "),n(24,"strong"),e(25,"Testable:"),t(),e(26," Pure functions"),t(),n(27,"li"),e(28,"\u{1F4DD} "),n(29,"strong"),e(30,"Type-safe:"),t(),e(31," Full TypeScript support"),t(),n(32,"li"),e(33,"\u{1F3A8} "),n(34,"strong"),e(35,"Reusable:"),t(),e(36," Share across components"),t()()()()),r&2){let o=a();i(7),l(o.selectors)}}function P(r,c){if(r&1&&(n(0,"div",12)(1,"h3"),e(2,"Effects - Handle Side Effects"),t(),n(3,"p"),e(4," Effects handle async operations and side effects. They listen for actions, perform side effects (HTTP, localStorage), and dispatch new actions. "),t(),n(5,"pre")(6,"code",13),e(7),t()(),n(8,"div",21)(9,"h4"),e(10,"\u{1F527} Effect Operators Guide"),t(),n(11,"table")(12,"tr")(13,"th"),e(14,"Operator"),t(),n(15,"th"),e(16,"Behavior"),t(),n(17,"th"),e(18,"Use Case"),t()(),n(19,"tr")(20,"td"),e(21,"switchMap"),t(),n(22,"td"),e(23,"Cancel previous"),t(),n(24,"td"),e(25,"Search, autocomplete"),t()(),n(26,"tr")(27,"td"),e(28,"mergeMap"),t(),n(29,"td"),e(30,"Run in parallel"),t(),n(31,"td"),e(32,"Bulk operations"),t()(),n(33,"tr")(34,"td"),e(35,"concatMap"),t(),n(36,"td"),e(37,"Sequential"),t(),n(38,"td"),e(39,"Order matters"),t()(),n(40,"tr")(41,"td"),e(42,"exhaustMap"),t(),n(43,"td"),e(44,"Ignore new"),t(),n(45,"td"),e(46,"Prevent duplicates"),t()()()()()),r&2){let o=a();i(7),l(o.effects)}}function M(r,c){if(r&1&&(n(0,"div",12)(1,"h3"),e(2,"Entity Adapter - Manage Collections"),t(),n(3,"p"),e(4," Entity Adapter provides pre-built functions for managing normalized collections. It handles common CRUD operations and provides memoized selectors. "),t(),n(5,"pre")(6,"code",13),e(7),t()(),n(8,"div",22)(9,"h4"),e(10,"\u{1F6E0}\uFE0F Entity Adapter Methods"),t(),n(11,"ul")(12,"li")(13,"strong"),e(14,"Add:"),t(),e(15," addOne, addMany, addAll"),t(),n(16,"li")(17,"strong"),e(18,"Set:"),t(),e(19," setOne, setMany, setAll"),t(),n(20,"li")(21,"strong"),e(22,"Update:"),t(),e(23," updateOne, updateMany"),t(),n(24,"li")(25,"strong"),e(26,"Remove:"),t(),e(27," removeOne, removeMany, removeAll"),t(),n(28,"li")(29,"strong"),e(30,"Upsert:"),t(),e(31," upsertOne, upsertMany"),t()()()()),r&2){let o=a();i(7),l(o.entityAdapter)}}function y(r,c){if(r&1&&(n(0,"div",12)(1,"h3"),e(2,"Component Store - Local State Management"),t(),n(3,"p"),e(4," Component Store manages component-level state with less boilerplate. Perfect for local UI state that doesn't need to be global. "),t(),n(5,"pre")(6,"code",13),e(7),t()(),n(8,"div",23)(9,"h4"),e(10,"\u2696\uFE0F Global Store vs Component Store"),t(),n(11,"table")(12,"tr")(13,"th"),e(14,"Feature"),t(),n(15,"th"),e(16,"Global Store"),t(),n(17,"th"),e(18,"Component Store"),t()(),n(19,"tr")(20,"td"),e(21,"Scope"),t(),n(22,"td"),e(23,"Application-wide"),t(),n(24,"td"),e(25,"Component-level"),t()(),n(26,"tr")(27,"td"),e(28,"Boilerplate"),t(),n(29,"td"),e(30,"High"),t(),n(31,"td"),e(32,"Low"),t()(),n(33,"tr")(34,"td"),e(35,"Actions"),t(),n(36,"td"),e(37,"Required"),t(),n(38,"td"),e(39,"Optional"),t()(),n(40,"tr")(41,"td"),e(42,"DevTools"),t(),n(43,"td"),e(44,"Yes"),t(),n(45,"td"),e(46,"No"),t()(),n(47,"tr")(48,"td"),e(49,"Use Case"),t(),n(50,"td"),e(51,"Shared state"),t(),n(52,"td"),e(53,"Local state"),t()()()()()),r&2){let o=a();i(7),l(o.componentStore)}}function _(r,c){if(r&1&&(n(0,"div",12)(1,"h3"),e(2,"Signal Store - Modern State Management"),t(),n(3,"p"),e(4," Signal Store (NgRx 17+) combines signals with state management for a simpler, more reactive API with less boilerplate. "),t(),n(5,"pre")(6,"code",13),e(7),t()(),n(8,"div",24)(9,"h4"),e(10,"\u{1F504} NgRx Evolution"),t(),n(11,"ul")(12,"li")(13,"strong"),e(14,"Traditional:"),t(),e(15," Actions \u2192 Reducers \u2192 Selectors \u2192 Effects"),t(),n(16,"li")(17,"strong"),e(18,"Component Store:"),t(),e(19," Updaters \u2192 Selectors \u2192 Effects"),t(),n(20,"li")(21,"strong"),e(22,"Signal Store:"),t(),e(23," State \u2192 Computed \u2192 Methods (simplest!)"),t()()(),n(24,"div",17)(25,"h4"),e(26,"\u{1F4A1} When to Use Signal Store"),t(),n(27,"ul")(28,"li"),e(29,"New Angular 16+ projects"),t(),n(30,"li"),e(31,"Want simpler API than traditional store"),t(),n(32,"li"),e(33,"Embracing signals for reactivity"),t(),n(34,"li"),e(35,"Component or feature state"),t()()()()),r&2){let o=a();i(7),l(o.signalStore)}}function O(r,c){if(r&1&&(n(0,"div",12)(1,"h3"),e(2,"NgRx Best Practices"),t(),n(3,"pre")(4,"code",13),e(5),t()(),n(6,"div",25)(7,"div",26)(8,"h4"),e(9,"\u2705 DO"),t(),n(10,"ul")(11,"li"),e(12,"Use OnPush change detection"),t(),n(13,"li"),e(14,"Normalize state shape"),t(),n(15,"li"),e(16,"Keep reducers pure"),t(),n(17,"li"),e(18,"Handle all errors in effects"),t(),n(19,"li"),e(20,"Use Entity Adapter for collections"),t(),n(21,"li"),e(22,"Write comprehensive tests"),t(),n(23,"li"),e(24,"Use Redux DevTools"),t()()(),n(25,"div",27)(26,"h4"),e(27,"\u274C DON'T"),t(),n(28,"ul")(29,"li"),e(30,"Mutate state directly"),t(),n(31,"li"),e(32,"Put logic in actions"),t(),n(33,"li"),e(34,"Dispatch in reducers"),t(),n(35,"li"),e(36,"Use store for all state"),t(),n(37,"li"),e(38,"Forget error handling"),t(),n(39,"li"),e(40,"Nest state deeply"),t(),n(41,"li"),e(42,"Skip testing"),t()()()()()),r&2){let o=a();i(5),l(o.bestPractices)}}var L=(()=>{class r{constructor(){this.introduction=`// NgRx - Reactive State Management for Angular
// Built on Redux pattern with RxJS integration

// Core Principles:
// 1. Single Source of Truth - One immutable state tree
// 2. State is Read-Only - Changes only through actions
// 3. Changes via Pure Functions - Reducers are predictable
// 4. Observable State - Subscribe to state changes

// Installation
npm install @ngrx/store @ngrx/effects @ngrx/entity @ngrx/store-devtools

// Basic Flow:
Component \u2192 dispatches \u2192 Action \u2192 processed by \u2192 Reducer \u2192 updates \u2192 Store
                           \u2193
                        Effect (side effects)
                           \u2193
                     dispatches new Action`,this.storeAndState=`// Store and State Setup
import { createReducer, createAction, on } from '@ngrx/store';
import { provideStore, Store } from '@ngrx/store';

// 1. Define State Interface
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserState {
  users: User[];
  selectedUser: User | null;
  loading: boolean;
  error: string | null;
}

export const initialState: UserState = {
  users: [],
  selectedUser: null,
  loading: false,
  error: null
};

// 2. App State (combine all feature states)
export interface AppState {
  users: UserState;
  // other features...
}

// 3. Bootstrap Store
// main.ts
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({
      users: usersReducer
    })
  ]
});

// 4. Inject Store in Component
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user-list',
  template: \`
    <div *ngFor="let user of users$ | async">
      {{ user.name }}
    </div>
  \`
})
export class UserListComponent {
  users$ = this.store.select(selectAllUsers);
  
  constructor(private store: Store<AppState>) {}
  
  loadUsers() {
    this.store.dispatch(loadUsers());
  }
}`,this.actions=`// Actions - Events that Describe State Changes
import { createAction, props } from '@ngrx/store';

// 1. Simple Actions (no payload)
export const loadUsers = createAction('[User List] Load Users');
export const clearUsers = createAction('[User List] Clear Users');

// 2. Actions with Payload
export const loadUsersSuccess = createAction(
  '[User API] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[User API] Load Users Failure',
  props<{ error: string }>()
);

export const selectUser = createAction(
  '[User List] Select User',
  props<{ userId: number }>()
);

export const updateUser = createAction(
  '[User Edit] Update User',
  props<{ user: User }>()
);

export const deleteUser = createAction(
  '[User List] Delete User',
  props<{ userId: number }>()
);

// 3. Action Naming Convention
// [Source] Event Description
// Source: Where action is dispatched from
// Event: What happened

// Examples:
// [Login Page] Login
// [Auth API] Login Success
// [Auth API] Login Failure
// [Product List] Load Products
// [Product API] Load Products Success

// 4. Dispatching Actions
export class UserComponent {
  constructor(private store: Store) {}
  
  onLoadUsers() {
    this.store.dispatch(loadUsers());
  }
  
  onSelectUser(userId: number) {
    this.store.dispatch(selectUser({ userId }));
  }
  
  onDeleteUser(userId: number) {
    this.store.dispatch(deleteUser({ userId }));
  }
}`,this.reducers=`// Reducers - Pure Functions that Update State
import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export const usersReducer = createReducer(
  initialState,
  
  // Load Users
  on(UserActions.loadUsers, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  
  on(UserActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
    error: null
  })),
  
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  
  // Select User
  on(UserActions.selectUser, (state, { userId }) => ({
    ...state,
    selectedUser: state.users.find(u => u.id === userId) || null
  })),
  
  // Update User
  on(UserActions.updateUser, (state, { user }) => ({
    ...state,
    users: state.users.map(u => u.id === user.id ? user : u),
    selectedUser: state.selectedUser?.id === user.id ? user : state.selectedUser
  })),
  
  // Delete User
  on(UserActions.deleteUser, (state, { userId }) => ({
    ...state,
    users: state.users.filter(u => u.id !== userId),
    selectedUser: state.selectedUser?.id === userId ? null : state.selectedUser
  })),
  
  // Clear Users
  on(UserActions.clearUsers, () => initialState)
);

// Reducer Rules:
// \u2705 Pure functions - no side effects
// \u2705 Immutable updates - always return new state
// \u2705 Don't mutate state directly
// \u2705 Handle all relevant actions

// \u274C Bad: Mutating state
on(UserActions.addUser, (state, { user }) => {
  state.users.push(user); // Mutation!
  return state;
});

// \u2705 Good: Creating new state
on(UserActions.addUser, (state, { user }) => ({
  ...state,
  users: [...state.users, user] // New array
}));`,this.selectors=`// Selectors - Query State Slices
import { createSelector, createFeatureSelector } from '@ngrx/store';

// 1. Feature Selector (top-level state slice)
export const selectUserState = createFeatureSelector<UserState>('users');

// 2. Basic Selectors
export const selectAllUsers = createSelector(
  selectUserState,
  (state) => state.users
);

export const selectSelectedUser = createSelector(
  selectUserState,
  (state) => state.selectedUser
);

export const selectUsersLoading = createSelector(
  selectUserState,
  (state) => state.loading
);

export const selectUsersError = createSelector(
  selectUserState,
  (state) => state.error
);

// 3. Composed Selectors (memoized)
export const selectUserById = (userId: number) => createSelector(
  selectAllUsers,
  (users) => users.find(u => u.id === userId)
);

export const selectActiveUsers = createSelector(
  selectAllUsers,
  (users) => users.filter(u => u.active)
);

export const selectUserCount = createSelector(
  selectAllUsers,
  (users) => users.length
);

// 4. Multi-State Selectors
export const selectUsersWithPosts = createSelector(
  selectAllUsers,
  selectAllPosts, // from another feature
  (users, posts) => users.map(user => ({
    ...user,
    posts: posts.filter(p => p.userId === user.id)
  }))
);

// 5. Props Selectors
export const selectUsersByRole = createSelector(
  selectAllUsers,
  (users: User[], props: { role: string }) => 
    users.filter(u => u.role === props.role)
);

// Usage in Component
@Component({
  template: \`
    <div *ngFor="let user of users$ | async">{{ user.name }}</div>
    <div>{{ selectedUser$ | async | json }}</div>
    <div *ngIf="loading$ | async">Loading...</div>
    <div *ngIf="error$ | async as error">{{ error }}</div>
  \`
})
export class UserListComponent {
  users$ = this.store.select(selectAllUsers);
  selectedUser$ = this.store.select(selectSelectedUser);
  loading$ = this.store.select(selectUsersLoading);
  error$ = this.store.select(selectUsersError);
  admins$ = this.store.select(selectUsersByRole, { role: 'admin' });
  
  constructor(private store: Store) {}
}

// Selector Benefits:
// \u2705 Memoization - Only recompute when inputs change
// \u2705 Composition - Build complex selectors from simple ones
// \u2705 Testable - Pure functions
// \u2705 Type-safe - TypeScript support`,this.effects=`// Effects - Handle Side Effects
import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private userService = inject(UserService);
  private router = inject(Router);
  
  // 1. Load Users Effect
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers), // Listen for this action
      switchMap(() =>
        this.userService.getUsers().pipe( // HTTP call
          map(users => UserActions.loadUsersSuccess({ users })),
          catchError(error => 
            of(UserActions.loadUsersFailure({ error: error.message }))
          )
        )
      )
    )
  );
  
  // 2. Save User Effect
  saveUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateUser),
      switchMap(({ user }) =>
        this.userService.updateUser(user).pipe(
          map(updatedUser => UserActions.updateUserSuccess({ user: updatedUser })),
          catchError(error => of(UserActions.updateUserFailure({ error })))
        )
      )
    )
  );
  
  // 3. Delete User Effect
  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.deleteUser),
      switchMap(({ userId }) =>
        this.userService.deleteUser(userId).pipe(
          map(() => UserActions.deleteUserSuccess({ userId })),
          catchError(error => of(UserActions.deleteUserFailure({ error })))
        )
      )
    )
  );
  
  // 4. Non-dispatching Effect (side effects only)
  logUserActions$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          UserActions.loadUsersSuccess,
          UserActions.updateUserSuccess,
          UserActions.deleteUserSuccess
        ),
        tap(action => console.log('User action:', action))
      ),
    { dispatch: false } // Don't dispatch new action
  );
  
  // 5. Navigation Effect
  redirectAfterDelete$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.deleteUserSuccess),
        tap(() => this.router.navigate(['/users']))
      ),
    { dispatch: false }
  );
  
  // 6. Notification Effect
  showNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.updateUserSuccess),
        tap(() => this.notificationService.show('User updated successfully'))
      ),
    { dispatch: false }
  );
}

// Register Effects
// main.ts
import { provideEffects } from '@ngrx/effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ users: usersReducer }),
    provideEffects([UserEffects])
  ]
});

// Effect Patterns:
// \u2705 Use switchMap for cancellable requests (search, autocomplete)
// \u2705 Use mergeMap for parallel requests (bulk operations)
// \u2705 Use concatMap for sequential requests (order matters)
// \u2705 Use exhaustMap for blocking requests (prevent duplicates)
// \u2705 Always handle errors with catchError
// \u2705 Return actions, not data`,this.entityAdapter=`// Entity Adapter - Manage Collections
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

// 1. Define Entity State
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserState extends EntityState<User> {
  selectedUserId: number | null;
  loading: boolean;
  error: string | null;
}

// 2. Create Entity Adapter
export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: (user: User) => user.id, // Default: entity.id
  sortComparer: (a, b) => a.name.localeCompare(b.name) // Optional sorting
});

// 3. Initial State
export const initialState: UserState = userAdapter.getInitialState({
  selectedUserId: null,
  loading: false,
  error: null
});

// 4. Reducer with Entity Adapter
export const usersReducer = createReducer(
  initialState,
  
  on(UserActions.loadUsersSuccess, (state, { users }) =>
    userAdapter.setAll(users, { ...state, loading: false })
  ),
  
  on(UserActions.addUser, (state, { user }) =>
    userAdapter.addOne(user, state)
  ),
  
  on(UserActions.updateUser, (state, { user }) =>
    userAdapter.updateOne(
      { id: user.id, changes: user },
      state
    )
  ),
  
  on(UserActions.deleteUser, (state, { userId }) =>
    userAdapter.removeOne(userId, state)
  ),
  
  on(UserActions.addUsers, (state, { users }) =>
    userAdapter.addMany(users, state)
  ),
  
  on(UserActions.clearUsers, (state) =>
    userAdapter.removeAll(state)
  )
);

// 5. Entity Selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = userAdapter.getSelectors();

export const selectUserState = createFeatureSelector<UserState>('users');

export const selectAllUsers = createSelector(
  selectUserState,
  selectAll
);

export const selectUserEntities = createSelector(
  selectUserState,
  selectEntities
);

export const selectUserIds = createSelector(
  selectUserState,
  selectIds
);

export const selectUserTotal = createSelector(
  selectUserState,
  selectTotal
);

export const selectSelectedUser = createSelector(
  selectUserState,
  selectUserEntities,
  (state, entities) => 
    state.selectedUserId ? entities[state.selectedUserId] : null
);

// Entity Adapter Methods:
// addOne, addMany, addAll
// setOne, setMany, setAll
// removeOne, removeMany, removeAll
// updateOne, updateMany
// upsertOne, upsertMany
// map

// Benefits:
// \u2705 Normalized state (entities by ID)
// \u2705 Built-in CRUD operations
// \u2705 Performance optimizations
// \u2705 Consistent patterns`,this.componentStore=`// Component Store - Local State Management
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { tap, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

// 1. Define State Interface
interface TodoState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
  loading: boolean;
}

// 2. Create Component Store
@Injectable()
export class TodoStore extends ComponentStore<TodoState> {
  
  constructor(private todoService: TodoService) {
    // Initialize state
    super({
      todos: [],
      filter: 'all',
      loading: false
    });
  }
  
  // 3. Selectors
  readonly todos$ = this.select(state => state.todos);
  readonly filter$ = this.select(state => state.filter);
  readonly loading$ = this.select(state => state.loading);
  
  readonly filteredTodos$ = this.select(
    this.todos$,
    this.filter$,
    (todos, filter) => {
      switch (filter) {
        case 'active': return todos.filter(t => !t.completed);
        case 'completed': return todos.filter(t => t.completed);
        default: return todos;
      }
    }
  );
  
  // 4. Updaters (synchronous state updates)
  readonly addTodo = this.updater((state, todo: Todo) => ({
    ...state,
    todos: [...state.todos, todo]
  }));
  
  readonly removeTodo = this.updater((state, id: number) => ({
    ...state,
    todos: state.todos.filter(t => t.id !== id)
  }));
  
  readonly toggleTodo = this.updater((state, id: number) => ({
    ...state,
    todos: state.todos.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    )
  }));
  
  readonly setFilter = this.updater((state, filter: TodoState['filter']) => ({
    ...state,
    filter
  }));
  
  // 5. Effects (asynchronous operations)
  readonly loadTodos = this.effect<void>(trigger$ =>
    trigger$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap(() =>
        this.todoService.getTodos().pipe(
          tap(todos => this.patchState({ todos, loading: false })),
          catchError(() => {
            this.patchState({ loading: false });
            return of([]);
          })
        )
      )
    )
  );
  
  readonly saveTodo = this.effect<Todo>(todo$ =>
    todo$.pipe(
      switchMap(todo =>
        this.todoService.saveTodo(todo).pipe(
          tap(savedTodo => this.addTodo(savedTodo))
        )
      )
    )
  );
}

// 6. Use in Component
@Component({
  selector: 'app-todo-list',
  providers: [TodoStore], // Provide at component level
  template: \`
    <div *ngFor="let todo of todos$ | async">
      <input type="checkbox" 
             [checked]="todo.completed"
             (change)="store.toggleTodo(todo.id)">
      {{ todo.title }}
      <button (click)="store.removeTodo(todo.id)">Delete</button>
    </div>
    <button (click)="store.setFilter('all')">All</button>
    <button (click)="store.setFilter('active')">Active</button>
    <button (click)="store.setFilter('completed')">Completed</button>
  \`
})
export class TodoListComponent implements OnInit {
  todos$ = this.store.filteredTodos$;
  
  constructor(readonly store: TodoStore) {}
  
  ngOnInit() {
    this.store.loadTodos();
  }
}

// Component Store Benefits:
// \u2705 Component-scoped state
// \u2705 Automatic cleanup on component destroy
// \u2705 Less boilerplate than global store
// \u2705 Perfect for local UI state
// \u2705 Can be combined with global store

// When to Use:
// - Component-specific state
// - Form state
// - UI state (modals, accordions)
// - Local data caching`,this.signalStore=`// Signal Store - Modern State Management (NgRx 17+)
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { computed } from '@angular/core';

// 1. Create Signal Store
export const TodoStore = signalStore(
  { providedIn: 'root' },
  
  // State
  withState({
    todos: [] as Todo[],
    filter: 'all' as 'all' | 'active' | 'completed',
    loading: false
  }),
  
  // Computed (derived state)
  withComputed((store) => ({
    filteredTodos: computed(() => {
      const todos = store.todos();
      const filter = store.filter();
      
      switch (filter) {
        case 'active': return todos.filter(t => !t.completed);
        case 'completed': return todos.filter(t => t.completed);
        default: return todos;
      }
    }),
    
    activeCount: computed(() =>
      store.todos().filter(t => !t.completed).length
    ),
    
    completedCount: computed(() =>
      store.todos().filter(t => t.completed).length
    )
  })),
  
  // Methods
  withMethods((store, todoService = inject(TodoService)) => ({
    async loadTodos() {
      patchState(store, { loading: true });
      try {
        const todos = await todoService.getTodos();
        patchState(store, { todos, loading: false });
      } catch (error) {
        patchState(store, { loading: false });
      }
    },
    
    addTodo(todo: Todo) {
      patchState(store, {
        todos: [...store.todos(), todo]
      });
    },
    
    removeTodo(id: number) {
      patchState(store, {
        todos: store.todos().filter(t => t.id !== id)
      });
    },
    
    toggleTodo(id: number) {
      patchState(store, {
        todos: store.todos().map(t =>
          t.id === id ? { ...t, completed: !t.completed } : t
        )
      });
    },
    
    setFilter(filter: 'all' | 'active' | 'completed') {
      patchState(store, { filter });
    }
  }))
);

// 2. Use in Component
@Component({
  selector: 'app-todo-list',
  template: \`
    <div *ngFor="let todo of store.filteredTodos()">
      <input type="checkbox" 
             [checked]="todo.completed"
             (change)="store.toggleTodo(todo.id)">
      {{ todo.title }}
    </div>
    <p>Active: {{ store.activeCount() }}</p>
    <p>Completed: {{ store.completedCount() }}</p>
  \`
})
export class TodoListComponent {
  readonly store = inject(TodoStore);
  
  ngOnInit() {
    this.store.loadTodos();
  }
}

// Signal Store Benefits:
// \u2705 Simple API - Less boilerplate
// \u2705 Type-safe - Full TypeScript support
// \u2705 Reactive - Built on signals
// \u2705 Composable - Mix and match features
// \u2705 Performance - Fine-grained reactivity
// \u2705 DevTools - Works with Redux DevTools

// Comparison:
// Traditional Store: Actions \u2192 Reducers \u2192 Selectors \u2192 Effects
// Signal Store: State \u2192 Computed \u2192 Methods (simpler!)`,this.bestPractices=`// NgRx Best Practices

// 1. Folder Structure
src/app/state/
  \u251C\u2500\u2500 users/
  \u2502   \u251C\u2500\u2500 users.actions.ts
  \u2502   \u251C\u2500\u2500 users.reducer.ts
  \u2502   \u251C\u2500\u2500 users.selectors.ts
  \u2502   \u251C\u2500\u2500 users.effects.ts
  \u2502   \u2514\u2500\u2500 index.ts (barrel export)
  \u251C\u2500\u2500 products/
  \u2514\u2500\u2500 app.state.ts

// 2. Action Naming
// \u2705 Good: [Source] Event
export const loadUsers = createAction('[User List] Load Users');
export const loadUsersSuccess = createAction('[User API] Load Users Success');

// \u274C Bad: Generic names
export const load = createAction('load');
export const success = createAction('success');

// 3. State Shape
// \u2705 Good: Normalized and flat
interface UsersState {
  ids: number[];
  entities: { [id: number]: User };
  selectedId: number | null;
}

// \u274C Bad: Nested and denormalized
interface UsersState {
  users: {
    user: User;
    posts: Post[];
    comments: Comment[];
  }[];
}

// 4. Selectors
// \u2705 Good: Memoized selectors
export const selectUserById = (id: number) => createSelector(
  selectAllUsers,
  (users) => users.find(u => u.id === id)
);

// \u274C Bad: Inline logic in components
this.user = this.users.find(u => u.id === this.userId);

// 5. Effects
// \u2705 Good: Handle all cases
loadUsers$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadUsers),
    switchMap(() =>
      this.service.getUsers().pipe(
        map(users => loadUsersSuccess({ users })),
        catchError(error => of(loadUsersFailure({ error })))
      )
    )
  )
);

// \u274C Bad: No error handling
loadUsers$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadUsers),
    switchMap(() => this.service.getUsers()),
    map(users => loadUsersSuccess({ users }))
  )
);

// 6. Component Design
// \u2705 Good: Smart/Container components
@Component({
  selector: 'app-user-list-container',
  template: \`
    <app-user-list
      [users]="users$ | async"
      [loading]="loading$ | async"
      (loadUsers)="onLoadUsers()"
      (selectUser)="onSelectUser($event)">
    </app-user-list>
  \`
})
export class UserListContainerComponent {
  users$ = this.store.select(selectAllUsers);
  loading$ = this.store.select(selectUsersLoading);
  
  onLoadUsers() {
    this.store.dispatch(loadUsers());
  }
  
  onSelectUser(userId: number) {
    this.store.dispatch(selectUser({ userId }));
  }
}

// \u2705 Good: Presentational/Dumb component
@Component({
  selector: 'app-user-list',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  @Input() users: User[];
  @Input() loading: boolean;
  @Output() loadUsers = new EventEmitter<void>();
  @Output() selectUser = new EventEmitter<number>();
}

// 7. Testing
// \u2705 Good: Test each piece independently
describe('usersReducer', () => {
  it('should add user', () => {
    const user = { id: 1, name: 'Test' };
    const action = addUser({ user });
    const state = usersReducer(initialState, action);
    
    expect(state.users).toContain(user);
  });
});

// 8. Performance
// \u2705 Use Entity Adapter for collections
// \u2705 Use OnPush change detection
// \u2705 Memoize selectors
// \u2705 Avoid selecting entire state
// \u2705 Use trackBy with *ngFor

// 9. Don'ts
// \u274C Don't mutate state
// \u274C Don't put logic in actions
// \u274C Don't dispatch actions in reducers
// \u274C Don't subscribe to store in services
// \u274C Don't use store for all state (local state is OK)

// 10. Do's
// \u2705 Keep reducers pure
// \u2705 Handle errors in effects
// \u2705 Use strong typing
// \u2705 Test thoroughly
// \u2705 Use Redux DevTools`}ngAfterViewChecked(){f.default.highlightAll()}static{this.\u0275fac=function(d){return new(d||r)}}static{this.\u0275cmp=m({type:r,selectors:[["app-learn-ngrx"]],standalone:!0,features:[p],decls:25,vars:0,consts:[[1,"header"],["label","Introduction"],["matTabContent",""],["label","Store & State"],["label","Actions"],["label","Reducers"],["label","Selectors"],["label","Effects"],["label","Entity Adapter"],["label","Component Store"],["label","Signal Store"],["label","Best Practices"],[1,"tab-content"],[1,"language-typescript"],[1,"info-box"],[1,"warning-box"],[1,"architecture-diagram"],[1,"tip-box"],[1,"naming-convention"],[1,"rules-box"],[1,"benefits-box"],[1,"operator-guide"],[1,"methods-box"],[1,"comparison-box"],[1,"evolution-box"],[1,"best-practices-grid"],[1,"do-box"],[1,"dont-box"]],template:function(d,D){d&1&&(n(0,"h2",0),e(1,"NgRx - State Management"),t(),n(2,"label"),e(3,"NgRx is a reactive state management library for Angular, inspired by Redux. It provides a predictable state container with RxJS integration."),t(),n(4,"mat-tab-group")(5,"mat-tab",1),s(6,U,90,1,"ng-template",2),t(),n(7,"mat-tab",3),s(8,b,28,1,"ng-template",2),t(),n(9,"mat-tab",4),s(10,C,40,1,"ng-template",2),t(),n(11,"mat-tab",5),s(12,v,24,1,"ng-template",2),t(),n(13,"mat-tab",6),s(14,A,37,1,"ng-template",2),t(),n(15,"mat-tab",7),s(16,P,47,1,"ng-template",2),t(),n(17,"mat-tab",8),s(18,M,32,1,"ng-template",2),t(),n(19,"mat-tab",9),s(20,y,54,1,"ng-template",2),t(),n(21,"mat-tab",10),s(22,_,36,1,"ng-template",2),t(),n(23,"mat-tab",11),s(24,O,43,1,"ng-template",2),t()())},dependencies:[S,u,g,x],styles:[".header[_ngcontent-%COMP%]{color:#dd0031;font-size:2rem;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]{padding:20px}.tab-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#dd0031;margin-top:1.5rem;margin-bottom:.5rem}.tab-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#444;margin-top:1rem;margin-bottom:.5rem}.tab-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.6;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .tab-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{line-height:1.8;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background-color:#f4f4f4;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background-color:#f5f5f5;padding:15px;border-radius:5px;overflow-x:auto;margin:1rem 0}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin:1rem 0}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #ddd;padding:12px;text-align:left}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#f5f5f5;font-weight:600}.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#fafafa}.info-box[_ngcontent-%COMP%]{background-color:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:20px 0;border-radius:4px}.info-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.tip-box[_ngcontent-%COMP%]{background-color:#e8f5e9;border-left:4px solid #4caf50;padding:15px;margin:20px 0;border-radius:4px}.tip-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#2e7d32}.warning-box[_ngcontent-%COMP%]{background-color:#fff3e0;border-left:4px solid #ff9800;padding:15px;margin:20px 0;border-radius:4px}.warning-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#f57c00}.architecture-diagram[_ngcontent-%COMP%]{background-color:#f3e5f5;padding:15px;margin:20px 0;border-radius:4px}.architecture-diagram[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#7b1fa2;margin-top:0}.architecture-diagram[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #e0e0e0}.naming-convention[_ngcontent-%COMP%]{background-color:#e0f2f1;padding:15px;margin:20px 0;border-radius:4px}.naming-convention[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#00796b;margin-top:0}.rules-box[_ngcontent-%COMP%]{background-color:#e8eaf6;border-left:4px solid #3f51b5;padding:15px;margin:20px 0;border-radius:4px}.rules-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#303f9f}.benefits-box[_ngcontent-%COMP%]{background-color:#e8f5e9;border-left:4px solid #4caf50;padding:15px;margin:20px 0;border-radius:4px}.benefits-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#2e7d32}.operator-guide[_ngcontent-%COMP%]{background-color:#f3e5f5;padding:15px;margin:20px 0;border-radius:4px}.operator-guide[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#7b1fa2;margin-top:0}.methods-box[_ngcontent-%COMP%]{background-color:#e0f2f1;border-left:4px solid #009688;padding:15px;margin:20px 0;border-radius:4px}.methods-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#00796b}.comparison-box[_ngcontent-%COMP%]{background-color:#fff9c4;padding:15px;margin:20px 0;border-radius:4px}.comparison-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#f57f17;margin-top:0}.evolution-box[_ngcontent-%COMP%]{background-color:#e1bee7;border-left:4px solid #9c27b0;padding:15px;margin:20px 0;border-radius:4px}.evolution-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#6a1b9a}.best-practices-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:20px 0}.best-practices-grid[_ngcontent-%COMP%]   .do-box[_ngcontent-%COMP%], .best-practices-grid[_ngcontent-%COMP%]   .dont-box[_ngcontent-%COMP%]{padding:15px;border-radius:4px}.best-practices-grid[_ngcontent-%COMP%]   .do-box[_ngcontent-%COMP%]{background-color:#e8f5e9;border-left:4px solid #4caf50}.best-practices-grid[_ngcontent-%COMP%]   .do-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#2e7d32;margin-top:0}.best-practices-grid[_ngcontent-%COMP%]   .dont-box[_ngcontent-%COMP%]{background-color:#ffebee;border-left:4px solid #f44336}.best-practices-grid[_ngcontent-%COMP%]   .dont-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#c62828;margin-top:0}"]})}}return r})();export{L as LearnNgrxComponent};
