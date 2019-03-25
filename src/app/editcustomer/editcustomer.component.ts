import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import CustomerService from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.scss'],
})
export class EditcustomerComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute, private customerService:CustomerService) { }
  id: number;
  private sub: any;
  customer:any ={};
  ngOnInit() {
    this.customer = {name:'', email:'', phone:'', address:''};
  	 this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.customerService.getRemoteCustomerById(this.id).subscribe((customer)=>{this.customer = customer;});
    });
  }

  updateCustomer(customer){
    this.customerService.updateRemoteCustomer(customer).subscribe(()=>{this.router.navigate(['/listcustomer']);});
  }
   

    
   
    // updateCustomer(customer){
    //   this.customerService.updateCustomer(customer);
    //   this.router.navigate(['./listcustomer']);
    // }
  }

