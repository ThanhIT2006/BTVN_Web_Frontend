let arr = [];

function fill() {
    let input = +prompt("Nhập số lượng phần tử vào mảng: ");
    if (Number.isInteger(input)) {
        for (let i = 0; i < input; i++) {
            let input = +prompt("Nhập số nguyên vào mảng: ");
            if (Number.isInteger(input)) {
                arr.push(input);
            } else {
                console.log("Dữ liệu không hợp lệ");
                break;
            }
        }
    }
    else {
        console.log("Số lượng không hợp lệ ");
    }
    if (arr.length === 0) {
        console.log("Mảng không có phần tử");
        return;
    }
    if (isArithmeticSequence(arr)) {
        console.log("Mảng là dãy số cấp số cộng.");
    } else {
        console.log("Mảng không phải là dãy số cấp số cộng.");
    }
}
function isArithmeticSequence(arr) {
    if (arr.length < 2) {
        return false;
    }
    const difference = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== difference) {
            return false;
        }
    }
    return true;
}
fill();
