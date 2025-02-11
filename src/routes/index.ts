import { FastifyInstance, RouteOptions } from "fastify";
import { userRoutes } from "./user";
import { postRoutes } from "./post";
import { commentRoutes } from "./comment";
import { authRoutes } from "./auth";
import { reactionRoutes } from "./reaction";

const routes: RouteOptions[] = [
    ...userRoutes,
    ...postRoutes,
    ...authRoutes,
    ...commentRoutes,
    ...reactionRoutes
]

export const registerRoutes = (fastify: FastifyInstance) => {
    console.warn("registering routes", routes);
    routes.map((route) => {
      fastify.route(route);
    });
  };
  