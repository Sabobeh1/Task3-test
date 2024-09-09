import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from '../search input/search.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() showSearch: boolean = true; 
  @Output() searchId = new EventEmitter<number | null>();
  

  //when the search bar input changes
  onSearchChange(id: number | null): void {
    this.searchId.emit(id);
  }
}
