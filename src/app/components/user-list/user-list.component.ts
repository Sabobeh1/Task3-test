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
  itemsPerPageOptions = [5, 10, 15]; 
  private userSubscription!: Subscription;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadAllUsers();
  }

  loadAllUsers(): void {
    this.isLoading = true;
    this.errorMessage = null;

    this.userSubscription = this.userService
      .getAllUsers() 
      .subscribe({
        next: (response) => {
          this.users = response.data; 
          this.totalUsers = this.users.length; 
          this.totalPages = Math.ceil(this.totalUsers / this.itemsPerPage);
          this.updatePaginatedUsers(); 
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = 'Failed to load users';
          this.isLoading = false;
        }
      });
  }

  updatePaginatedUsers(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedUsers = this.users.slice(start, end); // Get a slice of users based on pagination
  }

  handleSearch(id: number | null): void {
    if (id !== null) {
      this.paginatedUsers = this.users.filter((user) => user.id === id);
    } else {
      this.updatePaginatedUsers(); 
    }
  }

  addUser(): void {
    this.router.navigate(['/users/add']);
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id);
    this.loadAllUsers(); 
  }

  onPageChanged(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedUsers(); 
    }
  }

  onItemsPerPageChanged(itemsPerPage: number): void {
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 1; 
    this.totalPages = Math.ceil(this.totalUsers / this.itemsPerPage);
    this.updatePaginatedUsers(); 
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
