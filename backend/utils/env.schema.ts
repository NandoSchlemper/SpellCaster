import {z} from 'zod'

const envSchema = z.object({
    DB_URL: z.string().url()
})

export const env = envSchema.parse({
    DB_URL: process.env.DB_URL
})