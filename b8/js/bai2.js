Bài 2

let inputOne = prompt("Số nhập vào là: ");
let numberOne = Number(inputOne);

if (numberOne%3===0) {
    let x = numberOne/3;
    console.log("Giá trị của phép chia là: " + x);
} else {
    console.log("Số " +numberOne+ " không chia hết cho 3"); 
}