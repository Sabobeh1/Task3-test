import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet, 
    UserListComponent, // Standalone components are imported
    HeaderComponent
  ]
})
export class AppComponent {
  @ViewChild(UserListComponent) userListComponent!: UserListComponent;

  // Forward search ID from HeaderComponent to UserListComponent
  handleSearch(id: number | null): void {
    if (this.userListComponent) {
      this.userListComponent.handleSearch(id);
    }
  }
}
