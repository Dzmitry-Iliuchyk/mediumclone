import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICommentsResponse } from 'src/app/shared/types/IComment.interface';
import {
  ICommentFromBack,
  ICommentFromBackResponse,
} from 'src/app/shared/types/ICommentFromBack.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class CommentsService {
  constructor(private http: HttpClient) {}

  getCommentsToArticle(slug: string): Observable<ICommentsResponse> {
    const url = `${environment.apiURL}/articles/${slug}/comments`;
    return this.http.get<ICommentsResponse>(url);
  }

  postComment(
    commentBody: string,
    slug: string
  ): Observable<ICommentFromBackResponse> {
    const url = `${environment.apiURL}/articles/${slug}/comments`;
    return this.http.post<ICommentFromBackResponse>(url, {
      comment: commentBody,
    });
  }
}
