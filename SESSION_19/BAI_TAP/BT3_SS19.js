let option=prompt("Bạn muốn chuyển đổi qua USD hay VND (USD hoặc VND):");
if(option=="VND")
{
    let money=Number(prompt("Nhập số tiền bất kì:"));
    let result=money*23000;
    alert(`Giá trị bằng ${result} VND`);
}
else if(option=="USD")
{
    let money2=Number(prompt("Nhập số tiền bất kì: "));
    let result2=money2/23000;
    alert(`Giá trị bằng ${result2} USD`);
}
