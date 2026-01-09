import{b as m,c,d as p}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as i,da as l,gb as n,hb as e,tb as t,ub as o,yb as d}from"./chunk-WGQ2ELTG.js";var x=(()=>{class a{constructor(){this.cssModules=`// CSS Modules - Scoped CSS
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
// CSS Modules \u2248 Sass > Tailwind > Emotion > Styled Components > Inline Styles`}static{this.\u0275fac=function(s){return new(s||a)}}static{this.\u0275cmp=l({type:a,selectors:[["app-react-styling"]],standalone:!0,features:[d],decls:174,vars:8,consts:[[1,"container"],["label","CSS Modules"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],["label","Styled Components"],["label","Emotion"],["label","Tailwind CSS"],["label","Sass/SCSS"],[1,"language-scss"],["label","Inline Styles"],["label","Classnames"],["label","Comparison"]],template:function(s,r){s&1&&(n(0,"div",0)(1,"h1"),t(2,"React Styling Solutions"),e(),n(3,"p"),t(4,"Learn different approaches to styling React components."),e(),n(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),t(9,"CSS Modules - Scoped CSS"),e(),n(10,"div",3)(11,"p")(12,"strong"),t(13,"CSS Modules"),e(),t(14," provide locally scoped CSS by default."),e(),n(15,"ul")(16,"li"),t(17,"Automatic class name scoping"),e(),n(18,"li"),t(19,"No global namespace pollution"),e(),n(20,"li"),t(21,"Works with preprocessors"),e(),n(22,"li"),t(23,"Compile-time solution"),e()()(),n(24,"pre")(25,"code",4),t(26),e()()()(),n(27,"mat-tab",5)(28,"div",2)(29,"h2"),t(30,"Styled Components - CSS-in-JS"),e(),n(31,"div",3)(32,"p")(33,"strong"),t(34,"Styled Components"),e(),t(35," use tagged template literals to style components."),e(),n(36,"ul")(37,"li"),t(38,"True CSS-in-JS solution"),e(),n(39,"li"),t(40,"Dynamic theming support"),e(),n(41,"li"),t(42,"Automatic vendor prefixing"),e(),n(43,"li"),t(44,"Server-side rendering"),e()()(),n(45,"pre")(46,"code",4),t(47),e()()()(),n(48,"mat-tab",6)(49,"div",2)(50,"h2"),t(51,"Emotion - Performant CSS-in-JS"),e(),n(52,"div",3)(53,"p")(54,"strong"),t(55,"Emotion"),e(),t(56," is a performant and flexible CSS-in-JS library."),e(),n(57,"ul")(58,"li"),t(59,"CSS prop for quick styling"),e(),n(60,"li"),t(61,"Styled API like Styled Components"),e(),n(62,"li"),t(63,"Better performance"),e(),n(64,"li"),t(65,"Smaller bundle size"),e()()(),n(66,"pre")(67,"code",4),t(68),e()()()(),n(69,"mat-tab",7)(70,"div",2)(71,"h2"),t(72,"Tailwind CSS - Utility-First"),e(),n(73,"div",3)(74,"p")(75,"strong"),t(76,"Tailwind CSS"),e(),t(77," provides utility classes for rapid UI development."),e(),n(78,"ul")(79,"li"),t(80,"Utility-first approach"),e(),n(81,"li"),t(82,"Highly customizable"),e(),n(83,"li"),t(84,"Responsive design utilities"),e(),n(85,"li"),t(86,"Small production bundle"),e()()(),n(87,"pre")(88,"code",4),t(89),e()()()(),n(90,"mat-tab",8)(91,"div",2)(92,"h2"),t(93,"Sass/SCSS - CSS Preprocessor"),e(),n(94,"div",3)(95,"p")(96,"strong"),t(97,"Sass"),e(),t(98," extends CSS with variables, nesting, mixins, and more."),e(),n(99,"ul")(100,"li"),t(101,"Variables and mixins"),e(),n(102,"li"),t(103,"Nesting and inheritance"),e(),n(104,"li"),t(105,"Functions and operators"),e(),n(106,"li"),t(107,"Mature ecosystem"),e()()(),n(108,"pre")(109,"code",9),t(110),e()()()(),n(111,"mat-tab",10)(112,"div",2)(113,"h2"),t(114,"Inline Styles - JavaScript Objects"),e(),n(115,"div",3)(116,"p")(117,"strong"),t(118,"Inline styles"),e(),t(119," use JavaScript objects for component styling."),e(),n(120,"ul")(121,"li"),t(122,"Scoped to component"),e(),n(123,"li"),t(124,"Dynamic values"),e(),n(125,"li"),t(126,"No build step needed"),e(),n(127,"li"),t(128,"Limited CSS features"),e()()(),n(129,"pre")(130,"code",4),t(131),e()()()(),n(132,"mat-tab",11)(133,"div",2)(134,"h2"),t(135,"Classnames Library - Conditional Classes"),e(),n(136,"div",3)(137,"p")(138,"strong"),t(139,"Classnames"),e(),t(140," utility for conditionally joining class names together."),e(),n(141,"ul")(142,"li"),t(143,"Conditional class application"),e(),n(144,"li"),t(145,"Clean syntax"),e(),n(146,"li"),t(147,"Works with any CSS solution"),e(),n(148,"li"),t(149,"Very small (~0.6KB)"),e()()(),n(150,"pre")(151,"code",4),t(152),e()()()(),n(153,"mat-tab",12)(154,"div",2)(155,"h2"),t(156,"Styling Solutions Comparison"),e(),n(157,"div",3)(158,"p")(159,"strong"),t(160,"Choose the right solution"),e(),t(161," based on your project requirements and team preferences."),e(),n(162,"ul")(163,"li"),t(164,"Consider bundle size impact"),e(),n(165,"li"),t(166,"Development experience"),e(),n(167,"li"),t(168,"Performance requirements"),e(),n(169,"li"),t(170,"Team familiarity"),e()()(),n(171,"pre")(172,"code",4),t(173),e()()()()()()),s&2&&(i(26),o(r.cssModules),i(21),o(r.styledComponents),i(21),o(r.emotion),i(21),o(r.tailwindCSS),i(21),o(r.sassScss),i(21),o(r.inlineStyles),i(21),o(r.classnames),i(21),o(r.comparison))},dependencies:[p,m,c],styles:[".container[_ngcontent-%COMP%]{padding:2rem;max-width:1200px;margin:0 auto}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#333;margin-bottom:.5rem}.container[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#666;margin-bottom:2rem;font-size:1.1rem}.tab-content[_ngcontent-%COMP%]{padding:1.5rem 0}.tab-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#333;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]{background:#f8f9fa;border-left:4px solid #38bdf8;padding:1rem;margin-bottom:1.5rem;border-radius:4px}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:.5rem;color:#333}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:.5rem 0 0 1.5rem;color:#666}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:.25rem 0}.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:#282c34;border-radius:8px;padding:1.5rem;overflow-x:auto;margin:1rem 0}.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#abb2bf;font-family:Fira Code,Consolas,monospace;font-size:.9rem;line-height:1.6}"]})}}return a})();export{x as ReactStylingComponent};
