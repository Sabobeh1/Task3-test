// src/app/users/user.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Import user components
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HeaderComponent } from './header/header.component';
import { PaginationComponent } from './pagination/pagination.component';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './search input/search.component'

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
