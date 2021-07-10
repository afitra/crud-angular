
import { Component,NgZone, OnInit } from '@angular/core';
import { CrudService } from "../services/crud.service"
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-visitor-detail',
  templateUrl: './visitor-detail.component.html',
  styleUrls: ['./visitor-detail.component.css']
})
export class VisitorDetailComponent implements OnInit {

  getId: any;
  visitor:any =[]
  salesList:any = [];
  editForm:FormGroup
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService) {
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');

      this.crudService.getOneVisitor(this.getId).subscribe(res => {
        
        this.salesList=res.sales
        this.editForm.setValue({
          name: res.visitor[ 'name' ],
          pic:res.visitor[ 'pic' ],
          city:res.visitor[ 'city' ],
          remark:res.visitor[ 'remark' ],
          npwp:res.visitor[ 'npwp' ],
          costumer_category:res.visitor[ 'costumer_category' ],
          address1:res.visitor[ 'address1' ],
          address2:res.visitor[ 'address2' ],
          contact:res.visitor[ 'contact' ],
          region:res.visitor[ 'region' ],
          province:res.visitor[ 'province' ],
          expedition:res.visitor[ 'expedition' ],
          sales_id:res.visitor[ 'sales_id' ],
          
        });
      });
      this.editForm = this.formBuilder.group({
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
  }
  editVisitor(){
 
    
    if(this.editForm.invalid){
      this.editForm.controls.name.markAsTouched()
      this.editForm.controls.pic.markAsTouched()
      this.editForm.controls.city.markAsTouched()
      this.editForm.controls.remark.markAsTouched()
      this.editForm.controls.npwp.markAsTouched()
      this.editForm.controls.costumer_category.markAsTouched()
      this.editForm.controls.address1.markAsTouched()
      this.editForm.controls.address2.markAsTouched()
      this.editForm.controls.contact.markAsTouched()
      this.editForm.controls.region.markAsTouched()
      this.editForm.controls.province.markAsTouched()
      this.editForm.controls.expedition.markAsTouched()
      this.editForm.controls.sales_id.markAsTouched()
    }else{
 

      this.crudService.updateVisitor(this.getId, this.editForm.value)
      .subscribe(() => {
           
          Swal.fire('Thank you...', 'Visitor data Saved!', 'success') 
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
