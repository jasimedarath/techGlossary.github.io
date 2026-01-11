import"./chunk-4ITEIGFF.js";import"./chunk-WCULWZKC.js";import{a as v}from"./chunk-FSUYFWSG.js";import{a as p,b as g,c as x,d as h}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as o,Xa as r,da as u,e as R,gb as e,hb as t,lb as l,tb as n,ub as m,yb as d}from"./chunk-WGQ2ELTG.js";var f=R(v());function S(i,s){if(i&1&&(e(0,"div",10)(1,"h2"),n(2,"Router Setup"),t(),e(3,"div",11)(4,"p"),n(5,"Install and configure "),e(6,"strong"),n(7,"React Router v6"),t(),n(8," for client-side routing."),t(),e(9,"ul")(10,"li"),n(11,"BrowserRouter wraps your app"),t(),e(12,"li"),n(13,"Routes define route configuration"),t(),e(14,"li"),n(15,"Route defines individual routes"),t(),e(16,"li"),n(17,"Link for navigation without page reload"),t()()(),e(18,"pre")(19,"code",12),n(20),t()()()),i&2){let a=l();o(20),m(a.routerSetup)}}function b(i,s){if(i&1&&(e(0,"div",10)(1,"h2"),n(2,"Navigation Methods"),t(),e(3,"div",11)(4,"p"),n(5,"Multiple ways to navigate in React Router."),t(),e(6,"ul")(7,"li"),n(8,"Link component for declarative navigation"),t(),e(9,"li"),n(10,"NavLink for active link styling"),t(),e(11,"li"),n(12,"useNavigate hook for programmatic navigation"),t(),e(13,"li"),n(14,"Navigate component for redirects"),t()()(),e(15,"pre")(16,"code",12),n(17),t()()()),i&2){let a=l();o(17),m(a.navigation)}}function E(i,s){if(i&1&&(e(0,"div",10)(1,"h2"),n(2,"Dynamic Routes & Parameters"),t(),e(3,"div",11)(4,"p"),n(5,"Create routes with dynamic segments and query parameters."),t(),e(6,"ul")(7,"li"),n(8,":param syntax for URL parameters"),t(),e(9,"li"),n(10,"useParams hook to access parameters"),t(),e(11,"li"),n(12,"useSearchParams for query strings"),t(),e(13,"li"),n(14,"Dynamic routing for data-driven apps"),t()()(),e(15,"pre")(16,"code",12),n(17),t()()()),i&2){let a=l();o(17),m(a.dynamicRoutes)}}function P(i,s){if(i&1&&(e(0,"div",10)(1,"h2"),n(2,"Nested Routes & Layouts"),t(),e(3,"div",11)(4,"p"),n(5,"Create nested route hierarchies with shared layouts."),t(),e(6,"ul")(7,"li"),n(8,"Outlet component renders nested routes"),t(),e(9,"li"),n(10,"Share layout components across routes"),t(),e(11,"li"),n(12,"Nested route definitions"),t(),e(13,"li"),n(14,"Index routes for default child"),t()()(),e(15,"pre")(16,"code",12),n(17),t()()()),i&2){let a=l();o(17),m(a.nestedRoutes)}}function _(i,s){if(i&1&&(e(0,"div",10)(1,"h2"),n(2,"Protected Routes"),t(),e(3,"div",13)(4,"p"),n(5,"Implement authentication and authorization for routes."),t(),e(6,"ul")(7,"li"),n(8,"Wrapper components for route protection"),t(),e(9,"li"),n(10,"Redirect unauthorized users"),t(),e(11,"li"),n(12,"Check authentication status"),t(),e(13,"li"),n(14,"Role-based access control"),t()()(),e(15,"pre")(16,"code",12),n(17),t()()()),i&2){let a=l();o(17),m(a.protectedRoutes)}}function C(i,s){if(i&1&&(e(0,"div",10)(1,"h2"),n(2,"Code Splitting & Lazy Loading"),t(),e(3,"div",14)(4,"p"),n(5,"Improve performance with lazy-loaded route components."),t(),e(6,"ul")(7,"li"),n(8,"React.lazy() for dynamic imports"),t(),e(9,"li"),n(10,"Suspense for loading fallback"),t(),e(11,"li"),n(12,"Reduces initial bundle size"),t(),e(13,"li"),n(14,"Loads routes on demand"),t()()(),e(15,"pre")(16,"code",12),n(17),t()()()),i&2){let a=l();o(17),m(a.lazyLoading)}}function y(i,s){if(i&1&&(e(0,"div",10)(1,"h2"),n(2,"Router Hooks"),t(),e(3,"div",11)(4,"p"),n(5,"React Router provides hooks for accessing routing state."),t(),e(6,"ul")(7,"li"),n(8,"useLocation - current location object"),t(),e(9,"li"),n(10,"useNavigate - programmatic navigation"),t(),e(11,"li"),n(12,"useParams - URL parameters"),t(),e(13,"li"),n(14,"useSearchParams - query parameters"),t()()(),e(15,"pre")(16,"code",12),n(17),t()()()),i&2){let a=l();o(17),m(a.hooks)}}function k(i,s){if(i&1&&(e(0,"div",10)(1,"h2"),n(2,"Router Best Practices"),t(),e(3,"div",14)(4,"h3"),n(5,"\u2713 Best Practices"),t(),e(6,"ul")(7,"li"),n(8,"Use lazy loading for code splitting"),t(),e(9,"li"),n(10,"Create route configuration objects"),t(),e(11,"li"),n(12,"Protect sensitive routes"),t(),e(13,"li"),n(14,"Use NavLink for active styling"),t(),e(15,"li"),n(16,"Handle 404 pages with catch-all route"),t(),e(17,"li"),n(18,"Use relative paths in nested routes"),t(),e(19,"li"),n(20,"Pass state through navigate for context"),t()()(),e(21,"pre")(22,"code",12),n(23),t()()()),i&2){let a=l();o(23),m(a.bestPractices)}}var I=(()=>{class i{constructor(){this.routerSetup=`// Install: npm install react-router-dom
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
</Route>`}ngAfterViewChecked(){f.highlightAll()}static{this.\u0275fac=function(c){return new(c||i)}}static{this.\u0275cmp=u({type:i,selectors:[["app-react-router"]],standalone:!0,features:[d],decls:22,vars:0,consts:[[1,"container"],["label","Setup & Basics"],["matTabContent",""],["label","Navigation"],["label","Dynamic Routes"],["label","Nested Routes"],["label","Protected Routes"],["label","Lazy Loading"],["label","Router Hooks"],["label","Best Practices"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],[1,"info-box","warning"],[1,"info-box","success"]],template:function(c,L){c&1&&(e(0,"div",0)(1,"h1"),n(2,"React Router"),t(),e(3,"p"),n(4,"React Router is the standard routing library for React. It enables navigation between views, URL parameters, and helps build single-page applications with multiple views."),t(),e(5,"mat-tab-group")(6,"mat-tab",1),r(7,S,21,1,"ng-template",2),t(),e(8,"mat-tab",3),r(9,b,18,1,"ng-template",2),t(),e(10,"mat-tab",4),r(11,E,18,1,"ng-template",2),t(),e(12,"mat-tab",5),r(13,P,18,1,"ng-template",2),t(),e(14,"mat-tab",6),r(15,_,18,1,"ng-template",2),t(),e(16,"mat-tab",7),r(17,C,18,1,"ng-template",2),t(),e(18,"mat-tab",8),r(19,y,18,1,"ng-template",2),t(),e(20,"mat-tab",9),r(21,k,24,1,"ng-template",2),t()()())},dependencies:[h,p,g,x],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return i})();export{I as ReactRouterComponent};
