import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IMovie } from 'src/app/shared/Interfaces';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularDowaloadsEndPonint = '../assets/data/popular-movies.json';

  constructor(private http: HttpClient) { }

  getPopularDowloadsHttp(): Observable<IMovie> {
    return this.http.get<IMovie>(environment.BASE_URL_SERVER_YTS_API+'?sort_by=download_count&sort_by=year&order_by=desc&limit=4&page=1')
    .pipe(catchError((error) => this.handlerError(error)));
  }

  getLatestMoviesHttp(): Observable<IMovie> {
    return this.http.get<IMovie>(environment.BASE_URL_SERVER_YTS_API+'l?sort_by=date_added&order_by=desc&limit=8')
    .pipe(catchError((error) => this.handlerError(error)));
  }

  getUpcomingMoviesHttp(): Observable<IMovie> {
    return this.http.get<IMovie>(environment.BASE_URL_SERVER_YTS_API+'?sort_by=date_added&order_by=desc&quality=1080&limit=4&page=4')
    .pipe(catchError((error) => this.handlerError(error)));
  }

  getTreadingMoviesHttp(): Observable<IMovie> {
    return this.http.get<IMovie>(environment.BASE_URL_SERVER_YTS_API+'?sort_by=date_added&order_by=desc&limit=4&page=5')
    .pipe(catchError((error) => this.handlerError(error)));
  }

  handlerError (error:any){
    if (error.error instanceof Error) {
      return throwError(error.error.message);
  }
     return throwError(error || 'Server error');
   }
}
