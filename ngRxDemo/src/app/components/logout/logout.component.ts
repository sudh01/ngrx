import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/actions/account-actions';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.select('users').subscribe(
      res => {
        console.log(res);
        this.store.dispatch(logout({ email: res.loginUser.email }))
      }

    )

  }


}
