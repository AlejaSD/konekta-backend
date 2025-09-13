import { PostModel } from "../../entities";

export const deletePost = async (uuid: string): Promise<boolean | Error> => {
  const post = await PostModel.findOne({ uuid: uuid });
  if (!post) {
    return new Error("Post not found");
  }
  await post.deleteOne();
  return true;
};
