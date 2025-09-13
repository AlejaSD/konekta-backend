import { SignupDto, UserModel } from "../../entities";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface SafeUser {
  uuid: string;
  email: string;
  name: string;
  role: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

interface SignupResponse {
  user: SafeUser;
  token: string;
}

export const Signup = async (info: SignupDto): Promise<SignupResponse> => {
  const model = await UserModel.findOne({ email: info.email });

  if (model) {
    throw new Error("El usuario ya existe");
  }

  const newPassword = await bcrypt.hashSync(info.password || "", 10);

  const newUser = new UserModel({
    email: info.email,
    password: newPassword,
    name: info.email.split('@')[0], // Usar parte del email como nombre por defecto
  role: info.role || "user" // Rol por defecto (temporal: acepta role desde frontend)
  });
  await newUser.save();
  
  // Generar token JWT
  const token = jwt.sign(
    { 
      userId: newUser._id.toString(),
      email: newUser.email,
      role: newUser.role,
      uuid: newUser.uuid
    },
    process.env.JWT_SECRET || 'fallback-secret-key',
    { expiresIn: '24h' }
  );

  const safeUser: SafeUser = {
    uuid: newUser.uuid,
    email: newUser.email,
    name: newUser.name,
    role: newUser.role,
    status: (newUser as any).status,
    createdAt: newUser.createdAt,
    updatedAt: newUser.updatedAt
  };

  return { user: safeUser, token };
};
