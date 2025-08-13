import { FastifyRequest, FastifyReply } from 'fastify';

export const authenticateToken = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    await request.jwtVerify();
  } catch (err) {
    reply.status(401).send({ error: 'Token no válido o no proporcionado' });
  }
};
