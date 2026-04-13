function toggleMenu() {
  var navList = document.querySelector("#main-nav ul");
  if (navList.style.display === "flex"){
      navList.style.display = "none";
  }else{
  navList.style.display = "flex";
  }
}
function toggleContent() {
  var content = document.getElementById("extra-content");
  var btn = event.target;

  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    btn.textContent = "Show Less";
  } else {
    content.style.display = "none";
    btn.textContent = "Show More Info";
  }
}
