import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProfileResponse } from '../types/IProfileResponse.interface';
import { map, Observable } from 'rxjs';
import { IProfile } from 'src/app/shared/types/profile.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FollowService {
  followArticle(userName: string): Observable<IProfile> {
    const URL = `${environment.apiURL}/profiles/${userName}/follow `;
    console.log(URL);
    return this.http
      .post(URL, null)
      .pipe(map((response: IProfileResponse) => response.profile));
  }

  unfollowArticle(userName: string): Observable<IProfile> {
    const URL = `${environment.apiURL}/profiles/${userName}/follow `;
    console.log(URL);
    return this.http
      .delete(URL)
      .pipe(map((response: IProfileResponse) => response.profile));
  }

  constructor(private http: HttpClient) {}
}
