import { NewsApiService } from 'src/app/services/news-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  businessNews: any =[];

  constructor(private newsService: NewsApiService) { }

  ngOnInit(): void {
    this.newsService.business().subscribe((result)=>{
      this.businessNews = result.articles;
    })
  }

}
