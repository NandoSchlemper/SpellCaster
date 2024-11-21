import { initTRPC } from '@trpc/server';
import { helloRouter } from './test/hello';
import { userRouter } from './user/userRouter';

const t = initTRPC.create();

export const appRouter = t.router({
  hello: helloRouter,
  user: userRouter
});

export type AppRouter = typeof appRouter;
