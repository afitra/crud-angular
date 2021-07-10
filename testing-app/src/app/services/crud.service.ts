import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Visitor } from '../models/Visitor';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  // Node/Express API
  REST_API: string = 'http://localhost:4000/admin/visitor';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor (private httpClient: HttpClient) { }

  // // Add
  AddVisitor (data: Visitor): Observable<any> {

    return this.httpClient.post(this.REST_API, data)
      .pipe(
        catchError(this.handleError)
      )
  }


  // Get all objects
  getVisitors () {
 
    
    return this.httpClient.get(this.REST_API);
  }


  // Get single object
  getOneVisitor (id: any): Observable<any> {
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }
  // Get queue
  getQueue (): Observable<any> {
    
   
      return this.httpClient.get("http://localhost:4000/admin/queue");
  }


  // Update
  updateVisitor (id: string, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }


  // Delete
  deleteVisitor (id: string): Observable<any> {
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    )
  }


  // Error
  handleError (error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    Swal.fire({  
      icon: 'error',  
      title: 'Oops...',  
      text: error.message,  
      footer: 'Coba beberapa saat lagi'  
    })  
    return throwError(errorMessage);
  }

}
// <!-- name,
// pic,
// city,
// remark,
// npwp,
// costumer_category,
// address1,
// address2,
// contact,
// region,
// province,
// expedition,
// sales_id, -->