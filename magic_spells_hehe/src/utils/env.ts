import {z} from 'zod';
import config from 'dotenv'

const envSchema = z.object({
    SUPABASE_URL: z.string().url(),
    SUPABASE_ANON_KEY: z.string()
})

export const env = envSchema.parse({
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY
})