import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';  // Make sure to import your service
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,  // Standalone component
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  imports: [CommonModule]  // Import CommonModule for *ngIf
})
export class UserDetailsComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,  // Inject the UserService
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch the user ID from the route and retrieve the user details from the service
    const userId = +this.route.snapshot.paramMap.get('id')!;
    this.userService.getUserById(userId).subscribe((data) => {
      this.user = data.data;  // Store the user data
    });
  }

  // Navigate back to the user list
  goBack(): void {
    this.router.navigate(['/']);
  }
}
