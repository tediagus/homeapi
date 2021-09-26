import { Timestamp } from '@firebase/firestore/dist/lite';
import { CreateCommentDto } from './create-comment.dto';
import { CreateMediaDto } from './create-media-dto';

export class CreateEventDto {
  id: number;
  readonly title: string;
  readonly description: string;
  dateCreated: Timestamp;
  dateUpdated: Timestamp;
  medias: CreateMediaDto[];
  readonly comments: CreateCommentDto[];
}
