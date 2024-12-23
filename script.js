const images = [
    'https://via.placeholder.com/300.png?text=عکس+1',
    'https://via.placeholder.com/300.png?text=عکس+2',
    'https://via.placeholder.com/300.png?text=عکس+3',
];

let currentIndex = 0;

const imageElement = document.getElementById('image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateImage() {
    imageElement.src = images[currentIndex];
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage();
});

// بارگذاری عکس اولیه
updateImage();
