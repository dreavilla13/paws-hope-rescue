function toggleMenu() {
  const navList = document.querySelector("#main-nav ul");
  navList.classList.toggle("show");
}

function toggleContent() {
  const content = document.getElementById("extra-content");

  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
