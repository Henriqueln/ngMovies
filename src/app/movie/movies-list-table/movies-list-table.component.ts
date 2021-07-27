import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies-list-table',
  templateUrl: './movies-list-table.component.html',
  styleUrls: ['./movies-list-table.component.scss']
})
export class MoviesListTableComponent implements OnInit {
  @Input() moviesList: Movie[];
  selectedMovie: Movie;
  currentPage: number;
  modal: HTMLElement;

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.buildModal();
  }

  buildModal() { 
    // Assign the HTML element of the modal to a variable
    this.modal = document.getElementById("detailsModal");
    let _this = this;
    // Adds the close action when clicking out of the modal
    window.onclick = function (event) {
      if (event.target == _this.modal) {
        _this.closeModal();
      }
    }
  }

  isEven(num: number): string { // Used for making the table rows striped
    if (num % 2 == 0) return 'table-stripe-grey';
    return '';
  };

  openDetails(id: string) {
    this.movieService.getMoviesByID(id).subscribe(
      movieResult => {
        this.selectedMovie = movieResult;
        this.openModal();
      }
    )
  }

  openModal() {
    this.modal.style.display = "block";
  }

  closeModal() {
    this.modal.style.display = "none";
  }

  getPosterUrl(poster: string): string { // If the movie has no poster, use a generic image
    if(poster != 'N/A') return poster;
    return 'assets/no-poster.png'
  }
}
