import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesService } from './server/services/movies.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './layout/footer/footer.component';
import { SpinerService } from './core/spiner/spiner.service';
import { InterceptorInterceptor } from './core/interceptor/interceptor.interceptor';
import { TreadingMoviesComponent } from './components/treading-movies/treading-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    TreadingMoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MoviesService,SpinerService,
    {provide: HTTP_INTERCEPTORS,useClass: InterceptorInterceptor,multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
