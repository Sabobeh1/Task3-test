import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  imports: [CommonModule]
})
export class UserDetailsComponent {
  @Input() user: any = null;  // Input property to accept user data

  isLoading = false;
  errorMessage: string | null = null;

  // Example for how you might handle a back action if needed
  goBack(): void {
    this.user = null;  // Clear user data to hide the details
  }
}
