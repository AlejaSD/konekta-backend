import { User } from "./user";

export type createUserDto = Omit<User, "_id" | "createdAt" | "uuid">;
export type partialUserDto = Partial<User>;
