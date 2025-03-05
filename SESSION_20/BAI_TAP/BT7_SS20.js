let fibo=Number(prompt("Nhập số fibonacci: "));
 let a = 1, b = 1;
if(Number.isInteger(fibo) && fibo>=1)
{
    if (fibo >= 1) {
        console.log(a);
    }
    if (fibo >= 2) {
        console.log(b);
    }
    let c = 0;
    for (let i = 2; i < fibo; i++) {
        c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}
else
{
    console.log("Không hợp lệ!");
}
   
    
    