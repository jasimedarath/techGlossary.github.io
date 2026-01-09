import{b as d,c as p,d as c}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as i,da as s,gb as n,hb as e,tb as t,ub as o,yb as m}from"./chunk-WGQ2ELTG.js";var v=(()=>{class r{constructor(){this.prerequisites=`Prerequisites for React Development

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
   - Redux DevTools (if using Redux)`,this.createReactApp=`Creating React App with Create React App (CRA)

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
# - Production build optimization`,this.viteSetup=`Creating React App with Vite (Modern & Faster)

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
# - Better performance`,this.projectStructure=`React Project Structure

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
\u2514\u2500\u2500 package.json`,this.basicCommands=`Essential npm Commands

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
}`,this.firstComponent=`Creating Your First Component

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
<Greeting name="John" age={30} />`,this.runningApp=`Running Your React Application

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

# Deploy production build to hosting service`,this.packageJson=`Understanding package.json

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
npm install zustand            # State management`,this.addingLibraries=`Adding Popular Libraries

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

import { FaHome } from 'react-icons/fa';`,this.commonIssues=`Common Issues and Solutions

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
   # Verify CSS file path`,this.nextSteps=`Next Steps After Setup

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
- Community: reddit.com/r/reactjs`}static{this.\u0275fac=function(l){return new(l||r)}}static{this.\u0275cmp=s({type:r,selectors:[["app-react-gettingstarted"]],standalone:!0,features:[m],decls:237,vars:11,consts:[[1,"container"],["label","Prerequisites"],[1,"tab-content"],[1,"info-box"],[1,"language-bash"],["label","Create React App"],["label","Vite Setup"],["label","Project Structure"],["label","Basic Commands"],["label","First Component"],[1,"language-jsx"],["label","Running App"],["label","package.json"],[1,"language-json"],["label","Adding Libraries"],["label","Troubleshooting"],["label","Next Steps"]],template:function(l,a){l&1&&(n(0,"div",0)(1,"h1"),t(2,"Getting Started with React"),e(),n(3,"p"),t(4,"Learn how to set up your development environment and create your first React application."),e(),n(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),t(9,"Prerequisites"),e(),n(10,"div",3)(11,"p")(12,"strong"),t(13,"Before starting"),e(),t(14," with React, ensure you have the required tools and knowledge."),e(),n(15,"ul")(16,"li"),t(17,"Node.js 18.0 or newer (LTS recommended)"),e(),n(18,"li"),t(19,"npm or yarn package manager"),e(),n(20,"li"),t(21,"Code editor (VS Code recommended)"),e(),n(22,"li"),t(23,"Modern JavaScript (ES6+) knowledge"),e()()(),n(24,"pre")(25,"code",4),t(26),e()()()(),n(27,"mat-tab",5)(28,"div",2)(29,"h2"),t(30,"Create React App (CRA)"),e(),n(31,"div",3)(32,"p")(33,"strong"),t(34,"Create React App"),e(),t(35," is the official way to create single-page React applications."),e(),n(36,"ul")(37,"li"),t(38,"Zero configuration needed"),e(),n(39,"li"),t(40,"Pre-configured build setup"),e(),n(41,"li"),t(42,"Hot reload development server"),e(),n(43,"li"),t(44,"Production optimization built-in"),e()()(),n(45,"pre")(46,"code",4),t(47),e()()()(),n(48,"mat-tab",6)(49,"div",2)(50,"h2"),t(51,"Vite - Modern Build Tool"),e(),n(52,"div",3)(53,"p")(54,"strong"),t(55,"Vite"),e(),t(56," is a modern, faster alternative to Create React App."),e(),n(57,"ul")(58,"li"),t(59,"Lightning-fast cold start"),e(),n(60,"li"),t(61,"Instant hot module replacement"),e(),n(62,"li"),t(63,"Optimized production builds"),e(),n(64,"li"),t(65,"Modern ESM-based development"),e()()(),n(66,"pre")(67,"code",4),t(68),e()()()(),n(69,"mat-tab",7)(70,"div",2)(71,"h2"),t(72,"Project Structure"),e(),n(73,"div",3)(74,"p")(75,"strong"),t(76,"Understanding"),e(),t(77," the React project structure helps organize your code effectively."),e(),n(78,"ul")(79,"li"),t(80,"src/ - Source code directory"),e(),n(81,"li"),t(82,"public/ - Static assets"),e(),n(83,"li"),t(84,"components/ - Reusable components"),e(),n(85,"li"),t(86,"pages/ - Page components"),e()()(),n(87,"pre")(88,"code",4),t(89),e()()()(),n(90,"mat-tab",8)(91,"div",2)(92,"h2"),t(93,"Essential npm Commands"),e(),n(94,"div",3)(95,"p")(96,"strong"),t(97,"npm commands"),e(),t(98," for common React development tasks."),e(),n(99,"ul")(100,"li"),t(101,"npm start / npm run dev - Development server"),e(),n(102,"li"),t(103,"npm run build - Production build"),e(),n(104,"li"),t(105,"npm test - Run tests"),e(),n(106,"li"),t(107,"npm install - Install dependencies"),e()()(),n(108,"pre")(109,"code",4),t(110),e()()()(),n(111,"mat-tab",9)(112,"div",2)(113,"h2"),t(114,"Creating Your First Component"),e(),n(115,"div",3)(116,"p")(117,"strong"),t(118,"Components"),e(),t(119," are the building blocks of React applications."),e(),n(120,"ul")(121,"li"),t(122,"Function components (modern approach)"),e(),n(123,"li"),t(124,"JSX syntax for templating"),e(),n(125,"li"),t(126,"Props for data passing"),e(),n(127,"li"),t(128,"Event handlers for interactivity"),e()()(),n(129,"pre")(130,"code",10),t(131),e()()()(),n(132,"mat-tab",11)(133,"div",2)(134,"h2"),t(135,"Running Your Application"),e(),n(136,"div",3)(137,"p")(138,"strong"),t(139,"Development server"),e(),t(140," provides live reload and debugging capabilities."),e(),n(141,"ul")(142,"li"),t(143,"Automatic reload on file changes"),e(),n(144,"li"),t(145,"Source maps for debugging"),e(),n(146,"li"),t(147,"Environment variables support"),e(),n(148,"li"),t(149,"Production build optimization"),e()()(),n(150,"pre")(151,"code",4),t(152),e()()()(),n(153,"mat-tab",12)(154,"div",2)(155,"h2"),t(156,"Understanding package.json"),e(),n(157,"div",3)(158,"p")(159,"strong"),t(160,"package.json"),e(),t(161," defines project dependencies and scripts."),e(),n(162,"ul")(163,"li"),t(164,"Dependencies for runtime"),e(),n(165,"li"),t(166,"DevDependencies for development"),e(),n(167,"li"),t(168,"Scripts for common tasks"),e(),n(169,"li"),t(170,"Project configuration"),e()()(),n(171,"pre")(172,"code",13),t(173),e()()()(),n(174,"mat-tab",14)(175,"div",2)(176,"h2"),t(177,"Adding Popular Libraries"),e(),n(178,"div",3)(179,"p")(180,"strong"),t(181,"Enhance your React app"),e(),t(182," with popular libraries and tools."),e(),n(183,"ul")(184,"li"),t(185,"React Router - Navigation"),e(),n(186,"li"),t(187,"Axios - HTTP requests"),e(),n(188,"li"),t(189,"React Query - Data fetching"),e(),n(190,"li"),t(191,"Styled Components - Styling"),e()()(),n(192,"pre")(193,"code",4),t(194),e()()()(),n(195,"mat-tab",15)(196,"div",2)(197,"h2"),t(198,"Common Issues and Solutions"),e(),n(199,"div",3)(200,"p")(201,"strong"),t(202,"Troubleshooting"),e(),t(203," common React development issues."),e(),n(204,"ul")(205,"li"),t(206,"Port conflicts"),e(),n(207,"li"),t(208,"Module not found errors"),e(),n(209,"li"),t(210,"Hooks rules violations"),e(),n(211,"li"),t(212,"Build and environment issues"),e()()(),n(213,"pre")(214,"code",4),t(215),e()()()(),n(216,"mat-tab",16)(217,"div",2)(218,"h2"),t(219,"Next Steps in Your React Journey"),e(),n(220,"div",3)(221,"p")(222,"strong"),t(223,"Continue learning"),e(),t(224," with these essential React topics."),e(),n(225,"ul")(226,"li"),t(227,"Master React Hooks"),e(),n(228,"li"),t(229,"Learn routing with React Router"),e(),n(230,"li"),t(231,"Implement state management"),e(),n(232,"li"),t(233,"Add styling solutions"),e()()(),n(234,"pre")(235,"code",4),t(236),e()()()()()()),l&2&&(i(26),o(a.prerequisites),i(21),o(a.createReactApp),i(21),o(a.viteSetup),i(21),o(a.projectStructure),i(21),o(a.basicCommands),i(21),o(a.firstComponent),i(21),o(a.runningApp),i(21),o(a.packageJson),i(21),o(a.addingLibraries),i(21),o(a.commonIssues),i(21),o(a.nextSteps))},dependencies:[c,d,p],styles:[".container[_ngcontent-%COMP%]{padding:2rem;max-width:1200px;margin:0 auto}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#333;margin-bottom:.5rem}.container[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#666;margin-bottom:2rem;font-size:1.1rem}.tab-content[_ngcontent-%COMP%]{padding:1.5rem 0}.tab-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#333;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]{background:#f8f9fa;border-left:4px solid #61dafb;padding:1rem;margin-bottom:1.5rem;border-radius:4px}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:.5rem;color:#333}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:.5rem 0 0 1.5rem;color:#666}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:.25rem 0}.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:#282c34;border-radius:8px;padding:1.5rem;overflow-x:auto;margin:1rem 0}.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#abb2bf;font-family:Fira Code,Consolas,monospace;font-size:.9rem;line-height:1.6}"]})}}return r})();export{v as ReactGettingstartedComponent};
