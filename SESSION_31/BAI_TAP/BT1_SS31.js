document.getElementsByClassName("Hide")[0].addEventListener("click",()=> {
    document.getElementsByTagName("p")[0].style.display="none";
});
document.getElementsByClassName("Show")[0].addEventListener("click",()=> {
    document.getElementsByTagName("p")[0].style.display="block";
});