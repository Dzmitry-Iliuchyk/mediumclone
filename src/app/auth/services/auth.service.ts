import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IRegisterRequest } from 'src/app/auth/types/registerRequest.interface';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import { environment } from 'src/environments/environment';
import { IAuthResponse } from 'src/app/auth/types/authResponse.interface';
import { ILoginRequest } from 'src/app/auth/types/loginRequest.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: IAuthResponse): ICurrentUser {
    return response.user;
  }

  register(data: IRegisterRequest): Observable<ICurrentUser> {
    const url = environment.apiURL + '/users';
    console.log(data);
    return this.http.post<IAuthResponse>(url, data).pipe(map(this.getUser));
  }

  login(data: ILoginRequest): Observable<ICurrentUser> {
    const url = environment.apiURL + '/users/login';
    console.log(data);
    return this.http.post<IAuthResponse>(url, data).pipe(map(this.getUser));
  }

  getCurrentUser(): Observable<ICurrentUser> {
    const url = environment.apiURL + '/user';
    return this.http.get<IAuthResponse>(url).pipe(map(this.getUser));
  }
}
