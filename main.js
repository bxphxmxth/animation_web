/*  Drop Down */


//show and hide dropdown list item on button click
function show_hide() {
     let click = document.getElementById("list-items");
     if(click.style.display ==="none") {
        click.style.display ="block";
     } else {
        click.style.display ="none";
     };
  };

// Slideshow Carousel

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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


// 4 List panneaux 

// let noodles = document.getElementsByClassName("littleWhite")[0];
// let onigiri = document.getElementsByClassName("littleWhite")[1];
// let tea = document.getElementsByClassName("littleWhite")[2];
// let maki = document.getElementsByClassName("littleWhite")[3];
// let burrito = document.getElementsByClassName("littleWhite")[4];

let bouffe = Array.from(document.getElementsByClassName("littleWhite"));
console.log(bouffe);

bouffe[0].addEventListener("click", () =>{
  bouffe[0].setAttribute("class", "bigWhite");
  bouffe[1].setAttribute("class","littleWhite")
  bouffe[2].classList.remove("bigWhite");
  bouffe[3].classList.remove("bigWhite");
  bouffe[4].classList.remove("bigWhite");
  bouffe[5].classList.remove("bigWhite");

});

bouffe[1].addEventListener("click", () =>{
  bouffe[1].setAttribute("class", "bigWhite");
  bouffe[2].classList.remove("bigWhite");
  bouffe[3].classList.remove("bigWhite");
  bouffe[4].classList.remove("bigWhite");
  bouffe[5].classList.remove("bigWhite");
  bouffe[0].setAttribute("class","littleWhite")

});





// document.body.addEventListener("click", (e) =>{

//   if(e.target == noodles){
//     e.target.setAttribute("class", "bigWhite");
//   }else if (e.target == onigiri){
//     e.target.setAttribute("class", "bigWhite");
//   }else if(e.target == tea){
//     e.target.setAttribute("class", "bigWhite");

//   }else if (e.target == maki){
//     e.target.setAttribute("class", "bigWhite");

//   }else if(e.target == burrito){
//     e.target.setAttribute("class", "bigWhite");

//   }
// })

// document.body.addEventListener("click", (e) =>{

//   if(e.target == noodles && e.target.className == bigwhite){
//     e.target.setAttribute("class", "littleWhite");
//   }else if (e.target == onigiri){
//     e.target.setAttribute("class", "littleWhite");
//   }else if(e.target == tea){
//     e.target.setAttribute("class", "littleWhite");

//   }else if (e.target == maki){
//     e.target.setAttribute("class", "littleWhite");

//   }else if(e.target == burrito){
//     e.target.setAttribute("class", "littleWhite");

//   }
// })

// noodles.addEventListener("click",growDiv);


// Navbar responsive

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Drag and drop

