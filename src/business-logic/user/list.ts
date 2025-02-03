import { User, UserModel } from "../../entities";


export const getAllUsers = async () => {
    return (await UserModel.find({})) as User[];
  };
  