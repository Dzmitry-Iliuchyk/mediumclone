import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFeedResponse } from '../types/feedResponse.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {}
  getFeed(url: string): Observable<IFeedResponse> {
    const apiUrl: string = environment.apiURL + url;
    return this.http.get<IFeedResponse>(apiUrl);
  }
}
