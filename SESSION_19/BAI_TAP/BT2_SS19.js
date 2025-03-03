let char=prompt("Nhập ký tự bất kì: ");
if( char.includes(0) || char.includes(1) || char.includes(2) || char.includes(3) || char.includes(4) || char.includes(5) || char.includes(6) || char.includes(7) || char.includes(8) || char.includes(9))
{
    alert(`không phải chữ cái`);
}
else
{
    alert(`Ký tự ${char} là chữ cái`);
}