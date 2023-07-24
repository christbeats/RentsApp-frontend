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


  private property_url = `${env.api}property`

  public getProperties(): Observable<any> {
    return this.http.get<any>(`${this.property_url}/allProperties`).pipe(
      catchError(this.handleError<any>('allProperties'))
    )
  }

  public deleteProperty(id: any): Observable<any> {
    return this.http.delete<any>(`${this.property_url}/deleteproperty/${id}`).pipe(
      catchError(this.handleError<any>('deleteproperty'))
    )
  }

  public editProperty(data: any): Observable<any> {
    return this.http.put<any>(`${this.property_url}/updateProperty/`, data).pipe(
      catchError(this.handleError<any>('updateProperty'))
    )
  }

  // public updateProperties(data: any): Observable<any> {
  //   return this.http.post<any>(`${this.base_url}/updateProperty`, data).pipe(
  //     catchError(this.handleError<any>('updateProperty'))
  //   )
  // }

  // public deleteProperties(data: any): Observable<any> {
  //   return this.http.post<any>(`${this.base_url}/deleteproperty/:id`, data).pipe(
  //     catchError(this.handleError<any>('deleteProperty'))
  //   )
  // }








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
