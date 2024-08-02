//NAVIGATION BAR FOR MOBILE SCREENS

const show=document.getElementById("shownav");
const hide=document.getElementById("hidenav");

show.addEventListener("click",function(){
    document.getElementById("shownav").style.display="none";
    document.getElementById("show").style.display="block";
    document.getElementById("hidenav").style.display="block"
});
hide.addEventListener("click",function(){
    document.getElementById("show").style.display="none";
    document.getElementById("shownav").style.display="block";
    document.getElementById("hidenav").style.display="none";
});

//profile icon edits
const accountAction=document.getElementById("getaccount-action");
const useIcon=document.getElementById("icon");

accountAction.addEventListener("click",function(){
    document.getElementById("account-action").style.display="block";    
}); 
useIcon.addEventListener("click",function(){
    document.getElementById("account-action").style.display="block";
});

email.addEventListener("click",function(){
    document.getElementById("email").style.border="2px solid pink";
});
email.addEventListener("blur",function(){
    document.getElementById("email").style.border="1px solid gray";
});

const sms=document.getElementById("email");

sms.addEventListener("click",function(){
    const text1="Please input your Email";
    document.getElementById("emailMessage").innerHTML=text1;
    document.getElementById("emailMessage").style.color="red";
    document.getElementById("warning").style.color="red";
});
sms.addEventListener("keypress",function(){
    const text2="Please enter a valid email address!";
    document.getElementById("emailMessage").innerHTML=text2;
});
