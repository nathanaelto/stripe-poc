import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StripeService} from "ngx-stripe";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(
    private http: HttpClient,
    private stripeService: StripeService
  ) {}

  checkout() {
    // Check the server.js tab to see an example implementation
    this.http.post(
      'http://localhost:3000/subscription/create-checkout-session',
      {},
      { headers: {'user-id': '95b6e6f0-018b-11ee-be56-0242ac120002'}
    })
      .pipe(
        switchMap(session => {
          console.log(session);
          // @ts-ignore
          return this.stripeService.redirectToCheckout({ sessionId: session.id })
        })
      )
      .subscribe(result => {
        // If `redirectToCheckout` fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using `error.message`.
        if (result.error) {
          alert(result.error.message);
        }
      });
  }
}
