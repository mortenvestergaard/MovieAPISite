import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  url = "https://localhost:7216/api/Movies";
  GetMovies(): Observable<any>{
    return this.http.get(this.url + '/GetMovies');
  }
}
