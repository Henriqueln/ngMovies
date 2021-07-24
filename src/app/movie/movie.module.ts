import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieSearchComponent } from './movie-search/movie-search.component';

@NgModule({
    declarations: [
        MovieSearchComponent
    ],
    imports: [
        MovieRoutingModule,
        ReactiveFormsModule,
        CommonModule 
    ],
    providers: [],
    bootstrap: []
})
export class MovieModule {
}
