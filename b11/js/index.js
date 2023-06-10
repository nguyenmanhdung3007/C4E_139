const textResult = document.getElementById('result');
// const textResult = document.getElementById('result');
const btnNumberEles = document.getElementsByClassName("btn btn-number");
const btnOperatorEles = document.getElementsByClassName('btn action--operator');
const btnEqual = document.getElementById('equal');
const btnClear = document.getElementById('clear');

let displayText = ""


let operatorEntered = false;

for (let i = 0; i < btnNumberEles.length; i++) {
    btnNumberEles[i].onclick = function () {
        console.log(this.innerText);
        displayText += this.innerText;
        textResult.innerText = displayText;

    }
    
}
for (let i = 0; i < 4; i++) {
    btnOperatorEles[i].onclick = function () {
        if (!operatorEntered) {
            console.log(this.innerText);
            displayText += this.innerText;
            textResult.innerText = displayText;
            operatorEntered = true;
        }
    }
    
    
}

console.log(btnEqual);

btnEqual.onclick = function () {
    let getResult = eval(textResult.innerText);
    displayText = getResult;
    textResult.innerText = displayText;
    console.log(textResult.innerText);
    operatorEntered =false;
}

console.log(btnClear);

btnClear.onclick = function () {
    textResult.innerText = "0";
    operatorEntered = false;
}

