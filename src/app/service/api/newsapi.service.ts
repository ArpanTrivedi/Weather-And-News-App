import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private api:HttpClient) { }

  fetchNews(){
    return this.api.get("http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-06&sortBy=publishedAt&apiKey=26a63475b3214dbda694d8296dcb04d0");
  }

}
