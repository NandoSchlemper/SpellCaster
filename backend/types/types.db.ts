import {z} from 'zod'

export const userType = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email()
});