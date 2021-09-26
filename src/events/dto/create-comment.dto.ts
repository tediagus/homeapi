export class CreateCommentDto {
  id: number;
  readonly messsage: string;
  readonly author: string;
  dateCreated: string;
  dateUpdated?: string;
}
