import{a as u,b,c as S,d as x}from"./chunk-GNZ74KMC.js";import"./chunk-XAZLOLJU.js";import"./chunk-SZTU5CXE.js";import{Ia as a,Ya as r,da as c,hb as t,ib as e,mb as s,ub as n,vb as l,zb as p}from"./chunk-KMNIY7WT.js";function g(i,d){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"CSS Modules - Scoped CSS"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"CSS Modules"),e(),n(7," provide locally scoped CSS by default."),e(),t(8,"ul")(9,"li"),n(10,"Automatic class name scoping"),e(),t(11,"li"),n(12,"No global namespace pollution"),e(),t(13,"li"),n(14,"Works with preprocessors"),e(),t(15,"li"),n(16,"Compile-time solution"),e()()(),t(17,"pre")(18,"code",12),n(19),e()()()),i&2){let o=s();a(19),l(o.cssModules)}}function y(i,d){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Styled Components - CSS-in-JS"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Styled Components"),e(),n(7," use tagged template literals to style components."),e(),t(8,"ul")(9,"li"),n(10,"True CSS-in-JS solution"),e(),t(11,"li"),n(12,"Dynamic theming support"),e(),t(13,"li"),n(14,"Automatic vendor prefixing"),e(),t(15,"li"),n(16,"Server-side rendering"),e()()(),t(17,"pre")(18,"code",12),n(19),e()()()),i&2){let o=s();a(19),l(o.styledComponents)}}function f(i,d){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Emotion - Performant CSS-in-JS"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Emotion"),e(),n(7," is a performant and flexible CSS-in-JS library."),e(),t(8,"ul")(9,"li"),n(10,"CSS prop for quick styling"),e(),t(11,"li"),n(12,"Styled API like Styled Components"),e(),t(13,"li"),n(14,"Better performance"),e(),t(15,"li"),n(16,"Smaller bundle size"),e()()(),t(17,"pre")(18,"code",12),n(19),e()()()),i&2){let o=s();a(19),l(o.emotion)}}function C(i,d){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Tailwind CSS - Utility-First"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Tailwind CSS"),e(),n(7," provides utility classes for rapid UI development."),e(),t(8,"ul")(9,"li"),n(10,"Utility-first approach"),e(),t(11,"li"),n(12,"Highly customizable"),e(),t(13,"li"),n(14,"Responsive design utilities"),e(),t(15,"li"),n(16,"Small production bundle"),e()()(),t(17,"pre")(18,"code",12),n(19),e()()()),i&2){let o=s();a(19),l(o.tailwindCSS)}}function h(i,d){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Sass/SCSS - CSS Preprocessor"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Sass"),e(),n(7," extends CSS with variables, nesting, mixins, and more."),e(),t(8,"ul")(9,"li"),n(10,"Variables and mixins"),e(),t(11,"li"),n(12,"Nesting and inheritance"),e(),t(13,"li"),n(14,"Functions and operators"),e(),t(15,"li"),n(16,"Mature ecosystem"),e()()(),t(17,"pre")(18,"code",13),n(19),e()()()),i&2){let o=s();a(19),l(o.sassScss)}}function v(i,d){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Inline Styles - JavaScript Objects"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Inline styles"),e(),n(7," use JavaScript objects for component styling."),e(),t(8,"ul")(9,"li"),n(10,"Scoped to component"),e(),t(11,"li"),n(12,"Dynamic values"),e(),t(13,"li"),n(14,"No build step needed"),e(),t(15,"li"),n(16,"Limited CSS features"),e()()(),t(17,"pre")(18,"code",12),n(19),e()()()),i&2){let o=s();a(19),l(o.inlineStyles)}}function E(i,d){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Classnames Library - Conditional Classes"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Classnames"),e(),n(7," utility for conditionally joining class names together."),e(),t(8,"ul")(9,"li"),n(10,"Conditional class application"),e(),t(11,"li"),n(12,"Clean syntax"),e(),t(13,"li"),n(14,"Works with any CSS solution"),e(),t(15,"li"),n(16,"Very small (~0.6KB)"),e()()(),t(17,"pre")(18,"code",12),n(19),e()()()),i&2){let o=s();a(19),l(o.classnames)}}function _(i,d){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Styling Solutions Comparison"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"Choose the right solution"),e(),n(7," based on your project requirements and team preferences."),e(),t(8,"ul")(9,"li"),n(10,"Consider bundle size impact"),e(),t(11,"li"),n(12,"Development experience"),e(),t(13,"li"),n(14,"Performance requirements"),e(),t(15,"li"),n(16,"Team familiarity"),e()()(),t(17,"pre")(18,"code",12),n(19),e()()()),i&2){let o=s();a(19),l(o.comparison)}}var k=(()=>{class i{constructor(){this.cssModules=`// CSS Modules - Scoped CSS
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

// Generated class names: Button_button__abc123 Button_primary__def456`,this.styledComponents=`// Styled Components - CSS-in-JS
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
}`,this.emotion=`// Emotion - Performant CSS-in-JS
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
\`;`,this.tailwindCSS=`// Tailwind CSS - Utility-First CSS
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
}`,this.sassScss=`// Sass/SCSS - CSS Preprocessor
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
}`,this.inlineStyles=`// Inline Styles - JavaScript Objects
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
}`,this.classnames=`// Classnames Library - Conditional Classes
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
}`,this.comparison=`// Styling Solutions Comparison

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
// CSS Modules \u2248 Sass > Tailwind > Emotion > Styled Components > Inline Styles`}static{this.\u0275fac=function(m){return new(m||i)}}static{this.\u0275cmp=c({type:i,selectors:[["app-react-styling"]],standalone:!0,features:[p],decls:22,vars:0,consts:[[1,"container"],["label","CSS Modules"],["matTabContent",""],["label","Styled Components"],["label","Emotion"],["label","Tailwind CSS"],["label","Sass/SCSS"],["label","Inline Styles"],["label","Classnames"],["label","Comparison"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],[1,"language-scss"]],template:function(m,w){m&1&&(t(0,"div",0)(1,"h1"),n(2,"React Styling Solutions"),e(),t(3,"p"),n(4,"Learn different approaches to styling React components."),e(),t(5,"mat-tab-group")(6,"mat-tab",1),r(7,g,20,1,"ng-template",2),e(),t(8,"mat-tab",3),r(9,y,20,1,"ng-template",2),e(),t(10,"mat-tab",4),r(11,f,20,1,"ng-template",2),e(),t(12,"mat-tab",5),r(13,C,20,1,"ng-template",2),e(),t(14,"mat-tab",6),r(15,h,20,1,"ng-template",2),e(),t(16,"mat-tab",7),r(17,v,20,1,"ng-template",2),e(),t(18,"mat-tab",8),r(19,E,20,1,"ng-template",2),e(),t(20,"mat-tab",9),r(21,_,20,1,"ng-template",2),e()()())},dependencies:[x,u,b,S],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return i})();export{k as ReactStylingComponent};
