import { ITagResponse } from './tagsResponce.interface';

export interface ITagState {
  tags: ITagResponse | null;
  isLoading: boolean;
  error: string | null;
}
