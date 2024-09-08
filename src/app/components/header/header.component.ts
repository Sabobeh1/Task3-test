import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() showSearch: boolean = true;  // Add @Input for 'showSearch'
  @Output() searchId = new EventEmitter<number | null>();

  onSearchChange(id: number | null): void {
    this.searchId.emit(id);
  }
}
