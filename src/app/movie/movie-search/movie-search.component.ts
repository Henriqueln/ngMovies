import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  movieForm: FormGroup;
  movies: Movie[];
  movieTypes = [
    { type: 'movie', name: 'Movie' },
    { type: 'series', name: 'Series' },
    { type: 'episode', name: 'Episode' }
  ];
  currentPage = 1;
  numberOfItems: number;
  error: string;

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
  ) { }

  ngOnInit(): void {
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      type: [null],
      year: [''],
    });
  }

  changePage(pageNumber: number) { // Updates the current page and search for movies in that page
    this.currentPage = pageNumber;
    this.getMovies();
  }

  onSubmit() {
    this.currentPage = 1; // Forcing current page being 1 will always get the first page when the user clicks on the search button
    this.getMovies();
  }

  getMovies() {
    const movieParams = this.movieForm.value;
    this.movieService.getMovies(movieParams.title, movieParams.year, movieParams.type, this.currentPage).subscribe(moviesResponse => {
      if (moviesResponse.Error) {
        this.error = moviesResponse.Error;
      } else {
        this.movies = moviesResponse.Search;
        this.numberOfItems = parseInt(moviesResponse.totalResults);
        this.error = null;
      }
    });
  }
}
