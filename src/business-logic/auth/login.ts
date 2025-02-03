import bcrypt from "bcrypt";
import { User, UserModel } from "../../entities";

interface LoginData {
  email: string;
  password: string;
}

export const Login = async (data: LoginData): Promise<User | Error> => {
  const user = (await UserModel.findOne({ email: data.email })) as User;
  if (!user) {
    return new Error("El usuario no existe");
  }
  const match = await bcrypt.compare(data.password, user.password);
  if (!match) {
    return new Error("LA CONTRASEÑA ES INCORRECTA");
  }
  return user;
};
