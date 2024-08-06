import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestLogin } from '../login/shared/request-login';
import { ResponseLogin } from '../login/shared/response-login';
import { Observable } from 'rxjs';
import { URL_API } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  httpCli: HttpClient
  constructor(private _httpClient: HttpClient)
  {
      this.httpCli = _httpClient
  }

  Login(credentials: RequestLogin) : Observable<any>
  {
      return this.httpCli.post<ResponseLogin>(`${URL_API}Account/Login`, credentials);
  }
}
