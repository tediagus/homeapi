import { Image } from './image.interface';
import { Comment } from './comment.interface';

export interface iEvent {
  id: number;
  title: string;
  description?: string;
  dateCreated: string;
  dateUpdated: string;
  medias?: Image[];
  comments?: Comment[];
}
