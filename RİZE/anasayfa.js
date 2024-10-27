window.addEventListener('scroll', function() {
    const eagle = document.querySelector('.eagle');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    eagle.style.top = `${50 + scrollTop}px`; // İlk üst konumu ayarlayın
});
