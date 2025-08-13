import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User, UserModel } from "../../entities";

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  user: Omit<User, 'password'>;
  token: string;
}

export const Login = async (data: LoginData): Promise<LoginResponse | Error> => {
  const user = (await UserModel.findOne({ email: data.email })) as User;
  if (!user) {
    return new Error("El usuario no existe");
  }
  const match = await bcrypt.compare(data.password, user.password);
  if (!match) {
    return new Error("LA CONTRASEÑA ES INCORRECTA");
  }

  // Generar token JWT
  const token = jwt.sign(
    { 
      userId: user._id,
      email: user.email 
    },
    process.env.JWT_SECRET || 'fallback-secret-key',
    { expiresIn: '24h' }
  );

  // Retornar usuario sin contraseña y el token
  const { password, ...userWithoutPassword } = user;
  
  return {
    user: userWithoutPassword,
    token
  };
};
