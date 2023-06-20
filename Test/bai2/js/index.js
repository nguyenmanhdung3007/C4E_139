


const btn = document.getElementById("btn");

btn.onclick = function numberOneTriangle(height) {
    height = parseInt(document.getElementById("number").value);
    // console.log(typeof height);
    if (isNaN(height)) {
        document.getElementById("triangle").textContent = "Vui lòng nhập lại số";
        return;
    }

    if (height < 1 || height > 10) {
        document.getElementById("triangle").textContent = "Vui lòng nhập số nguyên trong khoảng từ 1 đến 10.";
        return;
    }

    var triangle = "";
    
    for (var i = 1; i <= height; i++) {
        for (var j = 1; j <= i; j++) {
          triangle += "* ";
        }
        triangle += "<br>";
    }

    document.getElementById("triangle").innerHTML = triangle;
}

