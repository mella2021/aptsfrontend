import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { UserComponent } from './pages/user/user.component';
import { FormsModule } from '@angular/forms';

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
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
