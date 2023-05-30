bài 4
với switch
let operator = prompt("Hãy nhập phép tính bạn cần (+, -, *, /)): ");
let number1 = parseFloat(prompt("Số thứ nhất là: "));
let number2 = parseFloat(prompt("Số thứ hai là: "));
let result;

switch (operator) {
    case "+":
        result = number1 + number2;
        console.log("Tổng của 2 số là: " + result);
        break;
    case "-":
        result = number1 - number2;
        console.log("Hiệu của 2 số là: " + result);
        break;
    case "*":
        result = number1 * number2;
        console.log("Tích của 2 số là: " + result);
        break;
    case "/":
        result = number1 / number2;
        console.log("Thương của 2 số là : " + result);
        break;
    default:
        console.log("Phép tính không hợp lệ");
        break;
}

với if...else
let operator = prompt("Hãy nhập phép tính bạn cần (+, -, *, /)): ");
let number1 = parseFloat(prompt("Số thứ nhất là: "));
let number2 = parseFloat(prompt("Số thứ hai là: "));
let result;

if (operator === "+") {
  result = number1 + number2;
  console.log("Tổng của 2 số là: " + result);
} else if (operator === "-") {
  result = number1 - number2;
  console.log("Hiệu của 2 số là: " + result);
} else if (operator === "*") {
  result = number1 * number2;
  console.log("Tích của 2 số là: " + result);
} else if (operator === "/") {
  result = number1 / number2;
  console.log("Thương của 2 số là : " + result);
} else {
  result = "Phép tính không hợp lệ";
}