import { partialUserDto, User, UserModel } from "../../entities";

export const updateUser = async (infoUser: partialUserDto): Promise<User> => {
  const updatedUser = await UserModel.findByIdAndUpdate(
    infoUser._id,
    { $set: infoUser },
    { new: true, runValidators: true }
  );
  if (!updatedUser) {
    throw new Error("User not found");
  }
  return updatedUser;
};
