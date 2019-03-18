import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class CustomerService {
  customers:any=[{id:1,name:"Sudha",email:"sudha@gmail.com",phone:'56789',address:'Btm'},
  {id:2,name:"Raghu",email:"raghu@gmail.com" ,phone:'345678',address:'Btm'},
  {id:3,name:"Pavi",email:"pavi@gmail.com" ,phone:'345678',address:'Btm'}];


  constructor() { }
  customer=JSON.parse(localStorage.getItem('customers'));
 getCustomers(){
   if(localStorage.getItem('customers').length!=null){
     this.customers=JSON.parse(localStorage.getItem('customers'));
   }
   return this.customers;
 }
 deleteCustomers(id){
  var list=[];
  for(var i=0;i<this.customers.length;i++){
    if(id!==this.customers[i].id){
      list.push(this.customers[i]);
    }
  }
  return this.customers=list;
 }
 deleteAllCustomers(){
   this.customers.length=0;
   localStorage.setItem('customers', JSON.stringify(this.customers));
 }
 getCustomerById(id){
   for(var i=0;i<this.customers.length;i++){
  if(this.customers[i].id==id){
    return this.customers[i];
    break;
    }
   }
  
 }

 
 addCustomer(customer){
  customer.id=Math.round(Math.random()*10000);
  this.customers.push(customer);
  localStorage.setItem('customers', JSON.stringify(this.customers));
 }
 updateCustomer(customer){
  for(var i=0;i<this.customers.length;i++){
    if(customer.id==this.customers[i].id){
      this.customers[i]=customer;
      break;
    }
    
  }
  localStorage.setItem('customers', JSON.stringify(this.customers));
 }
}
