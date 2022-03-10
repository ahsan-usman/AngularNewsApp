import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http: HttpClient) { }


  //news api
  newsApiUrl = "https://newsapi.org/v2/everything?sortBy=popularity&apiKey=1c5e2237fcd342bf86e1cc62c9d23654&q=blockchain";

  techNewsApi = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";

  businessNews = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1c5e2237fcd342bf86e1cc62c9d23654"

  topHeading(): Observable<any>{
    return this.http.get(this.newsApiUrl);
  }

  tech(): Observable<any>{
    return this.http.get(this.techNewsApi)
  }

  business(): Observable<any>{
    return this.http.get(this.businessNews)
  }

}
