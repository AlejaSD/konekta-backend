import { Schema } from "mongoose";
import { Post } from "./post";
import { StatusType } from "../../common";

export const postSchemaMongo = new Schema<Post>(
  {
    uuid: { type: String, unique: true, default: () => crypto.randomUUID() },
    status: { type: String, enum: StatusType, default: StatusType.ACTIVE },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    title: { type: String },
    content: { type: String },
    userId: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
