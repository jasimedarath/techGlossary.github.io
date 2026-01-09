import{b as c,c as d,d as m}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as n,da as l,gb as r,hb as e,tb as t,ub as i,yb as u}from"./chunk-WGQ2ELTG.js";var S=(()=>{class a{constructor(){this.fetchAPI=`// Native Fetch API
import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// POST request
async function createUser(userData) {
  const response = await fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData)
  });
  
  if (!response.ok) {
    throw new Error('Failed to create user');
  }
  
  return response.json();
}`,this.axios=`// Axios - HTTP Client
import axios from 'axios';
import { useState, useEffect } from 'react';

// Configure Axios instance
const api = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptors
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`;
    }
    return config;
  },
  error => Promise.reject(error)
);

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Handle unauthorized
    }
    return Promise.reject(error);
  }
);

// Component
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// CRUD operations
const userAPI = {
  getAll: () => api.get('/users'),
  getById: (id) => api.get(\`/users/\${id}\`),
  create: (data) => api.post('/users', data),
  update: (id, data) => api.put(\`/users/\${id}\`, data),
  delete: (id) => api.delete(\`/users/\${id}\`)
};`,this.reactQuery=`// React Query - Data Fetching Library
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Setup
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserList />
    </QueryClientProvider>
  );
}

// Fetch data
function UserList() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch('https://api.example.com/users');
      if (!response.ok) throw new Error('Network error');
      return response.json();
    },
    staleTime: 5000, // Data fresh for 5 seconds
    cacheTime: 10000 // Cache for 10 seconds
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <button onClick={() => refetch()}>Refresh</button>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

// Mutations
function CreateUser() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newUser) => {
      return fetch('https://api.example.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      }).then(res => res.json());
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['users'] });
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ name: 'New User', email: 'user@example.com' });
  };

  return (
    <form onSubmit={handleSubmit}>
      {mutation.isLoading ? 'Creating...' : null}
      {mutation.isError ? <div>Error: {mutation.error.message}</div> : null}
      {mutation.isSuccess ? <div>User created!</div> : null}
      <button type="submit">Create User</button>
    </form>
  );
}

// Parallel queries
function Dashboard() {
  const users = useQuery({ queryKey: ['users'], queryFn: fetchUsers });
  const posts = useQuery({ queryKey: ['posts'], queryFn: fetchPosts });

  if (users.isLoading || posts.isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Users: {users.data.length}</h2>
      <h2>Posts: {posts.data.length}</h2>
    </div>
  );
}`,this.swr=`// SWR - React Hooks for Data Fetching
import useSWR, { mutate } from 'swr';
import { SWRConfig } from 'swr';

// Fetcher function
const fetcher = (url) => fetch(url).then(res => res.json());

// Global configuration
function App() {
  return (
    <SWRConfig 
      value={{
        fetcher,
        refreshInterval: 3000,
        revalidateOnFocus: true
      }}
    >
      <UserList />
    </SWRConfig>
  );
}

// Basic usage
function UserList() {
  const { data, error, isLoading, mutate } = useSWR(
    'https://api.example.com/users',
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <button onClick={() => mutate()}>Refresh</button>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

// Conditional fetching
function User({ id }) {
  const { data, error } = useSWR(
    id ? \`/api/users/\${id}\` : null,
    fetcher
  );

  if (!id) return <div>Select a user</div>;
  if (error) return <div>Error loading user</div>;
  if (!data) return <div>Loading...</div>;

  return <div>{data.name}</div>;
}

// Mutations
function CreateUser() {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Optimistic update
    mutate(
      '/api/users',
      async (currentData) => {
        const newUser = { id: Date.now(), name };
        return [...currentData, newUser];
      },
      false // Don't revalidate immediately
    );

    // API call
    await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    });

    // Revalidate
    mutate('/api/users');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Create</button>
    </form>
  );
}

// Pagination
function UserListPaginated() {
  const [page, setPage] = useState(1);
  const { data, error } = useSWR(\`/api/users?page=\${page}\`, fetcher);

  return (
    <div>
      {data?.map(user => <div key={user.id}>{user.name}</div>)}
      <button onClick={() => setPage(page - 1)}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}`,this.customHook=`// Custom Data Fetching Hook
import { useState, useEffect } from 'react';

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, {
          ...options,
          signal: abortController.signal
        });

        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }

        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [url]);

  const refetch = () => {
    setLoading(true);
    // Trigger re-fetch
  };

  return { data, loading, error, refetch };
}

// Usage
function UserList() {
  const { data, loading, error, refetch } = useFetch('https://api.example.com/users');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <button onClick={refetch}>Refresh</button>
      <ul>
        {data?.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

// Advanced hook with caching
function useAPI(endpoint, options = {}) {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    const cache = JSON.parse(localStorage.getItem(endpoint) || 'null');
    if (cache) {
      setState({ data: cache, loading: false, error: null });
    }

    fetch(\`https://api.example.com\${endpoint}\`, options)
      .then(res => res.json())
      .then(data => {
        localStorage.setItem(endpoint, JSON.stringify(data));
        setState({ data, loading: false, error: null });
      })
      .catch(error => {
        setState({ data: null, loading: false, error: error.message });
      });
  }, [endpoint]);

  return state;
}`,this.errorHandling=`// Error Handling Patterns
import { useState } from 'react';

// Error Boundary for fetch errors
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong: {this.state.error?.message}</div>;
    }
    return this.props.children;
  }
}

// Retry logic
function useRetryFetch(url, maxRetries = 3) {
  const [retries, setRetries] = useState(0);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWithRetry = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed');
      const result = await response.json();
      setData(result);
      setError(null);
    } catch (err) {
      if (retries < maxRetries) {
        setTimeout(() => {
          setRetries(retries + 1);
          fetchWithRetry();
        }, 1000 * Math.pow(2, retries)); // Exponential backoff
      } else {
        setError(err.message);
      }
    }
  };

  useEffect(() => {
    fetchWithRetry();
  }, [url]);

  return { data, error, retries };
}

// Global error handler
const handleAPIError = (error) => {
  if (error.response) {
    // Server responded with error
    switch (error.response.status) {
      case 400:
        return 'Bad Request';
      case 401:
        return 'Unauthorized - Please login';
      case 403:
        return 'Forbidden';
      case 404:
        return 'Not Found';
      case 500:
        return 'Server Error';
      default:
        return 'An error occurred';
    }
  } else if (error.request) {
    // Request made but no response
    return 'Network Error - Please check your connection';
  } else {
    // Something else happened
    return error.message;
  }
};`,this.comparison=`// Data Fetching Solutions Comparison

// \u2705 Fetch API (Native)
// Pros: Built-in, no dependencies, modern browsers
// Cons: Verbose, no retry/caching, manual error handling
// Best for: Simple requests, no external deps needed

// \u2705 Axios
// Pros: Interceptors, automatic JSON parsing, better errors
// Cons: Extra dependency (~5KB), not native
// Best for: Complex APIs, interceptors needed, better DX

// \u2705 React Query / TanStack Query
// Pros: Caching, auto-refetch, optimistic updates, dev tools
// Cons: Learning curve, extra bundle (~12KB)
// Best for: Complex data requirements, mutations, caching

// \u2705 SWR
// Pros: Lightweight, simple API, revalidation, optimistic UI
// Cons: Less features than React Query
// Best for: Simple caching needs, real-time data

// \u2705 Custom Hook
// Pros: Full control, no dependencies, tailored to needs
// Cons: More code to maintain, fewer features
// Best for: Simple cases, learning, specific requirements

// Bundle Size:
// Fetch: 0KB (built-in)
// Axios: ~5KB
// SWR: ~4KB
// React Query: ~12KB
// Custom Hook: ~1KB

// Performance:
// SWR \u2248 React Query > Axios > Fetch > Custom Hook

// Features Comparison:
//                    Fetch  Axios  RQ   SWR  Custom
// Caching            \u274C     \u274C     \u2705   \u2705   \u274C
// Auto-refetch       \u274C     \u274C     \u2705   \u2705   \u274C
// Interceptors       \u274C     \u2705     \u274C   \u274C   \u274C
// Retry logic        \u274C     \u274C     \u2705   \u2705   \u26A0\uFE0F
// Optimistic updates \u274C     \u274C     \u2705   \u2705   \u274C
// Dev tools          \u274C     \u274C     \u2705   \u274C   \u274C
// TypeScript         \u26A0\uFE0F     \u2705     \u2705   \u2705   \u2705`}static{this.\u0275fac=function(s){return new(s||a)}}static{this.\u0275cmp=l({type:a,selectors:[["app-react-datafetching"]],standalone:!0,features:[u],decls:153,vars:7,consts:[[1,"container"],["label","Fetch API"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],["label","Axios"],["label","React Query"],["label","SWR"],["label","Custom Hook"],["label","Error Handling"],["label","Comparison"]],template:function(s,o){s&1&&(r(0,"div",0)(1,"h1"),t(2,"React Data Fetching"),e(),r(3,"p"),t(4,"Learn different approaches to fetching and managing data in React applications."),e(),r(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),t(9,"Native Fetch API"),e(),r(10,"div",3)(11,"p")(12,"strong"),t(13,"Fetch API"),e(),t(14," is the built-in browser API for making HTTP requests."),e(),r(15,"ul")(16,"li"),t(17,"Built into modern browsers"),e(),r(18,"li"),t(19,"Promise-based API"),e(),r(20,"li"),t(21,"No external dependencies"),e(),r(22,"li"),t(23,"Manual error handling"),e()()(),r(24,"pre")(25,"code",4),t(26),e()()()(),r(27,"mat-tab",5)(28,"div",2)(29,"h2"),t(30,"Axios - HTTP Client"),e(),r(31,"div",3)(32,"p")(33,"strong"),t(34,"Axios"),e(),t(35," is a popular promise-based HTTP client with additional features."),e(),r(36,"ul")(37,"li"),t(38,"Automatic JSON transformation"),e(),r(39,"li"),t(40,"Request/response interceptors"),e(),r(41,"li"),t(42,"Better error handling"),e(),r(43,"li"),t(44,"Cancel requests"),e()()(),r(45,"pre")(46,"code",4),t(47),e()()()(),r(48,"mat-tab",6)(49,"div",2)(50,"h2"),t(51,"React Query - Powerful Data Fetching"),e(),r(52,"div",3)(53,"p")(54,"strong"),t(55,"React Query"),e(),t(56," provides hooks for fetching, caching, and updating server state."),e(),r(57,"ul")(58,"li"),t(59,"Automatic caching"),e(),r(60,"li"),t(61,"Background refetching"),e(),r(62,"li"),t(63,"Optimistic updates"),e(),r(64,"li"),t(65,"Powerful dev tools"),e()()(),r(66,"pre")(67,"code",4),t(68),e()()()(),r(69,"mat-tab",7)(70,"div",2)(71,"h2"),t(72,"SWR - Stale-While-Revalidate"),e(),r(73,"div",3)(74,"p")(75,"strong"),t(76,"SWR"),e(),t(77," is a lightweight library for data fetching with automatic revalidation."),e(),r(78,"ul")(79,"li"),t(80,"Lightweight (~4KB)"),e(),r(81,"li"),t(82,"Revalidate on focus"),e(),r(83,"li"),t(84,"Interval polling"),e(),r(85,"li"),t(86,"Optimistic UI"),e()()(),r(87,"pre")(88,"code",4),t(89),e()()()(),r(90,"mat-tab",8)(91,"div",2)(92,"h2"),t(93,"Custom Data Fetching Hook"),e(),r(94,"div",3)(95,"p")(96,"strong"),t(97,"Custom hooks"),e(),t(98," provide full control over data fetching logic."),e(),r(99,"ul")(100,"li"),t(101,"No external dependencies"),e(),r(102,"li"),t(103,"Tailored to specific needs"),e(),r(104,"li"),t(105,"Learning opportunity"),e(),r(106,"li"),t(107,"AbortController support"),e()()(),r(108,"pre")(109,"code",4),t(110),e()()()(),r(111,"mat-tab",9)(112,"div",2)(113,"h2"),t(114,"Error Handling Patterns"),e(),r(115,"div",3)(116,"p")(117,"strong"),t(118,"Proper error handling"),e(),t(119," improves user experience and app reliability."),e(),r(120,"ul")(121,"li"),t(122,"Error boundaries"),e(),r(123,"li"),t(124,"Retry logic"),e(),r(125,"li"),t(126,"Exponential backoff"),e(),r(127,"li"),t(128,"User-friendly messages"),e()()(),r(129,"pre")(130,"code",4),t(131),e()()()(),r(132,"mat-tab",10)(133,"div",2)(134,"h2"),t(135,"Data Fetching Solutions Comparison"),e(),r(136,"div",3)(137,"p")(138,"strong"),t(139,"Choose the right solution"),e(),t(140," based on your application's data requirements."),e(),r(141,"ul")(142,"li"),t(143,"Consider caching needs"),e(),r(144,"li"),t(145,"Bundle size impact"),e(),r(146,"li"),t(147,"Feature requirements"),e(),r(148,"li"),t(149,"Team expertise"),e()()(),r(150,"pre")(151,"code",4),t(152),e()()()()()()),s&2&&(n(26),i(o.fetchAPI),n(21),i(o.axios),n(21),i(o.reactQuery),n(21),i(o.swr),n(21),i(o.customHook),n(21),i(o.errorHandling),n(21),i(o.comparison))},dependencies:[m,c,d],styles:[".container[_ngcontent-%COMP%]{padding:2rem;max-width:1200px;margin:0 auto}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#333;margin-bottom:.5rem}.container[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#666;margin-bottom:2rem;font-size:1.1rem}.tab-content[_ngcontent-%COMP%]{padding:1.5rem 0}.tab-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#333;margin-bottom:1rem}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]{background:#f8f9fa;border-left:4px solid #ff6b35;padding:1rem;margin-bottom:1.5rem;border-radius:4px}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:.5rem;color:#333}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:.5rem 0 0 1.5rem;color:#666}.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:.25rem 0}.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:#282c34;border-radius:8px;padding:1.5rem;overflow-x:auto;margin:1rem 0}.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#abb2bf;font-family:Fira Code,Consolas,monospace;font-size:.9rem;line-height:1.6}"]})}}return a})();export{S as ReactDatafetchingComponent};
