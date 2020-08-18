import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/service/api/newsapi.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  toggler:boolean = false;
  datas:[];
  constructor(

    private news:NewsapiService,
    private toast:ToastrService

  ) { }

  ngOnInit(): void {
    this.news.fetchNews().subscribe((result:any) => {
        this.datas = result?.articles;
        this.toggler = true;
    },(err) => {
      return this.toast.error(err.message);
    })
  }

}
