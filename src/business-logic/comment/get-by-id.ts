import { Comment, CommentModel } from "../../entities";

export const getCommentById = async (uuid: string): Promise<Comment> => {
  const comment = (await CommentModel.findOne({ uuid })) as Comment;
  return comment;
};
