import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AccByIdComponent } from './Account/acc-by-id/acc-by-id.component';
import { AddNewAccountComponent } from './Account/add-new-account/add-new-account.component';
import { ListAllAccDetailsComponent } from './Account/list-all-acc-details/list-all-acc-details.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminByIdComponent } from './Admin/admin-by-id/admin-by-id.component';
import { ListAllAdminComponent } from './Admin/list-all-admin/list-all-admin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogComponent } from './log/log.component';
//import { AddLoginComponent } from './Login/add-login/add-login.component';
import { DisplayByIdComponent } from './Login/display-by-id/display-by-id.component';
import { DisplayLoginComponent } from './Login/display-login/display-login.component';
import { AddPayeeComponent } from './Payee/add-payee/add-payee.component';
import { ListAllPayeeComponent } from './Payee/list-all-payee/list-all-payee.component';
import { ListPayeeDetailsByidComponent } from './Payee/list-payee-details-byid/list-payee-details-byid.component';
import { RegisterComponent } from './Register/register/register.component';
//import { AddTransationComponent } from './Transaction/add-transation/add-transation.component';
import { ListAllTransactionComponent } from './Transaction/list-all-transaction/list-all-transaction.component';
import { TransactionByIdComponent } from './Transaction/transaction-by-id/transaction-by-id.component';
import { AddTransferComponent } from './Transfer/add-transfer/add-transfer.component';
import { ListAllTransferComponent } from './Transfer/list-all-transfer/list-all-transfer.component';
import { TransferSerachrComponent } from './Transfer/transfer-serachr/transfer-serachr.component';
import { TransferSucessfulComponent } from './Transfer/transfer-sucessful/transfer-sucessful.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserMenuComponent } from './user-menu/user-menu.component';


const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'admindetails',component: ListAllAdminComponent},
  {path:'adminById',component:AdminByIdComponent},
  {path:'login',component:DisplayLoginComponent},
  {path:'displayloginbyid',component:DisplayByIdComponent},
 // {path:'addlogin',component:AddLoginComponent},
  {path:'Account',component:ListAllAccDetailsComponent},
  {path:'AccByAccNo',component:AccByIdComponent},
  {path:'addAccount',component:AddNewAccountComponent},
  {path:'payee',component:ListAllPayeeComponent},
  {path:'payedetailsbyid',component:ListPayeeDetailsByidComponent},
  {path:'addpayee',component:AddPayeeComponent},
  {path:'Transaction',component:ListAllTransactionComponent},
  {path:'transaction-by-id',component:TransactionByIdComponent},
  //{path:'addTransaction',component:AddTransationComponent},
  {path:'Transfer',component:ListAllTransferComponent},
  {path:'Transfersearch',component:TransferSerachrComponent},
  {path:'addTransfer',component:AddTransferComponent},

  
  {path:'log',component:LogComponent},
  {path:'AdminLoginPage',component:AdminLoginComponent},
  {path:'AdminhomePage',component:AdminHomeComponent},
  {path:'adminmenu',component:AdminMenuComponent},
  {path:'userhomepage',component:UserHomePageComponent},
  {path:'userlogin',component:UserLoginComponent},
  {path:'usermenu',component:UserMenuComponent},
  {path:'transfersucessful',component:TransferSucessfulComponent},
  {path:'Register',component:RegisterComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
