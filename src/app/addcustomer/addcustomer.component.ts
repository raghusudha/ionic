import { Component, OnInit } from '@angular/core';
import  CustomerService  from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss'],
})
export class AddcustomerComponent implements OnInit {
  customers={id:'',name:"",email:"" ,phone:'',address:''}
  constructor(private router: Router,private customerService:CustomerService) { }

  ngOnInit() {}
  addCustomer(){
    this.customerService.addCustomer(this.customers);
    this.router.navigate(['./listcustomer']);

}
}