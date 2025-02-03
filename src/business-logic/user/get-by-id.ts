import { User, UserModel } from "../../entities";

export const getUserById = async (uuid: string): Promise<User> => {
  const user = (await UserModel.findOne({ uuid })) as User;
  return user;
};
