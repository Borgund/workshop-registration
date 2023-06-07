This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Inspiration:
https://vercel.com/guides/nextjs-prisma-postgres
https://codevoweb.com/how-to-setup-prisma-orm-in-nextjs-13-app-directory/?utm_content=cmp-true

Todo:
[ ] Email provider for Auth. EG: https://next-auth.js.org/providers/email

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Prisma commands

To actually create the tables in your database, you now can use the following command of the Prisma CLI:

```bash
npx prisma db push
```

Now you can add some initial dummy data using Prisma Studio. Run the following command:

```bash
npx prisma studio
```

When updating the prisma schema you need to regenerate the prisma client.

```bash
npx prisma generate
```
