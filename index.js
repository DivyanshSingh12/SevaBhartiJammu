

var nav = false;

function pop2(){
    document.querySelector(".centered").style.visibility = "visible";
    document.querySelector(".menu").style.color = "skyblue";
    nav = true;
}

function unpop2(){
    document.querySelector(".centered").style.visibility = "hidden";
    document.querySelector(".menu").style.color = "white";
    nav = false;
}

function toggleNav(){
    if(nav){
        unpop2();
    }
    else{
        pop2();
    }
}

document.querySelector(".menu").addEventListener("click", toggleNav);





