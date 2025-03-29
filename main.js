const slides = document.querySelector('.slides');
const slidesCount = document.querySelectorAll('.slide').length;
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

const updateSlider = () => {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = currentIndex === slidesCount - 1 ? 'none' : 'block';
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
};

nextBtn.addEventListener('click', () => {
    if (currentIndex < slidesCount - 1) currentIndex++;
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) currentIndex--;
    updateSlider();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});

updateSlider();