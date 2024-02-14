import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './loginPage/loginPage.component';
import { BillingComponent } from './billing/billing.component';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './popup/home/home.component';
import { BillvalueComponent } from './billvalue/billvalue.component';


const routes: Routes = [
  {
    path: '', component: LoginPageComponent
  },
  
  {
    path: 'billing', component: BillingComponent
  },
  {
    path: 'food', component: FoodComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'billvalue',component:BillvalueComponent
  }
  
  // {
  //   path: '', redirectTo: '/app', pathMatch: 'full'
  // },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
