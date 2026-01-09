import{b as m,c,d as u}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as n,da as l,gb as i,hb as t,tb as e,ub as o,yb as d}from"./chunk-WGQ2ELTG.js";var S=(()=>{class s{constructor(){this.basicLists=`// Basic List Rendering with map()
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
}`}ngAfterViewChecked(){Prism.highlightAll()}static{this.\u0275fac=function(r){return new(r||s)}}static{this.\u0275cmp=l({type:s,selectors:[["app-react-lists"]],standalone:!0,features:[d],decls:175,vars:8,consts:[[1,"container"],["label","Basic Lists"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],["label","Keys"],[1,"info-box","warning"],["label","Nested Lists"],["label","Filter & Sort"],["label","Conditional Items"],["label","List Components"],[1,"info-box","success"],["label","Performance"],["label","Best Practices"]],template:function(r,a){r&1&&(i(0,"div",0)(1,"h1"),e(2,"React Lists & Keys"),t(),i(3,"p"),e(4,"Learn how to render multiple components using JavaScript's map() function and understand the importance of keys for React's reconciliation algorithm."),t(),i(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),e(9,"Rendering Lists"),t(),i(10,"div",3)(11,"p"),e(12,"Use JavaScript's "),i(13,"strong"),e(14,"map()"),t(),e(15," function to transform arrays into lists of elements."),t(),i(16,"ul")(17,"li"),e(18,"map() creates a new array of JSX elements"),t(),i(19,"li"),e(20,"Each element needs a unique key prop"),t(),i(21,"li"),e(22,"Keys help React identify changes"),t(),i(23,"li"),e(24,"Common pattern for rendering arrays"),t()()(),i(25,"pre")(26,"code",4),e(27),t()()()(),i(28,"mat-tab",5)(29,"div",2)(30,"h2"),e(31,"Importance of Keys"),t(),i(32,"div",6)(33,"p")(34,"strong"),e(35,"Keys"),t(),e(36," help React identify which items have changed, been added, or removed."),t(),i(37,"ul")(38,"li"),e(39,"Keys must be unique among siblings"),t(),i(40,"li"),e(41,"Use stable IDs, not array indices"),t(),i(42,"li"),e(43,"Index as key causes issues with dynamic lists"),t(),i(44,"li"),e(45,"Keys improve reconciliation performance"),t(),i(46,"li"),e(47,"Don't use random values as keys"),t()()(),i(48,"pre")(49,"code",4),e(50),t()()()(),i(51,"mat-tab",7)(52,"div",2)(53,"h2"),e(54,"Nested Lists"),t(),i(55,"div",3)(56,"p"),e(57,"Render nested data structures with multiple map() calls."),t(),i(58,"ul")(59,"li"),e(60,"Each level needs unique keys"),t(),i(61,"li"),e(62,"Use map() for each nesting level"),t(),i(63,"li"),e(64,"Keys only need to be unique among siblings"),t(),i(65,"li"),e(66,"Extract nested lists to components for clarity"),t()()(),i(67,"pre")(68,"code",4),e(69),t()()()(),i(70,"mat-tab",8)(71,"div",2)(72,"h2"),e(73,"Filtering and Sorting"),t(),i(74,"div",3)(75,"p"),e(76,"Use JavaScript array methods to filter and sort data before rendering."),t(),i(77,"ul")(78,"li"),e(79,"filter() to show subset of items"),t(),i(80,"li"),e(81,"sort() to order items"),t(),i(82,"li"),e(83,"Chain multiple operations"),t(),i(84,"li"),e(85,"Derive filtered/sorted lists from state"),t(),i(86,"li"),e(87,"Don't mutate original array"),t()()(),i(88,"pre")(89,"code",4),e(90),t()()()(),i(91,"mat-tab",9)(92,"div",2)(93,"h2"),e(94,"Conditional List Items"),t(),i(95,"div",3)(96,"p"),e(97,"Render list items conditionally and handle empty states."),t(),i(98,"ul")(99,"li"),e(100,"Use conditional rendering within map()"),t(),i(101,"li"),e(102,"Handle empty lists gracefully"),t(),i(103,"li"),e(104,"Show loading states"),t(),i(105,"li"),e(106,"Apply conditional styles"),t()()(),i(107,"pre")(108,"code",4),e(109),t()()()(),i(110,"mat-tab",10)(111,"div",2)(112,"h2"),e(113,"Extracting List Item Components"),t(),i(114,"div",11)(115,"p"),e(116,"Extract list items into separate components for better organization and reusability."),t(),i(117,"ul")(118,"li"),e(119,"Create dedicated component for list items"),t(),i(120,"li"),e(121,"Pass callbacks for interactions"),t(),i(122,"li"),e(123,"Easier to maintain and test"),t(),i(124,"li"),e(125,"Can optimize with React.memo"),t()()(),i(126,"pre")(127,"code",4),e(128),t()()()(),i(129,"mat-tab",12)(130,"div",2)(131,"h2"),e(132,"Large Lists & Virtualization"),t(),i(133,"div",3)(134,"p"),e(135,"For large lists, use virtualization libraries like react-window to render only visible items."),t(),i(136,"ul")(137,"li"),e(138,"Virtualization for thousands of items"),t(),i(139,"li"),e(140,"Only render visible elements"),t(),i(141,"li"),e(142,"Infinite scroll patterns"),t(),i(143,"li"),e(144,"Pagination for better UX"),t(),i(145,"li"),e(146,"Use react-window or react-virtualized"),t()()(),i(147,"pre")(148,"code",4),e(149),t()()()(),i(150,"mat-tab",13)(151,"div",2)(152,"h2"),e(153,"List Rendering Best Practices"),t(),i(154,"div",11)(155,"h3"),e(156,"\u2713 Best Practices"),t(),i(157,"ul")(158,"li"),e(159,"Always provide unique keys"),t(),i(160,"li"),e(161,"Avoid using index as key for dynamic lists"),t(),i(162,"li"),e(163,"Extract list items to components"),t(),i(164,"li"),e(165,"Use React.memo for expensive items"),t(),i(166,"li"),e(167,"Handle empty states"),t(),i(168,"li"),e(169,"Consider virtualization for large lists"),t(),i(170,"li"),e(171,"Filter/sort data before rendering"),t()()(),i(172,"pre")(173,"code",4),e(174),t()()()()()()),r&2&&(n(27),o(a.basicLists),n(23),o(a.keysImportance),n(19),o(a.nestedLists),n(21),o(a.filterSort),n(19),o(a.conditionalItems),n(19),o(a.listComponents),n(21),o(a.virtualizedLists),n(25),o(a.bestPractices))},dependencies:[u,m,c],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#abb2bf;font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return s})();export{S as ReactListsComponent};
