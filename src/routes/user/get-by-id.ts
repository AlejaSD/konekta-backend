import { RouteOptions } from "fastify";
import { getUserById } from "../../business-logic";

interface Params {
  uuid: string;
}
export const getUserByIdRoute: RouteOptions = {
  method: "GET",
  url: "/users/:uuid",

  handler: async (request, reply) => {
    const { params } = request;

    const { uuid } = params as Params;
    try {
      const user = await getUserById(uuid);
      reply.status(200).send(user);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
