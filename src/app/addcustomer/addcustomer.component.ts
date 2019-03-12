import { Component, OnInit } from '@angular/core';
import  CustomerService  from '../customer.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss'],
})
export class AddcustomerComponent implements OnInit {
  customers={id:'',name:"",email:"" ,phone:'',address:''}
  constructor(private customerService:CustomerService) { }

  ngOnInit() {}
  addCustomer(){
    this.customerService.addCustomer(this.customers);
}
}