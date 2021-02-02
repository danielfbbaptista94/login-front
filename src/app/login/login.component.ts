import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginDTO } from './model/loginDTO';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDTO: LoginDTO;
  loginForm:FormGroup;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clearForm();
    this.buildForm();
  }

  clearForm() {
    this.loginDTO = {
      username: null,
      password: null
    };
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  login() {
    console.log(this.loginDTO);
    this.loginService.logIn(this.loginDTO).subscribe(
      (success) => {
        this.router.navigate(['/home']);
        this.toastr.success("Success", "Wellcome " + this.loginDTO.username) + " !";
      },
      (error) => {
        this.toastr.error("Error", "Fail to login !");
      }
    );
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
