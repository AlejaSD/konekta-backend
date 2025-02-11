import { RouteOptions } from "fastify";
import { getAllPosts } from "../../business-logic";

export const getAllPostsRoute: RouteOptions = {
  method: "GET",
  url: "/posts",
  handler: async (request, reply) => {
    try {
      const obj = await getAllPosts();
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
