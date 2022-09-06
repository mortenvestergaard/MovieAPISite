import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-insert-movie',
  templateUrl: './insert-movie.component.html',
  styleUrls: ['./insert-movie.component.css']
})
export class InsertMovieComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  newMovie: Movie = new Movie();

  ngOnInit(): void {
  }

  PostMovieToDB() {
    const testMovie = new Movie()
    testMovie.poster = "TestPoster"

    this.movieService.InsertMovie(testMovie);
  }
}
