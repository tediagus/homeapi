import { CreateCommentDto } from './create-comment.dto';
import { CreateMediaDto } from './create-media-dto';

export class CreateEventDto {
  id: number;
  readonly title: string;
  readonly description: string;
  dateCreated: string;
  dateUpdated: string;
  medias: CreateMediaDto[];
  readonly comments: CreateCommentDto[];
}
