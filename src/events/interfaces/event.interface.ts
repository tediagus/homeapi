import { Image } from './image.interface';
import { Comment } from './comment.interface';
import { Timestamp } from '@firebase/firestore/dist/lite';

export interface iEvent {
  id: number;
  title: string;
  description?: string;
  dateCreated: Timestamp | string;
  dateUpdated: Timestamp | string;
  medias?: Image[];
  comments?: Comment[];
}
