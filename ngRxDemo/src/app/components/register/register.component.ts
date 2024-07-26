import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { register } from 'src/app/actions/account-actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private router: Router
  ) { }

  regForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', Validators.required],
    contactNo: ['', Validators.required],
    password: ['', Validators.required]
  })

  onSubmit() {
    console.log(this.regForm.value);
    // dispatch action
    this.store.dispatch(register({ user: this.regForm.value }));

    // redirect to home page
    this.router.navigate(['/login']);
  }
}
