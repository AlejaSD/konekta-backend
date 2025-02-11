import { RouteOptions } from "fastify";
import { deleteComment } from "../../business-logic";

interface Params {
  uuid: string;
}

export const deleteCommentRoute: RouteOptions = {
  method: "DELETE",
  url: "/comments/:uuid",
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
