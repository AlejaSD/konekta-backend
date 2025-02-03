import { partialPostDto, Post, PostModel } from "../../entities";

export const updatePost = async (infoPost: partialPostDto): Promise<Post> => {
  const updatedPost = await PostModel.findByIdAndUpdate(
    infoPost._id,
    { $set: infoPost },
    { new: true, runValidators: true }
  );
  if (!updatedPost) {
    throw new Error("Post not found");
  }
  return updatedPost;
};
