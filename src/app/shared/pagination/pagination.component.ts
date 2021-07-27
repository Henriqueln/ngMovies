import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() numberOfItems: number; // Total number of movies returned by the API
  @Input() currentPage: number; // Current selected page
  @Output() changePage = new EventEmitter<number>(); // Event for page changing
  numberOfPages: number;
  ITEMS_IN_PAGE = 10; // How many movies will be shown in each page
  PAGES_DISPLAYED = 7; // How many page buttons will be shown at the same time
  pages: number[] = []; // Pages array, used to simplificate the logic of the pages creation

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    // Calculates the number of pages based on the number of items
    this.numberOfPages = Math.ceil(this.numberOfItems / this.ITEMS_IN_PAGE);
    this.buildPages();
  }

  buildPages() {
    // Creates an array with numbers that will be used to build the page buttons
    this.pages = [];
    for (let i = 0; i < this.numberOfPages; i++) {
      this.pages.push(i + 1);
    }
  }

  updatePage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.changePage.emit(pageNumber);
  }

  isDisabledPrev(): string {
    if (this.currentPage == 1) return 'page-item disabled'
    return 'page-item';
  }

  isDisabledNext(): string {
    if (this.currentPage == this.numberOfPages) return 'page-item disabled'
    return 'page-item';
  }

  isSelected(page: number): string {
    if (this.currentPage == page) return 'page-selected'
  }

  getRange() {
    // Calculates the current interval of items that are displayed on the current page (Showing x to y of z entries)
    let max = this.currentPage * this.ITEMS_IN_PAGE;
    let min = max - this.ITEMS_IN_PAGE + 1;
    if (max > this.numberOfItems) max = this.numberOfItems;
    return {
      max: max,
      min: min
    }
  }

  displayPage(page: number): boolean { // Validates if the page button will be displayed or not 
    if (this.numberOfPages <= this.PAGES_DISPLAYED) return true; // Less pages than the minimum
    if (page <= this.PAGES_DISPLAYED && this.currentPage < this.PAGES_DISPLAYED) return true // Current page still in the initial displayed buttons
    if ((this.currentPage + Math.floor(this.PAGES_DISPLAYED / 2)) < page) return false; // Pages before current that won't be displayed
    if ((this.currentPage - Math.floor(this.PAGES_DISPLAYED / 2)) > page) return false; // Pages after current that won't be displayed
    return true;
  }

}
