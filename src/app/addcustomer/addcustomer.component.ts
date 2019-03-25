import { Component, OnInit } from '@angular/core';
import  CustomerService  from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss'],
})
export class AddcustomerComponent implements OnInit {
  customer={}
  constructor(private router: Router,private customerService:CustomerService) { }

  ngOnInit() {}
  addCustomer(customer){
  	this.customerService.addRemoteCustomer(customer).subscribe(()=>{this.router.navigate(['/listcustomer']);});
  
  
  }
}