import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";

import { UserService } from "../services/user.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.minLength(8)],
      major: ['', Validators.required],
      semester: ['', Validators.required],
      gender: ['', Validators.required],
      description: ['', Validators.required]
    })

  }

  createUser() {
    this.userService.createUser(this.signupForm.value);
  }


}
