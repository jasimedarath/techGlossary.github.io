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

// src/app/components/react/react-datafetching/react-datafetching.component.ts
var ReactDatafetchingComponent = class _ReactDatafetchingComponent {
  constructor() {
    this.fetchAPI = `// Native Fetch API
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
}`;
    this.axios = `// Axios - HTTP Client
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
};`;
    this.reactQuery = `// React Query - Data Fetching Library
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
}`;
    this.swr = `// SWR - React Hooks for Data Fetching
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
}`;
    this.customHook = `// Custom Data Fetching Hook
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
}`;
    this.errorHandling = `// Error Handling Patterns
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
};`;
    this.comparison = `// Data Fetching Solutions Comparison

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
// TypeScript         \u26A0\uFE0F     \u2705     \u2705   \u2705   \u2705`;
  }
  static {
    this.\u0275fac = function ReactDatafetchingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReactDatafetchingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReactDatafetchingComponent, selectors: [["app-react-datafetching"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 153, vars: 7, consts: [[1, "container"], ["label", "Fetch API"], [1, "tab-content"], [1, "info-box"], [1, "language-jsx"], ["label", "Axios"], ["label", "React Query"], ["label", "SWR"], ["label", "Custom Hook"], ["label", "Error Handling"], ["label", "Comparison"]], template: function ReactDatafetchingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "React Data Fetching");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Learn different approaches to fetching and managing data in React applications.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "Native Fetch API");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "Fetch API");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " is the built-in browser API for making HTTP requests.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "Built into modern browsers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "Promise-based API");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li");
        \u0275\u0275text(21, "No external dependencies");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275text(23, "Manual error handling");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "pre")(25, "code", 4);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "mat-tab", 5)(28, "div", 2)(29, "h2");
        \u0275\u0275text(30, "Axios - HTTP Client");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 3)(32, "p")(33, "strong");
        \u0275\u0275text(34, "Axios");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " is a popular promise-based HTTP client with additional features.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "ul")(37, "li");
        \u0275\u0275text(38, "Automatic JSON transformation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "li");
        \u0275\u0275text(40, "Request/response interceptors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "li");
        \u0275\u0275text(42, "Better error handling");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li");
        \u0275\u0275text(44, "Cancel requests");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "pre")(46, "code", 4);
        \u0275\u0275text(47);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(48, "mat-tab", 6)(49, "div", 2)(50, "h2");
        \u0275\u0275text(51, "React Query - Powerful Data Fetching");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 3)(53, "p")(54, "strong");
        \u0275\u0275text(55, "React Query");
        \u0275\u0275elementEnd();
        \u0275\u0275text(56, " provides hooks for fetching, caching, and updating server state.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "ul")(58, "li");
        \u0275\u0275text(59, "Automatic caching");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "li");
        \u0275\u0275text(61, "Background refetching");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "li");
        \u0275\u0275text(63, "Optimistic updates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "li");
        \u0275\u0275text(65, "Powerful dev tools");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(66, "pre")(67, "code", 4);
        \u0275\u0275text(68);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(69, "mat-tab", 7)(70, "div", 2)(71, "h2");
        \u0275\u0275text(72, "SWR - Stale-While-Revalidate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 3)(74, "p")(75, "strong");
        \u0275\u0275text(76, "SWR");
        \u0275\u0275elementEnd();
        \u0275\u0275text(77, " is a lightweight library for data fetching with automatic revalidation.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "ul")(79, "li");
        \u0275\u0275text(80, "Lightweight (~4KB)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "li");
        \u0275\u0275text(82, "Revalidate on focus");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "li");
        \u0275\u0275text(84, "Interval polling");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "li");
        \u0275\u0275text(86, "Optimistic UI");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(87, "pre")(88, "code", 4);
        \u0275\u0275text(89);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(90, "mat-tab", 8)(91, "div", 2)(92, "h2");
        \u0275\u0275text(93, "Custom Data Fetching Hook");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "div", 3)(95, "p")(96, "strong");
        \u0275\u0275text(97, "Custom hooks");
        \u0275\u0275elementEnd();
        \u0275\u0275text(98, " provide full control over data fetching logic.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "ul")(100, "li");
        \u0275\u0275text(101, "No external dependencies");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "li");
        \u0275\u0275text(103, "Tailored to specific needs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "li");
        \u0275\u0275text(105, "Learning opportunity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "li");
        \u0275\u0275text(107, "AbortController support");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(108, "pre")(109, "code", 4);
        \u0275\u0275text(110);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(111, "mat-tab", 9)(112, "div", 2)(113, "h2");
        \u0275\u0275text(114, "Error Handling Patterns");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "div", 3)(116, "p")(117, "strong");
        \u0275\u0275text(118, "Proper error handling");
        \u0275\u0275elementEnd();
        \u0275\u0275text(119, " improves user experience and app reliability.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "ul")(121, "li");
        \u0275\u0275text(122, "Error boundaries");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "li");
        \u0275\u0275text(124, "Retry logic");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "li");
        \u0275\u0275text(126, "Exponential backoff");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "li");
        \u0275\u0275text(128, "User-friendly messages");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(129, "pre")(130, "code", 4);
        \u0275\u0275text(131);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(132, "mat-tab", 10)(133, "div", 2)(134, "h2");
        \u0275\u0275text(135, "Data Fetching Solutions Comparison");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "div", 3)(137, "p")(138, "strong");
        \u0275\u0275text(139, "Choose the right solution");
        \u0275\u0275elementEnd();
        \u0275\u0275text(140, " based on your application's data requirements.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "ul")(142, "li");
        \u0275\u0275text(143, "Consider caching needs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "li");
        \u0275\u0275text(145, "Bundle size impact");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "li");
        \u0275\u0275text(147, "Feature requirements");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "li");
        \u0275\u0275text(149, "Team expertise");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(150, "pre")(151, "code", 4);
        \u0275\u0275text(152);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(26);
        \u0275\u0275textInterpolate(ctx.fetchAPI);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.axios);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.reactQuery);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.swr);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.customHook);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.errorHandling);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.comparison);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 0.5rem;\n}\n.container[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 2rem;\n  font-size: 1.1rem;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 1.5rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 1rem;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-left: 4px solid #ff6b35;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  border-radius: 4px;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  color: #333;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0 1.5rem;\n  color: #666;\n}\n.tab-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background: #282c34;\n  border-radius: 8px;\n  padding: 1.5rem;\n  overflow-x: auto;\n  margin: 1rem 0;\n}\n.tab-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #abb2bf;\n  font-family:\n    "Fira Code",\n    "Consolas",\n    monospace;\n  font-size: 0.9rem;\n  line-height: 1.6;\n}\n/*# sourceMappingURL=react-datafetching.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReactDatafetchingComponent, { className: "ReactDatafetchingComponent", filePath: "src\\app\\components\\react\\react-datafetching\\react-datafetching.component.ts", lineNumber: 11 });
})();
export {
  ReactDatafetchingComponent
};
//# sourceMappingURL=chunk-RTX4O4ME.js.map
