import { RouteOptions } from "fastify";
import { getPostById } from "../../business-logic";
import { authenticateToken } from "../../middleware";

interface Params {
  uuid: string;
}
export const getPostByIdRoute: RouteOptions = {
  method: "GET",
  url: "/posts/:uuid",
  preHandler: authenticateToken,
  handler: async (request, reply) => {
    const { params } = request;

    const { uuid } = params as Params;
    try {
      const post = await getPostById(uuid);
      reply.status(200).send(post);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
