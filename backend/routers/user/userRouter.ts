import { router } from "../../trpc/trpc"
import { procedure } from "../../trpc/trpc"

export const userRouter = router({
    getUser: procedure.query(() => {
        return {id: "1"}
    })
})