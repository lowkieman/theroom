//NAVIGATION BAR FOR MOBILE SCREENS
const showNav=document.getElementById("showNav");
const hideNav=document.getElementById("hideNav");

showNav.addEventListener("click",function(){
    document.getElementById("nav").style.left="0";
    document.getElementById("hideNav").style.visibility="visible";
    document.getElementById("showNav").style.visibility="collapse";
});

hideNav.addEventListener("click",function(){
    document.getElementById("nav").style.left="-50%";
    document.getElementById("hideNav").style.visibility="collapse";
    document.getElementById("showNav").style.visibility="visible";
});

//What happen when nav links are clicked
const background1=document.getElementById("background1");
const background2=document.getElementById("background2");
const background3=document.getElementById("background3");
const background4=document.getElementById("background4");
const background5=document.getElementById("background5");
const background6=document.getElementById("background6");

background1.addEventListener("click",function(){
    document.getElementById("nav").style.left="-50%";    
    document.getElementById("hideNav").style.visibility="collapse";
    if(window.innerWidth<=425){
        document.getElementById("showNav").style.visibility="visible";
    }
});

background2.addEventListener("click",function(){
    document.getElementById("nav").style.left="-50%";
    document.getElementById("hideNav").style.visibility="collapse";
    if(window.innerWidth<=425){
        document.getElementById("showNav").style.visibility="visible";
    }
});

background3.addEventListener("click",function(){
    document.getElementById("nav").style.left="-50%";
    document.getElementById("hideNav").style.visibility="collapse";
    if(window.innerWidth<=425){
        document.getElementById("showNav").style.visibility="visible";
    }
});

background4.addEventListener("click",function(){
    document.getElementById("nav").style.left="-50%";
    document.getElementById("hideNav").style.visibility="collapse";
    if(window.innerWidth<=425){
        document.getElementById("showNav").style.visibility="visible";
    }
});

background5.addEventListener("click",function(){    
    document.getElementById("nav").style.left="-50%";
    document.getElementById("hideNav").style.visibility="collapse";
    if(window.innerWidth<=425){
        document.getElementById("showNav").style.visibility="visible";
    }
});

background6.addEventListener("click",function(){
    document.getElementById("nav").style.left="-50%";
    document.getElementById("hideNav").style.visibility="collapse";
    if(window.innerWidth<=425){
        document.getElementById("showNav").style.visibility="visible";
    }
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
