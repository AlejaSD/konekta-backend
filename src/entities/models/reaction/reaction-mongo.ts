import { Schema } from "mongoose";
import { Reaction } from "./reaction";
import { StatusType } from "../../common";

export const reactionSchemaMongo = new Schema<Reaction>(
  {
    uuid: { type: String, unique: true, default: () => crypto.randomUUID() },
    status: { type: String, enum: StatusType, default: StatusType.ACTIVE },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    type: { type: String, enum: ["like", "dislike"] },
    userId: { type: String },
    postId: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
