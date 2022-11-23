# @tkssharma/next-apps

## Prerequisites

This repository manages their dependencies with `pnpm` in the case you don't have it installed in your system please refer to their documentation to install it.

## Getting Started

Install dependencies

```
pnpm i
```

Build all packages

```
npm run build
```

Run all unit tests across all packages

```
npm test
```

# Mastering Next.js

Hey, everyone! 👋  This course is talking about latest next js training.
I will keep updating this course with latest features
This course is with pnpm workspace which has many next js applications.


- 🟢 **Up to date**
- 🟡 **Outdated**
- 🔴 **Do not recommend**

## React Overview

I taught Class Components in 2019 for those still in the process of converting to React Hooks. In 2021, it's now standard to use React Hooks for all projects and I would recommend starting there.

- 🟢 Props & State
- 🟢 Functional Components
- 🟢 React Hooks
- 🟢 ES6
- 🟢 JSX
- 🟡 Class Components

## Developing Locally

- 🟢 `next dev`, `next build`, and `next start`
- 🟢 Prettier
- 🟡 Image Optimization is [now supported in Next.js](https://nextjs.org/docs/basic-features/image-optimization)
- 🟡 ESLint is [now integrated in Next.js](https://nextjs.org/docs/basic-features/eslint)
- 🔴 Standard (Prettier + ESLint won)

## Navigating Between Pages


- 🟢 `next/link` (client-side routing)
- 🟢 `useRouter`
- 🟢 Retrieving data from URLs
- 🟡 `getInitialProps` – This has largely been replaced by [newer APIs](https://nextjs.org/blog/next-9-3#next-gen-static-site-generation-ssg-support)

## Styling

- 🟢 Responsive + Mobile-First Design
- 🟢 styled-jsx
- 🟡 CSS & CSS Modules are now supported out of the box
- 🔴 Sass - I would recommend [other options](https://leerob.io/blog/css-with-react)
- 🔴 Styled-Components - I would recommend [other options](https://leerob.io/blog/css-with-react)

## Fetching Data

- 🟢 API Routes
- 🟢 [SWR](https://swr.vercel.app)
- 🟢 GraphQL
- 🟢 Hasura
- 🟡 Apollo Client - I'd recommend [SWR](https://swr.vercel.app/docs/data-fetching#graphql)
- 🟡 Custom Server - Most needs for this have moved into Next.js core `next start`.

## Managing Assets and SEO

- 🟢 Favicons
- 🟢 Open Graph
- 🟢 Core themes are still valid for SEO
- 🟡 Image Optimization is [now supported in Next.js](https://nextjs.org/docs/basic-features/image-optimization)
- 🟡 There's now [official guidance on SEO](https://nextjs.org/learn/seo)

## Building A Blog With MDX

- 🟢 MDX vs CMS
- 🟡 Component Library (Theme UI) – I would recommend [other options](https://leerob.io/blog/css-with-react)
- 🔴 StaticKit – Acquired by [Formspree](https://formspree.io/)

## Authentication

- 🟢 JWTs
- 🟢 Auth0
- 🟢 I have a [new course](https://react2025.com/) using Firebase and Next.js
- 🟡 Would recommend [next-auth](https://next-auth.js.org/) for an OSS solution now
- 🟡 Here are my [latest thoughts](https://leerob.io/blog/react-state-management) on State Management (Forms)

## Testing & Error Handling

- 🟢 Jest
- 🟢 React Testing Library
- 🟢 Sentry ([see latest example](https://github.com/vercel/next.js/tree/canary/examples/with-sentry))

## State Management & More

- 🟢 TypeScript Integration
- 🟡 Here are my [latest thoughts](https://leerob.io/blog/react-state-management) on State Management
- 🟡 Redux ([see latest example](https://github.com/vercel/next.js/tree/canary/examples/with-redux))

## Exporting & Deployment

- 🟢 [Vercel](https://vercel.com)
- 🟢 You no longer need to customize anything in `vercel.json` - it just works!
- 🟡 ZEIT is now Vercel
