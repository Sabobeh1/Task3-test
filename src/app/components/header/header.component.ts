import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SearchComponent } from '../search input/search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [SearchComponent, FormsModule]
})
export class HeaderComponent {
  @Input() showSearch: boolean = true; // Control the visibility of the search input
  @Output() searchId = new EventEmitter<number | null>();

  // Triggered when the search bar input changes
  onSearchChange(id: number | null): void {
    this.searchId.emit(id);
  }
}
