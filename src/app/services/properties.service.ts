import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../env/env';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor(private http: HttpClient) { }


  private base_url = `${env.api}property`

  public getProperties(data: any): Observable<any> {
    return this.http.post<any>(`${this.base_url}/create-property`, data).pipe(
      catchError(this.handleError<any>('register'))
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
