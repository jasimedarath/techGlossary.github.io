import{b as d,c as p,d as u}from"./chunk-YXH3G3BT.js";import"./chunk-XAZLOLJU.js";import"./chunk-6JEWWCEO.js";import{Ha as n,da as l,gb as i,hb as e,tb as t,ub as a,yb as m}from"./chunk-WGQ2ELTG.js";var S=(()=>{class s{constructor(){this.prismaSetup=`// Prisma ORM Setup
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
// npx prisma migrate dev --name init`,this.prismaClient=`// Prisma Client Setup

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
&#125;`,this.crudOperations=`// CRUD Operations with Prisma

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
&#125;`,this.apiRoutes=`// Database Operations in API Routes

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
&#125;`,this.relations=`// Working with Relations

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
&#125;);`,this.transactions=`// Database Transactions

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
);`,this.migrations=`// Database Migrations

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

// Run seed: npx prisma db seed`,this.connectionPooling=`// Connection Pooling

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
&#125;);`,this.advancedQueries=`// Advanced Prisma Queries

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
\\`}ngAfterViewChecked(){Prism.highlightAll()}static{this.\u0275fac=function(o){return new(o||s)}}static{this.\u0275cmp=l({type:s,selectors:[["app-nextjs-database"]],standalone:!0,features:[m],decls:215,vars:9,consts:[[1,"container"],["label","Prisma Setup"],[1,"tab-content"],[1,"info-box"],[1,"language-tsx"],["label","Prisma Client"],["label","CRUD Operations"],["label","API Routes"],["label","Relations"],["label","Transactions"],["label","Migrations"],["label","Connection Pooling"],["label","Advanced Queries"]],template:function(o,r){o&1&&(i(0,"div",0)(1,"h1"),t(2,"Next.js Database with Prisma"),e(),i(3,"p"),t(4,"Integrate Prisma ORM with Next.js for type-safe database access, migrations, CRUD operations, and connection pooling."),e(),i(5,"mat-tab-group")(6,"mat-tab",1)(7,"div",2)(8,"h2"),t(9,"Prisma ORM Setup"),e(),i(10,"div",3)(11,"p")(12,"strong"),t(13,"Prisma"),e(),t(14," is a next-generation ORM that provides type-safe database access."),e(),i(15,"ul")(16,"li"),t(17,"Type-safe database client"),e(),i(18,"li"),t(19,"Schema-first approach"),e(),i(20,"li"),t(21,"Automatic migrations"),e(),i(22,"li"),t(23,"Supports PostgreSQL, MySQL, SQLite, MongoDB"),e(),i(24,"li"),t(25,"Excellent TypeScript support"),e(),i(26,"li"),t(27,"Visual database browser"),e()()(),i(28,"pre")(29,"code",4),t(30),e()()()(),i(31,"mat-tab",5)(32,"div",2)(33,"h2"),t(34,"Prisma Client Setup"),e(),i(35,"div",3)(36,"p"),t(37,"Configure Prisma Client for Next.js with proper connection management."),e(),i(38,"ul")(39,"li"),t(40,"Singleton pattern for client"),e(),i(41,"li"),t(42,"Prevents multiple instances"),e(),i(43,"li"),t(44,"Works with hot reload"),e(),i(45,"li"),t(46,"Query logging configuration"),e(),i(47,"li"),t(48,"Use in Server Components"),e(),i(49,"li"),t(50,"Direct database access"),e()()(),i(51,"pre")(52,"code",4),t(53),e()()()(),i(54,"mat-tab",6)(55,"div",2)(56,"h2"),t(57,"CRUD Operations"),e(),i(58,"div",3)(59,"p"),t(60,"Perform Create, Read, Update, and Delete operations with Prisma."),e(),i(61,"ul")(62,"li"),t(63,"create: Insert new records"),e(),i(64,"li"),t(65,"findUnique/findMany: Query records"),e(),i(66,"li"),t(67,"update: Modify existing records"),e(),i(68,"li"),t(69,"delete: Remove records"),e(),i(70,"li"),t(71,"upsert: Create or update"),e(),i(72,"li"),t(73,"Type-safe queries"),e()()(),i(74,"pre")(75,"code",4),t(76),e()()()(),i(77,"mat-tab",7)(78,"div",2)(79,"h2"),t(80,"Database in API Routes"),e(),i(81,"div",3)(82,"p"),t(83,"Use Prisma in Next.js API routes for RESTful endpoints."),e(),i(84,"ul")(85,"li"),t(86,"GET for fetching data"),e(),i(87,"li"),t(88,"POST for creating records"),e(),i(89,"li"),t(90,"PUT for updating records"),e(),i(91,"li"),t(92,"DELETE for removing records"),e(),i(93,"li"),t(94,"Pagination support"),e(),i(95,"li"),t(96,"Error handling"),e()()(),i(97,"pre")(98,"code",4),t(99),e()()()(),i(100,"mat-tab",8)(101,"div",2)(102,"h2"),t(103,"Working with Relations"),e(),i(104,"div",3)(105,"p"),t(106,"Query and manage relationships between database models."),e(),i(107,"ul")(108,"li"),t(109,"One-to-many relationships"),e(),i(110,"li"),t(111,"Many-to-many relationships"),e(),i(112,"li"),t(113,"Include related data"),e(),i(114,"li"),t(115,"Create with relations"),e(),i(116,"li"),t(117,"Connect existing relations"),e(),i(118,"li"),t(119,"Nested queries"),e()()(),i(120,"pre")(121,"code",4),t(122),e()()()(),i(123,"mat-tab",9)(124,"div",2)(125,"h2"),t(126,"Database Transactions"),e(),i(127,"div",3)(128,"p"),t(129,"Execute multiple database operations atomically with transactions."),e(),i(130,"ul")(131,"li"),t(132,"Sequential transactions"),e(),i(133,"li"),t(134,"Batch operations"),e(),i(135,"li"),t(136,"Rollback on error"),e(),i(137,"li"),t(138,"Isolation levels"),e(),i(139,"li"),t(140,"Timeout configuration"),e(),i(141,"li"),t(142,"ACID guarantees"),e()()(),i(143,"pre")(144,"code",4),t(145),e()()()(),i(146,"mat-tab",10)(147,"div",2)(148,"h2"),t(149,"Database Migrations"),e(),i(150,"div",3)(151,"p"),t(152,"Manage database schema changes with Prisma migrations."),e(),i(153,"ul")(154,"li"),t(155,"Create migrations automatically"),e(),i(156,"li"),t(157,"Version control for schema"),e(),i(158,"li"),t(159,"Deploy to production safely"),e(),i(160,"li"),t(161,"Rollback support"),e(),i(162,"li"),t(163,"Database seeding"),e(),i(164,"li"),t(165,"Schema synchronization"),e()()(),i(166,"pre")(167,"code",4),t(168),e()()()(),i(169,"mat-tab",11)(170,"div",2)(171,"h2"),t(172,"Connection Pooling"),e(),i(173,"div",3)(174,"p"),t(175,"Configure connection pooling for serverless and production environments."),e(),i(176,"ul")(177,"li"),t(178,"PgBouncer integration"),e(),i(179,"li"),t(180,"Connection limits"),e(),i(181,"li"),t(182,"Direct URL for migrations"),e(),i(183,"li"),t(184,"Serverless optimization"),e(),i(185,"li"),t(186,"Connection management"),e(),i(187,"li"),t(188,"Production best practices"),e()()(),i(189,"pre")(190,"code",4),t(191),e()()()(),i(192,"mat-tab",12)(193,"div",2)(194,"h2"),t(195,"Advanced Queries"),e(),i(196,"div",3)(197,"p"),t(198,"Perform complex queries with aggregation, search, and raw SQL."),e(),i(199,"ul")(200,"li"),t(201,"Full-text search"),e(),i(202,"li"),t(203,"Aggregation functions"),e(),i(204,"li"),t(205,"Group by queries"),e(),i(206,"li"),t(207,"Raw SQL support"),e(),i(208,"li"),t(209,"Nested writes"),e(),i(210,"li"),t(211,"Computed fields"),e()()(),i(212,"pre")(213,"code",4),t(214),e()()()()()()),o&2&&(n(30),a(r.prismaSetup),n(23),a(r.prismaClient),n(23),a(r.crudOperations),n(23),a(r.apiRoutes),n(23),a(r.relations),n(23),a(r.transactions),n(23),a(r.migrations),n(23),a(r.connectionPooling),n(23),a(r.advancedQueries))},dependencies:[u,d,p],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}h1[_ngcontent-%COMP%]{color:#000;margin-bottom:10px}h2[_ngcontent-%COMP%]{color:#282c34;margin-top:0}.tab-content[_ngcontent-%COMP%]{padding:20px;background:#f5f5f5;border-radius:4px;margin-top:10px}.info-box[_ngcontent-%COMP%]{background:#f0f0f0;border-left:4px solid #000000;padding:15px;margin:15px 0;border-radius:4px}.info-box.success[_ngcontent-%COMP%]{background:#e8f5e9;border-left-color:#000}.info-box.warning[_ngcontent-%COMP%]{background:#fff3e0;border-left-color:#000}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#000}.info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:10px 0;padding-left:20px}.info-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.info-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#e0e0e0;padding:2px 6px;border-radius:3px;font-family:Courier New,monospace}pre[_ngcontent-%COMP%]{background:#282c34;color:#fff;padding:15px;border-radius:4px;overflow-x:auto;margin:15px 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:14px}p[_ngcontent-%COMP%]{line-height:1.6;color:#333}"]})}}return s})();export{S as NextjsDatabaseComponent};
