import { RouteOptions } from "fastify";
import { deleteReaction } from "../../business-logic";

interface Params {
  uuid: string;
}

export const deleteReactionRoute: RouteOptions = {
  method: "DELETE",
  url: "/reactions/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    try {
      const result = await deleteReaction(uuid);
      reply.status(200).send(result);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};
