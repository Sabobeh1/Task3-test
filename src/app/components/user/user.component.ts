import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() user: any;

  constructor(private router: Router) {}

  viewDetails() {
    this.router.navigate(['/users', this.user.id]); 

  }
}
