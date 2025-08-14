const slides = document.querySelector(".slides");
const slideCount = document.querySelectorAll("section").length;
let currentIndex = 0;

// Elemento para mostrar numeração
const controls = document.querySelector(".controls");
const slideNumber = document.createElement("div");
slideNumber.className = "slide-number";
controls.appendChild(slideNumber);

// Atualiza slide e número
function updateSlide() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    slideNumber.textContent = `Slide ${currentIndex + 1} / ${slideCount}`;
}

document.getElementById("next").addEventListener("click", () => {
    if (currentIndex < slideCount - 1) {
        currentIndex++;
        updateSlide();
    }
});

document.getElementById("prev").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlide();
    }
});

// Inicializa
updateSlide();