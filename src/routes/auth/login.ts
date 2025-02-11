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
      const user = await Login({ email, password });
      reply.status(200).send(user);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
