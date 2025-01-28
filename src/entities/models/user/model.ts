import { Collection, getModel } from "../../../constants-definitions";
import { User } from "./user";
import { userSchemaMongo } from "./user-mongo";

export const UserModel = getModel<User>(Collection.USER, userSchemaMongo);
