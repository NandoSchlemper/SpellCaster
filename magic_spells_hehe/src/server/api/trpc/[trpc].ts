import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from './routers/index'

export default createNextApiHandler({
  router: appRouter
});