import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }

  // base url
  baseUrl = "http://localhost:8081/users";

  // header
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  register(user: any) {
    const body = JSON.stringify(user);
    return this.http.post(this.baseUrl + "/register", body, { headers: this.httpHeaders })
  }

  login(user: any) {
    const body = JSON.stringify(user);
    return this.http.post(this.baseUrl + "/login", body, { headers: this.httpHeaders })
  }

  logout(email: any) {
    const body = JSON.stringify(email);
    return this.http.post(this.baseUrl + "/logout", body, { headers: this.httpHeaders })
  }
}
