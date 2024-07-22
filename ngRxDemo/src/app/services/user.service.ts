import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // base url
  baseUrl = 'http://localhost:8081';

  // header
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  // GET all User's
  getUsers() {
    return this.http.get(this.baseUrl + '/employee/findAll');
  }

  // GET user by id
  getUserById(id: number): Observable<any> {
    console.log('getUserById: ' + id);
    return this.http.get(`${this.baseUrl}/employee/get/${id}`);
  }
  // Delete User
  deleteUserById(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/employee/delete/${id}`);
  }

  //Add User
  addUser(user: any) {
    const body = JSON.stringify(user);
    console.log("service: " + body);
    return this.http.post(this.baseUrl + `/employee/add`, body, { headers: this.httpHeaders });
  }
  // Update User
  updateUser(user: any) {
    const body = JSON.stringify(user);
    console.log("service: " + body);
    return this.http.put(this.baseUrl + `/employee/update`, body, { headers: this.httpHeaders });
  }



}
