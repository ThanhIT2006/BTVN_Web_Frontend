let arr = [];
let choice = 0;
do {
    choice = +prompt(
        `
        1.Nhập danh sách sinh viên
        2.Hiển thị dánh sách sinh viên
        3.Tìm sinh viên theo tên
        4.Xóa sinh viên khỏi danh sách
        5.Thoát
        `
    )
    switch (choice) {
        case 1:
            add();
            break;
        case 2:
            console.log(arr);
            break;
        case 3:
            find();
            break;
        case 4:
            delet();
            break;
        default:
            break;
    }
} while (choice != 5);
function add() {
    let numOfStudent = +prompt("Nhập số lượng sinh viên");
    if(Number.isInteger(numOfStudent))
    {
        for (let i = 0; i < numOfStudent; i++) {
            let student = prompt(` Nhập tên sinh viên thứ ${i + 1}: `);
            arr.push(student);
        }
    }
    else
    {
        console.log("Số lượng không hợp lệ");
        
    }
    return;
}
function find() {
    let findStudent = prompt("Nhập tên sinh viên cần tìm: ");
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(findStudent)) {
            console.log(findStudent);
            return;
        }
        else {
            console.log("Sinh viên không có trong danh sách");
            return;
        }
    }
    return;
}
function delet() {
    let deletStudent=prompt("Nhập tên sinh viên muốn xóa: ");
    let found=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(deletStudent)) {
            arr.splice(i,1)
            found++;
            return;
        }
        found==0?console.log("Sinh viên ko tồn tại trong danh sách"): console.log("Sinh viên đả được xóa khỏi danh sách");
    }
}