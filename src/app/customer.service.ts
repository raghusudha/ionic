import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class CustomerService {
  private customerUrl = 'http://localhost:3000/api/customers';
  customers:any=[{id:1,name:"Sudha",email:"sudha@gmail.com",phone:'56789',address:'Btm'},
  {id:2,name:"Raghu",email:"raghu@gmail.com" ,phone:'345678',address:'Btm'},
  {id:3,name:"Pavi",email:"pavi@gmail.com" ,phone:'345678',address:'Btm'}];


  constructor(private http: HttpClient) { }
  customer=JSON.parse(localStorage.getItem('customers'));
 getCustomers(){
   if(localStorage.getItem('customers').length!=null){
     this.customers=JSON.parse(localStorage.getItem('customers'));
   }
   return this.customers;
 }
 getRemoteCustomers(): Observable<[]>{
  return this.http.get<[]>(this.customerUrl); 		
}
//  getDBCustomers(){
//   this.http.get<[]>(this.customerUrl).subscribe((result)=>{console.log(JSON.stringify(result))});
// }

//function format OR

// getDBCustomers(){
//   this.http.get<[]>(this.customerUrl).subscribe(function(result){console.log(JSON.stringify(result))});
// }
deleteRemoteCustomer(customer){
  return this.http.delete(this.customerUrl+"/"+customer.id); 		
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
 updateCustomer(customer){
  for(var i=0;i<this.customers.length;i++){
    if(customer.id==this.customers[i].id){
      this.customers[i]=customer;
      break;
    }
    
  }
  localStorage.setItem('customers', JSON.stringify(this.customers));
 }

 
  addRemoteCustomer(customer):Observable<any>{
  	return this.http.post(this.customerUrl,customer);
 }
 updateRemoteCustomer(customer):Observable<any>{
  return this.http.put(this.customerUrl + "/"+customer.id,customer);
}

getRemoteCustomerById(id):Observable<any>{
 return this.http.get<[]>(this.customerUrl + "/"+id);
}

 
}
