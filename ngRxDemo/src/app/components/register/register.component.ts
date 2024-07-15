import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb: FormBuilder) { }

  user: any;

  regForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', Validators.required],
    contactNo: ['', Validators.required],
    password: ['', Validators.required]
  })

  onSubmit(regForm: any) {
    console.log(regForm);
  }
}
