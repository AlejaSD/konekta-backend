import { Base } from "../../common";

export interface Post extends Base {
  title: string;
  content: string;
  userId: string;
  author?: string; // dueño general del evento
  startDate?: string; // fecha de inicio ISO
  endDate?: string; // fecha de finalización ISO
  location?: string; // lugar
  category?: string; // categoria
  capacity?: number; // cupos
  postId?: string; // ID del post padre (para seguimiento/threading)
  imageUrl?: string; // URL de la imagen del post
}
