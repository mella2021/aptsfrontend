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
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'',component:AdminComponent,
children:[

]},
{path:'',component:UserComponent,
children:[
  {path:'contact-us', component:ContactUsComponent},
  {path:'create-acc', component:CreateAccountComponent},
  {path:'pay',component:PaymentComponent},
  {path:'rides', component:RidesComponent},
  {path:'reset-password', component:ResetPasswordComponent},
  {path:'entrance-ticket', component:EntranceTicketComponent},
  {path:'pay-receipt', component:PaymentReceiptComponent},


]},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
