import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { RidesComponent } from './pages/rides/rides.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { PaymentReceiptComponent } from './pages/payment-receipt/payment-receipt.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { EntranceTicketComponent } from './pages/entrance-ticket/entrance-ticket.component';
import { AdminComponent } from './pages/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    ResetPasswordComponent,
    RidesComponent,
    PaymentComponent,
    PaymentReceiptComponent,
    ContactUsComponent,
    EntranceTicketComponent,
    AdminComponent,
    UserListComponent,
    CreateCustomerComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
