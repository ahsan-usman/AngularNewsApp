import { NewsApiService } from './../../services/news-api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent implements OnInit {

  topHeadingDisplay: any = [];

  constructor(private newsService: NewsApiService) { }

  ngOnInit(): void {
    this.newsService.topHeading().subscribe((result)=>{
      console.log(result)
      this.topHeadingDisplay = result.articles
    })
  }

}
