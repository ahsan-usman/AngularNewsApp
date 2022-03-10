import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  TechNews: any = [];

  constructor(private newsService: NewsApiService) { }

  ngOnInit(): void {
    this.newsService.tech().subscribe((result) =>{
      this.TechNews = result.articles;
    })
  }

}
