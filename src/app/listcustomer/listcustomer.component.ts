import { Component, OnInit } from '@angular/core';
import  CustomerService  from '../customer.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcustomer',
  templateUrl: './listcustomer.component.html',
  styleUrls: ['./listcustomer.component.scss'],
})
export class ListcustomerComponent implements OnInit {
  list:any=[];
 
  constructor(private customerService:CustomerService, private router:Router) {   
    
     }

  ngOnInit() {
    this.list=this.customerService.getCustomers();
   
  }
  onEdit(id){
      this.router.navigate(['/editcustomer/'+id])
  }
  deleteCustomers(id){
    this.list=this.customerService.deleteCustomers(id);
  }
  deleteAllCustomers(){
    this.customerService.deleteAllCustomers();
  }
}
