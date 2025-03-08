let n = +prompt("Nhập số phần tử n trong mảng:");
let arr = [];
if (n <= 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0.");
} else {
    for (let i = 0; i < n; i++) {
        let input = parseInt(prompt(`Nhập phần tử vào mảng:`));
        arr.push(input);
    }
    let isFibonacci = true;
    if (n >= 3) {
        for (let i = 2; i < n; i++) {
            if (arr[i] !== arr[i - 1] + arr[i - 2]) {
                isFibonacci = false;
                break;
            }
        }
    }
    if (isFibonacci) {
        console.log("Mảng là dãy số Fibonacci.");
    } else {
        console.log("Mảng không phải là dãy số Fibonacci.");
    }
}
