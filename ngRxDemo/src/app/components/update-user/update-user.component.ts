import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getUserById, updateUser } from 'src/app/actions/user-actions';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { User } from 'src/app/model/User';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  user: FormGroup;


  ngOnInit() {

    this.user = this.fb.group({
      empId: [],
      name: [''],
      email: [''],
      phone: [''],
      password: ['']
    })

    // Get id from url
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);

    // dispatch action to get user by id
    this.store.dispatch(getUserById({ id: parseInt(id) }));

    // update user with response got from rest api
    this.store.select('users').subscribe(
      data => {
        console.log("store.user: " + data.user);
        console.log("store.user: " + typeof (data.user));
        const usr = JSON.parse(data.user);
        console.log("store.user: " + usr);
        //this.user = data.user;
        //console.log("local.user: " + this.user);
        this.user.patchValue({
          empId: usr.empId,
          name: usr.name,
          email: usr.email,
          phone: usr.phone,
          password: usr.password
        })
      }
    )

  }

  onSubmit() {
    console.log("update-user: " + this.user);
    // dispatch update action
    this.store.dispatch(updateUser({ user: this.user.value }));

    // Navigate user to /users
    this.router.navigate(['/users']);
  }

}
