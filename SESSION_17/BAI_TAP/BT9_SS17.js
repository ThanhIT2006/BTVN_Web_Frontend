let number1=Number(prompt("Nhập vào giá trị a: "));
let number2=Number(prompt("Nhập vào giá trị b: "));
let number3=Number(prompt("Nhập vào giá trị c: "));
let result=number2**2-4*number1*number3;
let x1=(-number2+Math.sqrt(result)/(2*number1));
let x2=(-number2-Math.sqrt(result)/(2*number1));
alert("x1="+x1);
alert("x2="+x2);