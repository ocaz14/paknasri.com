var my_nav_innerHTML = 
"<div id='menu_button' class='menu-button'></div>"+
"<div id='dropdown-menu' class='header-side'></div>"+
"<div class='header-top'><div class='logo-top'>pakNasri.com</div></div>";

document.getElementById("my_nav").innerHTML = my_nav_innerHTML;

var themeColor = document.getElementById("theme-color");
if(themeColor){
    themeColor.content = " #111111";
}
var icon = document.getElementById("icon");
if(icon){
    icon.href = "/img/logo.svg";
}
