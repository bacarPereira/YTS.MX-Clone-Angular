import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../server/services/movies.service';
import { IMovie } from '../shared/Interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public popularDownloadsMovies:IMovie[] = [];

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovisPopularDowloads().subscribe(popularDownloadsResponse =>{
      this.popularDownloadsMovies = popularDownloadsResponse;
    })
  }

}
