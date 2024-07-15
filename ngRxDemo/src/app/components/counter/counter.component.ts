import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { incr, decr } from 'src/app/actions/count-actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  count: any;

  constructor(private store: Store<any>) {
    store.select('count').subscribe(
      res => {
        console.log(res);
        this.count = res.count;
      }
    )
  }

  incr() {
    this.store.dispatch(incr({ num: 1 }));
  }
  decr() {
    this.store.dispatch(decr({ num: 1 }));
  }

}
