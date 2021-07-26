import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListTableComponent } from './movies-list-table.component';

describe('MoviesListTableComponent', () => {
  let component: MoviesListTableComponent;
  let fixture: ComponentFixture<MoviesListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
