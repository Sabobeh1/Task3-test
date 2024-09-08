import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [RouterModule, CommonModule]
})
export class UserComponent {
  @Input() user: any;  // Ensure @Input is present

  constructor(private router: Router) {}

  viewDetails() {
    this.router.navigate(['/users', this.user.id]); 
  }
}
