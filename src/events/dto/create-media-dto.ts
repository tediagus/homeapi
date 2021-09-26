export class CreateMediaDto {
  id: number;
  readonly type: string;
  readonly source: string;
  dateCreated?: string;
  dateUpdated?: string;
}
