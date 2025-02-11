export * from './create';
export * from './delete';
export * from './get-by-id';
export * from './list';
export * from './update';
import { RouteOptions } from "fastify";
import { createPostRoute } from "./create";
import { getPostByIdRoute } from "./get-by-id";
import { getAllPostsRoute } from "./list";
import { deletePostRoute } from "./delete";
import { updatedPostRoute } from "./update";

export const postRoutes: RouteOptions[] = [
    createPostRoute,
    getPostByIdRoute,
    getAllPostsRoute,
    deletePostRoute,
    updatedPostRoute
]