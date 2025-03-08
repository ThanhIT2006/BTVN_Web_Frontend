let n = Number(prompt("Nhập số phần tử n trong mảng:"));
let arr = [];
let sum = 0;
if (n <= 0) {
    if (n == 0) {
        console.log("Mảng không có phần tử.");
    } else {
        console.log("Số lượng phần tử không được âm.");
    }
} else {
    for (let i = 0; i < n; i++) {
        let input = prompt(`Nhập ký tự vào mảng:`);
        arr.push(input);
    }
    for (let i = 0; i < n; i++) {
        if (arr[i] >= '0' && arr[i] <= '9') {
            sum += arr[i] - '0';
        }
    }
    console.log("Tổng các ký tự là số: " + sum);
}
