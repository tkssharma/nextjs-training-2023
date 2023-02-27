# Next 13 Showcase


## How to run the app

```
➜  nextjs-13-live-app git:(develop) ✗ nvm use v16.18.0
Now using node v16.18.0 (npm v8.19.2)
```

.env
```
DATABASE_URL="postgres://api:development_pass@localhost:5432/pokemon-app"
```

First, run the migration and then run server:

```bash
npm run generate
```
### generate Prisma client 

```
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma

✔ Generated Prisma Client (4.10.1 | library) to ./../../node_modules/.pnpm/@prisma+client@4.10.1_prisma@4.10.1/node_modules/@prisma/client in 441ms
You can now start using Prisma Client in your code. Reference: https://pris.ly/d/client
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

```
### Prism Migrate and Seed Database

```
npm run migrate
npm run seed
```
### Starting Application 
```
npm run dev
```
