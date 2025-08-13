import { RouteOptions } from "fastify";
import { partialPostDto } from "../../entities";
import { updatePost } from "../../business-logic";
import { authenticateToken } from "../../middleware";

interface Params {
  uuid: string;
}

export const updatedPostRoute: RouteOptions = {
  method: "PUT",
  url: "/posts/:uuid",
  preHandler: authenticateToken,
  handler: async (request, reply) => {
    const data = request.body as partialPostDto;
    const { params } = request;
    const { uuid } = params as Params;
    try {
      const postUpdate = await updatePost({ ...data, _id: uuid });
      reply.status(200).send(postUpdate);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};
