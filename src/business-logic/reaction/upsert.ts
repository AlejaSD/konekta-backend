import { Reaction, ReactionModel } from "../../entities";

interface ReactionDto {
  userId: string;
  postId: string;
  type: "like" | "dislike";
}

export const upsertReaction = async (info: ReactionDto): Promise<Reaction> => {
  const existingReaction = await ReactionModel.findOne({
    userId: info.userId,
    postId: info.postId,
  });

  if (existingReaction) {
    // Si existe, actualizar el tipo
    const updatedReaction = await ReactionModel.findByIdAndUpdate(
      existingReaction._id,
      { type: info.type },
      { new: true, runValidators: true }
    );

    if (!updatedReaction) {
      throw new Error("Reaction not found");
    }

    return updatedReaction;
  }

  // Si no existe, crear nueva reacción
  const reaction = new ReactionModel(info);
  return await reaction.save();
};
