import { UserModel } from "../../entities";

export const deleteUser = async (uuid: string): Promise<Boolean | Error> => {
  const user = await UserModel.findOne({ uuid: uuid });
  if (!user) {
    return new Error("the User was not found");
  }
  await user.deleteOne();
  return true;
};
