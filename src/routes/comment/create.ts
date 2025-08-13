import { RouteOptions } from "fastify";
import { createCommentDto } from "../../entities";
import { createComment } from "../../business-logic";
import { authenticateToken } from "../../middleware";

export const createCommentRoute: RouteOptions = {
  method: "POST",
  url: "/comments",
  preHandler: authenticateToken,
  handler: async (request, reply) => {
    const data = request.body as createCommentDto;
    try {
      const obj = await createComment(data);
      reply.status(201).send(obj);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};
