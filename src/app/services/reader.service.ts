import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReaderService {

  constructor(private httpClient: HttpClient) {
  }

  getHello(): Observable<number> {
    return this.httpClient.get<number>('http://localhost:8000/hello-reader');
  }
}
