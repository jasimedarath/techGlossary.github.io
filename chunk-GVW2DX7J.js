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

// src/app/components/nextjs/nextjs-gettingstarted/nextjs-gettingstarted.component.ts
var NextjsGettingstartedComponent = class _NextjsGettingstartedComponent {
  constructor() {
    this.prerequisites = `Prerequisites for Next.js Development

1. Node.js and npm/yarn
   - Node.js version 18.17 or newer (LTS recommended)
   - npm (comes with Node.js) or yarn/pnpm
   - Download from: https://nodejs.org/

2. Code Editor
   - Visual Studio Code (recommended)
   - Extensions: ES7+ React snippets, Tailwind CSS IntelliSense, Prettier

3. Basic Knowledge
   - HTML, CSS, JavaScript (ES6+)
   - React fundamentals (components, props, state, hooks)
   - Basic understanding of Node.js

4. Check Installations:
   node --version   # Should show v18.17+
   npm --version    # Should show 9.0+

5. Helpful to Know
   - Git version control
   - Command line basics
   - RESTful APIs
   - TypeScript (recommended)`;
    this.installation = `Creating a Next.js Application

# Create Next.js app (recommended)
npx create-next-app@latest my-nextjs-app

# Interactive prompts:
# \u2714 Would you like to use TypeScript? \u203A Yes
# \u2714 Would you like to use ESLint? \u203A Yes
# \u2714 Would you like to use Tailwind CSS? \u203A Yes
# \u2714 Would you like to use 'src/' directory? \u203A Yes
# \u2714 Would you like to use App Router? \u203A Yes
# \u2714 Would you like to customize the default import alias? \u203A No

# Navigate to project
cd my-nextjs-app

# Start development server
npm run dev

# With specific options (skip prompts)
npx create-next-app@latest my-app --typescript --tailwind --app --src-dir --eslint

# Using yarn
yarn create next-app my-nextjs-app

# Using pnpm
pnpm create next-app my-nextjs-app

# Application opens at http://localhost:3000`;
    this.projectStructure = `Next.js Project Structure (App Router)

my-nextjs-app/
\u251C\u2500\u2500 public/                    # Static assets
\u2502   \u251C\u2500\u2500 images/
\u2502   \u2514\u2500\u2500 favicon.ico
\u251C\u2500\u2500 src/
\u2502   \u251C\u2500\u2500 app/                   # App Router (Next.js 13+)
\u2502   \u2502   \u251C\u2500\u2500 layout.tsx         # Root layout
\u2502   \u2502   \u251C\u2500\u2500 page.tsx           # Home page
\u2502   \u2502   \u251C\u2500\u2500 loading.tsx        # Loading UI
\u2502   \u2502   \u251C\u2500\u2500 error.tsx          # Error UI
\u2502   \u2502   \u251C\u2500\u2500 not-found.tsx      # 404 page
\u2502   \u2502   \u251C\u2500\u2500 globals.css        # Global styles
\u2502   \u2502   \u251C\u2500\u2500 about/
\u2502   \u2502   \u2502   \u2514\u2500\u2500 page.tsx       # /about route
\u2502   \u2502   \u251C\u2500\u2500 blog/
\u2502   \u2502   \u2502   \u251C\u2500\u2500 page.tsx       # /blog route
\u2502   \u2502   \u2502   \u2514\u2500\u2500 [slug]/
\u2502   \u2502   \u2502       \u2514\u2500\u2500 page.tsx   # /blog/[slug] dynamic
\u2502   \u2502   \u2514\u2500\u2500 api/               # API routes
\u2502   \u2502       \u2514\u2500\u2500 users/
\u2502   \u2502           \u2514\u2500\u2500 route.ts   # /api/users endpoint
\u2502   \u251C\u2500\u2500 components/            # Reusable components
\u2502   \u2502   \u251C\u2500\u2500 Header.tsx
\u2502   \u2502   \u2514\u2500\u2500 Footer.tsx
\u2502   \u2514\u2500\u2500 lib/                   # Utilities & helpers
\u2502       \u2514\u2500\u2500 utils.ts
\u251C\u2500\u2500 .env.local                 # Environment variables
\u251C\u2500\u2500 next.config.js             # Next.js configuration
\u251C\u2500\u2500 package.json               # Dependencies
\u251C\u2500\u2500 tsconfig.json              # TypeScript config
\u2514\u2500\u2500 tailwind.config.ts         # Tailwind config

Key Files:
- app/layout.tsx: Root layout wrapping all pages
- app/page.tsx: Homepage component
- next.config.js: Next.js configuration
- .env.local: Environment variables (not committed)

Pages Router Structure (Legacy):
pages/
\u251C\u2500\u2500 _app.tsx                   # Custom App component
\u251C\u2500\u2500 _document.tsx              # Custom Document
\u251C\u2500\u2500 index.tsx                  # Home page (/)
\u251C\u2500\u2500 about.tsx                  # About page (/about)
\u2514\u2500\u2500 api/
    \u2514\u2500\u2500 hello.ts               # API route (/api/hello)`;
    this.basicCommands = `Essential Next.js Commands

# Development
npm run dev              # Start development server (http://localhost:3000)
npm run dev -- -p 4000   # Use different port

# Building
npm run build            # Create production build
npm run start            # Start production server
npm run lint             # Run ESLint

# Using yarn
yarn dev
yarn build
yarn start

# Using pnpm
pnpm dev
pnpm build
pnpm start

# Export static HTML
npm run build            # Build
npm run export           # Export to 'out' directory

# Environment-specific
NODE_ENV=production npm run build

# Type checking (TypeScript)
npx tsc --noEmit

# Clean Next.js cache
rm -rf .next

# Install dependencies
npm install package-name
npm install -D package-name  # Dev dependency`;
    this.firstPage = `Creating Your First Page

# app/about/page.tsx (App Router)
export default function AboutPage() &#123;
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our Next.js application!</p>
    </div>
  );
&#125;

# With Metadata
import &#123; Metadata &#125; from 'next';

export const metadata: Metadata = &#123;
  title: 'About Us',
  description: 'Learn more about our company'
&#125;;

export default function AboutPage() &#123;
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our Next.js application!</p>
    </div>
  );
&#125;

# Dynamic Route: app/blog/[slug]/page.tsx
export default function BlogPost(&#123; params &#125;: &#123; params: &#123; slug: string &#125; &#125;) &#123;
  return (
    <div>
      <h1>Blog Post: &#123;params.slug&#125;</h1>
    </div>
  );
&#125;

# Client Component (with state)
'use client';

import &#123; useState &#125; from 'react';

export default function Counter() &#123;
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: &#123;count&#125;</p>
      <button onClick=&#123;() => setCount(count + 1)&#125;>Increment</button>
    </div>
  );
&#125;

# Server Component (default)
async function getData() &#123;
  const res = await fetch('https://api.example.com/data');
  return res.json();
&#125;

export default async function Page() &#123;
  const data = await getData();
  return <div>&#123;JSON.stringify(data)&#125;</div>;
&#125;`;
    this.routing = `Next.js Routing Basics

# File-based Routing (App Router)
app/
\u251C\u2500\u2500 page.tsx                    # / (root)
\u251C\u2500\u2500 about/
\u2502   \u2514\u2500\u2500 page.tsx               # /about
\u251C\u2500\u2500 blog/
\u2502   \u251C\u2500\u2500 page.tsx               # /blog
\u2502   \u2514\u2500\u2500 [slug]/
\u2502       \u2514\u2500\u2500 page.tsx           # /blog/:slug
\u2514\u2500\u2500 dashboard/
    \u251C\u2500\u2500 layout.tsx             # Nested layout
    \u251C\u2500\u2500 page.tsx               # /dashboard
    \u2514\u2500\u2500 settings/
        \u2514\u2500\u2500 page.tsx           # /dashboard/settings

# Navigation with Link
import Link from 'next/link';

export default function Nav() &#123;
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog/my-post">Blog Post</Link>
    </nav>
  );
&#125;

# Programmatic Navigation
'use client';

import &#123; useRouter &#125; from 'next/navigation';

export default function Page() &#123;
  const router = useRouter();

  return (
    <button onClick=&#123;() => router.push('/about')&#125;>
      Go to About
    </button>
  );
&#125;

# Route Groups (organization, no URL impact)
app/
\u251C\u2500\u2500 (marketing)/
\u2502   \u251C\u2500\u2500 about/page.tsx         # /about
\u2502   \u2514\u2500\u2500 contact/page.tsx       # /contact
\u2514\u2500\u2500 (shop)/
    \u251C\u2500\u2500 products/page.tsx      # /products
    \u2514\u2500\u2500 cart/page.tsx          # /cart`;
    this.configuration = `Next.js Configuration

# next.config.js
/** @type &#123;import('next').NextConfig&#125; */
const nextConfig = &#123;
  // Image domains
  images: &#123;
    domains: ['example.com', 'cdn.example.com'],
    remotePatterns: [
      &#123;
        protocol: 'https',
        hostname: '**.example.com',
      &#125;,
    ],
  &#125;,

  // Redirects
  async redirects() &#123;
    return [
      &#123;
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      &#125;,
    ];
  &#125;,

  // Rewrites
  async rewrites() &#123;
    return [
      &#123;
        source: '/api/:path*',
        destination: 'https://api.example.com/:path*',
      &#125;,
    ];
  &#125;,

  // Headers
  async headers() &#123;
    return [
      &#123;
        source: '/api/:path*',
        headers: [
          &#123; key: 'Access-Control-Allow-Origin', value: '*' &#125;,
        ],
      &#125;,
    ];
  &#125;,

  // Environment variables
  env: &#123;
    CUSTOM_KEY: 'my-value',
  &#125;,

  // React strict mode
  reactStrictMode: true,

  // Experimental features
  experimental: &#123;
    serverActions: true,
  &#125;,

  // Output mode
  output: 'standalone', // For Docker

  // Base path
  basePath: '/docs',

  // Asset prefix (CDN)
  assetPrefix: 'https://cdn.example.com',
&#125;;

module.exports = nextConfig;`;
    this.environmentVariables = `Environment Variables

# .env.local (not committed to git)
DATABASE_URL=postgresql://localhost:5432/mydb
API_KEY=your_secret_key_here
NEXT_PUBLIC_API_URL=https://api.example.com

# .env.production (production)
DATABASE_URL=postgresql://prod-db:5432/mydb
API_KEY=production_key

# Access in Server Components
export default async function Page() &#123;
  const dbUrl = process.env.DATABASE_URL;
  const apiKey = process.env.API_KEY;
  // Available only on server
  return <div>Server Component</div>;
&#125;

# Access in Client Components (must use NEXT_PUBLIC_ prefix)
'use client';

export default function ClientComponent() &#123;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  // Only NEXT_PUBLIC_ variables work in client
  return <div>API: &#123;apiUrl&#125;</div>;
&#125;

# Runtime Configuration (next.config.js)
module.exports = &#123;
  publicRuntimeConfig: &#123;
    apiUrl: process.env.API_URL,
  &#125;,
  serverRuntimeConfig: &#123;
    secret: process.env.SECRET_KEY,
  &#125;,
&#125;;

# Access runtime config
import getConfig from 'next/config';

const &#123; publicRuntimeConfig &#125; = getConfig();
const apiUrl = publicRuntimeConfig.apiUrl;`;
    this.packageJson = `Understanding package.json

&#123;
  "name": "my-nextjs-app",
  "version": "0.1.0",
  "private": true,
  "scripts": &#123;
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  &#125;,
  "dependencies": &#123;
    "next": "14.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  &#125;,
  "devDependencies": &#123;
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.1.0",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  &#125;
&#125;

# Common packages to add
npm install @tanstack/react-query     # Data fetching
npm install axios                     # HTTP client
npm install zustand                   # State management
npm install next-auth                 # Authentication
npm install prisma @prisma/client     # Database ORM
npm install zod                       # Validation
npm install react-hook-form           # Form handling
npm install lucide-react              # Icons`;
    this.commonIssues = `Common Issues and Solutions

1. Port Already in Use
   Error: Port 3000 is already in use
   Solution:
   npm run dev -- -p 3001  # Use different port
   # Or kill process using port 3000

2. Module Not Found
   Error: Cannot find module 'next'
   Solution:
   rm -rf node_modules package-lock.json
   npm install

3. Hydration Mismatch
   Error: Hydration failed because the initial UI does not match
   Solution:
   # Avoid using browser-only APIs in server components
   # Use useEffect for client-only code
   # Check for mismatched HTML tags

4. Image Optimization Error
   Error: Invalid src prop
   Solution:
   # Add domain to next.config.js images.domains
   # Or use remotePatterns

5. Environment Variables Not Loading
   Solution:
   # Restart dev server after adding .env
   # Use NEXT_PUBLIC_ prefix for client
   # Check .env.local is in root directory

6. Build Errors
   Error: Build failed
   Solution:
   # Clear cache
   rm -rf .next
   npm run build

7. TypeScript Errors
   Solution:
   # Check tsconfig.json
   # Run: npx tsc --noEmit
   # Install types: npm install -D @types/package

8. API Route Not Working
   Solution:
   # Check route.ts filename (not route.tsx)
   # Export named functions (GET, POST, etc.)
   # Restart dev server

9. Static Export Issues
   Error: Dynamic features not supported in static export
   Solution:
   # Remove dynamic routes or APIs
   # Or use server-side rendering

10. Performance Issues
    Solution:
    # Use Image component for images
    # Implement proper caching
    # Enable ISR for dynamic content
    # Use React.memo for expensive components`;
  }
  static {
    this.\u0275fac = function NextjsGettingstartedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NextjsGettingstartedComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NextjsGettingstartedComponent, selectors: [["app-nextjs-gettingstarted"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 216, vars: 10, consts: [[1, "container"], ["label", "Prerequisites"], [1, "tab-content"], [1, "info-box"], [1, "language-bash"], ["label", "Installation"], ["label", "Project Structure"], ["label", "Basic Commands"], ["label", "First Page"], [1, "language-tsx"], ["label", "Routing"], ["label", "Configuration"], [1, "language-javascript"], ["label", "Environment Variables"], ["label", "package.json"], [1, "language-json"], ["label", "Troubleshooting"]], template: function NextjsGettingstartedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Getting Started with Next.js");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Learn how to set up your development environment and create your first Next.js application.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "Prerequisites");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "Before starting");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " with Next.js, ensure you have the required tools and knowledge.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "Node.js 18.17 or newer (LTS recommended)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "React fundamentals knowledge");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li");
        \u0275\u0275text(21, "Code editor (VS Code recommended)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275text(23, "Basic command line experience");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "pre")(25, "code", 4);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "mat-tab", 5)(28, "div", 2)(29, "h2");
        \u0275\u0275text(30, "Creating a Next.js Application");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 3)(32, "p")(33, "strong");
        \u0275\u0275text(34, "create-next-app");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " is the official way to create Next.js applications.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "ul")(37, "li");
        \u0275\u0275text(38, "Interactive setup wizard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "li");
        \u0275\u0275text(40, "TypeScript support built-in");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "li");
        \u0275\u0275text(42, "Tailwind CSS integration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li");
        \u0275\u0275text(44, "App Router (latest features)");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "pre")(46, "code", 4);
        \u0275\u0275text(47);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(48, "mat-tab", 6)(49, "div", 2)(50, "h2");
        \u0275\u0275text(51, "Project Structure");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 3)(53, "p")(54, "strong");
        \u0275\u0275text(55, "Understanding");
        \u0275\u0275elementEnd();
        \u0275\u0275text(56, " the Next.js project structure with App Router.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "ul")(58, "li");
        \u0275\u0275text(59, "app/ - App Router directory (Next.js 13+)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "li");
        \u0275\u0275text(61, "public/ - Static assets");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "li");
        \u0275\u0275text(63, "File-based routing system");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "li");
        \u0275\u0275text(65, "Special files (layout, page, loading, error)");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(66, "pre")(67, "code", 4);
        \u0275\u0275text(68);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(69, "mat-tab", 7)(70, "div", 2)(71, "h2");
        \u0275\u0275text(72, "Essential Next.js Commands");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 3)(74, "p")(75, "strong");
        \u0275\u0275text(76, "npm scripts");
        \u0275\u0275elementEnd();
        \u0275\u0275text(77, " for development, building, and production.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "ul")(79, "li");
        \u0275\u0275text(80, "npm run dev - Development server");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "li");
        \u0275\u0275text(82, "npm run build - Production build");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "li");
        \u0275\u0275text(84, "npm run start - Start production server");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "li");
        \u0275\u0275text(86, "npm run lint - Run ESLint");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(87, "pre")(88, "code", 4);
        \u0275\u0275text(89);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(90, "mat-tab", 8)(91, "div", 2)(92, "h2");
        \u0275\u0275text(93, "Creating Your First Page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "div", 3)(95, "p")(96, "strong");
        \u0275\u0275text(97, "Pages");
        \u0275\u0275elementEnd();
        \u0275\u0275text(98, " are React components in the app directory.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "ul")(100, "li");
        \u0275\u0275text(101, "File-based routing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "li");
        \u0275\u0275text(103, "Server Components by default");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "li");
        \u0275\u0275text(105, "Client Components with 'use client'");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "li");
        \u0275\u0275text(107, "Built-in metadata support");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(108, "pre")(109, "code", 9);
        \u0275\u0275text(110);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(111, "mat-tab", 10)(112, "div", 2)(113, "h2");
        \u0275\u0275text(114, "Routing Basics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "div", 3)(116, "p")(117, "strong");
        \u0275\u0275text(118, "File-based routing");
        \u0275\u0275elementEnd();
        \u0275\u0275text(119, " makes navigation intuitive and automatic.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "ul")(121, "li");
        \u0275\u0275text(122, "Folder structure = URL structure");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "li");
        \u0275\u0275text(124, "Dynamic routes with brackets");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "li");
        \u0275\u0275text(126, "Link component for navigation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "li");
        \u0275\u0275text(128, "Route groups for organization");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(129, "pre")(130, "code", 9);
        \u0275\u0275text(131);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(132, "mat-tab", 11)(133, "div", 2)(134, "h2");
        \u0275\u0275text(135, "Next.js Configuration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "div", 3)(137, "p")(138, "strong");
        \u0275\u0275text(139, "next.config.js");
        \u0275\u0275elementEnd();
        \u0275\u0275text(140, " configures Next.js behavior and features.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "ul")(142, "li");
        \u0275\u0275text(143, "Image optimization settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "li");
        \u0275\u0275text(145, "Redirects and rewrites");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "li");
        \u0275\u0275text(147, "Environment variables");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "li");
        \u0275\u0275text(149, "Custom headers");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(150, "pre")(151, "code", 12);
        \u0275\u0275text(152);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(153, "mat-tab", 13)(154, "div", 2)(155, "h2");
        \u0275\u0275text(156, "Environment Variables");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "div", 3)(158, "p")(159, "strong");
        \u0275\u0275text(160, "Environment variables");
        \u0275\u0275elementEnd();
        \u0275\u0275text(161, " store configuration and secrets securely.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "ul")(163, "li");
        \u0275\u0275text(164, "Server-only variables");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "li");
        \u0275\u0275text(166, "NEXT_PUBLIC_ prefix for client");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "li");
        \u0275\u0275text(168, ".env.local for local development");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(169, "li");
        \u0275\u0275text(170, "Different files per environment");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(171, "pre")(172, "code", 4);
        \u0275\u0275text(173);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(174, "mat-tab", 14)(175, "div", 2)(176, "h2");
        \u0275\u0275text(177, "Understanding package.json");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "div", 3)(179, "p")(180, "strong");
        \u0275\u0275text(181, "package.json");
        \u0275\u0275elementEnd();
        \u0275\u0275text(182, " manages dependencies and scripts.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "ul")(184, "li");
        \u0275\u0275text(185, "Next.js, React, React DOM");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(186, "li");
        \u0275\u0275text(187, "TypeScript and type definitions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(188, "li");
        \u0275\u0275text(189, "Tailwind CSS and PostCSS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(190, "li");
        \u0275\u0275text(191, "ESLint configuration");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(192, "pre")(193, "code", 15);
        \u0275\u0275text(194);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(195, "mat-tab", 16)(196, "div", 2)(197, "h2");
        \u0275\u0275text(198, "Common Issues and Solutions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(199, "div", 3)(200, "p")(201, "strong");
        \u0275\u0275text(202, "Troubleshooting");
        \u0275\u0275elementEnd();
        \u0275\u0275text(203, " common Next.js development issues.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(204, "ul")(205, "li");
        \u0275\u0275text(206, "Port conflicts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(207, "li");
        \u0275\u0275text(208, "Hydration mismatches");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(209, "li");
        \u0275\u0275text(210, "Image optimization errors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(211, "li");
        \u0275\u0275text(212, "Environment variable issues");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(213, "pre")(214, "code", 4);
        \u0275\u0275text(215);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(26);
        \u0275\u0275textInterpolate(ctx.prerequisites);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.installation);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.projectStructure);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.basicCommands);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.firstPage);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.routing);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.configuration);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.environmentVariables);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.packageJson);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.commonIssues);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 0.5rem;\n}\n.container[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 2rem;\n  font-size: 1.1rem;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 1.5rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-left: 4px solid #000000;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  border-radius: 4px;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  color: #333;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0 1.5rem;\n  color: #666;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background: #282c34;\n  border-radius: 8px;\n  padding: 1.5rem;\n  overflow-x: auto;\n  margin: 1rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #abb2bf;\n  font-family:\n    "Fira Code",\n    "Consolas",\n    monospace;\n  font-size: 0.9rem;\n  line-height: 1.6;\n}\n/*# sourceMappingURL=nextjs-gettingstarted.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NextjsGettingstartedComponent, { className: "NextjsGettingstartedComponent", filePath: "src\\app\\components\\nextjs\\nextjs-gettingstarted\\nextjs-gettingstarted.component.ts", lineNumber: 11 });
})();
export {
  NextjsGettingstartedComponent
};
//# sourceMappingURL=chunk-GVW2DX7J.js.map
