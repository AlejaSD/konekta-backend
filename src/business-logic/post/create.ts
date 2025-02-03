import { createPostDto, Post, PostModel } from "../../entities";

export const createPost = async (info: createPostDto): Promise<Post> => {
  const post = new PostModel(info);
  return await post.save();
};
