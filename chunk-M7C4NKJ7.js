import"./chunk-4ITEIGFF.js";import"./chunk-WCULWZKC.js";import{a as y}from"./chunk-VDRUEQXK.js";import{a as x,b as g,c as f,d as h}from"./chunk-GNZ74KMC.js";import"./chunk-XAZLOLJU.js";import"./chunk-SZTU5CXE.js";import{Ia as r,Ya as s,da as u,e as b,hb as t,ib as e,mb as a,ub as n,vb as l,zb as p}from"./chunk-KMNIY7WT.js";var d=b(y());function T(i,c){if(i&1&&(t(0,"div",9)(1,"h2"),n(2,"Jest Testing Framework"),e(),t(3,"div",10)(4,"p")(5,"strong"),n(6,"Jest"),e(),n(7," is a JavaScript testing framework with built-in assertions, mocking, and code coverage."),e(),t(8,"ul")(9,"li"),n(10,"Zero configuration for most projects"),e(),t(11,"li"),n(12,"Snapshot testing"),e(),t(13,"li"),n(14,"Mock functions and modules"),e(),t(15,"li"),n(16,"Code coverage reports"),e()()(),t(17,"pre")(18,"code",11),n(19),e()()()),i&2){let o=a();r(19),l(o.jestBasics)}}function B(i,c){if(i&1&&(t(0,"div",9)(1,"h2"),n(2,"React Testing Library"),e(),t(3,"div",10)(4,"p")(5,"strong"),n(6,"React Testing Library"),e(),n(7," helps test React components the way users interact with them."),e(),t(8,"ul")(9,"li"),n(10,"Focus on behavior, not implementation"),e(),t(11,"li"),n(12,"Query elements like users do"),e(),t(13,"li"),n(14,"Encourage accessible markup"),e(),t(15,"li"),n(16,"Works with DOM Testing Library"),e()()(),t(17,"pre")(18,"code",11),n(19),e()()()),i&2){let o=a();r(19),l(o.reactTestingLibrary)}}function E(i,c){if(i&1&&(t(0,"div",9)(1,"h2"),n(2,"Query Methods"),e(),t(3,"div",10)(4,"p"),n(5,"Different query methods for finding elements in your tests."),e(),t(6,"ul")(7,"li")(8,"strong"),n(9,"getBy:"),e(),n(10," Throws error if not found"),e(),t(11,"li")(12,"strong"),n(13,"queryBy:"),e(),n(14," Returns null if not found"),e(),t(15,"li")(16,"strong"),n(17,"findBy:"),e(),n(18," Async, waits for element"),e(),t(19,"li")(20,"strong"),n(21,"getAllBy/queryAllBy/findAllBy:"),e(),n(22," Multiple elements"),e()()(),t(23,"pre")(24,"code",11),n(25),e()()()),i&2){let o=a();r(25),l(o.queryMethods)}}function v(i,c){if(i&1&&(t(0,"div",9)(1,"h2"),n(2,"Testing Async Code"),e(),t(3,"div",10)(4,"p"),n(5,"Test asynchronous operations like API calls, loading states, and timers."),e(),t(6,"ul")(7,"li"),n(8,"findBy queries for async elements"),e(),t(9,"li"),n(10,"waitFor for complex conditions"),e(),t(11,"li"),n(12,"Mock fetch/API calls"),e(),t(13,"li"),n(14,"Test loading and error states"),e()()(),t(15,"pre")(16,"code",11),n(17),e()()()),i&2){let o=a();r(17),l(o.asyncTesting)}}function C(i,c){if(i&1&&(t(0,"div",9)(1,"h2"),n(2,"Testing Custom Hooks"),e(),t(3,"div",10)(4,"p"),n(5,"Use "),t(6,"strong"),n(7,"renderHook"),e(),n(8," to test custom hooks in isolation."),e(),t(9,"ul")(10,"li"),n(11,"Test hook logic independently"),e(),t(12,"li"),n(13,"Test with different props"),e(),t(14,"li"),n(15,"Test hook state updates"),e(),t(16,"li"),n(17,"Use act() for state changes"),e()()(),t(18,"pre")(19,"code",11),n(20),e()()()),i&2){let o=a();r(20),l(o.hooksTest)}}function S(i,c){if(i&1&&(t(0,"div",9)(1,"h2"),n(2,"Mocking and Context"),e(),t(3,"div",10)(4,"p"),n(5,"Mock modules, provide context, and use fake timers in tests."),e(),t(6,"ul")(7,"li"),n(8,"Mock API modules"),e(),t(9,"li"),n(10,"Provide context in tests"),e(),t(11,"li"),n(12,"Mock timers for debounce/throttle"),e(),t(13,"li"),n(14,"Custom render with providers"),e()()(),t(15,"pre")(16,"code",11),n(17),e()()()),i&2){let o=a();r(17),l(o.mockingContext)}}function k(i,c){if(i&1&&(t(0,"div",9)(1,"h2"),n(2,"Testing Best Practices"),e(),t(3,"div",12)(4,"h3"),n(5,"\u2713 Do's"),e(),t(6,"ul")(7,"li"),n(8,"Test user behavior, not implementation"),e(),t(9,"li"),n(10,"Use accessible queries (getByRole)"),e(),t(11,"li"),n(12,"Test error states and edge cases"),e(),t(13,"li"),n(14,"Keep tests isolated and independent"),e(),t(15,"li"),n(16,"Use meaningful test descriptions"),e()()(),t(17,"div",13)(18,"h3"),n(19,"\u2717 Don'ts"),e(),t(20,"ul")(21,"li"),n(22,"Don't test implementation details"),e(),t(23,"li"),n(24,"Don't access component state directly"),e(),t(25,"li"),n(26,"Don't rely on internal structure"),e(),t(27,"li"),n(28,"Avoid testing third-party libraries"),e()()(),t(29,"pre")(30,"code",11),n(31),e()()()),i&2){let o=a();r(31),l(o.bestPractices)}}var A=(()=>{class i{constructor(){this.jestBasics=`// Jest - JavaScript Testing Framework
// package.json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}

// Basic test structure
describe('Calculator', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtracts two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it('multiplies two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });
});

// Matchers
expect(value).toBe(5);              // Exact equality
expect(value).toEqual({a: 1});    // Deep equality
expect(value).toBeTruthy();         // Truthy value
expect(value).toBeNull();           // Null
expect(array).toContain('item');    // Array contains
expect(fn).toThrow();               // Function throws`,this.reactTestingLibrary=`// React Testing Library - Test components like users do
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

// Basic component test
test('renders button with text', () => {
  render(<Button>Click Me</Button>);
  
  const button = screen.getByText('Click Me');
  expect(button).toBeInTheDocument();
});

// Testing user interactions
test('calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click</Button>);
  
  const button = screen.getByRole('button');
  fireEvent.click(button);
  
  expect(handleClick).toHaveBeenCalledTimes(1);
});

// User Event (more realistic)
test('user can type in input', async () => {
  render(<SearchInput />);
  
  const input = screen.getByRole('textbox');
  await userEvent.type(input, 'Hello World');
  
  expect(input).toHaveValue('Hello World');
});`,this.queryMethods=`// Query Methods in React Testing Library

// getBy - Throws error if not found
const button = screen.getByRole('button');
const heading = screen.getByText('Hello');
const input = screen.getByLabelText('Email');
const element = screen.getByTestId('custom-element');

// queryBy - Returns null if not found
const button = screen.queryByText('Optional Button');
if (button) {
  // Button exists
}

// findBy - Async, waits for element
const button = await screen.findByText('Async Button');

// Multiple elements
const buttons = screen.getAllByRole('button');
const items = screen.queryAllByRole('listitem');

// Priority order (recommended):
// 1. getByRole (most accessible)
// 2. getByLabelText (forms)
// 3. getByPlaceholderText (forms)
// 4. getByText (non-interactive elements)
// 5. getByDisplayValue (forms)
// 6. getByAltText (images)
// 7. getByTitle
// 8. getByTestId (last resort)

// Example with various queries
test('form validation', () => {
  render(<LoginForm />);
  
  const emailInput = screen.getByLabelText('Email');
  const submitButton = screen.getByRole('button', { name: /submit/i });
  const errorMessage = screen.queryByText('Invalid email');
  
  expect(errorMessage).not.toBeInTheDocument();
});`,this.asyncTesting=`// Testing Async Code and API Calls

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Mock API calls
global.fetch = jest.fn();

test('loads and displays user data', async () => {
  const mockUser = { name: 'John Doe', email: 'john@example.com' };
  
  fetch.mockResolvedValueOnce({
    json: async () => mockUser
  });

  render(<UserProfile userId="123" />);
  
  // Wait for loading to finish
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  
  // Wait for user data to appear
  const userName = await screen.findByText('John Doe');
  expect(userName).toBeInTheDocument();
  
  expect(fetch).toHaveBeenCalledWith('/api/users/123');
});

// Testing error states
test('displays error on failed fetch', async () => {
  fetch.mockRejectedValueOnce(new Error('Failed to fetch'));
  
  render(<UserProfile userId="123" />);
  
  const errorMessage = await screen.findByText(/error/i);
  expect(errorMessage).toBeInTheDocument();
});

// waitFor for complex async scenarios
test('updates on multiple changes', async () => {
  render(<Counter />);
  
  const button = screen.getByRole('button');
  
  await userEvent.click(button);
  await userEvent.click(button);
  
  await waitFor(() => {
    expect(screen.getByText('Count: 2')).toBeInTheDocument();
  });
});`,this.hooksTest=`// Testing Custom Hooks

import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

test('useCounter increments', () => {
  const { result } = renderHook(() => useCounter());
  
  expect(result.current.count).toBe(0);
  
  act(() => {
    result.current.increment();
  });
  
  expect(result.current.count).toBe(1);
});

// Testing hooks with props
test('useCounter with initial value', () => {
  const { result } = renderHook(() => useCounter(10));
  
  expect(result.current.count).toBe(10);
});

// Testing hooks with changing props
test('useCounter resets on prop change', () => {
  const { result, rerender } = renderHook(
    ({ initialValue }) => useCounter(initialValue),
    { initialProps: { initialValue: 0 } }
  );
  
  expect(result.current.count).toBe(0);
  
  rerender({ initialValue: 5 });
  expect(result.current.count).toBe(5);
});`,this.mockingContext=`// Testing with Context and Mocking

import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './ThemeContext';
import ThemedButton from './ThemedButton';

// Provide context in tests
test('renders with theme', () => {
  render(
    <ThemeProvider value={{ theme: 'dark' }}>
      <ThemedButton />
    </ThemeProvider>
  );
  
  const button = screen.getByRole('button');
  expect(button).toHaveClass('dark-theme');
});

// Mock modules
jest.mock('./api', () => ({
  fetchUser: jest.fn()
}));

import { fetchUser } from './api';

test('fetches user on mount', () => {
  fetchUser.mockResolvedValue({ name: 'John' });
  
  render(<UserProfile />);
  
  expect(fetchUser).toHaveBeenCalled();
});

// Mock timers
jest.useFakeTimers();

test('debounced search', () => {
  render(<SearchInput />);
  
  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'test' } });
  
  // Fast-forward time
  jest.advanceTimersByTime(500);
  
  expect(mockSearch).toHaveBeenCalledWith('test');
});

jest.useRealTimers();`,this.bestPractices=`// Testing Best Practices

// \u2713 Test behavior, not implementation
test('user can submit form', () => {
  render(<LoginForm />);
  
  userEvent.type(screen.getByLabelText('Email'), 'test@example.com');
  userEvent.type(screen.getByLabelText('Password'), 'password123');
  userEvent.click(screen.getByRole('button', { name: /login/i }));
  
  expect(mockLogin).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password123'
  });
});

// \u2713 Use accessible queries
screen.getByRole('button', { name: 'Submit' }); // Good
screen.getByTestId('submit-button');           // Last resort

// \u2713 Test error states and edge cases
test('shows error on invalid input', () => {
  render(<Form />);
  
  userEvent.click(screen.getByRole('button', { name: 'Submit' }));
  
  expect(screen.getByText('Email is required')).toBeInTheDocument();
});

// \u2713 Keep tests isolated
beforeEach(() => {
  // Reset mocks
  jest.clearAllMocks();
});

// \u2713 Use custom render with providers
const renderWithProviders = (ui, options) => {
  return render(
    <ThemeProvider>
      <AuthProvider>
        {ui}
      </AuthProvider>
    </ThemeProvider>,
    options
  );
};

// \u2717 Don't test implementation details
test('bad test', () => {
  const { result } = render(<Counter />);
  expect(result.state.count).toBe(0); // Bad!
});`}ngAfterViewChecked(){typeof d<"u"&&d.highlightAll()}static{this.\u0275fac=function(m){return new(m||i)}}static{this.\u0275cmp=u({type:i,selectors:[["app-react-testing"]],standalone:!0,features:[p],decls:20,vars:0,consts:[[1,"container"],["label","Jest Basics"],["matTabContent",""],["label","React Testing Library"],["label","Query Methods"],["label","Async Testing"],["label","Testing Hooks"],["label","Mocking & Context"],["label","Best Practices"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],[1,"info-box","success"],[1,"info-box","warning"]],template:function(m,w){m&1&&(t(0,"div",0)(1,"h1"),n(2,"React Testing"),e(),t(3,"p"),n(4,"Learn how to test React applications using Jest and React Testing Library for reliable, maintainable tests."),e(),t(5,"mat-tab-group")(6,"mat-tab",1),s(7,T,20,1,"ng-template",2),e(),t(8,"mat-tab",3),s(9,B,20,1,"ng-template",2),e(),t(10,"mat-tab",4),s(11,E,26,1,"ng-template",2),e(),t(12,"mat-tab",5),s(13,v,18,1,"ng-template",2),e(),t(14,"mat-tab",6),s(15,C,21,1,"ng-template",2),e(),t(16,"mat-tab",7),s(17,S,18,1,"ng-template",2),e(),t(18,"mat-tab",8),s(19,k,32,1,"ng-template",2),e()()())},dependencies:[h,x,g,f],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return i})();export{A as ReactTestingComponent};
