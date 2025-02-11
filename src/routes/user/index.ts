import { RouteOptions } from "fastify";
import { deleteUserRoute } from "./delete";
import { getUserByIdRoute } from "./get-by-id";
import { getAllUsersRoute } from "./list";
import { updatedUserRoute } from "./update";

export const userRoutes: RouteOptions[] = [
    deleteUserRoute,
    getUserByIdRoute,
    getAllUsersRoute,
    updatedUserRoute
]