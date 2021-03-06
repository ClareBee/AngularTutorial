import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent {
  items;
  // property to store form model
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: ""
    });
  }
  onSubmit(customerData) {
    // processes submitted form data - hypothetically to external server
    console.warn('your order has been submitted', customerData);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
