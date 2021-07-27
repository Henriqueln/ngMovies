import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './movie.service';
import { MoviesListTableComponent } from './movies-list-table/movies-list-table.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        MovieSearchComponent,
        MoviesListTableComponent
    ],
    imports: [
        MovieRoutingModule,
        SharedModule
    ],
    providers: [
        MovieService
    ],
    bootstrap: []
})
export class MovieModule {
}
