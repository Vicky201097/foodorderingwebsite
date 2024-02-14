import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillingComponent } from './billing/billing.component';
import { LoginPageComponent } from './loginPage/loginPage.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodComponent } from './food/food.component';
import { AuthenticationService } from './authentication service/authentication.service';
import { PopUpComponent } from './popup/popup.component';
import { HomeComponent } from './popup/home/home.component';
import { BillvalueComponent } from './billvalue/billvalue.component';
import { ItemEditorComponent } from './item-editor/item-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    BillingComponent,
    BillvalueComponent,
    FoodComponent,
    PopUpComponent,
    HomeComponent,
    ItemEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
     ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
