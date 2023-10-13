# Portfolio Website

This is the company website for MicroScript LLC www.microscriptllc.com

## The Stack

- [SvelteKit](https://kit.svelte.dev/docs/introduction)
- [Tailwind](https://tailwindcss.com/docs/installation)
- [Skeleton UI](https://www.skeleton.dev/)
- [Drizzle ORM](https://orm.drizzle.team/docs/overview)
- [Turso Database](https://docs.turso.tech/)
- [Vercel Hosting](https://vercel.com/dashboard)
- [Vercel Blob Storage](https://vercel.com/docs/storage/vercel-blob)

## Development

```
npm i
npm run dev
```

## Turso Database

### Get db url and add to .env VITE_TURSO_DB_URL

`turso db show ${DB_NAME}`

### Generate db access token and add to .env VITE_TURSO_DB_AUTH_TOKEN

`turso db tokens create ${DB_NAME}`

### Generate

`npm run drizzle:generate`

### Migrate

`npm run drizzle:migrate`
