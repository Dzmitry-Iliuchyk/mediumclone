import { IBackEndErrors } from 'src/app/shared/types/backEndErrors.interface';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';

export interface IAuthState {
  isSubmitting: boolean;
  currentUser: ICurrentUser | null;
  isLoggedIn: boolean | null;
  isLoading: boolean;
  validationErrors: IBackEndErrors | null;
}
