let choice = 0;
do {
    choice = +prompt(
        `
        1.Tính diện tích hình tròn
        2.Tính chu vi hình tròn
        3.Tính diện tích hình chữ nhật
        4.Tính chu vi hình chữ nhật
        5.Thoát
        `
    )
    switch (choice) {
        case 1:
            acr();
            break;
        case 2:
            peri();
            break;
        case 3:
            rectangularArea();
            break;
        case 4:
            rectangularPerimeter();
            break;
        default:
            break;
    }
} while (choice != 5);
function acr() {
    let radius = +prompt("Nhập bán kính: ");
    if (Number.isInteger(radius)) {
        let acreage = Math.PI * radius * radius;
        console.log("Diện tích hình tròn là: " + acreage);
        return;
    }
    else {
        console.log("Bán kính không hợp lệ");
        return;
    }
}
function peri(params) {
    let radius = +prompt("Nhập bán kính: ");
    if (Number.isInteger(radius)) {
        let perimeter = radius*2*Math.PI;
        console.log("Chu vi hình tròn là: " + perimeter);
        return;
    }
    else {
        console.log("Bán kính không hợp lệ");
        return;
    }
}
function rectangularArea() {
    let lenght=+prompt("Nhập chiều dài: ");
    let width=+prompt("Nhập chiều rộng: ");
    if (Number.isInteger(lenght) && Number.isInteger(width)) {
        let acreage = lenght*width;
        console.log("Diện tích hình chữ nhật là: " + acreage);
        return;
    }
    else
    {
        console.log("Bán kính không hợp lệ");
        return;
    }
}
function rectangularPerimeter() {
    let lenght=+prompt("Nhập chiều dài: ");
    let width=+prompt("Nhập chiều rộng: ");
    if (Number.isInteger(lenght) && Number.isInteger(width)) {
        let perimeter= lenght+width*2;
        console.log("Chu vi hình chữ nhật là: " + perimeter);
        return;
    }
    else
    {
        console.log("Bán kính không hợp lệ");
        return;
    }
}