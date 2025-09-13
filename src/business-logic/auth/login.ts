import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User, UserModel } from "../../entities";

interface LoginData {
  email: string;
  password: string;
}

interface SafeUser {
  uuid: string;
  email: string;
  name: string;
  role: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

interface LoginResponse {
  user: SafeUser;
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
      userId: (user as any)._id?.toString?.() || String((user as any)._id),
      email: user.email,
      role: (user as any).role,
      uuid: (user as any).uuid
    },
    process.env.JWT_SECRET || 'fallback-secret-key',
    { expiresIn: '24h' }
  );

  const safeUser: SafeUser = {
    uuid: (user as any).uuid,
    email: user.email,
    name: (user as any).name,
    role: (user as any).role,
    status: (user as any).status,
    createdAt: (user as any).createdAt,
    updatedAt: (user as any).updatedAt
  };

  return { user: safeUser, token };
};
