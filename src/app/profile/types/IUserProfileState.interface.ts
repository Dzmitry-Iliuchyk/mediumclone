import { IProfile } from 'src/app/shared/types/profile.interface';

export interface IUserProfileState {
  data: IProfile | null;
  isLoading: boolean;
  error: string | null;
}
