import { IBackEndErrors } from 'src/app/shared/types/backEndErrors.interface';

export interface ISettingsState {
  isSubmitting: boolean;
  validationErrors: IBackEndErrors|null;
}
