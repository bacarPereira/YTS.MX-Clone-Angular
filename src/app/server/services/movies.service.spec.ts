import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CMovie, IMovie } from 'src/app/shared/Interfaces';
import { environment } from 'src/environments/environment';

import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;
  let httpTestingController:HttpTestingController;
  let movieMockRequest:TestRequest;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(MoviesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getPopularDowloadsHttp',() =>{
    service.getPopularDowloadsHttp().subscribe((responseMovieData:IMovie)=>{
      expect(responseMovieData.status).toEqual('ok');
      expect(responseMovieData).toBeTruthy();
    });
    movieMockRequest = httpTestingController.expectOne(environment.BASE_URL_SERVER_YTS_API+'?sort_by=download_count&sort_by=year&order_by=desc&limit=4&page=1');
    movieMockRequest.flush(new CMovie('ok'));
    expect(movieMockRequest.request.method).toEqual('GET');
  });

  it('should getLatestMoviesHttp',() =>{
    service.getLatestMoviesHttp().subscribe((responseMovieData:IMovie)=>{
      expect(responseMovieData.status).toEqual('ok');
      expect(responseMovieData).toBeTruthy();
    });
    movieMockRequest = httpTestingController.expectOne(environment.BASE_URL_SERVER_YTS_API+'l?sort_by=date_added&order_by=desc&limit=8');
    movieMockRequest.flush(new CMovie('ok'));
    expect(movieMockRequest.request.method).toEqual('GET');
  });

  it('should getUpcomingMoviesHttp',() =>{
    service.getUpcomingMoviesHttp().subscribe((responseMovieData:IMovie)=>{
      expect(responseMovieData.status).toEqual('ok');
      expect(responseMovieData).toBeTruthy();
    });
    movieMockRequest = httpTestingController.expectOne(environment.BASE_URL_SERVER_YTS_API+'?sort_by=date_added&order_by=desc&quality=1080&limit=4&page=4');
    movieMockRequest.flush(new CMovie('ok'));
    expect(movieMockRequest.request.method).toEqual('GET');
  });

  it('should getTreadingMoviesHttp',() =>{
    service.getTreadingMoviesHttp().subscribe((responseMovieData:IMovie)=>{
      expect(responseMovieData.status).toEqual('ok');
      expect(responseMovieData).toBeTruthy();
    });
    movieMockRequest = httpTestingController.expectOne(environment.BASE_URL_SERVER_YTS_API+'?sort_by=date_added&order_by=desc&limit=20&page=5');
    movieMockRequest.flush(new CMovie('ok'));
    expect(movieMockRequest.request.method).toEqual('GET');
  });

  it('should handlerError',() =>{
    let error = Error('Bad request')
    service.handlerError(error).subscribe(()=> {},(error) =>{
      expect(error.message).toEqual('Bad request');
    })
  });
});
