import { Collection, getModel } from "../../../constants-definitions";
import { postSchemaMongo } from "../post";
import { Reaction } from "./reaction";

export const ReactionModel = getModel<Reaction>(
  Collection.REACTION,
  postSchemaMongo
);
