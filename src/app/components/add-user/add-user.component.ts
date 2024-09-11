import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user: User = { id: 0, first_name: '', last_name: '', email: '', avatar: '' };

  constructor(private userService: UserService, private router: Router) {}

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
