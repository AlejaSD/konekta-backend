import { RouteOptions } from "fastify";
import { createPostDto } from "../../entities";
import { createPost } from "../../business-logic";
import { authenticateToken } from "../../middleware";

export const createPostRoute: RouteOptions = {
  method: "POST",
  url: "/posts",
  preHandler: authenticateToken,
  handler: async (request, reply) => {
    const data = request.body as createPostDto;
    try {
      const obj = await createPost(data);
      reply.status(201).send(obj);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};
