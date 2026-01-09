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

// src/app/components/react/react-styling/react-styling.component.ts
var ReactStylingComponent = class _ReactStylingComponent {
  constructor() {
    this.cssModules = `// CSS Modules - Scoped CSS
/* Button.module.css */
.button {
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
}

.primary {
  background: #007bff;
  color: white;
}

.secondary {
  background: #6c757d;
  color: white;
}

// Button.jsx
import styles from './Button.module.css';

function Button({ variant = 'primary', children }) {
  return (
    <button className={\`\${styles.button} \${styles[variant]}\`}>
      {children}
    </button>
  );
}

export default Button;

// Usage
<Button variant="primary">Click Me</Button>
<Button variant="secondary">Cancel</Button>

// Generated class names: Button_button__abc123 Button_primary__def456`;
    this.styledComponents = `// Styled Components - CSS-in-JS
import styled from 'styled-components';

// Basic styled component
const Button = styled.button\`
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  
  background: \${props => props.primary ? '#007bff' : '#6c757d'};
  color: white;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
\`;

// Usage
<Button primary>Primary</Button>
<Button>Secondary</Button>

// Extending styles
const PrimaryButton = styled(Button)\`
  background: #007bff;
  font-weight: bold;
\`;

// With attrs
const Input = styled.input.attrs(props => ({
  type: props.type || 'text',
  size: props.size || '1em'
}))\`
  font-size: \${props => props.size};
  padding: 0.5em;
  border: 2px solid #ccc;
  border-radius: 4px;
\`;

// Theming
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d'
  }
};

const ThemedButton = styled.button\`
  background: \${props => props.theme.colors.primary};
  color: white;
\`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ThemedButton>Themed Button</ThemedButton>
    </ThemeProvider>
  );
}`;
    this.emotion = `// Emotion - Performant CSS-in-JS
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

// CSS prop
const buttonStyles = css\`
  padding: 10px 20px;
  border-radius: 4px;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
\`;

function Button() {
  return <button css={buttonStyles}>Click Me</button>;
}

// Dynamic styles
function DynamicButton({ primary }) {
  return (
    <button
      css={css\`
        background: \${primary ? '#007bff' : '#6c757d'};
        color: white;
        padding: 10px 20px;
        border-radius: 4px;
      \`}
    >
      Button
    </button>
  );
}

// Styled components API
const StyledButton = styled.button\`
  padding: 10px 20px;
  background: \${props => props.primary ? '#007bff' : '#6c757d'};
  color: white;
  border-radius: 4px;
\`;

// Object styles
const objectStyles = {
  color: 'white',
  background: '#007bff',
  padding: '10px 20px',
  borderRadius: '4px'
};

<button css={objectStyles}>Object Styles</button>

// Composition
const base = css\`
  padding: 10px 20px;
  border-radius: 4px;
\`;

const primary = css\`
  \${base};
  background: #007bff;
  color: white;
\`;`;
    this.tailwindCSS = `// Tailwind CSS - Utility-First CSS
// Installation: npm install -D tailwindcss postcss autoprefixer
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#007bff',
        secondary: '#6c757d'
      }
    }
  },
  plugins: []
};

// Basic usage
function Button({ children, variant = 'primary' }) {
  const baseClasses = 'px-4 py-2 rounded font-semibold transition-all';
  const variantClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50'
  };

  return (
    <button className={\`\${baseClasses} \${variantClasses[variant]}\`}>
      {children}
    </button>
  );
}

// Responsive design
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card />
  <Card />
  <Card />
</div>

// State variants
<button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50">
  Button
</button>

// Dark mode
<div className="bg-white dark:bg-gray-800 text-black dark:text-white">
  Content
</div>

// Custom classes with @apply
/* styles.css */
.btn {
  @apply px-4 py-2 rounded font-semibold transition-all;
}

.btn-primary {
  @apply btn bg-blue-500 hover:bg-blue-600 text-white;
}`;
    this.sassScss = `// Sass/SCSS - CSS Preprocessor
// Variables
$primary-color: #007bff;
$secondary-color: #6c757d;
$border-radius: 4px;

// Mixins
@mixin button-styles {
  padding: 10px 20px;
  border-radius: $border-radius;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

@mixin button-variant($bg-color, $text-color) {
  background: $bg-color;
  color: $text-color;
  
  &:hover {
    background: darken($bg-color, 10%);
  }
}

// Nesting
.button {
  @include button-styles;
  
  &.primary {
    @include button-variant($primary-color, white);
  }
  
  &.secondary {
    @include button-variant($secondary-color, white);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .icon {
    margin-right: 8px;
  }
}

// Functions
@function calculate-rem($size) {
  @return $size / 16px * 1rem;
}

.heading {
  font-size: calculate-rem(24px);
}

// Extend
.message {
  padding: 10px;
  border-radius: $border-radius;
}

.success {
  @extend .message;
  background: #28a745;
  color: white;
}

.error {
  @extend .message;
  background: #dc3545;
  color: white;
}

// Usage in React
import './Button.scss';

function Button({ variant, children }) {
  return (
    <button className={\`button \${variant}\`}>
      {children}
    </button>
  );
}`;
    this.inlineStyles = `// Inline Styles - JavaScript Objects
function Button({ primary, disabled, children }) {
  // Static styles
  const buttonStyles = {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontSize: '16px'
  };

  // Dynamic styles
  const variantStyles = primary
    ? { background: '#007bff', color: 'white' }
    : { background: '#6c757d', color: 'white' };

  // Combine styles
  const combinedStyles = {
    ...buttonStyles,
    ...variantStyles,
    ...(disabled && { opacity: 0.5 })
  };

  return <button style={combinedStyles}>{children}</button>;
}

// Conditional styles
function Card({ isActive, isHovered }) {
  return (
    <div
      style={{
        padding: '20px',
        borderRadius: '8px',
        background: isActive ? '#e3f2fd' : 'white',
        boxShadow: isHovered 
          ? '0 4px 12px rgba(0,0,0,0.15)' 
          : '0 2px 4px rgba(0,0,0,0.1)',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all 0.3s ease'
      }}
    >
      Card Content
    </div>
  );
}

// CSS variables
const theme = {
  '--primary-color': '#007bff',
  '--secondary-color': '#6c757d',
  '--border-radius': '4px'
};

function App() {
  return (
    <div style={theme}>
      <button style={{ 
        background: 'var(--primary-color)',
        borderRadius: 'var(--border-radius)'
      }}>
        Button
      </button>
    </div>
  );
}`;
    this.classnames = `// Classnames Library - Conditional Classes
import classNames from 'classnames';
import cn from 'classnames'; // or use 'clsx' for smaller bundle

// Basic usage
function Button({ primary, large, disabled, children }) {
  const buttonClass = classNames(
    'btn',
    {
      'btn-primary': primary,
      'btn-large': large,
      'btn-disabled': disabled
    }
  );

  return <button className={buttonClass}>{children}</button>;
}

// Multiple classes
const classes = classNames('foo', 'bar'); // 'foo bar'
const classes = classNames('foo', { bar: true }); // 'foo bar'
const classes = classNames({ 'foo-bar': true }); // 'foo-bar'
const classes = classNames({ 'foo-bar': false }); // ''
const classes = classNames({ foo: true }, { bar: true }); // 'foo bar'

// Arrays
const classes = classNames(['foo', 'bar']); // 'foo bar'

// Complex example
function Card({ variant, size, active, disabled, className }) {
  return (
    <div
      className={cn(
        'card',
        \`card--\${variant}\`,
        \`card--\${size}\`,
        {
          'card--active': active,
          'card--disabled': disabled
        },
        className // Allow external classes
      )}
    >
      Card Content
    </div>
  );
}

// With Tailwind
function Button({ variant, size, className }) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded font-semibold',
        {
          'bg-blue-500 text-white': variant === 'primary',
          'bg-gray-500 text-white': variant === 'secondary',
          'text-sm': size === 'small',
          'text-lg': size === 'large'
        },
        className
      )}
    >
      Button
    </button>
  );
}`;
    this.comparison = `// Styling Solutions Comparison

// \u2705 CSS Modules
// Pros: Scoped styles, no runtime, familiar CSS, works with preprocessors
// Cons: Separate files, no dynamic theming, verbose for utilities
// Best for: Traditional CSS workflow, existing CSS codebase

// \u2705 Styled Components
// Pros: True CSS-in-JS, dynamic theming, automatic vendor prefixing
// Cons: Runtime overhead, larger bundle, requires setup
// Best for: Component libraries, dynamic theming, full CSS-in-JS

// \u2705 Emotion
// Pros: Performant, flexible API, smaller than Styled Components
// Cons: Learning curve, runtime overhead
// Best for: Performance-critical apps, flexible styling needs

// \u2705 Tailwind CSS
// Pros: Fast development, consistent design, small production bundle
// Cons: HTML can get cluttered, learning curve, requires PostCSS
// Best for: Rapid prototyping, utility-first approach, consistent design

// \u2705 Sass/SCSS
// Pros: Powerful features, mature ecosystem, compiles to CSS
// Cons: Build step required, no dynamic theming
// Best for: Complex stylesheets, existing Sass projects

// \u2705 Inline Styles
// Pros: Dynamic, scoped, no build step
// Cons: No pseudo-classes, no media queries, verbose
// Best for: Highly dynamic styles, email templates

// Bundle Size Comparison (approximate):
// CSS Modules: ~0KB (compile-time)
// Tailwind CSS: ~3KB (after purge)
// Emotion: ~5KB
// Styled Components: ~12KB
// Sass: ~0KB (compile-time)
// Inline Styles: ~0KB (native)

// Performance:
// CSS Modules \u2248 Sass > Tailwind > Emotion > Styled Components > Inline Styles`;
  }
  static {
    this.\u0275fac = function ReactStylingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReactStylingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReactStylingComponent, selectors: [["app-react-styling"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 174, vars: 8, consts: [[1, "container"], ["label", "CSS Modules"], [1, "tab-content"], [1, "info-box"], [1, "language-jsx"], ["label", "Styled Components"], ["label", "Emotion"], ["label", "Tailwind CSS"], ["label", "Sass/SCSS"], [1, "language-scss"], ["label", "Inline Styles"], ["label", "Classnames"], ["label", "Comparison"]], template: function ReactStylingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "React Styling Solutions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Learn different approaches to styling React components.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "CSS Modules - Scoped CSS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "CSS Modules");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " provide locally scoped CSS by default.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "Automatic class name scoping");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "No global namespace pollution");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li");
        \u0275\u0275text(21, "Works with preprocessors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275text(23, "Compile-time solution");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "pre")(25, "code", 4);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "mat-tab", 5)(28, "div", 2)(29, "h2");
        \u0275\u0275text(30, "Styled Components - CSS-in-JS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 3)(32, "p")(33, "strong");
        \u0275\u0275text(34, "Styled Components");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " use tagged template literals to style components.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "ul")(37, "li");
        \u0275\u0275text(38, "True CSS-in-JS solution");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "li");
        \u0275\u0275text(40, "Dynamic theming support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "li");
        \u0275\u0275text(42, "Automatic vendor prefixing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li");
        \u0275\u0275text(44, "Server-side rendering");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "pre")(46, "code", 4);
        \u0275\u0275text(47);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(48, "mat-tab", 6)(49, "div", 2)(50, "h2");
        \u0275\u0275text(51, "Emotion - Performant CSS-in-JS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 3)(53, "p")(54, "strong");
        \u0275\u0275text(55, "Emotion");
        \u0275\u0275elementEnd();
        \u0275\u0275text(56, " is a performant and flexible CSS-in-JS library.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "ul")(58, "li");
        \u0275\u0275text(59, "CSS prop for quick styling");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "li");
        \u0275\u0275text(61, "Styled API like Styled Components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "li");
        \u0275\u0275text(63, "Better performance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "li");
        \u0275\u0275text(65, "Smaller bundle size");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(66, "pre")(67, "code", 4);
        \u0275\u0275text(68);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(69, "mat-tab", 7)(70, "div", 2)(71, "h2");
        \u0275\u0275text(72, "Tailwind CSS - Utility-First");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 3)(74, "p")(75, "strong");
        \u0275\u0275text(76, "Tailwind CSS");
        \u0275\u0275elementEnd();
        \u0275\u0275text(77, " provides utility classes for rapid UI development.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "ul")(79, "li");
        \u0275\u0275text(80, "Utility-first approach");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "li");
        \u0275\u0275text(82, "Highly customizable");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "li");
        \u0275\u0275text(84, "Responsive design utilities");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "li");
        \u0275\u0275text(86, "Small production bundle");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(87, "pre")(88, "code", 4);
        \u0275\u0275text(89);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(90, "mat-tab", 8)(91, "div", 2)(92, "h2");
        \u0275\u0275text(93, "Sass/SCSS - CSS Preprocessor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "div", 3)(95, "p")(96, "strong");
        \u0275\u0275text(97, "Sass");
        \u0275\u0275elementEnd();
        \u0275\u0275text(98, " extends CSS with variables, nesting, mixins, and more.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "ul")(100, "li");
        \u0275\u0275text(101, "Variables and mixins");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "li");
        \u0275\u0275text(103, "Nesting and inheritance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "li");
        \u0275\u0275text(105, "Functions and operators");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "li");
        \u0275\u0275text(107, "Mature ecosystem");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(108, "pre")(109, "code", 9);
        \u0275\u0275text(110);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(111, "mat-tab", 10)(112, "div", 2)(113, "h2");
        \u0275\u0275text(114, "Inline Styles - JavaScript Objects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "div", 3)(116, "p")(117, "strong");
        \u0275\u0275text(118, "Inline styles");
        \u0275\u0275elementEnd();
        \u0275\u0275text(119, " use JavaScript objects for component styling.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "ul")(121, "li");
        \u0275\u0275text(122, "Scoped to component");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "li");
        \u0275\u0275text(124, "Dynamic values");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "li");
        \u0275\u0275text(126, "No build step needed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "li");
        \u0275\u0275text(128, "Limited CSS features");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(129, "pre")(130, "code", 4);
        \u0275\u0275text(131);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(132, "mat-tab", 11)(133, "div", 2)(134, "h2");
        \u0275\u0275text(135, "Classnames Library - Conditional Classes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "div", 3)(137, "p")(138, "strong");
        \u0275\u0275text(139, "Classnames");
        \u0275\u0275elementEnd();
        \u0275\u0275text(140, " utility for conditionally joining class names together.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "ul")(142, "li");
        \u0275\u0275text(143, "Conditional class application");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "li");
        \u0275\u0275text(145, "Clean syntax");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "li");
        \u0275\u0275text(147, "Works with any CSS solution");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "li");
        \u0275\u0275text(149, "Very small (~0.6KB)");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(150, "pre")(151, "code", 4);
        \u0275\u0275text(152);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(153, "mat-tab", 12)(154, "div", 2)(155, "h2");
        \u0275\u0275text(156, "Styling Solutions Comparison");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "div", 3)(158, "p")(159, "strong");
        \u0275\u0275text(160, "Choose the right solution");
        \u0275\u0275elementEnd();
        \u0275\u0275text(161, " based on your project requirements and team preferences.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "ul")(163, "li");
        \u0275\u0275text(164, "Consider bundle size impact");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "li");
        \u0275\u0275text(166, "Development experience");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "li");
        \u0275\u0275text(168, "Performance requirements");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(169, "li");
        \u0275\u0275text(170, "Team familiarity");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(171, "pre")(172, "code", 4);
        \u0275\u0275text(173);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(26);
        \u0275\u0275textInterpolate(ctx.cssModules);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.styledComponents);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.emotion);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.tailwindCSS);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.sassScss);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.inlineStyles);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.classnames);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.comparison);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 0.5rem;\n}\n.container[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 2rem;\n  font-size: 1.1rem;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 1.5rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-left: 4px solid #38bdf8;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  border-radius: 4px;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  color: #333;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0 1.5rem;\n  color: #666;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background: #282c34;\n  border-radius: 8px;\n  padding: 1.5rem;\n  overflow-x: auto;\n  margin: 1rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #abb2bf;\n  font-family:\n    "Fira Code",\n    "Consolas",\n    monospace;\n  font-size: 0.9rem;\n  line-height: 1.6;\n}\n/*# sourceMappingURL=react-styling.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReactStylingComponent, { className: "ReactStylingComponent", filePath: "src\\app\\components\\react\\react-styling\\react-styling.component.ts", lineNumber: 11 });
})();
export {
  ReactStylingComponent
};
//# sourceMappingURL=chunk-HHRHC4VW.js.map
