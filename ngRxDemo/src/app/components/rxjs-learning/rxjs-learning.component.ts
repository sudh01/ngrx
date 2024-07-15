import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css']
})
export class RxjsLearningComponent implements OnInit {

  name
  names: Observable<string>;

  constructor() { }

  ngOnInit() {
    this.names = new Observable(
      (observer) => {
        try {
          observer.next("Raj");
          setTimeout(() => {
            observer.next('Sam');
          }, 2000);
          setTimeout(() => {
            observer.next('Bob');
          }, 4000);


        } catch (e) {
          observer.error(e);
        }
      }
    );

    this.names.subscribe(
      data => {
        console.log(data);
        this.name = data
      }
    )
  }
}

