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

// src/app/components/angular/learn-gettingstarted/learn-gettingstarted.component.ts
var LearnGettingstartedComponent = class _LearnGettingstartedComponent {
  constructor() {
    this.prerequisites = `Prerequisites for Angular Development

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
   ng version       # Verify installation`;
    this.installation = `Installing Angular CLI

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
#   OS: windows/darwin/linux`;
    this.createApp = `Creating a New Angular Application

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
ng new my-app --dry-run`;
    this.projectStructure = `Angular Project Structure

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
- app.config.ts: Application providers and configuration`;
    this.basicCommands = `Essential Angular CLI Commands

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
ng add @angular/pwa        # Add PWA support`;
    this.runningApp = `Running Your Angular Application

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
npm run lint       # Run linter`;
    this.firstComponent = `Creating Your First Component

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

# For standalone components, import in app.config.ts or parent component`;
    this.commonIssues = `Common Issues and Solutions

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
   # Check file watchers limit (Linux/Mac)`;
    this.packageJson = `Understanding package.json

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
ng update @angular/cli @angular/core`;
  }
  static {
    this.\u0275fac = function LearnGettingstartedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LearnGettingstartedComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LearnGettingstartedComponent, selectors: [["app-learn-gettingstarted"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 195, vars: 9, consts: [[1, "container"], ["label", "Prerequisites"], [1, "tab-content"], [1, "info-box"], [1, "language-bash"], ["label", "Installation"], ["label", "Create App"], ["label", "Project Structure"], ["label", "Basic Commands"], ["label", "Running App"], ["label", "First Component"], [1, "language-typescript"], ["label", "package.json"], [1, "language-json"], ["label", "Troubleshooting"]], template: function LearnGettingstartedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Getting Started with Angular");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Learn how to set up your development environment and create your first Angular application.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "Prerequisites");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "Before starting");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " with Angular, ensure you have the required tools and knowledge.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "Node.js 18.13 or newer (LTS recommended)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "npm or yarn package manager");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li");
        \u0275\u0275text(21, "Code editor (VS Code recommended)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275text(23, "Basic JavaScript/TypeScript knowledge");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "pre")(25, "code", 4);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "mat-tab", 5)(28, "div", 2)(29, "h2");
        \u0275\u0275text(30, "Installing Angular CLI");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 3)(32, "p")(33, "strong");
        \u0275\u0275text(34, "Angular CLI");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " is the command-line interface tool for Angular development.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "ul")(37, "li");
        \u0275\u0275text(38, "Install globally using npm");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "li");
        \u0275\u0275text(40, "Provides ng commands");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "li");
        \u0275\u0275text(42, "Generates components, services, etc.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li");
        \u0275\u0275text(44, "Manages build and development server");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "pre")(46, "code", 4);
        \u0275\u0275text(47);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(48, "mat-tab", 6)(49, "div", 2)(50, "h2");
        \u0275\u0275text(51, "Creating a New Application");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 3)(53, "p")(54, "strong");
        \u0275\u0275text(55, "ng new");
        \u0275\u0275elementEnd();
        \u0275\u0275text(56, " command creates a new Angular workspace and application.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "ul")(58, "li");
        \u0275\u0275text(59, "Interactive prompts for configuration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "li");
        \u0275\u0275text(61, "Choose routing and styling options");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "li");
        \u0275\u0275text(63, "Generates complete project structure");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "li");
        \u0275\u0275text(65, "Installs dependencies automatically");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(66, "pre")(67, "code", 4);
        \u0275\u0275text(68);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(69, "mat-tab", 7)(70, "div", 2)(71, "h2");
        \u0275\u0275text(72, "Project Structure");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 3)(74, "p")(75, "strong");
        \u0275\u0275text(76, "Understanding");
        \u0275\u0275elementEnd();
        \u0275\u0275text(77, " the Angular project structure helps you navigate and organize your code.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "ul")(79, "li");
        \u0275\u0275text(80, "src/ - Source code directory");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "li");
        \u0275\u0275text(82, "app/ - Application components and logic");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "li");
        \u0275\u0275text(84, "angular.json - Angular CLI configuration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "li");
        \u0275\u0275text(86, "tsconfig.json - TypeScript configuration");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(87, "pre")(88, "code", 4);
        \u0275\u0275text(89);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(90, "mat-tab", 8)(91, "div", 2)(92, "h2");
        \u0275\u0275text(93, "Essential CLI Commands");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "div", 3)(95, "p")(96, "strong");
        \u0275\u0275text(97, "Angular CLI");
        \u0275\u0275elementEnd();
        \u0275\u0275text(98, " provides commands for all development tasks.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "ul")(100, "li");
        \u0275\u0275text(101, "ng serve - Start development server");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "li");
        \u0275\u0275text(103, "ng generate - Create components/services");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "li");
        \u0275\u0275text(105, "ng build - Build for production");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "li");
        \u0275\u0275text(107, "ng test - Run unit tests");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(108, "pre")(109, "code", 4);
        \u0275\u0275text(110);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(111, "mat-tab", 9)(112, "div", 2)(113, "h2");
        \u0275\u0275text(114, "Running Your Application");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "div", 3)(116, "p")(117, "strong");
        \u0275\u0275text(118, "Development server");
        \u0275\u0275elementEnd();
        \u0275\u0275text(119, " provides live reload and debugging capabilities.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "ul")(121, "li");
        \u0275\u0275text(122, "Automatic reload on file changes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "li");
        \u0275\u0275text(124, "Source maps for debugging");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "li");
        \u0275\u0275text(126, "Error messages in browser");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "li");
        \u0275\u0275text(128, "Multiple serving options");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(129, "pre")(130, "code", 4);
        \u0275\u0275text(131);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(132, "mat-tab", 10)(133, "div", 2)(134, "h2");
        \u0275\u0275text(135, "Creating Your First Component");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "div", 3)(137, "p")(138, "strong");
        \u0275\u0275text(139, "Components");
        \u0275\u0275elementEnd();
        \u0275\u0275text(140, " are the building blocks of Angular applications.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "ul")(142, "li");
        \u0275\u0275text(143, "Use ng generate component command");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "li");
        \u0275\u0275text(145, "Creates TypeScript, HTML, CSS, and test files");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "li");
        \u0275\u0275text(147, "Standalone components by default (Angular 18+)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "li");
        \u0275\u0275text(149, "Use selector to include in templates");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(150, "pre")(151, "code", 11);
        \u0275\u0275text(152);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(153, "mat-tab", 12)(154, "div", 2)(155, "h2");
        \u0275\u0275text(156, "Understanding package.json");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "div", 3)(158, "p")(159, "strong");
        \u0275\u0275text(160, "package.json");
        \u0275\u0275elementEnd();
        \u0275\u0275text(161, " defines project dependencies and npm scripts.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "ul")(163, "li");
        \u0275\u0275text(164, "Dependencies for runtime");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "li");
        \u0275\u0275text(166, "DevDependencies for development");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "li");
        \u0275\u0275text(168, "Scripts for common tasks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(169, "li");
        \u0275\u0275text(170, "Project metadata");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(171, "pre")(172, "code", 13);
        \u0275\u0275text(173);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(174, "mat-tab", 14)(175, "div", 2)(176, "h2");
        \u0275\u0275text(177, "Common Issues and Solutions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "div", 3)(179, "p")(180, "strong");
        \u0275\u0275text(181, "Troubleshooting");
        \u0275\u0275elementEnd();
        \u0275\u0275text(182, " common Angular development issues.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "ul")(184, "li");
        \u0275\u0275text(185, "Port conflicts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(186, "li");
        \u0275\u0275text(187, "Node version issues");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(188, "li");
        \u0275\u0275text(189, "Module not found errors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(190, "li");
        \u0275\u0275text(191, "Build and compilation errors");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(192, "pre")(193, "code", 4);
        \u0275\u0275text(194);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(26);
        \u0275\u0275textInterpolate(ctx.prerequisites);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.installation);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.createApp);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.projectStructure);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.basicCommands);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.runningApp);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.firstComponent);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.packageJson);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.commonIssues);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 0.5rem;\n}\n.container[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 2rem;\n  font-size: 1.1rem;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 1.5rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-left: 4px solid #dd0031;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  border-radius: 4px;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  color: #333;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0 1.5rem;\n  color: #666;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background: #282c34;\n  border-radius: 8px;\n  padding: 1.5rem;\n  overflow-x: auto;\n  margin: 1rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #abb2bf;\n  font-family:\n    "Fira Code",\n    "Consolas",\n    monospace;\n  font-size: 0.9rem;\n  line-height: 1.6;\n}\n/*# sourceMappingURL=learn-gettingstarted.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LearnGettingstartedComponent, { className: "LearnGettingstartedComponent", filePath: "src\\app\\components\\angular\\learn-gettingstarted\\learn-gettingstarted.component.ts", lineNumber: 11 });
})();
export {
  LearnGettingstartedComponent
};
//# sourceMappingURL=chunk-UOYJDEFU.js.map
