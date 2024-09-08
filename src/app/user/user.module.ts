// src/app/users/user.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Import user components
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    UserListComponent,
    UserDetailsComponent,
  ],
  exports: [
    UserListComponent,
    UserDetailsComponent,
  ],
  providers: [],
})
export class UserModule {}
