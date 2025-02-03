import { createUserDto, User, UserModel } from "../../entities";
import bcrypt from "bcrypt";

export const Signup = async (info: createUserDto): Promise<User> => {
  const model = await UserModel.findOne({ email: info.email });

  if (model) {
    throw new Error("El usuario ya existe");
  }

  const newPassword = await bcrypt.hashSync(info.password || "", 10);

  const newUser = new UserModel({
    ...info,
    password: newPassword,
  });
  await newUser.save();
  return newUser;
};
