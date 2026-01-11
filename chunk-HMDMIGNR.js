import{a as S}from"./chunk-VDRUEQXK.js";import{a as u,b as g,c as f,d as x}from"./chunk-GNZ74KMC.js";import"./chunk-XAZLOLJU.js";import"./chunk-SZTU5CXE.js";import{Ia as r,Ya as o,da as m,e as b,hb as t,ib as e,mb as l,ub as n,vb as s,zb as p}from"./chunk-KMNIY7WT.js";var h=b(S());function E(i,d){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Ternary Operator (? :)"),e(),t(3,"div",11)(4,"p"),n(5,"The "),t(6,"strong"),n(7,"ternary operator"),e(),n(8," is the most common way to conditionally render elements inline."),e(),t(9,"ul")(10,"li"),n(11,"Syntax: condition ? trueValue : falseValue"),e(),t(12,"li"),n(13,"Inline conditional rendering"),e(),t(14,"li"),n(15,"Can render components or values"),e(),t(16,"li"),n(17,"Keep it simple for readability"),e()()(),t(18,"pre")(19,"code",12),n(20),e()()()),i&2){let a=l();r(20),s(a.ternaryOperator)}}function C(i,d){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Logical AND (&&) Operator"),e(),t(3,"div",11)(4,"p"),n(5,"Use "),t(6,"strong"),n(7,"&&"),e(),n(8," operator when you want to render something only if a condition is true."),e(),t(9,"ul")(10,"li"),n(11,"Renders right side if left side is truthy"),e(),t(12,"li"),n(13,"Returns nothing if condition is false"),e(),t(14,"li"),n(15,"Simpler than ternary for one-sided conditions"),e(),t(16,"li"),n(17,"Beware of falsy values like 0"),e()()(),t(18,"pre")(19,"code",12),n(20),e()()()),i&2){let a=l();r(20),s(a.logicalAnd)}}function v(i,d){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"If-Else Statements"),e(),t(3,"div",11)(4,"p"),n(5,"Use "),t(6,"strong"),n(7,"if-else"),e(),n(8," statements outside JSX for complex conditions."),e(),t(9,"ul")(10,"li"),n(11,"Multiple return statements"),e(),t(12,"li"),n(13,"Guard clauses for early returns"),e(),t(14,"li"),n(15,"Better for complex logic"),e(),t(16,"li"),n(17,"More readable than nested ternaries"),e()()(),t(18,"pre")(19,"code",12),n(20),e()()()),i&2){let a=l();r(20),s(a.ifElseStatements)}}function y(i,d){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Switch Statement"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Switch statements"),e(),n(7," handle multiple conditions, but object mapping is often better."),e(),t(8,"ul")(9,"li"),n(10,"Handle multiple distinct values"),e(),t(11,"li"),n(12,"Use object mapping for cleaner code"),e(),t(13,"li"),n(14,"Requires break statements"),e(),t(15,"li"),n(16,"Consider lookup objects instead"),e()()(),t(17,"pre")(18,"code",12),n(19),e()()()),i&2){let a=l();r(19),s(a.switchCase)}}function _(i,d){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Nullish Coalescing (??)"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Nullish coalescing"),e(),n(7," (??) provides default values for null/undefined, and optional chaining (?.) safely accesses nested properties."),e(),t(8,"ul")(9,"li"),n(10,"?? returns right side if left is null/undefined"),e(),t(11,"li"),n(12,"Different from || which checks truthiness"),e(),t(13,"li"),n(14,"?. optional chaining for safe property access"),e(),t(15,"li"),n(16,'Prevents "cannot read property" errors'),e()()(),t(17,"pre")(18,"code",12),n(19),e()()()),i&2){let a=l();r(19),s(a.nullishCoalescing)}}function P(i,d){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Conditional Classes & Styles"),e(),t(3,"div",11)(4,"p"),n(5,"Apply CSS classes and styles conditionally based on component state or props."),e(),t(6,"ul")(7,"li"),n(8,"Template literals for dynamic classes"),e(),t(9,"li"),n(10,"classnames library for complex conditions"),e(),t(11,"li"),n(12,"Inline style objects with conditions"),e(),t(13,"li"),n(14,"Keep styling logic separate when complex"),e()()(),t(15,"pre")(16,"code",12),n(17),e()()()),i&2){let a=l();r(17),s(a.conditionalClasses)}}function w(i,d){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Render Props Pattern"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Render props"),e(),n(7," allow passing rendering logic as a function prop."),e(),t(8,"ul")(9,"li"),n(10,"Share logic between components"),e(),t(11,"li"),n(12,"Function receives data, returns JSX"),e(),t(13,"li"),n(14,"More flexible than HOCs"),e(),t(15,"li"),n(16,"Hooks are often better alternative"),e()()(),t(17,"pre")(18,"code",12),n(19),e()()()),i&2){let a=l();r(19),s(a.renderProps)}}function M(i,d){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Best Practices"),e(),t(3,"div",13)(4,"h3"),n(5,"\u2713 Best Practices"),e(),t(6,"ul")(7,"li"),n(8,"Use ternary for simple inline conditions"),e(),t(9,"li"),n(10,"Use && for one-sided conditions"),e(),t(11,"li"),n(12,"Use if-else for complex logic"),e(),t(13,"li"),n(14,"Avoid nested ternaries"),e(),t(15,"li"),n(16,"Extract complex conditions to variables"),e(),t(17,"li"),n(18,"Use early returns for guard clauses"),e(),t(19,"li"),n(20,"Return null to render nothing"),e(),t(21,"li"),n(22,"Keep conditions readable"),e()()(),t(23,"pre")(24,"code",12),n(25),e()()()),i&2){let a=l();r(25),s(a.bestPractices)}}var k=(()=>{class i{constructor(){this.ternaryOperator=`// Ternary Operator
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
}`,this.logicalAnd=`// Logical && Operator
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
}`,this.ifElseStatements=`// If-Else with Return
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
}`,this.switchCase=`// Switch Statement
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
}`,this.nullishCoalescing=`// Nullish Coalescing and Optional Chaining
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
}`,this.conditionalClasses=`// Conditional Classes
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
}`,this.renderProps=`// Render Props Pattern
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
}`,this.bestPractices=`// Conditional Rendering Best Practices

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
}`}ngAfterViewChecked(){h.highlightAll()}static{this.\u0275fac=function(c){return new(c||i)}}static{this.\u0275cmp=m({type:i,selectors:[["app-react-conditional"]],standalone:!0,features:[p],decls:22,vars:0,consts:[[1,"container"],["label","Ternary Operator"],["matTabContent",""],["label","Logical &&"],["label","If-Else"],["label","Switch Case"],["label","Nullish Coalescing"],["label","Conditional Classes"],["label","Render Props"],["label","Best Practices"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],[1,"info-box","success"]],template:function(c,N){c&1&&(t(0,"div",0)(1,"h1"),n(2,"React Conditional Rendering"),e(),t(3,"p"),n(4,"Conditional rendering in React allows you to render different components or elements based on certain conditions, similar to how conditions work in JavaScript."),e(),t(5,"mat-tab-group")(6,"mat-tab",1),o(7,E,21,1,"ng-template",2),e(),t(8,"mat-tab",3),o(9,C,21,1,"ng-template",2),e(),t(10,"mat-tab",4),o(11,v,21,1,"ng-template",2),e(),t(12,"mat-tab",5),o(13,y,20,1,"ng-template",2),e(),t(14,"mat-tab",6),o(15,_,20,1,"ng-template",2),e(),t(16,"mat-tab",7),o(17,P,18,1,"ng-template",2),e(),t(18,"mat-tab",8),o(19,w,20,1,"ng-template",2),e(),t(20,"mat-tab",9),o(21,M,26,1,"ng-template",2),e()()())},dependencies:[x,u,g,f],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return i})();export{k as ReactConditionalComponent};
