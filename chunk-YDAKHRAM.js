import{b as u,c as d,d as c}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as i,da as s,gb as t,hb as n,tb as e,ub as a,yb as m}from"./chunk-WGQ2ELTG.js";var f=(()=>{class r{constructor(){this.routerSetup=`// Install: npm install react-router-dom
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}`,this.navigation=`// Navigation Methods
import { useNavigate, Link, NavLink } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();
  
  return (
    <div>
      {/* Link component */}
      <Link to="/about">About</Link>
      
      {/* NavLink with active styling */}
      <NavLink 
        to="/products" 
        className={({ isActive }) => isActive ? 'active' : ''}
      >
        Products
      </NavLink>
      
      {/* Programmatic navigation */}
      <button onClick={() => navigate('/login')}>Login</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}`,this.dynamicRoutes=`// Dynamic Routes and Parameters
import { useParams, useSearchParams } from 'react-router-dom';

// Define routes
<Routes>
  <Route path="/users/:userId" element={<UserProfile />} />
  <Route path="/products/:id" element={<ProductDetail />} />
</Routes>

// Access params
function UserProfile() {
  const { userId } = useParams();
  return <div>User ID: {userId}</div>;
}

// Query parameters
function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');
  const page = searchParams.get('page') || 1;
  
  return (
    <div>
      <input 
        value={query} 
        onChange={e => setSearchParams({ q: e.target.value })} 
      />
      <p>Searching for: {query}, Page: {page}</p>
    </div>
  );
}`,this.nestedRoutes=`// Nested Routes
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="stats" element={<Stats />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
}

// Layout with Outlet
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <Header />
      <Outlet /> {/* Nested routes render here */}
      <Footer />
    </div>
  );
}`,this.protectedRoutes=`// Protected Routes
function ProtectedRoute({ children }) {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

// Usage
<Routes>
  <Route path="/login" element={<Login />} />
  <Route 
    path="/dashboard" 
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    } 
  />
</Routes>`,this.lazyLoading=`// Code Splitting with Lazy Loading
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}`,this.hooks=`// Router Hooks
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function MyComponent() {
  // Get current location
  const location = useLocation();
  console.log(location.pathname); // /products/123
  console.log(location.search); // ?sort=price
  console.log(location.state); // Data passed via navigate
  
  // Navigate programmatically
  const navigate = useNavigate();
  navigate('/home');
  navigate('/home', { replace: true });
  navigate('/profile', { state: { from: 'homepage' } });
  
  // Access route parameters
  const { productId } = useParams();
  
  return <div>Product: {productId}</div>;
}`,this.bestPractices=`// Router Best Practices

// 1. Use lazy loading for code splitting
const Dashboard = lazy(() => import('./Dashboard'));

// 2. Create route configuration
const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/users/:id', element: <UserProfile /> }
];

// 3. Protect routes with wrapper components
<Route element={<ProtectedRoute />}>
  <Route path="/dashboard" element={<Dashboard />} />
</Route>

// 4. Use NavLink for active styling
<NavLink to="/home" className={({isActive}) => isActive ? 'active' : ''} />

// 5. Handle 404s
<Route path="*" element={<NotFound />} />

// 6. Use relative paths in nested routes
<Route path="users">
  <Route path=":id" element={<User />} />
</Route>`}ngAfterViewChecked(){Prism.highlightAll()}static{this.\u0275fac=function(l){return new(l||r)}}static{this.\u0275cmp=s({type:r,selectors:[["app-react-router"]],standalone:!0,features:[m],decls:167,vars:8,consts:[[1,"container"],["label","Setup & Basics"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],["label","Navigation"],["label","Dynamic Routes"],["label","Nested Routes"],["label","Protected Routes"],[1,"info-box","warning"],["label","Lazy Loading"],[1,"info-box","success"],["label","Router Hooks"],["label","Best Practices"]],template:function(l,o){l&1&&(t(0,"div",0)(1,"h1"),e(2,"React Router"),n(),t(3,"p"),e(4,"React Router is the standard routing library for React. It enables navigation between views, URL parameters, and helps build single-page applications with multiple views."),n(),t(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),e(9,"Router Setup"),n(),t(10,"div",3)(11,"p"),e(12,"Install and configure "),t(13,"strong"),e(14,"React Router v6"),n(),e(15," for client-side routing."),n(),t(16,"ul")(17,"li"),e(18,"BrowserRouter wraps your app"),n(),t(19,"li"),e(20,"Routes define route configuration"),n(),t(21,"li"),e(22,"Route defines individual routes"),n(),t(23,"li"),e(24,"Link for navigation without page reload"),n()()(),t(25,"pre")(26,"code",4),e(27),n()()()(),t(28,"mat-tab",5)(29,"div",2)(30,"h2"),e(31,"Navigation Methods"),n(),t(32,"div",3)(33,"p"),e(34,"Multiple ways to navigate in React Router."),n(),t(35,"ul")(36,"li"),e(37,"Link component for declarative navigation"),n(),t(38,"li"),e(39,"NavLink for active link styling"),n(),t(40,"li"),e(41,"useNavigate hook for programmatic navigation"),n(),t(42,"li"),e(43,"Navigate component for redirects"),n()()(),t(44,"pre")(45,"code",4),e(46),n()()()(),t(47,"mat-tab",6)(48,"div",2)(49,"h2"),e(50,"Dynamic Routes & Parameters"),n(),t(51,"div",3)(52,"p"),e(53,"Create routes with dynamic segments and query parameters."),n(),t(54,"ul")(55,"li"),e(56,":param syntax for URL parameters"),n(),t(57,"li"),e(58,"useParams hook to access parameters"),n(),t(59,"li"),e(60,"useSearchParams for query strings"),n(),t(61,"li"),e(62,"Dynamic routing for data-driven apps"),n()()(),t(63,"pre")(64,"code",4),e(65),n()()()(),t(66,"mat-tab",7)(67,"div",2)(68,"h2"),e(69,"Nested Routes & Layouts"),n(),t(70,"div",3)(71,"p"),e(72,"Create nested route hierarchies with shared layouts."),n(),t(73,"ul")(74,"li"),e(75,"Outlet component renders nested routes"),n(),t(76,"li"),e(77,"Share layout components across routes"),n(),t(78,"li"),e(79,"Nested route definitions"),n(),t(80,"li"),e(81,"Index routes for default child"),n()()(),t(82,"pre")(83,"code",4),e(84),n()()()(),t(85,"mat-tab",8)(86,"div",2)(87,"h2"),e(88,"Protected Routes"),n(),t(89,"div",9)(90,"p"),e(91,"Implement authentication and authorization for routes."),n(),t(92,"ul")(93,"li"),e(94,"Wrapper components for route protection"),n(),t(95,"li"),e(96,"Redirect unauthorized users"),n(),t(97,"li"),e(98,"Check authentication status"),n(),t(99,"li"),e(100,"Role-based access control"),n()()(),t(101,"pre")(102,"code",4),e(103),n()()()(),t(104,"mat-tab",10)(105,"div",2)(106,"h2"),e(107,"Code Splitting & Lazy Loading"),n(),t(108,"div",11)(109,"p"),e(110,"Improve performance with lazy-loaded route components."),n(),t(111,"ul")(112,"li"),e(113,"React.lazy() for dynamic imports"),n(),t(114,"li"),e(115,"Suspense for loading fallback"),n(),t(116,"li"),e(117,"Reduces initial bundle size"),n(),t(118,"li"),e(119,"Loads routes on demand"),n()()(),t(120,"pre")(121,"code",4),e(122),n()()()(),t(123,"mat-tab",12)(124,"div",2)(125,"h2"),e(126,"Router Hooks"),n(),t(127,"div",3)(128,"p"),e(129,"React Router provides hooks for accessing routing state."),n(),t(130,"ul")(131,"li"),e(132,"useLocation - current location object"),n(),t(133,"li"),e(134,"useNavigate - programmatic navigation"),n(),t(135,"li"),e(136,"useParams - URL parameters"),n(),t(137,"li"),e(138,"useSearchParams - query parameters"),n()()(),t(139,"pre")(140,"code",4),e(141),n()()()(),t(142,"mat-tab",13)(143,"div",2)(144,"h2"),e(145,"Router Best Practices"),n(),t(146,"div",11)(147,"h3"),e(148,"\u2713 Best Practices"),n(),t(149,"ul")(150,"li"),e(151,"Use lazy loading for code splitting"),n(),t(152,"li"),e(153,"Create route configuration objects"),n(),t(154,"li"),e(155,"Protect sensitive routes"),n(),t(156,"li"),e(157,"Use NavLink for active styling"),n(),t(158,"li"),e(159,"Handle 404 pages with catch-all route"),n(),t(160,"li"),e(161,"Use relative paths in nested routes"),n(),t(162,"li"),e(163,"Pass state through navigate for context"),n()()(),t(164,"pre")(165,"code",4),e(166),n()()()()()()),l&2&&(i(27),a(o.routerSetup),i(19),a(o.navigation),i(19),a(o.dynamicRoutes),i(19),a(o.nestedRoutes),i(19),a(o.protectedRoutes),i(19),a(o.lazyLoading),i(19),a(o.hooks),i(25),a(o.bestPractices))},dependencies:[c,u,d],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#abb2bf;font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return r})();export{f as ReactRouterComponent};
