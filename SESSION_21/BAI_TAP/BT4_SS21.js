let a=Number(prompt("Nhập số a: "));
let b=Number(prompt("Nhập số b: "));
let c=Number(prompt("Nhập số c: "));
let denta=b*b-4*a*c;
if(denta<0)
{
    alert("Phương trình vô nghiệm")
}
else if(denta==0)
{
    let x1=(-b+Math.sqrt(denta))/(2*a);
    let x2=(-b+Math.sqrt(denta))/(2*a);
    alert("Phương trình có 2 nghiệm kép x1 x2= "+x2);
}
else
{
    let s1=(-b-Math.sqrt(denta))/(2*a);
    let s2=(-b+Math.sqrt(denta))/(2*a);
    alert("Phương trình có 2 nghiệm phân biệt x1= "+ s1 +" x2= "+s2);
}