import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxStripeModule, StripeCardComponent} from "ngx-stripe";
import { CheckoutComponent } from './checkout/checkout.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StripeCardComponent,
    HttpClientModule,
    NgxStripeModule.forRoot("pk_test_51N2ybXJurBTYRWlFtN1GZKKOlKZZLYMLCiwklDZwWlFKS1owFpLwTrHpbvGBAGnHx98lOptI1SfpwkzKpwLxwPU000MoaL0kN5")
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
