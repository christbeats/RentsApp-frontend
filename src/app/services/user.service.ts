import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../env/env';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  private base_url = `${env.api}authentication`
  private user_url = `${env.api}user`

  public register(data: any): Observable<any> {
    return this.http.post<any>(`${this.base_url}/register`, data).pipe(
      catchError(this.handleError<any>('register'))
    )
  }


  public login(data: any): Observable<any> {
    return this.http.post<any>(`${this.base_url}/login`, data).pipe(
      catchError(this.handleError<any>('login'))
    )
  }

  public getUser(): Observable<any> {
    return this.http.get<any>(`${this.user_url}/allUsers`).pipe(
      catchError(this.handleError<any>('allUsers'))
    )
  }

  public deleteUser(id: any): Observable<any> {
    return this.http.delete<any>(`${this.user_url}/deleteuser/${id}`).pipe(
      catchError(this.handleError<any>('deleteuser'))
    )
  }


  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      const result = {
        type: 'error',
        message: `${operation} failed: ${error.message}`,
        error: {
          message: error.error.message,
          errors: error.error.errors
        }
      };
      return of(result as any);
    };
  }


}
