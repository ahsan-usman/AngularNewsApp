import { NewsApiService } from './services/news-api.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadingComponent } from './comonent/top-heading/top-heading.component';
import { HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import { TechComponent } from './component/tech/tech.component';
import { BusinessComponent } from './component/business/business.component';
import { NgxUiLoaderModule,NgxUiLoaderConfig, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { GoogleMapsModule } from '@angular/google-maps';

const ngxUiLoaderConfig: NgxUiLoaderConfig={
  "blur": 5,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "white",
  "fgsPosition": "center-center",
  "fgsSize": 80,
  "fgsType": "rectangle-bounce-pulse-out-rapid",
  "masterLoaderId": "master",
  "overlayColor": "rgba(40, 40, 40, 0.8)",
  "pbColor": "white",
  "pbDirection": "ltr",
  "pbThickness": 4,
  "hasProgressBar": true,
  "text": "Loading....",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
}

@NgModule({
  declarations: [
    AppComponent,
    TopHeadingComponent,
    TechComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    AppRoutingModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    HttpClientModule,
    GoogleMapsModule,
    HttpClientJsonpModule,
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
