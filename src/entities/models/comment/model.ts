import { Collection, getModel } from "../../../constants-definitions";
import { Comment } from "./comment";
import { commentSchemaMongo } from "./comment-mongo";

export const CommentModel = getModel<Comment>(
  Collection.COMMENT,
  commentSchemaMongo
);
