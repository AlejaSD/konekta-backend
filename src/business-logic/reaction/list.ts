import { Reaction, ReactionModel } from "../../entities";

export const getAllReactions = async () => {
  return (await ReactionModel.find({})) as Reaction[];
};
