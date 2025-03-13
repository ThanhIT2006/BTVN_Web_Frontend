let arr = [];

function fill() {
    let input = +prompt("Nhập một số nguyên: ");
    
    // Kiểm tra xem đầu vào có phải là số nguyên không
    if (Number.isInteger(input)) {
        // Chuyển số nguyên thành chuỗi và tách thành mảng các chữ số
        let numStr = input.toString();
        arr = numStr.split('').map(Number);  // Chuyển các ký tự thành số nguyên
        
        // Gọi hàm để tìm số lớn nhất có thể tạo từ các chữ số
        let largestNum = largestNumber(arr);
        console.log("Số lớn nhất có thể tạo từ các chữ số của số " + input + " là: " + largestNum);
    } else {
        console.log("Dữ liệu không hợp lệ. Vui lòng nhập một số nguyên.");
    }
}

// Hàm tìm số lớn nhất từ các chữ số của số nguyên
function largestNumber(arr) {
    // Sắp xếp mảng các chữ số theo thứ tự giảm dần
    arr.sort((a, b) => b - a);
    
    // Ghép các chữ số lại thành một số và trả về kết quả
    return parseInt(arr.join(''));
}

fill();
