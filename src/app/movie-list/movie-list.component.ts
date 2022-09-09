import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { BehaviorSubject, Observable } from 'rxjs';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  movies: any;

  spinnerLoading = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {
  }

  GetMoviesFromService() {
    this.spinnerLoading.next(true);
    this.movieService.GetMovies().subscribe((x) => {
      this.movies = x
      console.log("List of movies:")
      console.log(this.movies)
      this.spinnerLoading.next(false);
    })
  }


}
