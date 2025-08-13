import "dotenv/config";
import fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import fastifyJWT from '@fastify/jwt';
import { connectToDatabaseMongoAtlas } from "../database";
import { registerRoutes } from "../routes";

const PORT = (process.env.PORT || 4200) as number;

const corsOptions = {
  origin: "*",
};

const main = async () => {
  await connectToDatabaseMongoAtlas();

  const server = fastify({
    logger: true,
  });

  server.register(fastifyCors, corsOptions);

  // Registrar JWT
  server.register(fastifyJWT, {
    secret: process.env.JWT_SECRET || 'fallback-secret-key'
  });

  server.register(
    (instance, options, next) => {
      registerRoutes(instance);
      next();
    },
    { prefix: "api/v1" }
  );
  

  server.listen({ port: Number(PORT) }, (error, address) => {
    if (error) {
      console.error(error);
      process.exit(1);
    }
    console.info(`Backend App is running at ${address}`);
    console.info("Press CTRL-C to stop");
  });
};

main();
