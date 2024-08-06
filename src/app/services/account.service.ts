import { HttpClient } from "@angular/common/http"
import { URL_API } from "../environments/environments"
import { Injectable } from "@angular/core"
import { RequestLogin } from "../login/shared/request-login"
import { ResponseLogin } from "../login/shared/response-login"

@Injectable({
    providedIn: 'root'
  })
  
export class AccountService{
    httpCli:HttpClient
    constructor(private _httpClient: HttpClient)
    {
        this.httpCli = _httpClient
    }

    async Login(credentials: RequestLogin)
    {
        return await this.httpCli.post<ResponseLogin>(`${URL_API}Account/Login`, credentials);
    }
}