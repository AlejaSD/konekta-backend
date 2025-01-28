import { Base } from "../../common";

export interface Reaction extends Base {
    type: "like" | "dislike";
    userId: string;
    postId: string;
}