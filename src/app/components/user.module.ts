import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HeaderComponent } from './header/header.component';  // Import this as a standalone component
import { PaginationComponent } from './pagination/pagination.component';
import { UserComponent } from './user/user.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,  // Import standalone component here
    PaginationComponent,
    UserComponent,
    ErrorComponent,
    FormsModule
  ],
  declarations: [
    UserListComponent,
    UserDetailsComponent
  ],
  exports: [
    UserListComponent,
    UserDetailsComponent,
    HeaderComponent,
    PaginationComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]  // Add this schema

})
export class UserModule { }
