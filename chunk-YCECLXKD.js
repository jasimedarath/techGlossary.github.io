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

// src/app/components/nextjs/nextjs-database/nextjs-database.component.ts
var NextjsDatabaseComponent = class _NextjsDatabaseComponent {
  constructor() {
    this.prismaSetup = `// Prisma ORM Setup
// npm install prisma @prisma/client
// npx prisma init

// prisma/schema.prisma
generator client &#123;
  provider = "prisma-client-js"
&#125;

datasource db &#123;
  provider = "postgresql"
  url      = env("DATABASE_URL")
&#125;

model User &#123;
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  password  String
  posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
&#125;

model Post &#123;
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
&#125;

// .env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"

// Generate Prisma Client
// npx prisma generate

// Run migrations
// npx prisma migrate dev --name init`;
    this.prismaClient = `// Prisma Client Setup

// lib/prisma.ts
import &#123; PrismaClient &#125; from '@prisma/client';

const globalForPrisma = globalThis as unknown as &#123;
  prisma: PrismaClient | undefined;
&#125;;

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient(&#123;
    log: ['query', 'error', 'warn'],
  &#125;);

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Prevents multiple instances in development

// Usage in Server Component
import &#123; prisma &#125; from '@/lib/prisma';

async function getUsers() &#123;
  const users = await prisma.user.findMany(&#123;
    include: &#123;
      posts: true,
    &#125;,
  &#125;);
  return users;
&#125;

export default async function UsersPage() &#123;
  const users = await getUsers();
  
  return (
    <div>
      &#123;users.map(user => (
        <div key=&#123;user.id&#125;>
          <h2>&#123;user.name&#125;</h2>
          <p>Posts: &#123;user.posts.length&#125;</p>
        </div>
      ))&#125;
    </div>
  );
&#125;`;
    this.crudOperations = `// CRUD Operations with Prisma

// CREATE
async function createUser(email: string, name: string, password: string) &#123;
  const user = await prisma.user.create(&#123;
    data: &#123;
      email,
      name,
      password,
    &#125;,
  &#125;);
  return user;
&#125;

// READ - Find one
async function getUser(id: string) &#123;
  const user = await prisma.user.findUnique(&#123;
    where: &#123; id &#125;,
    include: &#123;
      posts: &#123;
        where: &#123; published: true &#125;,
      &#125;,
    &#125;,
  &#125;);
  return user;
&#125;

// READ - Find many with filters
async function getUsers(skip: number = 0, take: number = 10) &#123;
  const users = await prisma.user.findMany(&#123;
    skip,
    take,
    where: &#123;
      email: &#123;
        contains: '@example.com',
      &#125;,
    &#125;,
    orderBy: &#123;
      createdAt: 'desc',
    &#125;,
    select: &#123;
      id: true,
      email: true,
      name: true,
      _count: &#123;
        select: &#123; posts: true &#125;,
      &#125;,
    &#125;,
  &#125;);
  return users;
&#125;

// UPDATE
async function updateUser(id: string, data: &#123; name?: string; email?: string &#125;) &#123;
  const user = await prisma.user.update(&#123;
    where: &#123; id &#125;,
    data,
  &#125;);
  return user;
&#125;

// DELETE
async function deleteUser(id: string) &#123;
  const user = await prisma.user.delete(&#123;
    where: &#123; id &#125;,
  &#125;);
  return user;
&#125;

// UPSERT (Create or Update)
async function upsertUser(email: string, name: string) &#123;
  const user = await prisma.user.upsert(&#123;
    where: &#123; email &#125;,
    update: &#123; name &#125;,
    create: &#123; email, name, password: 'default' &#125;,
  &#125;);
  return user;
&#125;`;
    this.apiRoutes = `// Database Operations in API Routes

// app/api/users/route.ts
import &#123; prisma &#125; from '@/lib/prisma';
import &#123; NextResponse &#125; from 'next/server';

// GET all users
export async function GET(request: Request) &#123;
  try &#123;
    const &#123; searchParams &#125; = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    
    const users = await prisma.user.findMany(&#123;
      skip: (page - 1) * limit,
      take: limit,
      select: &#123;
        id: true,
        email: true,
        name: true,
        createdAt: true,
      &#125;,
    &#125;);
    
    const total = await prisma.user.count();
    
    return NextResponse.json(&#123;
      users,
      pagination: &#123;
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      &#125;,
    &#125;);
  &#125; catch (error) &#123;
    return NextResponse.json(
      &#123; error: 'Failed to fetch users' &#125;,
      &#123; status: 500 &#125;
    );
  &#125;
&#125;

// POST create user
export async function POST(request: Request) &#123;
  try &#123;
    const body = await request.json();
    const &#123; email, name, password &#125; = body;
    
    const user = await prisma.user.create(&#123;
      data: &#123; email, name, password &#125;,
      select: &#123; id: true, email: true, name: true &#125;,
    &#125;);
    
    return NextResponse.json(user, &#123; status: 201 &#125;);
  &#125; catch (error) &#123;
    return NextResponse.json(
      &#123; error: 'Failed to create user' &#125;,
      &#123; status: 500 &#125;
    );
  &#125;
&#125;

// app/api/users/[id]/route.ts
export async function GET(
  request: Request,
  &#123; params &#125;: &#123; params: &#123; id: string &#125; &#125;
) &#123;
  const user = await prisma.user.findUnique(&#123;
    where: &#123; id: params.id &#125;,
    include: &#123; posts: true &#125;,
  &#125;);
  
  if (!user) &#123;
    return NextResponse.json(&#123; error: 'User not found' &#125;, &#123; status: 404 &#125;);
  &#125;
  
  return NextResponse.json(user);
&#125;

export async function PUT(
  request: Request,
  &#123; params &#125;: &#123; params: &#123; id: string &#125; &#125;
) &#123;
  const body = await request.json();
  
  const user = await prisma.user.update(&#123;
    where: &#123; id: params.id &#125;,
    data: body,
  &#125;);
  
  return NextResponse.json(user);
&#125;

export async function DELETE(
  request: Request,
  &#123; params &#125;: &#123; params: &#123; id: string &#125; &#125;
) &#123;
  await prisma.user.delete(&#123;
    where: &#123; id: params.id &#125;,
  &#125;);
  
  return NextResponse.json(&#123; success: true &#125;);
&#125;`;
    this.relations = `// Working with Relations

// One-to-Many: User has many Posts
const userWithPosts = await prisma.user.findUnique(&#123;
  where: &#123; id: userId &#125;,
  include: &#123;
    posts: &#123;
      where: &#123; published: true &#125;,
      orderBy: &#123; createdAt: 'desc' &#125;,
    &#125;,
  &#125;,
&#125;);

// Create with relations
const user = await prisma.user.create(&#123;
  data: &#123;
    email: 'user@example.com',
    name: 'John Doe',
    password: 'hashed',
    posts: &#123;
      create: [
        &#123; title: 'First Post', content: 'Content...' &#125;,
        &#123; title: 'Second Post', content: 'More content...' &#125;,
      ],
    &#125;,
  &#125;,
  include: &#123;
    posts: true,
  &#125;,
&#125;);

// Many-to-Many: Posts and Categories
model Post &#123;
  id         String     @id @default(cuid())
  title      String
  categories Category[]
&#125;

model Category &#123;
  id    String @id @default(cuid())
  name  String
  posts Post[]
&#125;

// Query with many-to-many
const post = await prisma.post.findUnique(&#123;
  where: &#123; id: postId &#125;,
  include: &#123;
    categories: true,
  &#125;,
&#125;);

// Connect existing relations
await prisma.post.update(&#123;
  where: &#123; id: postId &#125;,
  data: &#123;
    categories: &#123;
      connect: [&#123; id: categoryId1 &#125;, &#123; id: categoryId2 &#125;],
    &#125;,
  &#125;,
&#125;);`;
    this.transactions = `// Database Transactions

// Sequential transactions
const result = await prisma.$transaction(async (tx) => &#123;
  // Create user
  const user = await tx.user.create(&#123;
    data: &#123;
      email: 'user@example.com',
      name: 'John Doe',
      password: 'hashed',
    &#125;,
  &#125;);
  
  // Create post for user
  const post = await tx.post.create(&#123;
    data: &#123;
      title: 'First Post',
      content: 'Content...',
      authorId: user.id,
    &#125;,
  &#125;);
  
  // Update user post count
  await tx.user.update(&#123;
    where: &#123; id: user.id &#125;,
    data: &#123;
      // Custom field
    &#125;,
  &#125;);
  
  return &#123; user, post &#125;;
&#125;);

// Batch transactions
await prisma.$transaction([
  prisma.user.create(&#123; data: &#123; email: 'user1@example.com', password: 'hash' &#125; &#125;),
  prisma.user.create(&#123; data: &#123; email: 'user2@example.com', password: 'hash' &#125; &#125;),
  prisma.user.create(&#123; data: &#123; email: 'user3@example.com', password: 'hash' &#125; &#125;),
]);

// Transaction with timeout and isolation level
await prisma.$transaction(
  async (tx) => &#123;
    // Transaction operations
  &#125;,
  &#123;
    maxWait: 5000, // 5 seconds
    timeout: 10000, // 10 seconds
    isolationLevel: 'Serializable',
  &#125;
);`;
    this.migrations = `// Database Migrations

// Create a migration
// npx prisma migrate dev --name add_user_role

// Apply migrations in production
// npx prisma migrate deploy

// Reset database (development only)
// npx prisma migrate reset

// Migration file example: migrations/20240101000000_add_user_role/migration.sql
-- AlterTable
ALTER TABLE "User" ADD COLUMN "role" TEXT NOT NULL DEFAULT 'user';

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'MODERATOR');

-- AlterTable
ALTER TABLE "User" 
  ALTER COLUMN "role" TYPE "Role" 
  USING ("role"::text::"Role");

// Schema changes
model User &#123;
  id       String @id @default(cuid())
  email    String @unique
  name     String?
  password String
  role     Role   @default(USER)
  posts    Post[]
&#125;

enum Role &#123;
  USER
  ADMIN
  MODERATOR
&#125;

// Seed database
// prisma/seed.ts
import &#123; PrismaClient &#125; from '@prisma/client';

const prisma = new PrismaClient();

async function main() &#123;
  const users = await Promise.all([
    prisma.user.create(&#123;
      data: &#123;
        email: 'admin@example.com',
        name: 'Admin User',
        password: 'hashed',
        role: 'ADMIN',
      &#125;,
    &#125;),
    prisma.user.create(&#123;
      data: &#123;
        email: 'user@example.com',
        name: 'Regular User',
        password: 'hashed',
        role: 'USER',
      &#125;,
    &#125;),
  ]);
  
  console.log('Seeded users:', users);
&#125;

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());

// package.json
&#123;
  "prisma": &#123;
    "seed": "ts-node --compiler-options &#123;\\"module\\":\\"CommonJS\\"&#125; prisma/seed.ts"
  &#125;
&#125;

// Run seed: npx prisma db seed`;
    this.connectionPooling = `// Connection Pooling

// Direct connection (development)
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"

// Connection pooling (production)
DATABASE_URL="postgresql://user:password@host:5432/mydb?pgbouncer=true&connection_limit=1"

// Prisma with connection pooling
datasource db &#123;
  provider = "postgresql"
  url      = env("DATABASE_URL")
  directUrl = env("DIRECT_URL") // For migrations
&#125;

// Environment variables
DATABASE_URL="postgresql://user:password@pooler.host:6543/mydb?pgbouncer=true"
DIRECT_URL="postgresql://user:password@direct.host:5432/mydb"

// Configure pool size
const prisma = new PrismaClient(&#123;
  datasources: &#123;
    db: &#123;
      url: process.env.DATABASE_URL,
    &#125;,
  &#125;,
&#125;);

// Connection limits in Vercel
// Use transaction mode with PgBouncer
// Set connection_limit=1 in production

// Serverless connection management
import &#123; PrismaClient &#125; from '@prisma/client';

declare global &#123;
  var prisma: PrismaClient | undefined;
&#125;

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') &#123;
  global.prisma = prisma;
&#125;

// Close connections gracefully
process.on('beforeExit', async () => &#123;
  await prisma.$disconnect();
&#125;);`;
    this.advancedQueries = `// Advanced Prisma Queries

// Full-text search
const results = await prisma.post.findMany(&#123;
  where: &#123;
    OR: [
      &#123; title: &#123; contains: 'nextjs', mode: 'insensitive' &#125; &#125;,
      &#123; content: &#123; contains: 'nextjs', mode: 'insensitive' &#125; &#125;,
    ],
  &#125;,
&#125;);

// Aggregation
const stats = await prisma.user.aggregate(&#123;
  _count: &#123; id: true &#125;,
  _avg: &#123; age: true &#125;,
  _sum: &#123; posts: true &#125;,
  _min: &#123; createdAt: true &#125;,
  _max: &#123; createdAt: true &#125;,
&#125;);

// Group by
const usersByRole = await prisma.user.groupBy(&#123;
  by: ['role'],
  _count: &#123; id: true &#125;,
  having: &#123;
    id: &#123;
      _count: &#123;
        gt: 5,
      &#125;,
    &#125;,
  &#125;,
&#125;);

// Raw SQL queries
const users = await prisma.$queryRaw\`
  SELECT * FROM "User"
  WHERE "email" LIKE '%@example.com'
  LIMIT 10
\`;

// Execute raw SQL
await prisma.$executeRaw\`
  UPDATE "User"
  SET "lastLogin" = NOW()
  WHERE "id" = $&#123;userId&#125;
\`;

// Nested writes
await prisma.user.update(&#123;
  where: &#123; id: userId &#125;,
  data: &#123;
    posts: &#123;
      updateMany: &#123;
        where: &#123; published: false &#125;,
        data: &#123; published: true &#125;,
      &#125;,
    &#125;,
  &#125;,
&#125;);

// Select with computed fields
const users = await prisma.$queryRaw\`
  SELECT 
    u.*,
    COUNT(p.id) as "postCount"
  FROM "User" u
  LEFT JOIN "Post" p ON u.id = p."authorId"
  GROUP BY u.id
\\`;
  }
  ngAfterViewChecked() {
    Prism.highlightAll();
  }
  static {
    this.\u0275fac = function NextjsDatabaseComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NextjsDatabaseComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NextjsDatabaseComponent, selectors: [["app-nextjs-database"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 215, vars: 9, consts: [[1, "container"], ["label", "Prisma Setup"], [1, "tab-content"], [1, "info-box"], [1, "language-tsx"], ["label", "Prisma Client"], ["label", "CRUD Operations"], ["label", "API Routes"], ["label", "Relations"], ["label", "Transactions"], ["label", "Migrations"], ["label", "Connection Pooling"], ["label", "Advanced Queries"]], template: function NextjsDatabaseComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Next.js Database with Prisma");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "Integrate Prisma ORM with Next.js for type-safe database access, migrations, CRUD operations, and connection pooling.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-tab-group")(6, "mat-tab", 1)(7, "div", 2)(8, "h2");
        \u0275\u0275text(9, "Prisma ORM Setup");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 3)(11, "p")(12, "strong");
        \u0275\u0275text(13, "Prisma");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " is a next-generation ORM that provides type-safe database access.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul")(16, "li");
        \u0275\u0275text(17, "Type-safe database client");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "Schema-first approach");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li");
        \u0275\u0275text(21, "Automatic migrations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275text(23, "Supports PostgreSQL, MySQL, SQLite, MongoDB");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "li");
        \u0275\u0275text(25, "Excellent TypeScript support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "li");
        \u0275\u0275text(27, "Visual database browser");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "pre")(29, "code", 4);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(31, "mat-tab", 5)(32, "div", 2)(33, "h2");
        \u0275\u0275text(34, "Prisma Client Setup");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 3)(36, "p");
        \u0275\u0275text(37, "Configure Prisma Client for Next.js with proper connection management.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "ul")(39, "li");
        \u0275\u0275text(40, "Singleton pattern for client");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "li");
        \u0275\u0275text(42, "Prevents multiple instances");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "li");
        \u0275\u0275text(44, "Works with hot reload");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "li");
        \u0275\u0275text(46, "Query logging configuration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "li");
        \u0275\u0275text(48, "Use in Server Components");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "li");
        \u0275\u0275text(50, "Direct database access");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(51, "pre")(52, "code", 4);
        \u0275\u0275text(53);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(54, "mat-tab", 6)(55, "div", 2)(56, "h2");
        \u0275\u0275text(57, "CRUD Operations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 3)(59, "p");
        \u0275\u0275text(60, "Perform Create, Read, Update, and Delete operations with Prisma.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "ul")(62, "li");
        \u0275\u0275text(63, "create: Insert new records");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "li");
        \u0275\u0275text(65, "findUnique/findMany: Query records");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "li");
        \u0275\u0275text(67, "update: Modify existing records");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "li");
        \u0275\u0275text(69, "delete: Remove records");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "li");
        \u0275\u0275text(71, "upsert: Create or update");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "li");
        \u0275\u0275text(73, "Type-safe queries");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(74, "pre")(75, "code", 4);
        \u0275\u0275text(76);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(77, "mat-tab", 7)(78, "div", 2)(79, "h2");
        \u0275\u0275text(80, "Database in API Routes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "div", 3)(82, "p");
        \u0275\u0275text(83, "Use Prisma in Next.js API routes for RESTful endpoints.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "ul")(85, "li");
        \u0275\u0275text(86, "GET for fetching data");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "li");
        \u0275\u0275text(88, "POST for creating records");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "li");
        \u0275\u0275text(90, "PUT for updating records");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "li");
        \u0275\u0275text(92, "DELETE for removing records");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "li");
        \u0275\u0275text(94, "Pagination support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "li");
        \u0275\u0275text(96, "Error handling");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(97, "pre")(98, "code", 4);
        \u0275\u0275text(99);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(100, "mat-tab", 8)(101, "div", 2)(102, "h2");
        \u0275\u0275text(103, "Working with Relations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "div", 3)(105, "p");
        \u0275\u0275text(106, "Query and manage relationships between database models.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "ul")(108, "li");
        \u0275\u0275text(109, "One-to-many relationships");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "li");
        \u0275\u0275text(111, "Many-to-many relationships");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "li");
        \u0275\u0275text(113, "Include related data");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "li");
        \u0275\u0275text(115, "Create with relations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "li");
        \u0275\u0275text(117, "Connect existing relations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "li");
        \u0275\u0275text(119, "Nested queries");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(120, "pre")(121, "code", 4);
        \u0275\u0275text(122);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(123, "mat-tab", 9)(124, "div", 2)(125, "h2");
        \u0275\u0275text(126, "Database Transactions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "div", 3)(128, "p");
        \u0275\u0275text(129, "Execute multiple database operations atomically with transactions.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "ul")(131, "li");
        \u0275\u0275text(132, "Sequential transactions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "li");
        \u0275\u0275text(134, "Batch operations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "li");
        \u0275\u0275text(136, "Rollback on error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "li");
        \u0275\u0275text(138, "Isolation levels");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "li");
        \u0275\u0275text(140, "Timeout configuration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "li");
        \u0275\u0275text(142, "ACID guarantees");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(143, "pre")(144, "code", 4);
        \u0275\u0275text(145);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(146, "mat-tab", 10)(147, "div", 2)(148, "h2");
        \u0275\u0275text(149, "Database Migrations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "div", 3)(151, "p");
        \u0275\u0275text(152, "Manage database schema changes with Prisma migrations.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "ul")(154, "li");
        \u0275\u0275text(155, "Create migrations automatically");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "li");
        \u0275\u0275text(157, "Version control for schema");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "li");
        \u0275\u0275text(159, "Deploy to production safely");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "li");
        \u0275\u0275text(161, "Rollback support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "li");
        \u0275\u0275text(163, "Database seeding");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "li");
        \u0275\u0275text(165, "Schema synchronization");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(166, "pre")(167, "code", 4);
        \u0275\u0275text(168);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(169, "mat-tab", 11)(170, "div", 2)(171, "h2");
        \u0275\u0275text(172, "Connection Pooling");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(173, "div", 3)(174, "p");
        \u0275\u0275text(175, "Configure connection pooling for serverless and production environments.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "ul")(177, "li");
        \u0275\u0275text(178, "PgBouncer integration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(179, "li");
        \u0275\u0275text(180, "Connection limits");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(181, "li");
        \u0275\u0275text(182, "Direct URL for migrations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "li");
        \u0275\u0275text(184, "Serverless optimization");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(185, "li");
        \u0275\u0275text(186, "Connection management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "li");
        \u0275\u0275text(188, "Production best practices");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(189, "pre")(190, "code", 4);
        \u0275\u0275text(191);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(192, "mat-tab", 12)(193, "div", 2)(194, "h2");
        \u0275\u0275text(195, "Advanced Queries");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(196, "div", 3)(197, "p");
        \u0275\u0275text(198, "Perform complex queries with aggregation, search, and raw SQL.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(199, "ul")(200, "li");
        \u0275\u0275text(201, "Full-text search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(202, "li");
        \u0275\u0275text(203, "Aggregation functions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(204, "li");
        \u0275\u0275text(205, "Group by queries");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(206, "li");
        \u0275\u0275text(207, "Raw SQL support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(208, "li");
        \u0275\u0275text(209, "Nested writes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(210, "li");
        \u0275\u0275text(211, "Computed fields");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(212, "pre")(213, "code", 4);
        \u0275\u0275text(214);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(30);
        \u0275\u0275textInterpolate(ctx.prismaSetup);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.prismaClient);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.crudOperations);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.apiRoutes);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.relations);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.transactions);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.migrations);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.connectionPooling);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.advancedQueries);
      }
    }, dependencies: [MatTabsModule, MatTab, MatTabGroup], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #000000;\n  margin-bottom: 10px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #282c34;\n  margin-top: 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  border-left: 4px solid #000000;\n  padding: 15px;\n  margin: 15px 0;\n  border-radius: 4px;\n}\n.info-box.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border-left-color: #000000;\n}\n.info-box.warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border-left-color: #000000;\n}\n.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #000000;\n}\n.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding-left: 20px;\n}\n.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #e0e0e0;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-family: "Courier New", monospace;\n}\npre[_ngcontent-%COMP%] {\n  background: #282c34;\n  color: #ffffff;\n  padding: 15px;\n  border-radius: 4px;\n  overflow-x: auto;\n  margin: 15px 0;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: 14px;\n}\np[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  color: #333;\n}\n/*# sourceMappingURL=nextjs-database.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NextjsDatabaseComponent, { className: "NextjsDatabaseComponent", filePath: "src\\app\\components\\nextjs\\nextjs-database\\nextjs-database.component.ts", lineNumber: 13 });
})();
export {
  NextjsDatabaseComponent
};
//# sourceMappingURL=chunk-YCECLXKD.js.map
