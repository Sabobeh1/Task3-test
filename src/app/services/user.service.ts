import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  // Fetch users with pagination
  getUsers(page: number = 1, itemsPerPage: number = 5): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}&per_page=${itemsPerPage}`);
  }

  // Fetch a user by ID
  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
