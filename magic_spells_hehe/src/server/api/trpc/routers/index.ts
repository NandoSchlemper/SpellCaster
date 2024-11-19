import {router} from '../trpc'
import { userRouter } from './userRouter'; // Importa o roteador de 

export const appRouter = router({
    users: userRouter,
  });
  
  // Exporta o tipo da API para uso no cliente
  export type AppRouter = typeof appRouter;