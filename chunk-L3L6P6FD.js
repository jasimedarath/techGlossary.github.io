import{b as c,c as d,d as p}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as i,da as l,gb as n,hb as e,tb as t,ub as r,yb as m}from"./chunk-WGQ2ELTG.js";var x=(()=>{class a{constructor(){this.basicTypes=`// Basic Type Annotations
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
const status: Status = 'pending';`,this.functionComponentTypes=`// Function Component with Props
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
<Greeting name="John" age={30} onGreet={() => alert('Hi!')} />`,this.stateTypes=`// useState with TypeScript
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
});`,this.eventTypes=`// Event Handlers with Types
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
}`,this.propsChildren=`// Children Props
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
}`,this.hooksTypes=`// Custom Hooks with TypeScript
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
const { data, loading, error } = useFetch<User[]>('/api/users');`,this.genericComponents=`// Generic Components
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
}`,this.contextTypes=`// Context with TypeScript
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
}`,this.utilityTypes=`// Utility Types in React
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
}`}static{this.\u0275fac=function(s){return new(s||a)}}static{this.\u0275cmp=l({type:a,selectors:[["app-react-typescript"]],standalone:!0,features:[m],decls:195,vars:9,consts:[[1,"container"],["label","Basic Types"],[1,"tab-content"],[1,"info-box"],[1,"language-tsx"],["label","Component Props"],["label","State & Hooks"],["label","Event Handlers"],["label","Children Props"],["label","Custom Hooks"],["label","Generic Components"],["label","Context API"],["label","Utility Types"]],template:function(s,o){s&1&&(n(0,"div",0)(1,"h1"),t(2,"TypeScript with React"),e(),n(3,"p"),t(4,"Learn how to use TypeScript with React for type-safe component development."),e(),n(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),t(9,"Basic TypeScript Types"),e(),n(10,"div",3)(11,"p")(12,"strong"),t(13,"TypeScript"),e(),t(14," adds static typing to React components for better development experience."),e(),n(15,"ul")(16,"li"),t(17,"Type safety and autocomplete"),e(),n(18,"li"),t(19,"Catch errors at compile time"),e(),n(20,"li"),t(21,"Better IDE support"),e(),n(22,"li"),t(23,"Self-documenting code"),e()()(),n(24,"pre")(25,"code",4),t(26),e()()()(),n(27,"mat-tab",5)(28,"div",2)(29,"h2"),t(30,"Typing Component Props"),e(),n(31,"div",3)(32,"p")(33,"strong"),t(34,"Props interfaces"),e(),t(35," define the shape of component props with TypeScript."),e(),n(36,"ul")(37,"li"),t(38,"Required and optional props"),e(),n(39,"li"),t(40,"Function props with parameters"),e(),n(41,"li"),t(42,"React.FC includes children by default"),e(),n(43,"li"),t(44,"Type checking on usage"),e()()(),n(45,"pre")(46,"code",4),t(47),e()()()(),n(48,"mat-tab",6)(49,"div",2)(50,"h2"),t(51,"Typing State and Hooks"),e(),n(52,"div",3)(53,"p")(54,"strong"),t(55,"Generic useState"),e(),t(56," allows explicit type annotations for state values."),e(),n(57,"ul")(58,"li"),t(59,"Type inference from initial value"),e(),n(60,"li"),t(61,"Explicit generic types"),e(),n(62,"li"),t(63,"Union types for multiple states"),e(),n(64,"li"),t(65,"Complex object states"),e()()(),n(66,"pre")(67,"code",4),t(68),e()()()(),n(69,"mat-tab",7)(70,"div",2)(71,"h2"),t(72,"Typing Event Handlers"),e(),n(73,"div",3)(74,"p")(75,"strong"),t(76,"Event types"),e(),t(77," from React ensure type-safe event handling."),e(),n(78,"ul")(79,"li"),t(80,"ChangeEvent for inputs"),e(),n(81,"li"),t(82,"FormEvent for form submission"),e(),n(83,"li"),t(84,"MouseEvent for clicks"),e(),n(85,"li"),t(86,"Generic element types"),e()()(),n(87,"pre")(88,"code",4),t(89),e()()()(),n(90,"mat-tab",8)(91,"div",2)(92,"h2"),t(93,"Typing Children Props"),e(),n(94,"div",3)(95,"p")(96,"strong"),t(97,"ReactNode"),e(),t(98," is the most common type for children props."),e(),n(99,"ul")(100,"li"),t(101,"ReactNode: any renderable content"),e(),n(102,"li"),t(103,"ReactElement: specific React elements"),e(),n(104,"li"),t(105,"Render props with types"),e(),n(106,"li"),t(107,"Component composition"),e()()(),n(108,"pre")(109,"code",4),t(110),e()()()(),n(111,"mat-tab",9)(112,"div",2)(113,"h2"),t(114,"Typing Custom Hooks"),e(),n(115,"div",3)(116,"p")(117,"strong"),t(118,"Generic hooks"),e(),t(119," enable reusable, type-safe custom hooks."),e(),n(120,"ul")(121,"li"),t(122,"Return type tuples"),e(),n(123,"li"),t(124,"Generic type parameters"),e(),n(125,"li"),t(126,"RefObject for useRef"),e(),n(127,"li"),t(128,"Proper return types"),e()()(),n(129,"pre")(130,"code",4),t(131),e()()()(),n(132,"mat-tab",10)(133,"div",2)(134,"h2"),t(135,"Generic Components"),e(),n(136,"div",3)(137,"p")(138,"strong"),t(139,"Generic components"),e(),t(140," work with multiple data types while maintaining type safety."),e(),n(141,"ul")(142,"li"),t(143,"Type parameters in props"),e(),n(144,"li"),t(145,"Reusable list components"),e(),n(146,"li"),t(147,"Form field components"),e(),n(148,"li"),t(149,"Type inference on usage"),e()()(),n(150,"pre")(151,"code",4),t(152),e()()()(),n(153,"mat-tab",11)(154,"div",2)(155,"h2"),t(156,"Typing Context API"),e(),n(157,"div",3)(158,"p")(159,"strong"),t(160,"Context types"),e(),t(161," ensure type safety across the component tree."),e(),n(162,"ul")(163,"li"),t(164,"Context interface definition"),e(),n(165,"li"),t(166,"Provider component types"),e(),n(167,"li"),t(168,"Custom hook with type checking"),e(),n(169,"li"),t(170,"Undefined context handling"),e()()(),n(171,"pre")(172,"code",4),t(173),e()()()(),n(174,"mat-tab",12)(175,"div",2)(176,"h2"),t(177,"TypeScript Utility Types"),e(),n(178,"div",3)(179,"p")(180,"strong"),t(181,"Utility types"),e(),t(182," transform existing types for various use cases."),e(),n(183,"ul")(184,"li"),t(185,"Partial: make all optional"),e(),n(186,"li"),t(187,"Pick/Omit: select properties"),e(),n(188,"li"),t(189,"Record: create object types"),e(),n(190,"li"),t(191,"Extends HTML attributes"),e()()(),n(192,"pre")(193,"code",4),t(194),e()()()()()()),s&2&&(i(26),r(o.basicTypes),i(21),r(o.functionComponentTypes),i(21),r(o.stateTypes),i(21),r(o.eventTypes),i(21),r(o.propsChildren),i(21),r(o.hooksTypes),i(21),r(o.genericComponents),i(21),r(o.contextTypes),i(21),r(o.utilityTypes))},dependencies:[p,c,d],styles:[".container[_ngcontent-%COMP%]{padding:2rem;max-width:1200px;margin:0 auto}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#333;margin-bottom:.5rem}.container[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#666;margin-bottom:2rem;font-size:1.1rem}.tab-content[_ngcontent-%COMP%]{padding:1.5rem 0}.tab-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#333;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]{background:#f8f9fa;border-left:4px solid #61dafb;padding:1rem;margin-bottom:1.5rem;border-radius:4px}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:.5rem;color:#333}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:.5rem 0 0 1.5rem;color:#666}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:.25rem 0}.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:#282c34;border-radius:8px;padding:1.5rem;overflow-x:auto;margin:1rem 0}.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#abb2bf;font-family:Fira Code,Consolas,monospace;font-size:.9rem;line-height:1.6}"]})}}return a})();export{x as ReactTypescriptComponent};
