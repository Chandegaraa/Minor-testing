document.addEventListener('DOMContentLoaded', () => {
    // Optimized carousel functionality
    const carouselImages = document.querySelectorAll('.book-carousel img');
    let currentIndex = 0;

    function showNextImage() {
        carouselImages[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselImages.length;
        carouselImages[currentIndex].classList.add('active');
    }

    // Reduced interval time for better performance
