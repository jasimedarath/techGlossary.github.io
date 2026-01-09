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

// src/app/components/react/react-typescript/react-typescript.component.ts
var ReactTypescriptComponent = class _ReactTypescriptComponent {
  constructor() {
    this.basicTypes = `// Basic Type Annotations
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // Optional property
}

const user: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com'
};

// Array types
const numbers: number[] = [1, 2, 3];
const users: User[] = [];

// Union types
type Status = 'pending' | 'approved' | 'rejected';
const status: Status = 'pending';`;
    this.functionComponentTypes = `// Function Component with Props
interface GreetingProps {
  name: string;
  age?: number;
  onGreet?: () => void;
}

function Greeting({ name, age, onGreet }: GreetingProps) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age && <p>Age: {age}</p>}
      {onGreet && <button onClick={onGreet}>Greet</button>}
    </div>
  );
}

// With React.FC (includes children automatically)
const Welcome: React.FC<GreetingProps> = ({ name, age }) => {
  return <h1>Welcome, {name}!</h1>;
};

// Usage
<Greeting name="John" age={30} onGreet={() => alert('Hi!')} />`;
    this.stateTypes = `// useState with TypeScript
import { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

// Type inference
const [count, setCount] = useState(0); // number
const [name, setName] = useState(''); // string

// Explicit typing
const [user, setUser] = useState<User | null>(null);

// With initial value
const [users, setUsers] = useState<User[]>([]);

// Complex state
interface FormState {
  username: string;
  password: string;
  rememberMe: boolean;
}

const [form, setForm] = useState<FormState>({
  username: '',
  password: '',
  rememberMe: false
});`;
    this.eventTypes = `// Event Handlers with Types
import { ChangeEvent, FormEvent, MouseEvent } from 'react';

function Form() {
  // Input change handler
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  // Form submit handler
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  // Button click handler
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked');
  };

  // Generic event handler
  const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} />
      <textarea onChange={handleInput} />
      <button onClick={handleClick}>Submit</button>
    </form>
  );
}`;
    this.propsChildren = `// Children Props
import { ReactNode, ReactElement } from 'react';

// Using ReactNode (most flexible)
interface ContainerProps {
  children: ReactNode;
  title: string;
}

function Container({ children, title }: ContainerProps) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

// Using ReactElement (specific)
interface CardProps {
  header: ReactElement;
  footer: ReactElement;
}

function Card({ header, footer }: CardProps) {
  return (
    <div className="card">
      <div className="header">{header}</div>
      <div className="footer">{footer}</div>
    </div>
  );
}

// Render prop pattern
interface RenderProps {
  data: User[];
  render: (item: User) => ReactElement;
}

function UserList({ data, render }: RenderProps) {
  return <div>{data.map(render)}</div>;
}`;
    this.hooksTypes = `// Custom Hooks with TypeScript
import { useState, useEffect, useRef, RefObject } from 'react';

// Custom hook with return type
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Usage
const [user, setUser] = useLocalStorage<User>('user', { id: 0, name: '', email: '' });

// useRef with types
function TextInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return <input ref={inputRef} />;
}

// Generic custom hook
function useFetch<T>(url: string): { data: T | null; loading: boolean; error: Error | null } {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

// Usage
const { data, loading, error } = useFetch<User[]>('/api/users');`;
    this.genericComponents = `// Generic Components
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  keyExtractor: (item: T) => string | number;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <div>
      {items.map(item => (
        <div key={keyExtractor(item)}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}

// Usage with different types
<List
  items={users}
  renderItem={user => <div>{user.name}</div>}
  keyExtractor={user => user.id}
/>

<List
  items={products}
  renderItem={product => <div>{product.title}</div>}
  keyExtractor={product => product.id}
/>

// Generic form field
interface FormFieldProps<T> {
  name: keyof T;
  value: T[keyof T];
  onChange: (name: keyof T, value: T[keyof T]) => void;
}

function FormField<T>({ name, value, onChange }: FormFieldProps<T>) {
  return (
    <input
      value={String(value)}
      onChange={e => onChange(name, e.target.value as T[keyof T])}
    />
  );
}`;
    this.contextTypes = `// Context with TypeScript
import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

// Create context with default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => setUser(user);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook with type checking
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

// Usage
function Profile() {
  const { user, logout } = useAuth();
  return user ? <div>{user.name}</div> : null;
}`;
    this.utilityTypes = `// Utility Types in React
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Partial - all properties optional
type PartialUser = Partial<User>;
const updateUser: PartialUser = { name: 'John' };

// Required - all properties required
type RequiredUser = Required<Partial<User>>;

// Pick - select specific properties
type UserPreview = Pick<User, 'id' | 'name'>;
const preview: UserPreview = { id: 1, name: 'John' };

// Omit - exclude specific properties
type UserWithoutPassword = Omit<User, 'password'>;
const safeUser: UserWithoutPassword = { id: 1, name: 'John', email: 'john@example.com' };

// Record - create object type
type UserRoles = Record<number, 'admin' | 'user' | 'guest'>;
const roles: UserRoles = { 1: 'admin', 2: 'user' };

// Component props with HTML attributes
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
}

function Button({ variant, ...props }: ButtonProps) {
  return <button className={\`btn-\${variant}\`} {...props} />;
}`;
  }
  static {
    this.\u0275fac = function ReactTypescriptComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReactTypescriptComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReactTypescriptComponent, selectors: [["app-react-typescript"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 195, vars: 9, consts: [[1, "container"], ["label", "Basic Types"], [1, "tab-content"], [1, "info-box"], [1, "language-tsx"], ["label", "Component Props"], ["label", "State & Hooks"], ["label", "Event Handlers"], ["label", "Children Props"], ["label", "Custom Hooks"], ["label", "Generic Components"], ["label", "Context API"], ["label", "Utility Types"]], template: function ReactTypescriptComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "TypeScript with React");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Learn how to use TypeScript with React for type-safe component development.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "Basic TypeScript Types");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "TypeScript");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " adds static typing to React components for better development experience.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "Type safety and autocomplete");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "Catch errors at compile time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li");
        \u0275\u0275text(21, "Better IDE support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275text(23, "Self-documenting code");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "pre")(25, "code", 4);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "mat-tab", 5)(28, "div", 2)(29, "h2");
        \u0275\u0275text(30, "Typing Component Props");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 3)(32, "p")(33, "strong");
        \u0275\u0275text(34, "Props interfaces");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " define the shape of component props with TypeScript.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "ul")(37, "li");
        \u0275\u0275text(38, "Required and optional props");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "li");
        \u0275\u0275text(40, "Function props with parameters");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "li");
        \u0275\u0275text(42, "React.FC includes children by default");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li");
        \u0275\u0275text(44, "Type checking on usage");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "pre")(46, "code", 4);
        \u0275\u0275text(47);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(48, "mat-tab", 6)(49, "div", 2)(50, "h2");
        \u0275\u0275text(51, "Typing State and Hooks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 3)(53, "p")(54, "strong");
        \u0275\u0275text(55, "Generic useState");
        \u0275\u0275elementEnd();
        \u0275\u0275text(56, " allows explicit type annotations for state values.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "ul")(58, "li");
        \u0275\u0275text(59, "Type inference from initial value");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "li");
        \u0275\u0275text(61, "Explicit generic types");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "li");
        \u0275\u0275text(63, "Union types for multiple states");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "li");
        \u0275\u0275text(65, "Complex object states");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(66, "pre")(67, "code", 4);
        \u0275\u0275text(68);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(69, "mat-tab", 7)(70, "div", 2)(71, "h2");
        \u0275\u0275text(72, "Typing Event Handlers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 3)(74, "p")(75, "strong");
        \u0275\u0275text(76, "Event types");
        \u0275\u0275elementEnd();
        \u0275\u0275text(77, " from React ensure type-safe event handling.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "ul")(79, "li");
        \u0275\u0275text(80, "ChangeEvent for inputs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "li");
        \u0275\u0275text(82, "FormEvent for form submission");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "li");
        \u0275\u0275text(84, "MouseEvent for clicks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "li");
        \u0275\u0275text(86, "Generic element types");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(87, "pre")(88, "code", 4);
        \u0275\u0275text(89);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(90, "mat-tab", 8)(91, "div", 2)(92, "h2");
        \u0275\u0275text(93, "Typing Children Props");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "div", 3)(95, "p")(96, "strong");
        \u0275\u0275text(97, "ReactNode");
        \u0275\u0275elementEnd();
        \u0275\u0275text(98, " is the most common type for children props.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "ul")(100, "li");
        \u0275\u0275text(101, "ReactNode: any renderable content");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "li");
        \u0275\u0275text(103, "ReactElement: specific React elements");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "li");
        \u0275\u0275text(105, "Render props with types");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "li");
        \u0275\u0275text(107, "Component composition");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(108, "pre")(109, "code", 4);
        \u0275\u0275text(110);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(111, "mat-tab", 9)(112, "div", 2)(113, "h2");
        \u0275\u0275text(114, "Typing Custom Hooks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "div", 3)(116, "p")(117, "strong");
        \u0275\u0275text(118, "Generic hooks");
        \u0275\u0275elementEnd();
        \u0275\u0275text(119, " enable reusable, type-safe custom hooks.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "ul")(121, "li");
        \u0275\u0275text(122, "Return type tuples");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "li");
        \u0275\u0275text(124, "Generic type parameters");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "li");
        \u0275\u0275text(126, "RefObject for useRef");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "li");
        \u0275\u0275text(128, "Proper return types");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(129, "pre")(130, "code", 4);
        \u0275\u0275text(131);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(132, "mat-tab", 10)(133, "div", 2)(134, "h2");
        \u0275\u0275text(135, "Generic Components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "div", 3)(137, "p")(138, "strong");
        \u0275\u0275text(139, "Generic components");
        \u0275\u0275elementEnd();
        \u0275\u0275text(140, " work with multiple data types while maintaining type safety.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "ul")(142, "li");
        \u0275\u0275text(143, "Type parameters in props");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "li");
        \u0275\u0275text(145, "Reusable list components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "li");
        \u0275\u0275text(147, "Form field components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "li");
        \u0275\u0275text(149, "Type inference on usage");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(150, "pre")(151, "code", 4);
        \u0275\u0275text(152);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(153, "mat-tab", 11)(154, "div", 2)(155, "h2");
        \u0275\u0275text(156, "Typing Context API");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "div", 3)(158, "p")(159, "strong");
        \u0275\u0275text(160, "Context types");
        \u0275\u0275elementEnd();
        \u0275\u0275text(161, " ensure type safety across the component tree.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "ul")(163, "li");
        \u0275\u0275text(164, "Context interface definition");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "li");
        \u0275\u0275text(166, "Provider component types");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "li");
        \u0275\u0275text(168, "Custom hook with type checking");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(169, "li");
        \u0275\u0275text(170, "Undefined context handling");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(171, "pre")(172, "code", 4);
        \u0275\u0275text(173);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(174, "mat-tab", 12)(175, "div", 2)(176, "h2");
        \u0275\u0275text(177, "TypeScript Utility Types");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "div", 3)(179, "p")(180, "strong");
        \u0275\u0275text(181, "Utility types");
        \u0275\u0275elementEnd();
        \u0275\u0275text(182, " transform existing types for various use cases.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "ul")(184, "li");
        \u0275\u0275text(185, "Partial: make all optional");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(186, "li");
        \u0275\u0275text(187, "Pick/Omit: select properties");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(188, "li");
        \u0275\u0275text(189, "Record: create object types");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(190, "li");
        \u0275\u0275text(191, "Extends HTML attributes");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(192, "pre")(193, "code", 4);
        \u0275\u0275text(194);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(26);
        \u0275\u0275textInterpolate(ctx.basicTypes);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.functionComponentTypes);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.stateTypes);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.eventTypes);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.propsChildren);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.hooksTypes);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.genericComponents);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.contextTypes);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.utilityTypes);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 0.5rem;\n}\n.container[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 2rem;\n  font-size: 1.1rem;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 1.5rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-left: 4px solid #61dafb;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  border-radius: 4px;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  color: #333;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0 1.5rem;\n  color: #666;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background: #282c34;\n  border-radius: 8px;\n  padding: 1.5rem;\n  overflow-x: auto;\n  margin: 1rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #abb2bf;\n  font-family:\n    "Fira Code",\n    "Consolas",\n    monospace;\n  font-size: 0.9rem;\n  line-height: 1.6;\n}\n/*# sourceMappingURL=react-typescript.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReactTypescriptComponent, { className: "ReactTypescriptComponent", filePath: "src\\app\\components\\react\\react-typescript\\react-typescript.component.ts", lineNumber: 11 });
})();
export {
  ReactTypescriptComponent
};
//# sourceMappingURL=chunk-HZ44D2N2.js.map
