import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { User } from '../user.interface';  // Import User interface
import { UserListComponent } from '../user-list/user-list.component';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user: User | null = null;  // Use User type
  isLoading = true;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private userListComponent: UserListComponent
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
    this.userListComponent.setViewDetailsClicked(false);
    this.router.navigate(['/']);  

  }
}
