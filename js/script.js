window.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.item-project-slider__img'),
        tabs = document.querySelectorAll('.item-project-slide__tab'),
        bullets = document.querySelectorAll('.slider-controls__bullet'),
        prevBtn = document.querySelector('.slider-controls__prevBtn'),
        nextBtn = document.querySelector('.slider-controls__nextBtn');
    let slideIndex = 1;

    function showSlide(n) { // обрабатываем конечные значения
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach(slide => {
            slide.classList.add('disabled-img');
            slide.classList.remove('active-img');
        });
        tabs.forEach(tab => {
            tab.classList.remove('active-tab');
        });
        bullets.forEach(bullet => {
            bullet.classList.remove('active-bullet');
        });
        slides[slideIndex - 1].classList.remove('disabled-img');
        slides[slideIndex - 1].classList.add('active-img');
        tabs[slideIndex - 1].classList.add('active-tab');
        bullets[slideIndex - 1].classList.add('active-bullet');
    }

    function plusSlides(n) {
        showSlide(slideIndex += n);
    }
    function changeSlide(n) {
        slides.forEach(slide => {
            slide.classList.add('disabled-img');
            slide.classList.remove('active-img');
        });
        tabs.forEach(tab => {
            tab.classList.remove('active-tab');
        });
        bullets.forEach(bullet => {
            bullet.classList.remove('active-bullet');
        });
        slides[n].classList.remove('disabled-img');
        slides[n].classList.add('active-img');
        tabs[n].classList.add('active-tab');
        bullets[n].classList.add('active-bullet');
        slideIndex = n + 1;

    }
    prevBtn.addEventListener('click', () => {
        plusSlides(-1);
    });
    nextBtn.addEventListener('click', () => {
        plusSlides(1);
    });
    bullets.forEach((bullet, i) => {
        bullet.addEventListener('click', () => {
            changeSlide(i);
        });
    });
    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            changeSlide(i);

        });
    })


}); 