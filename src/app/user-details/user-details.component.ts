import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { Subscription, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

@Component({
  selector: 'app-user-details',
  standalone: true,
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  imports: [CommonModule]
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  user: any;
  isLoading = true;
  errorMessage: string | null = null;
  private userSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userId = +this.route.snapshot.paramMap.get('id')!;
    this.isLoading = true;

    this.userSubscription = this.userService
      .getUserById(userId)
      .pipe(
        delay(1000), // Simulate a delay
        catchError((error) => {
          console.error('Error fetching user details:', error);
          this.errorMessage = 'Failed to fetch user details. Please try again later.';
          this.isLoading = false;
          return throwError(() => new Error('Failed to fetch user details'));
        })
      )
      .subscribe({
        next: (data) => {
          this.user = data.data;
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = error.message;
          this.isLoading = false;
        }
      });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
