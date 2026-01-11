import{a as u,b as x,c as f,d as g}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as o,Xa as a,da as c,gb as t,hb as e,lb as l,tb as n,ub as s,yb as d}from"./chunk-WGQ2ELTG.js";function h(i,m){if(i&1&&(t(0,"div",11)(1,"h2"),n(2,"Basic TypeScript Types"),e(),t(3,"div",12)(4,"p")(5,"strong"),n(6,"TypeScript"),e(),n(7," adds static typing to React components for better development experience."),e(),t(8,"ul")(9,"li"),n(10,"Type safety and autocomplete"),e(),t(11,"li"),n(12,"Catch errors at compile time"),e(),t(13,"li"),n(14,"Better IDE support"),e(),t(15,"li"),n(16,"Self-documenting code"),e()()(),t(17,"pre")(18,"code",13),n(19),e()()()),i&2){let r=l();o(19),s(r.basicTypes)}}function y(i,m){if(i&1&&(t(0,"div",11)(1,"h2"),n(2,"Typing Component Props"),e(),t(3,"div",12)(4,"p")(5,"strong"),n(6,"Props interfaces"),e(),n(7," define the shape of component props with TypeScript."),e(),t(8,"ul")(9,"li"),n(10,"Required and optional props"),e(),t(11,"li"),n(12,"Function props with parameters"),e(),t(13,"li"),n(14,"React.FC includes children by default"),e(),t(15,"li"),n(16,"Type checking on usage"),e()()(),t(17,"pre")(18,"code",13),n(19),e()()()),i&2){let r=l();o(19),s(r.functionComponentTypes)}}function E(i,m){if(i&1&&(t(0,"div",11)(1,"h2"),n(2,"Typing State and Hooks"),e(),t(3,"div",12)(4,"p")(5,"strong"),n(6,"Generic useState"),e(),n(7," allows explicit type annotations for state values."),e(),t(8,"ul")(9,"li"),n(10,"Type inference from initial value"),e(),t(11,"li"),n(12,"Explicit generic types"),e(),t(13,"li"),n(14,"Union types for multiple states"),e(),t(15,"li"),n(16,"Complex object states"),e()()(),t(17,"pre")(18,"code",13),n(19),e()()()),i&2){let r=l();o(19),s(r.stateTypes)}}function v(i,m){if(i&1&&(t(0,"div",11)(1,"h2"),n(2,"Typing Event Handlers"),e(),t(3,"div",12)(4,"p")(5,"strong"),n(6,"Event types"),e(),n(7," from React ensure type-safe event handling."),e(),t(8,"ul")(9,"li"),n(10,"ChangeEvent for inputs"),e(),t(11,"li"),n(12,"FormEvent for form submission"),e(),t(13,"li"),n(14,"MouseEvent for clicks"),e(),t(15,"li"),n(16,"Generic element types"),e()()(),t(17,"pre")(18,"code",13),n(19),e()()()),i&2){let r=l();o(19),s(r.eventTypes)}}function S(i,m){if(i&1&&(t(0,"div",11)(1,"h2"),n(2,"Typing Children Props"),e(),t(3,"div",12)(4,"p")(5,"strong"),n(6,"ReactNode"),e(),n(7," is the most common type for children props."),e(),t(8,"ul")(9,"li"),n(10,"ReactNode: any renderable content"),e(),t(11,"li"),n(12,"ReactElement: specific React elements"),e(),t(13,"li"),n(14,"Render props with types"),e(),t(15,"li"),n(16,"Component composition"),e()()(),t(17,"pre")(18,"code",13),n(19),e()()()),i&2){let r=l();o(19),s(r.propsChildren)}}function C(i,m){if(i&1&&(t(0,"div",11)(1,"h2"),n(2,"Typing Custom Hooks"),e(),t(3,"div",12)(4,"p")(5,"strong"),n(6,"Generic hooks"),e(),n(7," enable reusable, type-safe custom hooks."),e(),t(8,"ul")(9,"li"),n(10,"Return type tuples"),e(),t(11,"li"),n(12,"Generic type parameters"),e(),t(13,"li"),n(14,"RefObject for useRef"),e(),t(15,"li"),n(16,"Proper return types"),e()()(),t(17,"pre")(18,"code",13),n(19),e()()()),i&2){let r=l();o(19),s(r.hooksTypes)}}function T(i,m){if(i&1&&(t(0,"div",11)(1,"h2"),n(2,"Generic Components"),e(),t(3,"div",12)(4,"p")(5,"strong"),n(6,"Generic components"),e(),n(7," work with multiple data types while maintaining type safety."),e(),t(8,"ul")(9,"li"),n(10,"Type parameters in props"),e(),t(11,"li"),n(12,"Reusable list components"),e(),t(13,"li"),n(14,"Form field components"),e(),t(15,"li"),n(16,"Type inference on usage"),e()()(),t(17,"pre")(18,"code",13),n(19),e()()()),i&2){let r=l();o(19),s(r.genericComponents)}}function b(i,m){if(i&1&&(t(0,"div",11)(1,"h2"),n(2,"Typing Context API"),e(),t(3,"div",12)(4,"p")(5,"strong"),n(6,"Context types"),e(),n(7," ensure type safety across the component tree."),e(),t(8,"ul")(9,"li"),n(10,"Context interface definition"),e(),t(11,"li"),n(12,"Provider component types"),e(),t(13,"li"),n(14,"Custom hook with type checking"),e(),t(15,"li"),n(16,"Undefined context handling"),e()()(),t(17,"pre")(18,"code",13),n(19),e()()()),i&2){let r=l();o(19),s(r.contextTypes)}}function P(i,m){if(i&1&&(t(0,"div",11)(1,"h2"),n(2,"TypeScript Utility Types"),e(),t(3,"div",12)(4,"p")(5,"strong"),n(6,"Utility types"),e(),n(7," transform existing types for various use cases."),e(),t(8,"ul")(9,"li"),n(10,"Partial: make all optional"),e(),t(11,"li"),n(12,"Pick/Omit: select properties"),e(),t(13,"li"),n(14,"Record: create object types"),e(),t(15,"li"),n(16,"Extends HTML attributes"),e()()(),t(17,"pre")(18,"code",13),n(19),e()()()),i&2){let r=l();o(19),s(r.utilityTypes)}}var w=(()=>{class i{constructor(){this.basicTypes=`// Basic Type Annotations
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
}`}static{this.\u0275fac=function(p){return new(p||i)}}static{this.\u0275cmp=c({type:i,selectors:[["app-react-typescript"]],standalone:!0,features:[d],decls:24,vars:0,consts:[[1,"container"],["label","Basic Types"],["matTabContent",""],["label","Component Props"],["label","State & Hooks"],["label","Event Handlers"],["label","Children Props"],["label","Custom Hooks"],["label","Generic Components"],["label","Context API"],["label","Utility Types"],[1,"tab-content"],[1,"info-box"],[1,"language-tsx"]],template:function(p,_){p&1&&(t(0,"div",0)(1,"h1"),n(2,"TypeScript with React"),e(),t(3,"p"),n(4,"Learn how to use TypeScript with React for type-safe component development."),e(),t(5,"mat-tab-group")(6,"mat-tab",1),a(7,h,20,1,"ng-template",2),e(),t(8,"mat-tab",3),a(9,y,20,1,"ng-template",2),e(),t(10,"mat-tab",4),a(11,E,20,1,"ng-template",2),e(),t(12,"mat-tab",5),a(13,v,20,1,"ng-template",2),e(),t(14,"mat-tab",6),a(15,S,20,1,"ng-template",2),e(),t(16,"mat-tab",7),a(17,C,20,1,"ng-template",2),e(),t(18,"mat-tab",8),a(19,T,20,1,"ng-template",2),e(),t(20,"mat-tab",9),a(21,b,20,1,"ng-template",2),e(),t(22,"mat-tab",10),a(23,P,20,1,"ng-template",2),e()()())},dependencies:[g,u,x,f],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return i})();export{w as ReactTypescriptComponent};
