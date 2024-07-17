import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUsers } from 'src/app/actions/user-actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [];

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(getUsers());
    this.store.select('users').subscribe(
      data => {
        console.log(data.users);
        this.users = data.users;
      }
    )
  }
}
