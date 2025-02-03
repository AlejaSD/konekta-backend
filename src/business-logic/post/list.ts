import { Post, PostModel } from "../../entities";

export const getAllPosts = async () => {
  return (await PostModel.find({})) as Post[];
};
