import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  imports: [CommonModule],
})
export class UserDetailsComponent implements OnInit {
  user: any = null;
  isLoading = true;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router  // Inject Router for navigation
  ) {}

  ngOnInit(): void {
    const userId = +this.route.snapshot.paramMap.get('id')!; // Get user ID from route
    this.userService.getUserById(userId).subscribe({
      next: (response) => {
        this.user = response.data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Failed to fetch user details. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/']);  // Navigate back to the user list
  }
}
