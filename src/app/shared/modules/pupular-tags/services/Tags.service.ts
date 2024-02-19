import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ITagResponse } from "../types/tagsResponce.interface";
import { environment } from "src/environments/environment";

@Injectable()
export class TagsService {
  url: string = '/tags';
  constructor(private http: HttpClient) {}
  getTags(): Observable<ITagResponse> {
    const apiUrl: string = environment.apiURL + this.url;
    return this.http.get<ITagResponse>(apiUrl);
  }
}
