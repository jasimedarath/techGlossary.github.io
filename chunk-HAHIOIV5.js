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

// src/app/components/nextjs/nextjs-authentication/nextjs-authentication.component.ts
var NextjsAuthenticationComponent = class _NextjsAuthenticationComponent {
  constructor() {
    this.nextAuthSetup = `// NextAuth.js Setup
// npm install next-auth

// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth(&#123;
  providers: [
    GithubProvider(&#123;
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    &#125;),
    GoogleProvider(&#123;
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    &#125;),
    CredentialsProvider(&#123;
      name: 'Credentials',
      credentials: &#123;
        email: &#123; label: "Email", type: "email" &#125;,
        password: &#123; label: "Password", type: "password" &#125;
      &#125;,
      async authorize(credentials) &#123;
        const user = await verifyCredentials(credentials);
        if (user) &#123;
          return user;
        &#125;
        return null;
      &#125;
    &#125;),
  ],
  pages: &#123;
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
  &#125;,
  callbacks: &#123;
    async jwt(&#123; token, user &#125;) &#123;
      if (user) &#123;
        token.id = user.id;
        token.role = user.role;
      &#125;
      return token;
    &#125;,
    async session(&#123; session, token &#125;) &#123;
      session.user.id = token.id;
      session.user.role = token.role;
      return session;
    &#125;,
  &#125;,
&#125;);

export &#123; handler as GET, handler as POST &#125;;`;
    this.sessionManagement = `// Session Management

// Server Component - Get session
import &#123; getServerSession &#125; from 'next-auth';

export default async function ServerPage() &#123;
  const session = await getServerSession();
  
  if (!session) &#123;
    return <div>Not authenticated</div>;
  &#125;
  
  return (
    <div>
      <h1>Welcome, &#123;session.user?.name&#125;</h1>
      <p>Email: &#123;session.user?.email&#125;</p>
    </div>
  );
&#125;

// Client Component - Use session hook
'use client';

import &#123; useSession &#125; from 'next-auth/react';

export default function ClientProfile() &#123;
  const &#123; data: session, status &#125; = useSession();
  
  if (status === 'loading') &#123;
    return <div>Loading...</div>;
  &#125;
  
  if (status === 'unauthenticated') &#123;
    return <div>Please sign in</div>;
  &#125;
  
  return (
    <div>
      <h1>Profile</h1>
      <p>Name: &#123;session?.user?.name&#125;</p>
      <p>Email: &#123;session?.user?.email&#125;</p>
    </div>
  );
&#125;

// Root layout - Session Provider
'use client';

import &#123; SessionProvider &#125; from 'next-auth/react';

export default function RootLayout(&#123; children &#125;: &#123; children: React.ReactNode &#125;) &#123;
  return (
    <html>
      <body>
        <SessionProvider>&#123;children&#125;</SessionProvider>
      </body>
    </html>
  );
&#125;`;
    this.protectedRoutes = `// Protected Routes

// Middleware protection
// middleware.ts
import &#123; withAuth &#125; from 'next-auth/middleware';

export default withAuth(&#123;
  pages: &#123;
    signIn: '/auth/signin',
  &#125;,
&#125;);

export const config = &#123;
  matcher: ['/dashboard/:path*', '/admin/:path*'],
&#125;;

// Advanced middleware with role checking
import &#123; withAuth &#125; from 'next-auth/middleware';
import &#123; NextResponse &#125; from 'next/server';

export default withAuth(
  function middleware(req) &#123;
    const token = req.nextauth.token;
    
    // Admin-only routes
    if (req.nextUrl.pathname.startsWith('/admin') && token?.role !== 'admin') &#123;
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    &#125;
    
    return NextResponse.next();
  &#125;,
  &#123;
    callbacks: &#123;
      authorized: (&#123; token &#125;) => !!token,
    &#125;,
  &#125;
);

// Server Component protection
import &#123; redirect &#125; from 'next/navigation';
import &#123; getServerSession &#125; from 'next-auth';

export default async function ProtectedPage() &#123;
  const session = await getServerSession();
  
  if (!session) &#123;
    redirect('/auth/signin');
  &#125;
  
  return <div>Protected content</div>;
&#125;`;
    this.jwtAuth = `// JWT Authentication

// lib/jwt.ts
import &#123; SignJWT, jwtVerify &#125; from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function createToken(payload: any) &#123;
  return await new SignJWT(payload)
    .setProtectedHeader(&#123; alg: 'HS256' &#125;)
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(secret);
&#125;

export async function verifyToken(token: string) &#123;
  try &#123;
    const &#123; payload &#125; = await jwtVerify(token, secret);
    return payload;
  &#125; catch (error) &#123;
    return null;
  &#125;
&#125;

// API Route with JWT
// app/api/login/route.ts
import &#123; createToken &#125; from '@/lib/jwt';

export async function POST(request: Request) &#123;
  const &#123; email, password &#125; = await request.json();
  
  const user = await verifyCredentials(email, password);
  
  if (!user) &#123;
    return Response.json(&#123; error: 'Invalid credentials' &#125;, &#123; status: 401 &#125;);
  &#125;
  
  const token = await createToken(&#123; userId: user.id, email: user.email &#125;);
  
  const response = Response.json(&#123; success: true &#125;);
  response.headers.set(
    'Set-Cookie',
    \`token=$&#123;token&#125;; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=7200\`
  );
  
  return response;
&#125;

// Protected API Route
import &#123; verifyToken &#125; from '@/lib/jwt';

export async function GET(request: Request) &#123;
  const token = request.headers.get('cookie')?.split('token=')[1];
  
  if (!token) &#123;
    return Response.json(&#123; error: 'Unauthorized' &#125;, &#123; status: 401 &#125;);
  &#125;
  
  const payload = await verifyToken(token);
  
  if (!payload) &#123;
    return Response.json(&#123; error: 'Invalid token' &#125;, &#123; status: 401 &#125;);
  &#125;
  
  return Response.json(&#123; data: 'Protected data' &#125;);
&#125;`;
    this.oauthProviders = `// OAuth Provider Setup

// Google OAuth
import GoogleProvider from 'next-auth/providers/google';

providers: [
  GoogleProvider(&#123;
    clientId: process.env.GOOGLE_ID!,
    clientSecret: process.env.GOOGLE_SECRET!,
    authorization: &#123;
      params: &#123;
        prompt: "consent",
        access_type: "offline",
        response_type: "code"
      &#125;
    &#125;
  &#125;),
]

// GitHub OAuth
import GithubProvider from 'next-auth/providers/github';

providers: [
  GithubProvider(&#123;
    clientId: process.env.GITHUB_ID!,
    clientSecret: process.env.GITHUB_SECRET!,
  &#125;),
]

// Facebook OAuth
import FacebookProvider from 'next-auth/providers/facebook';

providers: [
  FacebookProvider(&#123;
    clientId: process.env.FACEBOOK_ID!,
    clientSecret: process.env.FACEBOOK_SECRET!,
  &#125;),
]

// Custom OAuth Provider
import &#123; OAuthConfig &#125; from 'next-auth/providers';

providers: [
  &#123;
    id: 'custom',
    name: 'Custom Provider',
    type: 'oauth',
    authorization: &#123;
      url: 'https://provider.com/oauth/authorize',
      params: &#123; scope: 'openid email profile' &#125;,
    &#125;,
    token: 'https://provider.com/oauth/token',
    userinfo: 'https://provider.com/oauth/userinfo',
    clientId: process.env.CUSTOM_CLIENT_ID!,
    clientSecret: process.env.CUSTOM_CLIENT_SECRET!,
    profile(profile) &#123;
      return &#123;
        id: profile.sub,
        name: profile.name,
        email: profile.email,
      &#125;;
    &#125;,
  &#125; as OAuthConfig<any>,
]`;
    this.signInSignOut = `// Sign In and Sign Out Components

// Sign In Page
'use client';

import &#123; signIn &#125; from 'next-auth/react';
import &#123; useState &#125; from 'react';

export default function SignInPage() &#123;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => &#123;
    e.preventDefault();
    
    const result = await signIn('credentials', &#123;
      email,
      password,
      redirect: false,
    &#125;);
    
    if (result?.error) &#123;
      console.error(result.error);
    &#125; else &#123;
      window.location.href = '/dashboard';
    &#125;
  &#125;;

  return (
    <div>
      <h1>Sign In</h1>
      
      <form onSubmit=&#123;handleSubmit&#125;>
        <input
          type="email"
          value=&#123;email&#125;
          onChange=&#123;(e) => setEmail(e.target.value)&#125;
          placeholder="Email"
          required
        />
        <input
          type="password"
          value=&#123;password&#125;
          onChange=&#123;(e) => setPassword(e.target.value)&#125;
          placeholder="Password"
          required
        />
        <button type="submit">Sign In</button>
      </form>
      
      <hr />
      
      <button onClick=&#123;() => signIn('google')&#125;>
        Sign in with Google
      </button>
      <button onClick=&#123;() => signIn('github')&#125;>
        Sign in with GitHub
      </button>
    </div>
  );
&#125;

// Sign Out Button
'use client';

import &#123; signOut &#125; from 'next-auth/react';

export default function SignOutButton() &#123;
  return (
    <button onClick=&#123;() => signOut(&#123; callbackUrl: '/' &#125;)&#125;>
      Sign Out
    </button>
  );
&#125;`;
    this.roleBasedAccess = `// Role-Based Access Control

// Define user roles
type UserRole = 'user' | 'admin' | 'moderator';

// NextAuth configuration with roles
callbacks: &#123;
  async jwt(&#123; token, user &#125;) &#123;
    if (user) &#123;
      token.role = user.role;
    &#125;
    return token;
  &#125;,
  async session(&#123; session, token &#125;) &#123;
    if (session.user) &#123;
      session.user.role = token.role as UserRole;
    &#125;
    return session;
  &#125;,
&#125;

// Server Component - Check role
import &#123; getServerSession &#125; from 'next-auth';
import &#123; redirect &#125; from 'next/navigation';

export default async function AdminPage() &#123;
  const session = await getServerSession();
  
  if (session?.user?.role !== 'admin') &#123;
    redirect('/unauthorized');
  &#125;
  
  return <div>Admin Panel</div>;
&#125;

// Client Component - Check role
'use client';

import &#123; useSession &#125; from 'next-auth/react';

export default function RoleBasedContent() &#123;
  const &#123; data: session &#125; = useSession();
  
  if (session?.user?.role === 'admin') &#123;
    return <div>Admin content</div>;
  &#125;
  
  if (session?.user?.role === 'moderator') &#123;
    return <div>Moderator content</div>;
  &#125;
  
  return <div>User content</div>;
&#125;

// Middleware - Role checking
import &#123; withAuth &#125; from 'next-auth/middleware';
import &#123; NextResponse &#125; from 'next/server';

export default withAuth(
  function middleware(req) &#123;
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;
    
    if (path.startsWith('/admin') && token?.role !== 'admin') &#123;
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    &#125;
    
    return NextResponse.next();
  &#125;,
  &#123;
    callbacks: &#123;
      authorized: (&#123; token &#125;) => !!token,
    &#125;,
  &#125;
);`;
    this.passwordHashing = `// Password Hashing and Verification

// Install bcrypt: npm install bcrypt
// Install types: npm install -D @types/bcrypt

import bcrypt from 'bcrypt';

// Hash password
export async function hashPassword(password: string): Promise<string> &#123;
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
&#125;

// Verify password
export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> &#123;
  return await bcrypt.compare(password, hashedPassword);
&#125;

// Registration API Route
// app/api/register/route.ts
import &#123; hashPassword &#125; from '@/lib/auth';

export async function POST(request: Request) &#123;
  const &#123; email, password, name &#125; = await request.json();
  
  // Validate input
  if (!email || !password || password.length < 8) &#123;
    return Response.json(&#123; error: 'Invalid input' &#125;, &#123; status: 400 &#125;);
  &#125;
  
  // Check if user exists
  const existingUser = await db.user.findUnique(&#123; where: &#123; email &#125; &#125;);
  if (existingUser) &#123;
    return Response.json(&#123; error: 'User already exists' &#125;, &#123; status: 400 &#125;);
  &#125;
  
  // Hash password
  const hashedPassword = await hashPassword(password);
  
  // Create user
  const user = await db.user.create(&#123;
    data: &#123;
      email,
      name,
      password: hashedPassword,
    &#125;,
  &#125;);
  
  return Response.json(&#123; success: true, userId: user.id &#125;);
&#125;

// Login with credentials
async function authorize(credentials: any) &#123;
  const user = await db.user.findUnique(&#123;
    where: &#123; email: credentials.email &#125;,
  &#125;);
  
  if (!user) return null;
  
  const isValid = await verifyPassword(credentials.password, user.password);
  
  if (!isValid) return null;
  
  return &#123; id: user.id, email: user.email, name: user.name &#125;;
&#125;`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function NextjsAuthenticationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NextjsAuthenticationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NextjsAuthenticationComponent, selectors: [["app-nextjs-authentication"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 192, vars: 8, consts: [[1, "container"], ["label", "NextAuth Setup"], [1, "tab-content"], [1, "info-box"], [1, "language-tsx"], ["label", "Session Management"], ["label", "Protected Routes"], ["label", "JWT Authentication"], ["label", "OAuth Providers"], ["label", "Sign In/Out"], ["label", "Role-Based Access"], ["label", "Password Hashing"]], template: function NextjsAuthenticationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Next.js Authentication");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Implement authentication in Next.js with NextAuth.js, JWT, session management, OAuth providers, and role-based access control.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "NextAuth.js Setup");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "NextAuth.js");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " is the most popular authentication solution for Next.js.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "Easy OAuth provider integration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "Built-in CSRF protection");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li");
        \u0275\u0275text(21, "JWT or database sessions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275text(23, "TypeScript support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "li");
        \u0275\u0275text(25, "Custom sign-in pages");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "li");
        \u0275\u0275text(27, "Callbacks for customization");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "pre")(29, "code", 4);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(31, "mat-tab", 5)(32, "div", 2)(33, "h2");
        \u0275\u0275text(34, "Session Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 3)(36, "p");
        \u0275\u0275text(37, "Manage user sessions in both Server and Client Components.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "ul")(39, "li");
        \u0275\u0275text(40, "getServerSession for Server Components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "li");
        \u0275\u0275text(42, "useSession hook for Client Components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li");
        \u0275\u0275text(44, "SessionProvider for client-side");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "li");
        \u0275\u0275text(46, "Access user data in components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "li");
        \u0275\u0275text(48, "Check authentication status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "li");
        \u0275\u0275text(50, "Loading and error states");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(51, "pre")(52, "code", 4);
        \u0275\u0275text(53);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(54, "mat-tab", 6)(55, "div", 2)(56, "h2");
        \u0275\u0275text(57, "Protected Routes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 3)(59, "p");
        \u0275\u0275text(60, "Protect routes and pages from unauthorized access.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "ul")(62, "li");
        \u0275\u0275text(63, "Middleware-based protection");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "li");
        \u0275\u0275text(65, "Role-based access control");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "li");
        \u0275\u0275text(67, "Redirect unauthenticated users");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "li");
        \u0275\u0275text(69, "Server Component protection");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "li");
        \u0275\u0275text(71, "Custom authorization logic");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "li");
        \u0275\u0275text(73, "Multiple protection layers");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(74, "pre")(75, "code", 4);
        \u0275\u0275text(76);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(77, "mat-tab", 7)(78, "div", 2)(79, "h2");
        \u0275\u0275text(80, "JWT Authentication");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "div", 3)(82, "p");
        \u0275\u0275text(83, "Implement JWT-based authentication without NextAuth.js.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "ul")(85, "li");
        \u0275\u0275text(86, "Create and verify JWT tokens");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "li");
        \u0275\u0275text(88, "HttpOnly cookies for security");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "li");
        \u0275\u0275text(90, "Token expiration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "li");
        \u0275\u0275text(92, "Protected API routes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "li");
        \u0275\u0275text(94, "Custom token payload");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "li");
        \u0275\u0275text(96, "Token refresh strategies");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(97, "pre")(98, "code", 4);
        \u0275\u0275text(99);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(100, "mat-tab", 8)(101, "div", 2)(102, "h2");
        \u0275\u0275text(103, "OAuth Provider Setup");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "div", 3)(105, "p");
        \u0275\u0275text(106, "Configure OAuth providers for social authentication.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "ul")(108, "li");
        \u0275\u0275text(109, "Google OAuth integration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "li");
        \u0275\u0275text(111, "GitHub authentication");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "li");
        \u0275\u0275text(113, "Facebook login");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "li");
        \u0275\u0275text(115, "Custom OAuth providers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "li");
        \u0275\u0275text(117, "Multiple providers support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "li");
        \u0275\u0275text(119, "Provider-specific configuration");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(120, "pre")(121, "code", 4);
        \u0275\u0275text(122);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(123, "mat-tab", 9)(124, "div", 2)(125, "h2");
        \u0275\u0275text(126, "Sign In and Sign Out");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "div", 3)(128, "p");
        \u0275\u0275text(129, "Create custom sign-in and sign-out components.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "ul")(131, "li");
        \u0275\u0275text(132, "Custom sign-in forms");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "li");
        \u0275\u0275text(134, "Credentials authentication");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "li");
        \u0275\u0275text(136, "Social login buttons");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "li");
        \u0275\u0275text(138, "Error handling");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "li");
        \u0275\u0275text(140, "Redirect after authentication");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "li");
        \u0275\u0275text(142, "Sign-out functionality");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(143, "pre")(144, "code", 4);
        \u0275\u0275text(145);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(146, "mat-tab", 10)(147, "div", 2)(148, "h2");
        \u0275\u0275text(149, "Role-Based Access Control");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "div", 3)(151, "p");
        \u0275\u0275text(152, "Implement role-based permissions for different user types.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "ul")(154, "li");
        \u0275\u0275text(155, "Define user roles");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "li");
        \u0275\u0275text(157, "Store roles in JWT/session");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "li");
        \u0275\u0275text(159, "Check roles in middleware");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "li");
        \u0275\u0275text(161, "Conditional rendering by role");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "li");
        \u0275\u0275text(163, "Admin-only routes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "li");
        \u0275\u0275text(165, "Multi-tier permissions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(166, "pre")(167, "code", 4);
        \u0275\u0275text(168);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(169, "mat-tab", 11)(170, "div", 2)(171, "h2");
        \u0275\u0275text(172, "Password Hashing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(173, "div", 3)(174, "p");
        \u0275\u0275text(175, "Securely hash and verify passwords with bcrypt.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "ul")(177, "li");
        \u0275\u0275text(178, "bcrypt for password hashing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(179, "li");
        \u0275\u0275text(180, "Salt rounds configuration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(181, "li");
        \u0275\u0275text(182, "Password verification");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "li");
        \u0275\u0275text(184, "User registration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(185, "li");
        \u0275\u0275text(186, "Credentials validation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "li");
        \u0275\u0275text(188, "Secure password storage");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(189, "pre")(190, "code", 4);
        \u0275\u0275text(191);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(30);
        \u0275\u0275textInterpolate(ctx.nextAuthSetup);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.sessionManagement);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.protectedRoutes);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.jwtAuth);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.oauthProviders);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.signInSignOut);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.roleBasedAccess);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.passwordHashing);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #000000;\n  margin-bottom: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #282c34;\n  margin-top: 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  border-left: 4px solid #000000;\n  padding: 15px;\n  margin: 15px 0;\n  border-radius: 4px;\n}\n.info-box.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-left-color: #000000;\n}\n.info-box.warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #000000;\n}\n.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #000000;\n}\n.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding-left: 20px;\n}\n.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #e0e0e0;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\npre[_ngcontent-%COMP%] {\n  background: #282c34;\n  color: #ffffff;\n  padding: 15px;\n  border-radius: 4px;\n  overflow-x: auto;\n  margin: 15px 0;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: 14px;\n}\np[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  color: #333;\n}\n/*# sourceMappingURL=nextjs-authentication.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NextjsAuthenticationComponent, { className: "NextjsAuthenticationComponent", filePath: "src\\app\\components\\nextjs\\nextjs-authentication\\nextjs-authentication.component.ts", lineNumber: 13 });
})();
export {
  NextjsAuthenticationComponent
};
//# sourceMappingURL=chunk-HAHIOIV5.js.map
