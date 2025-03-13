
let choice=0;
do {
    choice=+prompt(
        `
        1.Cộng hai số
        2.Trừ hai số
        3.Nhân hai số
        4.Chia hai số
        5.Thoát
        `
    );
    switch (choice) {
        case 1:
            plus();
            break;
        case 2:
            minus();
            break;
        case 3:
            multi();
            break;
        case 4:
            divi();
            break;
        default:
            break;
    }
} while (choice!=5);

function plus() {
    let number1=+prompt("Nhập sô thứ nhất: ");
    let number2=+prompt("Nhập số thứ hai: ");
    let sum=number1+number2;
    console.log("Tổng hai số là: "+sum);
    return;
}
function minus() {
    let number1=+prompt("Nhập sô thứ nhất: ");
    let number2=+prompt("Nhập số thứ hai: ");
    let sum=number1-number2;
    console.log("Hiệu hai số là: "+sum); 
    return;   
}
function multi() {
    let number1=+prompt("Nhập sô thứ nhất: ");
    let number2=+prompt("Nhập số thứ hai: ");
    let sum=number1-number2;
    console.log("Tích hai số là: "+sum); 
    return;   
}
function divi(params) {
    let number1=+prompt("Nhập sô thứ nhất: ");
    let number2=+prompt("Nhập số thứ hai: ");
    let sum=number1-number2;
    console.log("Thương hai số là: "+sum); 
    return;   
}