import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {MovieDetails} from "../../entities/MovieDetails";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  public movie: MovieDetails | null = null;
  public imageBaseUrl = environment.imagesUrl

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id')!;
    this.movieService.getMovieDetails(id).subscribe(res => {
      console.log(res);
      this.movie = res;
    });
  }

  openHomepage() {
    window.open(this.movie?.homepage!);
  }

}
