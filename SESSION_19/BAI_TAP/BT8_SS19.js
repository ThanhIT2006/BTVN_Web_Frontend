let season=Number(prompt("Nhập một số: "));
season.isInteger(season);
if(season==1 || season==2 || season==3)
{
    alert("Mùa Xuân");
}
else if( season==4 || season==5 || season==6)
{
    alert("Mùa Hạ");
}
else if(season==7 || season==8 || season==9)
{
    alert("Mùa Thu");
}
else if(season==10 || season==11 || season==12)
{
    alert("Mùa Đông");
}
else
{
    alert("tháng không hợp lệ")
}