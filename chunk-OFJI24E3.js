import{b as m,c as d,d as u}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as i,da as l,gb as n,hb as t,tb as e,ub as r,yb as c}from"./chunk-WGQ2ELTG.js";var f=(()=>{class s{constructor(){this.jestBasics=`// Jest - JavaScript Testing Framework
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
});`}ngAfterViewChecked(){typeof Prism<"u"&&Prism.highlightAll()}static{this.\u0275fac=function(a){return new(a||s)}}static{this.\u0275cmp=l({type:s,selectors:[["app-react-testing"]],standalone:!0,features:[c],decls:168,vars:7,consts:[[1,"container"],["label","Jest Basics"],[1,"tab-content"],[1,"info-box"],[1,"language-jsx"],["label","React Testing Library"],["label","Query Methods"],["label","Async Testing"],["label","Testing Hooks"],["label","Mocking & Context"],["label","Best Practices"],[1,"info-box","success"],[1,"info-box","warning"]],template:function(a,o){a&1&&(n(0,"div",0)(1,"h1"),e(2,"React Testing"),t(),n(3,"p"),e(4,"Learn how to test React applications using Jest and React Testing Library for reliable, maintainable tests."),t(),n(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),e(9,"Jest Testing Framework"),t(),n(10,"div",3)(11,"p")(12,"strong"),e(13,"Jest"),t(),e(14," is a JavaScript testing framework with built-in assertions, mocking, and code coverage."),t(),n(15,"ul")(16,"li"),e(17,"Zero configuration for most projects"),t(),n(18,"li"),e(19,"Snapshot testing"),t(),n(20,"li"),e(21,"Mock functions and modules"),t(),n(22,"li"),e(23,"Code coverage reports"),t()()(),n(24,"pre")(25,"code",4),e(26),t()()()(),n(27,"mat-tab",5)(28,"div",2)(29,"h2"),e(30,"React Testing Library"),t(),n(31,"div",3)(32,"p")(33,"strong"),e(34,"React Testing Library"),t(),e(35," helps test React components the way users interact with them."),t(),n(36,"ul")(37,"li"),e(38,"Focus on behavior, not implementation"),t(),n(39,"li"),e(40,"Query elements like users do"),t(),n(41,"li"),e(42,"Encourage accessible markup"),t(),n(43,"li"),e(44,"Works with DOM Testing Library"),t()()(),n(45,"pre")(46,"code",4),e(47),t()()()(),n(48,"mat-tab",6)(49,"div",2)(50,"h2"),e(51,"Query Methods"),t(),n(52,"div",3)(53,"p"),e(54,"Different query methods for finding elements in your tests."),t(),n(55,"ul")(56,"li")(57,"strong"),e(58,"getBy:"),t(),e(59," Throws error if not found"),t(),n(60,"li")(61,"strong"),e(62,"queryBy:"),t(),e(63," Returns null if not found"),t(),n(64,"li")(65,"strong"),e(66,"findBy:"),t(),e(67," Async, waits for element"),t(),n(68,"li")(69,"strong"),e(70,"getAllBy/queryAllBy/findAllBy:"),t(),e(71," Multiple elements"),t()()(),n(72,"pre")(73,"code",4),e(74),t()()()(),n(75,"mat-tab",7)(76,"div",2)(77,"h2"),e(78,"Testing Async Code"),t(),n(79,"div",3)(80,"p"),e(81,"Test asynchronous operations like API calls, loading states, and timers."),t(),n(82,"ul")(83,"li"),e(84,"findBy queries for async elements"),t(),n(85,"li"),e(86,"waitFor for complex conditions"),t(),n(87,"li"),e(88,"Mock fetch/API calls"),t(),n(89,"li"),e(90,"Test loading and error states"),t()()(),n(91,"pre")(92,"code",4),e(93),t()()()(),n(94,"mat-tab",8)(95,"div",2)(96,"h2"),e(97,"Testing Custom Hooks"),t(),n(98,"div",3)(99,"p"),e(100,"Use "),n(101,"strong"),e(102,"renderHook"),t(),e(103," to test custom hooks in isolation."),t(),n(104,"ul")(105,"li"),e(106,"Test hook logic independently"),t(),n(107,"li"),e(108,"Test with different props"),t(),n(109,"li"),e(110,"Test hook state updates"),t(),n(111,"li"),e(112,"Use act() for state changes"),t()()(),n(113,"pre")(114,"code",4),e(115),t()()()(),n(116,"mat-tab",9)(117,"div",2)(118,"h2"),e(119,"Mocking and Context"),t(),n(120,"div",3)(121,"p"),e(122,"Mock modules, provide context, and use fake timers in tests."),t(),n(123,"ul")(124,"li"),e(125,"Mock API modules"),t(),n(126,"li"),e(127,"Provide context in tests"),t(),n(128,"li"),e(129,"Mock timers for debounce/throttle"),t(),n(130,"li"),e(131,"Custom render with providers"),t()()(),n(132,"pre")(133,"code",4),e(134),t()()()(),n(135,"mat-tab",10)(136,"div",2)(137,"h2"),e(138,"Testing Best Practices"),t(),n(139,"div",11)(140,"h3"),e(141,"\u2713 Do's"),t(),n(142,"ul")(143,"li"),e(144,"Test user behavior, not implementation"),t(),n(145,"li"),e(146,"Use accessible queries (getByRole)"),t(),n(147,"li"),e(148,"Test error states and edge cases"),t(),n(149,"li"),e(150,"Keep tests isolated and independent"),t(),n(151,"li"),e(152,"Use meaningful test descriptions"),t()()(),n(153,"div",12)(154,"h3"),e(155,"\u2717 Don'ts"),t(),n(156,"ul")(157,"li"),e(158,"Don't test implementation details"),t(),n(159,"li"),e(160,"Don't access component state directly"),t(),n(161,"li"),e(162,"Don't rely on internal structure"),t(),n(163,"li"),e(164,"Avoid testing third-party libraries"),t()()(),n(165,"pre")(166,"code",4),e(167),t()()()()()()),a&2&&(i(26),r(o.jestBasics),i(21),r(o.reactTestingLibrary),i(27),r(o.queryMethods),i(19),r(o.asyncTesting),i(22),r(o.hooksTest),i(19),r(o.mockingContext),i(33),r(o.bestPractices))},dependencies:[u,m,d],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#abb2bf;font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return s})();export{f as ReactTestingComponent};
