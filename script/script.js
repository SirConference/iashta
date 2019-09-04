var sidemenu = document.querySelector(".sidemenu");
console.log(sidemenu);


document.addEventListener("scroll",function(){
    if(window.pageYOffset > 150) {
        sidemenu.style.position = "fixed";
        sidemenu.style.top = "5px";
    }
    else if(window.pageYOffset < 500){
        sidemenu.style.position = "absolute";
        sidemenu.style.top = "105px";
    }
}
),false;