import { IProfile } from './profile.interface';

export interface ICommentFromBack {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: IProfile;
}
export interface ICommentFromBackResponse {
  comment: {
    id: number;
    createdAt: string;
    updatedAt: string;
    body: string;
    author: IProfile;
  };
}
