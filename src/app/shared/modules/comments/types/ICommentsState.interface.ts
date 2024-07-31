import { IBackEndErrors } from 'src/app/shared/types/backEndErrors.interface';
import { ICommentFromBack } from 'src/app/shared/types/ICommentFromBack.interface';

export interface ICommentsState {
  isLoading: boolean;
  isSubmitting: boolean;
  error: IBackEndErrors | null;
  comments: ICommentFromBack[] | null;
}
