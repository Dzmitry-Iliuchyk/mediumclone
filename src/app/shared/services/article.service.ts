import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IArticleResponse } from 'src/app/shared/types/articleResponse.interface';
import { environment } from 'src/environments/environment';
import { IArticle } from 'src/app/shared/types/article.interface';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<IArticle> {
    const fullUrl = `${environment.apiURL}/articles/${slug}`;
    return this.http.get<IArticleResponse>(fullUrl).pipe(
      map((response: IArticleResponse) => {
        return response.article;
      })
    );
  }
}
