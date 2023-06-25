import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { RidesComponent } from './pages/rides/rides.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { EntranceTicketComponent } from './pages/entrance-ticket/entrance-ticket.component';
import { PaymentReceiptComponent } from './pages/payment-receipt/payment-receipt.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},//redirects you to homepage
  {path:'login',component:LoginComponent},
  {path:'create-customer',component:CreateCustomerComponent},
  {path:'userlist',component:UserListComponent},
  {path:'login', component:LoginComponent},
  {path:'create-account', component:CreateAccountComponent},
  {path:'reset-password', component:ResetPasswordComponent},
  {path:'admin',component:AdminComponent},
  // {path:'',component:AdminComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'pay',component:PaymentComponent},
  {path:'rides', component:RidesComponent},
  {path:'entrance-ticket', component:EntranceTicketComponent},
  {path:'pay-receipt', component:PaymentReceiptComponent},
  {path:'entrance-ticket', component:EntranceTicketComponent},
  {path:'logout',component:LoginComponent},



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
