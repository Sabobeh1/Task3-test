import { Component, ViewChild } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(UserListComponent) userListComponent!: UserListComponent;


  // This method forwards the search ID from HeaderComponent to UserListComponent for filtering users.
  handleSearch(id: number | null): void {
    if (this.userListComponent) {
      this.userListComponent.handleSearch(id);
    }
  }
}
