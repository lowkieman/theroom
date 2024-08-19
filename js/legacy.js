
//LEGACY POINTS PAGE *REDEEM
background5.addEventListener("click",function(){    
    document.getElementById("nav").style.left="-50%";
    document.getElementById("hideNav").style.visibility="collapse";
    document.getElementById("alx").style.display="none";//alx page
    document.getElementById("community").style.display="none"//community page
    document.getElementById("opportunities").style.display="none";//opportunities page
    document.getElementById("profile").style.display="none";//profile page
    
    //legacy points page *redeem
    document.getElementById("redeem").style.display="block";   
    document.getElementById("main").style.paddingTop="0";   
    document.getElementById("main").style.paddingBottom="0";
    document.getElementById("footer").style.position="relative";
    document.getElementById("footer").style.top="100vh"   
    
    //contact us page
    document.getElementById("contact-us").style.display="none";
    document.getElementById("login").style.display="none";//login
    if(window.innerWidth<=425){
        document.getElementById("showNav").style.visibility="visible";
    }
});