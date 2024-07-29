const accountAction=document.getElementById("getaccount-action");

accountAction.addEventListener("click",function(){
    document.getElementById("account-action").style.display="block";    
}); 

const background1=document.getElementById("background1");
const background2=document.getElementById("background2");
const background3=document.getElementById("background3");
const background4=document.getElementById("background4");
const background5=document.getElementById("background5");
const background6=document.getElementById("background6");

background1.addEventListener("click",function(){
    document.getElementById("background1").style.borderBottom="2px solid blue";
});

background2.addEventListener("click",function(){
    document.getElementById("background2").style.borderBottom="2px solid blue";
});

background3.addEventListener("click",function(){
    document.getElementById("background3").style.borderBottom="2px solid blue";
});
background4.addEventListener("click",function(){
    document.getElementById("background4").style.borderBottom="2px solid blue";
});
background5.addEventListener("click",function(){
    document.getElementById("background5").style.borderBottom="2px solid blue";
});
background6.addEventListener("click",function(){
    document.getElementById("background6").style.borderBottom="2px solid blue";
});