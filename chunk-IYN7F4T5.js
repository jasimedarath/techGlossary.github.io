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

// src/app/components/nextjs/nextjs-deployment/nextjs-deployment.component.ts
var NextjsDeploymentComponent = class _NextjsDeploymentComponent {
  constructor() {
    this.vercelDeployment = `// Deploying to Vercel (recommended)

// 1. Install Vercel CLI
// npm install -g vercel

// 2. Login to Vercel
// vercel login

// 3. Deploy from command line
// vercel

// 4. Deploy to production
// vercel --prod

// vercel.json configuration
&#123;
  "buildCommand": "next build",
  "devCommand": "next dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"],
  "env": &#123;
    "DATABASE_URL": "@database-url"
  &#125;,
  "build": &#123;
    "env": &#123;
      "NEXT_PUBLIC_API_URL": "https://api.example.com"
    &#125;
  &#125;
&#125;

// Git integration:
// 1. Push to GitHub
// 2. Import project to Vercel
// 3. Auto-deploy on push
// 4. Preview deployments for PRs

// Benefits:
// - Zero configuration
// - Automatic HTTPS
// - Global CDN
// - Instant rollbacks
// - Preview deployments`;
    this.dockerDeployment = `// Docker Deployment

// Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]

// next.config.js - Enable standalone
module.exports = &#123;
  output: 'standalone',
&#125;;

// docker-compose.yml
version: '3.8'
services:
  nextjs:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://...
      - NEXTAUTH_URL=http://localhost:3000
    restart: unless-stopped`;
    this.staticExport = `// Static Export (for static hosting)

// next.config.js
module.exports = &#123;
  output: 'export',
  images: &#123;
    unoptimized: true, // Required for static export
  &#125;,
  // Optional: Add trailing slashes
  trailingSlash: true,
&#125;;

// Build static site
// npm run build

// Output directory: out/
// Deploy to: GitHub Pages, Netlify, S3, etc.

// Limitations:
// - No API routes
// - No Server Components data fetching
// - No dynamic routes without generateStaticParams
// - No Image Optimization
// - No Middleware
// - No ISR/SSR

// Good for:
// - Documentation sites
// - Blogs
// - Marketing pages
// - Static portfolios

// GitHub Pages deployment
// package.json
&#123;
  "scripts": &#123;
    "build": "next build",
    "export": "next export",
    "deploy": "npm run build && npm run export && gh-pages -d out"
  &#125;
&#125;`;
    this.selfHosting = `// Self-Hosting with Node.js

// 1. Build the application
// npm run build

// 2. Start production server
// npm run start

// Custom server.js
const &#123; createServer &#125; = require('http');
const &#123; parse &#125; = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;

const app = next(&#123; dev, hostname, port &#125;);
const handle = app.getRequestHandler();

app.prepare().then(() => &#123;
  createServer(async (req, res) => &#123;
    try &#123;
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    &#125; catch (err) &#123;
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    &#125;
  &#125;).listen(port, (err) => &#123;
    if (err) throw err;
    console.log(\`> Ready on http://$&#123;hostname&#125;:$&#123;port&#125;\`);
  &#125;);
&#125;);

// package.json
&#123;
  "scripts": &#123;
    "dev": "node server.js",
    "build": "next build",
    "start": "NODE_ENV=production node server.js"
  &#125;
&#125;

// With PM2 for process management
// pm2 start npm --name "nextjs" -- start
// pm2 save
// pm2 startup`;
    this.nginx = `// Nginx Reverse Proxy Configuration

// /etc/nginx/sites-available/nextjs
server &#123;
    listen 80;
    server_name example.com www.example.com;
    
    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
&#125;

server &#123;
    listen 443 ssl http2;
    server_name example.com www.example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    
    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    
    location / &#123;
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    &#125;
    
    # Cache static files
    location /_next/static &#123;
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=31536000, immutable";
    &#125;
&#125;`;
    this.environmentVars = `// Environment Variables Setup

// .env.local (development)
DATABASE_URL=postgresql://localhost:5432/mydb
NEXTAUTH_SECRET=your-secret-here
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3001

// .env.production (production)
DATABASE_URL=postgresql://prod-server:5432/mydb
NEXTAUTH_SECRET=production-secret
NEXTAUTH_URL=https://example.com
NEXT_PUBLIC_API_URL=https://api.example.com

// Accessing environment variables
// Server-side (any prefix)
const dbUrl = process.env.DATABASE_URL;
const secret = process.env.NEXTAUTH_SECRET;

// Client-side (NEXT_PUBLIC_ prefix only)
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// next.config.js - Environment variables
module.exports = &#123;
  env: &#123;
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  &#125;,
  // Or use built-in support (recommended)
&#125;;

// Vercel deployment
// 1. Go to Project Settings > Environment Variables
// 2. Add variables for Production/Preview/Development
// 3. Redeploy to apply changes

// Docker deployment
// Use docker-compose.yml or -e flags
services:
  nextjs:
    environment:
      - DATABASE_URL=$&#123;DATABASE_URL&#125;
      - NEXTAUTH_SECRET=$&#123;NEXTAUTH_SECRET&#125;`;
    this.cicd = `// CI/CD Pipeline Examples

// GitHub Actions - .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build
        run: npm run build
        env:
          DATABASE_URL: $&#123;&#123; secrets.DATABASE_URL &#125;&#125;
          NEXTAUTH_SECRET: $&#123;&#123; secrets.NEXTAUTH_SECRET &#125;&#125;
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: $&#123;&#123; secrets.VERCEL_TOKEN &#125;&#125;
          vercel-org-id: $&#123;&#123; secrets.ORG_ID &#125;&#125;
          vercel-project-id: $&#123;&#123; secrets.PROJECT_ID &#125;&#125;
          vercel-args: '--prod'

// GitLab CI - .gitlab-ci.yml
stages:
  - test
  - build
  - deploy

test:
  stage: test
  script:
    - npm ci
    - npm test

build:
  stage: build
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - .next/
      - public/

deploy:
  stage: deploy
  script:
    - npm install -g vercel
    - vercel --token=$VERCEL_TOKEN --prod
  only:
    - main`;
    this.monitoring = `// Monitoring and Logging

// 1. Vercel Analytics
// app/layout.tsx
import &#123; Analytics &#125; from '@vercel/analytics/react';

export default function RootLayout(&#123; children &#125;) &#123;
  return (
    <html>
      <body>
        &#123;children&#125;
        <Analytics />
      </body>
    </html>
  );
&#125;

// 2. Sentry for Error Tracking
// sentry.client.config.js
import * as Sentry from '@sentry/nextjs';

Sentry.init(&#123;
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
&#125;);

// 3. Custom Logging
// lib/logger.ts
export function log(level: string, message: string, data?: any) &#123;
  const logData = &#123;
    timestamp: new Date().toISOString(),
    level,
    message,
    data,
  &#125;;
  
  // Send to logging service
  fetch('/api/logs', &#123;
    method: 'POST',
    body: JSON.stringify(logData),
  &#125;);
  
  console.log(logData);
&#125;

// 4. Health Check Endpoint
// app/api/health/route.ts
export async function GET() &#123;
  return Response.json(&#123;
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  &#125;);
&#125;`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function NextjsDeploymentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NextjsDeploymentComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NextjsDeploymentComponent, selectors: [["app-nextjs-deployment"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 192, vars: 8, consts: [[1, "container"], ["label", "Vercel"], [1, "tab-content"], [1, "info-box"], [1, "language-tsx"], ["label", "Docker"], ["label", "Static Export"], ["label", "Self-Hosting"], ["label", "Nginx"], ["label", "Environment Variables"], ["label", "CI/CD"], ["label", "Monitoring"]], template: function NextjsDeploymentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Next.js Deployment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Deploy Next.js applications to Vercel, Docker, static hosting, or your own infrastructure with various configuration options.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "Vercel Deployment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "Vercel");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " is the recommended platform for Next.js, offering zero-config deployment.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "Zero configuration required");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "Automatic HTTPS and CDN");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li");
        \u0275\u0275text(21, "Git integration with auto-deploy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275text(23, "Preview deployments for PRs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "li");
        \u0275\u0275text(25, "Instant rollbacks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "li");
        \u0275\u0275text(27, "Global edge network");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "pre")(29, "code", 4);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(31, "mat-tab", 5)(32, "div", 2)(33, "h2");
        \u0275\u0275text(34, "Docker Deployment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 3)(36, "p");
        \u0275\u0275text(37, "Containerize your Next.js application with Docker for consistent deployments.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "ul")(39, "li");
        \u0275\u0275text(40, "Consistent environment across deployments");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "li");
        \u0275\u0275text(42, "Multi-stage builds for optimization");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li");
        \u0275\u0275text(44, "Standalone output mode");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "li");
        \u0275\u0275text(46, "Docker Compose support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "li");
        \u0275\u0275text(48, "Easy scaling with Kubernetes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "li");
        \u0275\u0275text(50, "Works with any cloud provider");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(51, "pre")(52, "code", 4);
        \u0275\u0275text(53);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(54, "mat-tab", 6)(55, "div", 2)(56, "h2");
        \u0275\u0275text(57, "Static Export");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 3)(59, "p");
        \u0275\u0275text(60, "Export Next.js as static HTML for hosting on any static hosting service.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "ul")(62, "li");
        \u0275\u0275text(63, "Deploy to GitHub Pages, Netlify, S3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "li");
        \u0275\u0275text(65, "No server required");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "li");
        \u0275\u0275text(67, "Ultra-fast loading");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "li");
        \u0275\u0275text(69, "No API routes or SSR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "li");
        \u0275\u0275text(71, "Perfect for documentation sites");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "li");
        \u0275\u0275text(73, "generateStaticParams required for dynamic routes");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(74, "pre")(75, "code", 4);
        \u0275\u0275text(76);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(77, "mat-tab", 7)(78, "div", 2)(79, "h2");
        \u0275\u0275text(80, "Self-Hosting with Node.js");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "div", 3)(82, "p");
        \u0275\u0275text(83, "Host Next.js on your own servers with Node.js.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "ul")(85, "li");
        \u0275\u0275text(86, "Full control over infrastructure");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "li");
        \u0275\u0275text(88, "Custom server configuration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "li");
        \u0275\u0275text(90, "Use PM2 for process management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "li");
        \u0275\u0275text(92, "Works with any VPS or cloud server");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "li");
        \u0275\u0275text(94, "Supports all Next.js features");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "li");
        \u0275\u0275text(96, "Requires Node.js runtime");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(97, "pre")(98, "code", 4);
        \u0275\u0275text(99);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(100, "mat-tab", 8)(101, "div", 2)(102, "h2");
        \u0275\u0275text(103, "Nginx Reverse Proxy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "div", 3)(105, "p");
        \u0275\u0275text(106, "Configure Nginx as a reverse proxy for Next.js with SSL and caching.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "ul")(108, "li");
        \u0275\u0275text(109, "HTTPS with Let's Encrypt");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "li");
        \u0275\u0275text(111, "Gzip compression");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "li");
        \u0275\u0275text(113, "Security headers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "li");
        \u0275\u0275text(115, "Static file caching");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "li");
        \u0275\u0275text(117, "Load balancing support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "li");
        \u0275\u0275text(119, "WebSocket support");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(120, "pre")(121, "code", 4);
        \u0275\u0275text(122);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(123, "mat-tab", 9)(124, "div", 2)(125, "h2");
        \u0275\u0275text(126, "Environment Setup");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "div", 3)(128, "p");
        \u0275\u0275text(129, "Configure environment variables for different deployment environments.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "ul")(131, "li");
        \u0275\u0275text(132, ".env.local for development");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "li");
        \u0275\u0275text(134, ".env.production for production");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "li");
        \u0275\u0275text(136, "NEXT_PUBLIC_ prefix for client-side vars");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "li");
        \u0275\u0275text(138, "Secure secrets on server only");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "li");
        \u0275\u0275text(140, "Platform-specific configuration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "li");
        \u0275\u0275text(142, "Environment-specific builds");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(143, "pre")(144, "code", 4);
        \u0275\u0275text(145);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(146, "mat-tab", 10)(147, "div", 2)(148, "h2");
        \u0275\u0275text(149, "CI/CD Pipelines");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "div", 3)(151, "p");
        \u0275\u0275text(152, "Automate testing and deployment with CI/CD pipelines.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "ul")(154, "li");
        \u0275\u0275text(155, "GitHub Actions integration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "li");
        \u0275\u0275text(157, "GitLab CI support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "li");
        \u0275\u0275text(159, "Automated testing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "li");
        \u0275\u0275text(161, "Build caching");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "li");
        \u0275\u0275text(163, "Deployment automation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "li");
        \u0275\u0275text(165, "Environment management");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(166, "pre")(167, "code", 4);
        \u0275\u0275text(168);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(169, "mat-tab", 11)(170, "div", 2)(171, "h2");
        \u0275\u0275text(172, "Monitoring & Logging");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(173, "div", 3)(174, "p");
        \u0275\u0275text(175, "Monitor application health and track errors in production.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "ul")(177, "li");
        \u0275\u0275text(178, "Vercel Analytics for performance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(179, "li");
        \u0275\u0275text(180, "Sentry for error tracking");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(181, "li");
        \u0275\u0275text(182, "Custom logging solutions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "li");
        \u0275\u0275text(184, "Health check endpoints");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(185, "li");
        \u0275\u0275text(186, "Uptime monitoring");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "li");
        \u0275\u0275text(188, "Performance metrics");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(189, "pre")(190, "code", 4);
        \u0275\u0275text(191);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(30);
        \u0275\u0275textInterpolate(ctx.vercelDeployment);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.dockerDeployment);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.staticExport);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.selfHosting);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.nginx);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.environmentVars);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.cicd);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.monitoring);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #000000;\n  margin-bottom: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #282c34;\n  margin-top: 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  border-left: 4px solid #000000;\n  padding: 15px;\n  margin: 15px 0;\n  border-radius: 4px;\n}\n.info-box.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-left-color: #000000;\n}\n.info-box.warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #000000;\n}\n.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #000000;\n}\n.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding-left: 20px;\n}\n.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #e0e0e0;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\npre[_ngcontent-%COMP%] {\n  background: #282c34;\n  color: #ffffff;\n  padding: 15px;\n  border-radius: 4px;\n  overflow-x: auto;\n  margin: 15px 0;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: 14px;\n}\np[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  color: #333;\n}\n/*# sourceMappingURL=nextjs-deployment.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NextjsDeploymentComponent, { className: "NextjsDeploymentComponent", filePath: "src\\app\\components\\nextjs\\nextjs-deployment\\nextjs-deployment.component.ts", lineNumber: 13 });
})();
export {
  NextjsDeploymentComponent
};
//# sourceMappingURL=chunk-IYN7F4T5.js.map
