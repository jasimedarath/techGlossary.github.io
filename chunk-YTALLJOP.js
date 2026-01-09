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

// src/app/components/react/react-lists/react-lists.component.ts
var ReactListsComponent = class _ReactListsComponent {
  constructor() {
    this.basicLists = `// Basic List Rendering with map()
function TodoList() {
  const todos = ['Buy groceries', 'Walk the dog', 'Write code'];
  
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

// List with objects
function UserList() {
  const users = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Bob', age: 35 }
  ];
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - {user.age} years old
        </li>
      ))}
    </ul>
  );
}`;
    this.keysImportance = `// Why Keys Matter
function BadExample() {
  const items = ['Apple', 'Banana', 'Cherry'];
  
  // Bad: Using index as key (avoid when list can change)
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function GoodExample() {
  const items = [
    { id: 'a1', name: 'Apple' },
    { id: 'b2', name: 'Banana' },
    { id: 'c3', name: 'Cherry' }
  ];
  
  // Good: Using unique IDs
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

// Keys help React identify which items changed
function DynamicList() {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' }
  ]);
  
  const addItem = () => {
    setItems([...items, { id: Date.now(), text: \`Item \${items.length + 1}\` }]);
  };
  
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map(item => <li key={item.id}>{item.text}</li>)}
      </ul>
    </div>
  );
}`;
    this.nestedLists = `// Nested Lists
function CategoryList() {
  const categories = [
    {
      id: 1,
      name: 'Fruits',
      items: [
        { id: 'f1', name: 'Apple' },
        { id: 'f2', name: 'Banana' }
      ]
    },
    {
      id: 2,
      name: 'Vegetables',
      items: [
        { id: 'v1', name: 'Carrot' },
        { id: 'v2', name: 'Broccoli' }
      ]
    }
  ];
  
  return (
    <div>
      {categories.map(category => (
        <div key={category.id}>
          <h3>{category.name}</h3>
          <ul>
            {category.items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}`;
    this.filterSort = `// Filtering and Sorting Lists
function ProductList({ products }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  
  // Filter products
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'price') return a.price - b.price;
    return 0;
  });
  
  return (
    <div>
      <input 
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
      
      <ul>
        {sortedProducts.map(product => (
          <li key={product.id}>
            {product.name} - \${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}`;
    this.conditionalItems = `// Conditional List Items
function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map(task => (
        <li
          key={task.id}
          style={{
            textDecoration: task.completed ? 'line-through' : 'none',
            color: task.priority === 'high' ? 'red' : 'black'
          }}
        >
          {task.title}
          {task.urgent && <span className="urgent-badge">!</span>}
        </li>
      ))}
    </ul>
  );
}

// Empty State
function UserList({ users }) {
  if (users.length === 0) {
    return <p>No users found</p>;
  }
  
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}`;
    this.listComponents = `// Extracting List Items to Components
function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build app', completed: false }
  ]);
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      ))}
    </ul>
  );
}`;
    this.virtualizedLists = `// Virtualized Lists (for large datasets)
import { FixedSizeList } from 'react-window';

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      Row {index}: {items[index].name}
    </div>
  );
  
  return (
    <FixedSizeList
      height={400}
      itemCount={items.length}
      itemSize={35}
      width="100%"
    >
      {Row}
    </FixedSizeList>
  );
}

// Infinite Scroll
function InfiniteList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const loadMore = () => {
    setLoading(true);
    fetchItems(page).then(newItems => {
      setItems([...items, ...newItems]);
      setPage(page + 1);
      setLoading(false);
    });
  };
  
  return (
    <div>
      <ul>
        {items.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
      <button onClick={loadMore} disabled={loading}>
        {loading ? 'Loading...' : 'Load More'}
      </button>
    </div>
  );
}`;
    this.bestPractices = `// List Rendering Best Practices

// 1. Always use unique keys
const goodList = items.map(item => <li key={item.id}>{item.name}</li>);

// 2. Avoid index as key when list can change
// Bad
items.map((item, index) => <li key={index}>{item}</li>);
// Good
items.map(item => <li key={item.id}>{item.name}</li>);

// 3. Extract list items to components
function UserListItem({ user }) {
  return <li>{user.name} - {user.email}</li>;
}

function UserList({ users }) {
  return (
    <ul>
      {users.map(user => <UserListItem key={user.id} user={user} />)}
    </ul>
  );
}

// 4. Use React.memo for expensive list items
const ExpensiveItem = React.memo(function ExpensiveItem({ item }) {
  // Expensive rendering logic
  return <li>{item.name}</li>;
});

// 5. Handle empty states
function List({ items }) {
  if (items.length === 0) return <EmptyState />;
  return <ul>{items.map(...)}</ul>;
}`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function ReactListsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReactListsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReactListsComponent, selectors: [["app-react-lists"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 175, vars: 8, consts: [[1, "container"], ["label", "Basic Lists"], [1, "tab-content"], [1, "info-box"], [1, "language-jsx"], ["label", "Keys"], [1, "info-box", "warning"], ["label", "Nested Lists"], ["label", "Filter & Sort"], ["label", "Conditional Items"], ["label", "List Components"], [1, "info-box", "success"], ["label", "Performance"], ["label", "Best Practices"]], template: function ReactListsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "React Lists & Keys");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Learn how to render multiple components using JavaScript's map() function and understand the importance of keys for React's reconciliation algorithm.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "Rendering Lists");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p");
        \u0275\u0275text(12, "Use JavaScript's ");
        \u0275\u0275elementStart(13, "strong");
        \u0275\u0275text(14, "map()");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " function to transform arrays into lists of elements.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "ul")(17, "li");
        \u0275\u0275text(18, "map() creates a new array of JSX elements");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "li");
        \u0275\u0275text(20, "Each element needs a unique key prop");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "li");
        \u0275\u0275text(22, "Keys help React identify changes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "li");
        \u0275\u0275text(24, "Common pattern for rendering arrays");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "pre")(26, "code", 4);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(28, "mat-tab", 5)(29, "div", 2)(30, "h2");
        \u0275\u0275text(31, "Importance of Keys");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 6)(33, "p")(34, "strong");
        \u0275\u0275text(35, "Keys");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, " help React identify which items have changed, been added, or removed.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "ul")(38, "li");
        \u0275\u0275text(39, "Keys must be unique among siblings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "li");
        \u0275\u0275text(41, "Use stable IDs, not array indices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "li");
        \u0275\u0275text(43, "Index as key causes issues with dynamic lists");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "li");
        \u0275\u0275text(45, "Keys improve reconciliation performance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "li");
        \u0275\u0275text(47, "Don't use random values as keys");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "pre")(49, "code", 4);
        \u0275\u0275text(50);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(51, "mat-tab", 7)(52, "div", 2)(53, "h2");
        \u0275\u0275text(54, "Nested Lists");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 3)(56, "p");
        \u0275\u0275text(57, "Render nested data structures with multiple map() calls.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "ul")(59, "li");
        \u0275\u0275text(60, "Each level needs unique keys");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "li");
        \u0275\u0275text(62, "Use map() for each nesting level");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "li");
        \u0275\u0275text(64, "Keys only need to be unique among siblings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "li");
        \u0275\u0275text(66, "Extract nested lists to components for clarity");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(67, "pre")(68, "code", 4);
        \u0275\u0275text(69);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(70, "mat-tab", 8)(71, "div", 2)(72, "h2");
        \u0275\u0275text(73, "Filtering and Sorting");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "div", 3)(75, "p");
        \u0275\u0275text(76, "Use JavaScript array methods to filter and sort data before rendering.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "ul")(78, "li");
        \u0275\u0275text(79, "filter() to show subset of items");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "li");
        \u0275\u0275text(81, "sort() to order items");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "li");
        \u0275\u0275text(83, "Chain multiple operations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "li");
        \u0275\u0275text(85, "Derive filtered/sorted lists from state");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "li");
        \u0275\u0275text(87, "Don't mutate original array");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(88, "pre")(89, "code", 4);
        \u0275\u0275text(90);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(91, "mat-tab", 9)(92, "div", 2)(93, "h2");
        \u0275\u0275text(94, "Conditional List Items");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "div", 3)(96, "p");
        \u0275\u0275text(97, "Render list items conditionally and handle empty states.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "ul")(99, "li");
        \u0275\u0275text(100, "Use conditional rendering within map()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "li");
        \u0275\u0275text(102, "Handle empty lists gracefully");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "li");
        \u0275\u0275text(104, "Show loading states");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "li");
        \u0275\u0275text(106, "Apply conditional styles");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(107, "pre")(108, "code", 4);
        \u0275\u0275text(109);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(110, "mat-tab", 10)(111, "div", 2)(112, "h2");
        \u0275\u0275text(113, "Extracting List Item Components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "div", 11)(115, "p");
        \u0275\u0275text(116, "Extract list items into separate components for better organization and reusability.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "ul")(118, "li");
        \u0275\u0275text(119, "Create dedicated component for list items");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "li");
        \u0275\u0275text(121, "Pass callbacks for interactions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "li");
        \u0275\u0275text(123, "Easier to maintain and test");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "li");
        \u0275\u0275text(125, "Can optimize with React.memo");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(126, "pre")(127, "code", 4);
        \u0275\u0275text(128);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(129, "mat-tab", 12)(130, "div", 2)(131, "h2");
        \u0275\u0275text(132, "Large Lists & Virtualization");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "div", 3)(134, "p");
        \u0275\u0275text(135, "For large lists, use virtualization libraries like react-window to render only visible items.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "ul")(137, "li");
        \u0275\u0275text(138, "Virtualization for thousands of items");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "li");
        \u0275\u0275text(140, "Only render visible elements");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "li");
        \u0275\u0275text(142, "Infinite scroll patterns");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "li");
        \u0275\u0275text(144, "Pagination for better UX");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "li");
        \u0275\u0275text(146, "Use react-window or react-virtualized");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(147, "pre")(148, "code", 4);
        \u0275\u0275text(149);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(150, "mat-tab", 13)(151, "div", 2)(152, "h2");
        \u0275\u0275text(153, "List Rendering Best Practices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(154, "div", 11)(155, "h3");
        \u0275\u0275text(156, "\u2713 Best Practices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "ul")(158, "li");
        \u0275\u0275text(159, "Always provide unique keys");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "li");
        \u0275\u0275text(161, "Avoid using index as key for dynamic lists");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "li");
        \u0275\u0275text(163, "Extract list items to components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "li");
        \u0275\u0275text(165, "Use React.memo for expensive items");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(166, "li");
        \u0275\u0275text(167, "Handle empty states");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(168, "li");
        \u0275\u0275text(169, "Consider virtualization for large lists");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(170, "li");
        \u0275\u0275text(171, "Filter/sort data before rendering");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(172, "pre")(173, "code", 4);
        \u0275\u0275text(174);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(27);
        \u0275\u0275textInterpolate(ctx.basicLists);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.keysImportance);
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(ctx.nestedLists);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.filterSort);
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(ctx.conditionalItems);
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(ctx.listComponents);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.virtualizedLists);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.bestPractices);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #61dafb;\n  margin-bottom: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #282c34;\n  margin-top: 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  padding: 15px;\n  margin: 15px 0;\n  border-radius: 4px;\n}\n.info-box.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-left-color: #4caf50;\n}\n.info-box.warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #ff9800;\n}\n.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1976d2;\n}\n.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding-left: 20px;\n}\n.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05);\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\npre[_ngcontent-%COMP%] {\n  background: #282c34;\n  border-radius: 4px;\n  overflow-x: auto;\n  margin: 15px 0;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #abb2bf;\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n  font-size: 14px;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=react-lists.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReactListsComponent, { className: "ReactListsComponent", filePath: "src\\app\\components\\react\\react-lists\\react-lists.component.ts", lineNumber: 13 });
})();
export {
  ReactListsComponent
};
//# sourceMappingURL=chunk-YTALLJOP.js.map
