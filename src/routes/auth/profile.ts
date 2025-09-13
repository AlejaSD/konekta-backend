import { RouteOptions, FastifyRequest } from "fastify";
import { getUserById } from "../../business-logic";
import { authenticateToken } from "../../middleware";

export const profileRoute: RouteOptions = {
  method: "GET",
  url: "/profile",
  preHandler: authenticateToken,
  handler: async (request: FastifyRequest, reply) => {
    try {
      // El token ya fue verificado por el middleware
      const payload = request.user as any;
      const userId = payload.userId;
      
      const user = await getUserById(userId);
      
      if (!user) {
        reply.status(404).send({ error: "Usuario no encontrado" });
        return;
      }
      
      // Remover la contraseña de la respuesta
      const { password, ...userWithoutPassword } = user;
      reply.status(200).send(userWithoutPassword);
    } catch (err) {
      console.log(err);
      reply.status(500).send({ error: "Error interno del servidor" });
    }
  },
};
