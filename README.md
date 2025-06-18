# BuildPro Monorepo

BuildPro is a **construction project and workforce management** SaaS. This repository uses a monorepo structure managed by Turbo to host both the web application and shared packages.

## Repository Structure

- `apps/web` – React web client built with Vite.
- `packages/common` – Shared utilities, types and configurations used across apps.

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Environment variables** – create `apps/web/.env.local` with at least:
   ```
   VITE_SUPABASE_URL=<your-supabase-url>
   VITE_SUPABASE_ANON_KEY=<your-supabase-key>
   ```
   These values are used by the Supabase client.

## Development

- Start all apps in development mode:
  ```bash
  npm run dev
  ```
- Build all packages:
  ```bash
  npm run build
  ```

Additional commands such as `npm run lint` and `npm run test` are available for code quality and testing.
