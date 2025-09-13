import { partialUserDto, User, UserModel } from "../../entities";

export const updateUser = async (infoUser: partialUserDto): Promise<User> => {
  const { uuid, ...updateData } = infoUser;
  const updatedUser = await UserModel.findOneAndUpdate(
    { uuid: uuid },
    { $set: updateData },
    { new: true, runValidators: true }
  );
  if (!updatedUser) {
    throw new Error("User not found");
  }
  return updatedUser;
};
