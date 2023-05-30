Bài 6
alert("Phương trình bậc 2 có dạng ax2+bx+c");
let a = parseFloat(prompt("Hãy nhập số a: "));
let b = parseFloat(prompt("Hãy nhập số b: "));
let c = parseFloat(prompt("Hãy nhập số c: "));
let x1;
let x2;
let delta = b*b - 4*a*c;
console.log(delta);


if (a === 0) {
    x1 = x2 = -c/b;
    console.log("Phương trình có nghiệm là: x1 = x2 = " + x1);
} else if (a !== 0){
    if (delta>0) {
         x1 = (-b + Math.sqrt(delta))/(2*a);
         x2 = (-b - Math.sqrt(delta))/(2*a);
        console.log("Phương trình có 2 nghiệm phân biệt là: x1 = "+ x1 +" và x2 = " + x2);
    } else if (delta === 0) {
         x1 = x2 = -b/(2*a);
        console.log("Phương trình có nghiệm kép x1 = x2 = " + x1);
    } else if (delta < 0){
        console.log("Phương trình vô nghiệm");
    }
}