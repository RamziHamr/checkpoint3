var like1 = document.getElementById("like1")
var delete1 = document.getElementById("delete1")

var count1 = document.getElementById('count1');
var price1 = document.getElementById('price1');
var  butplus1 = document.getElementById('plus')
var price = document.getElementById("Price")
var butminus1 = document.getElementById('minus')
function Supp() {

  var parent = delete1.parentElement.parentElement
  parent.style.display = "none"
};

delete1.addEventListener('click', Supp);

like1.addEventListener('click', function (e) {
  e.target.style.color === "red" ? e.target.style.color = "black" : e.target.style.color = "red"
})

function increment() {
  count1.innerHTML = +count1.innerHTML + 1
  price1.innerHTML = +price1.innerHTML + 450

  price.innerHTML = +price.innerHTML + 450
}

butplus1.addEventListener('click', increment);


function decrement() {
  if (count1.innerHTML > 0) {
      count1.innerHTML = +count1.innerHTML - 1
      price1.innerHTML = +price1.innerHTML - 450

      price.innerHTML = +price.innerHTML - 450
  }
}
console.log(increment)

butminus1.addEventListener('click', decrement);





var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
