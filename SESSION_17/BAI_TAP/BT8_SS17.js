let date1=new Date(prompt("Nhập vào ngày tháng năm bất kì(định dạng YYYY/MM/DD): "));
let date2=new Date(prompt("Nhập vào ngày tháng năm bất kì(định dạng YYYY/MM/DD): "));
let day=Math.abs(Number(date1)-Number(date2))/86400000;
document.write("Độ lệch ngày là: "+day+"ngày");