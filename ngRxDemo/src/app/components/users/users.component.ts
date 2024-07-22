import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteUserById, getUserById, getUsers } from 'src/app/actions/user-actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [];
  user: any;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    console.log("ngOnInit");
    // Dispatch action to get list of users
    this.store.dispatch(getUsers());
    this.store.select('users').subscribe(
      data => {
        console.log(data.users);
        this.users = data.users;
      }
    )
  }
  onDelete(id: number) {
    console.log("onDelete: " + id);
    this.store.dispatch(deleteUserById({ id: id }));
    this.store.select('users').subscribe(
      data => { this.users = data.users }
    )
  }


}
