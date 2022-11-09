import { ExtendedCoupon } from "./extendedCoupons.js";
import { Product } from "./product.js";
import { Company } from "./company.js";

let product1 = new Product("Coffee", 20);
let product2 = new Product("Cookie", 40);
let product3 = new Product("Lunch", 100);
let product4 = new Product("Breakfast", 50);

let discount10 = new ExtendedCoupon("discount10", 0.9);
let discount20 = new ExtendedCoupon("discount20", 0.8);

discount10.addProduct(product1);
discount10.addProduct(product2);
discount20.addProduct(product3);
discount20.addProduct(product4);

let intel = new Company("Company1");

intel.addCoupon(discount10);
intel.addCoupon(discount20);

console.log(intel.getDiscount("discount10", "Coffee"));
console.log(intel.getDiscount("discount20", "Coffee"));
console.log(intel.getDiscount("discount20", "Lunch"));
console.log(intel.getDiscount("discount30", "Lunch"));
