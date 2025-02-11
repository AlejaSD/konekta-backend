import { RouteOptions } from "fastify";
import { getPostById } from "../../business-logic";

interface Params {
  uuid: string;
}
export const getPostByIdRoute: RouteOptions = {
  method: "GET",
  url: "/posts/:uuid",

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
