import { RouteOptions } from "fastify";
import { getAllReactions } from "../../business-logic";

export const getAllReactionsRoute: RouteOptions = {
  method: "GET",
  url: "/reactions",
  handler: async (request, reply) => {
    try {
      const obj = await getAllReactions();
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
