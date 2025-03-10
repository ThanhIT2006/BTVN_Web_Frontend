let str = "";
let choice;
do {
    choice = +prompt(
        `
        1.Nhập chuỗi ký tự
        2.Hiển thị chuỗi ký tự
        3.Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện
        4.Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi
        5.Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi
        6.Chuyển đổi chuỗi ký tự thành dạng snake_case
        7.Thoát chương trình
        `
    );
    switch (choice) {
        case 1:
            str = prompt("Nhập chuỗi ký tự:");
            break;
        case 2:
            console.log("Chuỗi hiện tại là: " + str);
            break;
        case 3:
            // Chuẩn hóa chuỗi: chuyển thành chữ thường và loại bỏ khoảng trắng dư thừa
            let words = str.toLowerCase().split(/\s+/).filter(Boolean);
            let wordCount = {};

            // Đếm số lần xuất hiện của mỗi từ
            words.forEach(word => {
                wordCount[word] = (wordCount[word] || 0) + 1;
            });

            // In các từ con trùng lặp và số lần xuất hiện
            console.log("Các từ con trùng lặp và số lần xuất hiện:");
            let hasDuplicates = false;  // Kiểm tra nếu có từ trùng lặp
            for (let word in wordCount) {
                if (wordCount[word] > 1) {
                    console.log(`Từ '${word}' xuất hiện ${wordCount[word]} lần`);
                    hasDuplicates = true;
                }
            }

            if (!hasDuplicates) {
                console.log("Không có từ nào trùng lặp.");
            }
            break;

        case 4:
            let words2 = str.split(/\s+/);
            let maxLength = 0;
            let minLength = Infinity;
            let longestWords = [];
            let shortestWords = [];
            words2.forEach(word => {
                if (word.length > maxLength) {
                    maxLength = word.length;
                    longestWords = [word];
                } else if (word.length === maxLength) {
                    longestWords.push(word);
                }

                if (word.length < minLength) {
                    minLength = word.length;
                    shortestWords = [word];
                } else if (word.length === minLength) {
                    shortestWords.push(word);
                }
            });
            console.log("Các từ có độ dài lớn nhất:");
            longestWords.forEach(word => console.log(word));
            console.log("Các từ có độ dài nhỏ nhất:");
            shortestWords.forEach(word => console.log(word));
            break;
        case 5:
            let charCount = {};
            for (let char of str) {
                if (char !== ' ') {
                    charCount[char] = (charCount[char] || 0) + 1;
                }
            }
            let maxCount = 0;
            let mostChar = '';
            for (let char in charCount) {
                if (charCount[char] > maxCount) {
                    maxCount = charCount[char];
                    mostChar = char;
                }
            }
            console.log(`Ký tự xuất hiện nhiều nhất là '${mostChar}' với ${maxCount} lần`);
            break;
        case 6:
            let snakeCase = str.replace(/\s+/g, '_').toLowerCase();
            console.log("Chuỗi trong dạng snake_case: " + snakeCase);
            break;
        default:
            break;
    }
} while (choice !== 7);
