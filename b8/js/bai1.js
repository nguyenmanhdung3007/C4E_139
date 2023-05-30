Bài1
let inputOne = prompt("Số thứ nhất là: ");
let inputTwo = prompt("Số thứ 2 là: ");

let numberOne = Number(inputOne);

let numberTwo = parseFloat(inputTwo);
let x = numberOne - numberTwo;

if (x>0) {
    console.log(numberOne + " lớn hơn "+ numberTwo);
} else if (x<0) {
    console.log(numberTwo + " lớn hơn "+ numberOne);
} else  {
    console.log(numberTwo + " bằng "+ numberOne);
}