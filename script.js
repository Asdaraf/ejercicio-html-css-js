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
  let prevArrow = document.getElementsByClassName('prev')[0];
  let nextArrow = document.getElementsByClassName('next')[0];

  if (n > slides.length) {slideIndex = 1};
  if (n < 1) {slideIndex = slides.length};
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  // Hide prev arrow on first slide
  if (slideIndex == 1) {
    prevArrow.style.display = "none";
  } else {
    prevArrow.style.display = "block";
  }
  
  // Hide next arrow on last slide
  if (slideIndex == slides.length) {
    nextArrow.style.display = "none";
  } else {
    nextArrow.style.display = "block";
  }
} 



//###################################################################################################################################################//

const images = document.querySelectorAll("img[data-lightbox]");

if (images) {
  // Load the lightbox
  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");
  document.body.appendChild(lightbox);

  // Load the close button
  const lightboxCloseButton = document.createElement("button");
  lightboxCloseButton.classList.add("lightbox__close");
  lightboxCloseButton.innerHTML = "X";

  images.forEach((image) => {
    image.addEventListener("click", (e) => {
      lightbox.classList.add("active");
      const img = document.createElement("img");
      img.src = image.src;
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }
      lightbox.appendChild(img);
      lightbox.appendChild(lightboxCloseButton);
      // Add a class to body
      document.body.classList.add("overflow-hidden");
    });
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
    document.body.classList.remove("overflow-hidden");
  });

  lightboxCloseButton.addEventListener("click", (e) => {
    lightbox.classList.remove("active");
    document.body.classList.remove("overflow-hidden");
  });
}