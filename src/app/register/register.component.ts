import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from './model/user';
import { RegisterService } from './service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  user: User;

  constructor(
    private registerService: RegisterService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.clearForm();
    this.buildForm();
  }

  clearForm() {
    this.user = {
      id: null,
      name: null,
      email: null,
      username: null,
      password: null
    };
  }

  buildForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  register() {
    console.log(this.user);
    this.registerService
      .register(this.user)
      .subscribe(
        (success) => {
          this.toastr.success("Success", "User register with success !", {
            timeOut: 5000
          });
        },
        (error) => {
          this.toastr.error("Error", "Fail to register User !", {
            timeOut: 5000
          });
        }
      )
  }
}
