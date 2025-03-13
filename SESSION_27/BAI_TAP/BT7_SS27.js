let arr = [];
function fill() {
    let input = +prompt("Nhập số lượng phần tử vào mảng (sẽ thiếu một phần tử): ");
    if (Number.isInteger(input)) {
        for (let i = 0; i < input - 1; i++) {
            let num = +prompt("Nhập số nguyên vào mảng: ");
            if (Number.isInteger(num)) {
                arr.push(num);
            } else {
                console.log("Dữ liệu không hợp lệ");
                return;
            }
        }
    } else {
        console.log("Số lượng không hợp lệ.");
        return;
    }
    if (arr.length === 0) {
        console.log("Mảng không có phần tử.");
        return;
    }
    let missingNumber = findMissingNumber(arr);
    if (missingNumber !== null) {
        console.log("Số bị thiếu trong mảng là:", missingNumber);
    } else {
        console.log("Không thể tìm số bị thiếu, mảng có thể đã đầy đủ.");
    }
}
function findMissingNumber(arr) {
    arr.sort((a, b) => a - b);
    let actualSum = arr.reduce((acc, num) => acc + num, 0);
    let first = arr[0];
    let last = arr[arr.length - 1];
    let n = arr.length + 1;
    let expectedSum = (n * (first + last)) / 2;
    let missingNumber = expectedSum - actualSum;
    return missingNumber === 0 ? null : missingNumber;
}
fill();
