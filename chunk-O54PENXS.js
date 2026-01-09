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

// src/app/components/react/react-gettingstarted/react-gettingstarted.component.ts
var ReactGettingstartedComponent = class _ReactGettingstartedComponent {
  constructor() {
    this.prerequisites = `Prerequisites for React Development

1. Node.js and npm
   - Node.js version 18.0 or newer (LTS recommended)
   - npm (comes with Node.js) or yarn
   - Download from: https://nodejs.org/

2. Code Editor
   - Visual Studio Code (recommended)
   - Extensions: ES7+ React/Redux/React-Native snippets, Prettier, ESLint

3. Basic Knowledge
   - HTML, CSS, JavaScript (ES6+)
   - Modern JavaScript features (arrow functions, destructuring, modules)
   - Command line basics

4. Check Installations:
   node --version   # Should show v18.0+
   npm --version    # Should show 9.0+

5. Optional Tools
   - Git for version control
   - React Developer Tools (browser extension)
   - Redux DevTools (if using Redux)`;
    this.createReactApp = `Creating React App with Create React App (CRA)

# Create a new React app
npx create-react-app my-react-app

# Navigate to project
cd my-react-app

# Start development server
npm start

# With TypeScript
npx create-react-app my-app --template typescript

# Application will open at http://localhost:3000

# Create React App includes:
# - React, JSX, ES6+ support
# - Development server with hot reload
# - Webpack bundler (pre-configured)
# - Babel transpiler
# - Testing setup with Jest
# - Production build optimization`;
    this.viteSetup = `Creating React App with Vite (Modern & Faster)

# Create with Vite (recommended for new projects)
npm create vite@latest my-react-app -- --template react

# Or with TypeScript
npm create vite@latest my-react-app -- --template react-ts

# Navigate to project
cd my-react-app

# Install dependencies
npm install

# Start development server
npm run dev

# Application will open at http://localhost:5173

# Why Vite?
# - Faster cold start
# - Instant hot module replacement (HMR)
# - Optimized build with Rollup
# - Modern ESM-based dev server
# - Better performance`;
    this.projectStructure = `React Project Structure

my-react-app/
\u251C\u2500\u2500 node_modules/          # Dependencies
\u251C\u2500\u2500 public/
\u2502   \u251C\u2500\u2500 index.html         # HTML template
\u2502   \u2514\u2500\u2500 favicon.ico        # App icon
\u251C\u2500\u2500 src/
\u2502   \u251C\u2500\u2500 components/        # React components
\u2502   \u2502   \u251C\u2500\u2500 Header.jsx
\u2502   \u2502   \u2514\u2500\u2500 Footer.jsx
\u2502   \u251C\u2500\u2500 pages/             # Page components
\u2502   \u2502   \u251C\u2500\u2500 Home.jsx
\u2502   \u2502   \u2514\u2500\u2500 About.jsx
\u2502   \u251C\u2500\u2500 hooks/             # Custom hooks
\u2502   \u2502   \u2514\u2500\u2500 useAuth.js
\u2502   \u251C\u2500\u2500 services/          # API services
\u2502   \u2502   \u2514\u2500\u2500 api.js
\u2502   \u251C\u2500\u2500 utils/             # Utility functions
\u2502   \u2502   \u2514\u2500\u2500 helpers.js
\u2502   \u251C\u2500\u2500 App.jsx            # Root component
\u2502   \u251C\u2500\u2500 App.css            # App styles
\u2502   \u251C\u2500\u2500 index.js           # Entry point
\u2502   \u2514\u2500\u2500 index.css          # Global styles
\u251C\u2500\u2500 package.json           # Dependencies & scripts
\u251C\u2500\u2500 package-lock.json      # Dependency lock file
\u251C\u2500\u2500 .gitignore             # Git ignore rules
\u2514\u2500\u2500 README.md              # Documentation

Vite Structure:
my-react-app/
\u251C\u2500\u2500 src/
\u2502   \u251C\u2500\u2500 App.jsx
\u2502   \u251C\u2500\u2500 main.jsx           # Entry point (Vite)
\u2502   \u2514\u2500\u2500 index.css
\u251C\u2500\u2500 index.html             # In root (Vite)
\u251C\u2500\u2500 vite.config.js         # Vite configuration
\u2514\u2500\u2500 package.json`;
    this.basicCommands = `Essential npm Commands

# Development
npm start              # Start dev server (CRA)
npm run dev            # Start dev server (Vite)

# Building
npm run build          # Create production build
npm run preview        # Preview production build (Vite)

# Testing
npm test               # Run tests
npm test -- --coverage # Run tests with coverage

# Dependencies
npm install            # Install all dependencies
npm install package    # Install specific package
npm install -D package # Install as dev dependency
npm uninstall package  # Remove package
npm update             # Update packages

# Useful Scripts (add to package.json)
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "lint": "eslint src/**/*.{js,jsx}",
  "format": "prettier --write src/**/*.{js,jsx,css}"
}`;
    this.firstComponent = `Creating Your First Component

# Create a new file: src/components/HelloWorld.jsx

import React from 'react';
import './HelloWorld.css';

// Function Component (Modern Approach)
function HelloWorld() {
  const name = 'React Developer';
  const message = 'Welcome to React!';

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="hello-world">
      <h1>{name}</h1>
      <p>{message}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default HelloWorld;

// HelloWorld.css
.hello-world {
  text-align: center;
  padding: 2rem;
}

.hello-world h1 {
  color: #61dafb;
}

// Use in App.jsx
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div className="App">
      <HelloWorld />
    </div>
  );
}

export default App;

// With Props
function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
    </div>
  );
}

// Usage
<Greeting name="John" age={30} />`;
    this.runningApp = `Running Your React Application

# Create React App (CRA)
cd my-react-app
npm install          # Install dependencies (first time)
npm start            # Start development server

# Opens at http://localhost:3000
# Auto-reloads on file changes

# Vite
cd my-react-app
npm install          # Install dependencies
npm run dev          # Start development server

# Opens at http://localhost:5173
# Instant hot module replacement

# Environment Variables
# Create .env file in project root:
REACT_APP_API_URL=https://api.example.com
REACT_APP_API_KEY=your_key_here

# Access in code:
const apiUrl = process.env.REACT_APP_API_URL;

# Vite uses VITE_ prefix:
VITE_API_URL=https://api.example.com

const apiUrl = import.meta.env.VITE_API_URL;

# Production Build
npm run build        # Creates optimized build in build/ or dist/

# Serve production build locally
npx serve -s build   # CRA
npx serve dist       # Vite

# Deploy production build to hosting service`;
    this.packageJson = `Understanding package.json

{
  "name": "my-react-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": ["react-app"]
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": ["last 1 chrome version", "last 1 firefox version"]
  }
}

# Vite package.json
{
  "name": "my-react-app",
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.0"
  }
}

# Common packages to add:
npm install react-router-dom    # Routing
npm install axios               # HTTP client
npm install @tanstack/react-query  # Data fetching
npm install zustand            # State management`;
    this.addingLibraries = `Adding Popular Libraries

# React Router (Navigation)
npm install react-router-dom

import { BrowserRouter, Routes, Route } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>

# Axios (HTTP Requests)
npm install axios

import axios from 'axios';
const response = await axios.get('/api/users');

# React Query (Data Fetching)
npm install @tanstack/react-query

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

# Zustand (State Management)
npm install zustand

import create from 'zustand';
const useStore = create((set) => ({ count: 0 }));

# Styled Components (Styling)
npm install styled-components

import styled from 'styled-components';
const Button = styled.button\`color: blue;\`;

# Tailwind CSS (Utility CSS)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# React Icons
npm install react-icons

import { FaHome } from 'react-icons/fa';`;
    this.commonIssues = `Common Issues and Solutions

1. Port Already in Use
   Error: Port 3000 is already in use
   Solution:
   # Kill process or use different port
   PORT=3001 npm start  # Mac/Linux
   set PORT=3001 && npm start  # Windows

2. Module Not Found
   Error: Cannot find module 'react'
   Solution:
   rm -rf node_modules package-lock.json
   npm install

3. Hooks Rules Violation
   Error: Invalid hook call
   Solution:
   # Only call hooks at top level
   # Only call hooks in function components
   # Check for duplicate React versions

4. JSX Not Transformed
   Error: Unexpected token '<'
   Solution:
   # Ensure file has .jsx extension
   # Or configure babel for .js files

5. Build Fails
   Solution:
   # Clear cache
   npm run build -- --no-cache  # Vite
   
   # Clean install
   rm -rf node_modules package-lock.json
   npm install

6. Hot Reload Not Working
   Solution:
   # Restart dev server
   # Check if file is saved
   # Verify file watchers (Linux)

7. Environment Variables Not Loading
   Solution:
   # Restart dev server after adding .env
   # Use REACT_APP_ prefix (CRA)
   # Use VITE_ prefix (Vite)

8. CSS Not Applied
   Solution:
   # Import CSS file in component
   # Check className (not class)
   # Verify CSS file path`;
    this.nextSteps = `Next Steps After Setup

1. Learn React Fundamentals
   \u2713 Components (Function & Class)
   \u2713 JSX syntax
   \u2713 Props and State
   \u2713 Event handling
   \u2713 Conditional rendering
   \u2713 Lists and keys

2. Master React Hooks
   \u2713 useState - State management
   \u2713 useEffect - Side effects
   \u2713 useContext - Context API
   \u2713 useReducer - Complex state
   \u2713 useMemo & useCallback - Performance
   \u2713 Custom hooks

3. Add Routing
   \u2713 Install React Router
   \u2713 Set up routes
   \u2713 Navigation
   \u2713 Protected routes

4. State Management
   \u2713 Context API (built-in)
   \u2713 Zustand (lightweight)
   \u2713 Redux Toolkit (full-featured)

5. Styling Solutions
   \u2713 CSS Modules
   \u2713 Styled Components
   \u2713 Tailwind CSS
   \u2713 Sass/SCSS

6. Data Fetching
   \u2713 Fetch API
   \u2713 Axios
   \u2713 React Query
   \u2713 SWR

7. Testing
   \u2713 Jest (test runner)
   \u2713 React Testing Library
   \u2713 Unit tests
   \u2713 Integration tests

8. Build & Deploy
   \u2713 Optimize production build
   \u2713 Deploy to Vercel/Netlify
   \u2713 Set up CI/CD

Resources:
- Official docs: react.dev
- React Router: reactrouter.com
- Community: reddit.com/r/reactjs`;
  }
  static {
    this.\u0275fac = function ReactGettingstartedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReactGettingstartedComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReactGettingstartedComponent, selectors: [["app-react-gettingstarted"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 237, vars: 11, consts: [[1, "container"], ["label", "Prerequisites"], [1, "tab-content"], [1, "info-box"], [1, "language-bash"], ["label", "Create React App"], ["label", "Vite Setup"], ["label", "Project Structure"], ["label", "Basic Commands"], ["label", "First Component"], [1, "language-jsx"], ["label", "Running App"], ["label", "package.json"], [1, "language-json"], ["label", "Adding Libraries"], ["label", "Troubleshooting"], ["label", "Next Steps"]], template: function ReactGettingstartedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Getting Started with React");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Learn how to set up your development environment and create your first React application.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "Prerequisites");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "Before starting");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " with React, ensure you have the required tools and knowledge.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "Node.js 18.0 or newer (LTS recommended)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "npm or yarn package manager");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li");
        \u0275\u0275text(21, "Code editor (VS Code recommended)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275text(23, "Modern JavaScript (ES6+) knowledge");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "pre")(25, "code", 4);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "mat-tab", 5)(28, "div", 2)(29, "h2");
        \u0275\u0275text(30, "Create React App (CRA)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 3)(32, "p")(33, "strong");
        \u0275\u0275text(34, "Create React App");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " is the official way to create single-page React applications.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "ul")(37, "li");
        \u0275\u0275text(38, "Zero configuration needed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "li");
        \u0275\u0275text(40, "Pre-configured build setup");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "li");
        \u0275\u0275text(42, "Hot reload development server");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li");
        \u0275\u0275text(44, "Production optimization built-in");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "pre")(46, "code", 4);
        \u0275\u0275text(47);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(48, "mat-tab", 6)(49, "div", 2)(50, "h2");
        \u0275\u0275text(51, "Vite - Modern Build Tool");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 3)(53, "p")(54, "strong");
        \u0275\u0275text(55, "Vite");
        \u0275\u0275elementEnd();
        \u0275\u0275text(56, " is a modern, faster alternative to Create React App.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "ul")(58, "li");
        \u0275\u0275text(59, "Lightning-fast cold start");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "li");
        \u0275\u0275text(61, "Instant hot module replacement");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "li");
        \u0275\u0275text(63, "Optimized production builds");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "li");
        \u0275\u0275text(65, "Modern ESM-based development");
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
        \u0275\u0275text(77, " the React project structure helps organize your code effectively.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "ul")(79, "li");
        \u0275\u0275text(80, "src/ - Source code directory");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "li");
        \u0275\u0275text(82, "public/ - Static assets");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "li");
        \u0275\u0275text(84, "components/ - Reusable components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "li");
        \u0275\u0275text(86, "pages/ - Page components");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(87, "pre")(88, "code", 4);
        \u0275\u0275text(89);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(90, "mat-tab", 8)(91, "div", 2)(92, "h2");
        \u0275\u0275text(93, "Essential npm Commands");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "div", 3)(95, "p")(96, "strong");
        \u0275\u0275text(97, "npm commands");
        \u0275\u0275elementEnd();
        \u0275\u0275text(98, " for common React development tasks.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "ul")(100, "li");
        \u0275\u0275text(101, "npm start / npm run dev - Development server");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "li");
        \u0275\u0275text(103, "npm run build - Production build");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "li");
        \u0275\u0275text(105, "npm test - Run tests");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "li");
        \u0275\u0275text(107, "npm install - Install dependencies");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(108, "pre")(109, "code", 4);
        \u0275\u0275text(110);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(111, "mat-tab", 9)(112, "div", 2)(113, "h2");
        \u0275\u0275text(114, "Creating Your First Component");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "div", 3)(116, "p")(117, "strong");
        \u0275\u0275text(118, "Components");
        \u0275\u0275elementEnd();
        \u0275\u0275text(119, " are the building blocks of React applications.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "ul")(121, "li");
        \u0275\u0275text(122, "Function components (modern approach)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "li");
        \u0275\u0275text(124, "JSX syntax for templating");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "li");
        \u0275\u0275text(126, "Props for data passing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "li");
        \u0275\u0275text(128, "Event handlers for interactivity");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(129, "pre")(130, "code", 10);
        \u0275\u0275text(131);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(132, "mat-tab", 11)(133, "div", 2)(134, "h2");
        \u0275\u0275text(135, "Running Your Application");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "div", 3)(137, "p")(138, "strong");
        \u0275\u0275text(139, "Development server");
        \u0275\u0275elementEnd();
        \u0275\u0275text(140, " provides live reload and debugging capabilities.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "ul")(142, "li");
        \u0275\u0275text(143, "Automatic reload on file changes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "li");
        \u0275\u0275text(145, "Source maps for debugging");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "li");
        \u0275\u0275text(147, "Environment variables support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "li");
        \u0275\u0275text(149, "Production build optimization");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(150, "pre")(151, "code", 4);
        \u0275\u0275text(152);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(153, "mat-tab", 12)(154, "div", 2)(155, "h2");
        \u0275\u0275text(156, "Understanding package.json");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "div", 3)(158, "p")(159, "strong");
        \u0275\u0275text(160, "package.json");
        \u0275\u0275elementEnd();
        \u0275\u0275text(161, " defines project dependencies and scripts.");
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
        \u0275\u0275text(170, "Project configuration");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(171, "pre")(172, "code", 13);
        \u0275\u0275text(173);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(174, "mat-tab", 14)(175, "div", 2)(176, "h2");
        \u0275\u0275text(177, "Adding Popular Libraries");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "div", 3)(179, "p")(180, "strong");
        \u0275\u0275text(181, "Enhance your React app");
        \u0275\u0275elementEnd();
        \u0275\u0275text(182, " with popular libraries and tools.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "ul")(184, "li");
        \u0275\u0275text(185, "React Router - Navigation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(186, "li");
        \u0275\u0275text(187, "Axios - HTTP requests");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(188, "li");
        \u0275\u0275text(189, "React Query - Data fetching");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(190, "li");
        \u0275\u0275text(191, "Styled Components - Styling");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(192, "pre")(193, "code", 4);
        \u0275\u0275text(194);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(195, "mat-tab", 15)(196, "div", 2)(197, "h2");
        \u0275\u0275text(198, "Common Issues and Solutions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(199, "div", 3)(200, "p")(201, "strong");
        \u0275\u0275text(202, "Troubleshooting");
        \u0275\u0275elementEnd();
        \u0275\u0275text(203, " common React development issues.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(204, "ul")(205, "li");
        \u0275\u0275text(206, "Port conflicts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(207, "li");
        \u0275\u0275text(208, "Module not found errors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(209, "li");
        \u0275\u0275text(210, "Hooks rules violations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(211, "li");
        \u0275\u0275text(212, "Build and environment issues");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(213, "pre")(214, "code", 4);
        \u0275\u0275text(215);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(216, "mat-tab", 16)(217, "div", 2)(218, "h2");
        \u0275\u0275text(219, "Next Steps in Your React Journey");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(220, "div", 3)(221, "p")(222, "strong");
        \u0275\u0275text(223, "Continue learning");
        \u0275\u0275elementEnd();
        \u0275\u0275text(224, " with these essential React topics.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(225, "ul")(226, "li");
        \u0275\u0275text(227, "Master React Hooks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(228, "li");
        \u0275\u0275text(229, "Learn routing with React Router");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(230, "li");
        \u0275\u0275text(231, "Implement state management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(232, "li");
        \u0275\u0275text(233, "Add styling solutions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(234, "pre")(235, "code", 4);
        \u0275\u0275text(236);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(26);
        \u0275\u0275textInterpolate(ctx.prerequisites);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.createReactApp);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.viteSetup);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.projectStructure);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.basicCommands);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.firstComponent);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.runningApp);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.packageJson);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.addingLibraries);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.commonIssues);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.nextSteps);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 0.5rem;\n}\n.container[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 2rem;\n  font-size: 1.1rem;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 1.5rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-left: 4px solid #61dafb;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  border-radius: 4px;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  color: #333;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0 1.5rem;\n  color: #666;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background: #282c34;\n  border-radius: 8px;\n  padding: 1.5rem;\n  overflow-x: auto;\n  margin: 1rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #abb2bf;\n  font-family:\n    "Fira Code",\n    "Consolas",\n    monospace;\n  font-size: 0.9rem;\n  line-height: 1.6;\n}\n/*# sourceMappingURL=react-gettingstarted.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReactGettingstartedComponent, { className: "ReactGettingstartedComponent", filePath: "src\\app\\components\\react\\react-gettingstarted\\react-gettingstarted.component.ts", lineNumber: 11 });
})();
export {
  ReactGettingstartedComponent
};
//# sourceMappingURL=chunk-O54PENXS.js.map
