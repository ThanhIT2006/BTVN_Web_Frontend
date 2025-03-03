let number=Number(prompt("Nhập một số bất kì: "));
number.isInteger(number);
if(number%3==0 && number%5==0)
{
    alert(`${number} chia hết cho 3 và 5`);
}
else
{
    alert(`${number} không chia hết cho 3 và 5`)
}