"use strict";
window.addEventListener('DOMContentLoaded', () => {

    //! slider project
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
    if (slides.length > 1) {
        console.log(slides);
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
        });
    }

    //! slider 
    const fantasiesSlides = document.querySelectorAll('.item-fantasies-slider__slide'),
        fantasiesTabs = document.querySelectorAll('.item-fantasies-left__li');



    fantasiesTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            displaySlides(index);
            addClass(tab, 'active-slide');
        });
    });

    function displaySlides(n) {
        // 
        fantasiesTabs.forEach(element => {
            removeClass(element, 'active-slide');
        });

        fantasiesSlides.forEach(slide => {
            removeClass(slide, 'active-slide');
            removeClass(slide, 'big-slide');
            removeClass(slide, 'transformTranslate');
        });
        let slidesAmount;
        if (n == 0) {
            slidesAmount = 3;
            for (let i = 0; i < 4; i++) {
                addClass(fantasiesSlides[slidesAmount], 'active-slide');

                if (i % 2 > 0) {
                    addClass(fantasiesSlides[slidesAmount], 'big-slide');
                }
                if (i == 1 || i == 2) {
                    addClass(fantasiesSlides[slidesAmount], 'transformTranslate');
                }
                slidesAmount--;
            }
        } else if (n > 0) {
            slidesAmount = (n + 1) * 4 - 1;
            console.log(slidesAmount);
            for (let i = 0; i < 4; i++) {
                addClass(fantasiesSlides[slidesAmount], 'active-slide');
                if (i % 2 > 0) {
                    addClass(fantasiesSlides[slidesAmount], 'big-slide');
                }
                if (i == 1 || i == 2) {
                    addClass(fantasiesSlides[slidesAmount], 'transformTranslate');
                }
                console.log(window.getComputedStyle(fantasiesSlides[slidesAmount]));
                slidesAmount--;
            }
        }

    }

    function removeClass(element, className) {
        element.classList.remove(className);
    }
    function addClass(elem, className) {
        elem.classList.add(className);
    }


}); 