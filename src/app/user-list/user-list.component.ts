import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Import the Router for navigation
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Required for ngModel

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  imports: [CommonModule, FormsModule] // Import FormsModule for ngModel
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];  // Array to store filtered users
  isLoading: boolean = true;
  itemsPerPage: number = 5;  // Default items per page
  currentPage: number = 1;
  totalUsers: number = 0;
  itemsPerPageOptions: number[] = [5, 10, 15];  // Options for dropdown

  constructor(private userService: UserService, private router: Router) {}  // Inject Router

  ngOnInit(): void {
    this.fetchUsers();  // Fetch users on component initialization
  }

  // Fetch users and set filteredUsers initially
  fetchUsers(): void {
    this.isLoading = true;
    this.userService.getUsers(this.currentPage, this.itemsPerPage).subscribe(
      (response) => {
        this.users = response.data;  // Store fetched users
        this.filteredUsers = [...this.users];  // Initialize filteredUsers with all users
        this.totalUsers = response.total;  // Set the total number of users
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching users:', error);
        this.isLoading = false;
      }
    );
  }

  // Navigate to the user details page
  onUserClick(id: number): void {
    this.router.navigate(['/user', id]);  // Navigate to the user details page by ID
  }

  // Method to filter users by ID
  handleSearch(id: number | null): void {
    if (id !== null) {
      this.filteredUsers = this.users.filter(user => user.id === id);  // Filter by user ID
    } else {
      this.filteredUsers = [...this.users];  // Reset to full list if no valid ID
    }
  }

  // Handle pagination changes
  changePage(page: number): void {
    if (page > 0 && page !== this.currentPage) {
      this.currentPage = page;
      this.fetchUsers();  // Fetch users for the new page
    }
  }
}
