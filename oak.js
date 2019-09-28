

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slider");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); 
}


var newmyIndex = 0;
newcarousel();

function newcarousel() {
  var j;
  var y = document.getElementsByClassName("slide");
  for (j = 0; j < y.length; j++) {
    y[j].style.display = "none";  
  }
  newmyIndex++;
  if (newmyIndex > y.length) {newmyIndex = 1}    
  y[newmyIndex-1].style.display = "block";  
  setTimeout(newcarousel, 3000); 
}


// sidenavbar

function openNav() {
  document.getElementById("mySidenav").style.width = "420px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var i=0;
function openNav2(){
  var y =document.getElementById("hidnav");
  if(i%2==0)
  {y.style.opacity=1;}
  else
    {y.style.opacity=0;}
  i++;


}


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



$("document").ready(function(){
    var typed = new Typed("#typed",{
      stringsElement: '#typed-strings'
    });
  });