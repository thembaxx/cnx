# CNX

A Next.js authentication interface with configurable headline and subheadline flags.

[Browse the source](https://github.com/thembaxx/cnx)

## Engineering highlights

Asynchronous feature-flag reads, Suspense and composed authentication UI. Production identity-provider configuration is not verified.

## Technology

Declared in [package.json](package.json): Next.js `15.5.24` · React `^19.1.0` · TypeScript `^5.8.3` · Tailwind CSS `^4.1.3` · Framer Motion `^12.6.3` · Better Auth `^1.6.22` · Zod `^3.24.2`.

**Quality tooling:** `lint` scripts are available. See the setup guide below for prerequisites; this documentation pass does not assert that those checks were run.

---

## Project guide

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
