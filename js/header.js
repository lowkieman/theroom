//NAVIGATION BAR FOR MOBILE SCREENS
const showNav=document.getElementById("showNav");
const hideNav=document.getElementById("hideNav");
const length = window.innerWidth;

showNav.addEventListener("click",function(){
    document.getElementById("nav").style.left="0";
    document.getElementById("hideNav").style.display = "block";
    document.getElementById("showNav").style.display="none";
});

hideNav.addEventListener("click",function(){
    document.getElementById("nav").style.left="-50%";
    document.getElementById("hideNav").style.display="none";
    document.getElementById("showNav").style.display="block";
});


document.getElementById("contact-us").style.display="none";//contact us page
if (window.innerWidth<320){
    document.getElementById("hidename").style.display="none"
}

//What happen when nav links are clicked
//#alx,#community,#opportunities,#profile,#redeem,#contact-us,#login
const background1=document.getElementById("background1");//has #alx
const background2=document.getElementById("background2");//has #community
const background3=document.getElementById("background3");//#opportunities
const background4=document.getElementById("background4");//#profile
const background5=document.getElementById("background5");//#redeem
const background6=document.getElementById("background6");//#contact-us,#login

//ALX PAGE
background1.addEventListener("click",function(){
    document.getElementById("nav").style.left="-50%";    
    document.getElementById("hideNav").style.display="none";
    document.getElementById("alx").style.display="block";//alx page
    document.getElementById("community").style.display="none"//community page
    document.getElementById("opportunities").style.display="none";//opportunities page
    document.getElementById("profile").style.display="none";//profile page
    document.getElementById("redeem").style.display="none";//legacy points page *redeem
    document.getElementById("contact-us").style.display="none";//contact us page
    document.getElementById("login").style.display="none";//login
    document.getElementById("action").style.display="none";
    if(window.innerWidth<=425){
        document.getElementById("showNav").style.display="block";
    }
});


//COMMUNITY
background2.addEventListener("click",function(){
    document.getElementById("nav").style.left="-50%";    
    document.getElementById("hideNav").style.display="none";
    document.getElementById("alx").style.display="none";//alx page
    document.getElementById("community").style.display="block"//community page
    document.getElementById("opportunities").style.display="none";//opportunities page
    document.getElementById("profile").style.display="none";//profile page
    document.getElementById("redeem").style.display="none";//legacy points page *redeem
    document.getElementById("contact-us").style.display="none";//contact us page
    document.getElementById("login").style.display="none";//login
    document.getElementById("action").style.display="none";
    document.getElementById("showNav").style.display="block";
});

//OPPORTUNITIES PAGE
background3.addEventListener("click",function(){
    document.getElementById("nav").style.left="-50%";    
    document.getElementById("hideNav").style.display="none";
    document.getElementById("alx").style.display="none";//alx page
    document.getElementById("community").style.display="none"//community page
    document.getElementById("opportunities").style.display="block";//opportunities page
    document.getElementById("profile").style.display="none";//profile page
    document.getElementById("redeem").style.display="none";//legacy points page *redeem
    document.getElementById("contact-us").style.display="none";//contact us page
    document.getElementById("login").style.display="none";//login
    document.getElementById("action").style.display="none";
    document.getElementById("showNav").style.display="block";
});

//PROFILE PAGE
background4.addEventListener("click",function(){
    document.getElementById("nav").style.left="-50%";    
    document.getElementById("hideNav").style.display="none";
    document.getElementById("alx").style.display="none";//alx page
    document.getElementById("community").style.display="none"//community page
    document.getElementById("opportunities").style.display="none";//opportunities page

    //profile page
    const width=window.innerWidth;
    if(width<=425){
    document.getElementById("profile").style.display="block";
    }
    else{
    document.getElementById("profile").style.display="flex";
    }
    document.getElementById("redeem").style.display="none";//legacy points page *redeem
    document.getElementById("contact-us").style.display="none";//contact us page
    document.getElementById("login").style.display="none";//login
    document.getElementById("action").style.display="none";
    document.getElementById("showNav").style.display="block";
});

//LEGACY POINTS PAGE *REDEEM
background5.addEventListener("click",function(){    
    document.getElementById("nav").style.left="-50%";    
    document.getElementById("hideNav").style.display="none";
    document.getElementById("showNav").style.display="block";
    document.getElementById("alx").style.display="none";//alx page
    document.getElementById("community").style.display="none"//community page
    document.getElementById("opportunities").style.display="none";//opportunities page
    document.getElementById("profile").style.display="none";//profile page
    
    //legacy points page *redeem
    document.getElementById("redeem").style.display="block";   
    document.getElementById("main").style.paddingTop="0";   
    document.getElementById("main").style.paddingBottom="0";
    
    //contact us page
    document.getElementById("contact-us").style.display="none";
    document.getElementById("login").style.display="none";//login
    document.getElementById("action").style.display="none";
    document.getElementById("showNav").style.display="block";
    if(window.innerWidth<=425){
        document.getElementById("showNav").style.display="block";
    }
});

//CONTACT US PAGE
background6.addEventListener("click",function(){
    document.getElementById("nav").style.left="-50%";    
    document.getElementById("hideNav").style.display="none";
    document.getElementById("alx").style.display="none";//alx page
    document.getElementById("community").style.display="none"//community page
    document.getElementById("opportunities").style.display="none";//opportunities page
    document.getElementById("profile").style.display="none";//profile page
    document.getElementById("redeem").style.display="none";//legacy points page *redeem
    document.getElementById("contact-us").style.display="flex";//contact us page
    document.getElementById("login").style.display="none";//login
    document.getElementById("action").style.display="none";
    document.getElementById("showNav").style.display="block";
    if(window.innerWidth<=425){
        document.getElementById("contact-us").style.display="block";//contact us page
    }
});

//profile icon edits
const getAction=document.getElementById("name");
getAction.addEventListener("click",function(){
    document.getElementById("action").style.display="block";
});

const action1=document.getElementById("action1");
action1.addEventListener("click",function(){
    document.getElementById("action").style.display="none";
    document.getElementById("alx").style.display="none";//alx page
    document.getElementById("community").style.display="none"//community page
    document.getElementById("opportunities").style.display="none";//opportunities page
    document.getElementById("profile").style.display="flex";//profile page
    document.getElementById("redeem").style.display="none";//legacy points page *redeem
    document.getElementById("contact-us").style.display="none";//contact us page
    document.getElementById("login").style.display="none";//login
    
});

const log1=document.getElementById("log");
log1.addEventListener("click",function(){
    document.getElementById("action").style.display="none";
    document.getElementById("alx").style.display="none";//alx page
    document.getElementById("community").style.display="none"//community page
    document.getElementById("opportunities").style.display="none";//opportunities page
    document.getElementById("profile").style.display="none";//profile page
    document.getElementById("redeem").style.display="none";//legacy points page *redeem
    document.getElementById("contact-us").style.display="none";//contact us page
    document.getElementById("login").style.display="flex";//login
})


//what happens to login form inputs
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
