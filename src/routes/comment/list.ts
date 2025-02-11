import { RouteOptions } from "fastify";
import { getAllComments } from "../../business-logic";

export const getAllCommentsRoute: RouteOptions = {
  method: "GET",
  url: "/comments",
  handler: async (request, reply) => {
    try {
      const obj = await getAllComments();
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
