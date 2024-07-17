import { Component, OnInit } from '@angular/core';
import { Observable, of, interval } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css']
})
export class RxjsLearningComponent implements OnInit {

  name
  names: Observable<string>;

  button = document.querySelector('button');
  //observable = fromEvent(this.button, 'click');

  // Create an observable that emits a value every 1000ms (1 second)
  observable = interval(10);


  // Converts string array to Observable
  //employees: Observable<string[]> = of(['Jhon', 'Bob', 'Kumar']);
  // employee = {
  //   empId: 121,
  //   name: 'raj'
  // }
  // employee$: Observable<any> = of(this.employee);

  //employees: Observable<string> = from(['Jhon', 'Bob', 'Kumar']);

  name$: Observable<string> = of('Ram');

  constructor() { }

  ngOnInit(): void {
    this.observable.subscribe({
      next: value => console.log(value),
      complete: () => console.log('Complete!'),
      error: err => console.log('Error:', err)
    });

    //this.name$.subscribe(data => console.log(data));
    // this.employees.subscribe(
    //   data => console.log(data)
    // );
    // this.names = new Observable(
    //   (observer) => {
    //     try {
    //       observer.next("Raj");
    //       setTimeout(() => {
    //         observer.next('Sam');
    //       }, 2000);
    //       setTimeout(() => {
    //         observer.next('Bob');
    //       }, 4000);


    //     } catch (e) {
    //       observer.error(e);
    //     }
    //   }
    // );

    // this.names.subscribe(
    //   data => {
    //     console.log(data);
    //     this.name = data
    //   }
    // )
  }
}

