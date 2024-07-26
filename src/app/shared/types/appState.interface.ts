import { IAuthState } from 'src/app/auth/types/authState.interface';
import { IFeedState } from '../modules/feed/types/feedState.interface';
import { ITagState } from '../modules/pupular-tags/types/tag-state.interface';
import { IArticleState } from 'src/app/shared/modules/article/types/IArticleState.interface';
import { ICreateArticleState } from 'src/app/create-article/store/types/ICreateArticleState.interface';

export interface IAppState {
  feed: IFeedState;
  auth: IAuthState;
  tags: ITagState;
  article: IArticleState,
  createArticle: ICreateArticleState
}
