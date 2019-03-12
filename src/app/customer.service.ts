import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class CustomerService {
  customers:any=[{id:1,name:"Sudha",email:"sudha@gmail.com",phone:'56789',address:'Btm'},
  {id:2,name:"Raghu",email:"raghu@gmail.com" ,phone:'345678',address:'Btm'},
  {id:3,name:"Pavi",email:"pavi@gmail.com" ,phone:'345678',address:'Btm'}];

  constructor() { }
 getCustomers(){
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
 getCustomerById(id){
   for(var i=0;i<this.customers.length;i++){
  if(this.customers[i].id==id){
    return this.customers[i];
    break;
    }
   }
  
 }
 addUpdateCustomer(customer){
   var update=false;
   for(var i=0;i<this.customers.length;i++){
     if(customer.id==this.customers[i].id){
       update=true;
       this.customers[i]=customer;
       break;

     }

   }
   if(update){
    customer.id=Math.round(Math.random()*10000);
    this.customers.push(customer);
   }
 }
 addCustomer(customer){
    
   this.customers.push(customer);
 }
 updateCustomer(customer){
  for(var i=0;i<this.customers.length;i++){
    if(this.customers[i].id==customer.id){
      this.customers[i]=customer;
    }
    
  }
 }
}
