import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IArticle } from 'src/app/shared/types/article.interface';
import { IArticleResponse } from 'src/app/shared/types/articleResponse.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class LikeService {
  favoriteArticle(slug: string): Observable<IArticle> {
    const URL = `${environment.apiURL}/articles/${slug}/favorite `;
    console.log(URL);
    return this.http
      .post<IArticleResponse>(URL, null)
      .pipe(map((art) => art.article));
  }

  unfavoriteArticle(slug: string): Observable<IArticle> {
    const URL = `${environment.apiURL}/articles/${slug}/favorite `;
    console.log(URL);
    return this.http
      .delete<IArticleResponse>(URL)
      .pipe(map((art) => art.article));
  }

  constructor(private http: HttpClient) {}
}
