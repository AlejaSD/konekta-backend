import { CommentModel } from "../../entities";

export const deleteComment = async (_id: string): Promise<boolean | Error> => {
  const comment = await CommentModel.findById(_id);
  if (!comment) {
    return new Error("Comment not found");
  }
  await comment.deleteOne();
  return true;
};
