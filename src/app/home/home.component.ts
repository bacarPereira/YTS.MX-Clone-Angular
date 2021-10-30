import { Component, OnInit } from '@angular/core';
import { SpinerService } from '../core/spiner/spiner.service';
import { MoviesService } from '../server/services/movies.service';
import { IMovie } from '../shared/Interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularDownloadsMovies:IMovie;
  latestMovies:IMovie;
  upcomingMovies:IMovie;

  constructor(
    private spinerService:SpinerService,
    private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.spinerService.showSpiner();
    this.getPopularDowloadsHttp();
    this.getLatestMoviesHttp();
    this.getUpcomingMoviesHttp();
  }

  getPopularDowloadsHttp(){
    this.moviesService.getPopularDowloadsHttp().subscribe(popularDownloadsResponse =>{
      this.popularDownloadsMovies = popularDownloadsResponse;
      this.hideSpiner();
    })
  }

  private hideSpiner(){
    this.spinerService.hideSpiner();
  }

  getLatestMoviesHttp(){
    this.moviesService.getLatestMoviesHttp().subscribe(latestMovieResponse =>{
      this.latestMovies = latestMovieResponse;
      this.hideSpiner();
    })
  }

  getUpcomingMoviesHttp(){
    this.moviesService.getUpcomingMoviesHttp().subscribe(upcomingMovieResponse =>{
      this.hideSpiner();
      this.upcomingMovies = upcomingMovieResponse;
    })
  }

}
