 // Add two buttons to page, one to show the fox and one to hide it.
function show(){
  document.getElementById('image').style.display = "inline";
  }

function hide(){
  document.getElementById('image').style.display = "none";
  }

function myFunction() {
  var x = document.getElementById("image");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}