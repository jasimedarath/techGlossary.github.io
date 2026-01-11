import"./chunk-4ITEIGFF.js";import"./chunk-WCULWZKC.js";import{a as y}from"./chunk-VDRUEQXK.js";import{a as u,b as x,c as g,d as f}from"./chunk-GNZ74KMC.js";import"./chunk-XAZLOLJU.js";import"./chunk-SZTU5CXE.js";import{Ia as o,Ya as l,da as c,e as h,hb as t,ib as e,mb as s,ub as i,vb as r,zb as p}from"./chunk-KMNIY7WT.js";var S=h(y());function E(n,m){if(n&1&&(t(0,"div",10)(1,"h2"),i(2,"Rendering Lists"),e(),t(3,"div",11)(4,"p"),i(5,"Use JavaScript's "),t(6,"strong"),i(7,"map()"),e(),i(8," function to transform arrays into lists of elements."),e(),t(9,"ul")(10,"li"),i(11,"map() creates a new array of JSX elements"),e(),t(12,"li"),i(13,"Each element needs a unique key prop"),e(),t(14,"li"),i(15,"Keys help React identify changes"),e(),t(16,"li"),i(17,"Common pattern for rendering arrays"),e()()(),t(18,"pre")(19,"code",12),i(20),e()()()),n&2){let a=s();o(20),r(a.basicLists)}}function b(n,m){if(n&1&&(t(0,"div",10)(1,"h2"),i(2,"Importance of Keys"),e(),t(3,"div",13)(4,"p")(5,"strong"),i(6,"Keys"),e(),i(7," help React identify which items have changed, been added, or removed."),e(),t(8,"ul")(9,"li"),i(10,"Keys must be unique among siblings"),e(),t(11,"li"),i(12,"Use stable IDs, not array indices"),e(),t(13,"li"),i(14,"Index as key causes issues with dynamic lists"),e(),t(15,"li"),i(16,"Keys improve reconciliation performance"),e(),t(17,"li"),i(18,"Don't use random values as keys"),e()()(),t(19,"pre")(20,"code",12),i(21),e()()()),n&2){let a=s();o(21),r(a.keysImportance)}}function v(n,m){if(n&1&&(t(0,"div",10)(1,"h2"),i(2,"Nested Lists"),e(),t(3,"div",11)(4,"p"),i(5,"Render nested data structures with multiple map() calls."),e(),t(6,"ul")(7,"li"),i(8,"Each level needs unique keys"),e(),t(9,"li"),i(10,"Use map() for each nesting level"),e(),t(11,"li"),i(12,"Keys only need to be unique among siblings"),e(),t(13,"li"),i(14,"Extract nested lists to components for clarity"),e()()(),t(15,"pre")(16,"code",12),i(17),e()()()),n&2){let a=s();o(17),r(a.nestedLists)}}function C(n,m){if(n&1&&(t(0,"div",10)(1,"h2"),i(2,"Filtering and Sorting"),e(),t(3,"div",11)(4,"p"),i(5,"Use JavaScript array methods to filter and sort data before rendering."),e(),t(6,"ul")(7,"li"),i(8,"filter() to show subset of items"),e(),t(9,"li"),i(10,"sort() to order items"),e(),t(11,"li"),i(12,"Chain multiple operations"),e(),t(13,"li"),i(14,"Derive filtered/sorted lists from state"),e(),t(15,"li"),i(16,"Don't mutate original array"),e()()(),t(17,"pre")(18,"code",12),i(19),e()()()),n&2){let a=s();o(19),r(a.filterSort)}}function L(n,m){if(n&1&&(t(0,"div",10)(1,"h2"),i(2,"Conditional List Items"),e(),t(3,"div",11)(4,"p"),i(5,"Render list items conditionally and handle empty states."),e(),t(6,"ul")(7,"li"),i(8,"Use conditional rendering within map()"),e(),t(9,"li"),i(10,"Handle empty lists gracefully"),e(),t(11,"li"),i(12,"Show loading states"),e(),t(13,"li"),i(14,"Apply conditional styles"),e()()(),t(15,"pre")(16,"code",12),i(17),e()()()),n&2){let a=s();o(17),r(a.conditionalItems)}}function _(n,m){if(n&1&&(t(0,"div",10)(1,"h2"),i(2,"Extracting List Item Components"),e(),t(3,"div",14)(4,"p"),i(5,"Extract list items into separate components for better organization and reusability."),e(),t(6,"ul")(7,"li"),i(8,"Create dedicated component for list items"),e(),t(9,"li"),i(10,"Pass callbacks for interactions"),e(),t(11,"li"),i(12,"Easier to maintain and test"),e(),t(13,"li"),i(14,"Can optimize with React.memo"),e()()(),t(15,"pre")(16,"code",12),i(17),e()()()),n&2){let a=s();o(17),r(a.listComponents)}}function k(n,m){if(n&1&&(t(0,"div",10)(1,"h2"),i(2,"Large Lists & Virtualization"),e(),t(3,"div",11)(4,"p"),i(5,"For large lists, use virtualization libraries like react-window to render only visible items."),e(),t(6,"ul")(7,"li"),i(8,"Virtualization for thousands of items"),e(),t(9,"li"),i(10,"Only render visible elements"),e(),t(11,"li"),i(12,"Infinite scroll patterns"),e(),t(13,"li"),i(14,"Pagination for better UX"),e(),t(15,"li"),i(16,"Use react-window or react-virtualized"),e()()(),t(17,"pre")(18,"code",12),i(19),e()()()),n&2){let a=s();o(19),r(a.virtualizedLists)}}function I(n,m){if(n&1&&(t(0,"div",10)(1,"h2"),i(2,"List Rendering Best Practices"),e(),t(3,"div",14)(4,"h3"),i(5,"\u2713 Best Practices"),e(),t(6,"ul")(7,"li"),i(8,"Always provide unique keys"),e(),t(9,"li"),i(10,"Avoid using index as key for dynamic lists"),e(),t(11,"li"),i(12,"Extract list items to components"),e(),t(13,"li"),i(14,"Use React.memo for expensive items"),e(),t(15,"li"),i(16,"Handle empty states"),e(),t(17,"li"),i(18,"Consider virtualization for large lists"),e(),t(19,"li"),i(20,"Filter/sort data before rendering"),e()()(),t(21,"pre")(22,"code",12),i(23),e()()()),n&2){let a=s();o(23),r(a.bestPractices)}}var O=(()=>{class n{constructor(){this.basicLists=`// Basic List Rendering with map()
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
}`,this.keysImportance=`// Why Keys Matter
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
}`,this.nestedLists=`// Nested Lists
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
}`,this.filterSort=`// Filtering and Sorting Lists
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
}`,this.conditionalItems=`// Conditional List Items
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
}`,this.listComponents=`// Extracting List Items to Components
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
}`,this.virtualizedLists=`// Virtualized Lists (for large datasets)
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
}`,this.bestPractices=`// List Rendering Best Practices

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
}`}ngAfterViewChecked(){S.highlightAll()}static{this.\u0275fac=function(d){return new(d||n)}}static{this.\u0275cmp=c({type:n,selectors:[["app-react-lists"]],standalone:!0,features:[p],decls:22,vars:0,consts:[[1,"container"],["label","Basic Lists"],["matTabContent",""],["label","Keys"],["label","Nested Lists"],["label","Filter & Sort"],["label","Conditional Items"],["label","List Components"],["label","Performance"],["label","Best Practices"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],[1,"info-box","warning"],[1,"info-box","success"]],template:function(d,w){d&1&&(t(0,"div",0)(1,"h1"),i(2,"React Lists & Keys"),e(),t(3,"p"),i(4,"Learn how to render multiple components using JavaScript's map() function and understand the importance of keys for React's reconciliation algorithm."),e(),t(5,"mat-tab-group")(6,"mat-tab",1),l(7,E,21,1,"ng-template",2),e(),t(8,"mat-tab",3),l(9,b,22,1,"ng-template",2),e(),t(10,"mat-tab",4),l(11,v,18,1,"ng-template",2),e(),t(12,"mat-tab",5),l(13,C,20,1,"ng-template",2),e(),t(14,"mat-tab",6),l(15,L,18,1,"ng-template",2),e(),t(16,"mat-tab",7),l(17,_,18,1,"ng-template",2),e(),t(18,"mat-tab",8),l(19,k,20,1,"ng-template",2),e(),t(20,"mat-tab",9),l(21,I,24,1,"ng-template",2),e()()())},dependencies:[f,u,x,g],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return n})();export{O as ReactListsComponent};
