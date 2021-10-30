import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreadingMoviesComponent } from './treading-movies.component';

describe('TreadingMoviesComponent', () => {
  let component: TreadingMoviesComponent;
  let fixture: ComponentFixture<TreadingMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreadingMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreadingMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
