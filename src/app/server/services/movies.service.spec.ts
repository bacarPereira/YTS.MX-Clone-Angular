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
    service.getPopularDowloadsHttp().subscribe((responsePopularDowloads:IMovie)=>{
      expect(responsePopularDowloads.status).toEqual("ok");
      expect(responsePopularDowloads).toBeTruthy();
    });
    movieMockRequest = httpTestingController.expectOne(environment.BASE_URL_SERVER_YTS_API+'?sort_by=download_count&sort_by=year&order_by=desc&limit=4&page=1');
    movieMockRequest.flush(new CMovie("ok"));
    expect(movieMockRequest.request.method).toEqual('GET');
  });


});
