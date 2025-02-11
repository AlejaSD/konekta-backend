import { RouteOptions } from "fastify";
import { upsertReactionRoute } from "./upsert";
import { getAllReactionsRoute } from "./list";
import { deleteReactionRoute } from "./delete";

export const reactionRoutes: RouteOptions[] = [
    upsertReactionRoute,
    getAllReactionsRoute,
    deleteReactionRoute
]