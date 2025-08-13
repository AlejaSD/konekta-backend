import { RouteOptions } from "fastify";
import { deletePost } from "../../business-logic";
import { authenticateToken } from "../../middleware";

interface Params {
  uuid: string;
}

export const deletePostRoute: RouteOptions = {
  method: "DELETE",
  url: "/posts/:uuid",
  preHandler: authenticateToken,
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    try {
      const result = await deletePost(uuid);
      reply.status(200).send(result);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};
