// import { Routes } from '@angular/router';
// import { UserListComponent } from './components/user-list/user-list.component';
// import { UserDetailsComponent } from './components/user-details/user-details.component';

// export const routes: Routes = [
//   { path: 'users', component: UserListComponent },
//   { path: 'users/:id', component: UserDetailsComponent },
//   { path: '', redirectTo: 'users', pathMatch: 'full' },  // Default redirect

// ];


// src/app/routing/app.routes.ts
import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

export const routes: Routes = [
  {
    path: 'users',
    component: UserListComponent,
    children: [
      {
        path: ':id',
        component: UserDetailsComponent
      }
    ]
  },
  { path: '', redirectTo: '/users', pathMatch: 'full' }, 
];
