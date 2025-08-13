import { RouteOptions } from "fastify";
import { deleteComment } from "../../business-logic";
import { authenticateToken } from "../../middleware";

interface Params {
  uuid: string;
}

export const deleteCommentRoute: RouteOptions = {
  method: "DELETE",
  url: "/comments/:uuid",
  preHandler: authenticateToken,
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    try {
      const result = await deleteComment(uuid);
      reply.status(200).send(result);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};
