import { RouteOptions } from "fastify";
import { getCommentById } from "../../business-logic";

interface Params {
  uuid: string;
}
export const getCommentByIdRoute: RouteOptions = {
  method: "GET",
  url: "/comments/:uuid",

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
