import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NewsApiService } from './../../services/news-api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent implements OnInit {

  topHeadingDisplay: any = [];
  zoom = 12
  center: google.maps.LatLngLiteral = {lat: 34.1688, lng: 73.2215};
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }

  apiLoaded!: Observable<boolean>;

  constructor(private newsService: NewsApiService, private http: HttpClient) {
    this.apiLoaded = this.http.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyCf0uBNxymSdpG2t_CYUqHFDViz5s8C5Vw', 'callback').pipe(map(() => true),
      catchError(() => of(false)),
    );

  }

  ngOnInit(): void {
    this.newsService.topHeading().subscribe((result) => {
      console.log(result)
      this.topHeadingDisplay = result.articles
    })

    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }
}



