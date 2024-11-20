import Fastify from 'fastify';
import cors from '@fastify/cors';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { appRouter } from './routers/app';
import { createContext } from './trpc/context';

const server = Fastify();

server.register(cors);

server.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  trpcOptions: { router: appRouter, createContext },
});

server.listen({ port: 4000 }, () => {
  console.log('🚀 Servidor rodando em http://localhost:4000');
});
