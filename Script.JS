//First of all we r gonna grab the elements that we r doing something with
let butmenu = document.querySelector(".but_menu");
let elmenu = document.querySelector(".el_menu");
//Then we create a variable that tells us if the menu is open or closed
// False = its gonna be close when we get into the website for first time
let statmenu = false;
// We could to it in css just changing it in style but we r doing it on JS, whatever
elmenu.style.marginLeft = "-140%";
// Now the site will hide the menu till we click on the button and active ur func

//The function thats gonna toggle it by open and close
function menuToggle(){
    if(statmenu == false){
        elmenu.style.marginLeft = "auto";
        statmenu = true;
    }
    else if(statmenu == true){
        elmenu.style.marginLeft = "-140%";
        statmenu = false;
    }
}
//Now the point of this activity, we r setting an event handler in JS
//a event handler basically run a JS code whenever i do something with a dom node that i setted b4
//In this case we r running a function whenever we click in the button, thats our event handle
butmenu.onclick = menuToggle;
