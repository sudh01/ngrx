import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isLogin = false;

  constructor(
    private store: Store<any>
  ) {
    store.select('account').subscribe(
      res => {
        console.log("Nav: " + res)
        this.isLogin = res.loginUser.isLogin;
      }
    )
  }

}
