import{b as p,c as d,d as c}from"./chunk-GNZ74KMC.js";import"./chunk-XAZLOLJU.js";import"./chunk-SZTU5CXE.js";import{Ia as i,da as s,hb as n,ib as e,ub as t,vb as o,zb as m}from"./chunk-KMNIY7WT.js";var h=(()=>{class r{constructor(){this.prerequisites=`Prerequisites for Angular Development

1. Node.js and npm
   - Node.js version 18.13 or newer (LTS recommended)
   - npm (comes with Node.js) or yarn
   - Download from: https://nodejs.org/

2. Code Editor
   - Visual Studio Code (recommended)
   - Extensions: Angular Language Service, ESLint, Prettier

3. Basic Knowledge
   - HTML, CSS, JavaScript
   - TypeScript fundamentals
   - Command line basics

4. Check Installations:
   node --version   # Should show v18.13+
   npm --version    # Should show 8.0+

5. Angular CLI
   npm install -g @angular/cli
   ng version       # Verify installation`,this.installation=`Installing Angular CLI

# Install Angular CLI globally
npm install -g @angular/cli

# Or using yarn
yarn global add @angular/cli

# Verify installation
ng version

# Update to latest version
npm update -g @angular/cli

# Check for updates
ng update

# Output will show:
#   Angular CLI: 18.x.x
#   Node: 18.x.x
#   Package Manager: npm 10.x.x
#   OS: windows/darwin/linux`,this.createApp=`Creating a New Angular Application

# Basic app creation
ng new my-angular-app

# You'll be prompted:
# ? Would you like to add Angular routing? (y/N) y
# ? Which stylesheet format would you like to use?
#   CSS
#   SCSS   (recommended)
#   Sass
#   Less

# Create with specific options (skip prompts)
ng new my-app --routing --style=scss --skip-git

# Additional options:
ng new my-app --routing --style=scss --skip-tests --strict

# Create with standalone components (Angular 14+)
ng new my-app --standalone --routing --style=scss

# Minimal setup (no routing, no tests)
ng new my-app --minimal --style=css

# Dry run (see what would be created)
ng new my-app --dry-run`,this.projectStructure=`Angular Project Structure

my-angular-app/
\u251C\u2500\u2500 node_modules/          # Dependencies
\u251C\u2500\u2500 src/
\u2502   \u251C\u2500\u2500 app/
\u2502   \u2502   \u251C\u2500\u2500 app.component.ts      # Root component
\u2502   \u2502   \u251C\u2500\u2500 app.component.html    # Root template
\u2502   \u2502   \u251C\u2500\u2500 app.component.scss    # Root styles
\u2502   \u2502   \u251C\u2500\u2500 app.component.spec.ts # Root tests
\u2502   \u2502   \u251C\u2500\u2500 app.config.ts         # App configuration
\u2502   \u2502   \u2514\u2500\u2500 app.routes.ts         # Route definitions
\u2502   \u251C\u2500\u2500 assets/            # Static files (images, fonts)
\u2502   \u251C\u2500\u2500 index.html         # Main HTML file
\u2502   \u251C\u2500\u2500 main.ts            # Entry point
\u2502   \u2514\u2500\u2500 styles.scss        # Global styles
\u251C\u2500\u2500 public/                # Public assets
\u251C\u2500\u2500 angular.json           # Angular CLI configuration
\u251C\u2500\u2500 package.json           # npm dependencies & scripts
\u251C\u2500\u2500 tsconfig.json          # TypeScript configuration
\u251C\u2500\u2500 tsconfig.app.json      # App-specific TS config
\u2514\u2500\u2500 README.md              # Project documentation

Key Files:
- angular.json: Project configuration (build, serve, test)
- package.json: Dependencies and npm scripts
- tsconfig.json: TypeScript compiler options
- main.ts: Bootstraps the application
- app.config.ts: Application providers and configuration`,this.basicCommands=`Essential Angular CLI Commands

# Development Server
ng serve                    # Start dev server (http://localhost:4200)
ng serve --open            # Open browser automatically
ng serve --port 4300       # Use different port
ng serve --host 0.0.0.0    # Make accessible on network

# Generate Components
ng generate component user           # or ng g c user
ng generate component user --skip-tests
ng generate component user --standalone
ng generate component admin/dashboard  # In subfolder

# Generate Services
ng generate service user             # or ng g s user
ng generate service services/auth

# Generate Other Elements
ng g module admin                    # Module
ng g directive highlight             # Directive
ng g pipe custom                     # Pipe
ng g guard auth                      # Guard
ng g interface user                  # Interface
ng g class models/user               # Class
ng g enum status                     # Enum

# Build for Production
ng build                    # Build in dist/
ng build --configuration production
ng build --prod            # Optimized production build
ng build --base-href /app/ # Set base path

# Testing
ng test                    # Run unit tests
ng test --code-coverage    # With coverage report
ng e2e                     # Run e2e tests

# Linting & Formatting
ng lint                    # Run linter

# Other Useful Commands
ng version                 # Show Angular versions
ng update                  # Check for updates
ng add @angular/material   # Add Angular Material
ng add @angular/pwa        # Add PWA support`,this.runningApp=`Running Your Angular Application

# Navigate to project directory
cd my-angular-app

# Install dependencies (if not already)
npm install

# Start development server
ng serve

# Development server will start at:
# http://localhost:4200

# The application will automatically reload on file changes

# Open in browser
ng serve --open

# Use different port
ng serve --port 4300

# Enable HTTPS
ng serve --ssl

# Production build
ng build --configuration production

# Serve production build locally
npm install -g http-server
http-server dist/my-angular-app/browser

# Common npm scripts (in package.json):
npm start          # Same as ng serve
npm run build      # Build production
npm test           # Run tests
npm run lint       # Run linter`,this.firstComponent=`Creating Your First Component

# Generate a new component
ng generate component hello-world

# This creates:
# src/app/hello-world/
#   \u251C\u2500\u2500 hello-world.component.ts
#   \u251C\u2500\u2500 hello-world.component.html
#   \u251C\u2500\u2500 hello-world.component.scss
#   \u2514\u2500\u2500 hello-world.component.spec.ts

# hello-world.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.scss'
})
export class HelloWorldComponent {
  title = 'Hello, Angular!';
  message = 'Welcome to your first component';

  onClick() {
    alert('Button clicked!');
  }
}

# hello-world.component.html
<div class="container">
  <h1>{{ title }}</h1>
  <p>{{ message }}</p>
  <button (click)="onClick()">Click Me</button>
</div>

# Use in app.component.html
<app-hello-world></app-hello-world>

# For standalone components, import in app.config.ts or parent component`,this.commonIssues=`Common Issues and Solutions

1. Port Already in Use
   Error: Port 4200 is already in use
   Solution:
   ng serve --port 4300
   # Or kill process using port 4200

2. Node/npm Version Issues
   Error: Node version not supported
   Solution:
   # Update Node.js to LTS version
   # Check: node --version

3. Module Not Found
   Error: Cannot find module '@angular/core'
   Solution:
   npm install
   # Or: npm ci (clean install)

4. Compilation Errors
   Error: Property does not exist on type
   Solution:
   # Check TypeScript strict mode in tsconfig.json
   # Add proper type annotations

5. Style Not Applied
   Solution:
   # Check styleUrl path in component
   # Verify SCSS/CSS file exists
   # Check global styles in styles.scss

6. Routing Not Working
   Solution:
   # Verify app.routes.ts configuration
   # Check provideRouter in app.config.ts
   # Use routerLink instead of href

7. Build Errors
   Solution:
   # Clear cache
   rm -rf node_modules package-lock.json
   npm install
   
   # Clear Angular cache
   ng cache clean

8. Hot Reload Not Working
   Solution:
   # Restart ng serve
   # Check file watchers limit (Linux/Mac)`,this.packageJson=`Understanding package.json

{
  "name": "my-angular-app",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "dependencies": {
    "@angular/animations": "^18.0.0",
    "@angular/common": "^18.0.0",
    "@angular/compiler": "^18.0.0",
    "@angular/core": "^18.0.0",
    "@angular/forms": "^18.0.0",
    "@angular/platform-browser": "^18.0.0",
    "@angular/platform-browser-dynamic": "^18.0.0",
    "@angular/router": "^18.0.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.6.0",
    "zone.js": "~0.14.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^18.0.0",
    "@angular/cli": "^18.0.0",
    "@angular/compiler-cli": "^18.0.0",
    "typescript": "~5.4.0"
  }
}

# Install dependencies
npm install

# Add new package
npm install package-name
npm install -D package-name  # Dev dependency

# Update packages
npm update
ng update @angular/cli @angular/core`}static{this.\u0275fac=function(l){return new(l||r)}}static{this.\u0275cmp=s({type:r,selectors:[["app-learn-gettingstarted"]],standalone:!0,features:[m],decls:195,vars:9,consts:[[1,"container"],["label","Prerequisites"],[1,"tab-content"],[1,"info-box"],[1,"language-bash"],["label","Installation"],["label","Create App"],["label","Project Structure"],["label","Basic Commands"],["label","Running App"],["label","First Component"],[1,"language-typescript"],["label","package.json"],[1,"language-json"],["label","Troubleshooting"]],template:function(l,a){l&1&&(n(0,"div",0)(1,"h1"),t(2,"Getting Started with Angular"),e(),n(3,"p"),t(4,"Learn how to set up your development environment and create your first Angular application."),e(),n(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),t(9,"Prerequisites"),e(),n(10,"div",3)(11,"p")(12,"strong"),t(13,"Before starting"),e(),t(14," with Angular, ensure you have the required tools and knowledge."),e(),n(15,"ul")(16,"li"),t(17,"Node.js 18.13 or newer (LTS recommended)"),e(),n(18,"li"),t(19,"npm or yarn package manager"),e(),n(20,"li"),t(21,"Code editor (VS Code recommended)"),e(),n(22,"li"),t(23,"Basic JavaScript/TypeScript knowledge"),e()()(),n(24,"pre")(25,"code",4),t(26),e()()()(),n(27,"mat-tab",5)(28,"div",2)(29,"h2"),t(30,"Installing Angular CLI"),e(),n(31,"div",3)(32,"p")(33,"strong"),t(34,"Angular CLI"),e(),t(35," is the command-line interface tool for Angular development."),e(),n(36,"ul")(37,"li"),t(38,"Install globally using npm"),e(),n(39,"li"),t(40,"Provides ng commands"),e(),n(41,"li"),t(42,"Generates components, services, etc."),e(),n(43,"li"),t(44,"Manages build and development server"),e()()(),n(45,"pre")(46,"code",4),t(47),e()()()(),n(48,"mat-tab",6)(49,"div",2)(50,"h2"),t(51,"Creating a New Application"),e(),n(52,"div",3)(53,"p")(54,"strong"),t(55,"ng new"),e(),t(56," command creates a new Angular workspace and application."),e(),n(57,"ul")(58,"li"),t(59,"Interactive prompts for configuration"),e(),n(60,"li"),t(61,"Choose routing and styling options"),e(),n(62,"li"),t(63,"Generates complete project structure"),e(),n(64,"li"),t(65,"Installs dependencies automatically"),e()()(),n(66,"pre")(67,"code",4),t(68),e()()()(),n(69,"mat-tab",7)(70,"div",2)(71,"h2"),t(72,"Project Structure"),e(),n(73,"div",3)(74,"p")(75,"strong"),t(76,"Understanding"),e(),t(77," the Angular project structure helps you navigate and organize your code."),e(),n(78,"ul")(79,"li"),t(80,"src/ - Source code directory"),e(),n(81,"li"),t(82,"app/ - Application components and logic"),e(),n(83,"li"),t(84,"angular.json - Angular CLI configuration"),e(),n(85,"li"),t(86,"tsconfig.json - TypeScript configuration"),e()()(),n(87,"pre")(88,"code",4),t(89),e()()()(),n(90,"mat-tab",8)(91,"div",2)(92,"h2"),t(93,"Essential CLI Commands"),e(),n(94,"div",3)(95,"p")(96,"strong"),t(97,"Angular CLI"),e(),t(98," provides commands for all development tasks."),e(),n(99,"ul")(100,"li"),t(101,"ng serve - Start development server"),e(),n(102,"li"),t(103,"ng generate - Create components/services"),e(),n(104,"li"),t(105,"ng build - Build for production"),e(),n(106,"li"),t(107,"ng test - Run unit tests"),e()()(),n(108,"pre")(109,"code",4),t(110),e()()()(),n(111,"mat-tab",9)(112,"div",2)(113,"h2"),t(114,"Running Your Application"),e(),n(115,"div",3)(116,"p")(117,"strong"),t(118,"Development server"),e(),t(119," provides live reload and debugging capabilities."),e(),n(120,"ul")(121,"li"),t(122,"Automatic reload on file changes"),e(),n(123,"li"),t(124,"Source maps for debugging"),e(),n(125,"li"),t(126,"Error messages in browser"),e(),n(127,"li"),t(128,"Multiple serving options"),e()()(),n(129,"pre")(130,"code",4),t(131),e()()()(),n(132,"mat-tab",10)(133,"div",2)(134,"h2"),t(135,"Creating Your First Component"),e(),n(136,"div",3)(137,"p")(138,"strong"),t(139,"Components"),e(),t(140," are the building blocks of Angular applications."),e(),n(141,"ul")(142,"li"),t(143,"Use ng generate component command"),e(),n(144,"li"),t(145,"Creates TypeScript, HTML, CSS, and test files"),e(),n(146,"li"),t(147,"Standalone components by default (Angular 18+)"),e(),n(148,"li"),t(149,"Use selector to include in templates"),e()()(),n(150,"pre")(151,"code",11),t(152),e()()()(),n(153,"mat-tab",12)(154,"div",2)(155,"h2"),t(156,"Understanding package.json"),e(),n(157,"div",3)(158,"p")(159,"strong"),t(160,"package.json"),e(),t(161," defines project dependencies and npm scripts."),e(),n(162,"ul")(163,"li"),t(164,"Dependencies for runtime"),e(),n(165,"li"),t(166,"DevDependencies for development"),e(),n(167,"li"),t(168,"Scripts for common tasks"),e(),n(169,"li"),t(170,"Project metadata"),e()()(),n(171,"pre")(172,"code",13),t(173),e()()()(),n(174,"mat-tab",14)(175,"div",2)(176,"h2"),t(177,"Common Issues and Solutions"),e(),n(178,"div",3)(179,"p")(180,"strong"),t(181,"Troubleshooting"),e(),t(182," common Angular development issues."),e(),n(183,"ul")(184,"li"),t(185,"Port conflicts"),e(),n(186,"li"),t(187,"Node version issues"),e(),n(188,"li"),t(189,"Module not found errors"),e(),n(190,"li"),t(191,"Build and compilation errors"),e()()(),n(192,"pre")(193,"code",4),t(194),e()()()()()()),l&2&&(i(26),o(a.prerequisites),i(21),o(a.installation),i(21),o(a.createApp),i(21),o(a.projectStructure),i(21),o(a.basicCommands),i(21),o(a.runningApp),i(21),o(a.firstComponent),i(21),o(a.packageJson),i(21),o(a.commonIssues))},dependencies:[c,p,d],styles:[".container[_ngcontent-%COMP%]{padding:2rem;max-width:1200px;margin:0 auto}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#333;margin-bottom:.5rem}.container[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#666;margin-bottom:2rem;font-size:1.1rem}.tab-content[_ngcontent-%COMP%]{padding:1.5rem 0}.tab-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#333;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]{background:#f8f9fa;border-left:4px solid #dd0031;padding:1rem;margin-bottom:1.5rem;border-radius:4px}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:.5rem;color:#333}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:.5rem 0 0 1.5rem;color:#666}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:.25rem 0}.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:#282c34;border-radius:8px;padding:1.5rem;overflow-x:auto;margin:1rem 0}.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#abb2bf;font-family:Fira Code,Consolas,monospace;font-size:.9rem;line-height:1.6}"]})}}return r})();export{h as LearnGettingstartedComponent};
