function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
  $('.carousel').carousel({
    interval: 2000
  })
  $('#myCarousel').on('slide.bs.carousel', function () {
    // do something…
  })