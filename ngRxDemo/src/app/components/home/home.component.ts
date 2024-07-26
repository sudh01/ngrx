import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  count: any;

  constructor(private store: Store<any>) {
    store.subscribe(
      res => {
        console.log(res);
        this.count = res.count;
      }
    )
  }

}
