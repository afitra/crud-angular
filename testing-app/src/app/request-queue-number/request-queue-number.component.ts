import { ChangeDetectorRef, Component,NgZone, OnInit } from '@angular/core';
import { CrudService } from "../services/crud.service"
import {  FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-queue-number',
  templateUrl: './request-queue-number.component.html',
  styleUrls: ['./request-queue-number.component.css']
})
export class RequestQueueNumberComponent implements OnInit {
  numberQueue:string= ""
  queueTime:string=""
  constructor(
    public formBuilder: FormBuilder,
    private cd :ChangeDetectorRef,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService) {
       
     }
   ngAfterViewInit(){
  
    
    this.crudService.getQueue().subscribe((res) => {
      this.numberQueue=res["queue"]
      this.queueTime=res["time"]
      this.cd.detectChanges()
      
      this.ngZone.run(() => this.router.navigateByUrl('/visitor-list'))
 
      window.print();
       });
   }
  ngOnInit(): void {
 
   
  }

  
}
