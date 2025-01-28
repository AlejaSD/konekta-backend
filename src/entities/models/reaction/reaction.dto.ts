import { Reaction } from "./reaction";

export type createReactionDto = Omit<Reaction, "_id" | "createdAt" | "uuid">;
export type partialReactionDto = Partial<Reaction>;