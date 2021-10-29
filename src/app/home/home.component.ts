import { Component, OnInit } from '@angular/core';
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

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.getPopularDowloadsHttp();
    this.getLatestMovies();
  }

  getPopularDowloadsHttp(){
    this.moviesService.getPopularDowloadsHttp().subscribe(popularDownloadsResponse =>{
      this.popularDownloadsMovies = popularDownloadsResponse;
    })
  }

  getLatestMovies(){
    this.moviesService.getLatestMovies().subscribe(latestMovieResponse =>{
      this.latestMovies = latestMovieResponse;
    })
  }

}
