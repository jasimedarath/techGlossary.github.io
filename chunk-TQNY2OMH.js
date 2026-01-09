import{b as m,c as d,d as c}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as i,da as s,gb as n,hb as e,tb as t,ub as o,yb as p}from"./chunk-WGQ2ELTG.js";var S=(()=>{class l{constructor(){this.vercelDeployment=`// Deploying to Vercel (recommended)

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
// - Preview deployments`,this.dockerDeployment=`// Docker Deployment

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
    restart: unless-stopped`,this.staticExport=`// Static Export (for static hosting)

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
&#125;`,this.selfHosting=`// Self-Hosting with Node.js

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
// pm2 startup`,this.nginx=`// Nginx Reverse Proxy Configuration

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
&#125;`,this.environmentVars=`// Environment Variables Setup

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
      - NEXTAUTH_SECRET=$&#123;NEXTAUTH_SECRET&#125;`,this.cicd=`// CI/CD Pipeline Examples

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
    - main`,this.monitoring=`// Monitoring and Logging

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
&#125;`}ngAfterViewChecked(){Prism.highlightAll()}static{this.\u0275fac=function(a){return new(a||l)}}static{this.\u0275cmp=s({type:l,selectors:[["app-nextjs-deployment"]],standalone:!0,features:[p],decls:192,vars:8,consts:[[1,"container"],["label","Vercel"],[1,"tab-content"],[1,"info-box"],[1,"language-tsx"],["label","Docker"],["label","Static Export"],["label","Self-Hosting"],["label","Nginx"],["label","Environment Variables"],["label","CI/CD"],["label","Monitoring"]],template:function(a,r){a&1&&(n(0,"div",0)(1,"h1"),t(2,"Next.js Deployment"),e(),n(3,"p"),t(4,"Deploy Next.js applications to Vercel, Docker, static hosting, or your own infrastructure with various configuration options."),e(),n(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),t(9,"Vercel Deployment"),e(),n(10,"div",3)(11,"p")(12,"strong"),t(13,"Vercel"),e(),t(14," is the recommended platform for Next.js, offering zero-config deployment."),e(),n(15,"ul")(16,"li"),t(17,"Zero configuration required"),e(),n(18,"li"),t(19,"Automatic HTTPS and CDN"),e(),n(20,"li"),t(21,"Git integration with auto-deploy"),e(),n(22,"li"),t(23,"Preview deployments for PRs"),e(),n(24,"li"),t(25,"Instant rollbacks"),e(),n(26,"li"),t(27,"Global edge network"),e()()(),n(28,"pre")(29,"code",4),t(30),e()()()(),n(31,"mat-tab",5)(32,"div",2)(33,"h2"),t(34,"Docker Deployment"),e(),n(35,"div",3)(36,"p"),t(37,"Containerize your Next.js application with Docker for consistent deployments."),e(),n(38,"ul")(39,"li"),t(40,"Consistent environment across deployments"),e(),n(41,"li"),t(42,"Multi-stage builds for optimization"),e(),n(43,"li"),t(44,"Standalone output mode"),e(),n(45,"li"),t(46,"Docker Compose support"),e(),n(47,"li"),t(48,"Easy scaling with Kubernetes"),e(),n(49,"li"),t(50,"Works with any cloud provider"),e()()(),n(51,"pre")(52,"code",4),t(53),e()()()(),n(54,"mat-tab",6)(55,"div",2)(56,"h2"),t(57,"Static Export"),e(),n(58,"div",3)(59,"p"),t(60,"Export Next.js as static HTML for hosting on any static hosting service."),e(),n(61,"ul")(62,"li"),t(63,"Deploy to GitHub Pages, Netlify, S3"),e(),n(64,"li"),t(65,"No server required"),e(),n(66,"li"),t(67,"Ultra-fast loading"),e(),n(68,"li"),t(69,"No API routes or SSR"),e(),n(70,"li"),t(71,"Perfect for documentation sites"),e(),n(72,"li"),t(73,"generateStaticParams required for dynamic routes"),e()()(),n(74,"pre")(75,"code",4),t(76),e()()()(),n(77,"mat-tab",7)(78,"div",2)(79,"h2"),t(80,"Self-Hosting with Node.js"),e(),n(81,"div",3)(82,"p"),t(83,"Host Next.js on your own servers with Node.js."),e(),n(84,"ul")(85,"li"),t(86,"Full control over infrastructure"),e(),n(87,"li"),t(88,"Custom server configuration"),e(),n(89,"li"),t(90,"Use PM2 for process management"),e(),n(91,"li"),t(92,"Works with any VPS or cloud server"),e(),n(93,"li"),t(94,"Supports all Next.js features"),e(),n(95,"li"),t(96,"Requires Node.js runtime"),e()()(),n(97,"pre")(98,"code",4),t(99),e()()()(),n(100,"mat-tab",8)(101,"div",2)(102,"h2"),t(103,"Nginx Reverse Proxy"),e(),n(104,"div",3)(105,"p"),t(106,"Configure Nginx as a reverse proxy for Next.js with SSL and caching."),e(),n(107,"ul")(108,"li"),t(109,"HTTPS with Let's Encrypt"),e(),n(110,"li"),t(111,"Gzip compression"),e(),n(112,"li"),t(113,"Security headers"),e(),n(114,"li"),t(115,"Static file caching"),e(),n(116,"li"),t(117,"Load balancing support"),e(),n(118,"li"),t(119,"WebSocket support"),e()()(),n(120,"pre")(121,"code",4),t(122),e()()()(),n(123,"mat-tab",9)(124,"div",2)(125,"h2"),t(126,"Environment Setup"),e(),n(127,"div",3)(128,"p"),t(129,"Configure environment variables for different deployment environments."),e(),n(130,"ul")(131,"li"),t(132,".env.local for development"),e(),n(133,"li"),t(134,".env.production for production"),e(),n(135,"li"),t(136,"NEXT_PUBLIC_ prefix for client-side vars"),e(),n(137,"li"),t(138,"Secure secrets on server only"),e(),n(139,"li"),t(140,"Platform-specific configuration"),e(),n(141,"li"),t(142,"Environment-specific builds"),e()()(),n(143,"pre")(144,"code",4),t(145),e()()()(),n(146,"mat-tab",10)(147,"div",2)(148,"h2"),t(149,"CI/CD Pipelines"),e(),n(150,"div",3)(151,"p"),t(152,"Automate testing and deployment with CI/CD pipelines."),e(),n(153,"ul")(154,"li"),t(155,"GitHub Actions integration"),e(),n(156,"li"),t(157,"GitLab CI support"),e(),n(158,"li"),t(159,"Automated testing"),e(),n(160,"li"),t(161,"Build caching"),e(),n(162,"li"),t(163,"Deployment automation"),e(),n(164,"li"),t(165,"Environment management"),e()()(),n(166,"pre")(167,"code",4),t(168),e()()()(),n(169,"mat-tab",11)(170,"div",2)(171,"h2"),t(172,"Monitoring & Logging"),e(),n(173,"div",3)(174,"p"),t(175,"Monitor application health and track errors in production."),e(),n(176,"ul")(177,"li"),t(178,"Vercel Analytics for performance"),e(),n(179,"li"),t(180,"Sentry for error tracking"),e(),n(181,"li"),t(182,"Custom logging solutions"),e(),n(183,"li"),t(184,"Health check endpoints"),e(),n(185,"li"),t(186,"Uptime monitoring"),e(),n(187,"li"),t(188,"Performance metrics"),e()()(),n(189,"pre")(190,"code",4),t(191),e()()()()()()),a&2&&(i(30),o(r.vercelDeployment),i(23),o(r.dockerDeployment),i(23),o(r.staticExport),i(23),o(r.selfHosting),i(23),o(r.nginx),i(23),o(r.environmentVars),i(23),o(r.cicd),i(23),o(r.monitoring))},dependencies:[c,m,d],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#000;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#f0f0f0;border-left:4px solid #000000;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#000}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#000}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#000}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#e0e0e0;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;color:#fff;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:14px}p[_ngcontent-%COMP%]{line-height:1.6;color:#333}"]})}}return l})();export{S as NextjsDeploymentComponent};
