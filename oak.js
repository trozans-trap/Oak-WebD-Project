
// var index = 0 ;
// imageSlider();

// function imageSlider() {
// 	var i;
// 	var x = document.querySelector(".slider");
//     for( i=0;i<x.length;i++){
//     	x[i].style.display="none";
//     }
//     index++;
//     if( index > x.length){
//     	index=1
//     }
//     x[index-1].style.display ="block";
//     setTimeout(imageSlider,2000);
// }


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
  setTimeout(carousel, 4000); // Change image every 2 seconds
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
  setTimeout(newcarousel, 3000); // Change image every 2 seconds
}