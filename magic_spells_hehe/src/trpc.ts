import {initTRPC} from '@trpc/server';

const t = initTRPC.create()

export const router = t.router
export const publicProcedure = t.procedure
// PublicProcedure is like a function, that can be used in many aspects of the 
// Code ;)