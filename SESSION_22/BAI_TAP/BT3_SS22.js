let number = prompt("Hãy nhập dãy số, cách nhau bằng dấu phẩy (ví dụ: 1,2,3,4,5):");
let arr = number.split(',').map(Number);
let rever = arr.reverse();
console.log("Dãy số sau khi đảo ngược: ", rever);