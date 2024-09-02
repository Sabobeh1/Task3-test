import { Component, ViewChild } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [UserListComponent, HeaderComponent, RouterOutlet]  // Add RouterOutlet
})
export class AppComponent {

  @ViewChild(UserListComponent) userListComponent!: UserListComponent;

  handleSearch(id: number | null): void {
    if (this.userListComponent && this.userListComponent.handleSearch) {
      this.userListComponent.handleSearch(id);
    }
  }
}
