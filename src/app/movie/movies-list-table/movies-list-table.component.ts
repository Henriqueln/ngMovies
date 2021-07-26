import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies-list-table',
  templateUrl: './movies-list-table.component.html',
  styleUrls: ['./movies-list-table.component.scss']
})
export class MoviesListTableComponent implements OnInit {
  @Input() moviesList: Movie[];
  selectedMovie;

  constructor() { }

  ngOnInit(): void {
  }

  isEven(num: number):string {
    console.log('num', num)
    if(num%2 == 0) return 'table-stripe-grey';
    return '';
  };

  selectMovie(movie) {
    this.selectedMovie = movie;
  }

}
