import { db } from "../../db/drizzle.db"
import { users } from "../../db/schemas/userSchemas"
import { router } from "../../trpc/trpc"
import { procedure } from "../../trpc/trpc"
import {z} from 'zod'


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
    ).query(async () => {
        try {

            const allUsers = await db.select({
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

    createUser: procedure.input(
        z.object({
            name: z.string(),
            email: z.string().email("Insira um email"),
            password: z.string()
        })
    ).mutation(async (opts) => {
        try {

            await db.insert(users).values({
                name: opts.input.name,
                email: opts.input.email,
                password: opts.input.password
            })

            return (
                console.log("Usuario inserido com sucesso")
            )

        } catch (err) {
            console.log("Error to creating user:", err)
            throw new Error("Error to creating user")
        }
    })

})