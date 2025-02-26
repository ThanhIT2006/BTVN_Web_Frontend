let firstNumber=Number(prompt("Nhập một số bất kì thứ nhất: "));
let secondNumber=Number(prompt("Nhập một số bất kì thứ hai: "));
let numberRandom=Math.floor(Math.random(firstNumber)* secondNumber);
document.write("Số bất kì trong khoảng hai số vừa nhập là: ",numberRandom);