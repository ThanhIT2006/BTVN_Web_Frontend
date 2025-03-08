let arr = [];
let check = 0;
let number = prompt("Nhập số phần tử của mảng");
if (number > 0) {
    for (let i = 0; i < number; i++) {
        let num = prompt("Nhập vào phần tử của mảng");
        arr.push(num);
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            check++;
        }
    }
    check != 0 ? console.log(check) : console.log("Không có phần tử nguyên âm");
}
else if (number == 0) {
    console.log("Mảng ko có phần tử");
}
else {
    console.log("Số lượng phần tử không hợp lệ");

}