let diemToan=+prompt("Nhập điểm toán: ");
let diemLy=+prompt("Nhập điểm lý:");
let diemHoa=+prompt("Nhập điểm hóa: ");
let average=Math.round((diemToan+diemLy+diemHoa)/3).toFixed(2);
document.write(average);
