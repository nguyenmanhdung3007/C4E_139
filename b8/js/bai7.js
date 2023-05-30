Bài7
if
let month = parseInt(prompt("Nhập một số:"));

if (month >= 1 && month <= 3) {
  console.log("Mùa: Xuân");
} else if (month >= 4 && month <= 6) {
  console.log("Mùa: Hạ");
} else if (month >= 7 && month <= 9) {
  console.log("Mùa: Thu");
} else if (month >= 10 && month <= 12) {
  console.log("Mùa: Đông");
} else {
  console.log("Số không tương ứng với một mùa");
}




// switch
let number = parseInt(prompt("Nhập một số:"));

switch (true) {
  case number >= 1 && number <= 3:
    console.log("Mùa: Xuân");
    break;
  case number >= 4 && number <= 6:
    console.log("Mùa: Hạ");
    break;
  case number >= 7 && number <= 9:
    console.log("Mùa: Thu");
    break;
  case number >= 10 && number <= 12:
    console.log("Mùa: Đông");
    break;
  default:
    console.log("Số không tương ứng với một mùa");
    break;
}