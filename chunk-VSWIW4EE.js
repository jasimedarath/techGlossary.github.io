import"./chunk-WCULWZKC.js";import{a as E}from"./chunk-FSUYFWSG.js";import{a as x,b as u,c as f,d as g}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as a,Xa as l,da as c,e as v,gb as i,hb as t,lb as s,tb as e,ub as o,yb as p}from"./chunk-WGQ2ELTG.js";var h=v(E());function b(n,m){if(n&1&&(i(0,"div",7)(1,"h3"),e(2,"Conditional Rendering with @if"),t(),i(3,"p"),e(4," The new "),i(5,"code"),e(6,"@if"),t(),e(7," syntax replaces "),i(8,"code"),e(9,"*ngIf"),t(),e(10," with a cleaner, more intuitive syntax that's familiar to developers from other frameworks and languages. "),t(),i(11,"h4"),e(12,"Key Advantages"),t(),i(13,"ul")(14,"li")(15,"strong"),e(16,"Better readability:"),t(),e(17," More concise and easier to understand"),t(),i(18,"li")(19,"strong"),e(20,"Type inference:"),t(),e(21," Full TypeScript type narrowing support"),t(),i(22,"li")(23,"strong"),e(24,"Performance:"),t(),e(25," More optimized compiled output"),t(),i(26,"li")(27,"strong"),e(28,"No imports needed:"),t(),e(29," Built into Angular's template syntax"),t()(),i(30,"h4"),e(31,"Syntax Comparison"),t(),i(32,"pre")(33,"code",8),e(34),t()(),i(35,"div",9)(36,"h4"),e(37,"\u{1F4A1} Type Narrowing"),t(),i(38,"p"),e(39," The control flow block provides automatic type narrowing. If you check for nullability, TypeScript knows the value is defined within the if block. "),t()()()),n&2){let r=s();a(34),o(r.ifSyntax)}}function S(n,m){if(n&1&&(i(0,"div",7)(1,"h3"),e(2,"Looping with @for"),t(),i(3,"p"),e(4," The "),i(5,"code"),e(6,"@for"),t(),e(7," block replaces "),i(8,"code"),e(9,"*ngFor"),t(),e(10," and requires an explicit track expression, making it impossible to accidentally create performance issues. "),t(),i(11,"h4"),e(12,"Required Track Expression"),t(),i(13,"p"),e(14," Unlike *ngFor where trackBy was optional, @for "),i(15,"strong"),e(16,"requires"),t(),e(17," a track expression. This forces you to think about item identity and prevents common performance pitfalls. "),t(),i(18,"h4"),e(19,"Available Context Variables"),t(),i(20,"ul")(21,"li")(22,"code"),e(23,"$index"),t(),e(24," - Current index (0-based)"),t(),i(25,"li")(26,"code"),e(27,"$first"),t(),e(28," - Boolean indicating if it's the first item"),t(),i(29,"li")(30,"code"),e(31,"$last"),t(),e(32," - Boolean indicating if it's the last item"),t(),i(33,"li")(34,"code"),e(35,"$even"),t(),e(36," - Boolean indicating if index is even"),t(),i(37,"li")(38,"code"),e(39,"$odd"),t(),e(40," - Boolean indicating if index is odd"),t(),i(41,"li")(42,"code"),e(43,"$count"),t(),e(44," - Total number of items"),t()(),i(45,"pre")(46,"code",8),e(47),t()(),i(48,"div",10)(49,"h4"),e(50,"\u26A0\uFE0F Track Expression Best Practices"),t(),i(51,"ul")(52,"li"),e(53,"Use unique identifiers (id, uuid) when available"),t(),i(54,"li"),e(55,"Avoid using $index for dynamic lists (items can be added/removed)"),t(),i(56,"li"),e(57,"For primitive arrays, tracking by value is acceptable"),t(),i(58,"li"),e(59,"Complex objects should track by a unique property"),t()()()()),n&2){let r=s();a(47),o(r.forSyntax)}}function C(n,m){if(n&1&&(i(0,"div",7)(1,"h3"),e(2,"Multi-way Branching with @switch"),t(),i(3,"p"),e(4," The "),i(5,"code"),e(6,"@switch"),t(),e(7," block provides a cleaner alternative to "),i(8,"code"),e(9,"ngSwitch"),t(),e(10,", with better type checking and more intuitive syntax. "),t(),i(11,"h4"),e(12,"When to Use @switch"),t(),i(13,"ul")(14,"li"),e(15,"When you have more than 2-3 conditions based on the same value"),t(),i(16,"li"),e(17,"When working with enums or union types"),t(),i(18,"li"),e(19,"When you need a default fallback case"),t(),i(20,"li"),e(21,"For rendering different components based on a state"),t()(),i(22,"h4"),e(23,"Advantages Over @if Chains"),t(),i(24,"ul")(25,"li"),e(26,"More readable for multiple conditions"),t(),i(27,"li"),e(28,"Better performance (single expression evaluation)"),t(),i(29,"li"),e(30,"Exhaustiveness checking with TypeScript"),t(),i(31,"li"),e(32,"Clearer intent in the code"),t()(),i(33,"pre")(34,"code",8),e(35),t()()()),n&2){let r=s();a(35),o(r.switchSyntax)}}function w(n,m){if(n&1&&(i(0,"div",7)(1,"h3"),e(2,"Understanding Track Expressions"),t(),i(3,"p"),e(4," The track expression tells Angular how to identify items in a list. This is crucial for performance because it allows Angular to reuse DOM elements instead of destroying and recreating them. "),t(),i(5,"h4"),e(6,"Why Tracking Matters"),t(),i(7,"ul")(8,"li")(9,"strong"),e(10,"DOM reuse:"),t(),e(11," Angular reuses elements for unchanged items"),t(),i(12,"li")(13,"strong"),e(14,"State preservation:"),t(),e(15," Component state is maintained across updates"),t(),i(16,"li")(17,"strong"),e(18,"Better performance:"),t(),e(19," Fewer DOM operations mean faster updates"),t(),i(20,"li")(21,"strong"),e(22,"Animation continuity:"),t(),e(23," Animations aren't interrupted unnecessarily"),t()(),i(24,"h4"),e(25,"Tracking Strategies"),t(),i(26,"pre")(27,"code",8),e(28),t()(),i(29,"div",11)(30,"h4"),e(31,"\u{1F680} Performance Tips"),t(),i(32,"ul")(33,"li"),e(34,"Always use object IDs when available (track item.id)"),t(),i(35,"li"),e(36,"Avoid tracking by $index unless the list is truly static"),t(),i(37,"li"),e(38,"For lists that reorder, never use $index"),t(),i(39,"li"),e(40,"Consider composite keys for nested data structures"),t(),i(41,"li"),e(42,"Profile with Chrome DevTools to identify performance issues"),t()()()()),n&2){let r=s();a(28),o(r.trackingFunction)}}function y(n,m){if(n&1&&(i(0,"div",7)(1,"h3"),e(2,"Real-World Complex Example"),t(),i(3,"p"),e(4," This example demonstrates how to combine multiple control flow blocks to create sophisticated UI logic with excellent performance and type safety. "),t(),i(5,"pre")(6,"code",8),e(7),t()(),i(8,"h3"),e(9,"Performance Comparison"),t(),i(10,"pre")(11,"code",8),e(12),t()(),i(13,"div",12)(14,"h4"),e(15,"\u{1F4E6} Migration Guide"),t(),i(16,"p"),e(17,"Angular provides an automated migration schematic:"),t(),i(18,"pre")(19,"code"),e(20,"ng generate @angular/core:control-flow"),t()(),i(21,"p"),e(22,"This will automatically convert your templates to use the new control flow syntax."),t(),i(23,"h4"),e(24,"What Gets Migrated"),t(),i(25,"ul")(26,"li"),e(27,"*ngIf \u2192 @if"),t(),i(28,"li"),e(29,"*ngFor \u2192 @for (with automatic trackBy conversion)"),t(),i(30,"li"),e(31,"ngSwitch \u2192 @switch"),t()()()()),n&2){let r=s();a(7),o(r.complexExample),a(5),o(r.performanceComparison)}}var O=(()=>{class n{constructor(){this.ifSyntax=`// Old structural directive syntax
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
}`,this.forSyntax=`// Old *ngFor syntax
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
}`,this.switchSyntax=`// Old ngSwitch syntax
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
}`,this.trackingFunction=`// Component
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
}`,this.complexExample=`// Nested control flow with real-world scenario
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
}`,this.performanceComparison=`// Benefits of new control flow:

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
}`}ngAfterViewChecked(){h.highlightAll()}static{this.\u0275fac=function(d){return new(d||n)}}static{this.\u0275cmp=c({type:n,selectors:[["app-learn-control-flow"]],standalone:!0,features:[p],decls:15,vars:0,consts:[[1,"header"],["label","@if"],["matTabContent",""],["label","@for"],["label","@switch"],["label","Tracking & Performance"],["label","Complex Example"],[1,"tab-content"],[1,"language-typescript"],[1,"info-box"],[1,"warning-box"],[1,"performance-tips"],[1,"migration-tip"]],template:function(d,k){d&1&&(i(0,"h2",0),e(1,"Built-in Control Flow"),t(),i(2,"label"),e(3,"Angular's new built-in control flow syntax provides a more intuitive and performant way to handle conditional rendering and loops in templates."),t(),i(4,"mat-tab-group")(5,"mat-tab",1),l(6,b,40,1,"ng-template",2),t(),i(7,"mat-tab",3),l(8,S,60,1,"ng-template",2),t(),i(9,"mat-tab",4),l(10,C,36,1,"ng-template",2),t(),i(11,"mat-tab",5),l(12,w,43,1,"ng-template",2),t(),i(13,"mat-tab",6),l(14,y,32,2,"ng-template",2),t()())},dependencies:[g,x,u,f],styles:[".header[_ngcontent-%COMP%]{color:#dd0031;font-size:2rem;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]{padding:20px}.tab-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#dd0031;margin-top:1.5rem;margin-bottom:.5rem}.tab-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#444;margin-top:1rem;margin-bottom:.5rem}.tab-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.6;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{line-height:1.8;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background-color:#f4f4f4;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background-color:#f5f5f5;padding:15px;border-radius:5px;overflow-x:auto;margin:1rem 0}.info-box[_ngcontent-%COMP%]{background-color:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:20px 0;border-radius:4px}.info-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .info-box[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin-bottom:0}.warning-box[_ngcontent-%COMP%]{background-color:#fff3e0;border-left:4px solid #ff9800;padding:15px;margin:20px 0;border-radius:4px}.warning-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#f57c00}.warning-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-bottom:0}.performance-tips[_ngcontent-%COMP%]{background-color:#f3e5f5;border-left:4px solid #9c27b0;padding:15px;margin:20px 0;border-radius:4px}.performance-tips[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#7b1fa2}.performance-tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-bottom:0}.migration-tip[_ngcontent-%COMP%]{background-color:#e0f2f1;border-left:4px solid #009688;padding:15px;margin:20px 0;border-radius:4px}.migration-tip[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:.5rem;color:#00796b}.migration-tip[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background-color:#b2dfdb}"]})}}return n})();export{O as LearnControlFlowComponent};
