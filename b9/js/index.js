// Câu a
// let number = parseInt(prompt("Hãy nhập một số: "));

// console.log("Số chẵn từ 0 đến "+ number + " là")
// for (let even = 0; even <= number; even++) {
//     if (even%2===0) {
//         console.log(even);
//     }     
// }
// console.log("Số lẻ từ 0 đến "+ number + " là")
// for (let odd = 0; odd <= number; odd++) {
//     if (odd%2!==0) {
//         console.log(odd);
//     }     
// }


// Câu b

// let number = parseInt(prompt("Hãy nhập một số: "), 10);
// let remainder;
// let binary;


// while (number>0){
//     remainder = number%2;
//     binary = String(remainder) + binary;
//     number = Math.floor(number/2);
// }

// console.log(parseInt(binary));

// read

// let menu = [
//     'trứng rán',
//     'trứng luộc',
//     'trứng hấp',
//     'trứng trần',
//     'trứng chiên',
//     'trứng cuộn',
// ];

// console.table(menu);
// console.log(menu);
// // prompt(console.log)

// let tableMenu = "Các món ăn	\r\n";
// tableMenu += "STT\t Tên món \r\n";

// for (let u = 0; u < menu.length; u++) {
//     tableMenu += (u+1) + "\t" + menu[u] + "\r\n";
// }
// alert(tableMenu);

// let i = parseInt(prompt("Hãy chọn số tương ứng với món bạn muốn theo bảng: "));


// if (i>=1 && i<=menu.length) {
//     console.log("Món ăn tại vị trí " + (i) + " là : " + menu[i-1]);
// } else {
//     console.log("Số bạn chọn không đúng. Vui lòng chọn lại!");
// }



let players = [
    'Ronaldo',
    'Messi',
    'Neymar',
];
    
// CREAT
// console.table(players);

// let confirm = prompt("Bạn có muốn nhập thêm cầu thủ không? \r\nNếu có hãy nhập \"Y\" nếu không hãy nhập \"N\" ");
// console.log(confirm);
// // console.log(typeof confirm);

// if (confirm==="Y") {
//     let addPlayer = prompt("Hãy nhập tên cầu thủ bạn muốn: ");
//     players.push(addPlayer);
//     console.table(players);
// } else if (confirm==="N"){
//     console.log("Good Bye!");
// }


// Update
// let fix = prompt("Bạn có muốn sửa tên cầu thủ không? \r\nNếu có hãy nhập \"Y\" nếu không hãy nhập \"N\"");

// if (fix==="Y") {
//     let index = prompt("Hãy nhập vị trí cầu thủ bạn muốn thay đổi: ");
//     let fixedPlayer = prompt("Hãy nhập tên mới cầu thủ bạn muốn thay đổi: ");
//     if (typeof players[index]!== "undefined") {
//         players[index] = fixedPlayer;
//         console.log(players);
//     } else if (typeof players[index] === "undefined") {
//         alert("Không tồn tại vị trí cầu thủ mà bạn muốn thay đổi");
//     }
    
// } else if (fix==="N"){
//     console.log("Good Bye!");
// }

// console.log(typeof players[10]);


// Delete

// let delete1 = prompt("Bạn có muốn xóa cầu thủ nào không? \r\nNếu có hãy nhập \"Y\" nếu không hãy nhập \"N\"");


// if (delete1 ==="Y") {
//     let index = prompt("Hãy nhập vị trí cầu thủ bạn muốn xóa: ");
//     if (typeof players[index]!== "undefined") {
//         players.splice(index, 1);
//         console.log(players);
//     } else if (typeof players[index] === "undefined") {
//         alert("Không tồn tại vị trí cầu thủ mà bạn muốn thay đổi");
//     }
    
// } else if (delete1 ==="N"){
//     console.log("Good Bye!");
// }


