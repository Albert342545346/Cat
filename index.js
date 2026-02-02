const hamburgerBtn = document.getElementById('hamburger-btn');
const navbarMenu = document.getElementById('navbar-menu');

hamburgerBtn.addEventListener('click', () => {
    if (hamburgerBtn.classList.contains('disable')) {
        return;
    }
    
    hamburgerBtn.classList.toggle('active');
    
    if (navbarMenu.classList.contains('hidden')) {
        hamburgerBtn.classList.add('disable');
        navbarMenu.classList.remove('hidden');

        setTimeout(() => {
            navbarMenu.classList.add('active');
        }, 500);

        setTimeout(() => {
            hamburgerBtn.classList.remove('disable');
        }, 1000);
    } else {
        hamburgerBtn.classList.add('disable');
        navbarMenu.classList.remove('active');
        setTimeout(() => {
            navbarMenu.classList.add('hidden');
            hamburgerBtn.classList.remove('disable');
        }, 1000);
    }
});


// Боковое меню
const navProfile = document.getElementById('profile');
const profileSide = document.querySelector('.profile-side');

navProfile.addEventListener('click', () => {
    if (navProfile.classList.contains('disable')) {
        return;
    }
    
    if (profileSide.classList.contains('hidden')) {
        profileSide.classList.remove('hidden');
        navProfile.classList.add('disable');
        
        setTimeout(() => {
            profileSide.classList.add('active');
        }, 10);
        
        setTimeout(() => {
            navProfile.classList.remove('disable');
        }, 500);
    } else {
        profileSide.classList.remove('active');
        navProfile.classList.add('disable');
        
        setTimeout(() => {
            profileSide.classList.add('hidden');
            navProfile.classList.remove('disable');
        }, 500);
    }
});


// Появляющийся текст
const textToAnimate = document.getElementById('my-text').textContent;
const outputElement = document.getElementById('animated-text');

let charIndex = 0;
const typingSpeed = 30; // мс на символ

function typeWriter() {
    if (charIndex < textToAnimate.length) {
        outputElement.textContent += textToAnimate.charAt(charIndex);
        charIndex++;
        
        setTimeout(typeWriter, typingSpeed);
    }
}

// Запускаем при загрузке страницы
window.addEventListener('DOMContentLoaded', typeWriter);
document.head.appendChild(style);