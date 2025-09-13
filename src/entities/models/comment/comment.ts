import { Base } from "../../common";

export interface Comment extends Base {
  content: string;
  userId: string;
  postId: string;
  commentId?: string; // ID del comentario padre (para respuestas/replies)
}
