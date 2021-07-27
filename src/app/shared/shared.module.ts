import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
    declarations: [
        PaginationComponent
    ],
    imports: [
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule
    ],
    providers: [
    ],
    bootstrap: [],
    exports: [
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        PaginationComponent
    ]
})
export class SharedModule {
}
