let number=Number(prompt("Nhập vào số nguyên bất kì: "));
let check=0;
for(let i=2;i<=number-1;i++)
{
    if(number%i==0)
    {
        check++;
        break;
    }
}
 check==0?console.log("Là số nguyên tố"): console.log("Không là số nguyên tố");