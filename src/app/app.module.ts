import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {MoviesPage} from "./pages/movies/movies.page";
import {MovieDetailsPage} from "./pages/movie-details/movie-details.page";
import {IonicStorageModule} from "@ionic/storage-angular";
import {Drivers} from "@ionic/storage";
import {ToggleThemeComponent} from "./components/toggle-theme/toggle-theme.component";

@NgModule({
  declarations: [
    AppComponent,
    MoviesPage,
    MovieDetailsPage,
    ToggleThemeComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot({
      name: "appMovie",
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
    })
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
