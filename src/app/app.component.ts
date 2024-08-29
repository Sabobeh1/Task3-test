import { Component, ViewChild } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: `./app.component.css`,
  imports: [UserListComponent, HeaderComponent]
})
export class AppComponent {

  // Get a reference to the UserListComponent
  @ViewChild(UserListComponent) userListComponent!: UserListComponent;

  // Handle the search and pass the value to UserListComponent
  handleSearch(id: number | null): void {
    if (this.userListComponent && this.userListComponent.handleSearch) {
      this.userListComponent.handleSearch(id);  // Call the handleSearch method in UserListComponent
    }
  }
}
