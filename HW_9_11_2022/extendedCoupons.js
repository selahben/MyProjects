import { Coupon } from "./coupon.js";

export class ExtendedCoupon extends Coupon {
  #products;
  constructor(name, discount) {
    super(name, discount);
    this.#products = [];
  }
  addProduct(product) {
    this.#products.push(product);
  }
  calculateDiscount(product) {
    let returnedText = `The product ${product} was not found in "${this.name}" list of products.`;
    this.#products.forEach((theProduct) => {
      if (theProduct.name == product) {
        returnedText = `"${theProduct.name}", which it's full price is ${
          theProduct.price
        }₪, costs ${theProduct.price * this.discount}₪ after discount.`;
      }
    });
    return returnedText;
  }
}
