import { RouteOptions } from "fastify";
import { loginRoute } from "./login";
import { signupRoute } from "./signup";
import { profileRoute } from "./profile";

export const authRoutes: RouteOptions[] = [
    loginRoute,
    signupRoute,
    profileRoute
]