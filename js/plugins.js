// BACKGROUND CHANGE ON MOUSE MOVE
var yMousePos = 0,
  lastScrolledTop = 0;

$(document).ready(function () {
  $(document).mousemove(function (event) {
    yMousePos = event.pageY - 85;
    captureMousePos(event);
  });

  $(window).scroll(function (event) {
    if (lastScrolledTop != $(document).scrollTop()) {
      yMousePos -= lastScrolledTop;
      lastScrolledTop = $(document).scrollTop();
      yMousePos += lastScrolledTop;
    }
    captureMousePos(event);
  });

  function captureMousePos() {
    window.status = "y = " + yMousePos;
    heroText = document.querySelectorAll(".heroes");
    if (yMousePos >= 300) {
      heroText.forEach((heads) => {
        heads.style.color = "#fff";
      });
    } else {
      heroText.forEach((heads) => {
        heads.style.color = "#000";
      });
    }
    $("#hero-img").css("height", yMousePos + "px");
  }
});

// SLIDESHOW

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" actives", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " actives";
  setTimeout(showSlides, 2000);
}

// PERSONALITY BACKGROUND CHANGES

var image = document.getElementById("personality");
var imageText = document.getElementById("personality-text");
var currentPos = 0;
var collection = [
  // SOURCES AND TEXT FOR EACH PERSONALITY
  {
    src: "../asset/main_fashion-design-cover-1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ad nam atque cumque sint dicta. Perferendis nisi ipsum rerum culpa nihil, minima excepturi magni accusamus quibusdam hic.",
  },
  {
    src: "../asset/main_fashion-design-cover.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ad nam atque cumque sint dicta. Perferendis nisi ipsum rerum culpa nihil, minima excepturi magni accusamus quibusdam hic.",
  },
  {
    src: "../asset/main_fashion-design-cover-2.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ad nam atque cumque sint dicta. Perferendis nisi ipsum rerum culpa nihil, minima excepturi magni accusamus quibusdam hic.",
  },
];

function imageChange() {
  currentPos += 1;
  if (currentPos >= collection.length) {
    currentPos = 0;
  }
  image.src = collection[currentPos].src;
  imageText.innerHTML = collection[currentPos].text;
}
setInterval(imageChange, 3000);
