import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertMovieComponent } from './insert-movie/insert-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  {path: '', component: MovieListComponent},
  {path: 'insertmovie', component: InsertMovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
