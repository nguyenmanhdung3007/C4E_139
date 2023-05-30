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