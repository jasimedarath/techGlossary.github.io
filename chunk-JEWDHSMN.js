import{b as u,c as m,d as c}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as i,da as l,gb as n,hb as e,tb as t,ub as r,yb as d}from"./chunk-WGQ2ELTG.js";var g=(()=>{class s{constructor(){this.nextAuthSetup=`// NextAuth.js Setup
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
&#125;`}ngAfterViewChecked(){Prism.highlightAll()}static{this.\u0275fac=function(a){return new(a||s)}}static{this.\u0275cmp=l({type:s,selectors:[["app-nextjs-authentication"]],standalone:!0,features:[d],decls:192,vars:8,consts:[[1,"container"],["label","NextAuth Setup"],[1,"tab-content"],[1,"info-box"],[1,"language-tsx"],["label","Session Management"],["label","Protected Routes"],["label","JWT Authentication"],["label","OAuth Providers"],["label","Sign In/Out"],["label","Role-Based Access"],["label","Password Hashing"]],template:function(a,o){a&1&&(n(0,"div",0)(1,"h1"),t(2,"Next.js Authentication"),e(),n(3,"p"),t(4,"Implement authentication in Next.js with NextAuth.js, JWT, session management, OAuth providers, and role-based access control."),e(),n(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),t(9,"NextAuth.js Setup"),e(),n(10,"div",3)(11,"p")(12,"strong"),t(13,"NextAuth.js"),e(),t(14," is the most popular authentication solution for Next.js."),e(),n(15,"ul")(16,"li"),t(17,"Easy OAuth provider integration"),e(),n(18,"li"),t(19,"Built-in CSRF protection"),e(),n(20,"li"),t(21,"JWT or database sessions"),e(),n(22,"li"),t(23,"TypeScript support"),e(),n(24,"li"),t(25,"Custom sign-in pages"),e(),n(26,"li"),t(27,"Callbacks for customization"),e()()(),n(28,"pre")(29,"code",4),t(30),e()()()(),n(31,"mat-tab",5)(32,"div",2)(33,"h2"),t(34,"Session Management"),e(),n(35,"div",3)(36,"p"),t(37,"Manage user sessions in both Server and Client Components."),e(),n(38,"ul")(39,"li"),t(40,"getServerSession for Server Components"),e(),n(41,"li"),t(42,"useSession hook for Client Components"),e(),n(43,"li"),t(44,"SessionProvider for client-side"),e(),n(45,"li"),t(46,"Access user data in components"),e(),n(47,"li"),t(48,"Check authentication status"),e(),n(49,"li"),t(50,"Loading and error states"),e()()(),n(51,"pre")(52,"code",4),t(53),e()()()(),n(54,"mat-tab",6)(55,"div",2)(56,"h2"),t(57,"Protected Routes"),e(),n(58,"div",3)(59,"p"),t(60,"Protect routes and pages from unauthorized access."),e(),n(61,"ul")(62,"li"),t(63,"Middleware-based protection"),e(),n(64,"li"),t(65,"Role-based access control"),e(),n(66,"li"),t(67,"Redirect unauthenticated users"),e(),n(68,"li"),t(69,"Server Component protection"),e(),n(70,"li"),t(71,"Custom authorization logic"),e(),n(72,"li"),t(73,"Multiple protection layers"),e()()(),n(74,"pre")(75,"code",4),t(76),e()()()(),n(77,"mat-tab",7)(78,"div",2)(79,"h2"),t(80,"JWT Authentication"),e(),n(81,"div",3)(82,"p"),t(83,"Implement JWT-based authentication without NextAuth.js."),e(),n(84,"ul")(85,"li"),t(86,"Create and verify JWT tokens"),e(),n(87,"li"),t(88,"HttpOnly cookies for security"),e(),n(89,"li"),t(90,"Token expiration"),e(),n(91,"li"),t(92,"Protected API routes"),e(),n(93,"li"),t(94,"Custom token payload"),e(),n(95,"li"),t(96,"Token refresh strategies"),e()()(),n(97,"pre")(98,"code",4),t(99),e()()()(),n(100,"mat-tab",8)(101,"div",2)(102,"h2"),t(103,"OAuth Provider Setup"),e(),n(104,"div",3)(105,"p"),t(106,"Configure OAuth providers for social authentication."),e(),n(107,"ul")(108,"li"),t(109,"Google OAuth integration"),e(),n(110,"li"),t(111,"GitHub authentication"),e(),n(112,"li"),t(113,"Facebook login"),e(),n(114,"li"),t(115,"Custom OAuth providers"),e(),n(116,"li"),t(117,"Multiple providers support"),e(),n(118,"li"),t(119,"Provider-specific configuration"),e()()(),n(120,"pre")(121,"code",4),t(122),e()()()(),n(123,"mat-tab",9)(124,"div",2)(125,"h2"),t(126,"Sign In and Sign Out"),e(),n(127,"div",3)(128,"p"),t(129,"Create custom sign-in and sign-out components."),e(),n(130,"ul")(131,"li"),t(132,"Custom sign-in forms"),e(),n(133,"li"),t(134,"Credentials authentication"),e(),n(135,"li"),t(136,"Social login buttons"),e(),n(137,"li"),t(138,"Error handling"),e(),n(139,"li"),t(140,"Redirect after authentication"),e(),n(141,"li"),t(142,"Sign-out functionality"),e()()(),n(143,"pre")(144,"code",4),t(145),e()()()(),n(146,"mat-tab",10)(147,"div",2)(148,"h2"),t(149,"Role-Based Access Control"),e(),n(150,"div",3)(151,"p"),t(152,"Implement role-based permissions for different user types."),e(),n(153,"ul")(154,"li"),t(155,"Define user roles"),e(),n(156,"li"),t(157,"Store roles in JWT/session"),e(),n(158,"li"),t(159,"Check roles in middleware"),e(),n(160,"li"),t(161,"Conditional rendering by role"),e(),n(162,"li"),t(163,"Admin-only routes"),e(),n(164,"li"),t(165,"Multi-tier permissions"),e()()(),n(166,"pre")(167,"code",4),t(168),e()()()(),n(169,"mat-tab",11)(170,"div",2)(171,"h2"),t(172,"Password Hashing"),e(),n(173,"div",3)(174,"p"),t(175,"Securely hash and verify passwords with bcrypt."),e(),n(176,"ul")(177,"li"),t(178,"bcrypt for password hashing"),e(),n(179,"li"),t(180,"Salt rounds configuration"),e(),n(181,"li"),t(182,"Password verification"),e(),n(183,"li"),t(184,"User registration"),e(),n(185,"li"),t(186,"Credentials validation"),e(),n(187,"li"),t(188,"Secure password storage"),e()()(),n(189,"pre")(190,"code",4),t(191),e()()()()()()),a&2&&(i(30),r(o.nextAuthSetup),i(23),r(o.sessionManagement),i(23),r(o.protectedRoutes),i(23),r(o.jwtAuth),i(23),r(o.oauthProviders),i(23),r(o.signInSignOut),i(23),r(o.roleBasedAccess),i(23),r(o.passwordHashing))},dependencies:[c,u,m],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#000;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#f0f0f0;border-left:4px solid #000000;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#000}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#000}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#000}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#e0e0e0;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;color:#fff;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:14px}p[_ngcontent-%COMP%]{line-height:1.6;color:#333}"]})}}return s})();export{g as NextjsAuthenticationComponent};
