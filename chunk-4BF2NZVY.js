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

// src/app/components/react/react-testing/react-testing.component.ts
var ReactTestingComponent = class _ReactTestingComponent {
  constructor() {
    this.jestBasics = `// Jest - JavaScript Testing Framework
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
expect(fn).toThrow();               // Function throws`;
    this.reactTestingLibrary = `// React Testing Library - Test components like users do
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
});`;
    this.queryMethods = `// Query Methods in React Testing Library

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
});`;
    this.asyncTesting = `// Testing Async Code and API Calls

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
});`;
    this.hooksTest = `// Testing Custom Hooks

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
});`;
    this.mockingContext = `// Testing with Context and Mocking

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

jest.useRealTimers();`;
    this.bestPractices = `// Testing Best Practices

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
});`;
  }
  ngAfterViewChecked() {
    if (typeof Prism !== "undefined") {
      Prism.highlightAll();
    }
  }
  static {
    this.\u0275fac = function ReactTestingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReactTestingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReactTestingComponent, selectors: [["app-react-testing"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 168, vars: 7, consts: [[1, "container"], ["label", "Jest Basics"], [1, "tab-content"], [1, "info-box"], [1, "language-jsx"], ["label", "React Testing Library"], ["label", "Query Methods"], ["label", "Async Testing"], ["label", "Testing Hooks"], ["label", "Mocking & Context"], ["label", "Best Practices"], [1, "info-box", "success"], [1, "info-box", "warning"]], template: function ReactTestingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "React Testing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Learn how to test React applications using Jest and React Testing Library for reliable, maintainable tests.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "Jest Testing Framework");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "Jest");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " is a JavaScript testing framework with built-in assertions, mocking, and code coverage.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "Zero configuration for most projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "Snapshot testing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li");
        \u0275\u0275text(21, "Mock functions and modules");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275text(23, "Code coverage reports");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "pre")(25, "code", 4);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "mat-tab", 5)(28, "div", 2)(29, "h2");
        \u0275\u0275text(30, "React Testing Library");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 3)(32, "p")(33, "strong");
        \u0275\u0275text(34, "React Testing Library");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " helps test React components the way users interact with them.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "ul")(37, "li");
        \u0275\u0275text(38, "Focus on behavior, not implementation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "li");
        \u0275\u0275text(40, "Query elements like users do");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "li");
        \u0275\u0275text(42, "Encourage accessible markup");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li");
        \u0275\u0275text(44, "Works with DOM Testing Library");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "pre")(46, "code", 4);
        \u0275\u0275text(47);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(48, "mat-tab", 6)(49, "div", 2)(50, "h2");
        \u0275\u0275text(51, "Query Methods");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 3)(53, "p");
        \u0275\u0275text(54, "Different query methods for finding elements in your tests.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "ul")(56, "li")(57, "strong");
        \u0275\u0275text(58, "getBy:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(59, " Throws error if not found");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "li")(61, "strong");
        \u0275\u0275text(62, "queryBy:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(63, " Returns null if not found");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "li")(65, "strong");
        \u0275\u0275text(66, "findBy:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(67, " Async, waits for element");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "li")(69, "strong");
        \u0275\u0275text(70, "getAllBy/queryAllBy/findAllBy:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(71, " Multiple elements");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(72, "pre")(73, "code", 4);
        \u0275\u0275text(74);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(75, "mat-tab", 7)(76, "div", 2)(77, "h2");
        \u0275\u0275text(78, "Testing Async Code");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "div", 3)(80, "p");
        \u0275\u0275text(81, "Test asynchronous operations like API calls, loading states, and timers.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "ul")(83, "li");
        \u0275\u0275text(84, "findBy queries for async elements");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "li");
        \u0275\u0275text(86, "waitFor for complex conditions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "li");
        \u0275\u0275text(88, "Mock fetch/API calls");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "li");
        \u0275\u0275text(90, "Test loading and error states");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(91, "pre")(92, "code", 4);
        \u0275\u0275text(93);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(94, "mat-tab", 8)(95, "div", 2)(96, "h2");
        \u0275\u0275text(97, "Testing Custom Hooks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "div", 3)(99, "p");
        \u0275\u0275text(100, "Use ");
        \u0275\u0275elementStart(101, "strong");
        \u0275\u0275text(102, "renderHook");
        \u0275\u0275elementEnd();
        \u0275\u0275text(103, " to test custom hooks in isolation.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "ul")(105, "li");
        \u0275\u0275text(106, "Test hook logic independently");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "li");
        \u0275\u0275text(108, "Test with different props");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "li");
        \u0275\u0275text(110, "Test hook state updates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "li");
        \u0275\u0275text(112, "Use act() for state changes");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(113, "pre")(114, "code", 4);
        \u0275\u0275text(115);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(116, "mat-tab", 9)(117, "div", 2)(118, "h2");
        \u0275\u0275text(119, "Mocking and Context");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "div", 3)(121, "p");
        \u0275\u0275text(122, "Mock modules, provide context, and use fake timers in tests.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "ul")(124, "li");
        \u0275\u0275text(125, "Mock API modules");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "li");
        \u0275\u0275text(127, "Provide context in tests");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "li");
        \u0275\u0275text(129, "Mock timers for debounce/throttle");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "li");
        \u0275\u0275text(131, "Custom render with providers");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(132, "pre")(133, "code", 4);
        \u0275\u0275text(134);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(135, "mat-tab", 10)(136, "div", 2)(137, "h2");
        \u0275\u0275text(138, "Testing Best Practices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "div", 11)(140, "h3");
        \u0275\u0275text(141, "\u2713 Do's");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "ul")(143, "li");
        \u0275\u0275text(144, "Test user behavior, not implementation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "li");
        \u0275\u0275text(146, "Use accessible queries (getByRole)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "li");
        \u0275\u0275text(148, "Test error states and edge cases");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(149, "li");
        \u0275\u0275text(150, "Keep tests isolated and independent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "li");
        \u0275\u0275text(152, "Use meaningful test descriptions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(153, "div", 12)(154, "h3");
        \u0275\u0275text(155, "\u2717 Don'ts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "ul")(157, "li");
        \u0275\u0275text(158, "Don't test implementation details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(159, "li");
        \u0275\u0275text(160, "Don't access component state directly");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(161, "li");
        \u0275\u0275text(162, "Don't rely on internal structure");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(163, "li");
        \u0275\u0275text(164, "Avoid testing third-party libraries");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(165, "pre")(166, "code", 4);
        \u0275\u0275text(167);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(26);
        \u0275\u0275textInterpolate(ctx.jestBasics);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.reactTestingLibrary);
        \u0275\u0275advance(27);
        \u0275\u0275textInterpolate(ctx.queryMethods);
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(ctx.asyncTesting);
        \u0275\u0275advance(22);
        \u0275\u0275textInterpolate(ctx.hooksTest);
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(ctx.mockingContext);
        \u0275\u0275advance(33);
        \u0275\u0275textInterpolate(ctx.bestPractices);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #61dafb;\n  margin-bottom: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #282c34;\n  margin-top: 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  padding: 15px;\n  margin: 15px 0;\n  border-radius: 4px;\n}\n.info-box.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-left-color: #4caf50;\n}\n.info-box.warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #ff9800;\n}\n.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1976d2;\n}\n.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding-left: 20px;\n}\n.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05);\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\npre[_ngcontent-%COMP%] {\n  background: #282c34;\n  border-radius: 4px;\n  overflow-x: auto;\n  margin: 15px 0;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #abb2bf;\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n  font-size: 14px;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=react-testing.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReactTestingComponent, { className: "ReactTestingComponent", filePath: "src\\app\\components\\react\\react-testing\\react-testing.component.ts", lineNumber: 13 });
})();
export {
  ReactTestingComponent
};
//# sourceMappingURL=chunk-4BF2NZVY.js.map
