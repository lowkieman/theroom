const getLogin=document.getElementById("log");
getLogin.addEventListener("click",function(){
    document.getElementById("nav").style.display="none";
    document.getElementById("account").style.visibility="hidden";
    document.getElementById("header").style.backgroundColor="rgb(242, 244, 247)";
    document.getElementById("footer").style.position="fixed";
    document.getElementById("footer").style.bottom="0";
    document.getElementById("footer").style.height="10vh";

});

window.addEventListener("load",function(){
    document.getElementById("nav").style.display="none";
    document.getElementById("header").style.backgroundColor="rgb(242, 244, 247)";
    document.getElementById("footer").style.position="fixed";
    document.getElementById("footer").style.bottom="0";
    document.getElementById("footer").style.height="10vh";
});

const submit=document.getElementById("submit");
submit.addEventListener("click",function(){
    document.getElementById("alx").style.display="block";
    document.getElementById("login").style.display="none"; 
    document.getElementById("nav").style.display="block";
    document.getElementById("account").style.visibility="visible";
    document.getElementById("footer").style.position="static";})