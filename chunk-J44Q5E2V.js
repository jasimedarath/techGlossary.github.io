import{a as p,b as f,c as g,d as h}from"./chunk-GNZ74KMC.js";import"./chunk-XAZLOLJU.js";import"./chunk-SZTU5CXE.js";import{Ia as a,Ya as o,da as d,hb as t,ib as e,mb as s,ub as r,vb as l,zb as m}from"./chunk-KMNIY7WT.js";function x(n,u){if(n&1&&(t(0,"div",9)(1,"h2"),r(2,"Native Fetch API"),e(),t(3,"div",10)(4,"p")(5,"strong"),r(6,"Fetch API"),e(),r(7," is the built-in browser API for making HTTP requests."),e(),t(8,"ul")(9,"li"),r(10,"Built into modern browsers"),e(),t(11,"li"),r(12,"Promise-based API"),e(),t(13,"li"),r(14,"No external dependencies"),e(),t(15,"li"),r(16,"Manual error handling"),e()()(),t(17,"pre")(18,"code",11),r(19),e()()()),n&2){let i=s();a(19),l(i.fetchAPI)}}function S(n,u){if(n&1&&(t(0,"div",9)(1,"h2"),r(2,"Axios - HTTP Client"),e(),t(3,"div",10)(4,"p")(5,"strong"),r(6,"Axios"),e(),r(7," is a popular promise-based HTTP client with additional features."),e(),t(8,"ul")(9,"li"),r(10,"Automatic JSON transformation"),e(),t(11,"li"),r(12,"Request/response interceptors"),e(),t(13,"li"),r(14,"Better error handling"),e(),t(15,"li"),r(16,"Cancel requests"),e()()(),t(17,"pre")(18,"code",11),r(19),e()()()),n&2){let i=s();a(19),l(i.axios)}}function E(n,u){if(n&1&&(t(0,"div",9)(1,"h2"),r(2,"React Query - Powerful Data Fetching"),e(),t(3,"div",10)(4,"p")(5,"strong"),r(6,"React Query"),e(),r(7," provides hooks for fetching, caching, and updating server state."),e(),t(8,"ul")(9,"li"),r(10,"Automatic caching"),e(),t(11,"li"),r(12,"Background refetching"),e(),t(13,"li"),r(14,"Optimistic updates"),e(),t(15,"li"),r(16,"Powerful dev tools"),e()()(),t(17,"pre")(18,"code",11),r(19),e()()()),n&2){let i=s();a(19),l(i.reactQuery)}}function v(n,u){if(n&1&&(t(0,"div",9)(1,"h2"),r(2,"SWR - Stale-While-Revalidate"),e(),t(3,"div",10)(4,"p")(5,"strong"),r(6,"SWR"),e(),r(7," is a lightweight library for data fetching with automatic revalidation."),e(),t(8,"ul")(9,"li"),r(10,"Lightweight (~4KB)"),e(),t(11,"li"),r(12,"Revalidate on focus"),e(),t(13,"li"),r(14,"Interval polling"),e(),t(15,"li"),r(16,"Optimistic UI"),e()()(),t(17,"pre")(18,"code",11),r(19),e()()()),n&2){let i=s();a(19),l(i.swr)}}function C(n,u){if(n&1&&(t(0,"div",9)(1,"h2"),r(2,"Custom Data Fetching Hook"),e(),t(3,"div",10)(4,"p")(5,"strong"),r(6,"Custom hooks"),e(),r(7," provide full control over data fetching logic."),e(),t(8,"ul")(9,"li"),r(10,"No external dependencies"),e(),t(11,"li"),r(12,"Tailored to specific needs"),e(),t(13,"li"),r(14,"Learning opportunity"),e(),t(15,"li"),r(16,"AbortController support"),e()()(),t(17,"pre")(18,"code",11),r(19),e()()()),n&2){let i=s();a(19),l(i.customHook)}}function b(n,u){if(n&1&&(t(0,"div",9)(1,"h2"),r(2,"Error Handling Patterns"),e(),t(3,"div",10)(4,"p")(5,"strong"),r(6,"Proper error handling"),e(),r(7," improves user experience and app reliability."),e(),t(8,"ul")(9,"li"),r(10,"Error boundaries"),e(),t(11,"li"),r(12,"Retry logic"),e(),t(13,"li"),r(14,"Exponential backoff"),e(),t(15,"li"),r(16,"User-friendly messages"),e()()(),t(17,"pre")(18,"code",11),r(19),e()()()),n&2){let i=s();a(19),l(i.errorHandling)}}function y(n,u){if(n&1&&(t(0,"div",9)(1,"h2"),r(2,"Data Fetching Solutions Comparison"),e(),t(3,"div",10)(4,"p")(5,"strong"),r(6,"Choose the right solution"),e(),r(7," based on your application's data requirements."),e(),t(8,"ul")(9,"li"),r(10,"Consider caching needs"),e(),t(11,"li"),r(12,"Bundle size impact"),e(),t(13,"li"),r(14,"Feature requirements"),e(),t(15,"li"),r(16,"Team expertise"),e()()(),t(17,"pre")(18,"code",11),r(19),e()()()),n&2){let i=s();a(19),l(i.comparison)}}var k=(()=>{class n{constructor(){this.fetchAPI=`// Native Fetch API
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
// TypeScript         \u26A0\uFE0F     \u2705     \u2705   \u2705   \u2705`}static{this.\u0275fac=function(c){return new(c||n)}}static{this.\u0275cmp=d({type:n,selectors:[["app-react-datafetching"]],standalone:!0,features:[m],decls:20,vars:0,consts:[[1,"container"],["label","Fetch API"],["matTabContent",""],["label","Axios"],["label","React Query"],["label","SWR"],["label","Custom Hook"],["label","Error Handling"],["label","Comparison"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"]],template:function(c,P){c&1&&(t(0,"div",0)(1,"h1"),r(2,"React Data Fetching"),e(),t(3,"p"),r(4,"Learn different approaches to fetching and managing data in React applications."),e(),t(5,"mat-tab-group")(6,"mat-tab",1),o(7,x,20,1,"ng-template",2),e(),t(8,"mat-tab",3),o(9,S,20,1,"ng-template",2),e(),t(10,"mat-tab",4),o(11,E,20,1,"ng-template",2),e(),t(12,"mat-tab",5),o(13,v,20,1,"ng-template",2),e(),t(14,"mat-tab",6),o(15,C,20,1,"ng-template",2),e(),t(16,"mat-tab",7),o(17,b,20,1,"ng-template",2),e(),t(18,"mat-tab",8),o(19,y,20,1,"ng-template",2),e()()())},dependencies:[h,p,f,g],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return n})();export{k as ReactDatafetchingComponent};
