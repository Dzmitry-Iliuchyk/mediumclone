import { IBackEndErrors } from 'src/app/shared/types/backEndErrors.interface';

export interface ICreateArticleState {
  isSubmitting: boolean;
  validationErrors: IBackEndErrors | null;
}
