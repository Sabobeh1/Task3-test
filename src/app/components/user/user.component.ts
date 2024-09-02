import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [CommonModule, RouterModule],
})
export class UserComponent {
  @Input() user: any;

  constructor(private router: Router) {}

  viewDetails() {
    this.router.navigate(['/users', this.user.id]);  // Correct the navigation path
  }
}
