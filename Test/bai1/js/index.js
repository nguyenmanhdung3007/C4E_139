
let sum = 0;

let btn = document.getElementById("btn-calculate");

btn.onclick = function () {
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    console.log(number1);
    console.log(number2);
    console.log(typeof number1);
    console.log(typeof number2);
    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById("result").textContent = "Vui lòng nhập lại a và b";
        return;
    }
    
    if(number1>=number2) {
        document.getElementById("result").textContent = "Vui lòng nhập lại a bé hơn b";
        return;
    }
    
    for (let i = number1; i <= number2; i++)
    if (isPrime(i)) {
        console.log(i);
        sum += i;
        console.log(typeof sum);
    }
    document.getElementById("result").textContent = sum;
    return;
}


function isPrime(num) {
    if (num < 2) {
        return false;
    } else if (num>=2) {
        for (let index = 2; index < num ; index++) {
            if (num%index === 0) {
                return false;
            } 
        } 
        return true;
    }
}