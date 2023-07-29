import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {InfiniteScrollCustomEvent, LoadingController} from "@ionic/angular";
import {Result} from "../../entities/Movies";
import {environment} from "../../../environments/environment.prod";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  public movies: Result[] = [];
  public currentPage = 1;
  public imageUrl = environment.imagesUrl;

  constructor(private movieService: MovieService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingController.create({
      message: 'Loading..',
      spinner: "bubbles"
    });
    await  loading.present();
    this.movieService.getTopRatedMovies(this.currentPage).subscribe(result => {
      loading.dismiss();
      this.movies.push(...result.results);
      console.log(result);

      event?.target?.complete();
      if(event) {event.target.disabled = result.total_pages === this.currentPage;}
    });
  }

  public loadMore(event: Event) {
    const infiniteEvent = event as InfiniteScrollCustomEvent;
    this.currentPage++;
    this.loadMovies(infiniteEvent)
  }

}
