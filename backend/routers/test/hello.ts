import {procedure, router} from '../../trpc/trpc'
import {z} from 'zod'

export const helloRouter = router({
  sayHello: procedure.query(() => {
    return { message: 'Hello World!' };
  }),

  saySomething: procedure.input(
    z.string()
  ).query((opts) => {
    return { message: opts.input }
  })
});

