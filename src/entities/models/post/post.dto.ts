import { Post } from "./post";

export type createPostDto = Omit<Post, "_id" | "createdAt" | "uuid">;
export type partialPostDto = Partial<Post>;
