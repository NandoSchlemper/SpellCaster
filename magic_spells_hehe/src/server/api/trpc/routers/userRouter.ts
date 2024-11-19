// src/server/api/trpc/routers/userRouter.ts
import { supabase } from '../context';
import { router, publicProcedure } from '../trpc'; 
import { z } from 'zod';

export const userRouter = router({
  getUser: publicProcedure
    .input(z.string())
    .query(async ({ input, ctx }) => {
      const { data, error } = await supabase.from('users').select('*').eq('id', input).single();
      if (error) throw new Error(error.message);
      return data;
    }),
    
  createUser: publicProcedure
    .input(z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string()
    }))
    .mutation(async ({ input, ctx }) => {
      const { data, error } = await supabase.from('users').insert([input]).single();
      if (error) throw new Error(error.message);
      return data;
    }),
});
