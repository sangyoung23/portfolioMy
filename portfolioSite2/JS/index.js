const moveLi = document.querySelectorAll("#head nav ul li");
const aboutMe = document.getElementById("#aboutme").offsetTop;
// const firstTop = aboutMe[1].offsetTop;


moveLi[0].onclick = () => {
  window.scroll({top:aboutMe, behavior: "smooth"})
}