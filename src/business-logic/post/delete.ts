import { PostModel } from "../../entities";

export const deletePost = async (_id: string): Promise<boolean | Error> => {
  const post = await PostModel.findById(_id);
  if (!post) {
    return new Error("Post not found");
  }
  await post.deleteOne();
  return true;
};
