import { partialUserDto, User, UserModel } from "../../entities";

export const updateUser = async (infoUser: partialUserDto): Promise<User> => {
  const user = await UserModel.findOne({ uuid: infoUser.uuid });
  if (!user) {
    throw new Error("User not found");
  }
  const updatedUser = (await UserModel.findOneAndUpdate(
    { uuid: infoUser.uuid },
    infoUser
  )) as User;
  return updatedUser;
};
