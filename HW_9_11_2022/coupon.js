export class Coupon {
  constructor(name, discount) {
    this.name = name;
    this.discount = discount;
  }
  calculateDiscount(fullPrice) {
    return fullPrice * this.discount;
  }
}
