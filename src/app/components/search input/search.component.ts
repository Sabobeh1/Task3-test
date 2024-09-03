import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports: [FormsModule]
})
export class SearchComponent {
  searchValue: string = '';

  @Output() searchId = new EventEmitter<number | null>();

  onSearchChange() {
    const id = parseInt(this.searchValue, 10);
    if (!isNaN(id)) {
      this.searchId.emit(id); 
    } else {
      this.searchId.emit(null); 
    }
  }
}
