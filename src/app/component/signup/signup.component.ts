import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

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
        .SignUp(email,password)
        .then((res) => {
          this.route.navigateByUrl("home");
          this.toast.success("SignUp done");
        })
        .catch((err) => {
          return this.toast.error("Can't create The user reason is " + err.message );
        });
  }

}
