import { RouteOptions } from "fastify";
import { upsertReaction } from "../../business-logic";
import { createReactionDto } from "../../entities";
import { authenticateToken } from "../../middleware";

export const upsertReactionRoute: RouteOptions = {
  method: "POST",
  url: "/reactions",
  preHandler: authenticateToken,
  handler: async (request, reply) => {
    const data = request.body as createReactionDto;
    try {
      const reaction = await upsertReaction(data);
      reply.status(200).send(reaction);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};
