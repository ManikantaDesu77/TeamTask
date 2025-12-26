const slider = document.getElementById("slider");
const dots = document.querySelectorAll(".dot");

function moveSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}
