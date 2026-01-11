import"./chunk-2BQE7O6T.js";import"./chunk-4ITEIGFF.js";import"./chunk-WCULWZKC.js";import{a as v}from"./chunk-VDRUEQXK.js";import{a as p,b as h,c as x,d as f}from"./chunk-GNZ74KMC.js";import"./chunk-XAZLOLJU.js";import"./chunk-SZTU5CXE.js";import{Ia as o,Ya as s,da as u,e as S,hb as t,ib as e,mb as a,ub as n,vb as l,zb as c}from"./chunk-KMNIY7WT.js";var g=S(v());function E(i,d){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"NextAuth.js Setup"),e(),t(3,"div",11)(4,"p")(5,"strong"),n(6,"NextAuth.js"),e(),n(7," is the most popular authentication solution for Next.js."),e(),t(8,"ul")(9,"li"),n(10,"Easy OAuth provider integration"),e(),t(11,"li"),n(12,"Built-in CSRF protection"),e(),t(13,"li"),n(14,"JWT or database sessions"),e(),t(15,"li"),n(16,"TypeScript support"),e(),t(17,"li"),n(18,"Custom sign-in pages"),e(),t(19,"li"),n(20,"Callbacks for customization"),e()()(),t(21,"pre")(22,"code",12),n(23),e()()()),i&2){let r=a();o(23),l(r.nextAuthSetup)}}function b(i,d){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Session Management"),e(),t(3,"div",11)(4,"p"),n(5,"Manage user sessions in both Server and Client Components."),e(),t(6,"ul")(7,"li"),n(8,"getServerSession for Server Components"),e(),t(9,"li"),n(10,"useSession hook for Client Components"),e(),t(11,"li"),n(12,"SessionProvider for client-side"),e(),t(13,"li"),n(14,"Access user data in components"),e(),t(15,"li"),n(16,"Check authentication status"),e(),t(17,"li"),n(18,"Loading and error states"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),i&2){let r=a();o(21),l(r.sessionManagement)}}function w(i,d){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Protected Routes"),e(),t(3,"div",11)(4,"p"),n(5,"Protect routes and pages from unauthorized access."),e(),t(6,"ul")(7,"li"),n(8,"Middleware-based protection"),e(),t(9,"li"),n(10,"Role-based access control"),e(),t(11,"li"),n(12,"Redirect unauthenticated users"),e(),t(13,"li"),n(14,"Server Component protection"),e(),t(15,"li"),n(16,"Custom authorization logic"),e(),t(17,"li"),n(18,"Multiple protection layers"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),i&2){let r=a();o(21),l(r.protectedRoutes)}}function C(i,d){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"JWT Authentication"),e(),t(3,"div",11)(4,"p"),n(5,"Implement JWT-based authentication without NextAuth.js."),e(),t(6,"ul")(7,"li"),n(8,"Create and verify JWT tokens"),e(),t(9,"li"),n(10,"HttpOnly cookies for security"),e(),t(11,"li"),n(12,"Token expiration"),e(),t(13,"li"),n(14,"Protected API routes"),e(),t(15,"li"),n(16,"Custom token payload"),e(),t(17,"li"),n(18,"Token refresh strategies"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),i&2){let r=a();o(21),l(r.jwtAuth)}}function P(i,d){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"OAuth Provider Setup"),e(),t(3,"div",11)(4,"p"),n(5,"Configure OAuth providers for social authentication."),e(),t(6,"ul")(7,"li"),n(8,"Google OAuth integration"),e(),t(9,"li"),n(10,"GitHub authentication"),e(),t(11,"li"),n(12,"Facebook login"),e(),t(13,"li"),n(14,"Custom OAuth providers"),e(),t(15,"li"),n(16,"Multiple providers support"),e(),t(17,"li"),n(18,"Provider-specific configuration"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),i&2){let r=a();o(21),l(r.oauthProviders)}}function y(i,d){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Sign In and Sign Out"),e(),t(3,"div",11)(4,"p"),n(5,"Create custom sign-in and sign-out components."),e(),t(6,"ul")(7,"li"),n(8,"Custom sign-in forms"),e(),t(9,"li"),n(10,"Credentials authentication"),e(),t(11,"li"),n(12,"Social login buttons"),e(),t(13,"li"),n(14,"Error handling"),e(),t(15,"li"),n(16,"Redirect after authentication"),e(),t(17,"li"),n(18,"Sign-out functionality"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),i&2){let r=a();o(21),l(r.signInSignOut)}}function k(i,d){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Role-Based Access Control"),e(),t(3,"div",11)(4,"p"),n(5,"Implement role-based permissions for different user types."),e(),t(6,"ul")(7,"li"),n(8,"Define user roles"),e(),t(9,"li"),n(10,"Store roles in JWT/session"),e(),t(11,"li"),n(12,"Check roles in middleware"),e(),t(13,"li"),n(14,"Conditional rendering by role"),e(),t(15,"li"),n(16,"Admin-only routes"),e(),t(17,"li"),n(18,"Multi-tier permissions"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),i&2){let r=a();o(21),l(r.roleBasedAccess)}}function _(i,d){if(i&1&&(t(0,"div",10)(1,"h2"),n(2,"Password Hashing"),e(),t(3,"div",11)(4,"p"),n(5,"Securely hash and verify passwords with bcrypt."),e(),t(6,"ul")(7,"li"),n(8,"bcrypt for password hashing"),e(),t(9,"li"),n(10,"Salt rounds configuration"),e(),t(11,"li"),n(12,"Password verification"),e(),t(13,"li"),n(14,"User registration"),e(),t(15,"li"),n(16,"Credentials validation"),e(),t(17,"li"),n(18,"Secure password storage"),e()()(),t(19,"pre")(20,"code",12),n(21),e()()()),i&2){let r=a();o(21),l(r.passwordHashing)}}var N=(()=>{class i{constructor(){this.nextAuthSetup=`// NextAuth.js Setup
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

export &#123; handler as GET, handler as POST &#125;;`,this.sessionManagement=`// Session Management

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
&#125;`,this.protectedRoutes=`// Protected Routes

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
&#125;`,this.jwtAuth=`// JWT Authentication

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
&#125;`,this.oauthProviders=`// OAuth Provider Setup

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
]`,this.signInSignOut=`// Sign In and Sign Out Components

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
&#125;`,this.roleBasedAccess=`// Role-Based Access Control

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
);`,this.passwordHashing=`// Password Hashing and Verification

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
&#125;`}ngAfterViewChecked(){g.highlightAll()}static{this.\u0275fac=function(m){return new(m||i)}}static{this.\u0275cmp=u({type:i,selectors:[["app-nextjs-authentication"]],standalone:!0,features:[c],decls:22,vars:0,consts:[[1,"container"],["label","NextAuth Setup"],["matTabContent",""],["label","Session Management"],["label","Protected Routes"],["label","JWT Authentication"],["label","OAuth Providers"],["label","Sign In/Out"],["label","Role-Based Access"],["label","Password Hashing"],[1,"tab-content"],[1,"info-box"],[1,"language-tsx"]],template:function(m,A){m&1&&(t(0,"div",0)(1,"h1"),n(2,"Next.js Authentication"),e(),t(3,"p"),n(4,"Implement authentication in Next.js with NextAuth.js, JWT, session management, OAuth providers, and role-based access control."),e(),t(5,"mat-tab-group")(6,"mat-tab",1),s(7,E,24,1,"ng-template",2),e(),t(8,"mat-tab",3),s(9,b,22,1,"ng-template",2),e(),t(10,"mat-tab",4),s(11,w,22,1,"ng-template",2),e(),t(12,"mat-tab",5),s(13,C,22,1,"ng-template",2),e(),t(14,"mat-tab",6),s(15,P,22,1,"ng-template",2),e(),t(16,"mat-tab",7),s(17,y,22,1,"ng-template",2),e(),t(18,"mat-tab",8),s(19,k,22,1,"ng-template",2),e(),t(20,"mat-tab",9),s(21,_,22,1,"ng-template",2),e()()())},dependencies:[f,p,h,x],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#61dafb;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#e3f2fd;border-left:4px solid #2196f3;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#4caf50}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#ff9800}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#1976d2}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000d;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;font-size:14px;line-height:1.5}"]})}}return i})();export{N as NextjsAuthenticationComponent};
