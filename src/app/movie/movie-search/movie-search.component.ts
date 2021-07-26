import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    {type: 'movie', name: 'Movie'},
    {type: 'series', name: 'Series'},
    {type: 'episode', name: 'Episode'}
  ];

	constructor(
    private fb: FormBuilder,
    private movieService: MovieService
    ) { }

  ngOnInit(): void {
    this.movieForm = this.fb.group({
			title: ['', Validators.required],
			type: [null],
			year: [''],
		});
  }

  onSubmit(){
    const movieParams = this.movieForm.value;
    this.movieService.getMovies(movieParams.title, movieParams.year, movieParams.type).subscribe(moviesResponse => {
      this.movies = moviesResponse.Search;
    });
  }

}
