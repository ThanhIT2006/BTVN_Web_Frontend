document.getElementsByClassName("btn")[0].addEventListener("click",()=>{
    let count=document.getElementById("text").value;
    document.getElementsByClassName("count")[0].innerHTML=count.length;
})