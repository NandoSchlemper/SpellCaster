import { defineConfig } from 'drizzle-kit';
import { env } from './backend/utils/env.schema'

export default defineConfig({
  schema: './backend/db/schemas/drizzle.schemas.ts',
  out: './supabase/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DB_URL,
  },
});
