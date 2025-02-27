let radius=Number(prompt("Nhập vào bán kính hình cầu:"));
let volume=4/3 * 3.14 *radius**3;
let SurfaceArea=4 *3.14 *radius**2;
let perimeter=2*3.14*radius;
document.write("Thể tích hình cầu là: "+volume.toFixed(2)+ "<br>");
document.write("Diện tích bề mặt hình cầu là: "+SurfaceArea.toFixed(2)+"<br>");
document.write("Chu vi hình cầu là: "+perimeter.toFixed(2));
