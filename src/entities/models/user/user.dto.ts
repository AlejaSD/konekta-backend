import { User } from "./user";

export type createUserDto = Omit<User, "_id" | "createdAt" | "uuid">;
export type partialUserDto = Partial<User>;

// DTO específico para signup que solo requiere email y password
export interface SignupDto {
  email: string;
  password: string;
}
