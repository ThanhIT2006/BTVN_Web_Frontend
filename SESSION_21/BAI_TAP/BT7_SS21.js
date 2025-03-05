let money=Number(prompt("Nhập số tiền bạn muốn gửi: "));
let interestRate=Number(prompt("Nhập số lãi suất: "));
let month=Number(prompt("Nhập số tháng bạn muốn gửi: "));
let money1=money*((1+interestRate/100)**month);
let result=money1-money;
console.log("Tiền nhận được là:"+money1.toFixed(2));
console.log("Số tiền lãi của bạn là: "+result.toFixed(2));