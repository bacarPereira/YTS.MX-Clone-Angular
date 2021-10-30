import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TreadingMoviesComponent } from './components/treading-movies/treading-movies.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'treading', component: TreadingMoviesComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home'},
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
