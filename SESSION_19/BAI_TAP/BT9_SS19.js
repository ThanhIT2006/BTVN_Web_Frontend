// 1. Cộng chuỗi và số
let result1 = "javascript" + 5;
console.log(result1); // "javascript5"

// 2. Trừ chuỗi và số
let result2 = "javascript" - 1;
console.log(result2); // NaN

// 3. Cộng chuỗi và số
let result3 = "3" + 2;
console.log(result3); // "32"

// 4. Trừ chuỗi và số
let result4 = "5" - 4;
console.log(result4); // 1

// 5. Kiểm tra isNaN với chuỗi có thể chuyển thành số
let result5 = isNaN("123");
console.log(result5); // false

// 6. Kiểm tra isNaN với chuỗi không thể chuyển thành số
let result6 = isNaN("hello");
console.log(result6); // true

// 7. Kiểm tra Number.isNaN với chuỗi
let result7 = Number.isNaN("123");
console.log(result7); // false

// 8. Kiểm tra Number.isNaN với NaN
let result8 = Number.isNaN(NaN);
console.log(result8); // true
