import { RouteOptions } from "fastify";
import { getCommentById } from "../../business-logic";
import { authenticateToken } from "../../middleware";

interface Params {
  uuid: string;
}
export const getCommentByIdRoute: RouteOptions = {
  method: "GET",
  url: "/comments/:uuid",
  preHandler: authenticateToken,
  handler: async (request, reply) => {
    const { params } = request;

    const { uuid } = params as Params;
    try {
      const comment = await getCommentById(uuid);
      reply.status(200).send(comment);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
