import { User, UserModel } from "../../entities";

export const getUserById = async (idOrUuid: string): Promise<User | null> => {
  // If looks like a 24-hex Mongo ObjectId, try _id first
  const objectIdPattern = /^[0-9a-fA-F]{24}$/;
  let user: User | null = null;
  if (objectIdPattern.test(idOrUuid)) {
    user = (await UserModel.findOne({ _id: idOrUuid })) as User | null;
    if (user) return user;
  }

  // Fallback to uuid search
  user = (await UserModel.findOne({ uuid: idOrUuid })) as User | null;
  return user;
};
