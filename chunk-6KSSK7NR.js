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

// src/app/components/angular/learn-control-flow/learn-control-flow.component.ts
var Prism = __toESM(require_prism());
function LearnControlFlowComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h3");
    \u0275\u0275text(2, "Conditional Rendering with @if");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " The new ");
    \u0275\u0275elementStart(5, "code");
    \u0275\u0275text(6, "@if");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " syntax replaces ");
    \u0275\u0275elementStart(8, "code");
    \u0275\u0275text(9, "*ngIf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " with a cleaner, more intuitive syntax that's familiar to developers from other frameworks and languages. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h4");
    \u0275\u0275text(12, "Key Advantages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ul")(14, "li")(15, "strong");
    \u0275\u0275text(16, "Better readability:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " More concise and easier to understand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "li")(19, "strong");
    \u0275\u0275text(20, "Type inference:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " Full TypeScript type narrowing support");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "li")(23, "strong");
    \u0275\u0275text(24, "Performance:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " More optimized compiled output");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "li")(27, "strong");
    \u0275\u0275text(28, "No imports needed:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " Built into Angular's template syntax");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "h4");
    \u0275\u0275text(31, "Syntax Comparison");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "pre")(33, "code", 8);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 9)(36, "h4");
    \u0275\u0275text(37, "\u{1F4A1} Type Narrowing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p");
    \u0275\u0275text(39, " The control flow block provides automatic type narrowing. If you check for nullability, TypeScript knows the value is defined within the if block. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(34);
    \u0275\u0275textInterpolate(ctx_r0.ifSyntax);
  }
}
function LearnControlFlowComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h3");
    \u0275\u0275text(2, "Looping with @for");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " The ");
    \u0275\u0275elementStart(5, "code");
    \u0275\u0275text(6, "@for");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " block replaces ");
    \u0275\u0275elementStart(8, "code");
    \u0275\u0275text(9, "*ngFor");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " and requires an explicit track expression, making it impossible to accidentally create performance issues. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h4");
    \u0275\u0275text(12, "Required Track Expression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14, " Unlike *ngFor where trackBy was optional, @for ");
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16, "requires");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " a track expression. This forces you to think about item identity and prevents common performance pitfalls. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "h4");
    \u0275\u0275text(19, "Available Context Variables");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ul")(21, "li")(22, "code");
    \u0275\u0275text(23, "$index");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " - Current index (0-based)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "li")(26, "code");
    \u0275\u0275text(27, "$first");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " - Boolean indicating if it's the first item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "li")(30, "code");
    \u0275\u0275text(31, "$last");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " - Boolean indicating if it's the last item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "li")(34, "code");
    \u0275\u0275text(35, "$even");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " - Boolean indicating if index is even");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "li")(38, "code");
    \u0275\u0275text(39, "$odd");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " - Boolean indicating if index is odd");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "li")(42, "code");
    \u0275\u0275text(43, "$count");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " - Total number of items");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "pre")(46, "code", 8);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 10)(49, "h4");
    \u0275\u0275text(50, "\u26A0\uFE0F Track Expression Best Practices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "ul")(52, "li");
    \u0275\u0275text(53, "Use unique identifiers (id, uuid) when available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "li");
    \u0275\u0275text(55, "Avoid using $index for dynamic lists (items can be added/removed)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "li");
    \u0275\u0275text(57, "For primitive arrays, tracking by value is acceptable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "li");
    \u0275\u0275text(59, "Complex objects should track by a unique property");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(47);
    \u0275\u0275textInterpolate(ctx_r0.forSyntax);
  }
}
function LearnControlFlowComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h3");
    \u0275\u0275text(2, "Multi-way Branching with @switch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " The ");
    \u0275\u0275elementStart(5, "code");
    \u0275\u0275text(6, "@switch");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " block provides a cleaner alternative to ");
    \u0275\u0275elementStart(8, "code");
    \u0275\u0275text(9, "ngSwitch");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, ", with better type checking and more intuitive syntax. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h4");
    \u0275\u0275text(12, "When to Use @switch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ul")(14, "li");
    \u0275\u0275text(15, "When you have more than 2-3 conditions based on the same value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li");
    \u0275\u0275text(17, "When working with enums or union types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "li");
    \u0275\u0275text(19, "When you need a default fallback case");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li");
    \u0275\u0275text(21, "For rendering different components based on a state");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "h4");
    \u0275\u0275text(23, "Advantages Over @if Chains");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ul")(25, "li");
    \u0275\u0275text(26, "More readable for multiple conditions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "li");
    \u0275\u0275text(28, "Better performance (single expression evaluation)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "li");
    \u0275\u0275text(30, "Exhaustiveness checking with TypeScript");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "li");
    \u0275\u0275text(32, "Clearer intent in the code");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "pre")(34, "code", 8);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(35);
    \u0275\u0275textInterpolate(ctx_r0.switchSyntax);
  }
}
function LearnControlFlowComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h3");
    \u0275\u0275text(2, "Understanding Track Expressions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " The track expression tells Angular how to identify items in a list. This is crucial for performance because it allows Angular to reuse DOM elements instead of destroying and recreating them. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Why Tracking Matters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "DOM reuse:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Angular reuses elements for unchanged items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "State preservation:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Component state is maintained across updates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "Better performance:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Fewer DOM operations mean faster updates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "strong");
    \u0275\u0275text(22, "Animation continuity:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Animations aren't interrupted unnecessarily");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "h4");
    \u0275\u0275text(25, "Tracking Strategies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "pre")(27, "code", 8);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 11)(30, "h4");
    \u0275\u0275text(31, "\u{1F680} Performance Tips");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "ul")(33, "li");
    \u0275\u0275text(34, "Always use object IDs when available (track item.id)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "li");
    \u0275\u0275text(36, "Avoid tracking by $index unless the list is truly static");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "li");
    \u0275\u0275text(38, "For lists that reorder, never use $index");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "li");
    \u0275\u0275text(40, "Consider composite keys for nested data structures");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "li");
    \u0275\u0275text(42, "Profile with Chrome DevTools to identify performance issues");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(28);
    \u0275\u0275textInterpolate(ctx_r0.trackingFunction);
  }
}
function LearnControlFlowComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h3");
    \u0275\u0275text(2, "Real-World Complex Example");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " This example demonstrates how to combine multiple control flow blocks to create sophisticated UI logic with excellent performance and type safety. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "pre")(6, "code", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "h3");
    \u0275\u0275text(9, "Performance Comparison");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "pre")(11, "code", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 12)(14, "h4");
    \u0275\u0275text(15, "\u{1F4E6} Migration Guide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17, "Angular provides an automated migration schematic:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "pre")(19, "code");
    \u0275\u0275text(20, "ng generate @angular/core:control-flow");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "p");
    \u0275\u0275text(22, "This will automatically convert your templates to use the new control flow syntax.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h4");
    \u0275\u0275text(24, "What Gets Migrated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "ul")(26, "li");
    \u0275\u0275text(27, "*ngIf \u2192 @if");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "li");
    \u0275\u0275text(29, "*ngFor \u2192 @for (with automatic trackBy conversion)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "li");
    \u0275\u0275text(31, "ngSwitch \u2192 @switch");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.complexExample);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.performanceComparison);
  }
}
var LearnControlFlowComponent = class _LearnControlFlowComponent {
  constructor() {
    this.ifSyntax = `// Old structural directive syntax
<div *ngIf="condition">Content</div>
<div *ngIf="condition; else elseBlock">Content</div>
<ng-template #elseBlock>Else content</ng-template>

// New @if syntax
@if (condition) {
  <div>Content</div>
}

@if (condition) {
  <div>Content</div>
} @else {
  <div>Else content</div>
}

// With else if
@if (score >= 90) {
  <div>Excellent!</div>
} @else if (score >= 70) {
  <div>Good job!</div>
} @else if (score >= 50) {
  <div>You passed!</div>
} @else {
  <div>Need improvement</div>
}`;
    this.forSyntax = `// Old *ngFor syntax
<div *ngFor="let item of items; index as i; trackBy: trackByFn">
  {{ i }}: {{ item.name }}
</div>

// New @for syntax
@for (item of items; track item.id) {
  <div>{{ item.name }}</div>
}

// With index and other variables
@for (item of items; track item.id; let i = $index) {
  <div>{{ i }}: {{ item.name }}</div>
}

// All available variables
@for (item of items; track item.id; 
     let i = $index;
     let first = $first;
     let last = $last;
     let even = $even;
     let odd = $odd;
     let count = $count) {
  <div [class.first]="first" [class.last]="last">
    Item {{ i + 1 }} of {{ count }}: {{ item.name }}
  </div>
}

// With empty block
@for (item of items; track item.id) {
  <div>{{ item.name }}</div>
} @empty {
  <div>No items found</div>
}`;
    this.switchSyntax = `// Old ngSwitch syntax
<div [ngSwitch]="value">
  <div *ngSwitchCase="'A'">Case A</div>
  <div *ngSwitchCase="'B'">Case B</div>
  <div *ngSwitchDefault>Default</div>
</div>

// New @switch syntax
@switch (value) {
  @case ('A') {
    <div>Case A</div>
  }
  @case ('B') {
    <div>Case B</div>
  }
  @default {
    <div>Default case</div>
  }
}

// Real-world example with enums
enum UserRole {
  Admin = 'ADMIN',
  User = 'USER',
  Guest = 'GUEST'
}

@switch (user.role) {
  @case (UserRole.Admin) {
    <admin-dashboard />
  }
  @case (UserRole.User) {
    <user-dashboard />
  }
  @case (UserRole.Guest) {
    <guest-view />
  }
  @default {
    <unauthorized-message />
  }
}`;
    this.trackingFunction = `// Component
@Component({
  template: \`
    @for (user of users; track user.id) {
      <user-card [user]="user" />
    }
  \`
})
export class UsersComponent {
  users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' }
  ];
}

// Tracking by index (not recommended for dynamic lists)
@for (item of items; track $index) {
  <div>{{ item }}</div>
}

// Tracking by identity (for primitives)
@for (name of names; track name) {
  <div>{{ name }}</div>
}

// Tracking with custom expression
@for (item of items; track item.categoryId + '-' + item.id) {
  <div>{{ item.name }}</div>
}`;
    this.complexExample = `// Nested control flow with real-world scenario
@Component({
  template: \`
    <div class="user-list">
      @if (loading) {
        <spinner-component />
      } @else {
        @if (users.length > 0) {
          <div class="filters">
            @switch (selectedFilter) {
              @case ('active') {
                <span>Showing active users</span>
              }
              @case ('inactive') {
                <span>Showing inactive users</span>
              }
              @default {
                <span>Showing all users</span>
              }
            }
          </div>

          @for (user of filteredUsers(); track user.id; let i = $index) {
            <div class="user-card" [class.even]="i % 2 === 0">
              <h3>{{ user.name }}</h3>
              
              @if (user.isActive) {
                <badge>Active</badge>
              } @else {
                <badge color="gray">Inactive</badge>
              }

              @if (user.roles && user.roles.length > 0) {
                <div class="roles">
                  @for (role of user.roles; track role) {
                    <chip>{{ role }}</chip>
                  }
                </div>
              }

              @switch (user.subscriptionTier) {
                @case ('premium') {
                  <premium-features [user]="user" />
                }
                @case ('pro') {
                  <pro-features [user]="user" />
                }
                @default {
                  <basic-features [user]="user" />
                }
              }
            </div>
          } @empty {
            <div class="empty-state">
              No users match the current filter
            </div>
          }
        } @else {
          <div class="empty-state">
            <h3>No users found</h3>
            <button (click)="inviteUsers()">Invite Users</button>
          </div>
        }
      }
    </div>
  \`
})
export class UserListComponent {
  loading = signal(false);
  users = signal<User[]>([]);
  selectedFilter = signal<'all' | 'active' | 'inactive'>('all');

  filteredUsers = computed(() => {
    const filter = this.selectedFilter();
    const userList = this.users();
    
    if (filter === 'all') return userList;
    return userList.filter(u => 
      filter === 'active' ? u.isActive : !u.isActive
    );
  });
}`;
    this.performanceComparison = `// Benefits of new control flow:

1. BETTER PERFORMANCE
   - More optimized compiled code
   - Smaller bundle sizes
   - Faster change detection

2. BETTER TYPE CHECKING
   - Full TypeScript type inference
   - Compile-time error detection
   - Better IDE support

3. EASIER TO READ
   - More familiar syntax for developers
   - Less template syntax to learn
   - Better nesting visibility

4. REQUIRED TRACKING
   - @for requires explicit track expression
   - Prevents accidental performance issues
   - Forces developers to think about identity

// Performance example:
// Old: Angular needs to parse directives, manage structural contexts
<div *ngFor="let item of items; trackBy: trackById">
  {{ item.name }}
</div>

// New: Compiled to optimized update instructions
@for (item of items; track item.id) {
  <div>{{ item.name }}</div>
}`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function LearnControlFlowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LearnControlFlowComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LearnControlFlowComponent, selectors: [["app-learn-control-flow"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 0, consts: [[1, "header"], ["label", "@if"], ["matTabContent", ""], ["label", "@for"], ["label", "@switch"], ["label", "Tracking & Performance"], ["label", "Complex Example"], [1, "tab-content"], [1, "language-typescript"], [1, "info-box"], [1, "warning-box"], [1, "performance-tips"], [1, "migration-tip"]], template: function LearnControlFlowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1, "Built-in Control Flow");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "label");
        \u0275\u0275text(3, "Angular's new built-in control flow syntax provides a more intuitive and performant way to handle conditional rendering and loops in templates.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "mat-tab-group")(5, "mat-tab", 1);
        \u0275\u0275template(6, LearnControlFlowComponent_ng_template_6_Template, 40, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-tab", 3);
        \u0275\u0275template(8, LearnControlFlowComponent_ng_template_8_Template, 60, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "mat-tab", 4);
        \u0275\u0275template(10, LearnControlFlowComponent_ng_template_10_Template, 36, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-tab", 5);
        \u0275\u0275template(12, LearnControlFlowComponent_ng_template_12_Template, 43, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-tab", 6);
        \u0275\u0275template(14, LearnControlFlowComponent_ng_template_14_Template, 32, 2, "ng-template", 2);
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [MatTabsModule, MatTabContent, MatTab, MatTabGroup], styles: ['\n\n.header[_ngcontent-%COMP%] {\n  color: #dd0031;\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.tab-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #dd0031;\n  margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n.tab-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #444;\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n}\n.tab-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  line-height: 1.8;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\n.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 15px;\n  border-radius: 5px;\n  overflow-x: auto;\n  margin: 1rem 0;\n}\n.info-box[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.info-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1976d2;\n}\n.info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.info-box[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.warning-box[_ngcontent-%COMP%] {\n  background-color: #fff3e0;\n  border-left: 4px solid #ff9800;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.warning-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #f57c00;\n}\n.warning-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.performance-tips[_ngcontent-%COMP%] {\n  background-color: #f3e5f5;\n  border-left: 4px solid #9c27b0;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.performance-tips[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #7b1fa2;\n}\n.performance-tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.migration-tip[_ngcontent-%COMP%] {\n  background-color: #e0f2f1;\n  border-left: 4px solid #009688;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.migration-tip[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  color: #00796b;\n}\n.migration-tip[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background-color: #b2dfdb;\n}\n/*# sourceMappingURL=learn-control-flow.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LearnControlFlowComponent, { className: "LearnControlFlowComponent", filePath: "src\\app\\components\\angular\\learn-control-flow\\learn-control-flow.component.ts", lineNumber: 13 });
})();
export {
  LearnControlFlowComponent
};
//# sourceMappingURL=chunk-6KSSK7NR.js.map
