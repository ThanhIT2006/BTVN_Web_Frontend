let number=Number(prompt("Nhập vào một chuổi số nguyên bất kì"));
let textNumber=number.toString();
let check=0;
if(Number.isInteger(number))
{
    for(let i=0;i<=textNumber.length/2;i++)
        {
            if(textNumber[i] != textNumber[textNumber.length -1 -i])
            {
                check++;
                console.log("Đây không phải số đối xứng");
                break;
            }
        }
    check==0? console.log("Đây là số đối xứng"): console.log("...");
}
else
{
    console.log("Số không hợp lệ!");
}