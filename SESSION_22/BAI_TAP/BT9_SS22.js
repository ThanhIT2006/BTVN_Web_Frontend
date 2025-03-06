let arr = [2,1,7,1,1,8,6,2,2,7];
let uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
    }
}
uniqueArr.sort();
console.log("Mảng sau khi loại bỏ phần tử trùng nhau và sắp xếp:", uniqueArr);
