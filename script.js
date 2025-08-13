document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slideIndicators = document.querySelector('.slide-indicators');
    let currentSlide = 0;
    
    // Criar indicadores de slide
    slides.forEach((slide, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('slide-indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        slideIndicators.appendChild(indicator);
    });
    
    // Mostrar slide atual
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
            slide.classList.toggle('active', i === index);
        });
        
        // Atualizar indicadores
        document.querySelectorAll('.slide-indicator').forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
        
        currentSlide = index;
    }
    
    // Navegar para slide específico
    function goToSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        showSlide(index);
    }
    
    // Event listeners para botões
    prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
    
    // Navegação por teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') goToSlide(currentSlide - 1);
        if (e.key === 'ArrowRight') goToSlide(currentSlide + 1);
    });
    
    // Swipe para dispositivos móveis
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});
    
    function handleSwipe() {
        const difference = touchStartX - touchEndX;
        if (difference > 50) goToSlide(currentSlide + 1); // Swipe para esquerda
        if (difference < -50) goToSlide(currentSlide - 1); // Swipe para direita
    }
    
    // Inicializar
    showSlide(0);
});
