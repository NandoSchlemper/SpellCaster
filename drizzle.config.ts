import { defineConfig } from 'drizzle-kit';
import { env } from './backend/utils/env.schema'

export default defineConfig({
  schema: './backend/db/schemas/**',
  out: './backend/db/supabase/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DB_URL,
  },
});
