import { IAuthState } from 'src/app/auth/types/authState.interface';
import { IFeedState } from '../modules/feed/types/feedState.interface';
import { ITagState } from '../modules/pupular-tags/types/tag-state.interface';

export interface IAppState {
  feed: IFeedState;
  auth: IAuthState;
  tags: ITagState;
}
