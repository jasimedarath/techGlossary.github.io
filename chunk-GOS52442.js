import{b as c,c as m,d as u}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as i,da as l,gb as n,hb as t,tb as e,ub as r,yb as d}from"./chunk-WGQ2ELTG.js";var h=(()=>{class o{constructor(){this.ternaryOperator=`// Ternary Operator
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
}`}ngAfterViewChecked(){Prism.highlightAll()}static{this.\u0275fac=function(s){return new(s||o)}}static{this.\u0275cmp=l({type:o,selectors:[["app-react-conditional"]],standalone:!0,features:[d],decls:181,vars:8,consts:[[1,"container"],["label","Ternary Operator"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],["label","Logical &&"],["label","If-Else"],["label","Switch Case"],["label","Nullish Coalescing"],["label","Conditional Classes"],["label","Render Props"],["label","Best Practices"],[1,"info-box","success"]],template:function(s,a){s&1&&(n(0,"div",0)(1,"h1"),e(2,"React Conditional Rendering"),t(),n(3,"p"),e(4,"Conditional rendering in React allows you to render different components or elements based on certain conditions, similar to how conditions work in JavaScript."),t(),n(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),e(9,"Ternary Operator (? :)"),t(),n(10,"div",3)(11,"p"),e(12,"The "),n(13,"strong"),e(14,"ternary operator"),t(),e(15," is the most common way to conditionally render elements inline."),t(),n(16,"ul")(17,"li"),e(18,"Syntax: condition ? trueValue : falseValue"),t(),n(19,"li"),e(20,"Inline conditional rendering"),t(),n(21,"li"),e(22,"Can render components or values"),t(),n(23,"li"),e(24,"Keep it simple for readability"),t()()(),n(25,"pre")(26,"code",4),e(27),t()()()(),n(28,"mat-tab",5)(29,"div",2)(30,"h2"),e(31,"Logical AND (&&) Operator"),t(),n(32,"div",3)(33,"p"),e(34,"Use "),n(35,"strong"),e(36,"&&"),t(),e(37," operator when you want to render something only if a condition is true."),t(),n(38,"ul")(39,"li"),e(40,"Renders right side if left side is truthy"),t(),n(41,"li"),e(42,"Returns nothing if condition is false"),t(),n(43,"li"),e(44,"Simpler than ternary for one-sided conditions"),t(),n(45,"li"),e(46,"Beware of falsy values like 0"),t()()(),n(47,"pre")(48,"code",4),e(49),t()()()(),n(50,"mat-tab",6)(51,"div",2)(52,"h2"),e(53,"If-Else Statements"),t(),n(54,"div",3)(55,"p"),e(56,"Use "),n(57,"strong"),e(58,"if-else"),t(),e(59," statements outside JSX for complex conditions."),t(),n(60,"ul")(61,"li"),e(62,"Multiple return statements"),t(),n(63,"li"),e(64,"Guard clauses for early returns"),t(),n(65,"li"),e(66,"Better for complex logic"),t(),n(67,"li"),e(68,"More readable than nested ternaries"),t()()(),n(69,"pre")(70,"code",4),e(71),t()()()(),n(72,"mat-tab",7)(73,"div",2)(74,"h2"),e(75,"Switch Statement"),t(),n(76,"div",3)(77,"p")(78,"strong"),e(79,"Switch statements"),t(),e(80," handle multiple conditions, but object mapping is often better."),t(),n(81,"ul")(82,"li"),e(83,"Handle multiple distinct values"),t(),n(84,"li"),e(85,"Use object mapping for cleaner code"),t(),n(86,"li"),e(87,"Requires break statements"),t(),n(88,"li"),e(89,"Consider lookup objects instead"),t()()(),n(90,"pre")(91,"code",4),e(92),t()()()(),n(93,"mat-tab",8)(94,"div",2)(95,"h2"),e(96,"Nullish Coalescing (??)"),t(),n(97,"div",3)(98,"p")(99,"strong"),e(100,"Nullish coalescing"),t(),e(101," (??) provides default values for null/undefined, and optional chaining (?.) safely accesses nested properties."),t(),n(102,"ul")(103,"li"),e(104,"?? returns right side if left is null/undefined"),t(),n(105,"li"),e(106,"Different from || which checks truthiness"),t(),n(107,"li"),e(108,"?. optional chaining for safe property access"),t(),n(109,"li"),e(110,'Prevents "cannot read property" errors'),t()()(),n(111,"pre")(112,"code",4),e(113),t()()()(),n(114,"mat-tab",9)(115,"div",2)(116,"h2"),e(117,"Conditional Classes & Styles"),t(),n(118,"div",3)(119,"p"),e(120,"Apply CSS classes and styles conditionally based on component state or props."),t(),n(121,"ul")(122,"li"),e(123,"Template literals for dynamic classes"),t(),n(124,"li"),e(125,"classnames library for complex conditions"),t(),n(126,"li"),e(127,"Inline style objects with conditions"),t(),n(128,"li"),e(129,"Keep styling logic separate when complex"),t()()(),n(130,"pre")(131,"code",4),e(132),t()()()(),n(133,"mat-tab",10)(134,"div",2)(135,"h2"),e(136,"Render Props Pattern"),t(),n(137,"div",3)(138,"p")(139,"strong"),e(140,"Render props"),t(),e(141," allow passing rendering logic as a function prop."),t(),n(142,"ul")(143,"li"),e(144,"Share logic between components"),t(),n(145,"li"),e(146,"Function receives data, returns JSX"),t(),n(147,"li"),e(148,"More flexible than HOCs"),t(),n(149,"li"),e(150,"Hooks are often better alternative"),t()()(),n(151,"pre")(152,"code",4),e(153),t()()()(),n(154,"mat-tab",11)(155,"div",2)(156,"h2"),e(157,"Best Practices"),t(),n(158,"div",12)(159,"h3"),e(160,"\u2713 Best Practices"),t(),n(161,"ul")(162,"li"),e(163,"Use ternary for simple inline conditions"),t(),n(164,"li"),e(165,"Use && for one-sided conditions"),t(),n(166,"li"),e(167,"Use if-else for complex logic"),t(),n(168,"li"),e(169,"Avoid nested ternaries"),t(),n(170,"li"),e(171,"Extract complex conditions to variables"),t(),n(172,"li"),e(173,"Use early returns for guard clauses"),t(),n(174,"li"),e(175,"Return null to render nothing"),t(),n(176,"li"),e(177,"Keep conditions readable"),t()()(),n(178,"pre")(179,"code",4),e(180),t()()()()()()),s&2&&(i(27),r(a.ternaryOperator),i(22),r(a.logicalAnd),i(22),r(a.ifElseStatements),i(21),r(a.switchCase),i(21),r(a.nullishCoalescing),i(19),r(a.conditionalClasses),i(21),r(a.renderProps),i(27),r(a.bestPractices))},dependencies:[u,c,m],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#abb2bf;font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return o})();export{h as ReactConditionalComponent};
