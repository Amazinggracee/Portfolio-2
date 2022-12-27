
function myFunction() {
    var nLink = document.getElementsByClassName("nav-item");
    if (nLink.style.display === "block") {
        nLink.style.display = "none";
    } else {
        nLink.style.display = "block";
    }
  }