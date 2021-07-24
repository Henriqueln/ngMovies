import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  movieForm: FormGroup;
  movieTypes = [
    {type: 'movie', name: 'Movie'},
    {type: 'series', name: 'Series'},
    {type: 'episode', name: 'Episode'}
  ];

	constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.movieForm = this.fb.group({
			title: ['', Validators.required],
			type: ['movie', Validators.required],
			year: ['', Validators.required],
		});
  }

  onSubmit(){
    console.log(this.movieForm);
  }

}
