import { RouteOptions } from "fastify";
import { getAllUsers } from "../../business-logic";
import { authenticateToken } from "../../middleware";

export const getAllUsersRoute: RouteOptions = {
  method: "GET",
  url: "/users",
  preHandler: authenticateToken,
  handler: async (request, reply) => {
    try {
      const obj = await getAllUsers();
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
