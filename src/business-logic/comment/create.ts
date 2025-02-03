import { Comment, CommentModel, createCommentDto } from "../../entities";

export const createComment = async (
  info: createCommentDto
): Promise<Comment> => {
  const comment = new CommentModel(info);
  return await comment.save();
};
