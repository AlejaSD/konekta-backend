import { ReactionModel } from "../../entities";

export const deleteReaction = async (_id: string): Promise<Boolean | Error> => {
  const reaction = await ReactionModel.findById(_id);
  if (!reaction) {
    return new Error("the Reaction was not found");
  }
  await reaction.deleteOne();
  return true;
};
