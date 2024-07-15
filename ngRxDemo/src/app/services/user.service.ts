import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // base url
  // const baseUrl = 'http://'


  constructor(private http: HttpClient) { }

  // GET all User's
  // getUsers() {
  //   return this.http.get(this.baseUrl + '/users');
  // }

  // GET user by id


  // Add User
  // addUser(user) {
  //   this.http.post()
  // }
  // Update User

  // Delete User

}
