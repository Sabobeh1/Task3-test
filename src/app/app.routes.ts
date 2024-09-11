import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'users/add', component: AddUserComponent },  
  { path: 'users/edit/:id', component: UpdateUserComponent },  
  { path: 'users/:id', component: UserDetailsComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];
