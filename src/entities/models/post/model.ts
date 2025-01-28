import { Collection, getModel } from "../../../constants-definitions";
import { Post } from "./post";
import { postSchemaMongo } from "./post-mongo";

export const PostModel = getModel<Post>(Collection.POST, postSchemaMongo);
