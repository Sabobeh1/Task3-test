import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription, throwError } from 'rxjs';
import { catchError, map, delay } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  imports: [CommonModule, FormsModule]
})
export class UserListComponent implements OnInit, OnDestroy {
  users: any[] = [];
  filteredUsers: any[] = [];
  isLoading = true;
  errorMessage: string | null = null;
  itemsPerPage = 5;
  currentPage = 1;
  totalUsers = 0;
  totalPages = 0; // Total pages based on users and itemsPerPage
  itemsPerPageOptions = [5, 10, 15];
  private userSubscription!: Subscription;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  // Fetch users and manage loading and errors
  fetchUsers(): void {
    this.isLoading = true;
    this.errorMessage = null;

    this.userSubscription = this.userService
      .getUsers(this.currentPage, this.itemsPerPage)
      .pipe(
        delay(1000),
        map((response) => response),
        catchError((error) => {
          console.error('Error fetching users:', error);
          this.errorMessage = 'Failed to fetch users. Please try again later.';
          this.isLoading = false;
          return throwError(() => new Error('Failed to fetch users'));
        })
      )
      .subscribe({
        next: (response) => {
          this.users = response.data;
          this.filteredUsers = [...this.users];
          this.totalUsers = response.total;
          this.totalPages = Math.ceil(this.totalUsers / this.itemsPerPage); // Calculate total pages
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = error.message;
          this.isLoading = false;
        }
      });
  }

  // Method to filter users by ID
  handleSearch(id: number | null): void {
    if (id !== null) {
      this.filteredUsers = this.users.filter(user => user.id === id);
    } else {
      this.filteredUsers = [...this.users]; // Reset to full list if no valid ID
    }
  }

  // Navigate to the user details page
  onUserClick(id: number): void {
    this.router.navigate(['/user', id]);
  }

  // Handle pagination changes
  changePage(page: number): void {
    // Ensure page is within bounds
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      this.fetchUsers(); // Fetch users for the new page
    }
  }

  // Unsubscribe to prevent memory leaks
  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
