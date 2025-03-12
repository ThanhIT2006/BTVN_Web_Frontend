function inputArray() {
    let array = [];
    while (array.length < 10) {
        let input = prompt(`Nhập phần tử vào mảng(10 phần tử):`);
        let num = parseInt(input, 10);
        if (!Number.isInteger(num)) {
            alert("Vui lòng nhập một số nguyên hợp lệ (không được chứa chữ cái hoặc để trống)!");
        } else {
            array.push(num);
        }
    }
    return array;
}
function processArray(array) {
    if (array.length === 0) {
        alert("Mảng không được rỗng!");
        return [];
    }
    return array
        .map(num => num * num)
        .filter(num => num % 2 === 0);
}
let array = inputArray();
if (array.length > 0) {
    let result = processArray(array);
    console.log("Mảng sau khi bình phương và lọc số chẵn:", result);
}
