import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() user: any;

  constructor(private router: Router, private userListComponent: UserListComponent ) {}

  viewDetails() {
    this.router.navigate(['/users', this.user.id]); 
  }

  deleteUser() {
    this.userListComponent.deleteUser(this.user.id); 
  }
}
