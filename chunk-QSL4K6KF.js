import{b as p,c as d,d as c}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as i,da as l,gb as n,hb as e,tb as t,ub as o,yb as m}from"./chunk-WGQ2ELTG.js";var f=(()=>{class r{constructor(){this.prerequisites=`Prerequisites for Next.js Development

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
   - TypeScript (recommended)`,this.installation=`Creating a Next.js Application

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

# Application opens at http://localhost:3000`,this.projectStructure=`Next.js Project Structure (App Router)

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
    \u2514\u2500\u2500 hello.ts               # API route (/api/hello)`,this.basicCommands=`Essential Next.js Commands

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
npm install -D package-name  # Dev dependency`,this.firstPage=`Creating Your First Page

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
&#125;`,this.routing=`Next.js Routing Basics

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
    \u2514\u2500\u2500 cart/page.tsx          # /cart`,this.configuration=`Next.js Configuration

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

module.exports = nextConfig;`,this.environmentVariables=`Environment Variables

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
const apiUrl = publicRuntimeConfig.apiUrl;`,this.packageJson=`Understanding package.json

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
npm install lucide-react              # Icons`,this.commonIssues=`Common Issues and Solutions

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
    # Use React.memo for expensive components`}static{this.\u0275fac=function(s){return new(s||r)}}static{this.\u0275cmp=l({type:r,selectors:[["app-nextjs-gettingstarted"]],standalone:!0,features:[m],decls:216,vars:10,consts:[[1,"container"],["label","Prerequisites"],[1,"tab-content"],[1,"info-box"],[1,"language-bash"],["label","Installation"],["label","Project Structure"],["label","Basic Commands"],["label","First Page"],[1,"language-tsx"],["label","Routing"],["label","Configuration"],[1,"language-javascript"],["label","Environment Variables"],["label","package.json"],[1,"language-json"],["label","Troubleshooting"]],template:function(s,a){s&1&&(n(0,"div",0)(1,"h1"),t(2,"Getting Started with Next.js"),e(),n(3,"p"),t(4,"Learn how to set up your development environment and create your first Next.js application."),e(),n(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),t(9,"Prerequisites"),e(),n(10,"div",3)(11,"p")(12,"strong"),t(13,"Before starting"),e(),t(14," with Next.js, ensure you have the required tools and knowledge."),e(),n(15,"ul")(16,"li"),t(17,"Node.js 18.17 or newer (LTS recommended)"),e(),n(18,"li"),t(19,"React fundamentals knowledge"),e(),n(20,"li"),t(21,"Code editor (VS Code recommended)"),e(),n(22,"li"),t(23,"Basic command line experience"),e()()(),n(24,"pre")(25,"code",4),t(26),e()()()(),n(27,"mat-tab",5)(28,"div",2)(29,"h2"),t(30,"Creating a Next.js Application"),e(),n(31,"div",3)(32,"p")(33,"strong"),t(34,"create-next-app"),e(),t(35," is the official way to create Next.js applications."),e(),n(36,"ul")(37,"li"),t(38,"Interactive setup wizard"),e(),n(39,"li"),t(40,"TypeScript support built-in"),e(),n(41,"li"),t(42,"Tailwind CSS integration"),e(),n(43,"li"),t(44,"App Router (latest features)"),e()()(),n(45,"pre")(46,"code",4),t(47),e()()()(),n(48,"mat-tab",6)(49,"div",2)(50,"h2"),t(51,"Project Structure"),e(),n(52,"div",3)(53,"p")(54,"strong"),t(55,"Understanding"),e(),t(56," the Next.js project structure with App Router."),e(),n(57,"ul")(58,"li"),t(59,"app/ - App Router directory (Next.js 13+)"),e(),n(60,"li"),t(61,"public/ - Static assets"),e(),n(62,"li"),t(63,"File-based routing system"),e(),n(64,"li"),t(65,"Special files (layout, page, loading, error)"),e()()(),n(66,"pre")(67,"code",4),t(68),e()()()(),n(69,"mat-tab",7)(70,"div",2)(71,"h2"),t(72,"Essential Next.js Commands"),e(),n(73,"div",3)(74,"p")(75,"strong"),t(76,"npm scripts"),e(),t(77," for development, building, and production."),e(),n(78,"ul")(79,"li"),t(80,"npm run dev - Development server"),e(),n(81,"li"),t(82,"npm run build - Production build"),e(),n(83,"li"),t(84,"npm run start - Start production server"),e(),n(85,"li"),t(86,"npm run lint - Run ESLint"),e()()(),n(87,"pre")(88,"code",4),t(89),e()()()(),n(90,"mat-tab",8)(91,"div",2)(92,"h2"),t(93,"Creating Your First Page"),e(),n(94,"div",3)(95,"p")(96,"strong"),t(97,"Pages"),e(),t(98," are React components in the app directory."),e(),n(99,"ul")(100,"li"),t(101,"File-based routing"),e(),n(102,"li"),t(103,"Server Components by default"),e(),n(104,"li"),t(105,"Client Components with 'use client'"),e(),n(106,"li"),t(107,"Built-in metadata support"),e()()(),n(108,"pre")(109,"code",9),t(110),e()()()(),n(111,"mat-tab",10)(112,"div",2)(113,"h2"),t(114,"Routing Basics"),e(),n(115,"div",3)(116,"p")(117,"strong"),t(118,"File-based routing"),e(),t(119," makes navigation intuitive and automatic."),e(),n(120,"ul")(121,"li"),t(122,"Folder structure = URL structure"),e(),n(123,"li"),t(124,"Dynamic routes with brackets"),e(),n(125,"li"),t(126,"Link component for navigation"),e(),n(127,"li"),t(128,"Route groups for organization"),e()()(),n(129,"pre")(130,"code",9),t(131),e()()()(),n(132,"mat-tab",11)(133,"div",2)(134,"h2"),t(135,"Next.js Configuration"),e(),n(136,"div",3)(137,"p")(138,"strong"),t(139,"next.config.js"),e(),t(140," configures Next.js behavior and features."),e(),n(141,"ul")(142,"li"),t(143,"Image optimization settings"),e(),n(144,"li"),t(145,"Redirects and rewrites"),e(),n(146,"li"),t(147,"Environment variables"),e(),n(148,"li"),t(149,"Custom headers"),e()()(),n(150,"pre")(151,"code",12),t(152),e()()()(),n(153,"mat-tab",13)(154,"div",2)(155,"h2"),t(156,"Environment Variables"),e(),n(157,"div",3)(158,"p")(159,"strong"),t(160,"Environment variables"),e(),t(161," store configuration and secrets securely."),e(),n(162,"ul")(163,"li"),t(164,"Server-only variables"),e(),n(165,"li"),t(166,"NEXT_PUBLIC_ prefix for client"),e(),n(167,"li"),t(168,".env.local for local development"),e(),n(169,"li"),t(170,"Different files per environment"),e()()(),n(171,"pre")(172,"code",4),t(173),e()()()(),n(174,"mat-tab",14)(175,"div",2)(176,"h2"),t(177,"Understanding package.json"),e(),n(178,"div",3)(179,"p")(180,"strong"),t(181,"package.json"),e(),t(182," manages dependencies and scripts."),e(),n(183,"ul")(184,"li"),t(185,"Next.js, React, React DOM"),e(),n(186,"li"),t(187,"TypeScript and type definitions"),e(),n(188,"li"),t(189,"Tailwind CSS and PostCSS"),e(),n(190,"li"),t(191,"ESLint configuration"),e()()(),n(192,"pre")(193,"code",15),t(194),e()()()(),n(195,"mat-tab",16)(196,"div",2)(197,"h2"),t(198,"Common Issues and Solutions"),e(),n(199,"div",3)(200,"p")(201,"strong"),t(202,"Troubleshooting"),e(),t(203," common Next.js development issues."),e(),n(204,"ul")(205,"li"),t(206,"Port conflicts"),e(),n(207,"li"),t(208,"Hydration mismatches"),e(),n(209,"li"),t(210,"Image optimization errors"),e(),n(211,"li"),t(212,"Environment variable issues"),e()()(),n(213,"pre")(214,"code",4),t(215),e()()()()()()),s&2&&(i(26),o(a.prerequisites),i(21),o(a.installation),i(21),o(a.projectStructure),i(21),o(a.basicCommands),i(21),o(a.firstPage),i(21),o(a.routing),i(21),o(a.configuration),i(21),o(a.environmentVariables),i(21),o(a.packageJson),i(21),o(a.commonIssues))},dependencies:[c,p,d],styles:[".container[_ngcontent-%COMP%]{padding:2rem;max-width:1200px;margin:0 auto}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#333;margin-bottom:.5rem}.container[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#666;margin-bottom:2rem;font-size:1.1rem}.tab-content[_ngcontent-%COMP%]{padding:1.5rem 0}.tab-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#333;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]{background:#f8f9fa;border-left:4px solid #000000;padding:1rem;margin-bottom:1.5rem;border-radius:4px}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:.5rem;color:#333}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:.5rem 0 0 1.5rem;color:#666}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:.25rem 0}.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:#282c34;border-radius:8px;padding:1.5rem;overflow-x:auto;margin:1rem 0}.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#abb2bf;font-family:Fira Code,Consolas,monospace;font-size:.9rem;line-height:1.6}"]})}}return r})();export{f as NextjsGettingstartedComponent};
