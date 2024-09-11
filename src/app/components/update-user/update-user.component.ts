import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.interface';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: User = { id: 0, first_name: '', last_name: '', email: '', avatar: '' };

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userId = +this.route.snapshot.paramMap.get('id')!;
    if (userId) {
      this.userService.getUserById(userId).subscribe({
        next: (response) => {
          this.user = response.data;  
        },
        error: () => {
          alert('Failed to load user details');
        }
      });
    }
  }

  saveUser(form: NgForm): void {
    if (form.valid) {
      this.userService.saveUser(this.user); 
      this.router.navigate(['/users']); 
    }
  }

  cancel(): void {
    this.router.navigate(['/users']);
  }
}
