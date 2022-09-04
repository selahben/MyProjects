function myCalc() {
  let calcNum1 = Number(document.getElementById("firstNum").value);
  let theAction = document.getElementById("myAction").value;
  let calcNum2 = Number(document.getElementById("secondNum").value);
  console.log(calcNum1);
  console.log(theAction);
  console.log(calcNum2);
  if (theAction == "plus") {
    document.getElementById("myResult").innerHTML =
      Number(calcNum1 + calcNum2) + " = " + calcNum2 + " + " + calcNum1;
  } else if (theAction == "minus") {
    document.getElementById("myResult").innerHTML =
      Number(calcNum1 - calcNum2) + " = " + calcNum2 + " - " + calcNum1;
  } else if (theAction == "multi") {
    document.getElementById("myResult").innerHTML =
      Number(calcNum1 * calcNum2) + " = " + calcNum2 + " * " + calcNum1;
  } else if (theAction == "divide") {
    document.getElementById("myResult").innerHTML =
      Number(calcNum1 / calcNum2) + " = " + calcNum2 + " / " + calcNum1;
  }
}
