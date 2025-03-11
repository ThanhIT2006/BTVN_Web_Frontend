let number = +prompt("Nhập một số nguyên dương bất kỳ");
function prime(number) {
    if (number <= 1 || !Number.isInteger(number)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    let check = 0;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            check++;
            break;
        }
    }
    if (check === 0) {
        console.log("Là số nguyên tố");
    } else {
        console.log("Không là số nguyên tố");
    }
}
prime(number);
