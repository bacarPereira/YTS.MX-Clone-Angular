import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/server/services/movies.service';
import { IMovie } from 'src/app/shared/Interfaces';

@Component({
  selector: 'app-treading-movies',
  templateUrl: './treading-movies.component.html',
  styleUrls: ['./treading-movies.component.css']
})
export class TreadingMoviesComponent implements OnInit {

  treadingMovies:IMovie;

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.getTreadingMoviesHttp();
  }

  getTreadingMoviesHttp(){
    this.moviesService.getTreadingMoviesHttp().subscribe(treadingMoviesResponse =>{
      this.treadingMovies = treadingMoviesResponse;
    })
  }

}
