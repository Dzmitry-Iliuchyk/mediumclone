import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProfile } from 'src/app/shared/types/profile.interface';
import { environment } from 'src/environments/environment';
import { IGetUserProfileResponse } from '../types/IGetUserProfileResponse.interace';
import { map, Observable } from 'rxjs';

@Injectable()
export class ProfileService {
  constructor(private http: HttpClient) {}

  getUserProfile(slug: string): Observable<IProfile> {
    const url = `${environment.apiURL}/profiles/${slug}`;
    return this.http
      .get(url)
      .pipe(map((response: IGetUserProfileResponse) => response.profile));
  }
}
