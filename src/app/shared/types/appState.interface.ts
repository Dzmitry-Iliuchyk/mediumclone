import { IAuthState } from 'src/app/auth/types/authState.interface';
import { IFeedState } from '../modules/feed/types/feedState.interface';
import { ITagState } from '../modules/pupular-tags/types/tag-state.interface';
import { IArticleState } from 'src/app/article/types/IArticleState.interface';

export interface IAppState {
  feed: IFeedState;
  auth: IAuthState;
  tags: ITagState;
  article: IArticleState
}
