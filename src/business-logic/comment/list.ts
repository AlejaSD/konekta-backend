import { Comment, CommentModel } from "../../entities";

export const getAllComments = async () => {
  return (await CommentModel.find({})) as Comment[];
};
