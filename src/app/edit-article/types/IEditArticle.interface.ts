import { IArticle } from 'src/app/shared/types/article.interface';
import { IBackEndErrors } from 'src/app/shared/types/backEndErrors.interface';

export interface IEditArticleState {
  isSubmitting: boolean;
  isLoading: boolean;
  validationErrors: IBackEndErrors | null;
  article: IArticle | null;
}
