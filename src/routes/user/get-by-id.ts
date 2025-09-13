import { RouteOptions } from "fastify";
import { getUserById } from "../../business-logic";
import { authenticateToken } from "../../middleware";

interface Params {
  uuid: string;
}
export const getUserByIdRoute: RouteOptions = {
  method: "GET",
  url: "/users/:uuid",
  preHandler: authenticateToken,
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;

    // authUser set by middleware
    if (!request.authUser) {
      return reply.status(401).send({ error: 'UNAUTHORIZED' });
    }

    const isOwner = request.authUser.uuid === uuid || request.authUser.userId === uuid;
    const isAdmin = request.authUser.role === 'admin';

    try {
      const user = await getUserById(uuid);
      if (!user) {
        return reply.status(404).send({ error: 'NOT_FOUND' });
      }

      // If requester is owner or admin, return full safe object.
      if (isOwner || isAdmin) {
        const safe = {
          uuid: (user as any).uuid,
          email: (user as any).email,
          name: (user as any).name,
          role: (user as any).role,
          status: (user as any).status,
          createdAt: (user as any).createdAt,
          updatedAt: (user as any).updatedAt
        };
        return reply.status(200).send(safe);
      }

      // For other authenticated users (not admin, not owner) return only id and name.
      const limited = {
        uuid: (user as any).uuid,
        name: (user as any).name
      };
      return reply.status(200).send(limited);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send({ error: 'INTERNAL_ERROR' });
      }
    }
  },
};
