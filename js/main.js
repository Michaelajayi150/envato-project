// PERSONALITY BACKGROUND CHANGES

var image = document.getElementById('hero'),
  i;
// var imageText = document.getElementById('personality-text');
var dots = document.getElementsByClassName("dot");
var currentPos = 0;
var collection = 
[     // SOURCES AND TEXT FOR EACH PERSONALITY
  {
    "src": "./asset/background.png",
    // "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ad nam atque cumque sint dicta. Perferendis nisi ipsum rerum culpa nihil, minima excepturi magni accusamus quibusdam hic." 
    },
  {
    "src": "./asset/background-1.png",
    // "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ad nam atque cumque sint dicta. Perferendis nisi ipsum rerum culpa nihil, minima excepturi magni accusamus quibusdam hic."
    },
  {
    "src": "./asset/background-2.png",
    // "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ad nam atque cumque sint dicta. Perferendis nisi ipsum rerum culpa nihil, minima excepturi magni accusamus quibusdam hic."
    }
]

function currentSlide(n) {
  imageChange(currentPos = (n - 1));
}

function imageChange() {
  currentPos += 1;
  if (currentPos >= collection.length) {
    currentPos = 0;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
    image.src = collection[currentPos].src;
    // imageText.innerHTML = collection[currentPos].text;
    dots[currentPos].className += " active";
}

setInterval(imageChange, 3000);