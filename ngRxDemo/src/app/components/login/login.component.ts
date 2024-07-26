import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from 'src/app/actions/account-actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private router: Router
  ) { }

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    role: ['', Validators.required]
  })

  onSubmit() {
    console.log(this.loginForm.value);

    //Dispatch login action
    this.store.dispatch(login({ user: this.loginForm.value }));

    // redirect to home page
    this.router.navigate(['/home']);
  }
}
