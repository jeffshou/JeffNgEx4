import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SubPageComponent } from './pages/sub-page/sub-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'subpage', component: SubPageComponent },
  { path: '**', redirectTo: 'home' },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
