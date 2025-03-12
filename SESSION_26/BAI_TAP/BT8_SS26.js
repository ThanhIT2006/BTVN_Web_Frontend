function input() {
    let inputStr = prompt("Nhập các số nguyên, cách nhau bởi dấu phẩy (,):");
    if (!inputStr) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    let arr = inputStr.split(',').map(item => parseInt(item.trim(), 10));
    if (arr.length === 0) {
        console.log("Mảng không có phần tử nào");
        return;
    }
    let newArray = arr.filter(item => checkNumber(item) && item % 2 !== 0);
    console.log(newArray);
}
function checkNumber(number) {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
input(); 
