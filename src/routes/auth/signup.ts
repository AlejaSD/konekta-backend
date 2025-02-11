import { RouteOptions } from "fastify";
import { createUserDto } from "../../entities";
import { Signup } from "../../business-logic";

export const signupRoute: RouteOptions = {
  method: "POST",
  url: "/signup",
  handler: async (request, reply) => {
    try {
      console.log(
        "signupRoute ============================================================",
        request.body
      );
      // Nos aseguramos que el cuerpo se analice como JSON
      const data = request.body as createUserDto;
      const user = await Signup(data);
      reply.status(200).send(user);
    } catch (err) {
      if (err instanceof SyntaxError) {
        reply.status(400).send({ message: "Formato JSON inválido" });
      } else if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
