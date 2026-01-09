import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-3BBRWWQW.js";
import "./chunk-PEESLLPT.js";
import "./chunk-AEAJYSPS.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-N7AAI6XN.js";

// src/app/components/react/react-conditional/react-conditional.component.ts
var ReactConditionalComponent = class _ReactConditionalComponent {
  constructor() {
    this.ternaryOperator = `// Ternary Operator
function LoginButton({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <LogoutButton /> : <LoginButton />}
    </div>
  );
}

// Inline with text
function UserGreeting({ user }) {
  return (
    <h1>
      {user ? \`Welcome back, \${user.name}!\` : 'Please sign in'}
    </h1>
  );
}

// Complex ternary
function Status({ status }) {
  return (
    <div className={status === 'active' ? 'status-active' : 'status-inactive'}>
      {status === 'active' ? '\u2713 Active' : '\u2717 Inactive'}
    </div>
  );
}`;
    this.logicalAnd = `// Logical && Operator
function Notification({ hasNotifications, count }) {
  return (
    <div>
      {hasNotifications && <span className="badge">{count}</span>}
    </div>
  );
}

// Multiple conditions
function UserProfile({ user, isLoading }) {
  return (
    <div>
      {isLoading && <Spinner />}
      {!isLoading && user && <ProfileCard user={user} />}
      {!isLoading && !user && <EmptyState />}
    </div>
  );
}

// With functions
function ShoppingCart({ items }) {
  return (
    <div>
      <h2>Cart</h2>
      {items.length > 0 && (
        <ul>
          {items.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
      )}
      {items.length === 0 && <p>Your cart is empty</p>}
    </div>
  );
}`;
    this.ifElseStatements = `// If-Else with Return
function Greeting({ time }) {
  if (time < 12) {
    return <h1>Good Morning!</h1>;
  } else if (time < 18) {
    return <h1>Good Afternoon!</h1>;
  } else {
    return <h1>Good Evening!</h1>;
  }
}

// Multiple returns
function UserStatus({ isLoading, error, user }) {
  if (isLoading) {
    return <LoadingSpinner />;
  }
  
  if (error) {
    return <ErrorMessage error={error} />;
  }
  
  if (!user) {
    return <EmptyState message="No user found" />;
  }
  
  return <UserProfile user={user} />;
}

// Guard clauses
function Dashboard({ user }) {
  if (!user) return <LoginPrompt />;
  if (!user.isVerified) return <VerificationRequired />;
  if (user.isBanned) return <BannedMessage />;
  
  return <DashboardContent user={user} />;
}`;
    this.switchCase = `// Switch Statement
function StatusBadge({ status }) {
  let badge;
  
  switch (status) {
    case 'pending':
      badge = <span className="badge-yellow">Pending</span>;
      break;
    case 'approved':
      badge = <span className="badge-green">Approved</span>;
      break;
    case 'rejected':
      badge = <span className="badge-red">Rejected</span>;
      break;
    default:
      badge = <span className="badge-gray">Unknown</span>;
  }
  
  return <div>{badge}</div>;
}

// Object mapping (better than switch)
function StatusBadgeImproved({ status }) {
  const badges = {
    pending: <span className="badge-yellow">Pending</span>,
    approved: <span className="badge-green">Approved</span>,
    rejected: <span className="badge-red">Rejected</span>,
    default: <span className="badge-gray">Unknown</span>
  };
  
  return <div>{badges[status] || badges.default}</div>;
}`;
    this.nullishCoalescing = `// Nullish Coalescing and Optional Chaining
function UserInfo({ user }) {
  return (
    <div>
      <h2>{user?.name ?? 'Anonymous'}</h2>
      <p>Email: {user?.email ?? 'Not provided'}</p>
      <p>Age: {user?.age ?? 'N/A'}</p>
      <p>City: {user?.address?.city ?? 'Unknown'}</p>
    </div>
  );
}

// With arrays
function RecentPosts({ posts }) {
  const recentPosts = posts ?? [];
  
  return (
    <div>
      <h3>Recent Posts ({recentPosts.length})</h3>
      {recentPosts.length > 0 ? (
        <ul>
          {recentPosts.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}`;
    this.conditionalClasses = `// Conditional Classes
function Button({ isPrimary, isDisabled, isLarge }) {
  // Using template literals
  const className = \`btn \${isPrimary ? 'btn-primary' : 'btn-secondary'} \${isLarge ? 'btn-large' : ''}\`;
  
  return (
    <button className={className} disabled={isDisabled}>
      Click Me
    </button>
  );
}

// Using classnames library
import classNames from 'classnames';

function Card({ isActive, isHighlighted, hasError }) {
  const classes = classNames('card', {
    'card-active': isActive,
    'card-highlighted': isHighlighted,
    'card-error': hasError
  });
  
  return <div className={classes}>Card Content</div>;
}

// Inline conditional styles
function AlertBox({ type }) {
  return (
    <div
      style={{
        backgroundColor: type === 'error' ? '#f44336' : type === 'warning' ? '#ff9800' : '#4caf50',
        color: 'white',
        padding: '10px'
      }}
    >
      Alert Message
    </div>
  );
}`;
    this.renderProps = `// Render Props Pattern
function DataFetcher({ url, render }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);
  
  return render({ data, loading, error });
}

// Usage
function App() {
  return (
    <DataFetcher
      url="/api/users"
      render={({ data, loading, error }) => {
        if (loading) return <Spinner />;
        if (error) return <Error error={error} />;
        return <UserList users={data} />;
      }}
    />
  );
}`;
    this.bestPractices = `// Conditional Rendering Best Practices

// 1. Keep conditions simple
// Good
function UserCard({ user }) {
  if (!user) return null;
  return <div>{user.name}</div>;
}

// 2. Extract complex conditions
function Dashboard({ user }) {
  const canAccessDashboard = user && user.isVerified && !user.isBanned;
  
  if (!canAccessDashboard) return <AccessDenied />;
  return <DashboardContent />;
}

// 3. Use early returns
function Form({ isSubmitting, hasErrors }) {
  if (isSubmitting) return <Spinner />;
  if (hasErrors) return <ErrorSummary />;
  return <FormFields />;
}

// 4. Avoid nested ternaries
// Bad
{condition1 ? (condition2 ? <A /> : <B />) : (condition3 ? <C /> : <D />)}

// Good
function Component({ condition1, condition2, condition3 }) {
  if (condition1 && condition2) return <A />;
  if (condition1) return <B />;
  if (condition3) return <C />;
  return <D />;
}`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function ReactConditionalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReactConditionalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReactConditionalComponent, selectors: [["app-react-conditional"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 181, vars: 8, consts: [[1, "container"], ["label", "Ternary Operator"], [1, "tab-content"], [1, "info-box"], [1, "language-jsx"], ["label", "Logical &&"], ["label", "If-Else"], ["label", "Switch Case"], ["label", "Nullish Coalescing"], ["label", "Conditional Classes"], ["label", "Render Props"], ["label", "Best Practices"], [1, "info-box", "success"]], template: function ReactConditionalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "React Conditional Rendering");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Conditional rendering in React allows you to render different components or elements based on certain conditions, similar to how conditions work in JavaScript.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "Ternary Operator (? :)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p");
        \u0275\u0275text(12, "The ");
        \u0275\u0275elementStart(13, "strong");
        \u0275\u0275text(14, "ternary operator");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " is the most common way to conditionally render elements inline.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "ul")(17, "li");
        \u0275\u0275text(18, "Syntax: condition ? trueValue : falseValue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "li");
        \u0275\u0275text(20, "Inline conditional rendering");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "li");
        \u0275\u0275text(22, "Can render components or values");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "li");
        \u0275\u0275text(24, "Keep it simple for readability");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "pre")(26, "code", 4);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(28, "mat-tab", 5)(29, "div", 2)(30, "h2");
        \u0275\u0275text(31, "Logical AND (&&) Operator");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 3)(33, "p");
        \u0275\u0275text(34, "Use ");
        \u0275\u0275elementStart(35, "strong");
        \u0275\u0275text(36, "&&");
        \u0275\u0275elementEnd();
        \u0275\u0275text(37, " operator when you want to render something only if a condition is true.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "ul")(39, "li");
        \u0275\u0275text(40, "Renders right side if left side is truthy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "li");
        \u0275\u0275text(42, "Returns nothing if condition is false");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li");
        \u0275\u0275text(44, "Simpler than ternary for one-sided conditions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "li");
        \u0275\u0275text(46, "Beware of falsy values like 0");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "pre")(48, "code", 4);
        \u0275\u0275text(49);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(50, "mat-tab", 6)(51, "div", 2)(52, "h2");
        \u0275\u0275text(53, "If-Else Statements");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "div", 3)(55, "p");
        \u0275\u0275text(56, "Use ");
        \u0275\u0275elementStart(57, "strong");
        \u0275\u0275text(58, "if-else");
        \u0275\u0275elementEnd();
        \u0275\u0275text(59, " statements outside JSX for complex conditions.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "ul")(61, "li");
        \u0275\u0275text(62, "Multiple return statements");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "li");
        \u0275\u0275text(64, "Guard clauses for early returns");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "li");
        \u0275\u0275text(66, "Better for complex logic");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "li");
        \u0275\u0275text(68, "More readable than nested ternaries");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(69, "pre")(70, "code", 4);
        \u0275\u0275text(71);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(72, "mat-tab", 7)(73, "div", 2)(74, "h2");
        \u0275\u0275text(75, "Switch Statement");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "div", 3)(77, "p")(78, "strong");
        \u0275\u0275text(79, "Switch statements");
        \u0275\u0275elementEnd();
        \u0275\u0275text(80, " handle multiple conditions, but object mapping is often better.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "ul")(82, "li");
        \u0275\u0275text(83, "Handle multiple distinct values");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "li");
        \u0275\u0275text(85, "Use object mapping for cleaner code");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "li");
        \u0275\u0275text(87, "Requires break statements");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "li");
        \u0275\u0275text(89, "Consider lookup objects instead");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(90, "pre")(91, "code", 4);
        \u0275\u0275text(92);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(93, "mat-tab", 8)(94, "div", 2)(95, "h2");
        \u0275\u0275text(96, "Nullish Coalescing (??)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "div", 3)(98, "p")(99, "strong");
        \u0275\u0275text(100, "Nullish coalescing");
        \u0275\u0275elementEnd();
        \u0275\u0275text(101, " (??) provides default values for null/undefined, and optional chaining (?.) safely accesses nested properties.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "ul")(103, "li");
        \u0275\u0275text(104, "?? returns right side if left is null/undefined");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "li");
        \u0275\u0275text(106, "Different from || which checks truthiness");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "li");
        \u0275\u0275text(108, "?. optional chaining for safe property access");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "li");
        \u0275\u0275text(110, 'Prevents "cannot read property" errors');
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(111, "pre")(112, "code", 4);
        \u0275\u0275text(113);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(114, "mat-tab", 9)(115, "div", 2)(116, "h2");
        \u0275\u0275text(117, "Conditional Classes & Styles");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "div", 3)(119, "p");
        \u0275\u0275text(120, "Apply CSS classes and styles conditionally based on component state or props.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "ul")(122, "li");
        \u0275\u0275text(123, "Template literals for dynamic classes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "li");
        \u0275\u0275text(125, "classnames library for complex conditions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "li");
        \u0275\u0275text(127, "Inline style objects with conditions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "li");
        \u0275\u0275text(129, "Keep styling logic separate when complex");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(130, "pre")(131, "code", 4);
        \u0275\u0275text(132);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(133, "mat-tab", 10)(134, "div", 2)(135, "h2");
        \u0275\u0275text(136, "Render Props Pattern");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "div", 3)(138, "p")(139, "strong");
        \u0275\u0275text(140, "Render props");
        \u0275\u0275elementEnd();
        \u0275\u0275text(141, " allow passing rendering logic as a function prop.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "ul")(143, "li");
        \u0275\u0275text(144, "Share logic between components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "li");
        \u0275\u0275text(146, "Function receives data, returns JSX");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "li");
        \u0275\u0275text(148, "More flexible than HOCs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(149, "li");
        \u0275\u0275text(150, "Hooks are often better alternative");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(151, "pre")(152, "code", 4);
        \u0275\u0275text(153);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(154, "mat-tab", 11)(155, "div", 2)(156, "h2");
        \u0275\u0275text(157, "Best Practices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "div", 12)(159, "h3");
        \u0275\u0275text(160, "\u2713 Best Practices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(161, "ul")(162, "li");
        \u0275\u0275text(163, "Use ternary for simple inline conditions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "li");
        \u0275\u0275text(165, "Use && for one-sided conditions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(166, "li");
        \u0275\u0275text(167, "Use if-else for complex logic");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(168, "li");
        \u0275\u0275text(169, "Avoid nested ternaries");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(170, "li");
        \u0275\u0275text(171, "Extract complex conditions to variables");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(172, "li");
        \u0275\u0275text(173, "Use early returns for guard clauses");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(174, "li");
        \u0275\u0275text(175, "Return null to render nothing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "li");
        \u0275\u0275text(177, "Keep conditions readable");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(178, "pre")(179, "code", 4);
        \u0275\u0275text(180);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(27);
        \u0275\u0275textInterpolate(ctx.ternaryOperator);
        \u0275\u0275advance(22);
        \u0275\u0275textInterpolate(ctx.logicalAnd);
        \u0275\u0275advance(22);
        \u0275\u0275textInterpolate(ctx.ifElseStatements);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.switchCase);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.nullishCoalescing);
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(ctx.conditionalClasses);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.renderProps);
        \u0275\u0275advance(27);
        \u0275\u0275textInterpolate(ctx.bestPractices);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #61dafb;\n  margin-bottom: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #282c34;\n  margin-top: 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  padding: 15px;\n  margin: 15px 0;\n  border-radius: 4px;\n}\n.info-box.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-left-color: #4caf50;\n}\n.info-box.warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #ff9800;\n}\n.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1976d2;\n}\n.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding-left: 20px;\n}\n.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05);\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\npre[_ngcontent-%COMP%] {\n  background: #282c34;\n  border-radius: 4px;\n  overflow-x: auto;\n  margin: 15px 0;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #abb2bf;\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n  font-size: 14px;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=react-conditional.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReactConditionalComponent, { className: "ReactConditionalComponent", filePath: "src\\app\\components\\react\\react-conditional\\react-conditional.component.ts", lineNumber: 13 });
})();
export {
  ReactConditionalComponent
};
//# sourceMappingURL=chunk-2ROCB774.js.map
