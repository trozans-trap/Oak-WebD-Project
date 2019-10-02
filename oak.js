

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slider");
  for (i = 0; i < x.length; i++){
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}  

  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); 
}

// sidenavbar

function openNav() {
  document.getElementById("mySidenav").style.width = "398px";
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



// var img1 =document.getElementsByClassName("hideimg1");
// var img2 =document.getElementsByClassName("hideimg2");

// function imgdisplay1()
// {

// }
// function imgdisplay2()
// {
//    img1.style.display="none";
//    img2.style.display="none";
// }
// function imgdisplay3()
// {

// }
// function imgdisplay4()
// {

// }


// var img3 =document.querySelector(".hello123");
// var imgType =document.querySelector(".butn2");


// imgType.addEventListener("click" , function(){
//   img3.style.display="none";
// })
