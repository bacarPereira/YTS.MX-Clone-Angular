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

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.getPopularDowloadsHttp();
    this.getLatestMoviesHttp();
    this.getUpcomingMoviesHttp();
  }

  getPopularDowloadsHttp(){
    this.moviesService.getPopularDowloadsHttp().subscribe(popularDownloadsResponse =>{
      this.popularDownloadsMovies = popularDownloadsResponse;
    })
  }

  getLatestMoviesHttp(){
    this.moviesService.getLatestMoviesHttp().subscribe(latestMovieResponse =>{
      this.latestMovies = latestMovieResponse;
    })
  }

  getUpcomingMoviesHttp(){
    this.moviesService.getUpcomingMoviesHttp().subscribe(upcomingMovieResponse =>{
      this.upcomingMovies = upcomingMovieResponse;
    })
  }

}
