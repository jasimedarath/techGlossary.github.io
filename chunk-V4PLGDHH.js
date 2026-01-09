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

// src/app/components/react/react-router/react-router.component.ts
var ReactRouterComponent = class _ReactRouterComponent {
  constructor() {
    this.routerSetup = `// Install: npm install react-router-dom
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
}`;
    this.navigation = `// Navigation Methods
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
}`;
    this.dynamicRoutes = `// Dynamic Routes and Parameters
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
}`;
    this.nestedRoutes = `// Nested Routes
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
}`;
    this.protectedRoutes = `// Protected Routes
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
</Routes>`;
    this.lazyLoading = `// Code Splitting with Lazy Loading
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
}`;
    this.hooks = `// Router Hooks
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
}`;
    this.bestPractices = `// Router Best Practices

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
</Route>`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function ReactRouterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReactRouterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReactRouterComponent, selectors: [["app-react-router"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 167, vars: 8, consts: [[1, "container"], ["label", "Setup & Basics"], [1, "tab-content"], [1, "info-box"], [1, "language-jsx"], ["label", "Navigation"], ["label", "Dynamic Routes"], ["label", "Nested Routes"], ["label", "Protected Routes"], [1, "info-box", "warning"], ["label", "Lazy Loading"], [1, "info-box", "success"], ["label", "Router Hooks"], ["label", "Best Practices"]], template: function ReactRouterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "React Router");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "React Router is the standard routing library for React. It enables navigation between views, URL parameters, and helps build single-page applications with multiple views.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "Router Setup");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p");
        \u0275\u0275text(12, "Install and configure ");
        \u0275\u0275elementStart(13, "strong");
        \u0275\u0275text(14, "React Router v6");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " for client-side routing.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "ul")(17, "li");
        \u0275\u0275text(18, "BrowserRouter wraps your app");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "li");
        \u0275\u0275text(20, "Routes define route configuration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "li");
        \u0275\u0275text(22, "Route defines individual routes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "li");
        \u0275\u0275text(24, "Link for navigation without page reload");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "pre")(26, "code", 4);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(28, "mat-tab", 5)(29, "div", 2)(30, "h2");
        \u0275\u0275text(31, "Navigation Methods");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 3)(33, "p");
        \u0275\u0275text(34, "Multiple ways to navigate in React Router.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "ul")(36, "li");
        \u0275\u0275text(37, "Link component for declarative navigation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "li");
        \u0275\u0275text(39, "NavLink for active link styling");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "li");
        \u0275\u0275text(41, "useNavigate hook for programmatic navigation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "li");
        \u0275\u0275text(43, "Navigate component for redirects");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "pre")(45, "code", 4);
        \u0275\u0275text(46);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(47, "mat-tab", 6)(48, "div", 2)(49, "h2");
        \u0275\u0275text(50, "Dynamic Routes & Parameters");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "div", 3)(52, "p");
        \u0275\u0275text(53, "Create routes with dynamic segments and query parameters.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "ul")(55, "li");
        \u0275\u0275text(56, ":param syntax for URL parameters");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "li");
        \u0275\u0275text(58, "useParams hook to access parameters");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "li");
        \u0275\u0275text(60, "useSearchParams for query strings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "li");
        \u0275\u0275text(62, "Dynamic routing for data-driven apps");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(63, "pre")(64, "code", 4);
        \u0275\u0275text(65);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(66, "mat-tab", 7)(67, "div", 2)(68, "h2");
        \u0275\u0275text(69, "Nested Routes & Layouts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "div", 3)(71, "p");
        \u0275\u0275text(72, "Create nested route hierarchies with shared layouts.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "ul")(74, "li");
        \u0275\u0275text(75, "Outlet component renders nested routes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "li");
        \u0275\u0275text(77, "Share layout components across routes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "li");
        \u0275\u0275text(79, "Nested route definitions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "li");
        \u0275\u0275text(81, "Index routes for default child");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(82, "pre")(83, "code", 4);
        \u0275\u0275text(84);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(85, "mat-tab", 8)(86, "div", 2)(87, "h2");
        \u0275\u0275text(88, "Protected Routes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "div", 9)(90, "p");
        \u0275\u0275text(91, "Implement authentication and authorization for routes.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "ul")(93, "li");
        \u0275\u0275text(94, "Wrapper components for route protection");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "li");
        \u0275\u0275text(96, "Redirect unauthorized users");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "li");
        \u0275\u0275text(98, "Check authentication status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "li");
        \u0275\u0275text(100, "Role-based access control");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(101, "pre")(102, "code", 4);
        \u0275\u0275text(103);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(104, "mat-tab", 10)(105, "div", 2)(106, "h2");
        \u0275\u0275text(107, "Code Splitting & Lazy Loading");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "div", 11)(109, "p");
        \u0275\u0275text(110, "Improve performance with lazy-loaded route components.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "ul")(112, "li");
        \u0275\u0275text(113, "React.lazy() for dynamic imports");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "li");
        \u0275\u0275text(115, "Suspense for loading fallback");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "li");
        \u0275\u0275text(117, "Reduces initial bundle size");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "li");
        \u0275\u0275text(119, "Loads routes on demand");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(120, "pre")(121, "code", 4);
        \u0275\u0275text(122);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(123, "mat-tab", 12)(124, "div", 2)(125, "h2");
        \u0275\u0275text(126, "Router Hooks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "div", 3)(128, "p");
        \u0275\u0275text(129, "React Router provides hooks for accessing routing state.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "ul")(131, "li");
        \u0275\u0275text(132, "useLocation - current location object");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "li");
        \u0275\u0275text(134, "useNavigate - programmatic navigation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "li");
        \u0275\u0275text(136, "useParams - URL parameters");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "li");
        \u0275\u0275text(138, "useSearchParams - query parameters");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(139, "pre")(140, "code", 4);
        \u0275\u0275text(141);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(142, "mat-tab", 13)(143, "div", 2)(144, "h2");
        \u0275\u0275text(145, "Router Best Practices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "div", 11)(147, "h3");
        \u0275\u0275text(148, "\u2713 Best Practices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(149, "ul")(150, "li");
        \u0275\u0275text(151, "Use lazy loading for code splitting");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "li");
        \u0275\u0275text(153, "Create route configuration objects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(154, "li");
        \u0275\u0275text(155, "Protect sensitive routes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "li");
        \u0275\u0275text(157, "Use NavLink for active styling");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "li");
        \u0275\u0275text(159, "Handle 404 pages with catch-all route");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "li");
        \u0275\u0275text(161, "Use relative paths in nested routes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "li");
        \u0275\u0275text(163, "Pass state through navigate for context");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(164, "pre")(165, "code", 4);
        \u0275\u0275text(166);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(27);
        \u0275\u0275textInterpolate(ctx.routerSetup);
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(ctx.navigation);
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(ctx.dynamicRoutes);
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(ctx.nestedRoutes);
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(ctx.protectedRoutes);
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(ctx.lazyLoading);
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(ctx.hooks);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.bestPractices);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #61dafb;\n  margin-bottom: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #282c34;\n  margin-top: 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  padding: 15px;\n  margin: 15px 0;\n  border-radius: 4px;\n}\n.info-box.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-left-color: #4caf50;\n}\n.info-box.warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #ff9800;\n}\n.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1976d2;\n}\n.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding-left: 20px;\n}\n.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05);\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\npre[_ngcontent-%COMP%] {\n  background: #282c34;\n  border-radius: 4px;\n  overflow-x: auto;\n  margin: 15px 0;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #abb2bf;\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n  font-size: 14px;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=react-router.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReactRouterComponent, { className: "ReactRouterComponent", filePath: "src\\app\\components\\react\\react-router\\react-router.component.ts", lineNumber: 13 });
})();
export {
  ReactRouterComponent
};
//# sourceMappingURL=chunk-V4PLGDHH.js.map
