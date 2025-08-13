import { RouteOptions } from "fastify";
import { getAllReactions } from "../../business-logic";
import { authenticateToken } from "../../middleware";

export const getAllReactionsRoute: RouteOptions = {
  method: "GET",
  url: "/reactions",
  preHandler: authenticateToken,
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
