
var video = document.getElementById("myVideo");

function playVid() {
  if (video.pause) {
    video.play();
  } else {
    video.pause();
  }
}
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
