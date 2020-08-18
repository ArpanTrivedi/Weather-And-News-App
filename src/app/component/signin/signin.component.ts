import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/service/auth/auth-service.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { Router } from '@angular/router';
import {auth} from "firebase/app";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private auth:AuthServiceService,
    private route:Router,
    private toast:ToastrService
  ) { }

  ngOnInit(): void {
  }

  submit(f:NgForm) {
    const {email,password} = f.form.value;
    this.auth
        .SignIn(email,password)
        .then((res) => {
          this.route.navigateByUrl("home");
          this.toast.success("Sign In done");
        })
        .catch((err) => {
          return this.toast.error("Can't create The user reason is " + err.message );
        });
  }

  signInGoogle() {
    const provider = new auth.GoogleAuthProvider();
    this.auth
      .SignInGoogle(provider)
      .then((res) => {
        this.route.navigateByUrl("home");
        this.toast.success("Sign in With google done");
      })
      .catch((err) => {
        return this.toast.error("Sign In fail because of " + err.message);
      });
  }

}
