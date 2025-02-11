import { Comment, CommentModel, partialPostDto } from "../../entities";

export const updateComment = async (
  infoComment: partialPostDto
): Promise<Comment> => {
  const updatedComment = await CommentModel.findByIdAndUpdate(
    infoComment._id,
    { $set: infoComment },
    { new: true, runValidators: true }
  );
  if (!updatedComment) {
    throw new Error("Comment not found");
  }
  return updatedComment;
};
