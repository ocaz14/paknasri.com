function dropdown_open(){
    document.getElementById("dropdown-menu").style.visibility = "visible";
    document.getElementById("dropdown_botton").style.visibility = "hidden";
    document.getElementById("dropdown_close").style.visibility = "visible";
}
function dropdown_close(){
    document.getElementById("dropdown-menu").style.visibility = "hidden";
    document.getElementById("dropdown_botton").style.visibility = "visible";
    document.getElementById("dropdown_close").style.visibility = "hidden";
}

var dropdown_menu_id = document.getElementById("dropdown-menu")
var side_menu = 
"<div class='cont-head'>"+
"<div class='logo'>"+
"    pakNasri.com"+
"</div>"+
"<div class='nav'>"+
"    <a href='/index'><div class='nav-child'>HOME</div></a>"+
"    <a href='/blog'><div class='nav-child'>BLOG</div></a>"+
"    <a href='/jawab'><div class='nav-child'>JAWAB</div></a>"+
"    <a href='/un'><div class='nav-child'>UN</div></a>"+
"</div>"+
"</div>";  
dropdown_menu_id.innerHTML = side_menu;

var menu_button_id = document.getElementById("menu_button")
var menu_button = 
"<div onclick='dropdown_open()' class='dropdown-botton' id='dropdown_botton'>"+
"   <div class='dropdown-botton-child'></div>"+
"   <div class='dropdown-botton-child'></div>"+
"   <div class='dropdown-botton-child'></div>"+
"</div>"+
"<div onclick='dropdown_close()' class='dropdown-close' id='dropdown_close'>"+
"   &#x2716;"+
"</div>";
menu_button_id.innerHTML = menu_button;








