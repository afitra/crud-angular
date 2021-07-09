import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from "@angular/forms"
import {ApiService} from "../resource/api.service"
import {VisitorModel} from "./visitor-model"
 
 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  formValue!: FormGroup;
visitorModelObj: VisitorModel =new VisitorModel
  constructor( private formbuilder:FormBuilder, private api : ApiService) { }
  

  ngOnInit(): void {

    this.formValue= this.formbuilder.group({
      name:[""],
      pic:[""],
      city:[""],
      remark:[""],
      npwp:[""],
      costumer_category:[""],
      address1:[""],
      address2:[""],
      contact:[""],
      region:[""],
      province:[""],
      expedition:[""],
      sales_id:[""]
    })
  }

  addVisitorMethod(){
     
    this.visitorModelObj.name=this.formValue.value.name
    this.visitorModelObj.pic=this.formValue.value.pic 
    this.visitorModelObj.city=this.formValue.value.city 
    this.visitorModelObj.remark=this.formValue.value.remark 
    this.visitorModelObj.npwp=this.formValue.value.npwp 
    this.visitorModelObj.costumer_category=this.formValue.value.costumer_category 
    this.visitorModelObj.address1=this.formValue.value.address1 
    this.visitorModelObj.address2=this.formValue.value.address2 
    this.visitorModelObj.contact=this.formValue.value.contact 
    this.visitorModelObj.region=this.formValue.value.region 
    this.visitorModelObj.province=this.formValue.value.province 
    this.visitorModelObj.expedition=this.formValue.value.expedition 
    this.visitorModelObj.sales_id=this.formValue.value.sales_id 
    
    this.api.addVisitor(this.visitorModelObj)
    .subscribe(res=>{
      console.log(res);

      alert("visitor berhasil di tambahkan")
      
    }),
    err=>{
      console.log(err.message);
      
      alert("Terjadi kesalahan")
    }
  }

}
