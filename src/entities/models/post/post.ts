import { Base } from "../../common";

export interface Post extends Base {
  title: string;
  content: string;
  userId: string;
}
