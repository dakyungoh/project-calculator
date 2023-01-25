// 숫자 누르면 더하기, 빼기, 곱하기, 나누기 구현
// 소수점 누르면
const calculator = document.querySelector(".calculator");
const cellResult = document.querySelector(".cell-result");
const cellReset = document.querySelector(".cell-reset");
const cellEqual = document.querySelector(".cell-equal");
const cellNumbers = document.querySelectorAll(".cell-number");
const cellOperators = document.querySelectorAll(".cell-operator");
const cellDot = document.querySelector(".cell-dot");

function calculate(n1, opererator, n2) {
  let result = 0;
  let num1 = Number(n1);
  let num2 = Number(n2);
  if (opererator === "+") {
    result = num1 + num2;
  } else if (opererator === "-") {
    result = num1 - num2;
  } else if (opererator === "x") {
    result = num1 * num2;
  } else if (opererator === "÷") {
    result = num1 / num2;
  }
  return result;
}

let userInputNum1 = "";
let userInputOperator = "";
let userInputNum2 = "";

cellNumbers.forEach(function (cellNumber) {
  cellNumber.addEventListener("click", function (event) {
    if (userInputOperator.length === 0) {
      userInputNum1 += event.target.innerHTML;
    } else {
      userInputNum2 += event.target.innerHTML;
    }
    updateResult();
  });
});

cellDot.addEventListener("click", function () {
  if (userInputOperator.length === 0) {
    userInputNum1 = addDot(userInputNum1);
  } else {
    userInputNum2 = addDot(userInputNum2);
  }
  updateResult();
});

cellOperators.forEach(function (cellOperator) {
  cellOperator.addEventListener("click", function (event) {
    if (userInputNum1.length > 0 && userInputNum2.length === 0) {
      userInputOperator = event.target.innerHTML;
    }
    updateResult();
  });
});

cellReset.addEventListener("click", function () {
  initUserInput();
  updateResult();
});

cellEqual.addEventListener("click", function () {
  const result = calculate(userInputNum1, userInputOperator, userInputNum2);
  cellResult.innerHTML = result;
  initUserInput();
});

function updateResult() {
  cellResult.innerHTML = userInputNum1 + userInputOperator + userInputNum2;
}

function initUserInput() {
  userInputNum1 = "";
  userInputOperator = "";
  userInputNum2 = "";
}

function addDot(userInputNumber) {
  let result = userInputNumber;
  if (result.length > 0) {
    result += ".";
    result = result.replaceAll(".", "");
    result += ".";
  }
  return result;
}
