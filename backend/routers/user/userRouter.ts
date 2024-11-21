import { db } from "../../db/drizzle.db"
import { users } from "../../db/schemas/userSchemas"
import { router } from "../../trpc/trpc"
import { procedure } from "../../trpc/trpc"
import {z} from 'zod'
import { userType } from "../../types/types.db"


export const userRouter = router({
    getUser: procedure.query(() => {
        return {id: "1"}
    }),

    getAllUsers: procedure.output(
        z.array(
            z.object({
                id: z.string(),
                name: z.string(),
                email: z.string().email(),
                password: z.string()
            })
        )
    ).query(() => {
        try {
            const allUsers = db.select({
                id: users.id,
                name: users.name,
                email: users.email,
                password: users.password
            }).from(users)
            return allUsers
        } catch (err) {
            console.log("Error fetching users:", err)
            throw new Error("Error to fetch data")
        }
    }),

})