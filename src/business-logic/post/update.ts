import { partialPostDto, Post, PostModel } from "../../entities";

export const updatePost = async (infoPost: partialPostDto): Promise<Post> => {
  const { uuid, ...updateData } = infoPost;
  const updatedPost = await PostModel.findOneAndUpdate(
    { uuid: uuid },
    { $set: updateData },
    { new: true, runValidators: true }
  );
  if (!updatedPost) {
    throw new Error("Post not found");
  }
  return updatedPost;
};
