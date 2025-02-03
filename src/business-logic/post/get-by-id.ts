import { Post, PostModel } from "../../entities";

export const getPostById = async (uuid: string): Promise<Post> => {
  const post = (await PostModel.findOne({ uuid })) as Post;
  return post;
};
