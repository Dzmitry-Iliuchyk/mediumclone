import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IArticle } from 'src/app/shared/types/article.interface';
import { IArticleInput } from 'src/app/shared/types/IArticleInput.interface';
import { ISaveArticleResponse } from 'src/app/shared/types/ISaveArticleResponse.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class CreateArticleService {
  constructor(private http: HttpClient) {}

  createArticle(articleInput: IArticleInput): Observable<IArticle> {
    const fullURL = environment.apiURL + '/articles';
    return this.http
      .post(fullURL, articleInput)
      .pipe(map((response: ISaveArticleResponse) => response.article));
  }
}
