import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.prod";
import {Movies} from "../entities/Movies";
import {MovieDetails} from "../entities/MovieDetails";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getTopRatedMovies(page: number = 1): Observable<Movies> {
    return this.http.get<Movies>(`${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}&page=${page}`);
  }

  getMovieDetails(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`)
  }
}
