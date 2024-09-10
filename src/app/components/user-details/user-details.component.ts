import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user: User | null = null;
  isLoading = true;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userId = +this.route.snapshot.paramMap.get('id')!;
    if (userId) {
      this.userService.getUserById(userId).subscribe({
        next: (response: { data: User }) => {  // Explicitly define the response type
          this.user = response.data;  // Access the `data` property properly
          this.isLoading = false;
        },
        error: () => {
          this.errorMessage = 'Failed to load user details.';
          this.isLoading = false;
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/users']);
  }

  deleteUser(): void {
    if (this.user) {
      this.userService.deleteUser(this.user.id);
      this.goBack();
    }
  }

  updateUser(): void {
    this.router.navigate(['/users/edit', this.user?.id]);
  }
}
