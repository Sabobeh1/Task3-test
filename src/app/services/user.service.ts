import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';  // Import User interface

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  // Fetch users with pagination
  getUsers(page: number = 1, itemsPerPage: number = 5): Observable<{ data: User[], total: number }> {
    return this.http.get<{ data: User[], total: number }>(`${this.apiUrl}?page=${page}&per_page=${itemsPerPage}`);
  }

  getUserById(id: number): Observable<{ data: User }> {
    return this.http.get<{ data: User }>(`${this.apiUrl}/${id}`);
  }
}
