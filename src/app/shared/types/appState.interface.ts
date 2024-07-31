import { IAuthState } from 'src/app/auth/types/authState.interface';
import { IFeedState } from '../modules/feed/types/feedState.interface';
import { ITagState } from '../modules/pupular-tags/types/tag-state.interface';
import { IArticleState } from 'src/app/shared/modules/article/types/IArticleState.interface';
import { ICreateArticleState } from 'src/app/create-article/store/types/ICreateArticleState.interface';
import { IEditArticleState } from 'src/app/edit-article/types/IEditArticle.interface';
import { ISettingsState } from 'src/app/settings/types/ISettingsState.interface';
import { IUserProfileState } from 'src/app/profile/types/IUserProfileState.interface';

export interface IAppState {
  feed: IFeedState;
  auth: IAuthState;
  tags: ITagState;
  article: IArticleState;
  createArticle: ICreateArticleState;
  editArticle: IEditArticleState;
  settings: ISettingsState;
  userProfile: IUserProfileState;
}
