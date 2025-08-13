import { Login } from "../../business-logic";
import { User } from "../../entities";
import { RouteOptions } from "fastify";

export const loginRoute: RouteOptions = {
  method: "POST",
  url: "/signin",
  handler: async (request, reply) => {
    const { body } = request;
    const { email, password } = body as User;
    try {
      const result = await Login({ email, password });
      
      if (result instanceof Error) {
        reply.status(400).send({ error: result.message });
        return;
      }
      
      reply.status(200).send(result);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send({ error: err.message });
      }
    }
  },
};
