import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination/pagination.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import { SearchComponent } from './search input/search.component';
import { provideRouter, RouterModule, RouterOutlet } from '@angular/router';
import { routes } from '../app.routes';
import { provideHttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent,
    PaginationComponent,
    UserComponent,
    HeaderComponent,
    ErrorComponent,
    SearchComponent,
    AddUserComponent,
    UpdateUserComponent
  ],
  imports: [CommonModule, FormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [UserListComponent, UserDetailsComponent],
  providers: [provideHttpClient(), provideRouter(routes), UserService],

})
export class UserModule {}


