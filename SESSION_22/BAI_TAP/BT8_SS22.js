let arr = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let maxCount = 0;
let result = arr[0];
for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            count++;
        }
    }
    if (count > maxCount || (count == maxCount && arr[i] < result)) {
        maxCount = count;
        result = arr[i];
    }
}
console.log("Phần tử xuất hiện nhiều nhất là:", result);

