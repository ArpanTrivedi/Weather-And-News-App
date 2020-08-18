import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/service/auth/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email;

  constructor(
    private route:Router,
    private auth:AuthServiceService,
    private toast:ToastrService
  ) { }

  ngOnInit(): void {
    this.auth.getUser().subscribe((res) => {
      this.email = res?.email;
    },(err) => {
      this.email = "";
    });
  }

  logOut() {
    this.auth
        .logOut()
        .then((res) => {
          this.email = "";
          this.route.navigateByUrl("signin");
          this.toast.success("Log out Done");
        })
        .catch((err) => {
          this.toast.error("Log Out fail because of " + err.message);
        })
  }

}
