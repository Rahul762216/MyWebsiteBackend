let index = 0;
const slides = document.querySelectorAll(".slides img");
setInterval(() => {
  slides.forEach(img => img.style.display = "none");
  slides[index].style.display = "block";
  index = (index + 1) % slides.length;
}, 2500);

const text = "We Build Websites That Sell ";
let i = 0;
function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
typing();
