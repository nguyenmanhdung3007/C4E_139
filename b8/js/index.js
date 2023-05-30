
// Bài1
// let inputOne = prompt("Số thứ nhất là: ");
// let inputTwo = prompt("Số thứ 2 là: ");

// let numberOne = Number(inputOne);

// let numberTwo = parseFloat(inputTwo);
// let x = numberOne - numberTwo;

// if (x>0) {
//     console.log(numberOne + " lớn hơn "+ numberTwo);
// } else if (x<0) {
//     console.log(numberTwo + " lớn hơn "+ numberOne);
// } else  {
//     console.log(numberTwo + " bằng "+ numberOne);
// }


// Bài 2

// let inputOne = prompt("Số nhập vào là: ");
// let numberOne = Number(inputOne);

// if (numberOne%3===0) {
//     let x = numberOne/3;
//     console.log("Giá trị của phép chia là: " + x);
// } else {
//     console.log("Số " +numberOne+ " không chia hết cho 3"); 
// }

// Bài 3

// let a = prompt("Hãy nhập một số: ")
// let month = Number(a);

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("OCtober");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;

//     default:
//         console.log("Bạn nhập quá số tháng")
//         break;
// }


// bài 4
// với switch
// let operator = prompt("Hãy nhập phép tính bạn cần (+, -, *, /)): ");
// let number1 = parseFloat(prompt("Số thứ nhất là: "));
// let number2 = parseFloat(prompt("Số thứ hai là: "));
// let result;

// switch (operator) {
//     case "+":
//         result = number1 + number2;
//         console.log("Tổng của 2 số là: " + result);
//         break;
//     case "-":
//         result = number1 - number2;
//         console.log("Hiệu của 2 số là: " + result);
//         break;
//     case "*":
//         result = number1 * number2;
//         console.log("Tích của 2 số là: " + result);
//         break;
//     case "/":
//         result = number1 / number2;
//         console.log("Thương của 2 số là : " + result);
//         break;
//     default:
//         console.log("Phép tính không hợp lệ");
//         break;
// }

// với if...else
// let operator = prompt("Hãy nhập phép tính bạn cần (+, -, *, /)): ");
// let number1 = parseFloat(prompt("Số thứ nhất là: "));
// let number2 = parseFloat(prompt("Số thứ hai là: "));
// let result;

// if (operator === "+") {
//   result = number1 + number2;
//   console.log("Tổng của 2 số là: " + result);
// } else if (operator === "-") {
//   result = number1 - number2;
//   console.log("Hiệu của 2 số là: " + result);
// } else if (operator === "*") {
//   result = number1 * number2;
//   console.log("Tích của 2 số là: " + result);
// } else if (operator === "/") {
//   result = number1 / number2;
//   console.log("Thương của 2 số là : " + result);
// } else {
//   result = "Phép tính không hợp lệ";
// }



// bài 5
let number = parseInt(prompt("Hãy nhập 1 số: "));

if (number < 2) {
    console.log("Không có số nguyên tố nào cả!")
} else if (number>=2) {

    console.log("Các số nguyên tố từ 1 đến " + number + " là: ");
    for (let index1 = 2; index1 <= number; index1++) {
        let boolean = true;
        for (let index2 = 2; index2 < index1 ; index2++) {
            if (index1%index2 === 0) {
                boolean = false;
                break;
            }
            
        }
        if (boolean===true) {
            console.log(index1);
            console.log(boolean);
        }
        
    }
} 
// else {
//     console.log("Các số nguyên tố từ 1 đến " + number + " là: " + number);

// }

// let a = parseInt(prompt("Nhập số a:"));

// console.log("Các số nguyên tố từ 1 đến " + a + " là:");
// for (let number = 2; number <= a; number++) {
//   let isPrime = true;
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(number);
//   }
// }





// Bài 6
// alert("Phương trình bậc 2 có dạng ax2+bx+c");
// let a = parseFloat(prompt("Hãy nhập số a: "));
// let b = parseFloat(prompt("Hãy nhập số b: "));
// let c = parseFloat(prompt("Hãy nhập số c: "));
// let x1;
// let x2;
// let delta = b*b - 4*a*c;
// console.log(delta);


// if (a === 0) {
//     x1 = x2 = -c/b;
//     console.log("Phương trình có nghiệm là: x1 = x2 = " + x1);
// } else if (a !== 0){
//     if (delta>0) {
//          x1 = (-b + Math.sqrt(delta))/(2*a);
//          x2 = (-b - Math.sqrt(delta))/(2*a);
//         console.log("Phương trình có 2 nghiệm phân biệt là: x31 = "+ x1 +" và x2 = " + x2);
//     } else if (delta === 0) {
//          x1 = x2 = -b/(2*a);
//         console.log("Phương trình có nghiệm kép x1 = x2 = " + x1);
//     } else if (delta < 0){
//         console.log("Phương trình vô nghiệm");
//     }
// }

// Bài7
// if
// let month = parseInt(prompt("Nhập một số:"));

// if (month >= 1 && month <= 3) {
//   console.log("Mùa: Xuân");
// } else if (month >= 4 && month <= 6) {
//   console.log("Mùa: Hạ");
// } else if (month >= 7 && month <= 9) {
//   console.log("Mùa: Thu");
// } else if (month >= 10 && month <= 12) {
//   console.log("Mùa: Đông");
// } else {
//   console.log("Số không tương ứng với một mùa");
// }




// // switch
// let number = parseInt(prompt("Nhập một số:"));

// switch (true) {
//   case number >= 1 && number <= 3:
//     console.log("Mùa: Xuân");
//     break;
//   case number >= 4 && number <= 6:
//     console.log("Mùa: Hạ");
//     break;
//   case number >= 7 && number <= 9:
//     console.log("Mùa: Thu");
//     break;
//   case number >= 10 && number <= 12:
//     console.log("Mùa: Đông");
//     break;
//   default:
//     console.log("Số không tương ứng với một mùa");
//     break;
// }
