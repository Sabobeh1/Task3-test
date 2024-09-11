import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';
import { User } from '../user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  paginatedUsers: User[] = [];
  isLoading = true;
  errorMessage: string | null = null;
  itemsPerPage = 5;
  currentPage = 1;
  totalUsers = 0;
  totalPages = 0;
  itemsPerPageOptions = [5, 10, 15]; // Available options for number of users per page
  private userSubscription!: Subscription;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadAllUsers();
  }

  // Fetch all users either from API or local storage
  loadAllUsers(): void {
    this.isLoading = true;
    this.errorMessage = null;

    this.userSubscription = this.userService
      .getAllUsers() // Fetch all users (not paginated yet)
      .subscribe({
        next: (response) => {
          this.users = response.data; // Store all users in the main array
          this.totalUsers = this.users.length; // Set total users based on the fetched users
          this.totalPages = Math.ceil(this.totalUsers / this.itemsPerPage);
          this.updatePaginatedUsers(); // Call method to update paginated users
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = 'Failed to load users';
          this.isLoading = false;
        }
      });
  }

  // Update the paginatedUsers array based on currentPage and itemsPerPage
  updatePaginatedUsers(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedUsers = this.users.slice(start, end); // Get a slice of users based on pagination
  }

  handleSearch(id: number | null): void {
    if (id !== null) {
      this.paginatedUsers = this.users.filter((user) => user.id === id);
    } else {
      this.updatePaginatedUsers(); // Reset to paginated users if no search
    }
  }

  addUser(): void {
    this.router.navigate(['/users/add']);
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id);
    this.loadAllUsers(); // Reload all users after deletion to ensure pagination works
  }

  onPageChanged(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedUsers(); // Update paginated users when the page is changed
    }
  }

  onItemsPerPageChanged(itemsPerPage: number): void {
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 1; // Reset to first page when items per page is changed
    this.totalPages = Math.ceil(this.totalUsers / this.itemsPerPage);
    this.updatePaginatedUsers(); // Update paginated users when items per page is changed
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
