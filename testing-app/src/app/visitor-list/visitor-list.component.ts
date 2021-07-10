import { Component,NgZone,ChangeDetectorRef, OnInit } from '@angular/core';
import { CrudService } from "../services/crud.service"
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit {
 
  visitor:any = [];
  salesList:any = [];
  registerForm:FormGroup
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private cd :ChangeDetectorRef,
    private ngZone: NgZone,
    private crudService: CrudService) {
      this.registerForm = this.formBuilder.group({
        name: [ null ],
        pic:[ null ],
        city:[ null ],
        remark:[ null ],
        npwp:[ null ],
        costumer_category:[ null ],
        address1:[ null ],
        address2:[ null ],
        contact:[ null ],
        region:[ null ],
        province:[ null ],
        expedition:[ null ],
        sales_id:[ null ],
       
      });
     }

  ngOnInit(): void {

    this.crudService.getVisitors().subscribe((res) => {
    
   this.salesList=res["sales"]
      this.visitor =res["visitor"];
    });
  }
  
 
  deleteVisitor(id:string, i:number) {
 
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Visitor has been deleted.',
          'success'
        )
        this.crudService.deleteVisitor(id).subscribe((res) => {
      
       
          this.visitor.splice(i, 1);
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Visitor data keep safe :)',
          'error'
        )
      }
    })
      
    
  }

   
}
