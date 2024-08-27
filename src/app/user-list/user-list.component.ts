import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  imports: [CommonModule, FormsModule], // Import FormsModule to use ngModel in the template
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = []; // Store the filtered users
  isLoading: boolean = true;
  itemsPerPage: number = 5; // Default items per page
  currentPage: number = 1;
  totalUsers: number = 0;
  itemsPerPageOptions: number[] = [5, 10, 15]; // Options for dropdown

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers(); // Fetch users when component is initialized
  }

  // Fetch users with current pagination and itemsPerPage
  fetchUsers(): void {
    this.isLoading = true;
    this.userService.getUsers(this.currentPage, this.itemsPerPage).subscribe(
      (response) => {
        this.users = response.data;
        this.filteredUsers = [...this.users]; // Initialize filtered users to all users
        this.totalUsers = response.total;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching users:', error);
        this.isLoading = false;
      }
    );
  }

  // Handle the search by user ID
  handleSearch(id: number | null): void {
    if (id !== null) {
      this.filteredUsers = this.users.filter(user => user.id === id); // Filter the users based on ID
    } else {
      this.filteredUsers = [...this.users]; // Reset to full list if no ID is entered
    }
  }
}
