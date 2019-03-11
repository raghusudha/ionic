import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class CustomerService {
  customers:any=[{id:1,name:"Sudha",email:"sudha@gmail.com",phone:'',address:''},{id:2,name:"Raghu",email:"raghu@gmail.com" ,phone:'',address:''}];

  constructor() { }
 getCustomers(){
   return this.customers;
 }
}
