let firstNumber=+prompt("Nhập vào số nguyên bất kỳ đầu tiên: ")
let secondNumber=+prompt("Nhập vào số nguyên bất kỳ thứ hai: ");
let sum1
function sum(firstNumber,secondNumber) {
    if(Number.isInteger(firstNumber) && firstNumber>0 && Number.isInteger(secondNumber) && secondNumber>0)
    {
        sum1=firstNumber+secondNumber;
        console.log("Tổng là: "+sum1);
        return;
    }
    else
    {
        console.log("Dữ liệu không hợp lệ");     
    }
}
sum(firstNumber,secondNumber);