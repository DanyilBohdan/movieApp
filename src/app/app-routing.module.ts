import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {MoviesPage} from "./pages/movies/movies.page";
import {MovieDetailsPage} from "./pages/movie-details/movie-details.page";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MoviesPage
  },
  {
    path: 'movies/:id',
    component: MovieDetailsPage
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
