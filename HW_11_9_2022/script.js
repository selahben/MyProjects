let fullPrice = 0;
let discountPrice = 0;
let products = [
  ["Tomato", [`./imgs/Tomato.jpg`, `עגבניה`, 2, 0]],
  ["Cucumber", [`./imgs/Cucumber.jpg`, `מלפפון`, 3, 0]],
  ["Onion", [`./imgs/Onion.jpg`, `בצל`, 4, 0]],
  ["Letuce", [`./imgs/Letuce.jpeg`, `חסה`, 5, 0]],
];

function changeQuan(product) {
  let myProduct = [];
  let myProductIndex;
  for (let index = 0; index < products.length; index++) {
    if (products[index][0] == product) {
      myProductIndex = index;
      myProduct = products[index][1];
    }
  }
  let myQuantity = document.getElementById(product + "Quantity").value;
  console.log(myQuantity);
  console.log(myProductIndex);
  console.log(myProduct);

  products[myProductIndex][1][3] = myQuantity;

  let cartProducts = "";
  fullPrice = 0;
  for (let index = 0; index < products.length; index++) {
    let productPrice = 0;
    if (products[index][1][3] > 0) {
      productPrice = products[index][1][2] * products[index][1][3];
      cartProducts +=
        "<li>" +
        "<img class=cartProductImg src=" +
        products[index][1][0] +
        ">" +
        "<span class=cartProductName>" +
        products[index][1][1] +
        ": </span>" +
        "<span class=cartProductSinglePrice>" +
        products[index][1][2] +
        " ₪ לקילו</span>" +
        " * </span>" +
        "<span class=cartProductQuantity>" +
        products[index][1][3] +
        " קילו = </span>" +
        "<span class=cartProductPrice>" +
        productPrice +
        " ₪</span>" +
        "</li>";
    }
    fullPrice += productPrice;
  }

  document.getElementById("selectedProducts").innerHTML = cartProducts;
  document.getElementById("beforePrice").innerHTML = fullPrice + " ₪";
  if (fullPrice >= 30) {
    discountPrice = fullPrice * 0.9;
    document.getElementById("discount").innerHTML = "10%";
    document.getElementById("afterPrice").innerHTML = discountPrice + " ₪";
  } else {
    document.getElementById("discount").innerHTML = "0%";
    document.getElementById("afterPrice").innerHTML = fullPrice + " ₪";
  }
}

function resetPrice() {
  fullPrice = 0;
  discountPrice = 0;
  document.getElementById("beforePrice").innerHTML = fullPrice;
  document.getElementById("discount").innerHTML = "0%";
  document.getElementById("afterPrice").innerHTML = discountPrice;
  document.getElementById("selectedProducts").innerHTML = "";

  for (let index = 0; index < products.length; index++) {
    products[index][1][3] = 0;
    document.getElementById(products[index][0] + "Quantity").value = 0;
  }
}
