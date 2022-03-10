import { BusinessComponent } from './component/business/business.component';
import { TechComponent } from './component/tech/tech.component';
import { TopHeadingComponent } from './comonent/top-heading/top-heading.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'blockchain', pathMatch:'full'},
  {path:'blockchain', component: TopHeadingComponent},
  {path:'tech', component: TechComponent},
  {path:'business', component: BusinessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
