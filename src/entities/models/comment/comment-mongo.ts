import { Schema } from "mongoose";
import { Comment } from "./comment";
import { StatusType } from "../../common";

export const commentSchemaMongo = new Schema<Comment>(
  {
    uuid: { type: String, unique: true, default: () => crypto.randomUUID() },
    status: { type: String, enum: StatusType, default: StatusType.ACTIVE },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    content: { type: String },
    userId: { type: String },
    postId: { type: String },
    commentId: { type: String }, // ID del comentario padre (opcional)
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
