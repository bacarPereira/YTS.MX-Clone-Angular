import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularDowloadsComponent } from './popular-dowloads.component';

describe('PopularDowloadsComponent', () => {
  let component: PopularDowloadsComponent;
  let fixture: ComponentFixture<PopularDowloadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularDowloadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularDowloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
