import { RouteOptions } from "fastify";
import { createCommentRoute } from "./create";
import { getAllCommentsRoute } from "./list";
import { deleteCommentRoute } from "./delete";
import { updatedCommentRoute } from "./update";
import { getCommentByIdRoute } from "./get-by-id";

export const commentRoutes: RouteOptions[] = [
    createCommentRoute,
    getAllCommentsRoute,
    deleteCommentRoute,
    updatedCommentRoute,
    getCommentByIdRoute
]