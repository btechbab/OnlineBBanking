import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAllAdminComponent } from './Admin/list-all-admin/list-all-admin.component';
import { AdminByIdComponent } from './Admin/admin-by-id/admin-by-id.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DisplayLoginComponent } from './Login/display-login/display-login.component';
import { DisplayByIdComponent } from './Login/display-by-id/display-by-id.component';
import { ListAllAccDetailsComponent } from './Account/list-all-acc-details/list-all-acc-details.component';
import { AccByIdComponent } from './Account/acc-by-id/acc-by-id.component';
import { ListAllPayeeComponent } from './Payee/list-all-payee/list-all-payee.component';
import { ListPayeeDetailsByidComponent } from './Payee/list-payee-details-byid/list-payee-details-byid.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListAllTransactionComponent } from './Transaction/list-all-transaction/list-all-transaction.component';
import { TransactionByIdComponent } from './Transaction/transaction-by-id/transaction-by-id.component';
import { AddNewAccountComponent } from './Account/add-new-account/add-new-account.component';
import { LoginComponent } from './Login/login.component';
import { LogComponent } from './log/log.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddPayeeComponent } from './Payee/add-payee/add-payee.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { ListAllTransferComponent } from './Transfer/list-all-transfer/list-all-transfer.component';
import { TransferSerachrComponent } from './Transfer/transfer-serachr/transfer-serachr.component';
import { AddTransferComponent } from './Transfer/add-transfer/add-transfer.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { TransferSucessfulComponent } from './Transfer/transfer-sucessful/transfer-sucessful.component';
import { RegisterComponent } from './Register/register/register.component';
// import { AddTransationComponent } from './Transaction/add-transation/add-transation.component';
// import { AddLoginComponent } from './Login/add-login/add-login.component';



@NgModule({
  declarations: [
    AppComponent,
    ListAllAdminComponent,
    AdminByIdComponent,
    //AddAdminComponent,
    DisplayLoginComponent,
    DisplayByIdComponent,
    ListAllAccDetailsComponent,
    AccByIdComponent,
    ListAllPayeeComponent,
    ListPayeeDetailsByidComponent,
    HomepageComponent,
    ListAllTransactionComponent,
    TransactionByIdComponent,
    AddNewAccountComponent,
    LoginComponent,
    LogComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AddPayeeComponent,
    AdminMenuComponent,
    ListAllTransferComponent,
    TransferSerachrComponent,
    AddTransferComponent,
    UserHomePageComponent,
    UserLoginComponent,
    UserMenuComponent,
    TransferSucessfulComponent,
    RegisterComponent,
    // AddTransationComponent,
    // AddLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
