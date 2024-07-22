import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addUser } from 'src/app/actions/user-actions';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private router: Router
  ) { }

  user = this.fb.group({
    name: [''],
    email: [''],
    phone: [''],
    password: ['']
  })

  onSubmit() {
    console.log("add-user: " + this.user);
    this.store.dispatch(addUser({ user: this.user.value }));

    // Navigate user to /users
    this.router.navigate(['/users']);

  }


}
