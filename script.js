//active nav button.
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; 
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

//data checker and leave a message.
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            formMessage.textContent = `Thank you for your message, ${name}!`;
            formMessage.classList.remove('error');
            formMessage.classList.add('success');
        } else {
            formMessage.textContent = 'Please fill in all fields.';
            formMessage.classList.remove('success');
            formMessage.classList.add('error');
        }

        formMessage.style.display = 'block';
        form.reset();
    });
});

//slideshow with photos.
let currentIndex = 0;
const slideshowImage = document.getElementById("slideshow-image");

function changeImage() {
    slideshowImage.src = `./${images[currentIndex]}`;  
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; 
    changeImage();  
    resetTimer();  
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;  
    changeImage(); 
    resetTimer();  
}

let timer;
function resetTimer() {
    clearInterval(timer); 
    timer = setInterval(nextImage, 3000); 
}

changeImage();
resetTimer();
document.getElementById("next").addEventListener("click", nextImage); 
document.getElementById("prev").addEventListener("click", prevImage); 
