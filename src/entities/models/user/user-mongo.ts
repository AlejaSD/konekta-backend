import { Schema } from "mongoose";
import { User } from "./user";
import { StatusType } from "../../common";

export const userSchemaMongo = new Schema<User>(
  {
    uuid: { type: String, unique: true, default: () => crypto.randomUUID() },
    status: { type: String, enum: StatusType, default: StatusType.ACTIVE },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    name: { type: String },
    email: { type: String },
    password: { type: String },
    role: { type: String, enum: ["admin", "user"], default: "user" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
