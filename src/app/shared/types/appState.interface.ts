import { IAuthState } from 'src/app/auth/types/authState.interface';
import { IFeedState } from '../modules/feed/types/feedState.interface';

export interface IAppState {
  feed: IFeedState;
  auth: IAuthState;

}
