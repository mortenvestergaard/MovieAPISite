import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie';
import { MatFormField } from '@angular/material/form-field';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { MatSelect } from '@angular/material/select';
import { MovieGenre } from '../models/genre';

interface GenreValue {
  GenreName: string;
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
  movieGenres: MovieGenre[] = [
    {Id: 0, GenreName: "Action"},
    {Id: 0, GenreName: "Comedy"},
    {Id: 0, GenreName: "Drama"},
    {Id: 0, GenreName: "Fantasy"},
    {Id: 0, GenreName: "Horror"},
    {Id: 0, GenreName: "Mystery"},
    {Id: 0, GenreName: "Romance"},
    {Id: 0, GenreName: "Thriller"}
  ];

//TODO: Replace this with the actual MovieGenre class, like above, with or without "Id"
  genreViewValue: GenreValue[] = [
    {GenreName: "Action"},
    {GenreName: "Comedy"},
    {GenreName: "Drama"},
    {GenreName: "Fantasy"},
    {GenreName: "Horror"},
    {GenreName: "Mystery"},
    {GenreName: "Romance"},
    {GenreName: "Thriller"}
  ];

  ngOnInit(): void {
  }

  PostMovieToDB() {
    console.log(this.newMovie);
    this.movieService.InsertMovie(this.newMovie).subscribe((x) => {
      console.log("PostMovie msg: " + x);
    });
  }
}
