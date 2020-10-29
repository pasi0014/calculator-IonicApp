import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost/auth_app/api';
  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post(`${this.url}/register.php`, user);
  }

  login(credentials: User): Observable<string> {
    return this.http.post<{ token: string }>(`${this.url}/login.php`, credentials).pipe(
      map(response => response.token)
    );
  }
}