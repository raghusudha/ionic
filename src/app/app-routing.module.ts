import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ListcustomerComponent } from './listcustomer/listcustomer.component';
import { LogoutComponent } from './logout/logout.component';
import { CustomerComponent } from './customer/customer.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'about',component:AboutComponent},
  {path:'customer',component:CustomerComponent},
  {path:'home',component:HomeComponent},
  {path:'addcustomer',component:AddcustomerComponent},
  {path:'listcustomer',component:ListcustomerComponent},
  {path:'dashboard',component:DashboardComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
