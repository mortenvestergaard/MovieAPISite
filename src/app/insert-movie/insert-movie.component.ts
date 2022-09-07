import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie';
import { MatFormField } from '@angular/material/form-field';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { MatSelect } from '@angular/material/select';
import { Genre } from '../models/genre';

interface GenreValue {
  value: string;
}

@Component({
  selector: 'app-insert-movie',
  templateUrl: './insert-movie.component.html',
  styleUrls: ['./insert-movie.component.css']
})

export class InsertMovieComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  newMovie: Movie = new Movie();
  genres = new FormControl('');
  movieGenres: Genre[] = [
    {genreId: 1, viewValue: "Action"},
    {genreId: 2, viewValue: "Comedy"},
    {genreId: 3, viewValue: "Drama"},
    {genreId: 4, viewValue: "Fantasy"},
    {genreId: 5, viewValue: "Horror"},
    {genreId: 6, viewValue: "Mystery"},
    {genreId: 7, viewValue: "Romance"},
    {genreId: 8, viewValue: "Thriller"}
  ];


  genreViewValue: GenreValue[] = [
    {value: "Action"},
    {value: "Comedy"},
    {value: "Drama"},
    {value: "Fantasy"},
    {value: "Horror"},
    {value: "Mystery"},
    {value: "Romance"},
    {value: "Thriller"}
  ];

  ngOnInit(): void {
  }

  PostMovieToDB() {
    console.log(this.newMovie);
    this.movieService.InsertMovie(this.newMovie).subscribe();
  }
}
