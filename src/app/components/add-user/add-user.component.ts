// src/app/components/add-user/add-user.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  user: User = { id: 0, first_name: '', last_name: '', email: '', avatar: '' };

  constructor(private router: Router, private userService: UserService) {}

  addUser(form: NgForm): void {
    if (form.valid) {
      this.userService.saveUser(this.user);  
      this.router.navigate(['/users']);  
    }
  }

  cancel(): void {
    this.router.navigate(['/users']);
  }
}
