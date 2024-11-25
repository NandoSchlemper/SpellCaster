import {procedure, router} from '../trpc/trpc'

export const helloRouter = router({
  sayHello: procedure.query(() => {
    return { message: 'Hello World!' };
  }),
});

