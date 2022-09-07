import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie';
import { MatFormField } from '@angular/material/form-field';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-insert-movie',
  templateUrl: './insert-movie.component.html',
  styleUrls: ['./insert-movie.component.css']
})
export class InsertMovieComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  newMovie: Movie = new Movie();
  genres = new FormControl('');
  movieGenres: string[] = ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Thriller'];

  // floatLabelControl = new FormControl('auto' as FloatLabelType);
  // movieForm: FormGroup = this.formBuilder.group({});

  ngOnInit(): void {
  }

  PostMovieToDB() {
    const testMovie = new Movie()
    testMovie.poster = "TestPoster";
    console.log(this.newMovie);
    this.movieService.InsertMovie(this.newMovie).subscribe(
      data => {
        console.log("succes?: " + data)
      },
      error => {
        console.log("something went wrong: " + error)
      }
    );
  }
}
