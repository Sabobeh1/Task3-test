import { Component } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [UserListComponent, HeaderComponent] // Import both components
})
export class AppComponent {
  title = 'User Dashboard';

  // Handle the search value and pass it to the UserListComponent
  handleSearch(id: number | null): void {
    const userList = document.querySelector('app-user-list') as any;
    if (userList) {
      userList.handleSearch(id); // Call the handleSearch function in UserListComponent
    }
  }
}
