import { Component,NgZone, OnInit } from '@angular/core';
import { CrudService } from "../services/crud.service"
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css']
})
export class InputVisitorDetailsComponent implements OnInit {
  visitor:any = [];
  salesList:any = [];
  registerForm:FormGroup
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
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

  registerVisitor(): any {
 
    
    if(this.registerForm.invalid){
      this.registerForm.controls.name.markAsTouched()
      this.registerForm.controls.pic.markAsTouched()
      this.registerForm.controls.city.markAsTouched()
      this.registerForm.controls.remark.markAsTouched()
      this.registerForm.controls.npwp.markAsTouched()
      this.registerForm.controls.costumer_category.markAsTouched()
      this.registerForm.controls.address1.markAsTouched()
      this.registerForm.controls.address2.markAsTouched()
      this.registerForm.controls.contact.markAsTouched()
      this.registerForm.controls.region.markAsTouched()
      this.registerForm.controls.province.markAsTouched()
      this.registerForm.controls.expedition.markAsTouched()
      this.registerForm.controls.sales_id.markAsTouched()
    }else{

      this.crudService.AddVisitor(this.registerForm.value)
      .subscribe(() => {
       Swal.fire('Thank you', 'Visitor data submitted succesfully!', 'success') 
          this.ngZone.run(() => this.router.navigateByUrl('/visitor-list'))
        }, (err) => {
         Swal.fire({  
           icon: 'error',  
           title: 'Oops...',  
           text: err,  
           footer: 'Coba beberapa saat lagi'  
         })  
      });
    }
     }
  
}
