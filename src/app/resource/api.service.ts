import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import {map} from "rxjs/operators";
Injectable({
  providedIn: 'root'
})
const api = {
  addVisitor:"http://localhost:4000/admin/add/visitor",
  editVisitor:"http://localhost:4000/admin/visitor/",
  deleteVisitor:"http://localhost:4000/admin/visitor/",
  getVisitor:"http://localhost:4000/admin/visitor",
}
export class ApiService {

  constructor(private http: HttpClient) { }


   addVisitor(data : any){
   
    
    return this.http.post<any>("http://localhost:4000/admin/add/visitor",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  // editVisitor(data : any, id :string){
  //   return this.http.put<any>(api.editVisitor,data)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
  // deleteVisitor(id : string){
  //   return this.http.delete<any>(`${api.deleteVisitor}${id}`)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
  // getVisitor( ){
  //   return this.http.get<any>(api.getVisitor)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

}
