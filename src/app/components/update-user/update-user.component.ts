// src/app/components/update-user/update-user.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
    user: User = { id: 0, first_name: '', last_name: '', email: '', avatar: '' };

    constructor(public router: Router, private userService: UserService, private route: ActivatedRoute) {}  // Make router public
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
  
    updateUser(form: NgForm): void {
      if (form.valid) {
        this.userService.saveUser(this.user);  
        this.router.navigate(['/users']);  
      }
    }
  }
  