import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IMovie } from 'src/app/shared/Interfaces';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularDowaloadsEndPonint = '../assets/data/popular-movies.json';

  constructor(private http: HttpClient) { }

  getMovisPopularDowloads(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.popularDowaloadsEndPonint)
    .pipe(catchError((error) => this.handlerError(error)));

  }

  private handlerError (error:any){
    if (error.error instanceof Error) {
      return throwError(error.error.message);
  }
     return throwError(error || 'Server error');
   }

}
