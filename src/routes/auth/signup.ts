import { RouteOptions } from "fastify";
import { SignupDto } from "../../entities";
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
      const data = request.body as SignupDto;
      const result = await Signup(data);
      reply.status(201).send(result);
    } catch (err) {
      if (err instanceof SyntaxError) {
        reply.status(400).send({ message: "Formato JSON inválido" });
      } else if (err instanceof Error) {
        console.log(err);
        reply.status(400).send({ error: err.message });
      }
    }
  },
};
