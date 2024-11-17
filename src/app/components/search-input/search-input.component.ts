import { Component } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  searchTerm: string = '';

  onSearch() {
    console.log('Searching for:', this.searchTerm);
  }
}
