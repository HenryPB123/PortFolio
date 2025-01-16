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
  const imageCount = 8; // Number of images in the folder

  for (let i = 1; i <= imageCount; i++) {
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
