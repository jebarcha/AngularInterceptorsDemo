import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from "rxjs/operators";
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUser() {
    let params = new HttpParams().append('page', '1');
    params = params.append('name', 'jose');

    return this.http.get(`https://reqres.din/api/user`, {
      params,
      //headers
    }).pipe(
      map((resp: any) => resp['data'])
    );
  }



}
