let arr = [];
function fill() {
    let input = +prompt("Nhập số lượng phần tử vào mảng: ");
    if (Number.isInteger(input)) {
        for (let i = 0; i < input; i++) {
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
    console.log("Mảng ban đầu:", arr);
    let sortedArray = sortEvenNumbers(arr);
    console.log("Mảng sau khi sắp xếp các số chẵn:", sortedArray);
}
function sortEvenNumbers(arr) {
    let evens = arr.filter(num => num % 2 === 0);
    evens.sort((a, b) => a - b);
    let evenIndex = 0;
    let result = arr.map(num => {
        if (num % 2 === 0) {
            return evens[evenIndex++];
        }
        return num;
    });
    return result;
}
fill();
