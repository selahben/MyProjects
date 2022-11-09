export class Company {
  #coupons;
  constructor(companyName) {
    this.companyName = companyName;
    this.#coupons = [];
  }
  addCoupon(coupon) {
    this.#coupons.push(coupon);
  }
  getDiscount(couponName, product) {
    let returnedText = `Coupon ${couponName} was Not Found..`;
    this.#coupons.forEach((coupon) => {
      if (coupon.name == couponName) {
        returnedText = coupon.calculateDiscount(product);
      }
    });
    return returnedText;
  }
}
