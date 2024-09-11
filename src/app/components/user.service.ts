import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';  // Import tap
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';
  private localStorageKey = 'usersArray';

  constructor(private http: HttpClient) {}

  // Fetch users with pagination (from API if local storage is empty)
  getAllUsers(): Observable<{ data: User[] }> {
    const storedUsers = localStorage.getItem(this.localStorageKey);
    if (storedUsers) {
      const usersArray = JSON.parse(storedUsers);
      return of({ data: usersArray });
    } else {
      return this.http.get<{ data: User[] }>(`${this.apiUrl}?per_page=12`).pipe(
        tap((response) => {
          localStorage.setItem(this.localStorageKey, JSON.stringify(response.data)); // Cache the data
        })
      );
    }
  }

  // Fetch a single user from local storage or API
  getUserById(id: number): Observable<{ data: User }> {
    const storedUsers = localStorage.getItem(this.localStorageKey);
    if (storedUsers) {
      const usersArray = JSON.parse(storedUsers);
      const user = usersArray.find((user: User) => user.id === id);
      return of({ data: user });
    } else {
      return this.http.get<{ data: User }>(`${this.apiUrl}/${id}`);
    }
  }

  // Add or Update user in local storage
  saveUser(user: User) {
    const storedUsers = localStorage.getItem(this.localStorageKey);
    let usersArray = storedUsers ? JSON.parse(storedUsers) : [];
    const index = usersArray.findIndex((u: User) => u.id === user.id);

    if (index > -1) {
      usersArray[index] = user;  // Update existing user
    } else {
      user.id = new Date().getTime();  // Simulate unique ID for new user
      usersArray.push(user);  // Add new user
    }
    localStorage.setItem(this.localStorageKey, JSON.stringify(usersArray));
  }

  // Delete user from local storage
  deleteUser(id: number) {
    const storedUsers = localStorage.getItem(this.localStorageKey);
    if (storedUsers) {
      let usersArray = JSON.parse(storedUsers);
      usersArray = usersArray.filter((user: User) => user.id !== id);
      localStorage.setItem(this.localStorageKey, JSON.stringify(usersArray));
    }
  }
}
