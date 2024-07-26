const ul = document.querySelector("ul");
const btn = document.querySelector(".btn");
btn.addEventListener("click", dropDown);

function dropDown() {
  console.log(ul.getAttribute("style"));
  if (
    ul.getAttribute("style") === "display: none" ||
    ul.getAttribute("style") === "display: none;"
  ) {
    ul.style = "display: block";
  } else {
    ul.style = "display: none";
  }
}

const img1 = document.querySelector("#img-1");
const img2 = document.querySelector("#img-2");
const img3 = document.querySelector("#img-3");
const nextBtn = document.querySelector("#right");
nextBtn.addEventListener("click", nextSlide);
const prevBtn = document.querySelector("#left");
prevBtn.addEventListener("click", prevSlide);

const circle1 = document.querySelector("#circle1");
const circle2 = document.querySelector("#circle2");
const circle3 = document.querySelector("#circle3");

circle1.addEventListener("click", () => {
  img1.style = "display: block";
  img2.style = "display: none";
  img3.style = "display: none";
  selectedCircle();
});

circle2.addEventListener("click", () => {
  img2.style = "display: block";
  img1.style = "display: none";
  img3.style = "display: none";
  selectedCircle();
});

circle3.addEventListener("click", () => {
  img3.style = "display: block";
  img2.style = "display: none";
  img1.style = "display: none";
  selectedCircle();
});

if (
  img1.getAttribute("style") === "display: block" ||
  img1.getAttribute("style") === "display: block;"
) {
  circle1.classList.add("selected-circle");
}

function selectedCircle() {
  if (
    img1.getAttribute("style") === "display: block" ||
    img1.getAttribute("style") === "display: block;"
  ) {
    circle1.classList.add("selected-circle");
  } else {
    circle1.classList.remove("selected-circle");
  }
  if (
    img2.getAttribute("style") === "display: block" ||
    img2.getAttribute("style") === "display: block;"
  ) {
    circle2.classList.add("selected-circle");
  } else {
    circle2.classList.remove("selected-circle");
  }
  if (
    img3.getAttribute("style") === "display: block" ||
    img3.getAttribute("style") === "display: block;"
  ) {
    circle3.classList.add("selected-circle");
  } else {
    circle3.classList.remove("selected-circle");
  }
}

function nextSlide() {
  if (
    img1.getAttribute("style") === "display: block" ||
    img1.getAttribute("style") === "display: block;"
  ) {
    console.log(img1.getAttribute("style"));
    img1.style = "display: none";
    img2.style = "display: block";
  } else if (
    img2.getAttribute("style") === "display: block" ||
    img2.getAttribute("style") === "display: block;"
  ) {
    img2.style = "display: none";
    img3.style = "display: block";
  } else if (
    img3.getAttribute("style") === "display: block" ||
    img3.getAttribute("style") === "display: block;"
  ) {
    img3.style = "display: none";
    img1.style = "display: block";
  }
  selectedCircle();
}

function prevSlide() {
  if (
    img1.getAttribute("style") === "display: block" ||
    img1.getAttribute("style") === "display: block;"
  ) {
    img1.style = "display: none";
    img3.style = "display: block";
  } else if (
    img2.getAttribute("style") === "display: block" ||
    img2.getAttribute("style") === "display: block;"
  ) {
    img2.style = "display: none";
    img1.style = "display: block";
  } else if (
    img3.getAttribute("style") === "display: block" ||
    img3.getAttribute("style") === "display: block;"
  ) {
    img3.style = "display: none";
    img2.style = "display: block";
  }
  selectedCircle();
}

setInterval(nextSlide, 5000);
