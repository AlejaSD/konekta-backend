import { SignupDto, User, UserModel } from "../../entities";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface SignupResponse {
  user: Omit<User, 'password'>;
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
    role: "user" // Rol por defecto
  });
  await newUser.save();
  
  // Generar token JWT
  const token = jwt.sign(
    { 
      userId: newUser._id,
      email: newUser.email 
    },
    process.env.JWT_SECRET || 'fallback-secret-key',
    { expiresIn: '24h' }
  );

  // Retornar usuario sin contraseña y el token
  const { password, ...userWithoutPassword } = newUser.toObject();
  
  return {
    user: userWithoutPassword,
    token
  };
};
