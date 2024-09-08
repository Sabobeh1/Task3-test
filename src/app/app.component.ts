import { Component, ViewChild } from '@angular/core';
import { UserListComponent } from './user/components/user-list/user-list.component';
import { HeaderComponent } from './user/components/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [UserListComponent, HeaderComponent, RouterOutlet]
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
