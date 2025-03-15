let employees = [];
let choice=0;
do {
    choice = +prompt(`
        1. Thêm nhân viên mới.
        2. Xóa nhân viên theo id
        3. Cập nhật mức lương của nhân viên theo id
        4. Tìm kiếm nhân viên theo tên
        5. Thoát
    `);
    switch (choice) {
        case 1:
            add();
            break;
        case 2:
            delet();
            break;
        case 3:
            updatesalary();
            break;
        case 4:
            searchByName();
            break;
        default:
            break;
    }
} while (choice != 5);
function add() {
    let name = prompt("Nhập tên nhân viên: ");
    let age = +prompt("Nhập tuổi nhân viên: ");
    let position = prompt("Nhập vị trí nhân viên:");
    let salary = +prompt("Mời nhập lương:");
    let id = Math.floor(Math.random() * 9999999 + new Date().getMilliseconds());
    let newEmployee = {
        id: id,
        name: name,
        age: age,
        salary: salary,
        position: position,
    };

    employees.push(newEmployee);
    console.log("Thêm nhân viên thành công:", newEmployee);
}
function delet() {
    let id = +prompt("Nhập id nhân viên muốn xóa: ");
    let findIndex = employees.findIndex(item => item.id == id);

    if (findIndex != -1) {
        let confirmDelete = confirm("Bạn có muốn xóa nhân viên này không?");
        if (confirmDelete) {
            employees.splice(findIndex, 1);
            console.log("Xóa nhân viên thành công!");
        } else {
            console.log("Hủy bỏ việc xóa nhân viên.");
        }
    } else {
        console.log("Không tìm thấy nhân viên có id là: ", id);
    }
}
function updatesalary() {
    let id = +prompt("Nhập id nhân viên muốn cập nhật mức lương: ");
    let findIndex = employees.findIndex(item => item.id == id);

    if (findIndex != -1) {
        let newSalary = +prompt("Nhập mức lương mới: ");
        employees[findIndex].salary = newSalary;
        console.log(`Mức lương của nhân viên với ID ${id} đã được cập nhật thành ${newSalary}`);
    } else {
        console.log("Không tìm thấy nhân viên có id là: ", id);
    }
}
function searchByName() {
    let name = prompt("Nhập tên nhân viên cần tìm kiếm: ");
    let foundEmployees = employees.filter(employee => employee.name.toLowerCase().includes(name.toLowerCase()));

    if (foundEmployees.length > 0) {
        console.log("Danh sách nhân viên tìm thấy:");
        foundEmployees.forEach(emp => console.log(emp));
    } else {
        console.log("Không tìm thấy nhân viên nào có tên là: ", name);
    }
}
