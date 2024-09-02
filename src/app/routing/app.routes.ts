import { Routes } from '@angular/router';
import { UserListComponent } from '../components/user-list/user-list.component';
import { UserDetailsComponent } from '../components/user-details/user-details.component';

export const routes: Routes = [
  { path: 'users/:id', component: UserDetailsComponent }, // User details page
  { path: '**', redirectTo: '', pathMatch: 'full' } // Fallback route
];
