import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../routers/app';

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:4000/trpc', // URL do servidor Fastify
    }),
  ],
});


async function main() {
  const response = await client.user.createUser.mutate({name: "roger", email: "roger@gmail.com", password: "Galinho"});
  console.log(response); 
}

main();
