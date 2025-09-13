import { FastifyRequest, FastifyReply } from 'fastify';

declare module 'fastify' {
  interface FastifyRequest {
    authUser?: {
      userId: string;
      email: string;
      role?: string;
      uuid?: string;
    };
  }
}

export const authenticateToken = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    await request.jwtVerify();
    const payload: any = (request as any).user; // fastify-jwt coloca payload en request.user
    request.authUser = {
      userId: payload.userId,
      email: payload.email,
      role: payload.role,
      uuid: payload.uuid
    };
  } catch (err) {
    return reply.status(401).send({ error: 'Token no válido o no proporcionado' });
  }
};
