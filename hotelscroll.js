document.addEventListener('DOMContentLoaded', function() {
    const scroller = document.querySelector('.hotel-scroller');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const hotelCards = document.querySelectorAll('.hotel-card');
    
    // Manual scrolling
    let currentPosition = 0;
    const cardWidth = hotelCards[0].offsetWidth + 32; // width + gap
    
    nextBtn.addEventListener('click', () => {
        currentPosition -= cardWidth;
        if (currentPosition < -(cardWidth * (hotelCards.length - 3))) {
            currentPosition = 0;
        }
        scroller.style.transform = `translateX(${currentPosition}px)`;
    });
    
    prevBtn.addEventListener('click', () => {
        currentPosition += cardWidth;
        if (currentPosition > 0) {
            currentPosition = -(cardWidth * (hotelCards.length - 3));
        }
        scroller.style.transform = `translateX(${currentPosition}px)`;
    });
    
    // Pause auto-scroll on hover
    scroller.addEventListener('mouseenter', () => {
        scroller.style.animationPlayState = 'paused';
    });
    
    scroller.addEventListener('mouseleave', () => {
        scroller.style.animationPlayState = 'running';
    });
});