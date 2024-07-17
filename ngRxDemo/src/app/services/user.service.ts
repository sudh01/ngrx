import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // base url
  baseUrl = 'http://jsonplaceholder.typicode.com/';


  constructor(private http: HttpClient) { }

  // GET all User's
  getUsers() {
    return this.http.get(this.baseUrl + '/users');
  }

  // GET user by id
  getUserById(id) {
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }


  // Add User
  // addUser(user) {
  //   this.http.post()
  // }
  // Update User

  // Delete User

}
