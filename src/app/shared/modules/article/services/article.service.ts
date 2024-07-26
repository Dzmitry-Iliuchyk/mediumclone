import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  deleteArticle(slug: string) {
    const url = `${environment.apiURL}/articles/${slug}`;
    return this.http.delete<{}>(url);
  }
}
