import { RouteOptions } from "fastify";
import { updateComment } from "../../business-logic";
import { partialCommentDto } from "../../entities";
import { authenticateToken } from "../../middleware";

interface Params {
  uuid: string;
}

export const updatedCommentRoute: RouteOptions = {
  method: "PUT",
  url: "/comments/:uuid",
  preHandler: authenticateToken,
  handler: async (request, reply) => {
    const data = request.body as partialCommentDto;
    const { params } = request;
    const { uuid } = params as Params;
    try {
      const commentUpdate = await updateComment({ ...data, _id: uuid });
      reply.status(200).send(commentUpdate);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};
