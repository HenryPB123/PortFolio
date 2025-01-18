let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

var check = document.querySelector(".check");
check.addEventListener("click", idioma);

function idioma() {
  let id = check.checked;
  if (id == true) {
    // location.href = "indexSpDos.html";
    location.href = "indexSp.html";
  } else {
    // location.href = "indexDosColor.html";
    location.href = "index.html";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const imageRow = document.querySelector(".image-row");
  const imageFolder = "./blogImages/";
  const imageCount = 5; // Number of images in the folder

  for (let i = 2; i <= imageCount; i++) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = `${imageFolder}img${i}.png`; // Images named as image1.jpg, image2.jpg, etc.
    img.alt = `Image ${i}`;
    div.appendChild(img);
    imageRow.appendChild(div);
  }
});

// document.addEventListener("DOMContentLoaded", () => {
//   const imageRow = document.querySelector(".image-row");
//   const imageFolder = "./blogImages/";
//   const imageCount = 8; // Número de imágenes en la carpeta

//   // Cargar las imágenes dinámicamente
//   for (let i = 1; i <= imageCount; i++) {
//     const img = document.createElement("img");
//     img.src = `${imageFolder}img${i}.png`; // Imágenes nombradas como img1.png, img2.png, etc.
//     img.alt = `Image ${i}`;
//     imageRow.appendChild(img);
//   }

//   // Agregar funcionalidad de slideshow
//   const images = document.querySelectorAll(".image-rowoi90 n img");
//   let currentIndex = 0;

//   document.getElementById("next").addEventListener("click", () => {
//     images[currentIndex].style.display = "none";
//     currentIndex = (currentIndex + 1) % images.length;
//     images[currentIndex].style.display = "block";
//   });

//   document.getElementById("prev").addEventListener("click", () => {
//     images[currentIndex].style.display = "none";
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     images[currentIndex].style.display = "block";
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const divContainer = document.querySelector(".slide-container");
  const imageFolder = "./blogImages/";
  const imageCount = 8; // Number of images in the folder  let slides = document.getElementsByClassName("slide");
  const dots = document.querySelector(".dots");

  for (let i = 1; i <= imageCount; i++) {
    const divSlide = document.createElement("div");
    divSlide.className = "slide fade";
    const divNumber = document.createElement("div");
    divNumber.className = "numbertext";
    divNumber.innerText = `${i}/${imageCount}`;
    const img = document.createElement("img");
    img.src = `${imageFolder}img${i}.png`; // Images named as image1.jpg, image2.jpg, etc.
    img.alt = `Image ${i}`;
    divSlide.appendChild(divNumber);
    divSlide.appendChild(img);
    divContainer.appendChild(divSlide);

    //DOTS
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.onclick = () => currentSlide(i);
    dots.appendChild(dot);
  }
  showSlides(slideIndex);
});

let slideIndex = 1;

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");

  let dots = document.getElementsByClassName("dot");
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
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
