import { Base } from "../../common";

export interface Comment extends Base {
  content: string;
  userId: string;
  postId: string;
}
