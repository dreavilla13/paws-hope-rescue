function toggleMenu() {
  var navList = document.querySelector("#main-nav ul");
  if (navList.style.display === "flex"){
      navList.style.display = "none";
  }else{
  navList.style.display = "flex";
  }
}
function toggleContent() {
  const content = document.getElementById("extra-content");
  const button = document.getElementById("toggle-btn");

  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    button.textContent = "Hide More Info";
  } else {
    content.style.display = "none";
    button.textContent = "Show More Info";
  }
}
