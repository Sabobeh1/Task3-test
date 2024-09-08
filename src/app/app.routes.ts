import { Routes } from '@angular/router';
import { UserListComponent } from './user/components/user-list/user-list.component';
import { UserDetailsComponent } from './user/components/user-details/user-details.component';

export const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'users/:id', component: UserDetailsComponent },
];
