import { Component, OnInit } from '@angular/core';
import { OpenweatherService } from 'src/app/service/api/openweather.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  city:string;
  data:any;

  toggler:boolean = false;


  constructor(private api:OpenweatherService,private toast:ToastrService) { }

  ngOnInit(): void {
  }

  submit(){
    if (!this.city) {
      return this.toast.error("Oops you forget to enter your city");
    }
    this.api
        .weatherApi(this.city)
        .subscribe((res:any) => {
          console.log(res);
          this.data = res;
          this.toggler = true;
        },(err) => {
          console.log(err);
          return this.toast.error(err.message);
        });
  }



}
