import { Comment } from "./comment";

export type createCommentDto = Omit<Comment, "_id" | "createdAt" | "uuid">;
export type partialCommentDto = Partial<Comment>;
